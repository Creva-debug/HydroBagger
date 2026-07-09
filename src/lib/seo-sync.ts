import "server-only";

import { getPool, isDatabaseConfigured } from "@/lib/db";
import { SEO_PAGES, type PageSEO } from "@/lib/seo-pages";

/**
 * Auto-sync podstron do panelu admina (Landing → SEO).
 *
 * Każda strona zdefiniowana w SEO_PAGES jest dosiewana do tabeli `seo_pages`
 * przy starcie serwera (instrumentation.ts). INSERT ... ON CONFLICT DO NOTHING:
 * istniejące wiersze (w tym ręczne edycje z panelu) nigdy nie są nadpisywane,
 * więc nowa podstrona w kodzie pojawia się w panelu po pierwszym deployu
 * bez pisania migracji w hydrobagger-admin.
 */

function labelFor(seo: PageSEO): string {
  if (seo.path === "/") return "Strona główna";
  if (seo.keyword && seo.keyword !== "brak") {
    return seo.keyword.charAt(0).toUpperCase() + seo.keyword.slice(1);
  }
  const slug = seo.path.split("/").filter(Boolean).pop() ?? seo.path;
  const words = slug.replace(/-/g, " ");
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export async function syncSeoPagesToPanel(): Promise<void> {
  if (!isDatabaseConfigured()) return;

  const pages = Object.values(SEO_PAGES);
  if (pages.length === 0) return;

  const values: string[] = [];
  const params: string[] = [];
  pages.forEach((seo, i) => {
    const o = i * 5;
    values.push(`($${o + 1}, $${o + 2}, $${o + 3}, $${o + 4}, $${o + 5})`);
    params.push(
      seo.path,
      labelFor(seo),
      seo.metaTitle,
      seo.metaDescription,
      seo.keyword === "brak" ? "" : seo.keyword,
    );
  });

  try {
    const result = await getPool().query(
      `INSERT INTO seo_pages (path, label, meta_title, meta_description, keywords)
       VALUES ${values.join(", ")}
       ON CONFLICT (path) DO NOTHING`,
      params,
    );
    if (result.rowCount && result.rowCount > 0) {
      console.log(`[seo-sync] Dosiano ${result.rowCount} nowych stron do panelu SEO.`);
    }
  } catch (err) {
    /* Sync nie może zablokować startu strony – brak grantu / baza offline
       oznacza tylko, że panel nie zobaczy nowych stron do czasu naprawy. */
    console.error("[seo-sync] Nie udało się zsynchronizować seo_pages:", err);
  }
}
