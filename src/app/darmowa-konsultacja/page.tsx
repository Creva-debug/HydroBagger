import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/darmowa-konsultacja");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function DarmowaKonsultacjaPage() {
  const seo = getSEO("/darmowa-konsultacja");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Darmowa konsultacja"}
      path="/darmowa-konsultacja"
    />
  );
}
