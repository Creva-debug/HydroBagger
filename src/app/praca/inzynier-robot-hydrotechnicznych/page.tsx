import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/praca/inzynier-robot-hydrotechnicznych");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function InzynierRobotHydrotechnicznychPage() {
  const seo = getSEO("/praca/inzynier-robot-hydrotechnicznych");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Inżynier robót hydrotechnicznych"}
      path="/praca/inzynier-robot-hydrotechnicznych"
    />
  );
}
