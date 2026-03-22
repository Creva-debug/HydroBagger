import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/dla-kogo/osoby-prywatne");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function OsobyPrywatnePage() {
  const seo = getSEO("/dla-kogo/osoby-prywatne");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Osoby prywatne"}
      path="/dla-kogo/osoby-prywatne"
    />
  );
}
