import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo-pages";
import { fetchSiteImageVersions } from "@/lib/site-images-db";
import { SprzętTemplate, type SprzętGalleryItem } from "../SprzętTemplate";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/sprzet/koparki-kroczace");
}

/* Sloty zdjęć zarządzane z panelu (mngmt.hydrobagger.pl -> Landing -> Zdjęcia).
   Nazwy plików muszą być zgodne ze slotami w panelu (SITE_IMAGE_SLOTS). */
const HERO_SLOT = { key: "koparka_kroczaca_hero", filename: "koparka-kroczaca-hero.jpg" };
const MENZI_SLOT = { key: "koparka_kroczaca_menzi_muck", filename: "koparka-kroczaca-menzi-muck.jpg" };
const KAISER_SLOT = { key: "koparka_kroczaca_kaiser", filename: "koparka-kroczaca-kaiser.jpg" };
const GALLERY_SLOTS = [
  { key: "koparka_kroczaca_galeria_1", filename: "koparka-kroczaca-praca-01.jpg", alt: "Koparka krocząca podczas pracy na stromym zboczu" },
  { key: "koparka_kroczaca_galeria_2", filename: "koparka-kroczaca-praca-02.jpg", alt: "Koparka krocząca Menzi Muck z mulczerem w terenie" },
  { key: "koparka_kroczaca_galeria_3", filename: "koparka-kroczaca-praca-03.jpg", alt: "Koparka krocząca Kaiser przy wycince na skarpie" },
  { key: "koparka_kroczaca_galeria_4", filename: "koparka-kroczaca-praca-04.jpg", alt: "Koparka krocząca z frezarką do pni po wycince" },
] as const;

/* Tymczasowe tło hero, dopóki zdjęcie koparki kroczącej nie zostanie wgrane z panelu. */
const HERO_FALLBACK = "koparka-bagna-wycinka-drzew.jpg";

