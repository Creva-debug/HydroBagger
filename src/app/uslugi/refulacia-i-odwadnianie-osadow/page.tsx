import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/uslugi/refulacia-i-odwadnianie-osadow");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function RefulaciaIOdwadnianieOsadowPage() {
  const seo = getSEO("/uslugi/refulacia-i-odwadnianie-osadow");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Refulacja i odwadnianie osadów"}
      path="/uslugi/refulacia-i-odwadnianie-osadow"
    />
  );
}
