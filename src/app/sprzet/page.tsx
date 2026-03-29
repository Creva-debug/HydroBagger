import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/lib/images";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { ContactConsultationSection } from "@/components/ContactConsultationSection";

export const metadata: Metadata = {
  title: "Sprzęt hydrotechniczny i maszyny do zadań specjalnych | HydroBagger",
  description: "Poznaj sprzęt hydrotechniczny HydroBagger: koparki pływające, pompy refulacyjne, kosiarki, wozidła i maszyny do pracy w trudnym terenie.",
};

const KATEGORIE = [
  {
    href: "/sprzet/koparki-plywajace",
    title: "Koparki pływające",
    desc: "Maszyny do kopania i pogłębiania w wodzie, bagnach i na zalewiskach. Swobodnie poruszają się po grząskim terenie.",
    img: "koparka-plywajaca-kopanie-torfowisko01.jpg",
    badge: "4 modele",
  },
  {
    href: "/sprzet/kosiarki-plywajace",
    title: "Kosiarki pływające",
    desc: "Specjalistyczny sprzęt do koszenia trzcin i roślinności wodnej w miejscach niedostępnych dla standardowych kosiarek.",
    img: "koszenie-roslinnosci-wodnej-kosiarka-plywajaca-w-akcji1.jpg",
    badge: "2 modele",
  },
  {
    href: "/sprzet/pompy-refulacyjne",
    title: "Pompy refulacyjne",
    desc: "Wysokowydajne pompy ssąco-tłoczące do usuwania osadów z dna zbiorników. Precyzyjny transport urobku na duże odległości.",
    img: "koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg",
    badge: "DRAGFLOW",
  },
  {
    href: "/sprzet/kosiarki-samobiezne",
    title: "Kosiarki samobieżne",
    desc: "Wszechstronne maszyny do koszenia i mulczowania na groblach, łąkach, poboczach i terenach podmokłych.",
    img: "koparka-plywajaca-kopanie-odmulanie-teren-podmokly.jpg",
    badge: "Trudny teren",
  },
  {
    href: "/sprzet/wozidla-budowlane",
    title: "Wozidła budowlane",
    desc: "Wozidła kołowe i gąsienicowe do transportu materiałów i sprzętu tam, gdzie nie dojedzie klasyczny samochód.",
    img: "wozidlo-gasienicowe-transport-koparka-podmokly-teren1.jpg",
    badge: "Kołowe i gąsienicowe",
  },
  {
    href: "/sprzet/koparki-gasienicowe",
    title: "Koparki gąsienicowe",
    desc: "Ciężki sprzęt do robót ziemnych w trudnych warunkach – wykopy, przygotowanie terenu i prace liniowe na miękkim gruncie.",
    img: "koparka-plywajaca-zestaw-refulacyjny-hydrobagger.jpg",
    badge: "Do 1200mm gąsienice",
  },
] as const;

function SL({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`section-label${light ? " section-label--light" : ""}`}>{children}</span>;
}

export default function SprzętPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-16 lg:min-h-[80vh] lg:pb-24">
        <Image src={imageUrl("koparka-plywajaca-kopanie-torfowisko01.jpg")} alt="Sprzęt hydrotechniczny HydroBagger" fill priority className="object-cover brightness-[0.65] saturate-[0.85]" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e32]/90 via-[#071e32]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071e32]/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SL light>Sprzęt</SL>
          <h1 className="display-heading mt-3 text-white" style={{ fontSize: "clamp(2.6rem,5.5vw,4.5rem)" }}>
            Poznaj sprzęt <span style={{ color: "#7dd3fc" }}>HydroBagger</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">
            Dysponujemy unikalnym parkiem maszyn do pracy w wodzie, błocie i trudno dostępnym terenie. Sprzęt, którego nie spotkasz w każdej firmie.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/darmowa-konsultacja" className="btn-pulse inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white" style={{ background: "var(--hb-water)" }}>
              Bezpłatna konsultacja
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/uslugi" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/20">
              Nasze usługi
            </Link>
          </div>
        </div>
      </section>

      {/* SIATKA KATEGORII */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 grid gap-6 lg:grid-cols-[1fr,2fr] lg:items-end">
            <div>
              <SL>Kategorie sprzętu</SL>
              <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(2rem,3.8vw,3rem)" }}>
                6 kategorii <span style={{ color: "var(--hb-water)" }}>maszyn</span>
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-600 lg:pb-1">
              Każda kategoria to dedykowane maszyny do konkretnych zadań. Dobieramy sprzęt precyzyjnie – pod warunki terenu, rodzaj pracy i oczekiwany efekt.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {KATEGORIE.map((kat) => (
              <Link key={kat.href} href={kat.href} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl" style={{ border: "1px solid #e2e8f0" }}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={imageUrl(kat.img)} alt={kat.title} fill className="object-cover brightness-[0.85] saturate-[0.82] transition-transform duration-700 group-hover:scale-[1.05]" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071e32]/70 to-transparent" />
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-sm" style={{ color: "var(--hb-water)" }}>{kat.badge}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#0284c7]">{kat.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-slate-500">{kat.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:text-[#0284c7]" style={{ color: "var(--hb-water)" }}>
                    Dowiedz się więcej
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA PASEK */}
      <section className="relative overflow-hidden py-14 lg:py-16" style={{ background: "var(--hb-navy)" }}>
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-[0.07]" style={{ background: "var(--hb-water)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="display-heading text-white" style={{ fontSize: "clamp(1.6rem,3.2vw,2.4rem)" }}>
                Nie wiesz, który sprzęt pasuje do Twojego zlecenia?
              </h2>
              <p className="mt-3 max-w-lg text-slate-300">Opisz nam problem – dobierzemy maszynę i zaproponujemy rozwiązanie. Bezpłatna konsultacja, bez zobowiązań.</p>
            </div>
            <Link href="/darmowa-konsultacja" className="inline-flex shrink-0 items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white transition-all hover:brightness-110" style={{ background: "var(--hb-water)" }}>
              Umów konsultację
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <BrandsMarquee />
      <ContactConsultationSection />
    </>
  );
}
