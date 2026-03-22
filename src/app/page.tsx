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

const STATS = [
  { value: "15+",  label: "lat doświadczenia" },
  { value: "200+", label: "zrealizowanych projektów" },
  { value: "12",   label: "maszyn specjalistycznych" },
  { value: "24h",  label: "czas reakcji" },
] as const;

const USLUGI = [
  {
    title: "Kopanie w trudnym terenie",
    short: "Bagna · torfy · woda",
    desc: "Koparka nie wjedzie? My wpływamy. Kopiemy w bagnach, torfach i wodzie – tam, gdzie inni nie dojadą.",
    href: "/uslugi/kopanie-w-trudnym-terenie",
    img: "koparka-plywajaca-kopanie-torfowisko01.jpg",
  },
  {
    title: "Koszenie roślinności i mulczowanie",
    short: "Brzegi · kanały · zbiorniki",
    desc: "Zarośnięte brzegi i dna? Czyścimy to. Usuwamy roślinność nad wodą i pod wodą.",
    href: "/uslugi/koszenie-i-mulczowanie-roslinnosci",
    img: "koszenie-roslinnosci-wodnej-kosiarka-plywajaca-w-akcji1.jpg",
  },
  {
    title: "Refulacja i odwadnianie osadów",
    short: "Muł · osady · zbiorniki",
    desc: "Zalegający muł? Odessany i odwodniony. Oczyszczamy zbiorniki z osadów metodą refulacji.",
    href: "/uslugi/refulacia-i-odwadnianie-osadow",
    img: "koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg",
  },
  {
    title: "Transport w trudnym terenie",
    short: "Błoto · torf · woda",
    desc: "Gdzie nie wjedzie nikt – my dowozimy. Transportujemy sprzęt i materiały przez błoto i wodę.",
    href: "/uslugi/transport-w-trudnym-terenie",
    img: "wozidlo-gasienicowe-transport-koparka-podmokly-teren1.jpg",
  },
] as const;

const SEKTORY = [
  { title: "Sektor Budowlany",        desc: "Wspieramy wykonawców przy pracach ziemnych w trudnym terenie – na torfowiskach, bagnach i wodzie.", href: "/dla-kogo/sektor-budowlany" },
  { title: "Ochrona Środowiska",      desc: "Realizujemy działania renaturyzacyjne i ochrony bioróżnorodności – z Parkami Krajobrazowymi i RDOŚ.", href: "/dla-kogo/ochrona-srodowiska" },
  { title: "Jednostki Administracyjne", desc: "Wspieramy miasta, gminy i powiaty w utrzymaniu zbiorników wodnych i infrastruktury hydrotechnicznej.", href: "/dla-kogo/jednostki-administracyjne" },
  { title: "Rolnicy i Hodowcy Ryb",   desc: "Czyszczenie rowów, stawów hodowlanych i poprawa retencji na terenach rolnych.", href: "/dla-kogo/rolnicy-i-hodowcy-ryb" },
  { title: "Obiekty Turystyczne",     desc: "Estetyka i funkcjonalność stawów, jezior i linii brzegowych przy hotelach i obiektach wypoczynkowych.", href: "/dla-kogo/obiekty-turystyczne" },
  { title: "Osoby Prywatne",          desc: "Kompleksowe prace przy oczkach wodnych, stawach i trudno dostępnych działkach.", href: "/dla-kogo/osoby-prywatne" },
] as const;

const FILARY = [
  { n: "01", title: "Specjalistyczny sprzęt",     body: "Koparki pływające, gąsienicowe, amfibie – nasz codzienny arsenał. Docieramy tam, gdzie inni odmawiają." },
  { n: "02", title: "Kompleksowa realizacja",      body: "Refulacja, kopanie, koszenie, transport – jeden zespół, jeden plan, jeden efekt. Bez podwykonawców." },
  { n: "03", title: "Odpowiedzialność za efekt",   body: "Bierzemy odpowiedzialność za całość – od planowania po ostatni etap. Raz, a dobrze. Zgodnie z harmonogramem." },
] as const;

