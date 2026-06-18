import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  /** Self-referencing path (e.g. "/about"). Defaults to current pathname. */
  canonical?: string;
  /** Optional JSON-LD object(s) to inject for this page. */
  jsonLd?: object | object[];
}

const setMeta = (
  selector: string,
  attr: string,
  value: string,
  create: () => HTMLElement,
) => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const SEOHead = ({ title, description, canonical, jsonLd }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', "content", description, () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    });

    const path = canonical ?? window.location.pathname;
    setMeta('link[rel="canonical"]', "href", path, () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    });

    setMeta('meta[property="og:title"]', "content", title, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:title");
      return m;
    });
    setMeta('meta[property="og:description"]', "content", description, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:description");
      return m;
    });
    setMeta('meta[property="og:url"]', "content", path, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:url");
      return m;
    });
    setMeta('meta[property="og:type"]', "content", "website", () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:type");
      return m;
    });

    setMeta('meta[name="twitter:card"]', "content", "summary_large_image", () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:card");
      return m;
    });
    setMeta('meta[name="twitter:title"]', "content", title, () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:title");
      return m;
    });
    setMeta('meta[name="twitter:description"]', "content", description, () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:description");
      return m;
    });

    document.head
      .querySelectorAll('script[data-seo-head="page"]')
      .forEach((n) => n.remove());
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      blocks.forEach((block) => {
        const s = document.createElement("script");
        s.type = "application/ld+json";
        s.setAttribute("data-seo-head", "page");
        s.textContent = JSON.stringify(block);
        document.head.appendChild(s);
      });
    }
  }, [title, description, canonical, jsonLd]);

  return null;
};

export default SEOHead;
