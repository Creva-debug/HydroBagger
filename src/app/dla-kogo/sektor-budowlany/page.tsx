import type { Metadata } from "next";
import { DlaKogoTemplate } from "../DlaKogoTemplate";

export const metadata: Metadata = {
  title: "Usługi hydrotechniczne dla firm budowlanych | HydroBagger",
  description: "Wspieramy firmy budowlane w trudnym terenie. Prace ziemno-wodne, kopanie, refulacja i transport – tam, gdzie standardowy sprzęt nie daje rady.",
};

export default function SektorBudowlanyPage() {
  return (
    <DlaKogoTemplate
      breadcrumbLabel="Sektor budowlany"
      heroImage="remu-big-float-e15-bokiem.jpg"
      heroAccent="Sektora Budowlanego"
      heroLead="Wspieramy wykonawców robót budowlanych w realizacji zadań ziemnych i hydrotechnicznych w trudnym terenie – na torfowiskach, rozlewiskach, gruntach podmokłych i w wodzie."
      heroDetails={["Działamy jako podwykonawcy lub partnerzy techniczni – z własnym sprzętem i doświadczonym zespołem. Pracujemy sprawnie, precyzyjnie i zgodnie z harmonogramem inwestycji."]}
      areas={[
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />,
          title: "Stabilizacja i osuszanie gruntu",
          body: "Pomagamy osuszyć teren inwestycji i przygotować go do dalszych prac.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />,
          title: "Kopanie w terenie podmokłym",
          body: "Prace ziemne na torfie, rozlewiskach i terenach bez stabilnego dojazdu.",
        },
        {
          icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></>,
          title: "Utrzymanie rowów i kanałów",
          body: "Czyścimy rowy i kanały – zwiększając drożność i chroniąc przed podtopieniami.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />,
          title: "Transport w trudnym terenie",
          body: "Dowozimy sprzęt i materiały przez błoto, wodę i teren bez utwardzenia.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.696.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />,
          title: "Koszenie i mulczowanie brzegów",
          body: "Usuwamy roślinność wodną i zakrzaczenia przy ciekach i zbiornikach.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
          title: "Realizacja zgodna z dokumentacją",
          body: "Działamy zgodnie z dokumentacją i formalnymi wymaganiami inwestora.",
        },
      ]}
      faqTitle="Najczęstsze pytania od wykonawców budowlanych"
      faqItems={[
        { q: "Czy poradzicie sobie z pracą na torfie lub bagnie?", a: "Tak. Pracujemy tam, gdzie klasyczny sprzęt nie daje rady – na torfowiskach, rozlewiskach i terenach bez dojazdu." },
        { q: "Czy możecie wesprzeć tylko część inwestycji?", a: "Oczywiście. Możemy dołączyć jako podwykonawca, zająć się np. odmulaniem, transportem lub koszeniem." },
        { q: "Czy pomagacie w dokumentacji lub uzgodnieniach?", a: "Tak – jeśli potrzeba, wspieramy na etapie dokumentacji technicznej i uzgodnień z inwestorem." },
      ]}
    />
  );
}
