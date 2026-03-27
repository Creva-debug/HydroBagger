import Link from "next/link";

/** Kolor wody / główny akcent stopki – spójny z głównym motywem strony */
const FOOTER_WATER = "var(--hb-water)"; /* #0284c7 */

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
          fill="rgba(2, 132, 199, 0.14)"
        />
        <path
          d="M0,70 Q250,30 500,70 T1000,70 T1200,70 L1200,120 L0,120 Z"
          fill="rgba(2, 132, 199, 0.2)"
        />
        <path
          d="M0,65 Q400,25 800,65 T1200,65 L1200,120 L0,120 Z"
          fill="rgba(2, 132, 199, 0.1)"
        />
      </svg>
    </div>
  );
}

function TrackEdge() {
  const toothW = 50;
  const botW = 36;
  const taper = (toothW - botW) / 2;
  const gap = 16;
  const h = 20;
  const r = 9;
  const teeth = 26;
  const totalW = teeth * (toothW + gap);

  const toothPath = (x: number) =>
    `M ${x + r},0 L ${x + toothW - r},0 Q ${x + toothW},0 ${x + toothW},${r} L ${x + toothW - taper},${h} L ${x + taper},${h} L ${x},${r} Q ${x},0 ${x + r},0 Z`;

  return (
    <div className="relative w-full flex-shrink-0 overflow-hidden" style={{ height: h }} aria-hidden>
      <svg className="block h-full w-full" viewBox={`0 0 ${totalW} ${h}`} preserveAspectRatio="none">
        {/* Niebieskie tło – woda widoczna między zębami */}
        <rect x="0" y="0" width={totalW} height={h} fill="#0284c7" />
        {/* Zęby – trapezoidalne, szersze u góry, zwężające się ku dołowi */}
        {Array.from({ length: teeth }, (_, i) => (
          <path key={i} d={toothPath(i * (toothW + gap))} fill="#020617" />
        ))}
        {/* Czarny pasek zamykający dół – eliminuje niebieskie przerwy przy footerze */}
        <rect x="0" y={h - 3} width={totalW} height="3" fill="#020617" />
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto">
      {/* Pasek kontaktu – woda / hydro */}
      <section
        className="relative px-4 py-20 text-slate-900 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: FOOTER_WATER }}
      >
        {/* Fala na górze – przejście z szarego tła sekcji formularza */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none" style={{ height: 72 }}>
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="block w-full h-full">
            <path d="M0,0 L1440,0 L1440,0 C1080,72 720,72 360,36 C180,18 0,54 0,54 Z" fill="#f1f5f9" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl pt-16">
          <h2 className="mb-10 text-center text-3xl font-light tracking-tight sm:text-4xl md:text-5xl text-white">
            Bezpośredni <span className="font-bold">kontakt</span>
          </h2>
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-20">
            <a
              href="mailto:kontakt@hydrobagger.pl"
              className="flex items-center gap-4 text-white/90 transition hover:text-white group"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 group-hover:bg-white/25 transition-colors">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="text-lg font-medium underline underline-offset-4 decoration-white/40 group-hover:decoration-white">kontakt@hydrobagger.pl</span>
            </a>
            <a
              href="tel:+48504026042"
              className="flex items-center gap-4 text-white/90 transition hover:text-white group"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 group-hover:bg-white/25 transition-colors">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="text-lg font-medium underline underline-offset-4 decoration-white/40 group-hover:decoration-white">+48 504 026 042</span>
            </a>
          </div>
        </div>
      </section>

      {/* Gąsienica – zęby oddzielające niebieską sekcję od czarnej stopki */}
      <TrackEdge />

      {/* Czarna stopka: CTA + kolumny + dół */}
      <div className="relative text-white">
        <div className="bg-slate-950 pt-4">
          {/* CTA */}
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-b border-slate-800 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
            <h3 className="text-center text-lg font-bold text-white sm:text-left sm:text-xl">
              Potrzebujesz wsparcia w trudnym terenie?
            </h3>
            <div className="hidden sm:block flex-1 mx-8 border-t border-dashed border-slate-700" />
            <Link
              href="/darmowa-konsultacja"
              className="shrink-0 rounded-xl border border-[#0284c7] px-6 py-2.5 text-sm font-bold text-[#38bdf8] transition hover:bg-[#0284c7] hover:text-white"
            >
              Bezpłatna Konsultacja →
            </Link>
          </div>

          {/* Kolumny linków */}
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 border-b border-slate-800 px-4 py-12 sm:grid-cols-4 lg:grid-cols-[1fr_1fr_1.5fr_1.6fr] sm:px-6 lg:px-8">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                O HydroBagger
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li><Link href="/o-nas" className="transition hover:text-[#38bdf8]">O Nas</Link></li>
                <li><Link href="/praca" className="transition hover:text-[#38bdf8]">Praca</Link></li>
                <li><Link href="/realizacje" className="transition hover:text-[#38bdf8]">Realizacje</Link></li>
                <li><Link href="/referencje" className="transition hover:text-[#38bdf8]">Referencje</Link></li>
                <li><Link href="/wiedza" className="transition hover:text-[#38bdf8]">Wiedza</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Sprzęt
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li><Link href="/sprzet/koparki-plywajace" className="transition hover:text-[#38bdf8]">Koparki pływające</Link></li>
                <li><Link href="/sprzet/kosiarki-plywajace" className="transition hover:text-[#38bdf8]">Kosiarki pływające</Link></li>
                <li><Link href="/sprzet/pompy-refulacyjne" className="transition hover:text-[#38bdf8]">Pompy refulacyjne</Link></li>
                <li><Link href="/sprzet/kosiarki-samobiezne" className="transition hover:text-[#38bdf8]">Kosiarki samobieżne</Link></li>
                <li><Link href="/sprzet/wozidla-budowlane" className="transition hover:text-[#38bdf8]">Wozidła budowlane</Link></li>
                <li><Link href="/sprzet/koparki-gasienicowe" className="transition hover:text-[#38bdf8]">Koparki gąsienicowe</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Usługi
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li><Link href="/uslugi/kopanie-w-trudnym-terenie" className="transition hover:text-[#38bdf8]">Kopanie w trudnym terenie</Link></li>
                <li><Link href="/uslugi/koszenie-i-mulczowanie-roslinnosci" className="transition hover:text-[#38bdf8]">Koszenie i mulczowanie roślinności</Link></li>
                <li><Link href="/uslugi/refulacia-i-odwadnianie-osadow" className="transition hover:text-[#38bdf8]">Refulacja i odwadnianie osadów</Link></li>
                <li><Link href="/uslugi/transport-w-trudnym-terenie" className="transition hover:text-[#38bdf8]">Transport w trudnym terenie</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Dane kontaktowe
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-800">
                    <svg className="h-3.5 w-3.5 text-[#38bdf8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 7.5-9.75-7.5" /></svg>
                  </span>
                  <a href="mailto:kontakt@hydrobagger.pl" className="transition hover:text-[#38bdf8]">kontakt@hydrobagger.pl</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-800">
                    <svg className="h-3.5 w-3.5 text-[#38bdf8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </span>
                  <a href="tel:+48504026042" className="transition hover:text-[#38bdf8]">+48 504 026 042</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-800">
                    <svg className="h-3.5 w-3.5 text-[#38bdf8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                  </span>
                  <span>NIP: 5951211839</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Dolny pasek */}
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
            <a href="#top" className="text-sm text-slate-400 transition hover:text-[#38bdf8]">
              Wróć na górę ↑
            </a>
            <p className="text-sm text-slate-500">
              © HydroBagger 2025. Wszelkie prawa zastrzeżone.
            </p>
            <nav className="flex items-center gap-4">
              <a href="/regulamin" className="text-xs text-slate-500 transition hover:text-[#38bdf8]">Regulamin</a>
              <span className="text-slate-700 text-xs">·</span>
              <a href="/polityka-prywatnosci" className="text-xs text-slate-500 transition hover:text-[#38bdf8]">Polityka Prywatności</a>
              <span className="text-slate-700 text-xs">·</span>
              <a href="/polityka-cookies" className="text-xs text-slate-500 transition hover:text-[#38bdf8]">Polityka Cookies</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
