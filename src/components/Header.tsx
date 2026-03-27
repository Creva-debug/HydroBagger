import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "@/lib/images";

const NAV_DLA_KOGO = [
  { 
    href: "/dla-kogo/sektor-budowlany", 
    label: "Sektor budowlany",
    desc: "Wsparcie dla wykonawców przy pracach ziemnych.",
    icon: (
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  { 
    href: "/dla-kogo/ochrona-srodowiska", 
    label: "Ochrona środowiska",
    desc: "Działania renaturyzacyjne i ochrona bioróżnorodności.",
    icon: (
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    href: "/dla-kogo/jednostki-administracyjne", 
    label: "Jednostki administracyjne",
    desc: "Utrzymanie zbiorników i infrastruktury miast i gmin.",
    icon: (
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    )
  },
  { 
    href: "/dla-kogo/rolnicy-i-hodowcy-ryb", 
    label: "Rolnicy i hodowcy ryb",
    desc: "Czyszczenie rowów i stawów hodowlanych.",
    icon: (
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  { 
    href: "/dla-kogo/obiekty-turystyczne", 
    label: "Obiekty turystyczne",
    desc: "Estetyka stawów i linii brzegowych przy hotelach.",
    icon: (
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  { 
    href: "/dla-kogo/osoby-prywatne", 
    label: "Osoby prywatne",
    desc: "Kompleksowe prace przy oczkach wodnych i stawach.",
    icon: (
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
] as const;

const NAV_USLUGI = [
  { 
    href: "/uslugi/kopanie-w-trudnym-terenie", 
    label: "Kopanie w trudnym terenie",
    desc: "Prace ziemne na bagnach, torfach i w wodzie.",
    icon: (
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  { 
    href: "/uslugi/koszenie-i-mulczowanie-roslinnosci", 
    label: "Koszenie i mulczowanie",
    desc: "Usuwanie roślinności wodnej i brzegowej.",
    icon: (
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  { 
    href: "/uslugi/refulacia-i-odwadnianie-osadow", 
    label: "Refulacja i odwadnianie osadów",
    desc: "Oczyszczanie zbiorników z zalegającego mułu.",
    icon: (
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  { 
    href: "/uslugi/transport-w-trudnym-terenie", 
    label: "Transport w trudnym terenie",
    desc: "Dowóz sprzętu i materiałów przez błoto i wodę.",
    icon: (
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
] as const;

const NAV_SPRZET = [
  { href: "/sprzet/koparki-gasienicowe", label: "Koparki gąsienicowe", desc: "Ciężki sprzęt do prac ziemnych na lądzie." },
  { href: "/sprzet/koparki-plywajace", label: "Koparki pływające", desc: "Maszyny amfibijne do prac na wodzie i bagnach." },
  { href: "/sprzet/kosiarki-plywajace", label: "Kosiarki pływające", desc: "Sprzęt do koszenia roślinności z powierzchni wody." },
  { href: "/sprzet/kosiarki-samobiezne", label: "Kosiarki samobieżne", desc: "Kosiarki gąsienicowe do trudnego terenu." },
  { href: "/sprzet/pompy-refulacyjne", label: "Pompy refulacyjne", desc: "Wydajne pompy do odsysania osadów i mułu." },
  { href: "/sprzet/wozidla-budowlane", label: "Wozidła budowlane", desc: "Transport urobku w trudnych warunkach." },
] as const;

const NAV_PRACA = [
  { href: "/praca/inzynier-robot-hydrotechnicznych", label: "Inżynier robót hydrotechnicznych", desc: "Nadzór i koordynacja projektów." },
  { href: "/praca/operator-koparki", label: "Operator koparki", desc: "Obsługa sprzętu pływającego i gąsienicowego." },
] as const;

function DropdownMenu({
  label,
  items,
  href,
}: {
  label: string;
  items: readonly { href: string; label: string; desc?: string; icon?: React.ReactNode }[];
  href: string;
}) {
  return (
    <div className="group relative">
      <Link href={href} className="nav-link">
        {label}
        <svg className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      <div className="mega-panel">
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:w-[600px]">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-slate-50 group/item">
              {item.icon && (
                <div className="mt-0.5 shrink-0 rounded-md bg-sky-50 p-2 text-sky-600 transition-colors group-hover/item:bg-sky-100 group-hover/item:text-sky-700">
                  {item.icon}
                </div>
              )}
              {!item.icon && (
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 transition-colors group-hover/item:bg-[#0284c7]" />
              )}
              <div>
                <div className="font-semibold text-slate-800 transition-colors group-hover/item:text-[#0284c7]">
                  {item.label}
                </div>
                {item.desc && (
                  <div className="mt-1 text-xs text-slate-500 line-clamp-2">
                    {item.desc}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div className="sticky top-0 z-50 w-full">
      <header
        className="bg-white/95 backdrop-blur-md shadow-sm"
        style={{ borderBottom: "1px solid #e2e8f0", borderTop: "4px solid var(--hb-water)" }}
      >
        <div className="mx-auto flex h-[80px] w-full max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center" aria-label="HydroBagger">
            <Image
              src={imageUrl("logo_hydrobagger.png")}
              alt="HydroBagger"
              width={220}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Nav */}
          <nav className="hidden items-center gap-2 lg:flex" aria-label="Główne menu">
            <DropdownMenu label="Dla kogo?" items={NAV_DLA_KOGO} href="/dla-kogo" />
            <DropdownMenu label="Usługi" items={NAV_USLUGI} href="/uslugi" />
            <DropdownMenu label="Sprzęt" items={NAV_SPRZET} href="/sprzet" />
            <DropdownMenu label="Praca" items={NAV_PRACA} href="/praca" />
            <Link href="/referencje" className="nav-link">Referencje</Link>
            <Link href="/o-nas" className="nav-link">O nas</Link>
            <Link href="/wiedza" className="nav-link">Wiedza</Link>
          </nav>

          {/* CTA */}
          <Link
            href="/darmowa-konsultacja"
            className="btn-pulse hidden shrink-0 rounded-full px-6 py-2.5 text-sm font-bold text-white transition hover:opacity-90 lg:block"
            style={{ background: "var(--hb-water)", boxShadow: "0 4px 14px -2px rgba(14, 116, 144, 0.4)" }}
          >
            BEZPŁATNA KONSULTACJA
          </Link>

          {/* Mobile burger */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden"
            aria-label="Otwórz menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
