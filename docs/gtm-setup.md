# Google Tag Manager + GA4 (hydrobagger.pl)

Kontener: **GTM-5CLFJ4B4**  
Measurement ID: **G-KJ0ZJPP8K9**

Kod strony: `src/lib/gtm/`, `src/components/gtm-route-tracker.tsx`, consent w `src/app/layout.tsx` i `src/components/cookie-consent.tsx`.

Sync GA4 do agenta (panel admin): `hydrobagger-admin/docs/ga4-setup.md`.

---

## Backlog GTM (na później)

### DLV - form (segmentacja formularzy w GA4)

**Cel:** W raportach GA4 rozróżniać konwersje `form_submit` po typie formularza (`contact` vs `job_application`).

**Kod strony już wysyła** pole `form` w dataLayer przy evencie `form_submit` (patrz `src/lib/gtm/data-layer.ts`, wywołania w `ContactConsultationSection`, `JobApplicationSection`).

**Do zrobienia w GTM:**

1. **Zmienne** → Nowa → typ **Zmienna warstwy danych**
   - Nazwa: `DLV - form`
   - Nazwa zmiennej warstwy danych: `form`
2. W tagu **`[TAG] GA4 - form_submit`** → Parametry zdarzenia → dodaj wiersz:
   - Parametr: `form`
   - Wartość: `{{DLV - form}}`
3. Opublikuj kontener.

**Opcjonalnie później:** osobna zmienna `DLV - jobTitle` (pole `jobTitle` z aplikacji o pracę).

**Test:** Tag Assistant → wyślij formularz kontaktowy → zdarzenie `form_submit` → w GA4 DebugView parametr `form` = `contact`.

---

## Powiązane

- Konwersja `form_submit` w GA4 Admin → Konwersje (wymagane pod import do Google Ads)
- `docs/gads-setup.md` w hydrobagger-admin (import konwersji GA4 → Ads)
