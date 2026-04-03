import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/lib/images";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { ContactConsultationSection } from "@/components/ContactConsultationSection";
import { JsonLdWebPage } from "@/components/JsonLdWebPage";
import { getSEO, metadataFromSEO } from "@/lib/seo-pages";

const DLA_KOGO_SEO = getSEO("/dla-kogo")!;
export const metadata: Metadata = metadataFromSEO(DLA_KOGO_SEO);

const KATEGORIE = [
  {
    href: "/dla-kogo/sektor-budowlany",
    title: "Sektor budowlany",
    desc: "Wspieramy wykonawców robót budowlanych w realizacji zadań ziemnych i hydrotechnicznych w trudnym terenie – jako podwykonawcy lub partnerzy techniczni.",
    badge: "Firmy budowlane",
    icon: (
      <svg className="mb-4 h-14 w-14 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    href: "/dla-kogo/ochrona-srodowiska",
    title: "Ochrona środowiska",
    desc: "Realizujemy działania renaturyzacyjne i ochrony bioróżnorodności – z Parkami Narodowymi, Krajobrazowymi, RDOŚ i innymi organizacjami.",
    badge: "NGO i instytucje",
    icon: (
      <svg className="mb-4 h-14 w-14 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: "/dla-kogo/jednostki-administracyjne",
    title: "Jednostki administracyjne",
    desc: "Oferujemy usługi dla miast, gmin i starostw – utrzymanie infrastruktury wodnej, retencja, odmulanie i prace w trudno dostępnych miejscach.",
    badge: "Gminy i miasta",
    icon: (
      <svg className="mb-4 h-14 w-14 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    href: "/dla-kogo/rolnicy-i-hodowcy-ryb",
    title: "Rolnicy i hodowcy ryb",
    desc: "Udrażniamy rowy, czyścimy stawy hodowlane, zwiększamy retencję i modernizujemy systemy melioracyjne na terenach rolnych i hodowlanych.",
    badge: "Rolnictwo i ryby",
    icon: (
      <svg className="mb-4 h-14 w-14 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
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
    ),
  },
  {
    href: "/dla-kogo/obiekty-turystyczne",
    title: "Obiekty turystyczne",
    desc: "Pomagamy hotelom, spa i ośrodkom wypoczynkowym w utrzymaniu stawów, linii brzegowej i zbiorników wodnych – estetycznie i bez zakłóceń.",
    badge: "Hotele i ośrodki",
    icon: (
      <svg className="mb-4 h-14 w-14 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: "/dla-kogo/osoby-prywatne",
    title: "Osoby prywatne",
    desc: "Budujemy oczka wodne, pogłębiamy stawy, czyścimy zbiorniki i dojeżdżamy w najtrudniejsze miejsca – dla właścicieli działek i posesji.",
    badge: "Działki i posesje",
    icon: (
      <svg className="mb-4 h-14 w-14 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
] as const;

function SL({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`section-label${light ? " section-label--light" : ""}`}>{children}</span>;
}

export default function DlaKogoPage() {
  return (
    <>
      <JsonLdWebPage seo={DLA_KOGO_SEO} />
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden py-16 lg:min-h-[80vh] lg:py-20 [transform:translateZ(0)]">
        <Image src={imageUrl("koparka-plywajaca-kopanie-torfowisko01.jpg")} alt="Dla kogo – usługi HydroBagger" fill priority className="object-cover brightness-[0.65] saturate-[0.85]" sizes="100vw" />
        <div className="absolute inset-0 bg-[#071e32]/45" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e32]/90 via-[#071e32]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071e32]/45 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SL>Dla kogo?</SL>
          <h1 className="display-heading mt-3 text-white" style={{ fontSize: "clamp(2.6rem,5.5vw,4.5rem)" }}>
            Pracujemy dla <span style={{ color: "#7dd3fc" }}>każdego</span>,<br />kto potrzebuje nas w terenie
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">
            Firmy budowlane, samorządy, rolnicy, ośrodki turystyczne, instytucje środowiskowe i osoby prywatne – mamy rozwiązanie dla każdego problemu z wodą i trudnym terenem.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/darmowa-konsultacja" className="btn-pulse inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white" style={{ background: "var(--hb-water)" }}>
              Bezpłatna konsultacja
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/uslugi" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/20">
              Nasze usługi
            </Link>
          </div>
        </div>
      </section>

      {/* KATEGORIE GRID */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 grid gap-6 lg:grid-cols-[1fr,2fr] lg:items-end">
            <div>
              <SL>Grupy klientów</SL>
              <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(2rem,3.8vw,3rem)" }}>
                6 grup <span style={{ color: "var(--hb-water)" }}>klientów</span>
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-600 lg:pb-1">
              Każda grupa ma inne potrzeby – dlatego podchodzimy do każdego zlecenia indywidualnie. Sprawdź, jakie rozwiązania przygotowaliśmy dla Ciebie.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {KATEGORIE.map((kat) => (
              <Link key={kat.href} href={kat.href} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl" style={{ border: "1px solid #e2e8f0" }}>
                <div className="flex items-center justify-center py-10 transition-colors duration-300" style={{ background: "#1e3a5f" }}>
                  <span className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(2,132,199,0.35)]">
                    {kat.icon}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#0284c7]">{kat.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-slate-500">{kat.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:text-[#0284c7]" style={{ color: "var(--hb-water)" }}>
                    Sprawdź szczegóły
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative overflow-hidden py-14 lg:py-16" style={{ background: "var(--hb-navy)" }}>
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-[0.07]" style={{ background: "var(--hb-water)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="display-heading text-white" style={{ fontSize: "clamp(1.6rem,3.2vw,2.4rem)" }}>
                Nie wiesz, czy możemy Ci pomóc?
              </h2>
              <p className="mt-3 max-w-lg text-slate-300">Opisz nam swój problem – ocenimy możliwości i zaproponujemy najlepsze rozwiązanie. Bezpłatna konsultacja, bez zobowiązań.</p>
            </div>
            <Link href="/darmowa-konsultacja" className="inline-flex shrink-0 items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white transition-all hover:brightness-110" style={{ background: "var(--hb-water)" }}>
              Umów konsultację
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <BrandsMarquee />
      <ContactConsultationSection />
    </>
  );
}