const OPINIE = [
  { quote: "Prace wykonane przez HydroBagger w naszym obiekcie przebiegły sprawnie i profesjonalnie.", author: "Damian Rapacki", role: "Kierownik Projektu", company: "Budimex S.A." },
  { quote: "Zdecydowanie polecam każdemu, kto szuka partnera z misją, pasją i odpowiedzialnym podejściem.", author: "Piotr Chara", role: "Przedstawiciel", company: "Fundacja Zielonej Doliny Odry i Warty" },
  { quote: "To firma, która potrafi dostosować się do wysokich wymagań – z pełnym przekonaniem polecam ich do współpracy.", author: "Jacek Forycki", role: "Dyrektor", company: "Poznańskie Ośrodki Sportu i Rekreacji | Malta" },
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

function WaveSep({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) {
  return (
    <div className="wave-sep" style={{ background: from }}>
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        style={{ display: "block", height: 56, transform: flip ? "scaleY(-1)" : undefined }}
        aria-hidden
      >
        <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill={to} />
      </svg>
    </div>
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
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        {/* BG video */}
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoUrl("video-tlo.mp4")} type="video/mp4" />
        </video>

        {/* Warstwa ciemności – ciemniejszy dół, żeby stats były czytelne */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(7,30,50,.68) 0%, rgba(7,30,50,.45) 40%, rgba(7,30,50,.82) 100%)" }} />

        {/* Dekoracyjny ukośny separator po prawej */}
        <div
          className="absolute right-0 top-0 h-full w-[38%] hidden lg:block"
          style={{ background: "linear-gradient(to left, rgba(20,184,166,0.07) 0%, transparent 100%)" }}
        />

        {/* Treść */}
        <div className="relative z-10 flex flex-1 flex-col">
          <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-32 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SL light>Specjaliści od trudnego terenu</SL>

              <h1
                className="display-heading mt-5 text-white"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
              >
                Prace hydro­techniczne<br />
                <span style={{ color: "#2dd4bf" }}>w trudnym terenie</span><br />
                i wodzie
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(255,255,255,.75)" }}>
                Wchodzimy tam, gdzie inni się cofają.{" "}
                <strong className="text-white font-semibold">Bagna, torfy, cieki wodne</strong> – to nasz codzienny teren pracy.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/darmowa-konsultacja"
                  className="btn-pulse inline-flex items-center gap-2 rounded-full bg-teal-500 px-8 py-4 text-base font-bold text-white transition hover:bg-teal-400"
                >
                  Potrzebuję wsparcia
                  <ArrowRight />
                </Link>
                <Link
                  href="/realizacje"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                  style={{ border: "1.5px solid rgba(255,255,255,.3)" }}
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

          {/* Stats bar przyklejony do dołu hero */}
          <div style={{ background: "rgba(7,22,40,0.88)", borderTop: "1px solid rgba(255,255,255,.07)" }}
            className="relative z-10 backdrop-blur-sm">
            <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/[.07] sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="px-6 py-6 text-center">
                  <div className="display-heading text-3xl text-teal-400 sm:text-4xl">{s.value}</div>
                  <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,.45)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
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
                    <path d="M0,6 Q50,0 100,5 T200,4" fill="none" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                zrobić?
              </h2>
            </div>
            <Link href="/uslugi" className="hidden items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-800 sm:flex">
              Wszystkie usługi <ArrowRight />
            </Link>
          </div>

          {/* 4 karty fullbleed ze zdjęciami */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {USLUGI.map((item) => (
              <Link key={item.href} href={item.href} className="img-card card-lift block" style={{ height: 420 }}>
                {/* Zdjęcie */}
                <Image
                  src={imageUrl(item.img)}
                  alt={item.title}
                  fill
                  className="img-fill"
                  sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                />
                {/* Treść na zdjęciu */}
                <div className="card-content">
                  <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.15em]" style={{ color: "#2dd4bf" }}>
                    {item.short}
                  </p>
                  <h3 className="display-heading text-xl text-white leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[0.8rem] leading-relaxed mb-4" style={{ color: "rgba(255,255,255,.72)" }}>
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal-300">
                    Dowiedz się więcej <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. DLA KOGO – ciemne tło
      ══════════════════════════════════════════════════════ */}
      <WaveSep from="#ffffff" to="#071e32" />
      <section className="py-24 lg:py-32" style={{ background: "linear-gradient(155deg,#071e32 0%,#0a2a1e 55%,#071e32 100%)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Nagłówek */}
          <div className="mb-16 text-center">
            <SL light>Grupy klientów</SL>
            <h2 className="display-heading mt-4 text-white" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)" }}>
              Z jakimi sektorami <span style={{ color: "#2dd4bf" }}>współpracujemy?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "rgba(255,255,255,.55)" }}>
              Obsługujemy zarówno inwestycje komercyjne, jak i projekty wymagające szczególnej wrażliwości środowiskowej.
            </p>
          </div>

          {/* Siatka – 3 kolumny na desktop, każda karta z lewą akcentową kreską */}
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: "rgba(255,255,255,.05)" }}>
            {SEKTORY.map((item, i) => (
              <article
                key={item.href}
                className="group relative flex flex-col p-8 transition"
                style={{ background: "linear-gradient(155deg,#0a1f35,#071e32)" }}
              >
                {/* Numer */}
                <span className="display-heading mb-4 block text-5xl" style={{ color: "rgba(255,255,255,.07)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Lewa kreska */}
                <div className="absolute left-0 top-8 h-10 w-1 rounded-r bg-teal-500 opacity-0 transition-opacity group-hover:opacity-100" />
                <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.55)" }}>
                  {item.desc}
                </p>
                <Link href={item.href} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-400 transition hover:text-teal-300">
                  Dowiedz się więcej <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <WaveSep from="#071e32" to="#f8fafc" flip />

      {/* ══════════════════════════════════════════════════════
          4. DLACZEGO HYDROBAGGER – split layout
      ══════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Lewa – zdjęcie */}
            <div className="relative order-2 lg:order-1">
              <div className="img-card" style={{ height: 560 }}>
                <div
                  className="img-fill h-full w-full rounded-2xl"
                  style={{ background: "linear-gradient(135deg,#0e7490,#14532d)", opacity: 0.25 }}
                  data-placeholder="dlaczego-zdjecie"
                />
                {/* placeholder label */}
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
                  <p className="text-sm text-white/40">← zdjęcie z CDN</p>
                </div>
              </div>
              {/* Odznaka */}
              <div
                className="absolute -right-4 -bottom-6 rounded-2xl px-6 py-5 text-white shadow-2xl lg:-right-8"
                style={{ background: "#0e7490" }}
              >
                <div className="display-heading text-4xl">15+</div>
                <div className="text-[0.65rem] font-bold uppercase tracking-widest opacity-75">lat doświadczenia</div>
              </div>
            </div>

            {/* Prawa – tekst */}
            <div className="order-1 lg:order-2">
              <SL>Nasza przewaga</SL>
              <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(2.2rem,4vw,3rem)" }}>
                Dlaczego <span className="text-teal-600">HydroBagger?</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Mamy sprzęt, który dociera tam, gdzie inni nie mogą. Koparki pływające, gąsienicowe, amfibie – to nasz codzienny arsenał.
              </p>

              <div className="mt-10 space-y-7">
                {FILARY.map((p) => (
                  <div key={p.n} className="flex gap-5">
                    <span
                      className="display-heading mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm text-white"
                      style={{ background: "linear-gradient(135deg,#0e7490,#0f766e)" }}
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

              <div className="mt-10">
                <Link
                  href="/o-nas"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-teal-600 px-7 py-3 text-sm font-bold text-teal-700 transition hover:bg-teal-600 hover:text-white"
                >
                  Poznaj nasz zespół <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. OPINIE
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <SL>Referencje</SL>
            <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)" }}>
              Co mówią o nas <span className="text-teal-600">klienci?</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {OPINIE.map((item, i) => (
              <blockquote
                key={i}
                className="card-lift flex flex-col rounded-2xl p-8"
                style={{ background: i === 1 ? "linear-gradient(135deg,#071e32,#0e7490)" : "#f8fafc", border: "1px solid", borderColor: i === 1 ? "transparent" : "#e2e8f0" }}
              >
                {/* Cudzysłów */}
                <div className="mb-5 text-5xl font-black leading-none" style={{ color: i === 1 ? "rgba(45,212,191,.4)" : "#2dd4bf", lineHeight: 1 }}>
                  &ldquo;
                </div>
                <p className={`mb-6 flex-1 text-[0.95rem] leading-relaxed italic ${i === 1 ? "text-white/90" : "text-slate-700"}`}>
                  {item.quote}
                </p>
                <footer className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black text-white"
                    style={{ background: i === 1 ? "rgba(255,255,255,.15)" : "#0e7490" }}
                  >
                    {item.author.charAt(0)}
                  </div>
                  <cite className="not-italic">
                    <span className={`block text-sm font-bold ${i === 1 ? "text-white" : "text-slate-900"}`}>{item.author}</span>
                    <span className={`block text-xs ${i === 1 ? "text-white/60" : "text-slate-500"}`}>{item.role}</span>
                    <span className={`block text-xs font-semibold ${i === 1 ? "text-teal-300" : "text-teal-600"}`}>{item.company}</span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. MARKI
      ══════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-10 text-center text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-400">
            Marki, które nam zaufały
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex h-14 w-36 items-center justify-center rounded-xl border bg-white text-xs text-slate-300"
                style={{ borderColor: "#e2e8f0" }}
                data-placeholder="logo-firmy"
              >
                Logo {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. CTA + FORMULARZ
      ══════════════════════════════════════════════════════ */}
      <WaveSep from="#f8fafc" to="#071e32" />
      <section
        className="py-24 lg:py-32"
        style={{ background: "linear-gradient(150deg,#071e32 0%,#0a2a1a 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            {/* Lewa */}
            <div>
              <SL light>Bezpłatna konsultacja</SL>
              <h2 className="display-heading mt-4 text-white" style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)" }}>
                Prace w trudnym terenie?{" "}
                <span style={{ color: "#2dd4bf" }}>Zacznijmy od rozmowy!</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,.7)" }}>
                Skorzystaj z bezpłatnej 20-minutowej konsultacji – opowiesz nam o swojej sytuacji, a my podpowiemy możliwe rozwiązania.
              </p>
              <p className="mt-3 text-base" style={{ color: "rgba(255,255,255,.45)" }}>
                Nie musisz mieć gotowego planu ani dokumentacji – wystarczy chęć, by coś z tym zrobić.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-black text-white" style={{ background: "#0e7490" }}>
                  LB
                </div>
                <div>
                  <div className="font-bold text-white">Leszek Białasik</div>
                  <div className="text-sm text-teal-400">HydroBagger.pl</div>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {[
                  "Bezpłatna 20-minutowa konsultacja",
                  "Szybka wycena bez zobowiązań",
                  "Znajomość trudnych terenów i regulacji środowiskowych",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3" style={{ color: "rgba(255,255,255,.7)" }}>
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "rgba(20,184,166,.2)" }}
                    >
                      <svg className="h-3 w-3 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Prawa – formularz */}
            <div
              className="rounded-2xl p-8 lg:p-10"
              style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}
            >
              <h3 className="mb-6 text-xl font-bold text-white">Napisz do nas</h3>
              <form className="flex flex-col gap-4" action="#" method="post" noValidate>
                {[
                  { id: "name",    label: "Imię i nazwisko", type: "text",  ph: "Jan Kowalski",       req: true  },
                  { id: "email",   label: "E-mail",           type: "email", ph: "jan@example.com",    req: true  },
                  { id: "phone",   label: "Telefon",          type: "tel",   ph: "+48 123 456 789",    req: false },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={`contact-${f.id}`} className="mb-1.5 block text-sm font-medium" style={{ color: "rgba(255,255,255,.6)" }}>
                      {f.label}
                    </label>
                    <input
                      id={`contact-${f.id}`}
                      type={f.type}
                      name={f.id}
                      required={f.req}
                      placeholder={f.ph}
                      className="w-full rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:ring-2 focus:ring-teal-500/40"
                      style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)" }}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="contact-msg" className="mb-1.5 block text-sm font-medium" style={{ color: "rgba(255,255,255,.6)" }}>
                    Wiadomość
                  </label>
                  <textarea
                    id="contact-msg"
                    name="message"
                    rows={4}
                    placeholder="Opowiedz nam o swoim projekcie..."
                    className="w-full rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:ring-2 focus:ring-teal-500/40"
                    style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-pulse mt-2 w-full rounded-full bg-teal-500 py-4 text-base font-bold text-white transition hover:bg-teal-400"
                >
                  Wyślij wiadomość
                </button>
                <p className="text-center text-xs" style={{ color: "rgba(255,255,255,.3)" }}>
                  Odpowiadamy zwykle w ciągu 24 godzin.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
