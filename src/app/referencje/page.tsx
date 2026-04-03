import { JsonLdWebPage } from "@/components/JsonLdWebPage";
import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import { imageUrl } from "@/lib/images";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { ContactConsultationSection } from "@/components/ContactConsultationSection";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const REFERENCJE_SEO = getSEO("/referencje")!;
export const metadata: Metadata = metadataFromSEO(REFERENCJE_SEO);

/* ────────────────────────────────────────────────────────── */

function SL({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`section-label${light ? " section-label--light" : ""}`}>{children}</span>;
}

const REFERENCJE = [
  {
    id: "fundacja",
    quote:
      "To była trudna technicznie lecz bardzo owocna w osiągnięciu przyrodniczych efektów współpraca. I, co muszę tu wspomnieć, bardzo przyjemna w ludzkim wymiarze. Leszek i jego zespół fachowców, z uwagą i uznaniem wsłuchują się w zależności, których ostatecznym celem ma być pomoc ginącej przyrodzie. W nieprzyjaznych dla ludzi i sprzętu warunkach działali skutecznie, z profesjonalizmem i radością (!) wiedząc jaki cel przyświeca tym pracom. Nasz zespół merytoryczny, ornitologów i hydrobiologów natychmiast złapał kontakt z zespołem technicznym (firmą Hydrobagger), trudno mi było sobie wyobrazić lepszy team. Zdecydowanie polecam każdemu, kto szuka partnera z misją, pasją i odpowiedzialnym podejściem.",
    author: "Piotr Chara",
    role: "Współzałożyciel i prezes",
    company: "Fundacja Zielonej Doliny Odry i Warty",
    initials: "PC",
    tag: "Ochrona środowiska",
    pdf: null,
    logo: "Logo-fundacja-zielonej-doliny.png",
    logoBg: "transparent",
  },
  {
    id: "malta",
    quote:
      "Podczas Młodzieżowych Mistrzostw Świata w wioślarstwie na jeziorze Malta w Poznaniu, firma Usługowo Handlowa DIUNA Leszek Białasik odpowiadała za wykaszanie i oczyszczanie torów. Operator działał elastycznie, pracując między wyścigami, bez wpływu na przebieg zawodów. Mimo trudnych warunków tor był utrzymany wzorowo przez cały czas trwania imprezy. To firma, która potrafi dostosować się do wysokich wymagań – z pełnym przekonaniem polecam ich do współpracy przy wydarzeniach na najwyższym poziomie.",
    author: "Jarosław Forycki",
    role: "Dyrektor",
    company: "Poznańskie Ośrodki Sportu i Rekreacji | Malta",
    initials: "JF",
    tag: "Sport i rekreacja",
    pdf: imageUrl("MA.401.8.2025-referencje-DIUNA.pdf"),
    logo: "Logo_posir1.png",
    logoBg: "#ffffff",
  },
] as const;

const STATS = [
  { n: "100+", label: "zrealizowanych projektów" },
  { n: "6+", label: "rodzajów sprzętu" },
] as const;

/* ────────────────────────────────────────────────────────── */

export default function ReferencjePage() {
  return (
    <>
      <JsonLdWebPage seo={REFERENCJE_SEO} />
      {/* ══════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(ellipse 70% 50% at 70% 50%, rgba(2,132,199,0.10) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <SL>Referencje</SL>
              <h1
                className="display-heading mt-4 text-slate-900"
                style={{ fontSize: "clamp(2.4rem,5vw,4rem)" }}
              >
                Sprawdź referencje{" "}
                <span style={{ color: "var(--hb-water)" }}>HydroBagger</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
                Opinie klientów, z którymi mieliśmy przyjemność pracować. Każda realizacja to nowe wyzwanie – i nowe potwierdzenie, że najtrudniejszy teren da się pokonać.
              </p>
            </div>

            {/* Statystyki */}
            <div className="flex flex-wrap gap-5 lg:flex-shrink-0">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="min-w-[130px] rounded-2xl px-6 py-5 text-center"
                  style={{ background: "rgba(2,132,199,0.06)", border: "1px solid rgba(2,132,199,0.15)" }}
                >
                  <p className="display-heading text-3xl font-black" style={{ color: "var(--hb-water)" }}>
                    {s.n}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. GŁÓWNE REFERENCJE
      ══════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10">
            {REFERENCJE.map((ref) => (
              <article
                key={ref.id}
                className="overflow-hidden rounded-3xl bg-white shadow-sm"
                style={{ border: "1px solid #e2e8f0" }}
              >
                {/* Treść ~2/3, grafika ~1/3 szerokości (na mobile: treść, potem grafika na dole) */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                  <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                    <div className="mb-6">
                      <span
                        className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                        style={{ background: "rgba(2,132,199,0.1)", color: "var(--hb-water)" }}
                      >
                        {ref.tag}
                      </span>
                    </div>

                    <p
                      className="display-heading mb-3 font-black select-none"
                      style={{ fontSize: "4.5rem", color: "rgba(2,132,199,0.12)", lineHeight: 1 }}
                      aria-hidden
                    >
                      &ldquo;
                    </p>

                    <blockquote className="-mt-4 flex-1">
                      <p className="text-base italic leading-relaxed text-slate-700 sm:text-[1.05rem]">
                        {ref.quote}
                      </p>
                    </blockquote>

                    <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                      <footer className="flex items-center gap-4">
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-black text-white"
                          style={{ background: "linear-gradient(135deg, var(--hb-water), #0369a1)" }}
                        >
                          {ref.initials}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{ref.author}</p>
                          <p className="text-sm text-slate-500">{ref.role}</p>
                          <p className="text-sm font-semibold" style={{ color: "var(--hb-water)" }}>
                            {ref.company}
                          </p>
                        </div>
                      </footer>

                      {ref.pdf && (
                        <Link
                          href={ref.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#0284c7] px-6 py-2.5 text-sm font-bold text-[#0284c7] transition-all hover:bg-[#0284c7] hover:text-white"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Pobierz referencję (PDF)
                        </Link>
                      )}
                    </div>
                  </div>

                  <div
                    className="flex min-h-[200px] items-center justify-center border-t border-slate-100 p-6 sm:p-8 lg:min-h-0 lg:border-l lg:border-t-0 lg:p-8 lg:py-10"
                    style={{ backgroundColor: ref.logoBg }}
                  >
                    <div className="relative aspect-square w-full max-w-[min(100%,280px)] lg:max-w-none">
                      <Image
                        src={imageUrl(ref.logo)}
                        alt={ref.company}
                        fill
                        className="object-contain p-5 sm:p-6 lg:p-8"
                        sizes="(max-width:1024px) min(280px, 85vw), 33vw"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. CTA
      ══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: "var(--hb-navy)" }}>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SL light>Twój projekt</SL>
          <h2
            className="display-heading mt-4 text-white"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}
          >
            Zostań kolejnym zadowolonym{" "}
            <span style={{ color: "#7dd3fc" }}>klientem</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Masz projekt wymagający specjalistycznego sprzętu w trudnym terenie?
            Porozmawiajmy – bez zobowiązań, bezpłatnie.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/darmowa-konsultacja"
              className="btn-pulse flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white sm:w-auto"
              style={{ background: "var(--hb-water)" }}
            >
              Bezpłatna konsultacja
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. MARKI
      ══════════════════════════════════════════════════ */}
      <BrandsMarquee />

      {/* ══════════════════════════════════════════════════
          5. KONTAKT
      ══════════════════════════════════════════════════ */}
      <ContactConsultationSection />
    </>
  );
}
