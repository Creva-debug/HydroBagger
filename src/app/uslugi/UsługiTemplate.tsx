import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { ContactConsultationSection } from "@/components/ContactConsultationSection";
import { UsługiZakresCard } from "@/components/UsługiZakresCard";
import { USLUGI_ZAKRES_CARDS } from "@/lib/uslugi-zakres-cards";
import { imageUrl } from "@/lib/images";
import { JsonLdWebPage } from "@/components/JsonLdWebPage";
import { getSEO } from "@/lib/seo-pages";

export type UsługiStep = { n: string; title: string; body: string };

export type UsługiTemplateProps = {
  breadcrumbLabel: string;
  heroImage: string;
  /** Pierwsza linia nagłówka hero (biała). */
  heroTitleLine1: string;
  /** Druga linia (akcent #7dd3fc). */
  heroTitleLine2: string;
  heroLead: string;
  heroDetails?: string[];
  praceName: string;
  praceItems: string[];
  steps: UsługiStep[];
  gallery?: { src: string; alt: string }[];
  currentSlug: string;
  seoPath?: string;
};

function SL({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`section-label${light ? " section-label--light" : ""}`}>{children}</span>;
}

export function UsługiTemplate({
  breadcrumbLabel,
  heroImage,
  heroTitleLine1,
  heroTitleLine2,
  heroLead,
  heroDetails = [],
  praceName,
  praceItems,
  steps,
  gallery = [],
  currentSlug,
  seoPath,
}: UsługiTemplateProps) {
  const pageSeo = seoPath ? getSEO(seoPath) : undefined;
  const otherServices = USLUGI_ZAKRES_CARDS.filter((s) => s.slug !== currentSlug);
  const gallCols = gallery.length <= 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      {pageSeo ? <JsonLdWebPage seo={pageSeo} /> : null}
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden py-16 lg:min-h-[80vh] lg:py-20 [transform:translateZ(0)]">
        <Image
          src={imageUrl(heroImage)}
          alt={breadcrumbLabel}
          fill
          priority
          fetchPriority="high"
          className="object-cover brightness-[0.65] saturate-[0.85]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#071e32]/45" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e32]/90 via-[#071e32]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071e32]/45 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SL light>Usługi</SL>
          <h1 className="display-heading mt-3 text-white" style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)" }}>
            <span className="block">{heroTitleLine1}</span>
            <span className="mt-2 block leading-tight" style={{ color: "#7dd3fc" }}>
              {heroTitleLine2}
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-100">{heroLead}</p>
          {heroDetails.map((d, i) => (
            <p key={i} className="mt-2 max-w-2xl text-base leading-relaxed text-slate-200">
              {d}
            </p>
          ))}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap w-fit">
            <Link href="/darmowa-konsultacja" className="btn-pulse inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white sm:w-auto" style={{ background: "var(--hb-water)" }}>
              Bezpłatna konsultacja
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <a href="tel:+48504026042" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/20 sm:w-auto">
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
                <span className="text-base font-semibold leading-snug text-slate-800 sm:text-sm">{item}</span>
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
                  <Image
                    src={imageUrl(img.src)}
                    alt={img.alt}
                    fill
                    className="object-cover brightness-[1.02] contrast-[1.04] saturate-[1.06] transition-transform duration-500 ease-in-out hover:scale-[1.04]"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
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
                <h3 className="text-xl font-bold text-slate-900 sm:text-base">{step.title}</h3>
                <p className="text-base leading-relaxed text-slate-500 sm:text-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INNE USŁUGI – te same kafelki co „Zakres prac” na stronie głównej */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12">
            <SL>Inne usługi</SL>
            <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)" }}>
              Co jeszcze możemy <span style={{ color: "var(--hb-water)" }}>dla Ciebie zrobić?</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((item) => (
              <UsługiZakresCard key={item.href} item={item} />
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
