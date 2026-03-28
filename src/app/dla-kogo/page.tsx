import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "@/lib/images";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { ContactConsultationSection } from "@/components/ContactConsultationSection";

export const metadata: Metadata = {
  title: "Dla kogo? – usługi hydrotechniczne dla każdego sektora | HydroBagger",
  description: "HydroBagger realizuje prace hydrotechniczne dla firm budowlanych, samorządów, rolników, obiektów turystycznych, instytucji środowiskowych i osób prywatnych.",
};

const KATEGORIE = [
  { href: "/dla-kogo/sektor-budowlany", title: "Sektor budowlany", desc: "Wspieramy wykonawców robót budowlanych w realizacji zadań ziemnych i hydrotechnicznych w trudnym terenie – jako podwykonawcy lub partnerzy techniczni.", img: "koparka-plywajaca-kopanie-torfowisko01.jpg", badge: "Firmy budowlane" },
  { href: "/dla-kogo/ochrona-srodowiska", title: "Ochrona środowiska", desc: "Realizujemy prace hydrotechniczne na potrzeby renaturyzacji, retencji i przywracania bioróżnorodności. Działamy zgodnie z dokumentacją środowiskową.", img: "koparka-plywajaca-kopanie-odmulanie-teren-podmokly.jpg", badge: "NGO i instytucje" },
  { href: "/dla-kogo/jednostki-administracyjne", title: "Jednostki administracyjne", desc: "Oferujemy usługi dla miast, gmin i starostw – utrzymanie infrastruktury wodnej, retencja, odmulanie i prace w trudno dostępnych miejscach.", img: "koparka-plywajaca-zestaw-refulacyjny-hydrobagger.jpg", badge: "Gminy i miasta" },
  { href: "/dla-kogo/rolnicy-i-hodowcy-ryb", title: "Rolnicy i hodowcy ryb", desc: "Udrażniamy rowy, czyścimy stawy hodowlane, zwiększamy retencję i modernizujemy systemy melioracyjne na terenach rolnych i hodowlanych.", img: "koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg", badge: "Rolnictwo i ryby" },
  { href: "/dla-kogo/obiekty-turystyczne", title: "Obiekty turystyczne", desc: "Pomagamy hotelom, spa i ośrodkom wypoczynkowym w utrzymaniu stawów, linii brzegowej i zbiorników wodnych – estetycznie i bez zakłóceń.", img: "koszenie-roslinnosci-wodnej-kosiarka-plywajaca-w-akcji1.jpg", badge: "Hotele i ośrodki" },
  { href: "/dla-kogo/osoby-prywatne", title: "Osoby prywatne", desc: "Budujemy oczka wodne, pogłębiamy stawy, czyścimy zbiorniki i dojeżdżamy w najtrudniejsze miejsca – dla właścicieli działek i posesji.", img: "wozidlo-gasienicowe-transport-koparka-podmokly-teren1.jpg", badge: "Działki i posesje" },
] as const;

function SL({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

export default function DlaKogoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[55svh] items-end overflow-hidden pb-14 lg:min-h-[60svh] lg:pb-20">
        <Image src={imageUrl("koparka-plywajaca-kopanie-torfowisko01.jpg")} alt="Dla kogo – usługi HydroBagger" fill priority className="object-cover brightness-[0.6] saturate-[0.8]" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e32]/90 via-[#071e32]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071e32]/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SL>Dla kogo?</SL>
          <h1 className="display-heading mt-3 text-white" style={{ fontSize: "clamp(2.6rem,5.5vw,4.5rem)" }}>
            Pracujemy dla <span style={{ color: "#7dd3fc" }}>każdego</span>,<br />kto potrzebuje nas w terenie
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">
            Firmy budowlane, samorządy, rolnicy, ośrodki turystyczne, instytucje środowiskowe i osoby prywatne – mamy rozwiązanie dla każdego problemu z wodą i trudnym terenem.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/darmowa-konsultacja" className="btn-pulse inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white" style={{ background: "var(--hb-water)" }}>
              Bezpłatna konsultacja
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/uslugi" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20">
              Nasze usługi
            </Link>
          </div>
        </div>
      </section>

      {/* KATEGORIE GRID */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 grid gap-6 lg:grid-cols-[1fr,2fr] lg:items-end">
            <div>
              <SL>Grupy klientów</SL>
              <h2 className="display-heading mt-4 text-slate-900" style={{ fontSize: "clamp(2rem,3.8vw,3rem)" }}>
                6 grup <span style={{ color: "var(--hb-water)" }}>klientów</span>
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-600 lg:pb-1">
              Każda grupa ma inne potrzeby – dlatego podchodzimy do każdego zlecenia indywidualnie. Sprawdź, jakie rozwiązania przygotowaliśmy dla Ciebie.
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
                    Sprawdź szczegóły
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </Link>
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
                Nie wiesz, czy możemy Ci pomóc?
              </h2>
              <p className="mt-3 max-w-lg text-slate-300">Opisz nam swój problem – ocenimy możliwości i zaproponujemy najlepsze rozwiązanie. Bezpłatna konsultacja, bez zobowiązań.</p>
            </div>
            <Link href="/darmowa-konsultacja" className="btn-pulse shrink-0 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white" style={{ background: "var(--hb-water)" }}>
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
