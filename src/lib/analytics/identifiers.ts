"use client";

const VISITOR_COOKIE = "hb_vid";
const SESSION_COOKIE = "hb_sid";
const VISITOR_MAX_AGE_SECONDS = 2 * 365 * 24 * 60 * 60; // 2 lata
const SESSION_MAX_AGE_SECONDS = 30 * 60; // sesja "sliding" - 30 minut nieaktywności

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  if (!match) return null;
  return decodeURIComponent(match.split("=").slice(1).join("="));
}

function writeCookie(name: string, value: string, maxAgeSeconds: number) {
  if (typeof document === "undefined") return;
  let cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax`;
  if (typeof window !== "undefined" && window.location.protocol === "https:") {
    cookie += "; Secure";
  }
  document.cookie = cookie;
}

function randomId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID().replace(/-/g, "");
  }
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 12)}`;
}

export type SessionIdentity = {
  visitorId: string;
  isNewVisitor: boolean;
  sessionId: string;
  isNewSession: boolean;
};

/**
 * Odczytuje/tworzy visitor_id (cookie na 2 lata) oraz session_id (cookie
 * "sliding" - każde wywołanie odświeża jej Max-Age o kolejne 30 minut).
 * Aktywny użytkownik nigdy nie traci sesji, a po 30 minutach bezczynności
 * kolejne zdarzenie zaczyna nową sesję.
 */
export function resolveSessionIdentity(): SessionIdentity {
  let visitorId = readCookie(VISITOR_COOKIE);
  const isNewVisitor = !visitorId;
  if (!visitorId) {
    visitorId = randomId();
  }
  writeCookie(VISITOR_COOKIE, visitorId, VISITOR_MAX_AGE_SECONDS);

  let sessionId = readCookie(SESSION_COOKIE);
  const isNewSession = !sessionId;
  if (!sessionId) {
    sessionId = randomId();
  }
  writeCookie(SESSION_COOKIE, sessionId, SESSION_MAX_AGE_SECONDS);

  return { visitorId, isNewVisitor, sessionId, isNewSession };
}
