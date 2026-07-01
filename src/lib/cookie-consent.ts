export const CONSENT_COOKIE = "hydrobagger_consent"
export const COOKIE_SETTINGS_EVENT = "open-cookie-settings"
/** Odpalane po zapisaniu wyboru w banerze/ustawieniach cookies (AnalyticsProvider nasłuchuje, żeby włączyć tracking bez przeładowania strony). */
export const CONSENT_SAVED_EVENT = "hydrobagger-consent-saved"

export type ConsentState = {
  v: 1
  necessary: true
  analytics: boolean
  marketing: boolean
  ts: number
}
