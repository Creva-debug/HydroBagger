import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import Link from "next/link";
import { WiedzaGrid } from "./WiedzaGrid";

export const metadata: Metadata = (() => {
  const seo = getSEO("/wiedza");
  return seo ? metadataFromSEO(seo) : {};
})();

function SL({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

export default function WiedzaPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-50 pb-16 pt-16 lg:pb-20 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(2,132,199,0.12) 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SL>Wiedza</SL>
              <h1 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(2.4rem,4.5vw,3.6rem)" }}>
                Baza wiedzy <span style={{ color: "var(--hb-water)" }}>hydrotechnicznej</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                Specjalistyczne artykuły o pracach w trudnym terenie, sprzęcie amfibijnym i ochronie środowiska wodnego.
              </p>
              <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-[#0284c7]/30 bg-sky-50 px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0284c7]" />
                </span>
                <span className="text-sm font-semibold text-[#0284c7]">Artykuły pojawiają się wkrótce</span>
              </div>
            </div>
            <div className="flex gap-8 lg:flex-shrink-0">
              {[{ n: "6+", label: "Tematów w przygotowaniu" }, { n: "5", label: "Kategorii tematycznych" }].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="display-heading text-3xl font-black" style={{ color: "var(--hb-water)" }}>{s.n}</p>
                  <p className="mt-0.5 text-xs font-medium text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FILTR + SIATKA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WiedzaGrid />
        </div>
      </section>

      {/* POWIADOMIENIA */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SL>Powiadomienia</SL>
          <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
            Chcesz wiedzieć, gdy <span style={{ color: "var(--hb-water)" }}>pojawi się nowy artykuł?</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Napisz do nas – poinformujemy Cię, gdy baza wiedzy zostanie uruchomiona. Możesz też już teraz umówić się na bezpłatną konsultację.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/darmowa-konsultacja" className="btn-pulse flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white sm:w-auto" style={{ background: "var(--hb-water)" }}>
              Bezpłatna konsultacja
            </Link>
            <Link href="mailto:kontakt@hydrobagger.pl" className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-[#0284c7] hover:text-[#0284c7] sm:w-auto">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Napisz do nas
            </Link>
          </div>
        </div>
      </section>

      {/* CZEGO SIĘ DOWIESZ */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <SL>Zapowiedź</SL>
            <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
              Czego się <span style={{ color: "var(--hb-water)" }}>dowiesz?</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />, tytul: "Technologie prac hydrotechnicznych", opis: "Jak działają koparki pływające, pompy refulacyjne i kosiarki amfibijne – od środka." },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.159.69.159 1.006 0z" />, tytul: "Prawo i formalności przy pracach wodnych", opis: "Pozwolenia wodnoprawne, decyzje środowiskowe – co wymaga zgłoszenia, a co nie." },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />, tytul: "Ochrona środowiska wodnego", opis: "Jak prowadzić prace minimalizując wpływ na ekosystem. Retencja, bioróżnorodność, renaturyzacja." },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />, tytul: "Wyceny i planowanie inwestycji", opis: "Co wpływa na koszt prac, jak przygotować się do rozmowy z wykonawcą, na co zwrócić uwagę w ofercie." },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />, tytul: "Utrzymanie i konserwacja zbiorników", opis: "Jak często i w jakim zakresie prowadzić prace, żeby zbiornik nie zarósł ani nie zamulił się ponownie." },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />, tytul: "Realizacje i studia przypadków", opis: "Konkretne projekty z opisem wyzwań, zastosowanych metod i efektów – z naszych doświadczeń w terenie." },
            ].map((item) => (
              <div key={item.tytul} className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ background: "linear-gradient(135deg, var(--hb-water), #0369a1)" }}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{item.icon}</svg>
                </div>
                <h3 className="mb-2 font-bold text-slate-900">{item.tytul}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{item.opis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
