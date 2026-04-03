import { absoluteUrl, getSiteOrigin } from "@/lib/site-url";
import type { PageSEO } from "@/lib/seo-pages";

export function JsonLdWebPage({ seo }: { seo: PageSEO }) {
  const url = absoluteUrl(seo.path);
  const base = getSiteOrigin();
  const json = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: seo.metaTitle,
    description: seo.metaDescription,
    isPartOf: { "@type": "WebSite", "@id": `${base}/#website` },
    publisher: { "@id": `${base}/#organization` },
    inLanguage: "pl-PL",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
