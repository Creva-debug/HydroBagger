import type { Metadata } from "next";
import { SprzętTemplate } from "../SprzętTemplate";

export const metadata: Metadata = {
  title: "Wozidła budowlane – transport urobku | HydroBagger",
  description: "Wozidła budowlane do przewozu materiałów w grząskim i stromym terenie. Sprawdzą się tam, gdzie nie da rady standardowy sprzęt.",
};

export default function WozidlaBudowlanePage() {
  return (
    <SprzętTemplate
      breadcrumbLabel="Wozidła budowlane"
      heroImage="wozidlo-gasienicowe-transport-koparka-podmokly-teren1.jpg"
      heroTitle="Wozidła budowlane"
      heroLead="Specjalistyczne maszyny do transportu materiałów w trudnym terenie. Sprawdzają się na mokrych nawierzchniach, stromych zboczach, w lasach i miejscach niedostępnych dla tradycyjnych samochodów."
      heroDetails={[
        "Stosujemy wozidła kołowe i gąsienicowe – dobieramy je zależnie od podłoża, nachylenia i rodzaju ładunku.",
        "Maszyny są zwrotne, stabilne i przystosowane do intensywnej pracy. Świetnie nadają się do wywozu urobku i kruszywa z placów budowy.",
      ]}
      features={{
        title: "Zalety wozideł budowlanych",
        items: [
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />,
            title: "Transport w każdych warunkach",
            body: "Kołowe i gąsienicowe – docierają w błoto, mokre łąki i miejsca bez dróg dojazdowych.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />,
            title: "Duża ładowność",
            body: "Efektywny wywóz urobku, kruszywa i materiałów budowlanych – nawet z najbardziej odległych punktów placu.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
            title: "Niski nacisk na podłoże",
            body: "Szerokie gąsienice lub opony balonowe minimalizują nacisk – nie niszczą trawników ani miękkich gruntów.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
            title: "Stabilność na pochyłościach",
            body: "Bezpieczna praca na skarpach, nasypach i zboczach – tam, gdzie klasyczne pojazdy ryzykowałyby przewrócenie.",
          },
          {
            icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
            title: "Zwrotność w terenie",
            body: "Kompaktowe wymiary i krótki promień skrętu – dostęp do wąskich przejść i trudno dostępnych lokalizacji.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
            title: "Gotowość do działania",
            body: "Szybki transport i natychmiastowe uruchomienie w terenie – wozidła są gotowe do pracy tego samego dnia.",
          },
        ],
      }}
      gallery={[
        { src: "wozidlo-gasienicowe-transport-koparka-podmokly-teren1.jpg", alt: "Wozidło gąsienicowe – transport w trudnym terenie" },
        { src: "wozidlo-budowlane-hydrema-912c.jpg", alt: "Wozidło budowlane Hydrema 912C" },
        { src: "wozidla-budowlane-hydrobagger-transport-gruntu-terenie.jpg", alt: "Wozidła budowlane HydroBagger – transport gruntu" },
      ]}
    />
  );
}
