import type { Metadata } from "next";
import { UsługiTemplate } from "../UsługiTemplate";

export const metadata: Metadata = {
  title: "Refulacja i odwadnianie osadów – zbiorniki wodne | HydroBagger",
  description: "Refulacja i odwadnianie osadów z HydroBagger – kompleksowe usługi odsysania mułu i mobilnych stacji odwadniających. Bez spuszczania wody zbiornika.",
};

export default function RefulacjaIOdwadnianiePage() {
  return (
    <UsługiTemplate
      breadcrumbLabel="Refulacja i odwadnianie osadów"
      heroImage="koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg"
      heroTitleLine1="Refulacja i odwadnianie osadów"
      heroTitleLine2="bez spuszczania wody"
      heroLead="Specjalizujemy się w refulacji i usuwaniu osadów z dna zbiorników wodnych – stawów, jezior i kanałów. Odsysamy urobek z wody, bez konieczności jej spuszczania i bez naruszania linii brzegowej."
      heroDetails={[
        "Stosujemy pływające pompy, mobilne stacje odwadniające i koparki pływające, które pozwalają prowadzić kilka etapów prac jednocześnie. Działamy precyzyjnie, bezpiecznie – także na terenach wrażliwych przyrodniczo.",
      ]}
      praceName="prace"
      praceItems={[
        "Odsysanie osadów z dna zbiorników",
        "Odwadnianie urobku na miejscu prac",
        "Refulacja stawów i akwenów wodnych",
        "Czyszczenie infrastruktury wodnej",
      ]}
      steps={[
        { n: "01", title: "Analiza osadów", body: "Oceniamy ilość, rodzaj i konsystencję osadów. Dobieramy odpowiednią pompę i planujemy miejsce składowania urobku." },
        { n: "02", title: "Rozstawienie zestawu", body: "Wodujemy koparkę z pompą DRAGFLOW i rozciągamy rurę tłoczną do miejsca składowania lub geotub." },
        { n: "03", title: "Odsysanie osadów", body: "Precyzyjne pompowanie mułu z dna zbiornika – bez opróżniania wody i bez uszkodzenia linii brzegowej." },
        { n: "04", title: "Odwadnianie urobku", body: "Osad trafia do mobilnych stacji odwadniających lub geotub. Odwodniony materiał jest gotowy do wywozu." },
      ]}
      gallery={[
        { src: "koparka-plywajaca-zestaw-refulacyjny-na-wodzie-1 (1).jpg", alt: "Zestaw refulacyjny koparki pływającej na wodzie" },
        { src: "koparka-plywajaca-zestaw-refulacyjny-hydrobagger.jpg", alt: "Zestaw refulacyjny HydroBagger w akcji" },
      ]}
      currentSlug="refulacia-i-odwadnianie-osadow"
    />
  );
}
