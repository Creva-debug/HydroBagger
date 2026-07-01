import "server-only";

import { getPool, isDatabaseConfigured } from "@/lib/db";

export type SeoOverride = {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  ogImage: string | null;
};

type SeoPageRow = {
  meta_title: string;
  meta_description: string;
  keywords: string;
  og_image: string | null;
};

/**
 * Nadpisania SEO wprowadzone w panelu (mngmt.hydrobagger.pl → zakładka „SEO").
 * Odczyt jest odporny na błędy — brak wiersza lub problem z bazą nie może
 * zepsuć renderowania strony, tylko cofa nas do wartości domyślnych z kodu.
 */
export async function fetchSeoOverride(path: string): Promise<SeoOverride | null> {
  if (!isDatabaseConfigured()) return null;
  try {
    const { rows } = await getPool().query<SeoPageRow>(
      `SELECT meta_title, meta_description, keywords, og_image
         FROM seo_pages
        WHERE path = $1`,
      [path],
    );
    const row = rows[0];
    if (!row) return null;
    return {
      metaTitle: row.meta_title ?? "",
      metaDescription: row.meta_description ?? "",
      keywords: row.keywords ?? "",
      ogImage: row.og_image ?? null,
    };
  } catch (err) {
    console.error(`[seo-db] Błąd odczytu SEO dla ${path}:`, err);
    return null;
  }
}
