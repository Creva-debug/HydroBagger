import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/dla-kogo/jednostki-administracyjne");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function JednostkiAdministracyjnePage() {
  const seo = getSEO("/dla-kogo/jednostki-administracyjne");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Jednostki administracyjne"}
      path="/dla-kogo/jednostki-administracyjne"
    />
  );
}
