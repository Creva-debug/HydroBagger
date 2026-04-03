import type { Metadata } from "next";
import { metadataForPath } from "@/lib/seo-pages";
import { DlaKogoTemplate } from "../DlaKogoTemplate";

export const metadata: Metadata = metadataForPath("/dla-kogo/jednostki-administracyjne");

export default function JednostkiAdministracyjnePage() {
  return (
    <DlaKogoTemplate
      seoPath="/dla-kogo/jednostki-administracyjne"
      breadcrumbLabel="Jednostki administracyjne"
      heroImage="truxor-realizacja-01.jpg"
      heroAccent="Jednostek Administracyjnych"
      heroLead="Oferujemy usługi hydrotechniczne dla miast, gmin, starostw i innych jednostek samorządowych – w zakresie retencji, gospodarowania wodą i ochrony środowiska."
      heroDetails={["Działamy zgodnie z dokumentacją, rozumiemy zasady zamówień publicznych i formalne procedury. Nasz sprzęt działa skutecznie nawet w trudnym, zalanym czy podmokłym terenie."]}
      areas={[
        {
          icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></>,
          title: "Utrzymanie drożności cieków i rowów",
          body: "Usuwanie osadów z rowów i kanałów dla poprawy przepływu i zabezpieczenia przed podtopieniami.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />,
          title: "Odtwarzanie retencji wodnej",
          body: "Pomagamy zwiększyć zdolność zbiorników do zatrzymywania wody i zapobiegać skutkom suszy.",
        },
        {
          icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></>,
          title: "Pogłębianie zbiorników wodnych",
          body: "Pogłębiamy stawy i jeziora, przywracając ich funkcję retencyjną, rekreacyjną i ekologiczną.",
        },
        {
          icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
          title: "Prace w trudno dostępnych miejscach",
          body: "Działamy tam, gdzie inni nie mogą – na bagnach, rozlewiskach i terenach bez dojazdu.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.696.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />,
          title: "Koszenie roślinności wodnej",
          body: "Kosimy trzcinę, roślinność wodną i zakrzaczenia – zapewniając estetykę i drożność.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
          title: "Obsługa zgodnie z dokumentacją",
          body: "Pracujemy zgodnie z projektem, terminowo i zgodnie z formalnymi wymaganiami.",
        },
      ]}
      faqTitle="Najczęstsze pytania od jednostek administracyjnych"
      faqItems={[
        { q: "Czy macie doświadczenie w pracy z zamówieniami publicznymi?", a: "Tak. Realizowaliśmy projekty dla gmin i instytucji publicznych – znamy procedury, dokumentację i wymagania formalne." },
        { q: "Czy możemy zlecić tylko jedno konkretne zadanie, np. koszenie zbiornika?", a: "Jak najbardziej. Wspieramy zarówno przy kompleksowych projektach, jak i pojedynczych działaniach – np. odmulaniu, koszeniu czy refulacji." },
        { q: "Czy działacie w całej Polsce?", a: "Tak, dojeżdżamy w każde miejsce, gdzie potrzebne są nasze usługi – również w trudnym terenie, bez łatwego dojazdu." },
      ]}
    />
  );
}
