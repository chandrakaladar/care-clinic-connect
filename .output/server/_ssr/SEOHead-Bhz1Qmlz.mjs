import { r as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SEOHead-Bhz1Qmlz.js
var import_jsx_runtime = require_jsx_runtime();
var PUBLIC_SITE_ORIGIN = "https://wecarephysiocliniccom.lovable.app";
function routeSeo({ title, description, path, type = "website" }) {
	const canonical = `${PUBLIC_SITE_ORIGIN}${path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`}`;
	return {
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:type",
				content: type
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:url",
				content: canonical
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			}
		],
		links: [{
			rel: "canonical",
			href: canonical
		}]
	};
}
var SITE_URL = PUBLIC_SITE_ORIGIN;
var SEOHead = ({ jsonLd }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (jsonLd ? Array.isArray(jsonLd) ? jsonLd : [jsonLd] : []).map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(b).replace(/</g, "\\u003c") }
	}, i)) });
};
//#endregion
export { SITE_URL as n, routeSeo as r, SEOHead as t };
