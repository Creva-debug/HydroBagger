import { imageUrl } from "@/lib/images";
import { getSiteOrigin } from "@/lib/site-url";

const DEFAULT_DESCRIPTION =
  "Prace hydrotechniczne z lądu i w wodzie – bagna, torfy, cieki. Koparki pływające, refulacja, koszenie. HydroBagger.";

export function SiteStructuredData() {
  const base = getSiteOrigin();
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "HydroBagger",
        url: base,
        logo: imageUrl("hydrobagger-graph.jpg"),
        image: imageUrl("hydrobagger-graph.jpg"),
        email: "kontakt@hydrobagger.pl",
        telephone: "+48504026042",
        address: {
          "@type": "PostalAddress",
          streetAddress: "ul. 17 Stycznia 5/1",
          addressLocality: "Międzychód",
          postalCode: "64-400",
          addressCountry: "PL",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: "HydroBagger",
        description: DEFAULT_DESCRIPTION,
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "pl-PL",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
