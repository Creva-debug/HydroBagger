import type { MetadataRoute } from "next";
import { SEO_PAGES } from "@/lib/seo-pages";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hydrobagger.pl";

function normalizeBase(url: string) {
  return url.replace(/\/$/, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = normalizeBase(SITE);
  const lastModified = new Date();

  return Object.keys(SEO_PAGES).map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}
