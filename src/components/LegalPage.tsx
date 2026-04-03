import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLdWebPage } from "@/components/JsonLdWebPage";
import { getSEO } from "@/lib/seo-pages";

const LEGAL_LINKS = [
  { href: "/regulamin", label: "Regulamin" },
  { href: "/polityka-prywatnosci", label: "Polityka Prywatności" },
  { href: "/polityka-cookies", label: "Polityka Cookies" },
];

export function LegalPage({
  title,
  subtitle,
  children,
  seoPath,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  /** Ścieżka z SEO_PAGES – JSON-LD WebPage + spójność z metadanymi. */
  seoPath?: string;
}) {
  const pageSeo = seoPath ? getSEO(seoPath) : undefined;
  return (
    <>
      {pageSeo ? <JsonLdWebPage seo={pageSeo} /> : null}
      {/* HEADER */}
      <section style={{ background: "var(--hb-navy)" }} className="py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-white/50">
            <Link href="/" className="transition-colors hover:text-white">HydroBagger</Link>
            <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-white/80">{title}</span>
          </nav>
          <h1 className="display-heading text-white" style={{ fontSize: "clamp(1.6rem,3.5vw,2.8rem)" }}>{title}</h1>
          {subtitle && <p className="mt-2 text-sm text-slate-400">{subtitle}</p>}

          {/* Szybkie linki – widoczne pod nagłówkiem na wszystkich ekranach */}
          <div className="mt-5 flex flex-wrap gap-2">
            {LEGAL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors"
                style={
                  title === l.label
                    ? { background: "var(--hb-water)", borderColor: "var(--hb-water)", color: "#fff" }
                    : { borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.65)" }
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="bg-slate-50 py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr,288px] lg:items-start">

            {/* Main article */}
            <article className="legal-content overflow-hidden rounded-2xl bg-white p-5 shadow-sm sm:p-8 lg:p-10">
              {children}
            </article>

            {/* Sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-24">
              {/* Contact card */}
              <div className="rounded-2xl bg-white p-6 shadow-sm" style={{ border: "1px solid #e2e8f0" }}>
                <h3 className="mb-4 text-sm font-bold text-slate-900">Bezpośredni kontakt</h3>
                <div className="space-y-3">
                  <a href="mailto:kontakt@hydrobagger.pl" className="flex items-center gap-2.5 text-sm text-slate-600 transition-colors hover:text-[#0284c7]">
                    <svg className="h-4 w-4 shrink-0 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    kontakt@hydrobagger.pl
                  </a>
                  <a href="tel:+48504026042" className="flex items-center gap-2.5 text-sm text-slate-600 transition-colors hover:text-[#0284c7]">
                    <svg className="h-4 w-4 shrink-0 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    +48 504 026 042
                  </a>
                </div>
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <p className="text-xs leading-relaxed text-slate-500">
                    Firma Usługowo Handlowa DIUNA<br />
                    Leszek Białasik<br />
                    ul. 17 Stycznia 5/1, 64-400 Międzychód<br />
                    NIP: 5951211839
                  </p>
                </div>
                <div className="mt-4">
                  <Link href="/darmowa-konsultacja" className="btn-pulse inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold text-white" style={{ background: "var(--hb-water)" }}>
                    Bezpłatna konsultacja
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>

              {/* Legal nav */}
              <div className="rounded-2xl bg-white p-6 shadow-sm" style={{ border: "1px solid #e2e8f0" }}>
                <h3 className="mb-3 text-sm font-bold text-slate-900">Dokumenty prawne</h3>
                <ul className="space-y-1">
                  {LEGAL_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-slate-50 hover:text-[#0284c7]"
                        style={title === l.label ? { color: "var(--hb-water)", fontWeight: 600 } : { color: "#475569" }}
                      >
                        <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
