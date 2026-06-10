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

## Krok 5: Integracja ze stroną Vercel (później)

Strona `hydrobagger.pl` dziś ma treści na sztywno w kodzie. Docelowo:

- panel zapisuje treści do Postgres
- strona Vercel czyta API / ISR z panelu albo wspólnej bazy

To osobny etap po szkielecie panelu.
