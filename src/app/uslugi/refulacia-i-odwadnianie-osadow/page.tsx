import type { Metadata } from "next";
import Link from "next/link";
import { getPageMetadata } from "@/lib/seo-pages";
import { UsługiTemplate } from "../UsługiTemplate";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/uslugi/refulacia-i-odwadnianie-osadow");
}

const ARTICLE_LINK_CLASS = "font-semibold text-[var(--hb-water)] hover:underline";

export default function RefulacjaIOdwadnianiePage() {
  return (
    <UsługiTemplate
      seoPath="/uslugi/refulacia-i-odwadnianie-osadow"
      breadcrumbLabel="Refulacja i odwadnianie osadów"
      heroImage="koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg"
      heroTitleLine1="Refulacja i odwadnianie osadów"
      heroTitleLine2="bez spuszczania wody"
      heroLead="Wykonujemy refulację i usuwanie osadów z dna zbiorników wodnych – stawów, jezior i kanałów. Odsysamy urobek z wody, bez konieczności jej spuszczania i bez naruszania linii brzegowej."
      heroDetails={[
        "Stosujemy refulery pływająco - gąsienicowe, mobilne stacje odwadniające i koparki pływające, które pozwalają prowadzić kilka etapów prac jednocześnie. Działamy precyzyjnie, bezpiecznie – także na terenach wrażliwych przyrodniczo.",
      ]}
      praceName="prace"
      praceItems={[
        "Odsysanie osadów z dna zbiorników",
        "Odwadnianie urobku na miejscu prac",
        "Refulacja stawów i akwenów wodnych",
        "Bagrowanie stawów, rzek i kanałów",
        "Odmulanie zbiorników wodnych",
        "Czyszczenie infrastruktury wodnej",
      ]}
      steps={[
        { n: "01", title: "Analiza osadów", body: "Oceniamy ilość, rodzaj i konsystencję osadów. Dobieramy odpowiednią pompę i planujemy miejsce składowania urobku." },
        { n: "02", title: "Rozstawienie zestawu", body: "Wodujemy koparkę z pompą DRAGFLOW i rozciągamy rurę tłoczną do przygotowanego wcześniej zbiornika odstojnikowego lub geotub." },
        { n: "03", title: "Odsysanie osadów", body: "Precyzyjne pompowanie mułu z dna zbiornika – bez opróżniania wody i bez uszkodzenia linii brzegowej." },
        { n: "04", title: "Odwadnianie urobku", body: "Osad trafia do odstojników lub geotub. Odwodniony materiał jest gotowy do wywozu." },
      ]}
      gallery={[
        { src: "koparka-plywajaca-zestaw-refulacyjny-na-wodzie-1 (1).jpg", alt: "Zestaw refulacyjny koparki pływającej na wodzie" },
        { src: "koparka-plywajaca-zestaw-refulacyjny-hydrobagger.jpg", alt: "Zestaw refulacyjny HydroBagger w akcji" },
      ]}
      article={{
        label: "Warto wiedzieć",
        title: "Refulacja, bagrowanie i odmulanie – co warto wiedzieć?",
        blocks: [
          {
            heading: "Czym są prace refulacyjne?",
            paragraphs: [
              "Prace refulacyjne polegają na hydraulicznym przemieszczaniu osadów: pompa refulacyjna zasysa muł z dna razem z wodą i tłoczy go rurociągiem do miejsca odkładu – geotub, odstojników lub wskazanego terenu. To najmniej inwazyjna metoda odmulania zbiorników wodnych, bo nie wymaga spuszczania wody ani ciężkiego sprzętu na brzegu.",
              <>
                Zestaw refulacyjny budujemy na bazie{" "}
                <Link href="/sprzet/koparki-plywajace" className={ARTICLE_LINK_CLASS}>
                  koparki pływającej
                </Link>{" "}
                i{" "}
                <Link href="/sprzet/pompy-refulacyjne" className={ARTICLE_LINK_CLASS}>
                  pomp refulacyjnych DRAGFLOW
                </Link>
                , dzięki czemu odmulanie i transport urobku prowadzimy jednocześnie.
              </>,
            ],
          },
          {
            heading: "Bagrowanie stawu i zbiornika – kiedy jest potrzebne?",
            paragraphs: [
              "Bagrowanie to mechaniczne pogłębianie i oczyszczanie dna – czerpakiem lub łyżką koparki. Sprawdza się tam, gdzie osady są zbite, zalegają grubą warstwą albo zawierają gałęzie i kamienie, których pompa nie przetłoczy. W praktyce łączymy obie metody: bagrowanie usuwa twardy rdzeń osadów, a refulacja wybiera płynny muł.",
              "Bagrowanie stawów, kanałów i odcinków rzek wykonujemy z wody, więc linia brzegowa i otoczenie zbiornika pozostają nienaruszone.",
            ],
          },
        ],
      }}
      related={{
        title: "Powiązany sprzęt i usługi",
        items: [
          { href: "/sprzet/pompy-refulacyjne", label: "Pompy refulacyjne", desc: "Wysokowydajne pompy DRAGFLOW do odsysania osadów i transportu urobku na duże odległości." },
          { href: "/sprzet/koparki-plywajace", label: "Koparki pływające", desc: "Amfibie, którymi bagrujemy i odmulamy zbiorniki bez spuszczania wody." },
          { href: "/uslugi/koszenie-i-mulczowanie-roslinnosci", label: "Koszenie i mulczowanie roślinności", desc: "Koszenie trzciny i roślinności wodnej – często pierwszy etap przed refulacją." },
        ],
      }}
      currentSlug="refulacia-i-odwadnianie-osadow"
    />
  );
}
