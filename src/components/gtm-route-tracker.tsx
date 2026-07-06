"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { hasAnalyticsConsent } from "@/lib/gtm/consent";
import { sendGa4PageView } from "@/lib/gtm/ga4-pageview";
import { pushVirtualPageView } from "@/lib/gtm/data-layer";
import { CONSENT_SAVED_EVENT } from "@/lib/cookie-consent";

/**
 * Wysyła virtual_page_view do GTM przy zmianie ścieżki (bez pełnego reloadu).
 * Pierwsze załadowanie obsługuje GA4 Base lub tag page_view po zgodzie.
 */
export function GtmRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstNavigation = useRef(true);
  const sentInitialGa4PageView = useRef(false);

  useEffect(() => {
    if (sentInitialGa4PageView.current || !hasAnalyticsConsent()) return;
    sentInitialGa4PageView.current = true;
    // Powrót z zapisaną zgodą: brak consent_analytics_granted w dataLayer, więc GA4 page_view z gtag.
    window.setTimeout(() => sendGa4PageView(), 300);
  }, []);

  useEffect(() => {
    const handleConsentSaved = () => {
      if (hasAnalyticsConsent()) {
        pushVirtualPageView();
      }
    };
    window.addEventListener(CONSENT_SAVED_EVENT, handleConsentSaved);
    return () => window.removeEventListener(CONSENT_SAVED_EVENT, handleConsentSaved);
  }, []);

  useEffect(() => {
    if (isFirstNavigation.current) {
      isFirstNavigation.current = false;
      return;
    }
    if (!hasAnalyticsConsent()) return;
    pushVirtualPageView();
  }, [pathname, searchParams]);

  return null;
}
