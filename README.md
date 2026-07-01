# HydroBagger — strona marketingowa

Strona [hydrobagger.pl](https://hydrobagger.pl). Osobne repo od
[hydrobagger-admin](https://github.com/Creva-debug/hydrobagger-admin)
(panel wewnętrzny na `mngmt.hydrobagger.pl`).

## Lokalnie

```bash
npm install
cp .env.example .env.local
npm run dev
```

Aplikacja: http://localhost:3000

Bez `DATABASE_URL` w `.env.local` wszystko działa normalnie — formularze
wysyłają e-mail przez Postmark. Z ustawionym `DATABASE_URL` (rola
`hydrobagger_site`, tylko INSERT) zgłoszenia trafiają dodatkowo do tabeli
`leads` w bazie panelu admina i są widoczne w
`mngmt.hydrobagger.pl/zgloszenia`.

## Produkcja (VPS funtastic)

Strona jest hostowana na tym samym VPS co panel admina (patrz
`docs/vps-hydrobagger-admin-setup.md`), aby mieć bezpośredni dostęp do
wspólnej bazy Postgres bez wystawiania jej na świat.

- Katalog: `/home/ubuntu/hydrobagger/apps/site`
- PM2: `hydrobagger-site`
- Port: `3005`
- Nginx: `hydrobagger.pl`, `www.hydrobagger.pl` → `127.0.0.1:3005`
- Baza: `hydrobagger_db` (Postgres lokalnie na VPS), rola `hydrobagger_site`

Pierwszy raz na VPS:

```bash
cd /home/ubuntu/hydrobagger/apps/site
git clone https://github.com/Creva-debug/HydroBagger.git .
cp .env.example .env.local
# uzupełnij POSTMARK_API_TOKEN, DATABASE_URL (rola hydrobagger_site) itd.
npm ci
npm run build
pm2 start npm --name hydrobagger-site --cwd /home/ubuntu/hydrobagger/apps/site -- start
pm2 save
sudo cp deploy/nginx-hydrobagger-site.conf /etc/nginx/sites-available/hydrobagger-site
sudo ln -sf /etc/nginx/sites-available/hydrobagger-site /etc/nginx/sites-enabled/hydrobagger-site
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d hydrobagger.pl -d www.hydrobagger.pl
```

## Deploy (GitHub Actions)

Push na `main` uruchamia `.github/workflows/deploy-vps.yml`: SSH na VPS →
`git fetch` → `npm ci` → build → PM2.

Sekrety (Settings → Secrets and variables → Actions):

| Sekret | Wartość |
|--------|---------|
| `HB_SITE_VPS_HOST` | `145.239.85.210` |
| `HB_SITE_VPS_USER` | `ubuntu` |
| `HB_SITE_VPS_SSH_KEY` | prywatny klucz `~/.ssh/hydrobagger_site_gha_deploy` (bez hasła) |

Klucz publiczny Actions jest już w `authorized_keys` na VPS.

Ręcznie na VPS (awaryjnie):

```bash
cd /home/ubuntu/hydrobagger/apps/site
git pull origin main
npm ci
npm run build
pm2 restart hydrobagger-site
```
