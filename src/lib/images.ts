/**
 * Baza zdjęć/obrazków – Bunny CDN.
 * Zasady: .cursor/rules/images-bunny-cdn.mdc oraz docs/SEO-ZASADY.md (sekcja Zdjęcia).
 */

export const IMAGES_BASE_URL = "https://creva.b-cdn.net/Hydrobagger/";

/**
 * Zwraca pełny URL do pliku graficznego na CDN.
 * @param filename – nazwa pliku z rozszerzeniem (np. logo_hydrobagger.png)
 */
function encodeFilenameForCdnPath(filename: string): string {
  const trimmed = filename.trim();
  /* Bunny zwykle ma w ścieżce tylko spacje jako %20; nawiasy w nazwie pliku często są literalne (inaczej 404). */
  return encodeURIComponent(trimmed).replace(/%28/g, "(").replace(/%29/g, ")");
}

export function imageUrl(filename: string): string {
  return `${IMAGES_BASE_URL}${encodeFilenameForCdnPath(filename)}`;
}

/**
 * Zwraca pełny URL do pliku wideo na CDN (ta sama baza co zdjęcia).
 */
export function videoUrl(filename: string): string {
  return `${IMAGES_BASE_URL}${encodeFilenameForCdnPath(filename)}`;
}
