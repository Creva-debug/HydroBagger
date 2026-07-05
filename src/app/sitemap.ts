import type { MetadataRoute } from "next";
import { listPublishedBlogPosts } from "@/lib/blog-db";
import { SEO_PAGES } from "@/lib/seo-pages";
import { getSiteOrigin } from "@/lib/site-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteOrigin();
  const staticPages = Object.keys(SEO_PAGES).map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const posts = await listPublishedBlogPosts();
  const blogPages = posts.map((post) => ({
    url: `${base}/baza-wiedzy/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(post.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
