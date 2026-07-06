import "server-only";

import type { SessionGeo } from "@/lib/analytics/enrich";
import { getPool, isDatabaseConfigured } from "@/lib/db";

const MAX_TEXT_LENGTH = 300;
const MAX_METADATA_BYTES = 2000;

const EVENT_TYPES = new Set(["pageview", "cta_click", "form_submit"]);

const BOT_UA_PATTERN =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|headless|curl|wget|python-requests|axios|node-fetch|postman|monitor|pingdom|uptime/i;

export type CollectPayload = {
  visitorId: string;
  isNewVisitor: boolean;
  sessionId: string;
  isNewSession: boolean;
  eventType: string;
  pagePath: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  metadata?: unknown;
};

function truncate(value: string | undefined | null, max = MAX_TEXT_LENGTH): string {
  if (!value) return "";
  return value.slice(0, max);
}

function isValidId(value: unknown): value is string {
  return typeof value === "string" && value.length > 0 && value.length <= 64;
}

function safeHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function safeMetadata(raw: unknown): Record<string, unknown> {
  if (!raw || typeof raw !== "object") return {};
  try {
    const json = JSON.stringify(raw);
    if (json.length > MAX_METADATA_BYTES) return {};
    return raw as Record<string, unknown>;
  } catch {
    return {};
  }
}

function detectDeviceType(userAgent: string): "desktop" | "mobile" | "tablet" | "unknown" {
  if (!userAgent) return "unknown";
  if (/ipad|tablet(?!.*mobile)/i.test(userAgent)) return "tablet";
  if (/mobi|android|iphone/i.test(userAgent)) return "mobile";
  return "desktop";
}

