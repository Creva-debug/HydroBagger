// Klasyfikacja zrodel wejscia (atrybucja). Port z wabne - dziala po stronie serwera.

export type Utm = {
  source?: string | null;
  medium?: string | null;
  campaign?: string | null;
  content?: string | null;
  term?: string | null;
  id?: string | null;
};

export type Channel =
  | "direct"
  | "paid_search"
  | "organic_search"
  | "paid_social"
  | "organic_social"
  | "display"
  | "video"
  | "email"
  | "affiliate"
  | "referral"
  | "other";

export type Acquisition = {
  source: string;
  medium: string;
  channel: Channel;
  adPlatform: string | null;
  isPaid: boolean;
};

const CLICK_ID_PARAMS: { param: string; platform: string; paidSearch?: boolean }[] = [
  { param: "gclid", platform: "google", paidSearch: true },
  { param: "gbraid", platform: "google", paidSearch: true },
  { param: "wbraid", platform: "google", paidSearch: true },
  { param: "dclid", platform: "google_display" },
  { param: "msclkid", platform: "microsoft", paidSearch: true },
  { param: "fbclid", platform: "meta" },
  { param: "igshid", platform: "instagram" },
  { param: "ttclid", platform: "tiktok" },
  { param: "twclid", platform: "twitter" },
  { param: "li_fat_id", platform: "linkedin" },
  { param: "epik", platform: "pinterest" },
  { param: "sccid", platform: "snapchat" },
  { param: "ScCid", platform: "snapchat" },
];

export function extractClickIds(query: string | null | undefined): Record<string, string> {
  if (!query) return {};
  const sp = new URLSearchParams(query.startsWith("?") ? query.slice(1) : query);
  const out: Record<string, string> = {};
  for (const { param } of CLICK_ID_PARAMS) {
    const v = sp.get(param);
    if (v) out[param] = v;
  }
  return out;
}

function platformFromClickIds(clickIds: Record<string, string>): { platform: string; paidSearch: boolean } | null {
  for (const { param, platform, paidSearch } of CLICK_ID_PARAMS) {
    if (clickIds[param]) return { platform, paidSearch: Boolean(paidSearch) };
  }
  return null;
}

const SEARCH_DOMAINS = /(^|\.)(google|bing|duckduckgo|yahoo|yandex|ecosia|baidu|search\.brave)\./i;
const SOCIAL_DOMAINS =
  /(^|\.)(facebook|fb|instagram|l\.instagram|threads|t\.co|twitter|x|linkedin|lnkd|pinterest|reddit|snapchat|tiktok)\.|(^|\.)(fb|lm|l|m)\.facebook\./i;
const VIDEO_DOMAINS = /(^|\.)(youtube|youtu\.be|vimeo)\./i;

function matchesDomain(domain: string, candidates: string[]): boolean {
  return candidates.some((candidate) => domain === candidate || domain.endsWith(`.${candidate}`));
}

function domainToPlatform(domain: string): string | null {
  const d = domain.toLowerCase();
  if (matchesDomain(d, ["facebook.com", "fb.com", "l.facebook.com", "lm.facebook.com", "m.facebook.com"])) return "meta";
  if (matchesDomain(d, ["instagram.com", "l.instagram.com"])) return "instagram";
  if (matchesDomain(d, ["t.co", "twitter.com", "x.com"])) return "twitter";
  if (matchesDomain(d, ["linkedin.com", "lnkd.in"])) return "linkedin";
  if (matchesDomain(d, ["tiktok.com"])) return "tiktok";
  if (matchesDomain(d, ["pinterest.com", "pin.it"])) return "pinterest";
  if (matchesDomain(d, ["youtube.com", "youtu.be"])) return "youtube";
  if (/(^|\.)google\./.test(d)) return "google";
  if (/(^|\.)bing\./.test(d)) return "microsoft";
  return null;
}

function isPaidMedium(medium: string): boolean {
  return /^(cpc|ppc|paid|paidsearch|paid_search|paid_social|paidsocial|cpm|cpv|display|banner|retargeting|remarketing|ads?)$/i.test(
    medium,
  );
}

function channelFromMedium(medium: string, platform: string | null): Channel | null {
  const m = medium.toLowerCase();
  if (/email|newsletter/.test(m)) return "email";
  if (/affiliate/.test(m)) return "affiliate";
  if (/(display|banner|cpm)/.test(m)) return "display";
  if (/(cpv|video)/.test(m)) return "video";
  if (isPaidMedium(m)) {
    if (platform === "google_display") return "display";
    if (platform === "google" || platform === "microsoft") return "paid_search";
    if (platform) return "paid_social";
    if (/social/.test(m)) return "paid_social";
    return "paid_search";
  }
  if (/(organic|seo)/.test(m)) return "organic_search";
  if (/(social)/.test(m)) return "organic_social";
  if (/referr?al/.test(m)) return "referral";
  return null;
}

export function classifyAcquisition(input: {
  utm?: Utm | null;
  clickIds?: Record<string, string> | null;
  referrerDomain?: string | null;
}): Acquisition {
  const utm = input.utm ?? {};
  const clickIds = input.clickIds ?? {};
  const referrerDomain = input.referrerDomain ?? null;

  const clickHit = platformFromClickIds(clickIds);
  const hasClickId = clickHit !== null;

  if (utm.source || utm.medium) {
    const source = (utm.source || referrerDomain || (hasClickId ? clickHit!.platform : "unknown")).toLowerCase();
    const medium = (utm.medium || (hasClickId ? "cpc" : "referral")).toLowerCase();
    const platform = hasClickId ? clickHit!.platform : domainToPlatform(source);
    const channel = channelFromMedium(medium, platform) ?? (hasClickId ? "paid_social" : "referral");
    const isPaid = isPaidMedium(medium) || hasClickId;
    return {
      source,
      medium,
      channel,
      adPlatform: isPaid ? platform : null,
      isPaid,
    };
  }

  if (hasClickId) {
    const platform = clickHit!.platform;
    const channel: Channel = clickHit!.paidSearch
      ? "paid_search"
      : platform === "google_display"
        ? "display"
        : "paid_social";
    return {
      source: platform,
      medium: channel === "paid_search" ? "cpc" : channel === "display" ? "display" : "paid_social",
      channel,
      adPlatform: platform,
      isPaid: true,
    };
  }

  if (referrerDomain) {
    const platform = domainToPlatform(referrerDomain);
    if (VIDEO_DOMAINS.test(referrerDomain)) {
      return { source: platform || referrerDomain, medium: "organic", channel: "video", adPlatform: null, isPaid: false };
    }
    if (SEARCH_DOMAINS.test(referrerDomain)) {
      return {
        source: platform || referrerDomain,
        medium: "organic",
        channel: "organic_search",
        adPlatform: null,
        isPaid: false,
      };
    }
    if (SOCIAL_DOMAINS.test(referrerDomain)) {
      return {
        source: platform || referrerDomain,
        medium: "social",
        channel: "organic_social",
        adPlatform: null,
        isPaid: false,
      };
    }
    return { source: referrerDomain, medium: "referral", channel: "referral", adPlatform: null, isPaid: false };
  }

  return { source: "direct", medium: "none", channel: "direct", adPlatform: null, isPaid: false };
}
