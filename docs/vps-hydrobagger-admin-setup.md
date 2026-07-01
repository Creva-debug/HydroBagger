# HydroBagger Admin – VPS (mngmt.hydrobagger.pl)

Panel admina hostowany na tym samym VPS co Funtastic i Creva Skill Admin.

## Architektura

| Element | Wartość |
|---------|---------|
| VPS SSH | `ssh funtastic-vps` (145.239.85.210, user `ubuntu`) |
| Domena panelu | `mngmt.hydrobagger.pl` |
| Strona marketingowa | `hydrobagger.pl` na Vercel (osobno) |
| Katalog aplikacji | `/home/ubuntu/hydrobagger/apps/admin` |
| Port aplikacji | `3003` |
| PM2 | `hydrobagger-admin` |
| Postgres | `hydrobagger_db` / user `hydrobagger_app` |
| Credentials DB | `/home/ubuntu/hydrobagger/.db-credentials` (tylko na VPS) |

## Co jest już na VPS (2026-06-10)

- [x] Katalogi: `/home/ubuntu/hydrobagger/apps/admin/data`
- [x] Baza PostgreSQL `hydrobagger_db`
- [x] Nginx: `mngmt.hydrobagger.pl` (HTTP, strona placeholder)
- [x] Skrypt przełączenia na aplikację: `/home/ubuntu/hydrobagger/switch-to-app-proxy.sh`

## Krok 1: DNS (Ty, w panelu domeny)

Dodaj rekord **A**:

```
mngmt.hydrobagger.pl  →  145.239.85.210
```

`hydrobagger.pl` zostaje na Vercel (216.198.79.1). Tylko subdomena `mngmt` idzie na VPS.

Sprawdzenie:

```bash
dig +short mngmt.hydrobagger.pl A
# oczekiwane: 145.239.85.210
```

## Krok 2: HTTPS (Certbot na VPS)

Gdy DNS propaguje się (zwykle kilka minut):

```bash
ssh funtastic-vps
sudo certbot --nginx -d mngmt.hydrobagger.pl
```

Certbot zaktualizuje `/etc/nginx/sites-available/hydrobagger-admin` i doda SSL.

## Krok 3: Repo hydrobagger-admin (następna sesja)

Osobne repo (wzór: `creva-skill-admin`):

- Next.js 16 + login (bcrypt + cookie)
- Deploy: GitHub Actions → SSH → `npm ci` / `db:migrate` / `build` / PM2
- Sekrety GitHub: `HB_ADMIN_VPS_HOST`, `HB_ADMIN_VPS_USER`, `HB_ADMIN_VPS_SSH_KEY`

## Krok 4: Pierwszy deploy aplikacji

Na VPS po sklonowaniu repo:

```bash
cd /home/ubuntu/hydrobagger/apps/admin
cp /home/ubuntu/hydrobagger/.db-credentials .env.local
# uzupełnij ADMIN_SESSION_SECRET, ADMIN_USERNAME, ADMIN_PASSWORD
npm ci
npm run admin:bootstrap
npm run db:migrate
npm run build
pm2 start npm --name hydrobagger-admin --cwd /home/ubuntu/hydrobagger/apps/admin -- start
pm2 save
bash /home/ubuntu/hydrobagger/switch-to-app-proxy.sh
```

## Krok 5: Migracja strony z Vercela na VPS (2026-07-01)

Zamiast trzymać stronę na Vercelu i budować most API do panelu, strona
jedzie na ten sam VPS co panel — prostsze i bezpieczniejsze (bez
wystawiania Postgresa na świat).

Zrobione:

- [x] Repo sklonowane do `/home/ubuntu/hydrobagger/apps/site`
- [x] PM2 `hydrobagger-site` na porcie `3005`
- [x] Nginx (HTTP) dla `hydrobagger.pl` / `www.hydrobagger.pl` →
      `127.0.0.1:3005` (`deploy/nginx-hydrobagger-site.conf` w repo strony)
- [x] Tabela `leads` w `hydrobagger_db` + rola `hydrobagger_site`
      (tylko `INSERT`) — migracja `011_leads.sql` w repo panelu
- [x] Formularze (`/api/contact`, `/api/job-application`) zapisują lead do
      bazy **oprócz** wysyłki e-maila przez Postmark (best-effort, nigdy
      nie blokuje odpowiedzi użytkownikowi)
- [x] Panel: nowy moduł „Zgłoszenia” (`/zgloszenia`) — lista, filtry,
      zmiana statusu, licznik nowych na Dashboardzie
- [x] GitHub Actions `deploy-vps.yml` w repo strony (analogicznie do panelu)

Do zrobienia (wymaga akcji poza kodem):

- [ ] **DNS**: zmienić rekord A `hydrobagger.pl` (i `www`) z Vercela
      (`216.198.79.1`) na VPS (`145.239.85.210`)
- [ ] Po propagacji: `sudo certbot --nginx -d hydrobagger.pl -d www.hydrobagger.pl`
- [ ] Dodać sekrety GitHub Actions w repo strony (`HB_SITE_VPS_*`)
- [ ] Po potwierdzeniu, że VPS działa poprawnie: wyłączyć/usunąć projekt
      w Vercelu

Kolejne etapy (po ustabilizowaniu migracji): analityka ruchu hydrobagger.pl
w panelu (GA4, wzorem Funtastic-v2) oraz zarządzanie treścią strony z
poziomu panelu (CMS).
