# Google Tag Manager + GA4 (hydrobagger.pl)

Kontener: **GTM-5CLFJ4B4**  
Measurement ID: **G-KJ0ZJPP8K9**

Kod strony: `src/lib/gtm/`, `src/components/gtm-route-tracker.tsx`, consent w `src/app/layout.tsx` i `src/components/cookie-consent.tsx`.

**Checklist wdrożenia (GTM, GA4 Admin, sync, Ads):** `hydrobagger-admin/docs/CHECKLIST-WDROZENIE.md`

Sync GA4 do agenta (panel admin): `hydrobagger-admin/docs/ga4-setup.md`

---

## Consent Mode + komunikat GTM „0% zgody”

Kod strony ustawia Consent Mode v2 **przed** GTM i gtag.js (`src/lib/gtm/consent-default-script.ts`). Po „Akceptuję wszystko” leci `gtag('consent','update',…)` + hit GA4 (direct gtag, nie tag GTM).

Komunikat w GTM (*odsetek zgody 0%*) oznacza, że Google widzi głównie sygnały **`denied`** (domyślny stan + wizyty bez kliknięcia banera). To [typowy case](https://support.google.com/tagmanager/answer/14522438#issues) gdy:
- użytkownik zamyka stronę bez akceptacji,
- tagi Ads/GA4 odpalają się na **Initialization** jeszcze z `denied`,
- dane historyczne sprzed poprawki consent.

### W GTM (zalecane)

1. **Ustawienia kontenera** → włącz **Przegląd ustawień uzyskiwania zgody (BETA)**.
2. **Wstrzymaj (Pause)** tagi `[TAG] GA4 - Base` i page_view GA4 – GA4 idzie z kodu strony.
3. Tagi **Google Ads** (`AW-…`): usuń trigger **Initialization**, zostaw tylko **`consent_marketing_granted`** (+ ewentualnie Conversion Linker na Init).
4. Weryfikacja: [Tag Assistant](https://tagassistant.google.com/) → zakładka **Consent** → wejdź na stronę → **Akceptuję wszystko** → `analytics_storage` / `ad_storage` = **Granted**.

### W kodzie (już jest)

- `wait_for_update: 2000` ms (czas na kliknięcie banera przed pierwszym hiten z `denied`)
- Przywrócenie z cookie: `consent update` + `consent_analytics_granted` / `consent_marketing_granted` w dataLayer **przed** załadowaniem GTM

---

## Backlog GTM (szczegóły)

Pełna checklista z checkboxami: **`hydrobagger-admin/docs/CHECKLIST-WDROZENIE.md`** (sekcja 1).

### DLV - form (segmentacja formularzy w GA4)

Kod strony wysyła pole `form` w dataLayer przy `form_submit` (`src/lib/gtm/data-layer.ts`).

1. **Zmienne** → **DLV - form** (Data Layer Variable, klucz `form`)
2. W **`[TAG] GA4 - form_submit`** → parametr `form` = `{{DLV - form}}`
3. Opublikuj kontener
