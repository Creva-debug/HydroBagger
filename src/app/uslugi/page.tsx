import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/uslugi");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function UslugiPage() {
  const seo = getSEO("/uslugi");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Usługi"}
      path="/uslugi"
    />
  );
}
