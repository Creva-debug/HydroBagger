"use client"

import { COOKIE_SETTINGS_EVENT } from "@/lib/cookie-consent"

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}
      className="text-sm text-muted-foreground underline-offset-4 hover:underline"
    >
      Ustawienia cookies
    </button>
  )
}
