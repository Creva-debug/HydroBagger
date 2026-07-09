/**
 * Uruchamiane raz przy starcie serwera Next.js.
 * Dosiewa podstrony z kodu (SEO_PAGES) do tabeli `seo_pages`,
 * żeby panel admina widział je bez ręcznych migracji.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  const { syncSeoPagesToPanel } = await import("@/lib/seo-sync");
  await syncSeoPagesToPanel();
}