function detectBrowser(userAgent: string): string {
  if (!userAgent) return "";
  if (/edg\//i.test(userAgent)) return "Edge";
  if (/opr\/|opera/i.test(userAgent)) return "Opera";
  if (/chrome|crios/i.test(userAgent) && !/edg\//i.test(userAgent)) return "Chrome";
  if (/firefox|fxios/i.test(userAgent)) return "Firefox";
  if (/safari/i.test(userAgent) && !/chrome|crios|android/i.test(userAgent)) return "Safari";
  return "Inne";
}

const SEARCH_ENGINES = ["google", "bing", "duckduckgo", "yahoo", "yandex", "baidu", "ecosia"];
const SOCIAL_HOSTS = [
  "facebook",
  "instagram",
  "tiktok",
  "linkedin",
  "twitter",
  "x.com",
  "t.co",
  "pinterest",
  "youtube",
];

/** Klasyfikacja źródła ruchu ("Google/organic", "facebook.com/social", "(direct)/none"...). */
function classifyTraffic(
  referrer: string,
  utmSource: string,
  utmMedium: string,
): { source: string; medium: string } {
  if (utmSource) {
    return { source: truncate(utmSource, 100), medium: truncate(utmMedium, 100) || "campaign" };
  }
  if (!referrer) {
    return { source: "(direct)", medium: "none" };
  }
  const host = safeHostname(referrer);
  if (!host) return { source: "(direct)", medium: "none" };
  if (host.includes("hydrobagger.pl")) return { source: "(direct)", medium: "none" };
  if (SEARCH_ENGINES.some((engine) => host.includes(engine))) {
    return { source: host, medium: "organic" };
  }
  if (SOCIAL_HOSTS.some((social) => host.includes(social))) {
    return { source: host, medium: "social" };
  }
  return { source: host, medium: "referral" };
}

export function isBotUserAgent(userAgent: string): boolean {
  return BOT_UA_PATTERN.test(userAgent);
}

/**
 * Zapisuje zdarzenie analityczne: upsert odwiedzającego, upsert/aktualizacja
 * sesji, insert zdarzenia oraz aktualizacja dziennych rollupów - wszystko
 * w jednej transakcji, żeby dashboard w panelu mógł czytać tylko z małych,
 * prekalkulowanych tabel (analytics_daily_*) zamiast liczyć wszystko na
 * żywo z surowych zdarzeń.
 */
export async function recordAnalyticsEvent(
  payload: CollectPayload,
  userAgent: string,
  geo: SessionGeo = { country: null, region: null, city: null },
): Promise<void> {
  if (!isDatabaseConfigured()) return;
  if (!isValidId(payload.visitorId) || !isValidId(payload.sessionId)) return;
  if (typeof payload.eventType !== "string" || !EVENT_TYPES.has(payload.eventType)) return;
  if (isBotUserAgent(userAgent)) return;

  const visitorId = payload.visitorId;
  const sessionId = payload.sessionId;
  const isNewVisitor = payload.isNewVisitor === true;
  const isNewSession = payload.isNewSession === true;
  const eventType = payload.eventType;
  const pagePath = truncate(payload.pagePath, 500) || "/";
  const referrer = truncate(payload.referrer);
  const referrerHost = referrer ? safeHostname(referrer) : "";
  const utmSource = truncate(payload.utmSource, 100);
  const utmMedium = truncate(payload.utmMedium, 100);
  const utmCampaign = truncate(payload.utmCampaign, 100);
  const metadata = safeMetadata(payload.metadata);
  const deviceType = detectDeviceType(userAgent);
  const browser = detectBrowser(userAgent);
  const { source, medium } = classifyTraffic(referrer, utmSource, utmMedium);
  const isPageview = eventType === "pageview";

  const client = await getPool().connect();
  try {
    await client.query("BEGIN");

    if (isNewVisitor) {
      await client.query(
        `INSERT INTO analytics_visitors
           (visitor_id, first_landing_page, first_referrer, first_referrer_host,
            first_utm_source, first_utm_medium, first_utm_campaign, device_type)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
         ON CONFLICT (visitor_id) DO UPDATE SET last_seen_at = now()`,
        [visitorId, pagePath, referrer, referrerHost, utmSource, utmMedium, utmCampaign, deviceType],
      );
    } else {
      const { rowCount } = await client.query(
        `UPDATE analytics_visitors SET last_seen_at = now() WHERE visitor_id = $1`,
        [visitorId],
      );
      if (rowCount === 0) {
        await client.query(
          `INSERT INTO analytics_visitors
             (visitor_id, first_landing_page, first_referrer, first_referrer_host,
              first_utm_source, first_utm_medium, first_utm_campaign, device_type)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
           ON CONFLICT (visitor_id) DO NOTHING`,
          [visitorId, pagePath, referrer, referrerHost, utmSource, utmMedium, utmCampaign, deviceType],
        );
      }
    }

    if (isNewSession) {
      const { rowCount } = await client.query(
        `INSERT INTO analytics_sessions
           (session_id, visitor_id, landing_page, referrer, referrer_host, source, medium,
            utm_source, utm_medium, utm_campaign, device_type, browser, page_view_count, is_bounce,
            country, region, city)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, true, $14, $15, $16)
         ON CONFLICT (session_id) DO NOTHING`,
        [
          sessionId,
          visitorId,
          pagePath,
          referrer,
          referrerHost,
          source,
          medium,
          utmSource,
          utmMedium,
          utmCampaign,
          deviceType,
          browser,
          isPageview ? 1 : 0,
          geo.country,
          geo.region,
          geo.city,
        ],
      );
      if (rowCount && rowCount > 0) {
        await client.query(
          `UPDATE analytics_visitors SET session_count = session_count + 1 WHERE visitor_id = $1`,
          [visitorId],
        );
        await client.query(
          `INSERT INTO analytics_daily_totals (day, new_visitors, sessions, bounced_sessions)
           VALUES (current_date, $1, 1, 1)
           ON CONFLICT (day) DO UPDATE SET
             new_visitors = analytics_daily_totals.new_visitors + $1,
             sessions = analytics_daily_totals.sessions + 1,
             bounced_sessions = analytics_daily_totals.bounced_sessions + 1`,
          [isNewVisitor ? 1 : 0],
        );
        await client.query(
          `INSERT INTO analytics_daily_referrer_stats (day, source, medium, sessions)
           VALUES (current_date, $1, $2, 1)
           ON CONFLICT (day, source, medium) DO UPDATE SET
             sessions = analytics_daily_referrer_stats.sessions + 1`,
          [source, medium],
        );
      }
    } else {
      const { rows } = await client.query<{ started_at: string }>(
        `UPDATE analytics_sessions
         SET ended_at = now(),
             exit_page = $2,
             duration_seconds = GREATEST(duration_seconds, EXTRACT(EPOCH FROM (now() - started_at))::int),
             page_view_count = page_view_count + $3,
             is_bounce = false
         WHERE session_id = $1 AND is_bounce = true
         RETURNING started_at`,
        [sessionId, pagePath, isPageview ? 1 : 0],
      );
      if (rows.length > 0) {
        // Sesja właśnie przestała być odbiciem (bounce) - korygujemy licznik dzienny
        // dla dnia, w którym sesja się zaczęła (mogła zacząć się poprzedniego dnia).
        await client.query(
          `UPDATE analytics_daily_totals
           SET bounced_sessions = GREATEST(bounced_sessions - 1, 0)
           WHERE day = $1::timestamptz::date`,
          [rows[0].started_at],
        );
      } else {
        await client.query(
          `UPDATE analytics_sessions
           SET ended_at = now(),
               exit_page = $2,
               duration_seconds = EXTRACT(EPOCH FROM (now() - started_at))::int,
               page_view_count = page_view_count + $3
           WHERE session_id = $1`,
          [sessionId, pagePath, isPageview ? 1 : 0],
        );
      }
    }

    await client.query(
      `INSERT INTO analytics_events (session_id, visitor_id, event_type, page_path, metadata)
       VALUES ($1, $2, $3, $4, $5)`,
      [sessionId, visitorId, eventType, pagePath, JSON.stringify(metadata)],
    );

    if (isPageview) {
      await client.query(
        `INSERT INTO analytics_daily_totals (day, pageviews)
         VALUES (current_date, 1)
         ON CONFLICT (day) DO UPDATE SET pageviews = analytics_daily_totals.pageviews + 1`,
      );
      await client.query(
        `INSERT INTO analytics_daily_page_stats (day, page_path, pageviews)
         VALUES (current_date, $1, 1)
         ON CONFLICT (day, page_path) DO UPDATE SET
           pageviews = analytics_daily_page_stats.pageviews + 1`,
        [pagePath],
      );
    }

    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("[analytics] Błąd zapisu zdarzenia:", err);
  } finally {
    client.release();
  }
}
