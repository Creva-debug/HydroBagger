import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/realizacje");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function RealizacjePage() {
  const seo = getSEO("/realizacje");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Realizacje"}
      path="/realizacje"
    />
  );
}
