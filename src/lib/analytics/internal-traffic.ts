/** Ruch z podglądu Landing w panelu admina oraz z hostów panelu - nie goście strony. */

const PREVIEW_PATTERN = /(?:^|[?&])preview=1(?:&|$)/;

const ADMIN_REFERRER_HOSTS = new Set(["mngmt.hydrobagger.pl"]);

export function isPreviewPath(value: string): boolean {
  if (!value) return false;
  return PREVIEW_PATTERN.test(value);
}

export function isAdminReferrer(referrer: string | undefined | null): boolean {
  if (!referrer) return false;
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, "");
    return ADMIN_REFERRER_HOSTS.has(host);
  } catch {
    return false;
  }
}

export function shouldIgnoreAnalyticsEvent(input: {
  pagePath: string;
  referrer?: string;
  landingQuery?: string;
}): boolean {
  if (isPreviewPath(input.pagePath)) return true;
  if (input.landingQuery && isPreviewPath(`?${input.landingQuery.replace(/^\?/, "")}`)) return true;
  if (isAdminReferrer(input.referrer)) return true;
  return false;
}

export function shouldSkipClientAnalytics(): boolean {
  if (typeof window === "undefined") return false;
  const search = window.location.search;
  if (isPreviewPath(search) || isPreviewPath(window.location.pathname + search)) return true;
  if (isAdminReferrer(document.referrer)) return true;
  return false;
}
