import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/lib/images";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { ContactConsultationSection } from "@/components/ContactConsultationSection";

export const metadata: Metadata = {
  title: "Usługi hydrotechniczne i ziemne w trudnym terenie | HydroBagger",
  description: "Kopanie w trudnym terenie, koszenie roślinności, refulacja osadów i transport – HydroBagger działa tam, gdzie inni nie mogą. Sprawdź nasze usługi.",
};

const USLUGI = [
  {
    href: "/uslugi/kopanie-w-trudnym-terenie",
    title: "Kopanie w trudnym terenie",
    akcent: "Kopanie",
    tagline: "Koparka nie wjedzie? My wpływamy.",
    desc: "Specjalizujemy się w pracach ziemnych na podmokłych, bagnistych i niedostępnych terenach. Dzięki amfibijnemu i gąsienicowemu sprzętowi docieramy tam, gdzie standardowe maszyny nie mają szans.",
    img: "koparka-plywajaca-kopanie-torfowisko01.jpg",
    prace: ["Odmulanie i pogłębianie zbiorników", "Budowa i modernizacja cieków", "Rekultywacja terenów", "Odtwarzanie retencji"],
  },
  {
    href: "/uslugi/koszenie-i-mulczowanie-roslinnosci",
    title: "Koszenie i mulczowanie",
    akcent: "Koszenie",
    tagline: "Zarośnięte brzegi? Czyścimy to.",
    desc: "Zajmujemy się koszeniem i usuwaniem roślinności nad wodą oraz pod wodą. Wykorzystujemy specjalistyczny sprzęt pływający i samobieżny – nawet tam, gdzie nie da się dojechać standardową maszyną.",
    img: "koszenie-roslinnosci-wodnej-kosiarka-plywajaca-w-akcji1.jpg",
    prace: ["Koszenie roślinności wodnej", "Mulczowanie zakrzaczeń", "Udrażnianie zarośniętych rowów", "Oczyszczanie brzegów"],
  },
  {
    href: "/uslugi/refulacia-i-odwadnianie-osadow",
    title: "Refulacja i odwadnianie",
    akcent: "Refulacja",
    tagline: "Zalegający muł? Odessany i odwodniony.",
    desc: "Specjalizujemy się w refulacji i usuwaniu osadów z dna zbiorników – stawów, jezior i kanałów. Odsysamy urobek z wody bez konieczności jej spuszczania i bez naruszania linii brzegowej.",
    img: "koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg",
    prace: ["Odsysanie osadów z dna", "Odwadnianie urobku", "Refulacja stawów i akwenów", "Czyszczenie infrastruktury"],
  },
  {
    href: "/uslugi/transport-w-trudnym-terenie",
    title: "Transport w trudnym terenie",
    akcent: "Transport",
    tagline: "Gdzie nie wjedzie nikt – my dowozimy.",
    desc: "Dostarczamy sprzęt i materiały tam, gdzie standardowe pojazdy nie mają szans – przez podmokłe łąki, bagna, rozlewiska i brzegi zbiorników. Działamy bez utwardzonej drogi.",
    img: "wozidlo-gasienicowe-transport-koparka-podmokly-teren1.jpg",
    prace: ["Transport na bagna i torfowiska", "Wywóz urobku z terenu", "Dostawy materiałów", "Przeładunki w trudnym gruncie"],
  },
] as const;

function SL({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

export default function UsługiPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[55svh] items-end overflow-hidden pb-14 lg:min-h-[60svh] lg:pb-20">
        <Image src={imageUrl("koparka-plywajaca-kopanie-torfowisko01.jpg")} alt="Usługi HydroBagger" fill priority className="object-cover brightness-[0.6] saturate-[0.8]" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e32]/90 via-[#071e32]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071e32]/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SL>Usługi</SL>
          <h1 className="display-heading mt-3 text-white" style={{ fontSize: "clamp(2.6rem,5.5vw,4.5rem)" }}>
            Kompleksowe usługi<br />
            <span style={{ color: "#7dd3fc" }}>hydrotechniczne</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">
            Działamy tam, gdzie inni nie mogą – w wodzie, błocie i trudno dostępnym terenie. Cztery główne usługi, jeden doświadczony zespół.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/darmowa-konsultacja" className="btn-pulse inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white" style={{ background: "var(--hb-water)" }}>
              Bezpłatna konsultacja
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/sprzet" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20">
              Nasz sprzęt
            </Link>
          </div>
        </div>
      </section>

      {/* USŁUGI GRID */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 grid gap-6 lg:grid-cols-[1fr,2fr] lg:items-end">
            <div>
              <SL>Zakres działalności</SL>
              <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(2rem,3.8vw,3rem)" }}>
                4 kategorie <span style={{ color: "var(--hb-water)" }}>usług</span>
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-600 lg:pb-1">
              Każda usługa to dedykowany sprzęt, doświadczony zespół i pełna odpowiedzialność za efekt. Realizujemy zlecenia kompleksowo – od wyceny po ostatni etap prac.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {USLUGI.map((usluga) => (
              <article key={usluga.href} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl" style={{ border: "1px solid #e2e8f0" }}>
                <div className="relative aspect-[16/8] overflow-hidden">
                  <Image src={imageUrl(usluga.img)} alt={usluga.title} fill className="object-cover brightness-[0.82] saturate-[0.82] transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width:1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071e32]/70 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <span className="rounded-xl bg-white/90 px-3 py-1.5 text-sm font-bold text-slate-900 shadow">{usluga.tagline}</span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-[#0284c7]">{usluga.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{usluga.desc}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-2">
                    {usluga.prace.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(2,132,199,0.12)" }}>
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} style={{ color: "var(--hb-water)" }}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href={usluga.href} className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-all" style={{ background: "var(--hb-water)" }}>
                      Dowiedz się więcej
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative overflow-hidden py-14 lg:py-16" style={{ background: "var(--hb-navy)" }}>
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-[0.07]" style={{ background: "var(--hb-water)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="display-heading text-white" style={{ fontSize: "clamp(1.6rem,3.2vw,2.4rem)" }}>
                Masz konkretny problem z terenem lub wodą?
              </h2>
              <p className="mt-3 max-w-lg text-slate-300">Opisz nam sytuację – dobierzemy usługę i zaproponujemy rozwiązanie. Bezpłatna konsultacja, 20 minut, bez zobowiązań.</p>
            </div>
            <Link href="/darmowa-konsultacja" className="btn-pulse shrink-0 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white" style={{ background: "var(--hb-water)" }}>
              Umów konsultację
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <BrandsMarquee />
      <ContactConsultationSection />
    </>
  );
}
