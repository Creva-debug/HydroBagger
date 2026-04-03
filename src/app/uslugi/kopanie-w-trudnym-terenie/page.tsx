import type { Metadata } from "next";
import { metadataForPath } from "@/lib/seo-pages";
import { UsługiTemplate } from "../UsługiTemplate";

export const metadata: Metadata = metadataForPath("/uslugi/kopanie-w-trudnym-terenie");

export default function KopanieWTrudnymTereniePage() {
  return (
    <UsługiTemplate
      seoPath="/uslugi/kopanie-w-trudnym-terenie"
      breadcrumbLabel="Kopanie w trudnym terenie"
      heroImage="koparka-plywajaca-kopanie-torfowisko01.jpg"
      heroTitleLine1="Kopanie w trudnym terenie,"
      heroTitleLine2="tam, gdzie inni nie dojadą"
      heroLead="Specjalizujemy się w pracach ziemnych na podmokłych, bagnistych i niedostępnych terenach. Dzięki amfibijnemu i gąsienicowemu sprzętowi docieramy tam, gdzie standardowe maszyny nie mają szans dotrzeć."
      heroDetails={[
        "Nasze zaplecze pozwala prowadzić prace bezpiecznie i z minimalnym wpływem na otoczenie. Działamy tam, gdzie liczy się precyzja i kontrola – w pobliżu cieków wodnych, infrastruktury technicznej czy terenów chronionych.",
      ]}
      praceName="prace"
      praceItems={[
        "Utrzymywanie drożności rowów i kanałów",
        "Prace przygotowawcze pod inwestycje",
        "Pogłębianie zbiorników wodnych",
        "Budowa i modernizacja cieków wodnych",
        "Rekultywacja terenów przyrodniczych",
        "Odtwarzanie retencji wodnej",
        "Odwodnienia terenów podmokłych",
        "Prace ziemne przy zbiornikach wodnych",
      ]}
      steps={[
        { n: "01", title: "Ocena terenu", body: "Analizujemy warunki gruntowe, poziom wody i dostępność. Dobieramy odpowiedni sprzęt do konkretnych wyzwań i rodzaju podłoża." },
        { n: "02", title: "Wejście w teren", body: "Zestawiamy sprzęt i wchodzimy w teren – bez potrzeby budowy drogi dojazdowej ani utwardzenia podłoża." },
        { n: "03", title: "Realizacja robót", body: "Prowadzimy prace ziemne precyzyjnie i zgodnie z harmonogramem. Kontrolujemy głębokość, profil i jakość wykopu." },
        { n: "04", title: "Wywóz i rekultywacja", body: "Wywozimy urobek i przywracamy teren do stanu właściwego – lub zostawiamy go zgodnie z projektem i wytycznymi." },
      ]}
      gallery={[
        { src: "koparka-plywajaca-kopanie-torfowisko01.jpg", alt: "Koparka pływająca w pracach na torfowisku" },
        { src: "koparka-plywajaca-kopanie-odmulanie-teren-podmokly.jpg", alt: "Koparka na terenie podmokłym – odmulanie" },
        { src: "koparka-plywajaca-remu-big-float-e2200-na-brzegu-zbiornika.jpg", alt: "Koparka pływająca przy brzegu zbiornika" },
      ]}
      currentSlug="kopanie-w-trudnym-terenie"
    />
  );
}
