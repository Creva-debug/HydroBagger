"use client";

/** Publiczny identyfikator GA4 (ten sam co w GTM / strumieniu danych). */
export const GA4_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() || "G-KJ0ZJPP8K9";

/**
 * Wysyła page_view bezpośrednio przez gtag do GA4 po przyznaniu zgody analitycznej.
 * Uzupełnia tag GTM: bez tego hit często nie trafia do usługi GA4 (tylko do CCM/Ads).
 */
export function sendGa4PageView(): void {
  if (typeof window === "undefined") return;
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;

  gtag("config", GA4_MEASUREMENT_ID, {
    page_location: window.location.href,
    page_title: document.title,
    send_page_view: true,
  });
}
