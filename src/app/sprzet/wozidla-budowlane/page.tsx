import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/sprzet/wozidla-budowlane");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function WozidlaBudowlanePage() {
  const seo = getSEO("/sprzet/wozidla-budowlane");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Wozidła budowlane"}
      path="/sprzet/wozidla-budowlane"
    />
  );
}
