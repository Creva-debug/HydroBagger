"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="22" x2="12" y2="3" />
        <line x1="12" y1="8"  x2="8"  y2="5" />
        <line x1="12" y1="8"  x2="16" y2="5" />
        <line x1="12" y1="11" x2="8"  y2="8" />
        <line x1="12" y1="11" x2="16" y2="8" />
        <line x1="12" y1="14" x2="8"  y2="11" />
        <line x1="12" y1="14" x2="16" y2="11" />
        <line x1="12" y1="17" x2="9"  y2="14.5" />
        <line x1="12" y1="17" x2="15" y2="14.5" />
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    )
  },
  { 
    href: "/uslugi/koszenie-i-mulczowanie-roslinnosci", 
    label: "Koszenie i mulczowanie",
    desc: "Usuwanie roślinności wodnej i brzegowej.",
    icon: (
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="17.5" r="2.5" />
        <circle cx="6" cy="6.5" r="2.5" />
        <line x1="8.2" y1="16.1" x2="20" y2="4" />
        <line x1="8.2" y1="7.9" x2="20" y2="20" />
        <circle cx="13.2" cy="12" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  { 
    href: "/uslugi/refulacia-i-odwadnianie-osadow", 
    label: "Refulacja i odwadnianie osadów",
    desc: "Oczyszczanie zbiorników z zalegającego mułu.",
    icon: (
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    )
  },
  { 
    href: "/uslugi/transport-w-trudnym-terenie", 
    label: "Transport w trudnym terenie",
    desc: "Dowóz sprzętu i materiałów przez błoto i wodę.",
    icon: (
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    )
  },
] as const;

const NAV_SPRZET = [
  { href: "/sprzet/koparki-plywajace",    label: "Koparki pływające",    desc: "Maszyny amfibijne pracujące bezpośrednio na wodzie, bagnach i mokradłach." },
  { href: "/sprzet/koparki-gasienicowe",  label: "Koparki gąsienicowe",  desc: "Ciężki sprzęt gąsienicowy do głębokich prac ziemnych w trudnym terenie." },
  { href: "/sprzet/kosiarki-plywajace",   label: "Kosiarki pływające",   desc: "Pływające maszyny do koszenia i mulczowania roślinności wodnej i brzegowej." },
  { href: "/sprzet/kosiarki-samobiezne",  label: "Kosiarki samobieżne",  desc: "Gąsienicowe kosiarki do mulczowania skarp, rowów i podmokłych terenów." },
  { href: "/sprzet/pompy-refulacyjne",    label: "Pompy refulacyjne",    desc: "Wysokowydajne pompy do hydraulicznego odsysania osadów dennych i mułu." },
  { href: "/sprzet/wozidla-budowlane",    label: "Wozidła budowlane",    desc: "Gąsienicowe pojazdy transportowe do pracy w błocie i terenie podmokłym." },
] as const;

const NAV_PRACA = [
  { href: "/praca/inzynier-robot-hydrotechnicznych", label: "Inżynier robót hydrotechnicznych", desc: "Planowanie i nadzór techniczny nad realizacją prac hydrotechnicznych w terenie." },
  { href: "/praca/operator-koparki",                 label: "Operator koparki",                 desc: "Obsługa specjalistycznych koparek pływających i gąsienicowych w terenie." },
] as const;

const NAV_DIRECT = [
  { href: "/referencje", label: "Referencje" },
  { href: "/o-nas",      label: "O nas" },
  { href: "/wiedza",     label: "Wiedza" },
] as const;

const NAV_SECTIONS = [
  { label: "Dla kogo?",  href: "/dla-kogo", items: NAV_DLA_KOGO },
  { label: "Usługi",     href: "/uslugi",   items: NAV_USLUGI },
  { label: "Sprzęt",     href: "/sprzet",   items: NAV_SPRZET },
  { label: "Praca",      href: "/praca",    items: NAV_PRACA },
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
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:w-[640px]">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-sky-50 group/item">
              {item.icon && (
                <div className="mt-0.5 shrink-0 rounded-md bg-sky-50 p-2 text-sky-600 transition-colors group-hover/item:bg-sky-100 group-hover/item:text-sky-700">
                  {item.icon}
                </div>
              )}
              {!item.icon && (
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 transition-colors group-hover/item:bg-[#0284c7]" />
              )}
              <div>
                <div className="whitespace-nowrap font-semibold text-slate-800 transition-colors group-hover/item:text-[#0284c7]">
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

function MobileAccordion({
  label,
  href,
  items,
  onLinkClick,
}: {
  label: string;
  href: string;
  items: readonly { href: string; label: string; desc?: string; icon?: React.ReactNode }[];
  onLinkClick: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-slate-800"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{label}</span>
        <svg
          className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="pb-2 pl-2">
          <Link
            href={href}
            onClick={onLinkClick}
            className="mb-1 flex items-center gap-1.5 pb-2 text-xs font-semibold uppercase tracking-wider text-[#0284c7]"
          >
            Wszystkie <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </Link>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onLinkClick}
              className="flex items-center gap-3 rounded-lg py-2.5 text-sm text-slate-700 transition-colors hover:text-[#0284c7]"
            >
              {item.icon && (
                <span className="shrink-0 text-[#0284c7]">{item.icon}</span>
              )}
              {!item.icon && (
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
              )}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <header
          className="bg-white/95 backdrop-blur-md shadow-sm"
          style={{ borderBottom: "1px solid #e2e8f0", borderTop: "4px solid var(--hb-water)" }}
        >
          <div className="mx-auto flex h-[80px] w-full max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center" aria-label="HydroBagger" onClick={close}>
              <Image
                src={imageUrl("logo_hydrobagger.png")}
                alt="HydroBagger"
                width={220}
                height={60}
                className="h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Nav desktop */}
            <nav className="hidden items-center gap-2 lg:flex" aria-label="Główne menu">
              <DropdownMenu label="Dla kogo?" items={NAV_DLA_KOGO} href="/dla-kogo" />
              <DropdownMenu label="Usługi" items={NAV_USLUGI} href="/uslugi" />
              <DropdownMenu label="Sprzęt" items={NAV_SPRZET} href="/sprzet" />
              <DropdownMenu label="Praca" items={NAV_PRACA} href="/praca" />
              <Link href="/referencje" className="nav-link">Referencje</Link>
              <Link href="/o-nas" className="nav-link">O nas</Link>
              <Link href="/wiedza" className="nav-link">Wiedza</Link>
            </nav>

            {/* CTA desktop */}
            <Link
              href="/darmowa-konsultacja"
              className="btn-pulse hidden shrink-0 rounded-full px-6 py-2.5 text-sm font-bold text-white transition-all lg:block"
              style={{ background: "var(--hb-water)", boxShadow: "0 4px 14px -2px rgba(14, 116, 144, 0.4)" }}
            >
              BEZPŁATNA KONSULTACJA
            </Link>

            {/* Mobile burger */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
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

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/50 backdrop-blur-sm lg:hidden"
          onClick={close}
          aria-hidden
        />
      )}

      {/* Mobile menu drawer */}
      <div
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[85vw] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menu mobilne"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid #e2e8f0", borderTop: "4px solid var(--hb-water)" }}
        >
          <Link href="/" onClick={close} aria-label="HydroBagger">
            <Image
              src={imageUrl("logo_hydrobagger.png")}
              alt="HydroBagger"
              width={160}
              height={44}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={close}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
            aria-label="Zamknij menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex-1 overflow-y-auto px-5 py-2">
          {NAV_SECTIONS.map((sec) => (
            <MobileAccordion
              key={sec.href}
              label={sec.label}
              href={sec.href}
              items={sec.items}
              onLinkClick={close}
            />
          ))}
          {NAV_DIRECT.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="block border-b border-slate-100 py-4 text-base font-semibold text-slate-800 transition-colors hover:text-[#0284c7]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="px-5 py-5" style={{ borderTop: "1px solid #e2e8f0" }}>
          <Link
            href="/darmowa-konsultacja"
            onClick={close}
            className="btn-pulse flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold text-white"
            style={{ background: "var(--hb-water)" }}
          >
            BEZPŁATNA KONSULTACJA
          </Link>
        </div>
      </div>
    </>
  );
}
