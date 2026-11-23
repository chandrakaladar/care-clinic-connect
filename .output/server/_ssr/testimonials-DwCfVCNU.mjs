import { r as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Button } from "./button--6q1ISSg.mjs";
import { t as Link$1 } from "./router-compat-CFzcqfAL.mjs";
import { t as SEOHead } from "./SEOHead-Bhz1Qmlz.mjs";
import { t as ScrollReveal } from "./ScrollReveal-BMk6mIAN.mjs";
import { c as Star, z as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-DwCfVCNU.js
var import_jsx_runtime = require_jsx_runtime();
var testimonials = [
	{
		name: "Srinivas Rao",
		condition: "Chronic Back Pain",
		text: "After suffering from severe lower back pain for 3 years, I finally found relief at We Care. Dr. Ramesh's treatment plan was thorough and I started feeling better within the first week. Now I can play with my grandchildren again!",
		rating: 5
	},
	{
		name: "Lakshmi Devi",
		condition: "Post Knee Replacement",
		text: "The post-surgery rehabilitation at We Care was exceptional. The team was patient, encouraging, and highly skilled. I regained full mobility in my knee within 3 months. Highly recommend this clinic to anyone in Guntur.",
		rating: 5
	},
	{
		name: "Ravi Teja",
		condition: "Sports Injury — ACL Tear",
		text: "As a cricket player, my ACL injury felt like the end of my career. But Dr. Anil and the team at We Care gave me a comprehensive rehab program. I'm back on the field, stronger than before.",
		rating: 5
	},
	{
		name: "Padmavathi",
		condition: "Stroke Rehabilitation",
		text: "Dr. Priya's neurological rehabilitation program helped my father regain movement after a stroke. Her expertise and compassion made a difficult time much easier for our entire family.",
		rating: 5
	},
	{
		name: "Venkat Reddy",
		condition: "Frozen Shoulder",
		text: "I couldn't lift my arm for months. The physiotherapy sessions at We Care gradually restored my range of motion. The clinic is clean, modern, and the staff treats you like family.",
		rating: 5
	},
	{
		name: "Anitha Kumari",
		condition: "Sciatica Pain",
		text: "The shooting pain down my leg made everyday life unbearable. We Care's pain management approach was drug-free and effective. Within 6 weeks I was pain-free. Best physiotherapy clinic in Guntur!",
		rating: 5
	}
];
var TestimonialsPage = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SEOHead, {
	title: "Patient Reviews | We Care Physiotherapy Guntur",
	description: "Real patient success stories from We Care Physiotherapy Guntur — back pain, knee surgery, sports injuries, paralysis recovery.",
	canonical: "/testimonials"
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
	className: "bg-surface-warm py-16 md:py-24",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
				className: "text-center mb-16 max-w-3xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-sm tracking-wide uppercase mb-3",
						children: "Testimonials"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-4",
						children: "Patient Success Stories"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-lg",
						children: "Real stories from real patients who found relief, recovery, and renewed strength at our Guntur clinic."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",
				children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card rounded-2xl p-7 shadow-xs border border-border/50 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-4 right-5 text-6xl font-serif text-primary/8 leading-none select-none group-hover:text-primary/15 transition-colors duration-300",
								children: "\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-0.5 mb-4",
								children: Array.from({ length: t.rating }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 fill-primary text-primary" }, j))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-foreground/80 text-sm leading-relaxed flex-1 mb-5",
								children: [
									"\"",
									t.text,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display font-semibold text-foreground",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: t.condition
								})]
							})
						]
					})
				}, t.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				delay: .15,
				className: "max-w-3xl mx-auto mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card rounded-2xl p-7 border border-border/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display font-bold text-xl text-foreground mb-3",
							children: "About these stories"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm leading-relaxed mb-3",
							children: "These accounts come from patients treated at our Kothapeta, Guntur clinic for conditions including chronic back pain, post-knee-replacement recovery, ACL and sports injuries, stroke rehabilitation, frozen shoulder, and sciatica. Names are shortened to protect patient privacy."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm leading-relaxed",
							children: "Recovery timelines vary from person to person depending on the condition, its severity, and consistency with the prescribed program. Your physiotherapist will give you a realistic expectation after your first assessment."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				delay: .2,
				className: "text-center mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
					to: "/contact",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						className: "bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-secondary/20",
						children: ["Book Your Appointment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
					})
				})
			})
		]
	})
})] });
var SplitComponent = TestimonialsPage;
//#endregion
export { SplitComponent as component };
