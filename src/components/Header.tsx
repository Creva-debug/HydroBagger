import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "@/lib/images";

const NAV_DLA_KOGO = [
  { href: "/dla-kogo/jednostki-administracyjne", label: "Jednostki administracyjne" },
  { href: "/dla-kogo/obiekty-turystyczne", label: "Obiekty turystyczne" },
  { href: "/dla-kogo/ochrona-srodowiska", label: "Ochrona środowiska" },
  { href: "/dla-kogo/osoby-prywatne", label: "Osoby prywatne" },
  { href: "/dla-kogo/rolnicy-i-hodowcy-ryb", label: "Rolnicy i hodowcy ryb" },
  { href: "/dla-kogo/sektor-budowlany", label: "Sektor budowlany" },
] as const;

const NAV_USLUGI = [
  { href: "/uslugi/kopanie-w-trudnym-terenie", label: "Kopanie w trudnym terenie" },
  { href: "/uslugi/koszenie-i-mulczowanie-roslinnosci", label: "Koszenie i mulczowanie" },
  { href: "/uslugi/refulacia-i-odwadnianie-osadow", label: "Refulacja i odwadnianie osadów" },
  { href: "/uslugi/transport-w-trudnym-terenie", label: "Transport w trudnym terenie" },
] as const;

const NAV_SPRZET = [
  { href: "/sprzet/koparki-gasienicowe", label: "Koparki gąsienicowe" },
  { href: "/sprzet/koparki-plywajace", label: "Koparki pływające" },
  { href: "/sprzet/kosiarki-plywajace", label: "Kosiarki pływające" },
  { href: "/sprzet/kosiarki-samobiezne", label: "Kosiarki samobieżne" },
  { href: "/sprzet/pompy-refulacyjne", label: "Pompy refulacyjne" },
  { href: "/sprzet/wozidla-budowlane", label: "Wozidła budowlane" },
] as const;

const NAV_PRACA = [
  { href: "/praca/inzynier-robot-hydrotechnicznych", label: "Inżynier robót hydrotechnicznych" },
  { href: "/praca/operator-koparki", label: "Operator koparki" },
] as const;

function DropdownMenu({
  label,
  items,
  href,
}: {
  label: string;
  items: readonly { href: string; label: string }[];
  href?: string;
}) {
  return (
    <div className="group relative">
      <button type="button" className="nav-link" aria-haspopup="true">
        {label}
        <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="mega-panel">
        {href && (
          <Link href={href} className="mega-link border-b border-white/8 mb-1 pb-2 font-semibold text-white/90">
            <span className="mega-link-dot" />
            Przejdź do: {label}
          </Link>
        )}
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="mega-link">
            <span className="mega-link-dot" />
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md"
      style={{ background: "rgba(7,30,50,0.96)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="HydroBagger">
          <Image
            src={imageUrl("logo_hydrobagger.png")}
            alt="HydroBagger"
            width={180}
            height={48}
            className="h-10 w-auto object-contain brightness-0 invert"
            priority
          />
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Główne menu">
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
          className="btn-pulse hidden shrink-0 rounded-full bg-teal-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-teal-400 lg:block"
        >
          BEZPŁATNA KONSULTACJA
        </Link>

        {/* Mobile burger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 lg:hidden"
          aria-label="Otwórz menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
