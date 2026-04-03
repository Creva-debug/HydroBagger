import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { ContactConsultationSection } from "@/components/ContactConsultationSection";
import { JsonLdWebPage } from "@/components/JsonLdWebPage";
import { imageUrl } from "@/lib/images";
import { getSEO } from "@/lib/seo-pages";

export type SprzętItem = { icon: ReactNode; title: string; body: string };
export type SprzętMachine = {
  name: string;
  /** Zdjęcie maszyny (CDN); brak = fallback jak zdjęcie hero strony. */
  image?: string;
  specs: { label: string; value: string }[];
};

export type SprzętGalleryItem = {
  src: string;
  alt: string;
  /** Nadpisuje domyślne filtry (np. stonowanie nadmiernej saturacji). */
  imageClassName?: string;
};

export type SprzętTemplateProps = {
  breadcrumbLabel: string;
  heroImage: string;
  heroTitle: string;
  heroLead: string;
  heroDetails?: string[];
  applications?: { title: string; items: SprzętItem[] };
  features?: { title: string; items: SprzętItem[] };
  /** `imageCrop: "4/3"` – jednolity kadr kafelków (object-cover), gdy zdjęcia mają te same proporcje. */
  machines?: { title: string; cols?: 2 | 3 | 4; items: SprzętMachine[]; imageCrop?: "4/3" };
  gallery?: SprzętGalleryItem[];
  /** Siatka galerii „Realizacje" na lg+ (domyślnie 4 kolumny przy >3 zdjęciach). */
  galleryCols?: 3 | 4;
  /** Gdy true, sekcja „Park maszynowy" pojawia się przed „Zaletami". */
  machinesFirst?: boolean;
  /** Klucz z SEO_PAGES – JSON-LD WebPage. */
  seoPath?: string;
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
      <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">{item.title}</h3>
      <p className="text-sm leading-relaxed text-slate-500">{item.body}</p>
    </div>
  );
}

function getMachCols(n: number) {
  if (n <= 2) return "sm:grid-cols-2";
  if (n === 3) return "sm:grid-cols-2 lg:grid-cols-3";
  /* 4 kafelki: do 2xl szersze kolumny (2×2), od ~1536px z powrotem 4 w rzędzie */
  if (n === 4) return "sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4";
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
  galleryCols,
  machinesFirst = false,
  seoPath,
}: SprzętTemplateProps) {
  const pageSeo = seoPath ? getSEO(seoPath) : undefined;
  const featBg = applications ? "bg-white" : "bg-slate-50";
  const machCols = machines ? getMachCols(machines.cols ?? machines.items.length) : "";
  const gallColsDefault =
    gallery.length <= 2
      ? "sm:grid-cols-2"
      : gallery.length === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";
  const gallCols =
    galleryCols === 3
      ? gallery.length === 1
        ? "grid-cols-1"
        : gallery.length === 2
          ? "sm:grid-cols-2"
          : "sm:grid-cols-2 lg:grid-cols-3"
      : gallColsDefault;
  const galleryImageSizes =
    galleryCols === 3
      ? "(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
      : "(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw";

  const machinesSection = machines && (
    <section className="py-16 lg:py-20" style={{ background: "linear-gradient(135deg, #071e32, #0a2744)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <SL light>Park maszynowy</SL>
          <h2 className="display-heading mt-4 text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>{machines.title}</h2>
        </div>
        <div className={`mx-auto grid max-w-5xl gap-4 sm:gap-5 ${machCols}`}>
          {machines.items.map((m) => (
            <div key={m.name} className="overflow-hidden rounded-xl sm:rounded-2xl" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
              <div
                className={`relative w-full overflow-hidden bg-slate-950/70 ${machines.imageCrop === "4/3" ? "aspect-[4/3]" : ""}`}
              >
                <Image
                  src={imageUrl(m.image ?? heroImage)}
                  alt={m.name}
                  fill={machines.imageCrop === "4/3"}
                  width={machines.imageCrop === "4/3" ? undefined : 1200}
                  height={machines.imageCrop === "4/3" ? undefined : 800}
                  sizes="(max-width:1024px) 100vw, 400px"
                  className={
                    machines.imageCrop === "4/3"
                      ? "object-cover object-center brightness-[1.02] contrast-[1.04] saturate-[1.06]"
                      : "h-auto w-full brightness-[1.02] contrast-[1.04] saturate-[1.06]"
                  }
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071e32]/45 via-transparent to-transparent" aria-hidden />
              </div>
              <div className="p-4 sm:p-5">
              <p className="mb-3 text-base font-bold leading-snug text-white sm:mb-4 sm:text-lg">{m.name}</p>
              <div className="space-y-2.5">
                {m.specs.map((s) => (
                  <div key={s.label} className="flex items-center justify-between gap-3 border-b border-white/10 pb-2 last:border-b-0 last:pb-0">
                    <span className="text-xs text-slate-400">{s.label}</span>
                    <span className="text-right text-xs font-bold" style={{ color: "#7dd3fc" }}>{s.value}</span>
                  </div>
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <>
      {pageSeo ? <JsonLdWebPage seo={pageSeo} /> : null}
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden py-16 lg:min-h-[80vh] lg:py-20">
        <Image src={imageUrl(heroImage)} alt={heroTitle} fill priority className="object-cover brightness-[0.65] saturate-[0.85]" sizes="100vw" />
        <div className="absolute inset-0 bg-[#071e32]/45" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e32]/90 via-[#071e32]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071e32]/45 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SL light>Sprzęt</SL>
          <h1 className="display-heading mt-3 text-white" style={{ fontSize: "clamp(2.4rem,5vw,4rem)" }}>{heroTitle}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">{heroLead}</p>
          {heroDetails.map((d, i) => <p key={i} className="mt-2 max-w-2xl text-base leading-relaxed text-slate-300">{d}</p>)}
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

      {/* MACHINES przed FEATURES gdy machinesFirst=true */}
      {machinesFirst && machinesSection}

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

      {/* MACHINES po FEATURES gdy machinesFirst=false (domyślnie) */}
      {!machinesFirst && machinesSection}

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
                <div key={`${img.src}-${img.alt}`} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={imageUrl(img.src)}
                    alt={img.alt}
                    fill
                    className={
                      img.imageClassName ??
                      "object-cover brightness-[1.02] contrast-[1.04] saturate-[1.06] transition-transform duration-500 ease-in-out hover:scale-[1.04]"
                    }
                    sizes={galleryImageSizes}
                  />
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
