import type { Metadata } from "next";
import { SprzętTemplate } from "../SprzętTemplate";

export const metadata: Metadata = {
  title: "Pompy refulacyjne do zbiorników i kanałów | HydroBagger",
  description: "Pompy refulacyjne do usuwania osadów z dna zbiorników i kanałów. Skuteczne, mobilne i gotowe do pracy w trudnym terenie.",
};

export default function PompyRefulacyjnePage() {
  return (
    <SprzętTemplate
      breadcrumbLabel="Pompy refulacyjne"
      heroImage="koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg"
      heroTitle="Pompy refulacyjne"
      heroLead="Specjalistyczne urządzenia do usuwania osadów z dna zbiorników wodnych, kanałów i torfowisk. Umożliwiają efektywne prace refulacyjne w miejscach, gdzie zwodowanie standardowego refulera jest niemożliwe."
      heroDetails={[
        "Stosujemy pompy DRAGFLOW w zestawie z koparkami pływającymi. Tworzą samobieżne refulery, które nie wymagają wodowania dźwigiem.",
        "Docieramy w trudne miejsca – bez ryzyka ugrzęźnięcia, precyzyjnie nawet przy niskim poziomie wody",
      ]}
      features={{
        title: "Zalety pomp refulacyjnych",
        items: [
          {
            icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
            title: "Refulacja bez ograniczeń",
            body: "Docieramy tam, gdzie inne maszyny nie wjadą – bez dróg dojazdowych, bez wodowania, bez dźwigu.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
            title: "Minimalna ingerencja w teren",
            body: "Nie rozjeżdżamy brzegu ani nie naruszamy dna zbiorników – precyzyjna praca bez zniszczeń.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
            title: "Praca w każdych warunkach",
            body: "Skuteczne działanie nawet przy niskim poziomie wody i na grząskim, niestabilnym podłożu.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
            title: "Wysoka wydajność odmulania",
            body: "Skutecznie usuwamy muł, osady i zawiesinę – z dużą precyzją, zasięgiem i wydajnością transportu.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />,
            title: "Mobilność i szybkie wdrożenie",
            body: "Sprzęt gotowy do pracy bez potrzeby ciężkiego transportu i wodowania. Szybkie uruchomienie w terenie.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />,
            title: "Bezpieczne dla środowiska",
            body: "Brak chemii i ciężkiego sprzętu – tylko precyzyjna praca w ekologicznie wrażliwych miejscach.",
          },
        ],
      }}
      galleryCols={3}
      gallery={[
        { src: "koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg", alt: "Pompa refulacyjna w trakcie odmulania zbiornika" },
        { src: "koparka-plywajaca-zestaw-refulacyjny-hydrobagger.jpg", alt: "Zestaw refulacyjny HydroBagger na zbiorniku" },
        { src: "refulacja-w-akcji.jpg", alt: "Refulacja w akcji" },
        { src: "koparka-plywajaca-zestaw-refulacyjny-na-wodzie-1 (1).jpg", alt: "Zestaw refulacyjny koparki pływającej na wodzie" },
        { src: "truxor-realizacja-02.jpg", alt: "Truxor – prace refulacyjne z wody" },
        { src: "truxor-realizacja-03.jpg", alt: "Truxor – realizacja refulacyjna" },
      ]}
    />
  );
}
