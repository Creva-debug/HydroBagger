import Link from "next/link";

/** Kolor wody / główny akcent stopki – spójny z emerald z headera i strony głównej */
const FOOTER_WATER = "#059669"; /* emerald-600 */

function WaveSection() {
  return (
    <div className="relative h-24 w-full overflow-hidden bg-white">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
          fill="rgba(5, 150, 105, 0.14)"
        />
        <path
          d="M0,70 Q250,30 500,70 T1000,70 T1200,70 L1200,120 L0,120 Z"
          fill="rgba(5, 150, 105, 0.2)"
        />
        <path
          d="M0,65 Q400,25 800,65 T1200,65 L1200,120 L0,120 Z"
          fill="rgba(5, 150, 105, 0.1)"
        />
      </svg>
    </div>
  );
}

function TrackEdge({ overlapPx = 16 }: { overlapPx?: number }) {
  const toothWidth = 28;
  const toothHeight = overlapPx;
  const teeth = 50;
  const width = teeth * toothWidth;
  return (
    <div
      className="relative w-full flex-shrink-0"
      style={{ height: toothHeight, marginTop: -overlapPx }}
      aria-hidden
    >
      <svg
        className="block h-full w-full"
        viewBox={`0 0 ${width} ${toothHeight}`}
        preserveAspectRatio="none"
      >
        {Array.from({ length: teeth }, (_, i) => (
          <rect
            key={i}
            x={i * toothWidth + 3}
            y="0"
            width={toothWidth - 6}
            height={toothHeight}
            rx="5"
            ry="5"
            fill="#0f172a"
          />
        ))}
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto">
      {/* Fale – woda (odcień emerald, spójny z resztą serwisu) */}
      <WaveSection />

      {/* Pasek kontaktu – woda / hydro */}
      <section
        className="px-4 py-10 text-white sm:px-6 lg:px-8"
        style={{ backgroundColor: FOOTER_WATER }}
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-xl font-semibold tracking-tight sm:text-2xl">
            Bezpośredni <span className="font-bold">kontakt</span>
          </h2>
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-14">
            <a
              href="mailto:kontakt@hydrobagger.pl"
              className="flex items-center gap-3 text-white/95 underline underline-offset-4 transition hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>kontakt@hydrobagger.pl</span>
            </a>
            <a
              href="tel:+48504026042"
              className="flex items-center gap-3 text-white/95 underline underline-offset-4 transition hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              <span>+48 504 026 042</span>
            </a>
          </div>
        </div>
      </section>

      {/* Czarna stopka: gąsienica + CTA + kolumny + dół */}
      <div className="relative text-white">
        <TrackEdge overlapPx={16} />
        <div className="bg-slate-900">
          {/* CTA */}
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-b border-slate-700/80 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
            <h3 className="text-center text-lg font-bold text-white sm:text-left sm:text-xl">
              Potrzebujesz wsparcia w trudnym terenie?
            </h3>
            <Link
              href="/darmowa-konsultacja"
              className="shrink-0 font-medium text-emerald-400 underline underline-offset-4 transition hover:text-emerald-300"
            >
              Bezpłatna Konsultacja
            </Link>
          </div>

          {/* Kolumny linków */}
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 border-b border-slate-700/80 px-4 py-12 sm:grid-cols-3 md:grid-cols-5 sm:px-6 lg:px-8">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                O HydroBagger
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li><Link href="/o-nas" className="transition hover:text-emerald-400">O Nas</Link></li>
                <li><Link href="/praca" className="transition hover:text-emerald-400">Praca</Link></li>
                <li><Link href="/realizacje" className="transition hover:text-emerald-400">Realizacje</Link></li>
                <li><Link href="/referencje" className="transition hover:text-emerald-400">Referencje</Link></li>
                <li><Link href="/wiedza" className="transition hover:text-emerald-400">Wiedza</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Sprzęt
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li><Link href="/sprzet/koparki-plywajace" className="transition hover:text-emerald-400">Koparki pływające</Link></li>
                <li><Link href="/sprzet/kosiarki-plywajace" className="transition hover:text-emerald-400">Kosiarki pływające</Link></li>
                <li><Link href="/sprzet/pompy-refulacyjne" className="transition hover:text-emerald-400">Pompy refulacyjne</Link></li>
                <li><Link href="/sprzet/kosiarki-samobiezne" className="transition hover:text-emerald-400">Kosiarki samobieżne</Link></li>
                <li><Link href="/sprzet/wozidla-budowlane" className="transition hover:text-emerald-400">Wozidła budowlane</Link></li>
                <li><Link href="/sprzet/koparki-gasienicowe" className="transition hover:text-emerald-400">Koparki gąsienicowe</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Usługi
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li><Link href="/uslugi/kopanie-w-trudnym-terenie" className="transition hover:text-emerald-400">Kopanie w trudnym terenie</Link></li>
                <li><Link href="/uslugi/koszenie-i-mulczowanie-roslinnosci" className="transition hover:text-emerald-400">Koszenie i mulczowanie roślinności</Link></li>
                <li><Link href="/uslugi/refulacia-i-odwadnianie-osadow" className="transition hover:text-emerald-400">Refulacja i odwadnianie osadów</Link></li>
                <li><Link href="/uslugi/transport-w-trudnym-terenie" className="transition hover:text-emerald-400">Transport w trudnym terenie</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Informacje prawne
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li><Link href="/regulamin" className="transition hover:text-emerald-400">Regulamin</Link></li>
                <li><Link href="/polityka-prywatnosci" className="transition hover:text-emerald-400">Polityka Prywatności</Link></li>
                <li><Link href="/ciasteczka-cookies" className="transition hover:text-emerald-400">Polityka Cookies</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Dane kontaktowe
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li>E-mail: <a href="mailto:kontakt@hydrobagger.pl" className="transition hover:text-emerald-400">kontakt@hydrobagger.pl</a></li>
                <li>Telefon: <a href="tel:+48504026042" className="transition hover:text-emerald-400">+48 504 026 042</a></li>
                <li>NIP: 5951211839</li>
              </ul>
            </div>
          </div>

          {/* Dolny pasek */}
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
            <a href="#top" className="text-sm text-slate-400 transition hover:text-emerald-400">
              Wróć na górę ↑
            </a>
            <p className="text-sm text-slate-500">
              © HydroBagger 2025. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
