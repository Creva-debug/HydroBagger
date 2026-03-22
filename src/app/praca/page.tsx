import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/praca");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function PracaPage() {
  const seo = getSEO("/praca");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Oferty pracy"}
      path="/praca"
    />
  );
}
