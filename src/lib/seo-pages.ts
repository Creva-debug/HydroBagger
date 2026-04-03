/**
 * Dane SEO dla podstron hydrobagger.pl
 * Źródło prawdy: docs/SEO-ZASADY.md
 */

export type PageSEO = {
  path: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
};

export const SEO_PAGES: Record<string, PageSEO> = {
  "/": {
    path: "/",
    keyword: "prace hydrotechniczne",
    metaTitle: "Prace hydrotechniczne w trudnym terenie | HydroBagger",
    metaDescription:
      "Prace hydrotechniczne z lądu i wody. Bagna, torfy, cieki – wchodzimy tam, gdzie inni się poddają. Skutecznie, bezpiecznie i na czas.",
  },
  "/polityka-cookies": {
    path: "/polityka-cookies",
    keyword: "brak",
    metaTitle: "Polityka Cookies w HydroBagger.pl",
    metaDescription:
      "Dowiedz się, czym są ciasteczka cookies, jak działają i jakie mają znaczenie dla Twojej prywatności w sieci. Zrozum politykę cookies na hydrobagger.pl!",
  },
  "/darmowa-konsultacja": {
    path: "/darmowa-konsultacja",
    keyword: "konsultacja hydrotechniczna",
    metaTitle: "Kontakt | Darmowa Konsultacja hydrotechniczna | Hydrobagger",
    metaDescription:
      "Umów się na darmową konsultację w zakresie prac hydrotechnicznych. Nasz zespół szybko odpowiada i dostosowuje rozwiązania do Twoich potrzeb. Skontaktuj się z nami!",
  },
  "/dla-kogo": {
    path: "/dla-kogo",
    keyword: "usługi hydrotechniczne",
    metaTitle: "Usługi hydrotechniczne – dla kogo? | HydroBagger",
    metaDescription:
      "Zobacz, dla kogo realizujemy prace ziemno-wodne i hydrotechniczne. Gminy, firmy, rolnicy, parki, osoby prywatne – działamy w trudnym terenie.",
  },
  "/dla-kogo/jednostki-administracyjne": {
    path: "/dla-kogo/jednostki-administracyjne",
    keyword: "usługi hydrotechniczne dla miast i gmin",
    metaTitle: "Usługi hydrotechniczne dla miast i gmin | HydroBagger",
    metaDescription:
      "Realizujemy usługi hydrotechniczne dla gmin i miast – odmulanie, refulacja, czyszczenie rowów i zbiorników. Działamy tam, gdzie inni nie mogą.",
  },
  "/dla-kogo/obiekty-turystyczne": {
    path: "/dla-kogo/obiekty-turystyczne",
    keyword: "prace hydrotechniczne dla obiektów turystycznych",
    metaTitle: "Prace hydrotechniczne dla obiektów turystycznych | HB",
    metaDescription:
      "Profesjonalne usługi hydrotechniczne dla obiektów turystycznych. Refulacja, pogłębianie i koszenie – zadbaj o estetykę i funkcjonalność terenów wodnych.",
  },
  "/dla-kogo/ochrona-srodowiska": {
    path: "/dla-kogo/ochrona-srodowiska",
    keyword: "prace hydrotechniczne dla ochrony środowiska",
    metaTitle: "Prace hydrotechniczne dla ochrony środowiska | HydroBagger",
    metaDescription:
      "Prace hydrotechniczne dla instytucji środowiskowych – renaturyzacja, odmulanie, refulacja. Zgodność z dokumentacją, natura 2000 i RDOŚ.",
  },
  "/dla-kogo/osoby-prywatne": {
    path: "/dla-kogo/osoby-prywatne",
    keyword: "prace ziemno-wodne dla osób prywatnych",
    metaTitle: "Prace ziemno-wodne dla osób prywatnych | HydroBagger",
    metaDescription:
      "Zbudujemy oczko wodne, pogłębimy staw lub oczyścimy działkę. Prace ziemno-wodne dla osób prywatnych – skutecznie, bezpiecznie i z efektem.",
  },
  "/dla-kogo/rolnicy-i-hodowcy-ryb": {
    path: "/dla-kogo/rolnicy-i-hodowcy-ryb",
    keyword: "prace ziemno-wodne dla rolników i hodowców ryb",
    metaTitle: "Prace ziemno-wodne dla rolników i hodowców ryb | HydroBagger",
    metaDescription:
      "Prace ziemno-wodne dla rolników i hodowców ryb: czyszczenie rowów, retencja, odmulanie stawów. Skutecznie działamy w terenie podmokłym.",
  },
  "/dla-kogo/sektor-budowlany": {
    path: "/dla-kogo/sektor-budowlany",
    keyword: "usługi hydrotechniczne dla firm budowlanych",
    metaTitle: "Usługi hydrotechniczne dla firm budowlanych | HydroBagger",
    metaDescription:
      "Wspieramy firmy budowlane w trudnym terenie. Prace ziemno-wodne, kopanie, refulacja i transport – tam, gdzie standardowy sprzęt nie daje rady.",
  },
  "/o-nas": {
    path: "/o-nas",
    keyword: "o hydrobagger",
    metaTitle: "O nas – specjaliści od trudnego terenu | HydroBagger",
    metaDescription:
      "Poznaj firmę HydroBagger – łączymy doświadczenie z unikalnym sprzętem do pracy w wodzie i trudnym terenie. Działamy tam, gdzie inni nie mogą.",
  },
  "/polityka-prywatnosci": {
    path: "/polityka-prywatnosci",
    keyword: "brak",
    metaTitle: "Polityka Prywatności - HydroBagger.pl",
    metaDescription:
      "Poznaj zasady dotyczące prywatności i plików cookies na hydrobagger.pl. Dowiedz się, jak chronimy Twoje dane i jakie masz prawa w sieci.",
  },
  "/praca": {
    path: "/praca",
    keyword: "praca",
    metaTitle: "Praca w HydroBagger – oferty hydrotechnika i operatora",
    metaDescription:
      "Sprawdź aktualne oferty pracy przy robotach ziemnych i hydrotechnicznych. Pracuj z zespołem HydroBagger i nowoczesnym sprzętem w terenie.",
  },
  "/praca/inzynier-robot-hydrotechnicznych": {
    path: "/praca/inzynier-robot-hydrotechnicznych",
    keyword: "praca kierownik robót",
    metaTitle: "Inżynier robót hydrotechnicznych – oferta pracy HydroBagger",
    metaDescription:
      "Interesuje Cię praca jako inżynier robót hydrotechnicznych? Oferujemy odpowiedzialne stanowisko, dobre warunki i stabilną współpracę. Sprawdź!",
  },
  "/praca/operator-koparki": {
    path: "/praca/operator-koparki",
    keyword: "praca operator koparki",
    metaTitle: "Operator koparki - oferta pracy HydroBagger",
    metaDescription:
      "Sprawdź aktualną ofertę pracy dla operatora koparki. Zapewniamy umowę o pracę, wysokie zarobki i pracę w solidnej firmie. Aplikuj do HydroBagger!",
  },
  "/referencje": {
    path: "/referencje",
    keyword: "referencje",
    metaTitle: "Referencje HydroBagger – zaufali nam liderzy rynku",
    metaDescription:
      "Poznaj opinie klientów i przykładowe realizacje HydroBagger. Zobacz, kto nam zaufał przy pracach hydrotechnicznych i ziemno-wodnych.",
  },
  "/regulamin": {
    path: "/regulamin",
    keyword: "brak",
    metaTitle: "Regulamin serwisu HydroBagger.pl – zasady korzystania",
    metaDescription:
      "Zapoznaj się z regulaminem naszego serwisu Hydrobagger. Znajdziesz tu ważne informacje dotyczące korzystania z naszych usług i zasad współpracy.",
  },
  "/sprzet": {
    path: "/sprzet",
    keyword: "sprzęt hydrotechniczny",
    metaTitle: "Sprzęt hydrotechniczny i maszyny do zadań specjalnych | HB",
    metaDescription:
      "Poznaj sprzęt hydrotechniczny HydroBagger: koparki pływające, pompy refulacyjne, kosiarki, wozidła i maszyny do pracy w trudnym terenie.",
  },
  "/sprzet/koparki-gasienicowe": {
    path: "/sprzet/koparki-gasienicowe",
    keyword: "koparki gąsienicowe",
    metaTitle: "Koparki gąsienicowe do trudnego terenu | HydroBagger",
    metaDescription:
      "Koparki gąsienicowe do pracy na błocie, skarpach i niestabilnym gruncie. Stabilne, wydajne i gotowe do zadań, gdzie sprzęt kołowy nie da rady.",
  },
  "/sprzet/koparki-plywajace": {
    path: "/sprzet/koparki-plywajace",
    keyword: "koparki pływające",
    metaTitle: "Koparki pływające do pracy w trudnym terenie | HydroBagger",
    metaDescription:
      "Koparki pływające to specjalistyczny sprzęt do pracy w wodzie, na torfie i bagnach. Pozwalają realizować roboty ziemno-wodne tam, gdzie zwykłe maszyny nie wjadą.",
  },
  "/sprzet/kosiarki-plywajace": {
    path: "/sprzet/kosiarki-plywajace",
    keyword: "kosiarki pływające",
    metaTitle: "Kosiarki pływające – skuteczne koszenie z wody | HydroBagger",
    metaDescription:
      "Kosiarki pływające do zbiorników, kanałów i torfowisk. Usuwają roślinność wodną i zakrzaczenia – precyzyjnie, bezpiecznie i w trudnym terenie.",
  },
  "/sprzet/kosiarki-samobiezne": {
    path: "/sprzet/kosiarki-samobiezne",
    keyword: "kosiarki samobieżne",
    metaTitle: "Kosiarki samobieżne do trudnego terenu | HydroBagger",
    metaDescription:
      "Kosiarki samobieżne idealne do trudnych warunków - zboczy, wałów i nasypów. Sprawdź, jak nasz sprzęt radzi sobie tam, gdzie inni zawodzą!",
  },
  "/sprzet/pompy-refulacyjne": {
    path: "/sprzet/pompy-refulacyjne",
    keyword: "pompy refulacyjne",
    metaTitle: "Pompy refulacyjne do zbiorników i kanałów | HydroBagger",
    metaDescription:
      "Pompy refulacyjne do usuwania osadów z dna zbiorników i kanałów. Skuteczne, mobilne i gotowe do pracy w trudnym terenie.",
  },
  "/sprzet/wozidla-budowlane": {
    path: "/sprzet/wozidla-budowlane",
    keyword: "wozidła budowlane",
    metaTitle: "Wozidła budowlane – transport urobku | HydroBagger",
    metaDescription:
      "Wozidła budowlane do przewozu materiałów w grząskim i stromym terenie. Sprawdzą się tam, gdzie nie da rady standardowy sprzęt.",
  },
  "/uslugi": {
    path: "/uslugi",
    keyword: "usługi ziemno-wodne i hydrotechniczne",
    metaTitle: "Usługi ziemno-wodne i hydrotechniczne | HydroBagger",
    metaDescription:
      "Poznaj nasze usługi ziemno-wodne i hydrotechniczne. Kopanie, koszenie, refulacja i transport – skutecznie, bezpiecznie, kompleksowo.",
  },
  "/uslugi/kopanie-w-trudnym-terenie": {
    path: "/uslugi/kopanie-w-trudnym-terenie",
    keyword: "kopanie w trudnym terenie",
    metaTitle: "Kopanie w trudnym terenie – torf, bagno, woda | HydroBagger",
    metaDescription:
      "Specjalistyczne kopanie w trudnym terenie – torfy, bagna, podmokłe działki. Działamy tam, gdzie inni nie dają rady. Sprawdź, jak możemy Ci pomóc.",
  },
  "/uslugi/koszenie-i-mulczowanie-roslinnosci": {
    path: "/uslugi/koszenie-i-mulczowanie-roslinnosci",
    keyword: "koszenie i mulczowanie roślinności",
    metaTitle: "Koszenie i mulczowanie roślinności z lądu i z wody | HB",
    metaDescription:
      "Usuwamy trzcinę, zakrzaczenia i roślinność wodną z brzegów, rowów i zbiorników – precyzyjnie i bezpiecznie, nawet w trudnym terenie. Sprawdź.",
  },
  "/uslugi/refulacia-i-odwadnianie-osadow": {
    path: "/uslugi/refulacia-i-odwadnianie-osadow",
    keyword: "refulacja i odwadnianie osadów",
    metaTitle: "Refulacja i odwadnianie osadów - zbiorniki wodne | HB",
    metaDescription:
      "Refulacja i odwadnianie osadów z HydroBagger – kompleksowe usługi odsysania mułu i mobilnych stacji odwadniających. Dowiedz się więcej o naszych rozwiązaniach!",
  },
  "/uslugi/transport-w-trudnym-terenie": {
    path: "/uslugi/transport-w-trudnym-terenie",
    keyword: "transport w trudnym terenie",
    metaTitle: "Transport w trudnym terenie – grząskie grunty | HydroBagger",
    metaDescription:
      "Realizujemy transport w błocie, torfie i na terenach zalanych. Dowozimy sprzęt i wywozimy urobek tam, gdzie inni nie wjadą. Sprawdź!",
  },
  "/baza-wiedzy": {
    path: "/baza-wiedzy",
    keyword: "baza wiedzy hydrotechniczna",
    metaTitle: "Baza wiedzy hydrotechnicznej i praktyczne porady | HydroBagger",
    metaDescription:
      "Poznaj praktyczną wiedzę hydrotechniczną - porady, przykłady realizacji i sprawdzone rozwiązania z terenu. Zobacz, jak działa HydroBagger.",
  },
};

export function getSEO(path: string): PageSEO | undefined {
  return SEO_PAGES[path];
}

export function metadataFromSEO(seo: PageSEO) {
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
  };
}
