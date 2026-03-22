import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/sprzet/koparki-gasienicowe");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function KoparkiGasienicowePage() {
  const seo = getSEO("/sprzet/koparki-gasienicowe");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Koparki gąsienicowe"}
      path="/sprzet/koparki-gasienicowe"
    />
  );
}
