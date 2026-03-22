import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/sprzet");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function SprzetPage() {
  const seo = getSEO("/sprzet");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Sprzęt"}
      path="/sprzet"
    />
  );
}
