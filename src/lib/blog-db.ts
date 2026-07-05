import "server-only";

import { getPool, isDatabaseConfigured } from "@/lib/db";

export type PublicBlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  contentHtml: string;
  coverImage: string | null;
  publishedAt: string | null;
  updatedAt: string;
};

type BlogPostRow = {
  slug: string;
  title: string;
  meta_description: string;
  excerpt: string;
  content_html: string;
  cover_image: string | null;
  published_at: string | null;
  updated_at: string;
};

function mapRow(row: BlogPostRow): PublicBlogPost {
  return {
    slug: row.slug,
    title: row.title,
    metaDescription: row.meta_description,
    excerpt: row.excerpt,
    contentHtml: row.content_html,
    coverImage: row.cover_image,
    publishedAt: row.published_at,
    updatedAt: row.updated_at,
  };
}

export async function listPublishedBlogPosts(): Promise<PublicBlogPost[]> {
  if (!isDatabaseConfigured()) return [];
  try {
    const { rows } = await getPool().query<BlogPostRow>(
      `SELECT slug, title, meta_description, excerpt, content_html, cover_image,
              published_at::text AS published_at, updated_at::text AS updated_at
         FROM blog_posts
        WHERE published = true AND content_html <> ''
        ORDER BY published_at DESC NULLS LAST, updated_at DESC`,
    );
    return rows.map(mapRow);
  } catch (err) {
    console.error("[blog-db] listPublishedBlogPosts:", err);
    return [];
  }
}

export async function fetchPublishedBlogPost(
  slug: string,
): Promise<PublicBlogPost | null> {
  if (!isDatabaseConfigured()) return null;
  try {
    const { rows } = await getPool().query<BlogPostRow>(
      `SELECT slug, title, meta_description, excerpt, content_html, cover_image,
              published_at::text AS published_at, updated_at::text AS updated_at
         FROM blog_posts
        WHERE slug = $1 AND published = true AND content_html <> ''`,
      [slug],
    );
    return rows[0] ? mapRow(rows[0]) : null;
  } catch (err) {
    console.error(`[blog-db] fetchPublishedBlogPost(${slug}):`, err);
    return null;
  }
}

export async function listPublishedBlogSlugs(): Promise<string[]> {
  if (!isDatabaseConfigured()) return [];
  try {
    const { rows } = await getPool().query<{ slug: string }>(
      `SELECT slug FROM blog_posts WHERE published = true AND content_html <> ''`,
    );
    return rows.map((r) => r.slug);
  } catch {
    return [];
  }
}
