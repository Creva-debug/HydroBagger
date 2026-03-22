import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/sprzet/koparki-plywajace");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function KoparkiPlywajacePage() {
  const seo = getSEO("/sprzet/koparki-plywajace");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Koparki pływające"}
      path="/sprzet/koparki-plywajace"
    />
  );
}
