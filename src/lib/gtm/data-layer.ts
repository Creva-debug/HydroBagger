"use client";

import { hasAnalyticsConsent } from "@/lib/gtm/consent";

function pushDataLayer(payload: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
}

/** Pageview przy nawigacji SPA (Next.js App Router) - wymaga tagu GTM na virtual_page_view. */
export function pushVirtualPageView(): void {
  if (!hasAnalyticsConsent()) return;
  pushDataLayer({
    event: "virtual_page_view",
    page_location: window.location.href,
    page_title: document.title,
    page_referrer: document.referrer || undefined,
  });
}

/** Konwersja formularza do GA4/GAds przez GTM - wymaga tagu GTM na form_submit. */
export function pushFormSubmitEvent(metadata?: Record<string, unknown>): void {
  if (!hasAnalyticsConsent()) return;
  pushDataLayer({
    event: "form_submit",
    page_location: window.location.href,
    page_title: document.title,
    ...metadata,
  });
}
