"use client";

import { GA4_MEASUREMENT_ID } from "@/lib/gtm/ga4-config";

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

/** Pełny hit GA4 po zgodzie analitycznej (nie polegamy na tagach GTM). */
export function sendGa4PageView(): void {
  const gtag = ensureGtag();
  if (!gtag) return;

  gtag("js", new Date());
  gtag("config", GA4_MEASUREMENT_ID, {
    page_location: window.location.href,
    page_title: document.title,
    send_page_view: true,
  });
}
