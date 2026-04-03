import type { Metadata } from "next";
import { metadataForPath } from "@/lib/seo-pages";
import { DlaKogoTemplate } from "../DlaKogoTemplate";

export const metadata: Metadata = metadataForPath("/dla-kogo/osoby-prywatne");

export default function OsobyPrywatnaPage() {
  return (
    <DlaKogoTemplate
      seoPath="/dla-kogo/osoby-prywatne"
      breadcrumbLabel="Osoby prywatne"
      heroImage="koparka-plywajaca-eik-am70-praca-w-roslinnosci-wodnej.jpg"
      heroAccent="Osób Prywatnych"
      heroLead="Realizujemy prace ziemno-wodne dla właścicieli działek, posesji i ogrodów. Budujemy oczka wodne, pogłębiamy stawy, czyścimy linie brzegowe i odmulamy zbiorniki."
      heroDetails={["Pracujemy precyzyjnie, bezpiecznie i z poszanowaniem otoczenia – zostawiając porządek i efekt, który cieszy oko. Dojeżdżamy tam, gdzie inni się wycofują."]}
      areas={[
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />,
          title: "Budowa oczek i zbiorników wodnych",
          body: "Budujemy oczka i stawy wodne – od wykopu po estetyczne wykończenie brzegu.",
        },
        {
          icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></>,
          title: "Pogłębianie przydomowych stawów",
          body: "Odmulamy i pogłębiamy zbiorniki – dla lepszej estetyki i lepszych warunków retencji wody.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.696.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />,
          title: "Usuwanie roślinności wodnej",
          body: "Kosimy roślinność wodną i przybrzeżną, poprawiając wygląd i drożność zbiornika.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />,
          title: "Zwiększanie retencji na działce",
          body: "Tworzymy rozwiązania, które zatrzymują wodę opadową i pomagają radzić sobie z suszą.",
        },
        {
          icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></>,
          title: "Refulacja i oczyszczanie oczek wodnych",
          body: "Odessamy muł i osady – przywracamy czystość i głębokość zbiornika.",
        },
        {
          icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
          title: "Dojazd do trudnych działek",
          body: "Docieramy tam, gdzie inni nie mogą – przez błoto, wodę i teren bez utwardzonego dojazdu.",
        },
      ]}
      faqTitle="Najczęstsze pytania od osób prywatnych"
      faqItems={[
        { q: "Czy możecie oczyścić istniejący staw na działce?", a: "Tak – wykonujemy odmulanie, pogłębianie oraz koszenie roślinności wodnej i przybrzeżnej." },
        { q: "Nie mam projektu – czy mogę zlecić budowę oczka wodnego?", a: "Oczywiście. Doradzimy najlepsze rozwiązanie i zrealizujemy prace od A do Z – bez potrzeby dokumentacji." },
        { q: "Moja działka nie ma dojazdu. Czy to problem?", a: "Nie dla nas. Mamy sprzęt pływający i gąsienicowy – dotrzemy nawet przez błoto, wodę i torf." },
      ]}
    />
  );
}
