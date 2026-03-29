import type { Metadata } from "next";
import { SprzętTemplate } from "../SprzętTemplate";

export const metadata: Metadata = {
  title: "Kosiarki samobieżne do trudnego terenu | HydroBagger",
  description: "Kosiarki samobieżne idealne do trudnych warunków – zboczy, wałów i nasypów. Sprawdź, jak nasz sprzęt radzi sobie tam, gdzie inni zawodzą.",
};

export default function KosiarkiSamobieznePage() {
  return (
    <SprzętTemplate
      breadcrumbLabel="Kosiarki samobieżne"
      heroImage="koparka-plywajaca-kopanie-odmulanie-teren-podmokly.jpg"
      heroTitle="Kosiarki samobieżne"
      heroLead="Wyspecjalizowane maszyny do pracy w miejscach, gdzie standardowy sprzęt nie ma dostępu. Świetnie sprawdzają się na stromych zboczach, skarpach, poboczach dróg i w trudnym terenie."
      heroDetails={[
        "Stosujemy różne modele kosiarek – kołowe, gąsienicowe i na wysięgnikach. Dobieramy sprzęt do warunków i charakteru terenu.",
        "Maszyny są kompaktowe, wydajne i bezpieczne. Radzą sobie na stromych zboczach i w trudno dostępnych lokalizacjach.",
      ]}
      features={{
        title: "Zalety kosiarek samobieżnych",
        items: [
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
            title: "Skuteczne na każdym terenie",
            body: "Radzą sobie na zboczach, nasypach, wałach i nierównym gruncie, gdzie inne maszyny nie dotrą.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.696.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />,
            title: "Precyzyjne cięcie",
            body: "Kosiarki umożliwiają dokładną pracę przy krawędziach, słupach, skarpach i przy obiektach infrastruktury.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />,
            title: "Bezpieczna obsługa zdalna",
            body: "Operator steruje maszyną z bezpiecznej odległości – bez ryzyka kontuzji na stromych czy niestabilnych zboczach.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
            title: "Niski nacisk na podłoże",
            body: "Maszyny nie niszczą gleby ani nawierzchni – praca nawet na miękkim, podmokłym terenie.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />,
            title: "Wszechstronność zastosowań",
            body: "Sprawdzą się w lasach, parkach, przy drogach, na wałach i nasypach oraz na terenach przemysłowych.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
            title: "Gotowe do pracy od razu",
            body: "Szybki transport i natychmiastowa gotowość do działania – sprzęt wchodzi w teren bez zbędnej logistyki.",
          },
        ],
      }}
      gallery={[
        { src: "kosiarka-lesna-bcs-630-ws.jpg", alt: "Kosiarka leśna BCS 630 WS" },
        { src: "kosiarka-ecotech-k34-predator.jpg", alt: "Kosiarka Ecotech K34 Predator" },
        { src: "kosiarka-herder-massey-ferguson.jpg", alt: "Kosiarka Herder na ciągniku Massey Ferguson" },
        { src: "kosiarka-samobiezna-irus-deltrak-20.jpg", alt: "Kosiarka samobieżna Irus Deltrak 20" },
        { src: "osiarka-lesna-bcs-630-ws-transport-1.jpg", alt: "Transport kosiarki leśnej BCS 630 WS" },
        { src: "kosiarka-mulczujaca-na-ciagniku-boczny-ramie.jpg", alt: "Kosiarka mulczująca na ciągniku – ramię boczne" },
        { src: "Lesne-urzadzene.png", alt: "Leśne urządzenie – kosiarka w trudnym terenie" },
        {
          src: "kosiarka-samobiezna-koszenie-zarosnietych-rowow-terenie.jpg",
          alt: "Kosiarka samobieżna – koszenie zarośniętych rowów",
          imageClassName:
            "object-cover object-[center_14%] brightness-[0.97] saturate-[0.72] contrast-[1.02] transition-transform duration-500 ease-in-out hover:scale-[1.04]",
        },
      ]}
    />
  );
}
