import type { Metadata } from "next";
import Link from "next/link";
import { getPageMetadata } from "@/lib/seo-pages";
import { UsługiTemplate } from "../UsługiTemplate";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/uslugi/koszenie-i-mulczowanie-roslinnosci");
}

const ARTICLE_LINK_CLASS = "font-semibold text-[var(--hb-water)] hover:underline";

export default function KoszenieIMulczowaniePage() {
  return (
    <UsługiTemplate
      seoPath="/uslugi/koszenie-i-mulczowanie-roslinnosci"
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
        "Wycinanie i koszenie trzciny w wodzie",
        "Koszenie jezior, stawów i zbiorników retencyjnych",
        "Mulczowanie zakrzaczeń",
        "Udrażnianie zarośniętych rowów melioracyjnych",
        "Hakowanie roślin w dnie",
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
        { src: "truxor-t40-amfibia-kosiarka-plywajaca.jpg", alt: "Truxor T40 – amfibijna kosiarka pływająca" },
        { src: "kosiarka-lesna-bcs-630-ws.jpg", alt: "Kosiarka leśna BCS 630 WS" },
        { src: "kosiarka-ecotech-k34-predator.jpg", alt: "Kosiarka Ecotech K34 Predator" },
      ]}
      article={{
        label: "Warto wiedzieć",
        title: "Koszenie trzciny i roślinności wodnej w praktyce",
        blocks: [
          {
            heading: "Koszenie trzciny w wodzie – jak to robimy?",
            paragraphs: [
              <>
                Koszenie trzciny w wodzie wykonujemy{" "}
                <Link href="/sprzet/kosiarki-plywajace" className={ARTICLE_LINK_CLASS}>
                  kosiarkami pływającymi
                </Link>
                , które tną roślinność razem z częścią podwodną łodyg i od razu zbierają biomasę z lustra wody. Dzięki temu trzcinowisko odrasta wolniej, a skoszony materiał nie opada na dno i nie zamula zbiornika.
              </>,
              "Tam, gdzie trzcina rośnie na płyciznach i grząskim brzegu, pracujemy sprzętem amfibijnym – maszyna przemieszcza się między wodą a lądem bez przerywania pracy i bez niszczenia linii brzegowej.",
            ],
          },
          {
            heading: "Koszenie jezior, stawów i zbiorników retencyjnych",
            paragraphs: [
              "Wykaszanie roślinności wodnej prowadzimy na jeziorach, stawach, zbiornikach retencyjnych i przeciwpożarowych oraz na kanałach i rzekach. Zakres dobieramy do funkcji akwenu: inaczej kosi się kąpielisko i plażę, inaczej staw hodowlany, a jeszcze inaczej zbiornik retencyjny, w którym liczy się przepustowość.",
              <>
                Wycinanie roślinności wodnej łączymy z{" "}
                <Link href="/uslugi/refulacia-i-odwadnianie-osadow" className={ARTICLE_LINK_CLASS}>
                  odmulaniem i refulacją
                </Link>{" "}
                – jednym wejściem w teren porządkujemy i roślinność, i osady. To częsty wybór gmin oraz{" "}
                <Link href="/dla-kogo/obiekty-turystyczne" className={ARTICLE_LINK_CLASS}>
                  obiektów turystycznych
                </Link>{" "}
                przed sezonem.
              </>,
            ],
          },
          {
            heading: "Koszenie rowów melioracyjnych i cieków",
            paragraphs: [
              "Zarośnięte rowy melioracyjne przestają odprowadzać wodę – efektem są podtopienia łąk, pól i działek. Wykonujemy koszenie i czyszczenie rowów melioracyjnych kosiarkami samobieżnymi oraz mulczowanie skarp i poboczy, przywracając drożność całego układu.",
              "Pracujemy z lądu i z wody, także na odcinkach bez dojazdu. Skoszoną biomasę zbieramy i wywozimy albo mulczujemy na miejscu – zgodnie z ustaleniami i wymogami środowiskowymi.",
            ],
          },
        ],
      }}
      related={{
        title: "Powiązany sprzęt i usługi",
        items: [
          { href: "/sprzet/kosiarki-plywajace", label: "Kosiarki pływające", desc: "Kosiarka pływająca i kosiarka do trzciny wodnej – sprzęt, którym kosimy jeziora i stawy." },
          { href: "/sprzet/kosiarki-samobiezne", label: "Kosiarki samobieżne", desc: "Koszenie grobli, skarp i rowów melioracyjnych w terenie podmokłym." },
          { href: "/uslugi/refulacia-i-odwadnianie-osadow", label: "Refulacja i odwadnianie osadów", desc: "Odmulanie zbiorników wodnych – naturalne uzupełnienie koszenia roślinności." },
        ],
      }}
      currentSlug="koszenie-i-mulczowanie-roslinnosci"
    />
  );
}
