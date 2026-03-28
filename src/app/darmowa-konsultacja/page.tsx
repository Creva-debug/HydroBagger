import { BrandsMarquee } from "@/components/BrandsMarquee";
import { ContactConsultationSection } from "@/components/ContactConsultationSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import { imageUrl } from "@/lib/images";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = (() => {
  const seo = getSEO("/darmowa-konsultacja");
  return seo ? metadataFromSEO(seo) : {};
})();

const PYTANIA = [
  "Czy jesteście w stanie pogłębić staw bez uszkodzenia otoczenia?",
  "Jak mogę usunąć roślinność wodną i brzegową z mojego zbiornika?",
  "Jak wygląda proces odwadniania osadów z geotub?",
  "Mamy problem z dojazdem sprzętu – czy Wasze maszyny dadzą radę?",
  "Czy można odtworzyć retencję wodną na podmokłym terenie?",
] as const;

const KLIENCI = [
  { icon: "🏢", text: "Jednostki samorządowe i administracyjne" },
  { icon: "🏗️", text: "Kierownicy kontraktów w sektorze budowlanym" },
  { icon: "🌿", text: "Koordynatorzy projektów środowiskowych" },
  { icon: "👤", text: "Właściciele prywatnych działek i gospodarstw" },
  { icon: "🏨", text: "Zarządcy hoteli i obiektów rekreacyjnych" },
  { icon: "🚜", text: "Gospodarstwa rolne i spółki wodne" },
] as const;

const PO_KONSULTACJI = [
  { title: "Wstępne rozwiązania techniczne", body: "Konkretne opcje dopasowane do Twojej sytuacji i terenu." },
  { title: "Informacja, co możemy zrobić", body: "Uczciwa ocena zakresu prac – bez owijania w bawełnę." },
  { title: "Wycena lub lista potrzebnych danych", body: "Wyceniamy od razu lub mówimy, czego potrzebujemy, by to zrobić." },
  { title: "Propozycja kolejnych kroków", body: "Jasny plan działania, jeśli zdecydujesz się na realizację." },
] as const;

const FAQ = [
  {
    q: "Czy możecie oczyścić staw, nie spuszczając z niego wody?",
    a: "Tak – w większości przypadków nie ma potrzeby spuszczania wody. Pracujemy sprzętem pływającym, który usuwa osad i roślinność bez opróżniania zbiornika.",
  },
  {
    q: "Ile czasu potrzebujecie na wykonanie typowych prac – np. pogłębienia i oczyszczenia stawu?",
    a: "To zależy od wielkości zbiornika i rodzaju osadów. Drobne prace trwają 1–2 dni, większe realizacje od kilku do kilkunastu dni. Szczegóły ustalamy po bezpłatnej konsultacji.",
  },
  {
    q: "Czy mogę zlecić Wam tylko jeden etap, np. transport osadów lub mulczowanie?",
    a: "Oczywiście – realizujemy również wybrane etapy, np. koszenie, zbiór biomasy, refulację lub sam transport urobku.",
  },
] as const;

function SplitImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-lg ${className}`}>
      <Image
        src={imageUrl(src)}
        alt={alt}
        fill
        className="object-cover brightness-[1.02] contrast-[1.02] saturate-[0.92]"
        sizes="(max-width:1024px) 100vw, 50vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a2744]/28 via-sky-900/[0.06] to-white/20" aria-hidden />
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-[var(--hb-water)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function DarmowaKonsultacjaPage() {
  return (
    <>
      {/* Formularz + opis – formularz po prawej */}
      <ContactConsultationSection id="formularz-konsultacji" isPageLead />

      {/* ── Jakie pytanie możesz zadać? ──────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <SplitImage
              src="koparka-plywajaca-zestaw-refulacyjny-hydrobagger.jpg"
              alt="Sprzęt hydrotechniczny HydroBagger przy pracy"
            />
            <div>
              <span className="section-label">Rozmowa</span>
              <h2
                className="display-heading mt-4 text-slate-900"
                style={{ fontSize: "clamp(1.85rem,3.5vw,2.75rem)" }}
              >
                Jakie pytanie<br />
                <span style={{ color: "var(--hb-water)" }}>możesz zadać?</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Nie musisz znać technologii – wystarczy, że opiszesz problem.
              </p>
              <ul className="mt-7 space-y-3">
                {PYTANIA.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100">
                      <CheckIcon />
                    </span>
                    <span className="leading-relaxed text-slate-700">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="#formularz-konsultacji"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white transition-all"
                  style={{ background: "var(--hb-water)" }}
                >
                  Zapytaj nas
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Z kim najczęściej pracujemy? ──────────────────── */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <span className="section-label">Klienci</span>
              <h2
                className="display-heading mt-4 text-slate-900"
                style={{ fontSize: "clamp(1.85rem,3.5vw,2.75rem)" }}
              >
                Z kim najczęściej{" "}
                <span style={{ color: "var(--hb-water)" }}>pracujemy?</span>
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Od samorządów po gospodarstwa – łączy Was potrzeba realnego działania w trudnym terenie i przy wodzie.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {KLIENCI.map((row) => (
                  <li
                    key={row.text}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm transition-shadow hover:shadow"
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg"
                      style={{ background: "rgba(2,132,199,0.08)" }}
                      aria-hidden
                    >
                      {row.icon}
                    </span>
                    <span className="text-sm font-semibold text-slate-700">{row.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <SplitImage
                src="koparka-plywajaca-kopanie-odmulanie-teren-podmokly.jpg"
                alt="Prace hydrotechniczne na terenie podmokłym"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Co dalej po konsultacji? ──────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <SplitImage
              src="koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg"
              alt="Refulacja i prace przy zbiorniku wodnym"
            />
            <div>
              <span className="section-label">Po rozmowie</span>
              <h2
                className="display-heading mt-4 text-slate-900"
                style={{ fontSize: "clamp(1.85rem,3.5vw,2.75rem)" }}
              >
                Co dalej po{" "}
                <span style={{ color: "var(--hb-water)" }}>konsultacji?</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Rozmowa to dopiero początek – po niej masz konkretne informacje.
              </p>
              <ol className="mt-8 space-y-6">
                {PO_KONSULTACJI.map((row, i) => (
                  <li key={row.title} className="flex items-start gap-5">
                    <span
                      className="display-heading flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                      style={{ background: "linear-gradient(135deg, var(--hb-water), #0369a1)" }}
                      aria-hidden
                    >
                      0{i + 1}
                    </span>
                    <div className="pt-1">
                      <p className="font-bold text-slate-900">{row.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">{row.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-slate-50 py-20 lg:py-28" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="section-label">FAQ</span>
            <h2
              id="faq-heading"
              className="display-heading mt-4 text-slate-900"
              style={{ fontSize: "clamp(1.85rem,3.5vw,2.75rem)" }}
            >
              Najczęściej zadawane{" "}
              <span style={{ color: "var(--hb-water)" }}>pytania</span>
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 font-bold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--hb-water)] transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-600">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <BrandsMarquee />
    </>
  );
}
