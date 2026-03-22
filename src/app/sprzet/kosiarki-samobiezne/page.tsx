import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/sprzet/kosiarki-samobiezne");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function KosiarkiSamobieznePage() {
  const seo = getSEO("/sprzet/kosiarki-samobiezne");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Kosiarki samobieżne"}
      path="/sprzet/kosiarki-samobiezne"
    />
  );
}
