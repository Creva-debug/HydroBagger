import type { Metadata } from "next";
import { UsługiTemplate } from "../UsługiTemplate";

export const metadata: Metadata = {
  title: "Transport w trudnym terenie – grząskie grunty | HydroBagger",
  description: "Realizujemy transport w błocie, torfie i na terenach zalanych. Dowozimy sprzęt i wywozimy urobek tam, gdzie inni nie wjadą.",
};

export default function TransportWTrudnymTereniePage() {
  return (
    <UsługiTemplate
      breadcrumbLabel="Transport w trudnym terenie"
      heroImage="wozidlo-gasienicowe-transport-koparka-podmokly-teren1.jpg"
      heroTitleLine1="Transport w trudnym terenie"
      heroTitleLine2="przez wodę, błoto, bezdroża"
      heroLead="Dostarczamy sprzęt i materiały tam, gdzie standardowe pojazdy nie mają szans – przez podmokłe łąki, bagna, rozlewiska i brzegi zbiorników. Działamy bez utwardzonej drogi."
      heroDetails={[
        "Dysponujemy pływającymi zestawami i pojazdami przystosowanymi do grząskiego terenu. Dzięki temu możemy zapewnić ciągłość pracy nawet w miejscach bez dróg i utwardzonych dojazdów.",
      ]}
      praceName="prace"
      praceItems={[
        "Transport sprzętu na bagna i torfowiska",
        "Wywóz urobku z trudnego terenu",
        "Dostawy materiałów przez grząski teren",
        "Przeładunki na trudnym gruncie",
      ]}
      steps={[
        { n: "01", title: "Analiza trasy", body: "Oceniamy nośność terenu, przeszkody i odległości. Wybieramy właściwy typ pojazdu do konkretnych warunków gruntowych." },
        { n: "02", title: "Dobór pojazdu", body: "Gąsienicowe lub kołowe, z wywrotką lub płaskim nadwoziem – dobieramy sprzęt do rodzaju ładunku i trudności terenu." },
        { n: "03", title: "Załadunek i transport", body: "Realizujemy transport zgodnie z harmonogramem – terminowo i bezpiecznie, przez najtrudniejsze tereny i bez drogi." },
        { n: "04", title: "Rozładunek w terenie", body: "Dostarczamy materiały lub sprzęt do wskazanego miejsca i dokumentujemy wykonane prace na potrzeby rozliczenia." },
      ]}
      gallery={[
        { src: "wozidlo-gasienicowe-transport-koparka-podmokly-teren1.jpg", alt: "Wozidło gąsienicowe na terenie podmokłym" },
        { src: "wozidlo-budowlane-hydrema-912c.jpg", alt: "Wozidło budowlane Hydrema 912C w trudnym terenie" },
      ]}
      currentSlug="transport-w-trudnym-terenie"
    />
  );
}
