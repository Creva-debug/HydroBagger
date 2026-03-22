import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/referencje");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function ReferencjePage() {
  const seo = getSEO("/referencje");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Referencje"}
      path="/referencje"
    />
  );
}
