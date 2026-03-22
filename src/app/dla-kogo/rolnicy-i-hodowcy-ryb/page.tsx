import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/dla-kogo/rolnicy-i-hodowcy-ryb");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function RolnicyIHodowcyRybPage() {
  const seo = getSEO("/dla-kogo/rolnicy-i-hodowcy-ryb");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Rolnicy i hodowcy ryb"}
      path="/dla-kogo/rolnicy-i-hodowcy-ryb"
    />
  );
}
