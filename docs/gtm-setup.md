# Google Tag Manager + GA4 (hydrobagger.pl)

Kontener: **GTM-5CLFJ4B4**  
Measurement ID: **G-KJ0ZJPP8K9**

**Model: GTM-only** – GA4, Ads i konwersje idą z tagów GTM. Kod strony ustawia Consent Mode i wysyła eventy do `dataLayer`.

Kod: `src/lib/gtm/`, `src/components/gtm-route-tracker.tsx`, `src/app/layout.tsx`, `src/components/cookie-consent.tsx`.

Checklist: `hydrobagger-admin/docs/CHECKLIST-WDROZENIE.md`  
Sync GA4 (panel): `hydrobagger-admin/docs/ga4-setup.md`

---

## Co robi kod strony (nie zmieniaj tego w GTM)

| Element | Opis |
|---------|------|
| Consent Mode v2 | Inline w `<head>` **przed** GTM: `default denied`, `wait_for_update: 2000` |
| Cookie z zgodą | Przed GTM: `consent update` + `consent_analytics_granted` / `consent_marketing_granted` |
| Baner cookies | Po akceptacji: `gtag consent update` + eventy w dataLayer |
| SPA | `virtual_page_view` przy zmianie ścieżki (Next.js) |
| Formularze | `form_submit` + pole `form` (`contact` / `job_application`) |
| Własna analityka | `/api/analytics/collect` (baza VPS, osobno od GA4) |

**Kod NIE ładuje `gtag.js` ani nie woła `gtag('config', GA4_ID)`** – to robi GTM.

---

## Konfiguracja tagów GTM (wymagana)

### Zmienne

- `[V Const.] ID - GA4` = `G-KJ0ZJPP8K9`
- `DLV - form` (Data Layer Variable, klucz `form`) – opcjonalnie do segmentacji formularzy

### Tagi GA4

| Tag | Typ | Trigger |
|-----|-----|---------|
| `[TAG] GA4 - Base` | Google Tag, ID `{{[V Const.] ID - GA4}}` | **Initialization - All Pages** |
| `[TAG] GA4 - page_view` | Google Analytics: GA4 Event, event `page_view` | **`consent_analytics_granted`** + **`virtual_page_view`** |
| `[TAG] GA4 - form_submit` | GA4 Event, event `form_submit` | **`form_submit`** |

Tagi GA4 muszą **respektować Consent Mode** (domyślnie w Google Tag / GA4 Event).

**Nie wstrzymuj (Pause)** tagów GA4 – są jedynym źródłem hitów GA4.

### Tagi Google Ads

| Tag | Trigger |
|-----|---------|
| Conversion Linker | **All Pages** lub Initialization |
| Tagi konwersji / remarketing (`AW-…`) | **`consent_marketing_granted`** (bez Initialization) |

### Inne

- Plausible i pozostałe tagi – bez zmian.

Po każdej zmianie: **Opublikuj** kontener.

---

## Weryfikacja

1. [Tag Assistant](https://tagassistant.google.com/) → połącz z `hydrobagger.pl`
2. Incognito → **Akceptuję wszystko**
3. Consent: `analytics_storage` = **Granted**
4. Network: `region1.google-analytics.com/g/collect?tid=G-KJ0ZJPP8K9`
5. GA4 → **Realtime** – aktywny użytkownik (1–3 min opóźnienia)

Komunikat GTM „0% zgody” to widget diagnostyczny (dużo wizyt bez kliknięcia banera). Sukces = Realtime + Tag Assistant, nie ten procent.

---

## Eventy dataLayer (referencja)

```javascript
{ event: "consent_analytics_granted" }
{ event: "consent_marketing_granted" }
{ event: "consent_update", analytics_storage: "granted|denied", ad_storage: "granted|denied" }
{ event: "virtual_page_view", page_location, page_title, page_referrer? }
{ event: "form_submit", form: "contact"|"job_application", page_location, page_title }
```
