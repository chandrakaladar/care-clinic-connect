import { r as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Button } from "./button--6q1ISSg.mjs";
import { t as Link$1 } from "./router-compat-CFzcqfAL.mjs";
import { t as SEOHead } from "./SEOHead-Bhz1Qmlz.mjs";
import { i as services$1, n as buildSlug, t as areas } from "./locationServices-G7szTpVF.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { t as ScrollReveal } from "./ScrollReveal-BMk6mIAN.mjs";
import { C as Footprints, F as BedDouble, H as Activity, I as Baby, M as Brain, O as CircleDot, P as Bone, S as Hand, b as Heart, f as Scissors, r as Waves, t as Zap, w as Flame, z as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BqQbU6Q6.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		icon: Bone,
		title: "Orthopedic Physiotherapy",
		desc: "Expert treatment for joint pain, arthritis, frozen shoulder, back pain, neck pain, and all musculoskeletal conditions using manual therapy, therapeutic exercises, and advanced modalities.",
		benefits: [
			"Joint mobilization & manipulation",
			"Posture correction",
			"Arthritis management",
			"Spine rehabilitation"
		]
	},
	{
		icon: Activity,
		title: "Sports Injury Rehabilitation",
		desc: "Specialized programs for athletes and active individuals recovering from sprains, strains, ligament tears, and overuse injuries. Get back to peak performance safely.",
		benefits: [
			"ACL & meniscus rehab",
			"Shoulder & rotator cuff recovery",
			"Return-to-sport programs",
			"Performance optimization"
		]
	},
	{
		icon: Brain,
		title: "Neurological Rehabilitation",
		desc: "Comprehensive care for stroke, paralysis, Parkinson's disease, and other neurological conditions. Evidence-based neuro-rehab programs that improve function and independence.",
		benefits: [
			"Stroke rehabilitation",
			"Paralysis treatment",
			"Balance & coordination training",
			"Gait retraining"
		]
	},
	{
		icon: Heart,
		title: "Post-Surgery Rehabilitation",
		desc: "Structured recovery programs designed in coordination with your surgeon — from knee replacement and hip surgery to spinal procedures.",
		benefits: [
			"Joint replacement rehab",
			"Spinal surgery recovery",
			"Fracture rehabilitation",
			"Customized recovery timelines"
		]
	},
	{
		icon: Zap,
		title: "Advanced Chiropractic & Osteopathy",
		desc: "Precise spinal adjustments and osteopathic techniques to correct alignment, relieve nerve compression, and restore optimal body mechanics — following international rehab protocols.",
		benefits: [
			"Spinal adjustments",
			"Nerve compression relief",
			"Postural realignment",
			"Osteopathic manipulation"
		]
	},
	{
		icon: Scissors,
		title: "Dry Needling & Acupuncture",
		desc: "Targeted dry needling and acupuncture therapy to release trigger points, reduce muscle tension, and accelerate pain relief for chronic and acute conditions.",
		benefits: [
			"Trigger point release",
			"Chronic pain relief",
			"Muscle tension reduction",
			"Accelerated healing"
		]
	},
	{
		icon: Hand,
		title: "Myofascial Release & Massage Therapy",
		desc: "Specialized soft tissue techniques including myofascial release and therapeutic massage to break adhesions, improve tissue mobility, and reduce pain.",
		benefits: [
			"Fascia mobilization",
			"Deep tissue massage",
			"Scar tissue management",
			"Improved range of motion"
		]
	},
	{
		icon: Flame,
		title: "Cupping & Heat Therapy",
		desc: "Traditional cupping therapy combined with heat modalities to improve blood flow, reduce inflammation, and promote deep tissue healing.",
		benefits: [
			"Improved circulation",
			"Inflammation reduction",
			"Deep tissue healing",
			"Muscle relaxation"
		]
	},
	{
		icon: Zap,
		title: "Pain Management",
		desc: "Drug-free approaches for chronic and acute pain including sciatica, cervical spondylosis, fibromyalgia, back pain, knee pain, hip pain, and foot & ankle pain.",
		benefits: [
			"Back & neck pain relief",
			"Sciatica treatment",
			"Knee & hip pain management",
			"Foot & ankle rehabilitation"
		]
	},
	{
		icon: Waves,
		title: "Hydrotherapy & Aquatic Physiotherapy",
		desc: "Water-based rehabilitation programs that use buoyancy and resistance to improve mobility, strength, and recovery with minimal joint stress.",
		benefits: [
			"Low-impact rehabilitation",
			"Improved mobility",
			"Post-surgical aquatic rehab",
			"Arthritis management"
		]
	},
	{
		icon: CircleDot,
		title: "Balance Exercise Therapy",
		desc: "Targeted balance and proprioception training to prevent falls, improve stability, and restore confidence in movement — especially for elderly patients.",
		benefits: [
			"Fall prevention",
			"Vestibular rehabilitation",
			"Proprioception training",
			"Stability improvement"
		]
	},
	{
		icon: Baby,
		title: "Paediatric Physiotherapy",
		desc: "Gentle, age-appropriate physiotherapy for children with developmental delays, cerebral palsy, sports injuries, and postural concerns.",
		benefits: [
			"Developmental delay support",
			"Cerebral palsy rehab",
			"Postural correction",
			"Motor skill development"
		]
	},
	{
		icon: Footprints,
		title: "Geriatric Physiotherapy",
		desc: "Specialized elderly care focusing on mobility preservation, fall prevention, joint health, and maintaining independence through safe, guided exercise programs.",
		benefits: [
			"Mobility preservation",
			"Joint health maintenance",
			"Strength building",
			"Independence support"
		]
	},
	{
		icon: BedDouble,
		title: "Inpatient Rehabilitation",
		desc: "Comprehensive inpatient rehab programs for patients requiring intensive, supervised recovery — including paralysis treatment, post-surgical care, and critical illness recovery.",
		benefits: [
			"24/7 supervised care",
			"Intensive rehab programs",
			"Critical illness recovery",
			"Paralysis rehabilitation"
		]
	},
	{
		icon: Activity,
		title: "Occupational Therapy",
		desc: "Helping patients regain the ability to perform daily activities after injury, surgery, or neurological events — restoring independence and quality of life.",
		benefits: [
			"Daily activity training",
			"Adaptive techniques",
			"Workplace ergonomics",
			"Cognitive rehabilitation"
		]
	}
];
var ServicesPage = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SEOHead, {
		title: "Services | Physiotherapy & Chiropractic in Guntur",
		description: "15+ services in Guntur: chiropractic, dry needling, myofascial release, cupping, paralysis treatment, sports rehab. International protocols.",
		canonical: "/services"
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface-warm py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
				className: "text-center mb-16 max-w-3xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-sm tracking-wide uppercase mb-3",
						children: "Our Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-4",
						children: "Expert Physiotherapy & Rehabilitation in Guntur"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-lg mb-3",
						children: "Advanced Chiropractic & Osteopathy, Dry Needling, Myofascial Release, Cupping Therapy, Paralysis Treatment — all under one roof."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full",
						children: "✦ We Follow International Rehab Protocols"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground mt-4",
						children: [
							"Looking for a trusted",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								to: "/physio-in-guntur",
								className: "text-primary font-medium hover:underline",
								children: "physio in Guntur"
							}),
							"? We Care Physiotherapy offers 15+ treatments across the city, including specialised",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								to: "/services/paralysis-treatment-guntur",
								className: "text-primary font-medium hover:underline",
								children: "paralysis treatment in Guntur"
							}),
							"."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto",
				children: services.map((svc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: i * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						whileHover: { y: -6 },
						transition: {
							duration: .3,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "group bg-card rounded-2xl p-7 shadow-xs border border-border/50 h-full flex flex-col hover:shadow-xl transition-shadow duration-300 relative overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex flex-col h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-14 h-14 rounded-2xl bg-teal-soft flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 group-hover:rotate-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(svc.icon, { className: "w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
										to: "/contact",
										"aria-label": `Book appointment for ${svc.title}`,
										className: "shrink-0 w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300",
									children: svc.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm leading-relaxed mb-5 flex-1",
									children: svc.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2 pt-4 border-t border-border/40",
									children: svc.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5 text-sm text-foreground/70",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0" }), b]
									}, b))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
										to: "/contact",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											className: "w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 active:scale-[0.97] transition-all duration-200 shadow-md shadow-secondary/20",
											children: ["Book Appointment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" })]
										})
									})
								})
							]
						})]
					})
				}, svc.title))
			})]
		})
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-16 md:py-20 border-t border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
				className: "text-center mb-10 max-w-3xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-sm tracking-wide uppercase mb-3",
						children: "Areas We Serve"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display font-extrabold text-3xl md:text-4xl text-foreground leading-tight mb-3",
						children: "Physiotherapy across Guntur neighbourhoods"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Dedicated care pages for patients searching from their locality — Kothapeta, Brodipet, Arundelpet and Lakshmipuram."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground mt-3",
						children: [
							"Can't travel to the clinic?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								to: "/services/home-visit-physiotherapy",
								className: "text-primary font-medium hover:underline",
								children: "Book home visit physiotherapy in Guntur"
							}),
							"."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
				children: areas.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
					className: "p-5 rounded-2xl bg-card border border-border/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-semibold text-foreground text-lg mb-3",
						children: [area.name, ", Guntur"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1.5 text-sm",
						children: services$1.map((svc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
							to: `/physiotherapy/${buildSlug(svc, area)}`,
							className: "text-primary hover:underline",
							children: [
								svc.name,
								" in ",
								area.name
							]
						}) }, svc.slug))
					})]
				}, area.slug))
			})]
		})
	})
] });
var SplitComponent = ServicesPage;
//#endregion
export { SplitComponent as component };
