import type { Metadata } from "next";
import { SprzętTemplate } from "../SprzętTemplate";

export const metadata: Metadata = {
  title: "Koparki pływające do pracy w trudnym terenie | HydroBagger",
  description: "Koparki pływające to specjalistyczny sprzęt do pracy w wodzie, na torfie i bagnach. Pozwalają realizować roboty ziemno-wodne tam, gdzie zwykłe maszyny nie dają rady.",
};

export default function KoparkiPlywajacePage() {
  return (
    <SprzętTemplate
      breadcrumbLabel="Koparki pływające"
      heroImage="koparka-plywajaca-kopanie-torfowisko01.jpg"
      heroTitle="Koparki pływające"
      heroLead="Specjalistyczny sprzęt do pracy w wodzie, na torfie i bagnach. Pozwalają realizować roboty ziemno-wodne tam, gdzie zwykłe maszyny nie dają rady."
      heroDetails={[
        "Wykorzystywane do odmulania, refulacji, czyszczenia kanałów i prac hydrotechnicznych. Idealne do zbiorników, torfowisk, rozlewisk i terenów zalewowych.",
        "Mobilne, stabilne, gotowe do działania w grząskim terenie – bez ryzyka ugrzęźnięcia.",
      ]}
      applications={{
        title: "Do czego wykorzystujemy koparki pływające?",
        items: [
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />,
            title: "Odmulanie zbiorników",
            body: "Usuwanie mułu i osadów ze stawów, kanałów i jezior – bezpiecznie, bez ryzyka uszkodzenia brzegów.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />,
            title: "Prace melioracyjne",
            body: "Czyszczenie rowów i kanałów – przywracanie drożności i właściwego odpływu wody.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />,
            title: "Ochrona środowiska",
            body: "Precyzyjna praca w torfowiskach i mokradłach – bez ingerencji w roślinność i ekosystem.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />,
            title: "Roboty hydrotechniczne",
            body: "Pogłębianie i przygotowanie dna pod mosty, przepusty, budowle wodne i inwestycje retencyjne.",
          },
          {
            icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
            title: "Prace w terenie zalewowym",
            body: "Realizacja robót ziemnych na grząskim, zalanym gruncie – tam, gdzie inny sprzęt nie wjedzie.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />,
            title: "Wsparcie działań projektowych",
            body: "Umożliwienie realizacji inwestycji w trudno dostępnych miejscach – bez potrzeby budowy dróg dojazdowych.",
          },
        ],
      }}
      features={{
        title: "Zalety koparek pływających",
        items: [
          {
            icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
            title: "Dojazd bez drogi",
            body: "Docieramy na teren bez dojazdu – przez błoto, wodę i podmokłe łąki. Bez dróg, bez drogi dojazdowej.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
            title: "Brak ryzyka ugrzęźnięcia",
            body: "Pływające podwozie utrzymuje maszynę nawet na najtrudniejszym grząskim terenie.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
            title: "Zero szkód w terenie",
            body: "Niski nacisk – nie zapadamy się i nie rozjeżdżamy naturalnego podłoża ani brzegów.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />,
            title: "Jedna maszyna – wiele zadań",
            body: "Kopiemy, czyścimy, odmulamy – ta sama koparka, bez potrzeby zmiany sprzętu na różnych etapach.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />,
            title: "Mobilność bez logistyki",
            body: "Transport, rozładunek i wejście w teren – wszystko szybko i sprawnie. Możemy zacząć następnego dnia.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
            title: "Realizacja bez opóźnień",
            body: "Nie czekamy na suszę ani sprzyjające warunki – wchodzimy w teren wtedy, gdy inni się wycofują.",
          },
        ],
      }}
      machines={{
        title: "Poznaj nasze koparki pływające",
        cols: 4,
        items: [
          { name: "Koparka pływająca REMU BIG FLOAT E2200", image: "koparka-plywajaca-kopanie-torfowisko01.jpg", specs: [{ label: "Waga", value: "33 000 kg" }, { label: "Zasięg ramienia", value: "16,0 m" }, { label: "Głębokość kopania", value: "13,0 m" }] },
          { name: "Koparka pływająca REMU BIG FLOAT E15", image: "koparka-plywajaca-kopanie-odmulanie-teren-podmokly.jpg", specs: [{ label: "Waga", value: "25 000 kg" }, { label: "Zasięg ramienia", value: "13,0 m" }, { label: "Głębokość kopania", value: "10,0 m" }] },
          { name: "Koparka pływająca EIK AM70", image: "koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg", specs: [{ label: "Waga", value: "11 000 kg" }, { label: "Zasięg ramienia", value: "6,5 m" }, { label: "Głębokość kopania", value: "4,0 m" }] },
          { name: "Koparka pływająca Waterking WK20", image: "koparka-plywajaca-zestaw-refulacyjny-hydrobagger.jpg", specs: [{ label: "Waga", value: "4 100 kg" }, { label: "Zasięg ramienia", value: "5,5 m" }, { label: "Głębokość kopania", value: "3,0 m" }] },
        ],
      }}
      gallery={[
        { src: "koparka-plywajaca-kopanie-torfowisko01.jpg", alt: "Koparka pływająca REMU w pracy na torfowisku" },
        { src: "koparka-plywajaca-kopanie-odmulanie-teren-podmokly.jpg", alt: "Koparka pływająca odmulanie terenu podmokłego" },
        { src: "koparka-plywajaca-pompa-refulacyjna-odmulanie1.jpg", alt: "Koparka pływająca z pompą refulacyjną" },
        { src: "koparka-plywajaca-zestaw-refulacyjny-hydrobagger.jpg", alt: "Zestaw refulacyjny HydroBagger" },
      ]}
    />
  );
}
