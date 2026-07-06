import "server-only";

export type SessionGeo = {
  country: string | null;
  region: string | null;
  city: string | null;
};

/** Geo z nagłówków Cloudflare / Vercel Edge (jak w wabne). */
export function geoFromHeaders(headers: Headers): SessionGeo {
  const cityRaw = headers.get("x-vercel-ip-city");
  return {
    country: headers.get("cf-ipcountry") ?? headers.get("x-vercel-ip-country") ?? null,
    region: headers.get("x-vercel-ip-country-region") ?? null,
    city: cityRaw ? decodeURIComponent(cityRaw) : null,
  };
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
