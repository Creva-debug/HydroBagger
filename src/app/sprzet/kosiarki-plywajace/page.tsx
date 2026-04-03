import type { Metadata } from "next";
import { SprzętTemplate } from "../SprzętTemplate";

export const metadata: Metadata = {
  title: "Kosiarki pływające – skuteczne koszenie z wody | HydroBagger",
  description: "Kosiarki pływające do zbiorników, kanałów i torfowisk. Usuwają roślinność wodną i zakrzaczenia – precyzyjnie, bezpiecznie i w trudnym terenie.",
};

export default function KosiarkiPlywajacePage() {
  return (
    <SprzętTemplate
      breadcrumbLabel="Kosiarki pływające"
      heroImage="koszenie-roslinnosci-wodnej-kosiarka-plywajaca-w-akcji1.jpg"
      heroTitle="Kosiarki pływające"
      heroLead="Specjalistyczne maszyny do pracy w zbiornikach wodnych, kanałach i torfowiskach. Skutecznie usuwają roślinność, która ogranicza przepływ wody i dostępność terenów."
      heroDetails={[
        "Wykorzystywane do koszenia trzciny i innych roślin wodnych inwazyjnych. Idealne do stawów, jezior, torfowisk i terenów przybrzeżnych.",
        "Mobilne, lekkie, precyzyjne – docierają w miejsca, gdzie inne maszyny nie mają szans.",
      ]}
      applications={{
        title: "Do czego wykorzystujemy kosiarki pływające?",
        items: [
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.696.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />,
            title: "Koszenie roślinności wodnej",
            body: "Usuwanie trzcin i innych roślin wodnych inwazyjnych porastających powierzchnię zbiorników i kanałów.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />,
            title: "Oczyszczenie linii brzegowej",
            body: "Koszenie i usuwanie roślin przy brzegu – bez ingerencji w grunt i bez niszczenia skarp.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
            title: "Udrożnianie rowów i kanałów",
            body: "Usuwanie porostów i roślin z dna i skarp, by przywrócić przepływ i drożność rowów melioracyjnych.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />,
            title: "Usuwanie roślin inwazyjnych",
            body: "Likwidacja gatunków niepożądanych – wywłucznika, moczarki, grążela, rdestnicy i innych gatunków ekspansywnych.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />,
            title: "Utrzymanie stawów i kąpielisk",
            body: "Koszenie i oczyszczanie akwenów rekreacyjnych, stawów wędkarskich i kąpielisk przed sezonem.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />,
            title: "Czyszczenie przed sezonem",
            body: "Przygotowanie zbiorników i brzegów do sezonu letniego – sprawnie i estetycznie.",
          },
        ],
      }}
      features={{
        title: "Zalety kosiarek pływających",
        items: [
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.696.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />,
            title: "Koszenie bez ograniczeń",
            body: "Wpływamy lub wjeżdżamy w szuwary, trzciny i zbiorniki, gdzie zwykły sprzęt nie dojedzie ani nie dotrze.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
            title: "Minimalizacja zniszczeń",
            body: "Nie rozjeżdżamy brzegu ani dna – zostawiamy minimalne ślady w terenie i nie naruszamy skarp.",
          },
          {
            icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
            title: "Dotarcie w każdy zakątek",
            body: "Działamy na mokradłach, torfowiskach i w trudno dostępnych zbiornikach – bez dróg dojazdowych.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
            title: "Precyzja bez ryzyka",
            body: "Usuwamy roślinność dokładnie i bezpiecznie – bez ryzyka uszkodzeń infrastruktury i brzegów.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />,
            title: "Mobilność i szybkie wdrożenie",
            body: "Sprzęt można łatwo przetransportować i uruchomić niemal wszędzie – nawet w bardzo odległych lokalizacjach.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />,
            title: "Bezpieczne dla środowiska",
            body: "Pracujemy bez chemii, bez niszczenia siedlisk i bez ingerencji w naturalną strukturę terenu.",
          },
        ],
      }}
      machinesFirst
      machines={{
        title: "Poznaj nasze kosiarki pływające",
        cols: 2,
        items: [
          {
            name: "Kosiarka pływająca H5-200 Aquatic Weed",
            image: "quatic-weed-kosiarka-plywajaca-hydrobagger.png",
            specs: [
              { label: "Waga", value: "1 400 kg" },
              { label: "Zasięg pracy", value: "do 2,4 m" },
              { label: "Funkcje", value: "Koszenie i zbiór roślinności z automatycznym załadunkiem" },
            ],
          },
          {
            name: "Kosiarka pływająca Truxor T40 Amphibia",
            image: "truxor-t40-amfibia-kosiarka-plywajaca-hydrobagger.png",
            specs: [
              { label: "Waga", value: "2 500 kg" },
              { label: "Zasięg koszenia", value: "1,7 m" },
              { label: "Funkcje", value: "Koszenie, mulczowanie, grabienie, refulacja" },
            ],
          },
        ],
      }}
      gallery={[
        { src: "truxor-realizacja-09.jpg", alt: "Kosiarka pływająca Truxor – realizacja" },
        { src: "truxor-realizacja-08.jpg", alt: "Kosiarka pływająca Truxor – realizacja" },
        { src: "truxor-realizacja-06.jpg", alt: "Kosiarka pływająca Truxor – realizacja" },
        { src: "truxor-realizacja-05.jpg", alt: "Kosiarka pływająca Truxor – realizacja" },
        { src: "truxor-realizacja-04.jpg", alt: "Kosiarka pływająca Truxor – realizacja" },
        { src: "truxor-realizacja-03.jpg", alt: "Kosiarka pływająca Truxor – realizacja" },
        { src: "truxor-realizacja-02.jpg", alt: "Kosiarka pływająca Truxor – realizacja" },
        { src: "truxor-realizacja-01.jpg", alt: "Kosiarka pływająca Truxor – realizacja" },
      ]}
    />
  );
}
