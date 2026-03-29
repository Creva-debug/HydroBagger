import { imageUrl } from "@/lib/images";
import { JobApplicationSection } from "@/components/JobApplicationSection";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Operator koparki – oferta pracy HydroBagger",
  description: "Sprawdź aktualną ofertę pracy dla operatora koparki. Zapewniamy umowę o pracę, wysokie zarobki i pracę w solidnej firmie. Aplikuj do HydroBagger!",
};

const OBOWIAZKI = ["Konserwacja cieków oraz zbiorników wodnych (pogłębianie, odmulanie, hakowanie)", "Samodzielne wykopanie stawu oraz zagospodarowanie i rozplanowanie urobku", "Skarpowanie długim ramieniem bez systemów", "Humusowanie", "Współpraca z innymi pracownikami na kontraktach", "Przestrzeganie przepisów BHP w pracy", "Codzienne dbanie o powierzony sprzęt", "Wykonywanie drobnych napraw serwisowych na miejscu"] as const;
const WYMAGANIA = ["Doświadczenie w pracach melioracyjnych i hydrotechnicznych", "Umiejętność pracy koparką w grząskim terenie", "Otwartość na poszerzenie kwalifikacji zawodowych", "Dyspozycyjność / gotowość do wyjazdów w delegacje", "Zaangażowanie w realizowane projekty", "Wysoka kultura osobista i zawodowa", "Prawo jazdy kategorii B", "Obszar zamieszkania: do 150 km od Międzychodu (64-400)"] as const;
const OFERUJEMY = ["Stabilne zatrudnienie w prężnie rozwijającej się firmie, z niszowym parkiem maszyn na rynku robót hydrotechnicznych", "Atrakcyjne wynagrodzenie uzależnione od doświadczenia oraz samodzielności w realizacji powierzonych zadań", "Zakwaterowanie, wyżywienie i dowóz do miejsca pracy", "Pracę w systemie 4 lub 5-dniowym w tygodniu, weekendy wolne", "Przyjazną atmosferę", "Ubezpieczenie na życie, program pobytów urlopowych"] as const;

function SL({ children }: { children: React.ReactNode }) { return <span className="section-label">{children}</span>; }

function Li({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: dark ? "rgba(125,211,252,0.2)" : "rgba(2,132,199,0.12)" }}>
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} style={{ color: dark ? "#7dd3fc" : "var(--hb-water)" }}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
      </span>
      <span className={`text-[0.93rem] leading-relaxed ${dark ? "text-slate-300" : "text-slate-700"}`}>{children}</span>
    </li>
  );
}

export default function OperatorKoparkiPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-12 pt-10 lg:pb-16 lg:pt-14">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(2,132,199,0.1) 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-slate-600 transition-colors">HydroBagger</Link>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <Link href="/praca" className="hover:text-slate-600 transition-colors">Praca</Link>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-slate-600">Operator koparki</span>
          </nav>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr,360px]">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white" style={{ background: "var(--hb-water)" }}>
                  <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" /><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" /></span>
                  Aktywna rekrutacja
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-500">Operator sprzętu</span>
              </div>
              <SL>Oferta pracy</SL>
              <h1 className="display-heading mt-3 text-slate-900" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
                Operator koparki
                <span className="block text-xl font-semibold text-slate-500 mt-1">w pracach melioracyjnych</span>
              </h1>
              <div className="mt-6 flex flex-wrap gap-3">
                {[{ icon: "💰", label: "11 000 – 19 000 zł brutto / mies." }, { icon: "📄", label: "Umowa o pracę" }, { icon: "⏱", label: "Pełny etat" }, { icon: "📍", label: "Międzychód (+ 150 km)" }].map((m) => (
                  <span key={m.label} className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"><span aria-hidden>{m.icon}</span>{m.label}</span>
                ))}
              </div>
            </div>
            <div
              className="mx-auto w-full max-w-md rounded-2xl p-5 sm:p-6 lg:mx-0 lg:max-w-none"
              style={{ background: "rgba(2,132,199,0.05)", border: "1px solid rgba(2,132,199,0.2)" }}
            >
              <p className="text-sm font-semibold text-slate-700">Zainteresowany tą ofertą?</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">Wypełnij formularz poniżej lub napisz bezpośrednio.</p>
              <a
                href="#aplikuj"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white transition-all hover:brightness-110"
                style={{ background: "var(--hb-water)", boxShadow: "0 6px 16px -4px rgba(2, 132, 199, 0.4)" }}
              >
                Aplikuj teraz
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="mt-4 flex items-center gap-3 border-t border-slate-200/80 pt-4">
                <a
                  href="mailto:kontakt@hydrobagger.pl"
                  className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-xs font-semibold text-slate-600 shadow-sm transition-colors hover:text-[#0284c7]"
                  style={{ border: "1px solid #e2e8f0" }}
                >
                  <svg className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  E-mail
                </a>
                <a
                  href="tel:+48504026042"
                  className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-xs font-semibold text-slate-600 shadow-sm transition-colors hover:text-[#0284c7]"
                  style={{ border: "1px solid #e2e8f0" }}
                >
                  <svg className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Telefon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 overflow-hidden rounded-2xl lg:hidden"><div className="relative aspect-[16/7]"><Image src={imageUrl("koparka-plywajaca-kopanie-torfowisko01.jpg")} alt="Koparka pływająca w pracy" fill className="object-cover brightness-[0.88] saturate-[0.88]" sizes="100vw" /></div></div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 shadow-sm" style={{ border: "1px solid #e2e8f0" }}>
              <div className="mb-8 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg, var(--hb-water), #0369a1)" }}><svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg></div>
                <h2 className="text-lg font-bold text-slate-900">Zakres obowiązków</h2>
              </div>
              <ul className="space-y-3">{OBOWIAZKI.map((o) => <Li key={o}>{o}</Li>)}</ul>
            </div>
            <div className="rounded-2xl bg-white p-7 shadow-sm" style={{ border: "1px solid #e2e8f0" }}>
              <div className="mb-8 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg, #0f172a, #1e3a5f)" }}><svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
                <h2 className="text-lg font-bold text-slate-900">Nasze wymagania</h2>
              </div>
              <ul className="space-y-3">{WYMAGANIA.map((w) => <Li key={w}>{w}</Li>)}</ul>
            </div>
            <div className="rounded-2xl p-7" style={{ background: "linear-gradient(145deg, #071e32, #0a2744)" }}>
              <div className="mb-8 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "rgba(2,132,199,0.25)" }}>
                  <svg className="h-5 w-5 text-[#7dd3fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1014.625 7.5H12m-8.25 3.75h16.5M4.5 9.75h15v2.25a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-white">Co oferujemy</h2>
              </div>
              <ul className="space-y-3">{OFERUJEMY.map((o) => <Li key={o} dark>{o}</Li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <div id="aplikuj"><JobApplicationSection jobTitle="Operator koparki w pracach melioracyjnych" /></div>
    </>
  );
}
