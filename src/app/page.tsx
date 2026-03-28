import { BrandsMarquee } from "@/components/BrandsMarquee";
import { ContactConsultationSection } from "@/components/ContactConsultationSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { videoUrl, imageUrl } from "@/lib/images";

export const metadata: Metadata = (() => {
  const seo = getSEO("/");
  return seo ? metadataFromSEO(seo) : {};
})();

/* ════════════════════════════════════════════════════════════
   DANE
════════════════════════════════════════════════════════════ */

const USLUGI = [
  {
    title: "Kopanie w\ntrudnym terenie",
    short: "Bagna · torfy · woda",
    desc: "Koparka nie wjedzie? My wpływamy. Kopiemy w bagnach, torfach i wodzie – tam, gdzie inni nie dojadą.",
    href: "/uslugi/kopanie-w-trudnym-terenie",
    img: "koparka-plywajaca-kopanie-torfowisko-2_.png",
  },
  {
    title: "Koszenie roślinności\ni mulczowanie",
    short: "Brzegi · kanały · zbiorniki",
    desc: "Zarośnięte brzegi i dna? Czyścimy to gruntownie. Usuwamy roślinność nad wodą i pod wodą.",
    href: "/uslugi/koszenie-i-mulczowanie-roslinnosci",
    img: "koszenie-roslinnosci-wodnej-kosiarka-plywajaca-w-akcji_.png",
  },
  {
    title: "Refulacja i\nodwadnianie osadów",
    short: "Muł · osady · zbiorniki",
    desc: "Zalegający muł? Odessany i odwodniony. Oczyszczamy zbiorniki z osadów metodą refulacji.",
    href: "/uslugi/refulacia-i-odwadnianie-osadow",
    img: "koparka-plywajaca-pompa-refulacyjna-odmulanie2_.png",
  },
  {
    title: "Transport w\ntrudnym terenie",
    short: "Błoto · torf · woda",
    desc: "Gdzie nie wjedzie nikt – my dowozimy. Transportujemy sprzęt i materiały przez błoto i wodę.",
    href: "/uslugi/transport-w-trudnym-terenie",
    img: "wozidlo-gasienicowe-transport-koparka-podmokly-teren2_.png",
  },
] as const;

