# Google Tag Manager + GA4 (hydrobagger.pl)

Kontener: **GTM-5CLFJ4B4**  
Measurement ID: **G-KJ0ZJPP8K9**

Kod strony: `src/lib/gtm/`, `src/components/gtm-route-tracker.tsx`, consent w `src/app/layout.tsx` i `src/components/cookie-consent.tsx`.

**Checklist wdrożenia (GTM, GA4 Admin, sync, Ads):** `hydrobagger-admin/docs/CHECKLIST-WDROZENIE.md`

Sync GA4 do agenta (panel admin): `hydrobagger-admin/docs/ga4-setup.md`

---

## Consent Mode + komunikat GTM „0% zgody”

**Najpierw:** źródło prawdy to **GA4 → Raporty → Realtime** (i Tag Assistant po „Akceptuję wszystko”), **nie** widget „odsetek zgody” w GTM. Ten widget agreguje historyczne odpalenia tagów z `denied` (nowi użytkownicy bez kliknięcia banera, stary ruch sprzed poprawki). Przy opt-in banerze **niski % jest normalny** i nie znaczy, że GA4 jest zepsute.

Kod strony (`consent-default-script.ts`):
- Consent Mode v2 **przed** gtag.js i GTM
- Po zapisanej zgodzie w cookie: `consent update` + eventy w dataLayer **przed** załadowaniem GTM (commit bf82fd9)
- GA4 page_view i `form_submit` idą **z kodu** (direct gtag), GTM tylko Ads / Plausible

### W GTM (jednorazowo)

| Tag | Co zrobić |
|-----|-----------|
| `[TAG] GA4 - Base` | **Pause** (duplikat) |
| `[TAG] GA4 - page_view` (Init / consent / virtual) | **Pause** (duplikat – SPA też idzie z kodu) |
| `[TAG] GA4 - form_submit` | **Pause** opcjonalnie (kod wysyła `gtag('event','form_submit')`) |
| **Conversion Linker** | Zostaw na **All Pages** lub Initialization |
| Tagi **Google Ads** (`AW-…`) | Usuń trigger **Initialization**; zostaw **`consent_marketing_granted`** |
| Plausible, inne | Bez zmian |

Opcjonalnie: **Ustawienia kontenera** → Przegląd ustawień uzyskiwania zgody (BETA) – tylko diagnostyka, nie blokuje działania.

Weryfikacja: [Tag Assistant](https://tagassistant.google.com/) → **Consent** → incognito → „Akceptuję wszystko” → `analytics_storage` = **Granted** → w **Network** widać `g/collect?tid=G-KJ0ZJPP8K9`.

---

## Backlog GTM (szczegóły)

Pełna checklista z checkboxami: **`hydrobagger-admin/docs/CHECKLIST-WDROZENIE.md`** (sekcja 1).

### DLV - form (segmentacja formularzy w GA4)

Kod strony wysyła pole `form` w dataLayer przy `form_submit` (`src/lib/gtm/data-layer.ts`).

1. **Zmienne** → **DLV - form** (Data Layer Variable, klucz `form`)
2. W **`[TAG] GA4 - form_submit`** → parametr `form` = `{{DLV - form}}`
3. Opublikuj kontener
