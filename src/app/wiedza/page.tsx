import { getSEO, metadataFromSEO } from "@/lib/seo-pages";
import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/PagePlaceholder";

export const metadata: Metadata = (() => {
  const seo = getSEO("/wiedza");
  return seo ? metadataFromSEO(seo) : {};
})();

export default function WiedzaPage() {
  const seo = getSEO("/wiedza");
  return (
    <PagePlaceholder
      title={seo?.metaTitle ?? "Wiedza hydrotechniczna"}
      path="/wiedza"
    />
  );
}
