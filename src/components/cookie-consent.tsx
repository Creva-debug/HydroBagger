"use client"

import { useCallback, useEffect, useState } from "react"
import { Cookie } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import {
  CONSENT_COOKIE,
  COOKIE_SETTINGS_EVENT,
  type ConsentState,
} from "@/lib/cookie-consent"

const COOKIE_MAX_AGE_SECONDS = 365 * 24 * 60 * 60

const DEFAULT_CONSENT: ConsentState = {
  v: 1,
  necessary: true,
  analytics: false,
  marketing: false,
  ts: 0,
}

function readConsentCookie(): ConsentState | null {
  if (typeof document === "undefined") return null
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CONSENT_COOKIE}=`))
  if (!match) return null
  try {
    const decoded = decodeURIComponent(match.split("=").slice(1).join("="))
    const parsed = JSON.parse(decoded)
    if (parsed && parsed.v === 1 && typeof parsed.analytics === "boolean") {
      return parsed as ConsentState
    }
  } catch {
    /* corrupted cookie */
  }
  return null
}

function writeConsentCookie(consent: ConsentState) {
  if (typeof document === "undefined") return
  const encoded = encodeURIComponent(JSON.stringify(consent))
  let cookie = `${CONSENT_COOKIE}=${encoded}; Path=/; Max-Age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax`
  if (typeof window !== "undefined" && window.location.protocol === "https:") {
    cookie += "; Secure"
  }
  document.cookie = cookie
}

function ensureGtag(): ((...args: unknown[]) => void) | null {
  if (typeof window === "undefined") return null
  if (typeof window.gtag === "function") return window.gtag
  if (Array.isArray(window.dataLayer)) {
    const gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments as unknown as Record<string, unknown>)
    }
    window.gtag = gtag
    return gtag
  }
  return null
}

function applyConsentUpdate(consent: ConsentState) {
  const gtag = ensureGtag()
  if (!gtag) return
  gtag("consent", "update", {
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    analytics_storage: consent.analytics ? "granted" : "denied",
    security_storage: "granted",
  })
  if (consent.marketing && window.dataLayer) {
    window.dataLayer.push({ event: "consent_marketing_granted" })
  }
}

const CATEGORIES = [
  {
    id: "necessary" as const,
    label: "Niezbędne",
    description: "Wymagane do prawidłowego działania strony. Nie można ich wyłączyć.",
    locked: true,
  },
  {
    id: "analytics" as const,
    label: "Analityczne",
    description: "Pomagają nam zrozumieć, jak korzystasz ze strony, dzięki czemu możemy ją ulepszać.",
    locked: false,
  },
  {
    id: "marketing" as const,
    label: "Marketingowe",
    description: "Pozwalają wyświetlać trafniejsze reklamy i mierzyć skuteczność kampanii.",
    locked: false,
  },
] as const

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [savedConsent, setSavedConsent] = useState<ConsentState | null>(null)
  const [draftConsent, setDraftConsent] = useState<ConsentState>(DEFAULT_CONSENT)

  useEffect(() => {
    const existing = readConsentCookie()
    if (existing) {
      setSavedConsent(existing)
      setDraftConsent(existing)
      setShowBanner(false)
      applyConsentUpdate(existing)
      return
    }
    setSavedConsent(null)
    setDraftConsent(DEFAULT_CONSENT)
    setShowBanner(true)
  }, [])

  useEffect(() => {
    const handler = () => {
      setDraftConsent(savedConsent ?? DEFAULT_CONSENT)
      setShowSettings(true)
    }
    window.addEventListener(COOKIE_SETTINGS_EVENT, handler)
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, handler)
  }, [savedConsent])

  const saveConsent = useCallback((consent: ConsentState) => {
    const stamped = { ...consent, ts: Date.now() }
    writeConsentCookie(stamped)
    setSavedConsent(stamped)
    setDraftConsent(stamped)
    applyConsentUpdate(stamped)
    setShowBanner(false)
    setShowSettings(false)
  }, [])

  const acceptAll = useCallback(() => {
    saveConsent({ ...DEFAULT_CONSENT, analytics: true, marketing: true })
  }, [saveConsent])

  const rejectAll = useCallback(() => {
    saveConsent({ ...DEFAULT_CONSENT, analytics: false, marketing: false })
  }, [saveConsent])

  const saveCustom = useCallback(() => {
    saveConsent(draftConsent)
  }, [draftConsent, saveConsent])

  const toggleCategory = (key: "analytics" | "marketing") => {
    setDraftConsent((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const hasSaved = savedConsent !== null

  return (
    <>
      {/* ── Baner – pierwszy widok ───────────────────────────── */}
      {showBanner && !showSettings && (
        <div className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-5">
          <div
            className="mx-auto flex max-w-5xl flex-col gap-5 rounded-xl p-5 shadow-2xl sm:flex-row sm:items-center sm:gap-8 sm:p-6"
            style={{
              background: "var(--hb-navy)",
              borderTop: "3px solid var(--hb-water)",
              border: "1px solid #134a6e",
              borderTopWidth: "3px",
            }}
          >
            {/* Ikona + tekst */}
            <div className="flex items-start gap-4 flex-1">
              <span
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                style={{ background: "rgba(2,132,199,0.15)" }}
              >
                <Cookie className="h-4 w-4" style={{ color: "var(--hb-water)" }} />
              </span>
              <div className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                <p className="mb-1 font-semibold text-white">
                  Ta strona używa plików cookies
                </p>
                <p>
                  Korzystamy z cookies, aby analizować ruch i poprawiać skuteczność
                  działań marketingowych. Możesz zaakceptować wszystkie lub dostosować swój wybór.
                </p>
              </div>
            </div>

            {/* Przyciski – bez "Tylko niezbędne" w widoku głównym */}
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setDraftConsent(savedConsent ?? DEFAULT_CONSENT)
                  setShowSettings(true)
                }}
                className="rounded-full px-5 py-2.5 text-sm font-semibold transition-all"
                style={{
                  border: "1px solid var(--hb-water)",
                  color: "var(--hb-water)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(2,132,199,0.12)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent"
                }}
              >
                Ustawienia
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="btn-pulse rounded-full px-6 py-2.5 text-sm font-bold text-white transition-all"
                style={{
                  background: "var(--hb-water)",
                  boxShadow: "0 4px 14px -2px rgba(14,116,144,0.5)",
                }}
              >
                Akceptuję wszystko
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Przycisk-ikona po zaakceptowaniu ────────────────── */}
      {hasSaved && !showBanner && !showSettings && (
        <button
          type="button"
          onClick={() => {
            setDraftConsent(savedConsent ?? DEFAULT_CONSENT)
            setShowSettings(true)
          }}
          className="fixed bottom-4 left-4 z-[100] flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110"
          style={{
            background: "var(--hb-navy)",
            border: "1px solid #134a6e",
            color: "var(--hb-water)",
          }}
          aria-label="Ustawienia cookies"
        >
          <Cookie className="h-5 w-5" />
        </button>
      )}

      {/* ── Dialog ustawień ──────────────────────────────────── */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent showCloseButton className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Ustawienia cookies</DialogTitle>
            <DialogDescription>
              Wybierz, które kategorie plików cookies chcesz włączyć. Niezbędne
              cookies są zawsze aktywne.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-2">
            {CATEGORIES.map((cat) => {
              const checked = cat.locked
                ? true
                : draftConsent[cat.id as keyof ConsentState] === true
              return (
                <div
                  key={cat.id}
                  className="flex items-start justify-between gap-4 rounded-lg border p-4"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{cat.label}</p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>
                  <Switch
                    checked={checked}
                    disabled={cat.locked}
                    onCheckedChange={() => {
                      if (!cat.locked) {
                        toggleCategory(cat.id as "analytics" | "marketing")
                      }
                    }}
                  />
                </div>
              )
            })}
          </div>
          <DialogFooter className="gap-2 sm:gap-2">
            <button
              type="button"
              onClick={rejectAll}
              className="rounded-full border px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Tylko niezbędne
            </button>
            <button
              type="button"
              onClick={saveCustom}
              className="rounded-full px-5 py-2 text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ background: "var(--hb-water)" }}
            >
              Zapisz wybór
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
