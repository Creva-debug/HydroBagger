import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/sprzet/kosiarki-plywajace");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function KosiarkiPlywajacePage() {
  const seo = getSEO("/sprzet/kosiarki-plywajace");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Kosiarki pływające"}
      path="/sprzet/kosiarki-plywajace"
    />
  );
}
