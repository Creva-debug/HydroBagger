import type { Metadata } from "next";
import { DlaKogoTemplate } from "../DlaKogoTemplate";

export const metadata: Metadata = {
  title: "Prace hydrotechniczne dla ochrony środowiska | HydroBagger",
  description: "Prace hydrotechniczne dla instytucji środowiskowych – renaturyzacja, odmulanie, refulacja. Zgodność z dokumentacją, natura 2000 i RDOŚ.",
};

export default function OchronaSrodowiskaPage() {
  return (
    <DlaKogoTemplate
      breadcrumbLabel="Ochrona środowiska"
      heroImage="koparka-bagna-wycinka-drzew.jpg"
      heroAccent="Ochrony Środowiska"
      heroLead="Realizujemy prace hydrotechniczne na potrzeby ochrony środowiska – w ramach renaturyzacji, retencji i przywracania bioróżnorodności."
      heroDetails={["Działamy przy zbiornikach, mokradłach i ciekach wodnych, zgodnie z dokumentacją środowiskową oraz we współpracy z Parkami Narodowymi, parkami krajobrazowymi, RDOŚ i innymi organizacjami."]}
      areas={[
        {
          icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></>,
          title: "Renaturyzacja cieków i zbiorników",
          body: "Przywracamy naturalny przebieg i funkcję środowiskową cieków oraz zbiorników.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />,
          title: "Poprawa retencji wodnej",
          body: "Zwiększamy zdolność terenu do zatrzymywania wody i ograniczania skutków suszy.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />,
          title: "Zwiększanie bioróżnorodności",
          body: "Tworzymy warunki sprzyjające roślinom i zwierzętom wodnym i bagiennym.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.696.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />,
          title: "Zarządzanie roślinnością wodną",
          body: "Kosimy trzcinę i zakrzaczenia – wspierając równowagę i drożność ekosystemu.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
          title: "Prace w terenach chronionych",
          body: "Realizujemy zadania na obszarach Natura 2000 i w parkach krajobrazowych.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
          title: "Realizacja zgodna z dokumentacją",
          body: "Działamy zgodnie z projektem i decyzjami środowiskowymi inwestora.",
        },
      ]}
      faqTitle="Najczęstsze pytania od instytucji ochrony środowiska"
      faqItems={[
        { q: "Czy realizujecie prace na obszarach chronionych, np. Natura 2000?", a: "Tak – mamy doświadczenie w realizacji działań na terenach chronionych, zgodnie z wytycznymi formalnymi i środowiskowymi." },
        { q: "Czy możecie zająć się tylko jednym zakresem, np. koszeniem roślinności wodnej?", a: "Tak, wykonujemy zarówno kompleksowe projekty, jak i pojedyncze działania – np. koszenie, odmulanie czy pogłębianie." },
        { q: "Czy pomagacie w przygotowaniu dokumentacji do projektu?", a: "Możemy doradzić w zakresie technicznym i wesprzeć przygotowanie opisu prac do dokumentacji projektowej lub przetargowej." },
      ]}
    />
  );
}
