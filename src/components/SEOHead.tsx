import { PUBLIC_SITE_ORIGIN } from "@/lib/route-seo";

interface SEOHeadProps {
  title: string;
  description: string;
  /** Self-referencing path (e.g. "/about"). Defaults to current pathname. */
  canonical?: string;
  ogType?: "website" | "article";
  jsonLd?: object | object[];
  noindex?: boolean;
}

export const SITE_URL = PUBLIC_SITE_ORIGIN;

const SEOHead = ({ jsonLd }: SEOHeadProps) => {
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <>
      {blocks.map((b, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(b).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
};

export default SEOHead;
