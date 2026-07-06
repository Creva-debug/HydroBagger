"use client";

import { CONSENT_COOKIE, type ConsentState } from "@/lib/cookie-consent";
import { sendGa4PageView } from "@/lib/gtm/ga4-pageview";

export function readStoredConsent(): ConsentState | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CONSENT_COOKIE}=`));
  if (!match) return null;
  try {
    const decoded = decodeURIComponent(match.split("=").slice(1).join("="));
    const parsed = JSON.parse(decoded);
    if (parsed && parsed.v === 1 && typeof parsed.analytics === "boolean") {
      return parsed as ConsentState;
    }
  } catch {
    /* corrupted cookie */
  }
  return null;
}

export function hasAnalyticsConsent(): boolean {
  return readStoredConsent()?.analytics === true;
}

export function hasMarketingConsent(): boolean {
  return readStoredConsent()?.marketing === true;
}

function ensureGtag(): ((...args: unknown[]) => void) | null {
  if (typeof window === "undefined") return null;
  if (typeof window.gtag === "function") return window.gtag;
  if (Array.isArray(window.dataLayer)) {
    const gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments as unknown as Record<string, unknown>);
    };
    window.gtag = gtag;
    return gtag;
  }
  return null;
}

type ConsentSyncOptions = {
  /**
   * Push consent_*_granted do dataLayer (tylko akcja użytkownika w banerze).
   * Przy restore z cookie layout.tsx już ustawił gtag przed GTM - bez eventów GTM.
   */
  pushGtmEvents?: boolean;
};

/** Synchronizuje stan zgody z gtag i opcjonalnie triggeruje tagi GTM. */
export function syncConsentState(consent: ConsentState, options: ConsentSyncOptions = {}): void {
  const pushGtmEvents = options.pushGtmEvents === true;
  const gtag = ensureGtag();
  if (!gtag) return;

  const analyticsGranted = consent.analytics;
  const marketingGranted = consent.marketing;

  gtag("consent", "update", {
    ad_storage: marketingGranted ? "granted" : "denied",
    ad_user_data: marketingGranted ? "granted" : "denied",
    ad_personalization: marketingGranted ? "granted" : "denied",
    analytics_storage: analyticsGranted ? "granted" : "denied",
    security_storage: "granted",
    ads_data_redaction: !marketingGranted,
  });

  if (!pushGtmEvents || !window.dataLayer) return;

  window.dataLayer.push({
    event: "consent_update",
    analytics_storage: analyticsGranted ? "granted" : "denied",
    ad_storage: marketingGranted ? "granted" : "denied",
  });
  if (analyticsGranted) {
    window.dataLayer.push({ event: "consent_analytics_granted" });
    sendGa4PageView();
  }
  if (marketingGranted) {
    window.dataLayer.push({ event: "consent_marketing_granted" });
  }
}
