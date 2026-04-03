/**
 * Kanoniczny adres serwisu (produkcja / preview).
 * Ustaw NEXT_PUBLIC_SITE_URL w środowisku, jeśli domena ≠ hydrobagger.pl.
 */
export function getSiteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hydrobagger.pl";
  return raw.replace(/\/$/, "");
}

export function absoluteUrl(pathname: string): string {
  const origin = getSiteOrigin();
  if (!pathname || pathname === "/") return origin;
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${origin}${p}`;
}
