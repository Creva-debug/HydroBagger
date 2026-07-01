"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { CONSENT_COOKIE, CONSENT_SAVED_EVENT } from "@/lib/cookie-consent";
import { resolveSessionIdentity } from "@/lib/analytics/identifiers";

const COLLECT_ENDPOINT = "/api/analytics/collect";

export type AnalyticsEventType = "pageview" | "cta_click" | "form_submit";

function hasAnalyticsConsent(): boolean {
  if (typeof document === "undefined") return false;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CONSENT_COOKIE}=`));
  if (!match) return false;
  try {
    const decoded = decodeURIComponent(match.split("=").slice(1).join("="));
    const parsed = JSON.parse(decoded);
    return parsed?.analytics === true;
  } catch {
    return false;
  }
}

function sendEvent(eventType: AnalyticsEventType, pagePath: string, metadata?: Record<string, unknown>) {
  if (!hasAnalyticsConsent()) return;

  const identity = resolveSessionIdentity();
  const search = typeof window !== "undefined" ? window.location.search : "";
  const params = new URLSearchParams(search);

  const payload = {
    visitorId: identity.visitorId,
    isNewVisitor: identity.isNewVisitor,
    sessionId: identity.sessionId,
    isNewSession: identity.isNewSession,
    eventType,
    pagePath,
    referrer: identity.isNewSession ? document.referrer || "" : undefined,
    utmSource: identity.isNewSession ? params.get("utm_source") ?? "" : undefined,
    utmMedium: identity.isNewSession ? params.get("utm_medium") ?? "" : undefined,
    utmCampaign: identity.isNewSession ? params.get("utm_campaign") ?? "" : undefined,
    metadata: metadata ?? {},
  };

  const body = JSON.stringify(payload);

  if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
    const blob = new Blob([body], { type: "application/json" });
    const queued = navigator.sendBeacon(COLLECT_ENDPOINT, blob);
    if (queued) return;
  }

  fetch(COLLECT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    /* najlepszy wysiłek - błąd sieci nie może wpłynąć na działanie strony */
  });
}

/** Do wywołania z komponentów (np. po sukcesie formularza lub kliknięciu CTA). */
export function trackEvent(eventType: "cta_click" | "form_submit", metadata?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  sendEvent(eventType, window.location.pathname, metadata);
}

/**
 * Montowany raz w layoucie. Wysyła pageview przy każdej zmianie ścieżki oraz
 * (bez przeładowania strony) w momencie, gdy użytkownik dopiero co włączył
 * zgodę na analitykę w banerze cookies.
 */
export function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleConsentSaved = () => {
      if (hasAnalyticsConsent()) {
        sendEvent("pageview", window.location.pathname);
      }
    };
    window.addEventListener(CONSENT_SAVED_EVENT, handleConsentSaved);
    return () => window.removeEventListener(CONSENT_SAVED_EVENT, handleConsentSaved);
  }, []);

  useEffect(() => {
    const search = searchParams.toString();
    const path = search ? `${pathname}?${search}` : pathname;
    sendEvent("pageview", path);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return null;
}
