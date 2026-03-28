import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { ContactConsultationSection } from "@/components/ContactConsultationSection";
import { imageUrl } from "@/lib/images";

export type SprzętItem = { icon: ReactNode; title: string; body: string };
export type SprzętMachine = { name: string; specs: { label: string; value: string }[] };

export type SprzętTemplateProps = {
  breadcrumbLabel: string;
  heroImage: string;
  heroTitle: string;
  heroLead: string;
  heroDetails?: string[];
  applications?: { title: string; items: SprzętItem[] };
  features?: { title: string; items: SprzętItem[] };
  machines?: { title: string; cols?: 2 | 3 | 4; items: SprzętMachine[] };
  gallery?: { src: string; alt: string }[];
};

function SL({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`section-label${light ? " section-label--light" : ""}`}>{children}</span>;
}

function ItemCard({ item }: { item: SprzętItem }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg, var(--hb-water), #0369a1)" }}>
        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{item.icon}</svg>
      </div>
      <h3 className="font-bold text-slate-900">{item.title}</h3>
      <p className="text-sm leading-relaxed text-slate-500">{item.body}</p>
    </div>
  );
}

function getMachCols(n: number) {
  if (n <= 2) return "sm:grid-cols-2";
  if (n === 3) return "sm:grid-cols-2 lg:grid-cols-3";
  return "sm:grid-cols-2 lg:grid-cols-4";
}

export function SprzętTemplate({
  breadcrumbLabel,
  heroImage,
  heroTitle,
  heroLead,
  heroDetails = [],
  applications,
  features,
  machines,
  gallery = [],
}: SprzętTemplateProps) {
  const featBg = applications ? "bg-white" : "bg-slate-50";
  const machCols = machines ? getMachCols(machines.cols ?? machines.items.length) : "";
  const gallCols =
    gallery.length <= 2
      ? "sm:grid-cols-2"
      : gallery.length === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[65vh] items-end overflow-hidden pb-14 lg:pb-20">
        <Image src={imageUrl(heroImage)} alt={heroTitle} fill priority className="object-cover brightness-[0.62] saturate-[0.8]" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e32]/90 via-[#071e32]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071e32]/25 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-white">HydroBagger</Link>
            <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <Link href="/sprzet" className="transition-colors hover:text-white">Sprzęt</Link>
            <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-white/90">{breadcrumbLabel}</span>
          </nav>
          <SL light>Sprzęt</SL>
          <h1 className="display-heading mt-3 text-white" style={{ fontSize: "clamp(2.4rem,5vw,4rem)" }}>{heroTitle}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">{heroLead}</p>
          {heroDetails.map((d, i) => <p key={i} className="mt-2 max-w-2xl text-base leading-relaxed text-slate-300">{d}</p>)}
          <div className="mt-8">
            <Link href="/darmowa-konsultacja" className="btn-pulse inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white" style={{ background: "var(--hb-water)" }}>
              Bezpłatna konsultacja
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      {applications && (
        <section className="bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <SL>Zastosowania</SL>
              <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>{applications.title}</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {applications.items.map((item) => <ItemCard key={item.title} item={item} />)}
            </div>
          </div>
        </section>
      )}

      {/* FEATURES */}
      {features && (
        <section className={`${featBg} py-16 lg:py-20`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <SL>Zalety</SL>
              <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>{features.title}</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.items.map((item) => <ItemCard key={item.title} item={item} />)}
            </div>
          </div>
        </section>
      )}

      {/* MACHINES */}
      {machines && (
        <section className="py-16 lg:py-20" style={{ background: "linear-gradient(135deg, #071e32, #0a2744)" }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <SL light>Park maszynowy</SL>
              <h2 className="display-heading mt-4 text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>{machines.title}</h2>
            </div>
            <div className={`grid gap-5 ${machCols}`}>
              {machines.items.map((m) => (
                <div key={m.name} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
                  <p className="mb-4 text-sm font-bold leading-snug text-white">{m.name}</p>
                  <div className="space-y-2.5">
                    {m.specs.map((s) => (
                      <div key={s.label} className="flex items-center justify-between gap-3 border-b border-white/10 pb-2 last:border-b-0 last:pb-0">
                        <span className="text-xs text-slate-400">{s.label}</span>
                        <span className="text-right text-xs font-bold" style={{ color: "#7dd3fc" }}>{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GALLERY */}
      {gallery.length > 0 && (
        <section className="bg-slate-50 py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <SL>Realizacje</SL>
              <h2 className="display-heading mt-3 text-slate-900" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
                Sprzęt <span style={{ color: "var(--hb-water)" }}>w akcji</span>
              </h2>
            </div>
            <div className={`grid gap-4 ${gallCols}`}>
              {gallery.map((img) => (
                <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src={imageUrl(img.src)} alt={img.alt} fill className="object-cover brightness-[0.88] saturate-[0.85] transition-transform duration-500 hover:scale-[1.04]" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <TestimonialsSection />
      <BrandsMarquee />
      <ContactConsultationSection />
    </>
  );
}
