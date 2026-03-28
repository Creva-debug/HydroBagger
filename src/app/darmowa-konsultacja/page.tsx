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
  "Mamy problem z dojazdem sprzętu – czy Wasze maszyny sobie poradzą?",
  "Czy można odtworzyć retencję wodną na podmokłym terenie?",
] as const;

const KLIENCI = [
  { emoji: "🏢", text: "Jednostki samorządowe i administracyjne" },
  { emoji: "🏗️", text: "Kierownicy kontraktów w sektorze budowlanym" },
  { emoji: "🌿", text: "Koordynatorzy projektów środowiskowych" },
  { emoji: "👤", text: "Właściciele prywatnych działek i gospodarstw" },
  { emoji: "🏨", text: "Zarządcy hoteli i obiektów rekreacyjnych" },
  { emoji: "🚜", text: "Gospodarstwa rolne i spółki wodne" },
] as const;

const PO_KONSULTACJI = [
  { emoji: "🛠️", title: "Wstępne rozwiązania techniczne" },
  { emoji: "📝", title: "Informację, co możemy zrobić, a czego nie" },
  { emoji: "💰", title: "Wycena lub informacja, czego potrzebujemy, by ją przygotować" },
  { emoji: "📅", title: "Propozycję kolejnych kroków (jeśli zdecydujesz się na realizację)" },
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

function SplitImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-lg ${className}`}>
      <Image src={imageUrl(src)} alt={alt} fill className="object-cover brightness-[1.02] contrast-[1.02] saturate-[0.92]" sizes="(max-width:1024px) 100vw, 50vw" />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a2744]/28 via-sky-900/[0.06] to-white/20"
        aria-hidden
      />
    </div>
  );
}

const breadcrumb = (
  <nav className="mb-8 text-sm text-slate-500" aria-label="Nawigacja okruszkowa">
    <Link href="/" className="transition hover:text-[var(--hb-water)]">
      Strona główna
    </Link>
    <span className="mx-2 text-slate-400" aria-hidden>
      /
    </span>
    <span className="text-slate-700">Darmowa konsultacja</span>
  </nav>
);

export default function DarmowaKonsultacjaPage() {
  return (
    <>
      <ContactConsultationSection
        id="formularz-konsultacji"
        formFirst
        isPageLead
        topSlot={breadcrumb}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <SplitImage src="koparka-plywajaca-zestaw-refulacyjny-hydrobagger.jpg" alt="Sprzęt hydrotechniczny HydroBagger przy pracy" />
            <div>
              <span className="section-label">Rozmowa</span>
              <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.85rem,3.5vw,2.75rem)" }}>
                Jakie pytanie <span style={{ color: "var(--hb-water)" }}>możesz zadać?</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">Nie musisz znać technologii – wystarczy, że opiszesz problem.</p>
              <p className="mt-2 font-semibold text-slate-800">Możesz zapytać o:</p>
              <ul className="mt-5 space-y-3">
                {PYTANIA.map((p) => (
                  <li key={p} className="flex gap-3 text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--hb-water)]" aria-hidden />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <span className="section-label">Klienci</span>
              <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.85rem,3.5vw,2.75rem)" }}>
                Z kim najczęściej <span style={{ color: "var(--hb-water)" }}>pracujemy?</span>
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Od samorządów po gospodarstwa – łączy Was potrzeba realnego działania w trudnym terenie i przy wodzie.
              </p>
              <ul className="mt-8 space-y-4">
                {KLIENCI.map((row) => (
                  <li key={row.text} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <span className="text-2xl leading-none" aria-hidden>
                      {row.emoji}
                    </span>
                    <span className="font-medium text-slate-800">{row.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <SplitImage src="koparka-plywajaca-kopanie-odmulanie-teren-podmokly.jpg" alt="Prace hydrotechniczne na terenie podmokłym" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <SplitImage src="koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg" alt="Refulacja i prace przy zbiorniku wodnym" />
            <div>
              <span className="section-label">Po rozmowie</span>
              <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.85rem,3.5vw,2.75rem)" }}>
                Co dalej po <span style={{ color: "var(--hb-water)" }}>konsultacji?</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">Po konsultacji otrzymasz:</p>
              <ul className="mt-6 space-y-4">
                {PO_KONSULTACJI.map((row) => (
                  <li key={row.title} className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-2xl shadow-inner" aria-hidden>
                      {row.emoji}
                    </span>
                    <span className="pt-2 font-medium leading-relaxed text-slate-800">{row.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-20 lg:py-28" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="section-label">FAQ</span>
            <h2 id="faq-heading" className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.85rem,3.5vw,2.75rem)" }}>
              Najczęściej zadawane <span style={{ color: "var(--hb-water)" }}>pytania</span>
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm open:shadow-md transition-shadow"
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
                <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-600">{item.a}</div>
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
