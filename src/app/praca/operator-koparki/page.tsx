import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/praca/operator-koparki");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function OperatorKoparkiPage() {
  const seo = getSEO("/praca/operator-koparki");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Operator koparki"}
      path="/praca/operator-koparki"
    />
  );
}
