import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/polityka-prywatnosci");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function PolitykaPrywatnosciPage() {
  const seo = getSEO("/polityka-prywatnosci");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Polityka prywatności"}
      path="/polityka-prywatnosci"
    />
  );
}
