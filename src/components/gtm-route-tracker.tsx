"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { hasAnalyticsConsent } from "@/lib/gtm/consent";
import { pushVirtualPageView } from "@/lib/gtm/data-layer";
import { sendGa4PageView } from "@/lib/gtm/ga4-pageview";
import { CONSENT_SAVED_EVENT } from "@/lib/cookie-consent";

/**
 * Przy nawigacji SPA: direct gtag page_view (GA4) + virtual_page_view (GTM/Ads).
 * Pierwszy page_view: inline gtag w head (cookie) lub sendGa4PageView po banerze.
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
    // sendGa4PageView po banerze wywołuje syncConsentState; tu tylko SPA nav.
    window.addEventListener(CONSENT_SAVED_EVENT, handleConsentSaved);
    return () => window.removeEventListener(CONSENT_SAVED_EVENT, handleConsentSaved);
  }, []);

  useEffect(() => {
    if (isFirstNavigation.current) {
      isFirstNavigation.current = false;
      return;
    }
    if (!hasAnalyticsConsent()) return;
    sendGa4PageView();
    pushVirtualPageView();
  }, [pathname, searchParams]);

  return null;
}
