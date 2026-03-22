import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/dla-kogo/obiekty-turystyczne");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function ObiektyTurystycznePage() {
  const seo = getSEO("/dla-kogo/obiekty-turystyczne");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Obiekty turystyczne"}
      path="/dla-kogo/obiekty-turystyczne"
    />
  );
}
