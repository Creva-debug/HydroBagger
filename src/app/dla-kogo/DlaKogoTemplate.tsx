import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { imageUrl } from "@/lib/images";
import { UsługiZakresCard } from "@/components/UsługiZakresCard";
import { USLUGI_ZAKRES_CARDS } from "@/lib/uslugi-zakres-cards";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { ContactConsultationSection } from "@/components/ContactConsultationSection";
import { DlaKogoFAQ, type FAQItem } from "./DlaKogoFAQ";

export type DlaKogoArea = { icon: ReactNode; title: string; body: string };

export type DlaKogoTemplateProps = {
  breadcrumbLabel: string;
  heroImage: string;
  heroAccent: string;
  heroLead: string;
  heroDetails?: string[];
  areas: DlaKogoArea[];
  faqTitle: string;
  faqItems: FAQItem[];
};

function SL({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`section-label${light ? " section-label--light" : ""}`}>{children}</span>;
}

export function DlaKogoTemplate({
  breadcrumbLabel,
  heroImage,
  heroAccent,
  heroLead,
  heroDetails = [],
  areas,
  faqTitle,
  faqItems,
}: DlaKogoTemplateProps) {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-16 lg:min-h-[80vh] lg:pb-24">
        <Image src={imageUrl(heroImage)} alt={breadcrumbLabel} fill priority className="object-cover brightness-[0.65] saturate-[0.85]" sizes="100vw" />
        <div className="absolute inset-0 bg-[#071e32]/45" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e32]/90 via-[#071e32]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071e32]/45 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SL light>Dla kogo?</SL>
          <h1 className="display-heading mt-3 text-white" style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)" }}>
            <span className="block">Wsparcie dla</span>
            <span className="mt-2 block leading-tight" style={{ color: "#7dd3fc" }}>
              {heroAccent}
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-100">{heroLead}</p>
          {heroDetails.map((d, i) => (
            <p key={i} className="mt-2 max-w-2xl text-base leading-relaxed text-slate-200">
              {d}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/darmowa-konsultacja" className="btn-pulse inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white" style={{ background: "var(--hb-water)" }}>
              Bezpłatna konsultacja
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <a href="tel:+48504026042" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/20">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              +48 504 026 042
            </a>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SL>Zakres wsparcia</SL>
            <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
              Najczęstsze obszary <span style={{ color: "var(--hb-water)" }}>wsparcia</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div key={area.title} className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg, var(--hb-water), #0369a1)" }}>
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{area.icon}</svg>
                </div>
                <h3 className="font-bold text-slate-900">{area.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USŁUGI – kafelki jak w sekcji „Zakres prac” na stronie głównej */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-16">
            <SL>Nasze usługi</SL>
            <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
              Co możemy <span style={{ color: "var(--hb-water)" }}>dla Ciebie zrobić?</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {USLUGI_ZAKRES_CARDS.map((item) => (
              <UsługiZakresCard key={item.href} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <DlaKogoFAQ title={faqTitle} items={faqItems} />

      <TestimonialsSection />
      <BrandsMarquee />
      <ContactConsultationSection />
    </>
  );
}
