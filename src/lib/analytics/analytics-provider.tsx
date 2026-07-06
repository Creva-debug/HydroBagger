"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { CONSENT_SAVED_EVENT } from "@/lib/cookie-consent";
import { resolveSessionIdentity } from "@/lib/analytics/identifiers";
import { hasAnalyticsConsent } from "@/lib/gtm/consent";
import { pushFormSubmitEvent } from "@/lib/gtm/data-layer";

const COLLECT_ENDPOINT = "/api/analytics/collect";

export type AnalyticsEventType = "pageview" | "cta_click" | "form_submit";

import { shouldSkipClientAnalytics } from "@/lib/analytics/internal-traffic";

function sendEvent(eventType: AnalyticsEventType, pagePath: string, metadata?: Record<string, unknown>) {
  if (shouldSkipClientAnalytics()) return;

  const consent = hasAnalyticsConsent();
  const identity = resolveSessionIdentity(consent);
  const search = typeof window !== "undefined" ? window.location.search : "";
  const params = new URLSearchParams(search);
  const landingQuery = search.startsWith("?") ? search.slice(1) : search;

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
    utmContent: identity.isNewSession ? params.get("utm_content") ?? "" : undefined,
    utmTerm: identity.isNewSession ? params.get("utm_term") ?? "" : undefined,
    landingQuery: identity.isNewSession ? landingQuery : undefined,
    metadata: metadata ?? {},
  };

  const body = JSON.stringify(payload);

  if (eventType === "form_submit") {
    pushFormSubmitEvent(metadata);
  }

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
 * Montowany raz w layoucie. Wysyła pageview przy każdej zmianie ścieżki
 * (także bez zgody - tryb anon). Po włączeniu analityki w banerze cookies
 * wysyła kolejny pageview z pełnym visitor_id.
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
  }, [pathname, searchParams]);

  return null;
}
