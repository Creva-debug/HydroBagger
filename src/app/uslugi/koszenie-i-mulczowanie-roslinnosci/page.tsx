import type { Metadata } from "next";
import { UsługiTemplate } from "../UsługiTemplate";

export const metadata: Metadata = {
  title: "Koszenie i mulczowanie roślinności z lądu i z wody | HydroBagger",
  description: "Usuwamy trzcinę, zakrzaczenia i roślinność wodną z brzegów, rowów i zbiorników – precyzyjnie i bezpiecznie, nawet w trudnym terenie.",
};

export default function KoszenieIMulczowaniePage() {
  return (
    <UsługiTemplate
      breadcrumbLabel="Koszenie i mulczowanie roślinności"
      heroImage="koszenie-roslinnosci-wodnej-kosiarka-plywajaca-w-akcji1.jpg"
      heroTitleLine1="Koszenie i mulczowanie roślinności"
      heroTitleLine2="nad wodą, pod wodą, przy brzegu"
      heroLead="Zajmujemy się koszeniem i usuwaniem roślinności nad wodą oraz pod wodą. Wykorzystujemy specjalistyczny sprzęt do pracy na wodzie i w terenie podmokłym – nawet tam, gdzie nie da się dojechać standardową maszyną."
      heroDetails={[
        "Mulczujemy zakrzaczenia, roślinność przybrzeżną i nadrzeczną, które utrudniają przepływ wody lub użytkowanie terenu. Działamy szybko, precyzyjnie i z minimalnym wpływem na otoczenie – również w strefach chronionych.",
      ]}
      praceName="prace"
      praceItems={[
        "Koszenie roślinności wodnej i przybrzeżnej",
        "Mulczowanie zakrzaczeń",
        "Oczyszczanie linii brzegowych z roślin",
        "Udrażnianie zarośniętych rowów",
        "Koszenie na terenach rekreacyjnych",
        "Pielęgnacja strefy brzegowej zbiorników",
        "Koszenie w trudno dostępnych lokalizacjach",
        "Czyszczenie zbiorników przed sezonem",
      ]}
      steps={[
        { n: "01", title: "Ocena roślinności", body: "Określamy rodzaj i gęstość roślinności. Wybieramy optymalny sprzęt – kosiarki pływające lub samobieżne gąsienicowe." },
        { n: "02", title: "Przygotowanie sprzętu", body: "Transportujemy i wodujemy sprzęt. Kosiarki pływające są gotowe do pracy w ciągu godzin od przyjazdu na miejsce." },
        { n: "03", title: "Koszenie i mulczowanie", body: "Precyzyjne koszenie na wskazanych obszarach – z możliwością zebrania lub rozdrobnienia biomasy na miejscu." },
        { n: "04", title: "Wywóz i sprzątanie", body: "Zbieramy skoszoną roślinność i wywozimy poza teren prac. Zostawiamy czysty brzeg, zbiornik i teren." },
      ]}
      gallery={[
        { src: "truxor-realizacja-05.jpg", alt: "Realizacja koszenia i prac przybrzeżnych – Truxor" },
        { src: "kosiarka-lesna-bcs-630-ws.jpg", alt: "Kosiarka leśna BCS 630 WS" },
        { src: "kosiarka-ecotech-k34-predator.jpg", alt: "Kosiarka Ecotech K34 Predator" },
      ]}
      currentSlug="koszenie-i-mulczowanie-roslinnosci"
    />
  );
}
