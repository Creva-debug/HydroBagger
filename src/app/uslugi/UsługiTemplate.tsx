import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { ContactConsultationSection } from "@/components/ContactConsultationSection";
import { imageUrl } from "@/lib/images";

const INNE_USLUGI_DATA = [
  { slug: "kopanie-w-trudnym-terenie", href: "/uslugi/kopanie-w-trudnym-terenie", title: "Kopanie w trudnym terenie", tagline: "Kopiemy w bagnach, torfach i wodzie – tam, gdzie inni nie dojadą.", img: "koparka-plywajaca-kopanie-torfowisko01.jpg" },
  { slug: "koszenie-i-mulczowanie-roslinnosci", href: "/uslugi/koszenie-i-mulczowanie-roslinnosci", title: "Koszenie i mulczowanie roślinności", tagline: "Usuwamy roślinność nad wodą i pod wodą, przy brzegach i w kanałach.", img: "koszenie-roslinnosci-wodnej-kosiarka-plywajaca-w-akcji1.jpg" },
  { slug: "refulacia-i-odwadnianie-osadow", href: "/uslugi/refulacia-i-odwadnianie-osadow", title: "Refulacja i odwadnianie osadów", tagline: "Oczyszczamy zbiorniki z osadów metodą refulacji – bez spuszczania wody.", img: "koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg" },
  { slug: "transport-w-trudnym-terenie", href: "/uslugi/transport-w-trudnym-terenie", title: "Transport w trudnym terenie", tagline: "Transportujemy sprzęt i materiały przez błoto, wodę i bezdroża.", img: "wozidlo-gasienicowe-transport-koparka-podmokly-teren1.jpg" },
] as const;

export type UsługiStep = { n: string; title: string; body: string };

export type UsługiTemplateProps = {
  breadcrumbLabel: string;
  heroImage: string;
  heroTitleAccent: string;
  heroTitleRest: string;
  heroLead: string;
  heroDetails?: string[];
  praceName: string;
  praceItems: string[];
  steps: UsługiStep[];
  gallery?: { src: string; alt: string }[];
  currentSlug: string;
};

function SL({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`section-label${light ? " section-label--light" : ""}`}>{children}</span>;
}

export function UsługiTemplate({
  breadcrumbLabel,
  heroImage,
  heroTitleAccent,
  heroTitleRest,
  heroLead,
  heroDetails = [],
  praceName,
  praceItems,
  steps,
  gallery = [],
  currentSlug,
}: UsługiTemplateProps) {
  const otherServices = INNE_USLUGI_DATA.filter((s) => s.slug !== currentSlug);
  const gallCols = gallery.length <= 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[65vh] items-end overflow-hidden pb-14 lg:pb-20">
        <Image src={imageUrl(heroImage)} alt={breadcrumbLabel} fill priority className="object-cover brightness-[0.62] saturate-[0.8]" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e32]/90 via-[#071e32]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071e32]/25 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-white">HydroBagger</Link>
            <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <Link href="/uslugi" className="transition-colors hover:text-white">Usługi</Link>
            <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-white/90">{breadcrumbLabel}</span>
          </nav>
          <SL light>Usługi</SL>
          <h1 className="display-heading mt-3 text-white" style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)" }}>
            <span style={{ color: "#7dd3fc" }}>{heroTitleAccent}</span>{heroTitleRest}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">{heroLead}</p>
          {heroDetails.map((d, i) => <p key={i} className="mt-2 max-w-2xl text-base leading-relaxed text-slate-300">{d}</p>)}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/darmowa-konsultacja" className="btn-pulse inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white" style={{ background: "var(--hb-water)" }}>
              Bezpłatna konsultacja
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <a href="tel:+48504026042" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              +48 504 026 042
            </a>
          </div>
        </div>
      </section>

      {/* NAJCZĘSTSZE PRACE */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SL>Zakres prac</SL>
            <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
              Najczęstsze <span style={{ color: "var(--hb-water)" }}>{praceName.toLowerCase()}</span>,{" "}
              które wykonujemy
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {praceItems.map((item, i) => (
              <div key={item} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black text-white" style={{ background: "var(--hb-water)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold leading-snug text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {gallery.length > 0 && (
        <section className="bg-white py-12 lg:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className={`grid gap-4 ${gallCols}`}>
              {gallery.map((img) => (
                <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src={imageUrl(img.src)} alt={img.alt} fill className="object-cover brightness-[0.88] saturate-[0.85] transition-transform duration-500 hover:scale-[1.04]" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* JAK TO REALIZUJEMY */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SL>Proces</SL>
            <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
              Jak to <span style={{ color: "var(--hb-water)" }}>realizujemy?</span>
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="relative flex flex-col gap-3">
                {i < steps.length - 1 && (
                  <div className="absolute left-[1.75rem] top-[1.75rem] hidden h-[2px] w-[calc(100%+2rem)] lg:block" style={{ background: "linear-gradient(to right, rgba(2,132,199,0.25), transparent)" }} />
                )}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black text-white shadow-md" style={{ background: "linear-gradient(135deg, var(--hb-water), #0369a1)" }}>
                  {step.n}
                </div>
                <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INNE USŁUGI */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SL>Inne usługi</SL>
            <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)" }}>
              Co jeszcze możemy <span style={{ color: "var(--hb-water)" }}>dla Ciebie zrobić?</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <Link key={s.href} href={s.href} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg" style={{ border: "1px solid #e2e8f0" }}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={imageUrl(s.img)} alt={s.title} fill className="object-cover brightness-[0.85] saturate-[0.82] transition-transform duration-700 group-hover:scale-[1.05]" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071e32]/60 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 font-bold text-slate-900 transition-colors group-hover:text-[#0284c7]">{s.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-slate-500">{s.tagline}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:text-[#0284c7]" style={{ color: "var(--hb-water)" }}>
                    Dowiedz się więcej
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </Link>
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
