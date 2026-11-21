export const PUBLIC_SITE_ORIGIN = "https://wecarephysiocliniccom.lovable.app";

export interface RouteSeoInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}

export function routeSeo({ title, description, path, type = "website" }: RouteSeoInput) {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  const canonical = `${PUBLIC_SITE_ORIGIN}${normalizedPath}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: type },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}