export default async function KoparkiKroczacePage() {
  const versions = await fetchSiteImageVersions([
    HERO_SLOT.key,
    MENZI_SLOT.key,
    KAISER_SLOT.key,
    ...GALLERY_SLOTS.map((s) => s.key),
  ]);

  const heroUploaded = versions[HERO_SLOT.key] != null;
  const gallery: SprzętGalleryItem[] = GALLERY_SLOTS.filter(
    (s) => versions[s.key] != null,
  ).map((s) => ({ src: s.filename, alt: s.alt, version: versions[s.key] }));

  return (
    <SprzętTemplate
      seoPath="/sprzet/koparki-kroczace"
      breadcrumbLabel="Koparki kroczące"
      heroImage={heroUploaded ? HERO_SLOT.filename : HERO_FALLBACK}
      heroImageVersion={heroUploaded ? versions[HERO_SLOT.key] : undefined}
      heroSlotKey={HERO_SLOT.key}
      heroTitle="Koparki kroczące"
      heroLead="Koparka krocząca (pająkowa) pracuje tam, gdzie żadna klasyczna maszyna nie wjedzie - na stromych zboczach, skarpach i w terenie górskim."
      heroDetails={[
        "Dysponujemy koparkami kroczącymi Menzi Muck oraz Kaiser z bogatym osprzętem: mulczerem, głowicą ścinkową i harvesterową oraz frezarką do pni.",
        "Niezależnie sterowane podpory pozwalają maszynie pewnie stanąć na nachyleniach, w wykopach i korytach rzek - bez budowy dróg dojazdowych.",
      ]}
      applications={{
        title: "Do czego wykorzystujemy koparki kroczące?",
        items: [
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />,
            title: "Prace na skarpach i zboczach",
            body: "Profilowanie, umacnianie i kształtowanie skarp oraz nasypów - na nachyleniach, na których klasyczna koparka się nie utrzyma.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />,
            title: "Wycinka i prace leśne",
            body: "Głowica ścinkowa i harvesterowa - usuwanie drzew i zakrzaczeń na zboczach, wzdłuż cieków i w miejscach niedostępnych dla harvestera.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.696.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />,
            title: "Mulczowanie roślinności",
            body: "Mulczer na wysięgniku czyści skarpy, nasypy, pobocza i linie brzegowe z gęstej roślinności oraz zakrzaczeń.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />,
            title: "Frezowanie pni",
            body: "Frezarka do pni usuwa karpy po wycince bez rozkopywania terenu - szybko i bez ciężkiego transportu.",
          },
          {
            icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
            title: "Prace w korytach rzek i potoków",
            body: "Regulacja cieków, umocnienia brzegów i usuwanie zatorów - koparka krocząca staje bezpośrednio w korycie rzeki.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />,
            title: "Roboty ziemne w terenie górskim",
            body: "Wykopy, niwelacje i przygotowanie terenu na dużych nachyleniach oraz w wąskich, trudno dostępnych lokalizacjach.",
          },
        ],
      }}
      machinesFirst
      machines={{
        title: "Poznaj nasze koparki kroczące",
        cols: 2,
        imageCrop: "4/3",
        items: [
          {
            name: "Koparka krocząca Menzi Muck",
            image: MENZI_SLOT.filename,
            imageVersion: versions[MENZI_SLOT.key],
            imagePending: versions[MENZI_SLOT.key] == null,
            specs: [
              { label: "Typ", value: "koparka krocząca (pająkowa)" },
              { label: "Teren", value: "strome zbocza, skarpy, góry" },
              { label: "Osprzęt", value: "mulczer, głowica ścinkowa" },
            ],
          },
          {
            name: "Koparka krocząca Kaiser",
            image: KAISER_SLOT.filename,
            imageVersion: versions[KAISER_SLOT.key],
            imagePending: versions[KAISER_SLOT.key] == null,
            specs: [
              { label: "Typ", value: "koparka krocząca, górska" },
              { label: "Teren", value: "teren górski, koryta rzek" },
              { label: "Osprzęt", value: "głowica harvesterowa, frezarka do pni" },
            ],
          },
        ],
      }}
      features={{
        title: "Zalety koparek kroczących",
        items: [
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />,
            title: "Praca na ekstremalnych nachyleniach",
            body: "Cztery niezależnie sterowane podpory pozwalają pewnie stanąć na stromych zboczach i nierównym gruncie.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
            title: "Minimalna ingerencja w teren",
            body: "Maszyna „kroczy\u201d po podporach zamiast rozjeżdżać grunt - zostawia po sobie znacznie mniej śladów niż sprzęt gąsienicowy.",
          },
          {
            icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>,
            title: "Dostęp bez dróg dojazdowych",
            body: "Docieramy w miejsca, do których nie prowadzi żadna droga - przez strome stoki, wąwozy i koryta cieków.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />,
            title: "Jedna maszyna - wiele narzędzi",
            body: "Szybka zmiana osprzętu: łyżka, mulczer, głowica ścinkowa lub harvesterowa, frezarka do pni - bez sprowadzania kolejnych maszyn.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
            title: "Bezpieczeństwo prac",
            body: "Zastępujemy niebezpieczną pracę ręczną na zboczach i przy wycince - operator pracuje z bezpiecznej kabiny.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
            title: "Precyzja w trudnych miejscach",
            body: "Kompaktowe wymiary i zwrotność pozwalają pracować przy infrastrukturze, na wąskich groblach i w gęstym terenie.",
          },
        ],
      }}
      article={{
        label: "Warto wiedzieć",
        title: "Koparka krocząca - maszyna do zadań niemożliwych",
        blocks: [
          {
            heading: "Czym jest koparka krocząca?",
            paragraphs: [
              "Koparka krocząca (nazywana też koparką pająkową lub górską) to specjalistyczna maszyna, której podwozie składa się z czterech niezależnie sterowanych nóg z podporami i kołami. Dzięki temu maszyna dosłownie „kroczy\u201d po terenie - każda noga może być ustawiona na innej wysokości i pod innym kątem.",
              "To rozwiązanie pozwala pracować na stromych zboczach, skarpach, w wykopach, na kamieńcach i w korytach rzek - wszędzie tam, gdzie klasyczna koparka kołowa lub gąsienicowa straciłaby stabilność albo w ogóle nie dotarła.",
            ],
          },
          {
            heading: "Menzi Muck i Kaiser - sprawdzone maszyny górskie",
            paragraphs: [
              "W naszym parku maszyn pracują koparki kroczące Menzi Muck oraz Kaiser - dwie marki, które wyznaczają standard w klasie maszyn kroczących. Konstrukcje te powstały z myślą o pracach w Alpach, więc strome polskie skarpy, wąwozy i tereny górskie to dla nich naturalne środowisko.",
              "Obie maszyny obsługują szeroki osprzęt wymienny: mulczer do roślinności i zakrzaczeń, głowicę ścinkową i harvesterową do wycinki drzew oraz frezarkę do pni. Jedna maszyna realizuje więc kompletny zakres prac - od odsłonięcia terenu, przez wycinkę, po uprzątnięcie karp.",
            ],
          },
          {
            heading: "Koparka krocząca czy pływająca - którą wybrać?",
            paragraphs: [
              "Obie maszyny uzupełniają się w trudnym terenie. Koparka krocząca sprawdza się na stromych zboczach, skarpach i w płytkich korytach rzek, gdzie kluczowa jest stabilność na nachyleniu. Koparka pływająca pracuje na wodzie, torfie i bagnach, gdzie liczy się pływalność i niski nacisk na podłoże.",
              "Nie musisz wybierać samodzielnie - opisz nam teren i zakres prac, a my dobierzemy odpowiedni sprzęt. Często łączymy obie maszyny w ramach jednej realizacji.",
            ],
          },
        ],
      }}
      gallery={gallery}
      faq={{
        title: "Najczęstsze pytania o koparki kroczące",
        items: [
          {
            q: "Czym różni się koparka krocząca od zwykłej koparki?",
            a: "Koparka krocząca zamiast klasycznego podwozia ma cztery niezależnie sterowane nogi z podporami i kołami. Dzięki temu utrzymuje stabilność na stromych zboczach i nierównym terenie, gdzie koparka kołowa lub gąsienicowa nie może bezpiecznie pracować.",
          },
          {
            q: "Gdzie sprawdza się koparka krocząca?",
            a: "Na skarpach, nasypach, stromych zboczach, w wąwozach, korytach rzek i potoków oraz w terenie górskim. To także świetna maszyna do wycinki i mulczowania w miejscach niedostępnych dla klasycznego sprzętu leśnego.",
          },
          {
            q: "Jaki osprzęt można zamontować na koparce kroczącej?",
            a: "Nasze koparki Menzi Muck i Kaiser pracują z łyżkami, mulczerem, głowicą ścinkową, głowicą harvesterową oraz frezarką do pni. Osprzęt dobieramy do zakresu prac - jedna maszyna wykonuje kopanie, wycinkę, mulczowanie i frezowanie karp.",
          },
          {
            q: "Czy wynajmujecie koparkę kroczącą z operatorem?",
            a: "Realizujemy usługi naszym sprzętem z doświadczonym operatorem. Dzięki temu odpowiadamy za efekt prac od początku do końca - od oceny terenu, przez transport maszyny, po odbiór wykonanych robót.",
          },
          {
            q: "Ile kosztuje praca koparki kroczącej?",
            a: "Wycena zależy od zakresu prac, terenu i czasu realizacji. Skorzystaj z bezpłatnej konsultacji - opisz nam swój projekt, a przygotujemy konkretną wycenę bez zobowiązań.",
          },
        ],
      }}
      related={{
        title: "Powiązany sprzęt i usługi",
        items: [
          { href: "/sprzet/koparki-plywajace", label: "Koparki pływające", desc: "Maszyny amfibijne do pracy na wodzie, torfie i bagnach - odmulanie, refulacja i roboty ziemno-wodne." },
          { href: "/uslugi/koszenie-i-mulczowanie-roslinnosci", label: "Koszenie i mulczowanie roślinności", desc: "Usuwanie trzcin, zakrzaczeń i roślinności z brzegów, rowów i zbiorników - z lądu i z wody." },
          { href: "/uslugi/kopanie-w-trudnym-terenie", label: "Kopanie w trudnym terenie", desc: "Roboty ziemne na torfach, bagnach i podmokłych działkach - tam, gdzie inni nie dają rady." },
        ],
      }}
    />
  );
}
