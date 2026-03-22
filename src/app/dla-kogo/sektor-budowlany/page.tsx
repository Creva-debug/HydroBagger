import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/dla-kogo/sektor-budowlany");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function SektorBudowlanyPage() {
  const seo = getSEO("/dla-kogo/sektor-budowlany");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Sektor budowlany"}
      path="/dla-kogo/sektor-budowlany"
    />
  );
}
