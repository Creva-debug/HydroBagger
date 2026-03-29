export const CONSENT_COOKIE = "hydrobagger_consent"
export const COOKIE_SETTINGS_EVENT = "open-cookie-settings"

export type ConsentState = {
  v: 1
  necessary: true
  analytics: boolean
  marketing: boolean
  ts: number
}
