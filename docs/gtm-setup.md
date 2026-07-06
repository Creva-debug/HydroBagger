# Google Tag Manager + GA4 (hydrobagger.pl)

Kontener: **GTM-5CLFJ4B4**  
Measurement ID: **G-KJ0ZJPP8K9**

Kod strony: `src/lib/gtm/`, `src/components/gtm-route-tracker.tsx`, consent w `src/app/layout.tsx` i `src/components/cookie-consent.tsx`.

**Checklist wdrożenia (GTM, GA4 Admin, sync, Ads):** `hydrobagger-admin/docs/CHECKLIST-WDROZENIE.md`

Sync GA4 do agenta (panel admin): `hydrobagger-admin/docs/ga4-setup.md`

---

## Backlog GTM (szczegóły)

Pełna checklista z checkboxami: **`hydrobagger-admin/docs/CHECKLIST-WDROZENIE.md`** (sekcja 1).

### DLV - form (segmentacja formularzy w GA4)

Kod strony wysyła pole `form` w dataLayer przy `form_submit` (`src/lib/gtm/data-layer.ts`).

1. **Zmienne** → **DLV - form** (Data Layer Variable, klucz `form`)
2. W **`[TAG] GA4 - form_submit`** → parametr `form` = `{{DLV - form}}`
3. Opublikuj kontener
