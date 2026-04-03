import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import { imageUrl } from "@/lib/images";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PracaFAQ } from "./PracaFAQ";

export const metadata: Metadata = (() => {
  const seo = getSEO("/praca");
  return seo
    ? metadataFromSEO(seo)
    : {
        title: "Praca w HydroBagger – oferty hydrotechnika i operatora",
        description:
          "Sprawdź aktualne oferty pracy przy robotach ziemnych i hydrotechnicznych. Pracuj z zespołem HydroBagger i nowoczesnym sprzętem w terenie.",
      };
})();

const OFERTY = [
  { href: "/praca/operator-koparki", title: "Operator koparki", subtitle: "w pracach melioracyjnych", salary: "11 000 – 19 000 zł brutto", umowa: "Umowa o pracę", wymiar: "Pełny etat", lokalizacja: "Międzychód (+ 150 km)", opis: "Samodzielna praca koparką (w tym pontonową) przy konserwacji zbiorników, cieków, wykopach i humusowaniu.", wymagania: ["Doświadczenie w pracach melioracyjnych i hydrotechnicznych", "Umiejętność pracy koparką w grząskim terenie", "Dyspozycyjność / gotowość do wyjazdów w delegacje", "Prawo jazdy kategorii B"], img: "koparka-plywajaca-kopanie-torfowisko01.jpg", tag: "Operator sprzętu" },
  { href: "/praca/inzynier-robot-hydrotechnicznych", title: "Inżynier robót hydrotechnicznych", subtitle: "", salary: "11 000 – 19 000 zł brutto", umowa: "Umowa o pracę", wymiar: "Pełny etat", lokalizacja: "Cała Polska", opis: "Samodzielne prowadzenie robót hydrotechnicznych – planowanie, nadzór, kontakt z klientem, rozliczenia i dokumentacja.", wymagania: ["Wykształcenie wyższe budowlane (inżynieria wodna / środowiskowa)", "Doświadczenie w pracach hydrotechnicznych", "Obsługa MS Office oraz AutoCAD", "Prawo jazdy kategorii B"], img: "55bd38c9-7630-41d5-abd2-c51022b19cdc-kierownik-robot-hydrotechnicznych.png", tag: "Inżynieria" },
] as const;

function SL({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

function MetaBadge({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">{icon}{children}</span>
  );
}

export default function PracaPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse 70% 50% at 65% 50%, rgba(2,132,199,0.1) 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <SL>Aktualne oferty pracy</SL>
              <h1 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(2.4rem,5vw,4rem)" }}>
                Dołącz do naszego <span style={{ color: "var(--hb-water)" }}>zespołu</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                Jeśli szukasz pracy w zgranym zespole, który działa na granicy gruntu i wody – jesteś w dobrym miejscu. Sprawdź aktualne rekrutacje i zobacz, czy szukamy właśnie <strong className="font-bold text-slate-800">Ciebie.</strong>
              </p>
            </div>
            <div className="relative hidden h-56 w-96 overflow-hidden rounded-2xl lg:block">
              <Image src={imageUrl("koparka-plywajaca-kopanie-odmulanie-teren-podmokly.jpg")} alt="Praca w HydroBagger" fill className="object-cover brightness-[0.88] saturate-[0.88]" sizes="400px" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white backdrop-blur-sm" style={{ background: "rgba(2,132,199,0.85)" }}>
                  <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-white" /></span>
                  2 aktywne rekrutacje
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KARTY OFERT */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {OFERTY.map((oferta) => (
              <article key={oferta.href} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg" style={{ border: "1px solid #e2e8f0" }}>
                <div className="relative aspect-[16/7] overflow-hidden">
                  <Image src={imageUrl(oferta.img)} alt={oferta.title} fill className="object-cover brightness-[0.82] saturate-[0.82] transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width:1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071e32]/70 to-transparent" />
                  <div className="absolute left-4 top-4"><span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm" style={{ background: "rgba(2,132,199,0.8)" }}>{oferta.tag}</span></div>
                  <div className="absolute bottom-4 left-4"><span className="rounded-xl bg-white/95 px-3 py-1.5 text-sm font-black text-slate-900 shadow">{oferta.salary}</span></div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-[#0284c7]">
                    {oferta.title}
                    {oferta.subtitle && <span className="block text-base font-semibold text-slate-500">{oferta.subtitle}</span>}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <MetaBadge icon={<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>{oferta.wymiar}</MetaBadge>
                    <MetaBadge icon={<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}>{oferta.umowa}</MetaBadge>
                    <MetaBadge icon={<svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}>{oferta.lokalizacja}</MetaBadge>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{oferta.opis}</p>
                  <ul className="mt-4 space-y-2">
                    {oferta.wymagania.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-slate-500">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(2,132,199,0.12)" }}><svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} style={{ color: "var(--hb-water)" }}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                        {w}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href={oferta.href} className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-all hover:brightness-110" style={{ background: "var(--hb-water)" }}>
                      Aplikuj na to stanowisko
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DLACZEGO WARTO */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SL>Środowisko pracy</SL>
            <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
              Co zyskujesz <span style={{ color: "var(--hb-water)" }}>dołączając do nas?</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />, title: "Stabilne zatrudnienie", body: "Umowa o pracę, terminowe wynagrodzenie i jasne zasady współpracy." },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />, title: "Unikalny sprzęt", body: "Koparki pływające, amfibie, pompy refulacyjne – maszyny, których nie spotkasz wszędzie." },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />, title: "Rozwój i szkolenia", body: "Otwartość na poszerzanie kwalifikacji – nowe certyfikaty i specjalizacje w terenie." },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />, title: "Zgrany zespół", body: "Mała, sprawna firma bez biurokratycznych utrudnień. Znamy się z imienia." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-6 transition-shadow hover:shadow-md" style={{ border: "1px solid #e2e8f0" }}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ background: "linear-gradient(135deg, var(--hb-water), #0369a1)" }}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{item.icon}</svg>
                </div>
                <h3 className="mb-2 font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <SL>Pytania i odpowiedzi</SL>
            <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
              Najczęstsze pytania <span style={{ color: "var(--hb-water)" }}>dotyczące rekrutacji</span>
            </h2>
          </div>
          <div className="rounded-2xl bg-white px-6 py-2 shadow-sm" style={{ border: "1px solid #e2e8f0" }}>
            <PracaFAQ />
          </div>
        </div>
      </section>
    </>
  );
}
