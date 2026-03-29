/** Karty „Zakres prac” / usług – jeden zestaw jak na stronie głównej (zdjęcia, nagłówki, opisy). */
export type UslugaZakresCard = {
  slug: string;
  href: string;
  title: string;
  short: string;
  desc: string;
  img: string;
};

export const USLUGI_ZAKRES_CARDS: readonly UslugaZakresCard[] = [
  {
    slug: "kopanie-w-trudnym-terenie",
    title: "Kopanie w\ntrudnym terenie",
    short: "Bagna · torfy · woda",
    desc: "Koparka nie wjedzie? My wpływamy. Kopiemy w bagnach, torfach i wodzie – tam, gdzie inni nie dojadą.",
    href: "/uslugi/kopanie-w-trudnym-terenie",
    img: "koparka-plywajaca-kopanie-torfowisko-2_.png",
  },
  {
    slug: "koszenie-i-mulczowanie-roslinnosci",
    title: "Koszenie roślinności\ni mulczowanie",
    short: "Brzegi · kanały · zbiorniki",
    desc: "Zarośnięte brzegi i dna? Czyścimy to gruntownie. Usuwamy roślinność nad wodą i pod wodą.",
    href: "/uslugi/koszenie-i-mulczowanie-roslinnosci",
    img: "koszenie-roslinnosci-wodnej-kosiarka-plywajaca-w-akcji_.png",
  },
  {
    slug: "refulacia-i-odwadnianie-osadow",
    title: "Refulacja i\nodwadnianie osadów",
    short: "Muł · osady · zbiorniki",
    desc: "Zalegający muł? Odessany i odwodniony. Oczyszczamy zbiorniki z osadów metodą refulacji.",
    href: "/uslugi/refulacia-i-odwadnianie-osadow",
    img: "koparka-plywajaca-pompa-refulacyjna-odmulanie2_.png",
  },
  {
    slug: "transport-w-trudnym-terenie",
    title: "Transport w\ntrudnym terenie",
    short: "Błoto · torf · woda",
    desc: "Gdzie nie wjedzie nikt – my dowozimy. Transportujemy sprzęt i materiały przez błoto i wodę.",
    href: "/uslugi/transport-w-trudnym-terenie",
    img: "wozidlo-gasienicowe-transport-koparka-podmokly-teren2_.png",
  },
];
