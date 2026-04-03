import type { Metadata } from "next";
import { metadataForPath } from "@/lib/seo-pages";
import { SprzętTemplate } from "../SprzętTemplate";

export const metadata: Metadata = metadataForPath("/sprzet/koparki-gasienicowe");

export default function KoparkiGasienicowePage() {
  return (
    <SprzętTemplate
      seoPath="/sprzet/koparki-gasienicowe"
      breadcrumbLabel="Koparki gąsienicowe"
      heroImage="koparka-plywajaca-kopanie-odmulanie-teren-podmokly.jpg"
      heroTitle="Koparki gąsienicowe"
      heroLead="Sprzęt do pracy w terenie, gdzie liczy się przyczepność i stabilność. Dzięki gąsienicom dobrze radzą sobie na miękkim gruncie, błocie, skarpach i w miejscach niedostępnych dla maszyn kołowych."
      heroDetails={[
        "Mamy maszyny o różnych szerokościach gąsienic – od kompaktowych modeli po szerokie błotniaki 1200 mm. Dopasowujemy sprzęt do konkretnych warunków.",
        "Nasze koparki są wydajne, stabilne i gotowe do intensywnej pracy przy załadunku, transporcie urobku i robotach ziemnych.",
      ]}
      features={{
        title: "Zalety koparek gąsienicowych",
        items: [
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
            title: "Stabilność na grząskim gruncie",
            body: "Gąsienice do 1200 mm szerokości zapewniają pracę bez ugrzęźnięcia nawet na bardzo miękkim podłożu.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />,
            title: "Różnorodność modeli",
            body: "Od kompaktowych koparek po ciężkie błotniaki – zawsze dobieramy właściwy model do skali i rodzaju pracy.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
            title: "Wysoka siła robocza",
            body: "Ciężki sprzęt do trudnych robót ziemnych – kopanie, skarpowanie, zagęszczanie i prace fundamentowe.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
            title: "Praca na skarpach i zboczach",
            body: "Wysoka przyczepność gąsienic zapewnia bezpieczną pracę na niestabilnych, stromych i pochyłych terenach.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />,
            title: "Współpraca z wozidłami",
            body: "Efektywny tandem z wozidłami gąsienicowymi – szybki załadunek urobku i ciągła praca bez przestojów.",
          },
          {
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />,
            title: "Wszechstronność w budowlance",
            body: "Od prac hydrotechnicznych po roboty drogowe i ziemne – koparka gąsienicowa sprawdzi się w każdych warunkach.",
          },
        ],
      }}
    />
  );
}
