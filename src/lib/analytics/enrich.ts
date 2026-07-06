import "server-only";

import geoip from "geoip-lite";

export type SessionGeo = {
  country: string | null;
  region: string | null;
  city: string | null;
};

const INVALID_COUNTRY_CODES = new Set(["", "XX", "T1"]);

/** Adres IP odwiedzającego (Cloudflare, nginx, proxy). */
export function clientIpFromHeaders(headers: Headers): string | null {
  const cfIp = headers.get("cf-connecting-ip");
  if (cfIp?.trim()) return cfIp.trim();

  const realIp = headers.get("x-real-ip");
  if (realIp?.trim()) return realIp.trim();

  const xff = headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }

  return null;
}

function normalizeCountryCode(value: string | null): string | null {
  if (!value) return null;
  const code = value.trim().toUpperCase();
  if (INVALID_COUNTRY_CODES.has(code)) return null;
  return code;
}

function headerCountry(headers: Headers): string | null {
  return normalizeCountryCode(
    headers.get("cf-ipcountry") ??
      headers.get("x-vercel-ip-country") ??
      headers.get("cdn-requestcountrycode") ??
      headers.get("CDN-RequestCountryCode"),
  );
}

function geoFromIp(ip: string): SessionGeo {
  const lookup = geoip.lookup(ip);
  if (!lookup) {
    return { country: null, region: null, city: null };
  }
  return {
    country: normalizeCountryCode(lookup.country),
    region: lookup.region?.trim() || null,
    city: lookup.city?.trim() || null,
  };
}

/**
 * Geo z nagłówków CDN (Cloudflare / Vercel / Bunny) z fallbackiem GeoIP po IP klienta.
 * hydrobagger.pl na VPS przekazuje X-Real-IP przez nginx - bez tego fallbacku kraj bywa pusty.
 */
export function geoFromHeaders(headers: Headers): SessionGeo {
  const cityRaw = headers.get("x-vercel-ip-city");
  let country = headerCountry(headers);
  let region = headers.get("x-vercel-ip-country-region")?.trim() || null;
  let city = cityRaw ? decodeURIComponent(cityRaw).trim() : null;

  if (!country || !region || !city) {
    const ip = clientIpFromHeaders(headers);
    if (ip) {
      const fromIp = geoFromIp(ip);
      country = country ?? fromIp.country;
      region = region ?? fromIp.region;
      city = city ?? fromIp.city;
    }
  }

  return { country, region, city };
}

const OS_PATTERNS: [RegExp, string][] = [
  [/Windows NT 10/, "Windows 10+"],
  [/Windows NT/, "Windows"],
  [/Mac OS X/, "macOS"],
  [/Android/, "Android"],
  [/iPhone|iPad|iPod/, "iOS"],
  [/Linux/, "Linux"],
  [/CrOS/, "Chrome OS"],
];

export function parseOs(userAgent: string): string {
  if (!userAgent) return "";
  for (const [re, name] of OS_PATTERNS) {
    if (re.test(userAgent)) return name;
  }
  return "";
}
