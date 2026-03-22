import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/uslugi/transport-w-trudnym-terenie");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function TransportWTrudnymTereniePage() {
  const seo = getSEO("/uslugi/transport-w-trudnym-terenie");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Transport w trudnym terenie"}
      path="/uslugi/transport-w-trudnym-terenie"
    />
  );
}
