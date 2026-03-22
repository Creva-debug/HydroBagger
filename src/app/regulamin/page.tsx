import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/regulamin");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function RegulaminPage() {
  const seo = getSEO("/regulamin");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Regulamin"}
      path="/regulamin"
    />
  );
}
