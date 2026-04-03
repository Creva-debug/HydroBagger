import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hydrobagger.pl";

function normalizeBase(url: string) {
  return url.replace(/\/$/, "");
}

export default function robots(): MetadataRoute.Robots {
  const base = normalizeBase(SITE);
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
    host: base.replace(/^https?:\/\//, ""),
  };
}