const SEKTORY = [
  { 
    title: "Sektor Budowlany",        
    desc: "Wspieramy wykonawców przy pracach ziemnych w trudnym terenie – na torfowiskach, bagnach i wodzie.", 
    href: "/dla-kogo/sektor-budowlany",
    icon: (
      <svg className="mb-4 h-10 w-10 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  { 
    title: "Ochrona Środowiska",      
    desc: "Realizujemy działania renaturyzacyjne i ochrony bioróżnorodności – z Parkami Krajobrazowymi i RDOŚ.", 
    href: "/dla-kogo/ochrona-srodowiska",
    icon: (
      <svg className="mb-4 h-10 w-10 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    title: "Jednostki Administracyjne", 
    desc: "Wspieramy miasta, gminy i powiaty w utrzymaniu zbiorników wodnych i infrastruktury hydrotechnicznej.", 
    href: "/dla-kogo/jednostki-administracyjne",
    icon: (
      <svg className="mb-4 h-10 w-10 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    )
  },
  { 
    title: "Rolnicy i Hodowcy Ryb",   
    desc: "Pomagamy w utrzymaniu melioracji, czyszczeniu rowów, stawów hodowlanych i poprawie retencji na terenach rolnych.", 
    href: "/dla-kogo/rolnicy-i-hodowcy-ryb",
    icon: (
      <svg className="mb-4 h-10 w-10 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
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
    title: "Obiekty Turystyczne",     
    desc: "Dbamy o estetykę i funkcjonalność stawów, jezior i linii brzegowych przy hotelach i obiektach wypoczynkowych.", 
    href: "/dla-kogo/obiekty-turystyczne",
    icon: (
      <svg className="mb-4 h-10 w-10 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  { 
    title: "Osoby Prywatne",          
    desc: "Oferujemy kompleksowe prace przy oczkach wodnych, stawach i trudno dostępnych działkach.", 
    href: "/dla-kogo/osoby-prywatne",
    icon: (
      <svg className="mb-4 h-10 w-10 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
] as const;

const FILARY = [
  { n: "01", title: "Specjalistyczny sprzęt",     body: "Koparki pływające, gąsienicowe, amfibie – nasz codzienny arsenał. Docieramy tam, gdzie inni odmawiają." },
  { n: "02", title: "Kompleksowa realizacja",      body: "Refulacja, kopanie, koszenie, transport – jeden zespół, jeden plan, jeden efekt. Bez podwykonawców." },
  { n: "03", title: "Odpowiedzialność za efekt",   body: "Bierzemy odpowiedzialność za całość – od planowania po ostatni etap. Raz, a dobrze. Zgodnie z harmonogramem." },
] as const;

/* ════════════════════════════════════════════════════════════
   HELPERS
════════════════════════════════════════════════════════════ */

function SL({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`section-label${light ? " section-label--light" : ""}`}>
      {children}
    </span>
  );
}

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative flex flex-col overflow-hidden" style={{ minHeight: "calc(var(--real-vh, 100svh) - 5.25rem)" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src={videoUrl("video-tlo.mp4")} type="video/mp4" />
        </video>

        {/* Warstwa ciemności – profesjonalny, gładki overlay */}
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />

        {/* Dekoracyjny ukośny separator po prawej */}
        <div
          className="absolute right-0 top-0 h-full w-[38%] hidden lg:block"
          style={{ background: "linear-gradient(to left, rgba(20,184,166,0.07) 0%, transparent 100%)" }}
        />

        {/* Treść */}
        <div className="relative z-10 flex flex-1 flex-col">
          <div className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-4 py-20 sm:py-32 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-center flex flex-col items-center">
              <SL light>Specjaliści od trudnego terenu</SL>

              <h1 className="display-heading mt-5 text-white text-4xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight max-w-4xl">
                Prace hydrotechniczne<br />
                <span className="text-[#7dd3fc]">w trudnym terenie</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-xl text-slate-200 leading-relaxed font-medium">
                Wchodzimy tam, gdzie inni się cofają.{" "}
                <span className="text-white font-bold">Bagna, torfy, cieki wodne</span> – to nasz codzienny teren pracy.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto sm:gap-4">
                <Link
                  href="/darmowa-konsultacja"
                  className="btn-pulse flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white transition-all shadow-lg shadow-sky-900/20"
                  style={{ background: "var(--hb-water)" }}
                >
                  Potrzebuję wsparcia
                  <ArrowRight />
                </Link>
                <Link
                  href="/realizacje"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/20"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Zobacz realizacje
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. CO MOŻEMY DLA CIEBIE ZROBIĆ – karty ze zdjęciami
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header sekcji */}
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SL>Zakres prac</SL>
              <h2 className="display-heading mt-3 text-slate-900" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)" }}>
                Co możemy{" "}
                <span className="relative">
                  dla Ciebie
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden>
                    <path d="M0,6 Q50,0 100,5 T200,4" fill="none" stroke="var(--hb-water)" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                zrobić?
              </h2>
            </div>
            <Link href="/uslugi" className="hidden items-center gap-2 text-sm font-semibold hover:opacity-80 sm:flex" style={{ color: "var(--hb-water)" }}>
              Wszystkie usługi <ArrowRight />
            </Link>
          </div>

          {/* 4 karty ze zdjęciami i tekstem poniżej */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {USLUGI.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group @container/uslugi flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-500 ease-in-out hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={imageUrl(item.img)}
                    alt={item.title.replace(/\n/g, " ")}
                    fill
                    className="object-cover brightness-[1.02] contrast-[1.04] saturate-[1.06] transition-transform duration-700 ease-in-out will-change-transform group-hover:scale-[1.04]"
                    sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a2744]/18 via-sky-700/[0.04] to-white/12"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-200/[0.04] via-transparent to-[#0284c7]/[0.07]"
                    aria-hidden
                  />
                </div>
                {/* Treść */}
                <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-5 xl:p-8">
                  <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {item.short}
                  </p>
                  <h3
                    className="display-heading mb-3 min-h-[2.5lh] whitespace-pre-line leading-tight text-slate-900"
                    style={{
                      fontSize: "clamp(0.875rem, 0.55rem + 3.8cqi, 1.375rem)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0284c7] transition-colors group-hover:text-[#0369a1]">
                    Dowiedz się więcej 
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. DLA KOGO – ciemne tło
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32">
        {/* Tło sekcji ze zdjęciem */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imageUrl("koparka-plywajaca-kopanie-odmulanie-teren-podmokly.jpg")}
            alt="Tło"
            fill
            className="object-cover opacity-[0.44] saturate-[0.72] brightness-[0.88] contrast-[1.05]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(7,30,50,0.78) 0%, rgba(10,39,68,0.62) 42%, rgba(7,30,50,0.78) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Nagłówek */}
          <div className="mb-16 text-center">
            <SL light>Grupy klientów</SL>
            <h2
              className="display-heading mt-4 text-white"
              style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)" }}
            >
              Z jakimi sektorami{" "}
              <span className="font-semibold text-[#38bdf8]">współpracujemy?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-slate-100">
              Obsługujemy zarówno inwestycje komercyjne, jak i projekty wymagające szczególnej wrażliwości środowiskowej.
            </p>
          </div>

          {/* Siatka – 3 kolumny na desktop, każda karta z lewą akcentową kreską */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SEKTORY.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(2,132,199,0.18)]"
                style={{ background: "#0f172a", border: "1px solid rgba(255,255,255,.1)" }}
              >
                {/* Niebieska lewa krawędź pokazująca się przy hover */}
                <span className="pointer-events-none absolute inset-y-0 left-0 w-[3px] rounded-l-2xl bg-[#0284c7] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Numer w tle */}
                <span className="display-heading absolute right-6 top-6 text-6xl font-black transition-all duration-300 group-hover:text-[#38bdf8]/10" style={{ color: "rgba(255,255,255,.03)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] w-fit">
                  {item.icon}
                </span>

                <h3 className="mb-3 text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#38bdf8]">{item.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-white/75 transition-colors duration-300 group-hover:text-white/95">
                  {item.desc}
                </p>

                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
                  Dowiedz się więcej <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. DLACZEGO HYDROBAGGER – split layout
      ══════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Lewa – zdjęcie */}
            <div className="relative order-2 lg:order-1">
              <div className="img-card overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto lg:h-[560px]">
                <Image
                  src={imageUrl("koparka-plywajaca-zestaw-refulacyjny-hydrobagger.jpg")}
                  alt="Koparka pływająca z zestawem refulacyjnym HydroBagger"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
              {/* Kafelek – unikalna przewaga */}
              <div
                className="absolute -bottom-4 -right-3 lg:-right-6 max-w-[205px] rounded-xl p-4 shadow-xl"
                style={{ background: "linear-gradient(135deg, #0f172a 0%, #0c2d4a 100%)", border: "1px solid rgba(56,189,248,0.18)" }}
              >
                <div className="mb-2.5 flex items-center justify-between gap-2">
                  <p className="text-[0.7rem] font-bold uppercase tracking-widest text-[#38bdf8] leading-tight whitespace-nowrap">Unikalna przewaga</p>
                  <div className="shrink-0 flex h-5 w-5 items-center justify-center rounded" style={{ background: "rgba(2,132,199,0.18)" }}>
                    <svg className="h-3 w-3 text-[#38bdf8]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                </div>
                <p className="text-[0.72rem] leading-snug text-white">
                  Pogłębiamy i odsysamy muł w tym samym czasie.
                </p>
              </div>
            </div>

            {/* Prawa – tekst */}
            <div className="order-1 lg:order-2">
              <SL>Nasza przewaga</SL>
              <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(2.2rem,4vw,3rem)" }}>
                Dlaczego <span style={{ color: "var(--hb-water)" }}>HydroBagger?</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Nie ma terenu, który by nas zatrzymał. Działamy tam, gdzie standardowy sprzęt i ekipy mówią „nie da rady" – i właśnie to nas wyróżnia.
              </p>

              <div className="mt-10 space-y-7">
                {FILARY.map((p) => (
                  <div key={p.n} className="flex gap-5">
                    <span
                      className="display-heading mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm text-white"
                      style={{ background: "linear-gradient(135deg, var(--hb-water), #0369a1)" }}
                    >
                      {p.n}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex justify-center sm:justify-start">
                <Link
                  href="/o-nas"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0284c7] px-7 py-3 text-sm font-bold text-[#0284c7] transition-all hover:bg-[#0284c7] hover:text-white"
                >
                  Poznaj nasz zespół <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <BrandsMarquee />

      <ContactConsultationSection />
    </>
  );
}
