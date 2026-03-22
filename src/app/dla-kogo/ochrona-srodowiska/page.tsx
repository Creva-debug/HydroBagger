import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/dla-kogo/ochrona-srodowiska");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function OchronaSrodowiskaPage() {
  const seo = getSEO("/dla-kogo/ochrona-srodowiska");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Ochrona środowiska"}
      path="/dla-kogo/ochrona-srodowiska"
    />
  );
}
