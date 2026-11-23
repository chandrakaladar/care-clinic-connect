import { a as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { S as useParams, b as Link, p as useLocation, x as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-compat-CFzcqfAL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Router-compat shim — bridges @/lib/router-compat v6 call sites to
* @tanstack/react-router without hand-rewriting every component.
* This is the same load-bearing pattern used in Klar's dev-copy migration.
*/
function parseTo(to) {
	const [beforeHash, hashStr] = (to ?? "").split("#");
	const [pathname, searchStr] = beforeHash.split("?");
	return {
		pathname: pathname || ".",
		search: searchStr ? Object.fromEntries(new URLSearchParams(searchStr)) : void 0,
		hash: hashStr || void 0
	};
}
function useLocation$1() {
	const loc = useLocation();
	return (0, import_react.useMemo)(() => ({
		pathname: loc.pathname,
		search: loc.searchStr ? `?${loc.searchStr}` : "",
		hash: loc.hash ?? "",
		state: loc.state ?? null,
		key: loc.pathname + (loc.searchStr ?? "")
	}), [
		loc.pathname,
		loc.searchStr,
		loc.hash,
		loc.state
	]);
}
function useParams$1() {
	return useParams({ strict: false });
}
var Link$1 = (0, import_react.forwardRef)(function Link$2({ to, replace, state, children, ...rest }, ref) {
	const { pathname, search, hash } = parseTo(to);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		ref,
		to: pathname,
		search,
		hash,
		replace,
		state,
		...rest ?? {},
		children
	});
});
function Navigate$1({ to, replace, state }) {
	const { pathname, search, hash } = parseTo(to);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: pathname,
		search,
		hash,
		state,
		replace
	});
}
//#endregion
export { useParams$1 as i, Navigate$1 as n, useLocation$1 as r, Link$1 as t };
