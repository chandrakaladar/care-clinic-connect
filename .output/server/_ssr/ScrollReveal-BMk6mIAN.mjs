import { r as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ScrollReveal-BMk6mIAN.js
var import_jsx_runtime = require_jsx_runtime();
var directionMap = {
	up: {
		y: 20,
		x: 0
	},
	left: {
		x: -20,
		y: 0
	},
	right: {
		x: 20,
		y: 0
	}
};
var ScrollReveal = ({ children, className, delay = 0, direction = "up" }) => {
	const offset = directionMap[direction];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			...offset,
			filter: "blur(4px)"
		},
		whileInView: {
			opacity: 1,
			x: 0,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			amount: .2
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className,
		children
	});
};
//#endregion
export { ScrollReveal as t };
