import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/dla-kogo");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function DlaKogoPage() {
  const seo = getSEO("/dla-kogo");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Dla kogo"}
      path="/dla-kogo"
    />
  );
}
