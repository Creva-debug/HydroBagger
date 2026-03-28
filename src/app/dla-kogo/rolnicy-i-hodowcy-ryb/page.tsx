import type { Metadata } from "next";
import { DlaKogoTemplate } from "../DlaKogoTemplate";

export const metadata: Metadata = {
  title: "Prace ziemno-wodne dla rolników i hodowców ryb | HydroBagger",
  description: "Prace ziemno-wodne dla rolników i hodowców ryb: czyszczenie rowów, retencja, odmulanie stawów. Skutecznie działamy w terenie podmokłym.",
};

export default function RolnicyHodowcyRybPage() {
  return (
    <DlaKogoTemplate
      breadcrumbLabel="Rolnicy i hodowcy ryb"
      heroImage="koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg"
      heroAccent="Rolników i Hodowców Ryb"
      heroLead="Realizujemy prace ziemno-wodne dla rolników i hodowców ryb: utrzymanie, rozbudowa i modernizacja systemów melioracyjnych oraz zbiorników retencyjnych."
      heroDetails={["Znamy ograniczenia sprzętowe i warunki w trudnym terenie: podmokłym, bagnistym, niedostępnym. Łączymy specjalistyczny sprzęt i doświadczenie, by skutecznie chronić infrastrukturę rolną."]}
      areas={[
        {
          icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></>,
          title: "Udrażnianie rowów i melioracji",
          body: "Czyszczenie i udrażnianie rowów, by zapobiec podtopieniom pól i łąk.",
        },
        {
          icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></>,
          title: "Czyszczenie stawów hodowlanych",
          body: "Odsysamy muł i roślinność z dna — poprawa jakości wody i warunków hodowli.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />,
          title: "Zwiększanie retencji w polu",
          body: "Odtwarzamy zdolność gruntu do zatrzymywania wody opadowej.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.696.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />,
          title: "Koszenie roślinności wodnej",
          body: "Usuwamy trzcinę i roślinność z rowów i brzegów stawów – bez szkody dla linii brzegowej.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />,
          title: "Modernizacja systemów wodnych",
          body: "Odbudowujemy i wzmacniamy meliorację oraz zbiorniki retencyjne.",
        },
        {
          icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
          title: "Ochrona pól przed podtopieniami",
          body: "Zwiększamy drożność systemów odwadniających, by chronić pola przed nadmiarem wody.",
        },
      ]}
      faqTitle="Najczęstsze pytania od rolników i hodowców ryb"
      faqItems={[
        { q: "Jakie korzyści przynosi pogłębianie stawu w gospodarstwie?", a: "Zwiększa pojemność zbiornika, poprawia warunki dla ryb i ułatwia gromadzenie wody do nawadniania." },
        { q: "Czy możecie pracować w sezonie wegetacyjnym, bez szkody dla upraw?", a: "Tak – planujemy prace tak, by zminimalizować ryzyko uszkodzeń roślin i gleby. Mamy doświadczenie w pracy między uprawami." },
        { q: "Jakie działania pomagają zabezpieczyć pole przed podtopieniami?", a: "Skuteczne są udrożnienia rowów, poprawa retencji stawów i prace melioracyjne — dobieramy je do lokalnych warunków." },
      ]}
    />
  );
}
