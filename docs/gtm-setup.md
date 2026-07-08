# Google Tag Manager + GA4 (hydrobagger.pl)

Kontener: **GTM-5CLFJ4B4**  
Measurement ID: **G-KJ0ZJPP8K9**

**Model: GA4 z kodu, GTM tylko dla Ads/Plausible.** Tagi GA4 w GTM nie emitowały trafień (zweryfikowane), więc odsłony i `form_submit` wysyłamy bezpośrednio przez `gtag` w kodzie. GTM zostaje do Google Ads, Plausible itp.

Kod: `src/lib/gtm/`, `src/components/gtm-route-tracker.tsx`, `src/app/layout.tsx`, `src/components/cookie-consent.tsx`.

Checklist: `hydrobagger-admin/docs/CHECKLIST-WDROZENIE.md`  
Sync GA4 (panel): `hydrobagger-admin/docs/ga4-setup.md`

---

## Co robi kod strony

| Element | Opis |
|---------|------|
| Consent Mode v2 | Inline przez `next/script` **beforeInteractive** w `<head>`, **przed** gtag.js i GTM: `default denied`, `wait_for_update: 2000` |
| gtag.js | Ładowany `next/script beforeInteractive` (`gtag/js?id=G-KJ0ZJPP8K9`) |
| Cookie z zgodą | Inline ustawia `consent update` + eventy `consent_analytics_granted` / `consent_marketing_granted` |
| Odsłona GA4 | **Bezpośrednio przez gtag** (`sendGa4PageView`): pierwsza jako `config` z `send_page_view`, kolejne (SPA) jako event `page_view`. Wołane po zgodzie (baner lub restore z cookie) i przy nawigacji SPA |
| Formularze | `form_submit` **bezpośrednio przez gtag** (`sendGa4FormSubmit`) + push do `dataLayer` (dla Ads) |
| Własna analityka | `/api/analytics/collect` (baza VPS, osobno od GA4) |

Uwaga: **nie pushujemy już `virtual_page_view`** - GA4 idzie z kodu. Push `virtual_page_view` odpalał tag GA4 w GTM i dublował odsłonę.

Wysyłka `gtag` jest niezależna od inline (funkcja `ensureGtag` sama tworzy `window.gtag`, jeśli inline z jakiegoś powodu się nie wykona).

---

## Konfiguracja GTM (wymagana, żeby nie dublować)

### Tagi GA4 - WSTRZYMAJ (Pause)

GA4 idzie z kodu. Tagi GA4 w GTM muszą być **wstrzymane**, inaczej dublują odsłony i konwersje:

| Tag | Akcja |
|-----|-------|
| `[TAG] GA4 - Base` (Google Tag) | **Pause** |
| `[TAG] GA4 - page_view` | **Pause** |
| `[TAG] GA4 - form_submit` | **Pause** |

### Tagi Google Ads - zostają

| Tag | Trigger |
|-----|---------|
| Conversion Linker | **All Pages** lub Initialization |
| Tagi konwersji / remarketing (`AW-…`) | **`consent_marketing_granted`** (bez Initialization) |
| Konwersja formularza (jeśli jest) | **`form_submit`** |

### Inne

- Plausible i pozostałe tagi - bez zmian.

Po każdej zmianie: **Opublikuj** kontener.

---

## Weryfikacja

1. Incognito (nie Brave - ma wbudowany bloker GA) → wejdź na `hydrobagger.pl`
2. **Akceptuję wszystko**
3. Network (DevTools): `region1.google-analytics.com/g/collect?...&en=page_view&tid=G-KJ0ZJPP8K9`
4. Powinien być **jeden** `page_view` na odsłonę (nie dwa)
5. GA4 → **Realtime** - aktywny użytkownik (1-3 min opóźnienia)

Scenariusze dające po 1 odsłonie: nowy user + akceptacja, powrót z zapisaną zgodą (cookie), nawigacja SPA (menu).

Komunikat GTM „0% zgody" to widget diagnostyczny (dużo wizyt bez kliknięcia banera). Sukces = Realtime + Network, nie ten procent.

---

## Eventy dataLayer (referencja)

```javascript
{ event: "consent_analytics_granted" }
{ event: "consent_marketing_granted" }
{ event: "consent_update", analytics_storage: "granted|denied", ad_storage: "granted|denied" }
{ event: "form_submit", form: "contact"|"job_application", page_location, page_title }
```

GA4 (`page_view`, `form_submit`) wysyłane są bezpośrednio przez `gtag`, nie przez powyższe eventy.
