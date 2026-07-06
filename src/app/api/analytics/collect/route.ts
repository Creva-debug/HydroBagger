import { NextRequest, NextResponse } from "next/server";
import { recordAnalyticsEvent, type CollectPayload } from "@/lib/analytics/collect";
import { geoFromHeaders } from "@/lib/analytics/enrich";
import { CONSENT_COOKIE, type ConsentState } from "@/lib/cookie-consent";

export const runtime = "nodejs";

function readAnalyticsConsent(req: NextRequest): boolean {
  const raw = req.cookies.get(CONSENT_COOKIE)?.value;
  if (!raw) return false;
  try {
    const parsed = JSON.parse(decodeURIComponent(raw)) as ConsentState;
    return parsed.v === 1 && parsed.analytics === true;
  } catch {
    return false;
  }
}

/**
 * Endpoint zbierający zdarzenia własnej analityki (patrz
 * src/lib/analytics/analytics-provider.tsx). Odpowiada zawsze szybko i bez
 * treści - klient (navigator.sendBeacon) nie czeka na odpowiedź.
 */
export async function POST(req: NextRequest) {
  let payload: CollectPayload;
  try {
    payload = await req.json();
  } catch {
    return new NextResponse(null, { status: 400 });
  }

  const userAgent = req.headers.get("user-agent") ?? "";
  const geo = geoFromHeaders(req.headers);
  const hasAnalyticsConsent = readAnalyticsConsent(req);

  // "Best-effort" - błąd zapisu analityki nigdy nie może wpłynąć na działanie strony.
  recordAnalyticsEvent(payload, userAgent, geo, hasAnalyticsConsent).catch(() => {});

  return new NextResponse(null, { status: 204 });
}
