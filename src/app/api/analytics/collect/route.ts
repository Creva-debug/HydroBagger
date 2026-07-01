import { NextRequest, NextResponse } from "next/server";
import { recordAnalyticsEvent, type CollectPayload } from "@/lib/analytics/collect";

export const runtime = "nodejs";

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

  // "Best-effort" - błąd zapisu analityki nigdy nie może wpłynąć na działanie strony.
  recordAnalyticsEvent(payload, userAgent).catch(() => {});

  return new NextResponse(null, { status: 204 });
}
