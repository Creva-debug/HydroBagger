import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/ciasteczka-cookies");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function CiasteczkaCookiesPage() {
  const seo = getSEO("/ciasteczka-cookies");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Polityka Cookies"}
      path="/ciasteczka-cookies"
    />
  );
}
