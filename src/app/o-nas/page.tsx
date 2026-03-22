import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/o-nas");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function ONasPage() {
  const seo = getSEO("/o-nas");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "O nas"}
      path="/o-nas"
    />
  );
}
