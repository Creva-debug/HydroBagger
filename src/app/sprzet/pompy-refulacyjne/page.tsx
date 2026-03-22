import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/sprzet/pompy-refulacyjne");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function PompyRefulacyjnePage() {
  const seo = getSEO("/sprzet/pompy-refulacyjne");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Pompy refulacyjne"}
      path="/sprzet/pompy-refulacyjne"
    />
  );
}
