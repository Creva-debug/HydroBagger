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
