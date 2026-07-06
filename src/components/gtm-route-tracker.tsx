"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { hasAnalyticsConsent } from "@/lib/gtm/consent";
import { pushVirtualPageView } from "@/lib/gtm/data-layer";
import { CONSENT_SAVED_EVENT } from "@/lib/cookie-consent";

/**
 * Wysyła virtual_page_view do GTM przy zmianie ścieżki (bez pełnego reloadu).
 * Pierwszy page_view: gtag w head (cookie) lub sendGa4PageView po akceptacji banera.
 */
export function GtmRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstNavigation = useRef(true);

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
