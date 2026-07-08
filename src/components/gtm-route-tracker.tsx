"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { hasAnalyticsConsent } from "@/lib/gtm/consent";
import { sendGa4PageView } from "@/lib/gtm/ga4-pageview";

/**
 * Odsłona GA4 przy nawigacji SPA (Next.js App Router) - bezpośrednio przez gtag.
 * Pierwsza odsłona: sendGa4PageView po zgodzie (baner lub restore z cookie).
 * Nie pushujemy virtual_page_view - GA4 idzie z kodu, tag GTM tylko dublował.
 */
export function GtmRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstNavigation = useRef(true);

  useEffect(() => {
    if (isFirstNavigation.current) {
      isFirstNavigation.current = false;
      return;
    }
    if (!hasAnalyticsConsent()) return;
    sendGa4PageView();
  }, [pathname, searchParams]);

  return null;
}
