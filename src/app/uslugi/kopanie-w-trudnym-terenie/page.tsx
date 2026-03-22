import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/uslugi/kopanie-w-trudnym-terenie");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function KopanieWTrudnymTereniePage() {
  const seo = getSEO("/uslugi/kopanie-w-trudnym-terenie");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Kopanie w trudnym terenie"}
      path="/uslugi/kopanie-w-trudnym-terenie"
    />
  );
}
