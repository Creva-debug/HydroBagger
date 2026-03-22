/**
 * Baza zdjęć/obrazków – Bunny CDN.
 * Zasady: .cursor/rules/images-bunny-cdn.mdc oraz docs/SEO-ZASADY.md (sekcja Zdjęcia).
 */

export const IMAGES_BASE_URL = "https://creva.b-cdn.net/Hydrobagger/";

/**
 * Zwraca pełny URL do pliku graficznego na CDN.
 * @param filename – nazwa pliku z rozszerzeniem (np. logo_hydrobagger.png)
 */
export function imageUrl(filename: string): string {
  return `${IMAGES_BASE_URL}${filename}`;
}

/**
 * Zwraca pełny URL do pliku wideo na CDN (ta sama baza co zdjęcia).
 */
export function videoUrl(filename: string): string {
  return `${IMAGES_BASE_URL}${filename}`;
}
