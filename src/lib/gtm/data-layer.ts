"use client";

import { hasAnalyticsConsent } from "@/lib/gtm/consent";
import { sendGa4FormSubmit } from "@/lib/gtm/ga4-pageview";

function pushDataLayer(payload: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
}

/** Konwersja formularza: direct gtag (GA4) + dataLayer (GTM/Ads). */
export function pushFormSubmitEvent(metadata?: Record<string, unknown>): void {
  if (!hasAnalyticsConsent()) return;
  pushDataLayer({
    event: "form_submit",
    page_location: window.location.href,
    page_title: document.title,
    ...metadata,
  });
  sendGa4FormSubmit(metadata);
}
