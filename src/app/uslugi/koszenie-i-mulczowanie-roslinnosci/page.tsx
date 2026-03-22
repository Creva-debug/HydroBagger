import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/uslugi/koszenie-i-mulczowanie-roslinnosci");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function KoszenieIMulczowanieRoslinnosciPage() {
  const seo = getSEO("/uslugi/koszenie-i-mulczowanie-roslinnosci");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Koszenie i mulczowanie roślinności"}
      path="/uslugi/koszenie-i-mulczowanie-roslinnosci"
    />
  );
}
