import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import { imageUrl } from "@/lib/images";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { ContactConsultationSection } from "@/components/ContactConsultationSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = (() => {
  const seo = getSEO("/o-nas");
  return seo
    ? metadataFromSEO(seo)
    : {
        title: "O nas – specjaliści od trudnego terenu | HydroBagger",
        description:
          "Poznaj firmę HydroBagger – łączymy doświadczenie z unikalnym sprzętem do pracy w wodzie i trudnym terenie. Działamy tam, gdzie inni nie mogą.",
      };
})();

function SL({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`section-label${light ? " section-label--light" : ""}`}>{children}</span>;
}

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(2,132,199,0.12)" }}>
      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} style={{ color: "var(--hb-water)" }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

const USLUGI_LIST = [
  "Pogłębianie i odmulanie zbiorników",
  "Refulacja i odwadnianie osadów",
  "Koszenie roślinności wodnej i brzegowej",
  "Transport w trudno dostępnych lokalizacjach",
] as const;

const WARTOSCI = [
  { n: "01", title: "Specjalistyczny sprzęt", body: "Koparki pływające, gąsienicowe, amfibie – nasz codzienny arsenał. Docieramy tam, gdzie inni odmawiają." },
  { n: "02", title: "Kompleksowa realizacja", body: "Refulacja, kopanie, koszenie, transport – jeden zespół, jeden plan, jeden efekt. Bez podwykonawców." },
  { n: "03", title: "Odpowiedzialność za efekt", body: "Bierzemy odpowiedzialność za całość – od planowania po ostatni etap. Raz, a dobrze. Zgodnie z harmonogramem." },
] as const;

const STATS = [
  { n: "100+", label: "zrealizowanych projektów" },
  { n: "6+", label: "rodzajów sprzętu" },
  { n: "4", label: "kategorie usług" },
] as const;

export default function ONasPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-16 lg:min-h-[80vh] lg:pb-24">
        <Image src={imageUrl("koparka-plywajaca-kopanie-torfowisko01.jpg")} alt="Koparka pływająca w terenie podmokłym" fill priority className="object-cover brightness-[0.65] saturate-[0.85]" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e32]/90 via-[#071e32]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071e32]/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SL light>O nas</SL>
          <h1 className="display-heading mt-4 text-white" style={{ fontSize: "clamp(2.6rem,5.5vw,4.5rem)" }}>
            Poznaj <span className="text-[#7dd3fc]">HydroBagger</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200 sm:text-xl">
            Specjaliści od prac hydrotechnicznych i ziemnych w najtrudniejszych warunkach. Sprawdź, co nas wyróżnia.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:max-w-xl">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl px-5 py-4 text-center backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <p className="display-heading text-2xl font-black sm:text-3xl" style={{ color: "#7dd3fc" }}>{s.n}</p>
                <p className="mt-0.5 text-xs font-medium text-slate-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CZYM SIĘ ZAJMUJEMY */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SL>Zakres działalności</SL>
              <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(2rem,3.8vw,3rem)" }}>
                Czym się <span style={{ color: "var(--hb-water)" }}>zajmujemy?</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Realizujemy specjalistyczne prace ziemno-wodne w trudnych warunkach terenowych. Działamy kompleksowo – łączymy odpowiedni sprzęt z doświadczeniem zdobytym w terenie.
              </p>
              <ul className="mt-8 space-y-3.5">
                {USLUGI_LIST.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckIcon />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/uslugi" className="btn-pulse mt-10 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white" style={{ background: "var(--hb-water)" }}>
                Sprawdź nasze usługi
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { img: "koparka-plywajaca-kopanie-odmulanie-teren-podmokly.jpg", label: "Pogłębianie" },
                { img: "koszenie-roslinnosci-wodnej-kosiarka-plywajaca-w-akcji1.jpg", label: "Koszenie" },
                { img: "koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg", label: "Refulacja" },
                { img: "wozidlo-gasienicowe-transport-koparka-podmokly-teren1.jpg", label: "Transport" },
              ].map((item, i) => (
                <div key={item.label} className={`img-card ${i === 0 ? "row-span-2" : ""}`} style={{ height: i === 0 ? "100%" : "160px" }}>
                  <Image src={imageUrl(item.img)} alt={item.label} fill className="img-fill object-cover brightness-[0.92] saturate-[0.88]" sizes="(max-width:640px) 50vw, 30vw" />
                  <div className="card-content"><span className="text-xs font-bold uppercase tracking-wider text-white/80">{item.label}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NASZA MISJA */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: "var(--hb-navy)" }}>
        <div className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full opacity-[0.06]" style={{ background: "var(--hb-water)" }} />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-[0.05]" style={{ background: "var(--hb-teal)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SL light>Misja</SL>
          <p className="mt-3 display-heading font-black select-none" style={{ fontSize: "6rem", color: "rgba(125,211,252,0.15)", lineHeight: 1 }} aria-hidden>&ldquo;</p>
          <h2 className="display-heading -mt-8 text-white" style={{ fontSize: "clamp(1.5rem,3.2vw,2.4rem)" }}>
            Pomagamy klientom rozwiązywać najtrudniejsze wyzwania terenowe i wodne – precyzyjnie, bezpiecznie i na czas.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Dostarczamy specjalistyczne usługi ziemno-wodne wszędzie tam, gdzie inni nie dają rady – wykorzystując unikalny sprzęt pływający, wyspecjalizowane zespoły i odpowiedzialne podejście do efektu końcowego.
          </p>
          <div className="mt-10">
            <Link href="/darmowa-konsultacja" className="btn-pulse inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white" style={{ background: "var(--hb-water)" }}>
              Skorzystaj z bezpłatnej konsultacji
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* DLACZEGO HYDROBAGGER */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr,2fr] lg:items-end">
            <div>
              <SL>Przewaga</SL>
              <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(2rem,3.8vw,3rem)" }}>
                Dlaczego <span style={{ color: "var(--hb-water)" }}>HydroBagger?</span>
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-600 lg:pb-1">
              Tam, gdzie teren się kończy, a zaczynają błoto, woda i trudne warunki – tam zaczyna się nasza praca. Mamy zaplecze techniczne i ludzi, którzy rozumieją, że najtrudniejsze tereny wymagają czegoś więcej niż standardowych rozwiązań.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {WARTOSCI.map((w) => (
              <div key={w.n} className="group relative overflow-hidden rounded-2xl p-8 transition-shadow duration-300 hover:shadow-xl" style={{ border: "1px solid #e2e8f0", background: "#ffffff" }}>
                <span className="display-heading pointer-events-none absolute right-5 top-3 select-none text-7xl font-black" style={{ color: "rgba(2,132,199,0.06)" }}>{w.n}</span>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl font-black text-white display-heading text-lg" style={{ background: "linear-gradient(135deg, var(--hb-water), #0369a1)" }}>{w.n}</div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{w.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{w.body}</p>
                <div className="mt-6 h-0.5 w-10 rounded-full transition-all duration-300 group-hover:w-20" style={{ background: "var(--hb-water)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <BrandsMarquee />
      <ContactConsultationSection />
    </>
  );
}
