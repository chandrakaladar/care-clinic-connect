import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  /** Self-referencing path (e.g. "/about"). Defaults to current pathname. */
  canonical?: string;
  ogType?: "website" | "article";
  jsonLd?: object | object[];
  noindex?: boolean;
}

export const SITE_URL = "https://wecarephysioclinic.com";

const SEOHead = ({ title, description, canonical, ogType = "website", jsonLd, noindex }: SEOHeadProps) => {
  const { pathname } = useLocation();
  const path = canonical ?? pathname;
  const clean = path.startsWith("/") ? path : `/${path}`;
  const absolute = `${SITE_URL}${clean === "/" ? "/" : clean.replace(/\/$/, "")}`;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={absolute} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={absolute} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="We Care Physiotherapy Clinic" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(b)}</script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
