import { a as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Button } from "./button--6q1ISSg.mjs";
import { t as Link$1 } from "./router-compat-CFzcqfAL.mjs";
import { t as SEOHead } from "./SEOHead-Bhz1Qmlz.mjs";
import { n as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { t as ScrollReveal } from "./ScrollReveal-BMk6mIAN.mjs";
import { H as Activity, L as Award, M as Brain, P as Bone, S as Hand, b as Heart, c as Star, f as Scissors, i as Users, t as Zap, u as Shield, w as Flame, z as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-gAec4Wl3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AnimatedCounter = ({ value, className }) => {
	const ref = (0, import_react.useRef)(null);
	const isInView = useInView(ref, {
		once: true,
		amount: .5
	});
	const [display, setDisplay] = (0, import_react.useState)("0");
	(0, import_react.useEffect)(() => {
		if (!isInView) return;
		const numericMatch = value.match(/^([\d,]+)/);
		if (!numericMatch) {
			setDisplay(value);
			return;
		}
		const target = parseInt(numericMatch[1].replace(/,/g, ""), 10);
		const suffix = value.slice(numericMatch[0].length);
		const duration = 1800;
		const steps = 50;
		target / steps;
		let current = 0;
		let step = 0;
		const timer = setInterval(() => {
			step++;
			const progress = 1 - Math.pow(1 - step / steps, 3);
			current = Math.round(target * progress);
			setDisplay(current.toLocaleString() + suffix);
			if (step >= steps) {
				clearInterval(timer);
				setDisplay(value);
			}
		}, duration / steps);
		return () => clearInterval(timer);
	}, [isInView, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		className,
		children: isInView ? display : "0"
	});
};
var hero_clinic_default = "/assets/hero-clinic-BPpYNLbO.jpg";
var services = [
	{
		icon: Bone,
		title: "Orthopedic Physiotherapy",
		desc: "Relief from joint pain, arthritis, and musculoskeletal conditions with expert manual therapy."
	},
	{
		icon: Activity,
		title: "Sports Injury Rehab",
		desc: "Get back in the game with specialized sports rehabilitation and performance recovery."
	},
	{
		icon: Brain,
		title: "Neurological Rehab & Paralysis Treatment",
		desc: "Comprehensive rehabilitation for stroke, paralysis, and neurological conditions."
	},
	{
		icon: Zap,
		title: "Chiropractic & Osteopathy",
		desc: "Advanced spinal adjustments and osteopathic techniques following international protocols."
	},
	{
		icon: Scissors,
		title: "Dry Needling & Acupuncture",
		desc: "Targeted trigger point therapy and acupuncture for chronic and acute pain relief."
	},
	{
		icon: Hand,
		title: "Myofascial Release & Cupping",
		desc: "Soft tissue techniques and cupping therapy to improve mobility and reduce pain."
	},
	{
		icon: Heart,
		title: "Post-Surgery Rehab",
		desc: "Structured recovery programs after joint replacement, ACL surgery, and more."
	},
	{
		icon: Flame,
		title: "Pain Management",
		desc: "Drug-free techniques for back pain, neck pain, sciatica, knee pain, and more."
	}
];
var stats = [
	{
		value: "12+",
		label: "Years Experience"
	},
	{
		value: "8,500+",
		label: "Patients Treated"
	},
	{
		value: "97%",
		label: "Recovery Rate"
	},
	{
		value: "15+",
		label: "Specialized Services"
	}
];
var miniTestimonials = [
	{
		name: "Srinivas R.",
		text: "After 3 years of back pain, I found relief within a week!",
		rating: 5
	},
	{
		name: "Lakshmi D.",
		text: "Exceptional post-knee-replacement rehab. Full mobility in 3 months.",
		rating: 5
	},
	{
		name: "Ravi T.",
		text: "ACL injury felt career-ending. Now I'm back on the field, stronger.",
		rating: 5
	}
];
var HomePage = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SEOHead, {
		title: "Best Physiotherapy Clinic in Guntur | We Care",
		description: "Advanced chiropractic, dry needling, myofascial release, cupping & paralysis treatment in Guntur. International rehab protocols. Book now.",
		canonical: "/"
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-surface-warm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-20 left-[8%] w-20 h-20 rounded-full bg-primary/5 animate-float pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-16 left-[15%] w-12 h-12 rounded-xl bg-primary/8 animate-float-delayed pointer-events-none rotate-12" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-32 right-[12%] w-16 h-16 rounded-2xl bg-primary/5 animate-float-delayed pointer-events-none -rotate-6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-24 right-[8%] w-10 h-10 rounded-full bg-primary/6 animate-float pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container py-16 md:py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "text-primary font-semibold text-sm tracking-wide uppercase mb-4",
						initial: {
							opacity: 0,
							x: -20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: .5,
							delay: .2
						},
						children: "Physiotherapy & Rehabilitation Centre in Guntur"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-primary font-medium mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/physio-in-guntur",
							className: "hover:underline",
							children: "Physio in Guntur"
						}), " — trusted care since 12+ years"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.08] mb-6",
						children: [
							"Physiotherapy & Rehabilitation Clinic in Guntur",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Your Recovery, Our Commitment"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-lg md:text-xl max-w-lg mb-4 leading-relaxed",
						children: "Advanced Chiropractic & Osteopathy, Dry Needling, Myofascial Release, Cupping Therapy, and Paralysis Treatment — all following international rehab protocols."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-8",
						animate: { scale: [
							1,
							1.03,
							1
						] },
						transition: {
							duration: 3,
							repeat: Infinity,
							ease: "easeInOut"
						},
						children: "✦ International Rehab Protocols"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/contact",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								className: "bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30",
								children: ["Book Appointment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+917330833964",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "outline",
								className: "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.97] transition-all duration-200",
								children: "Call: 073308 33964"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-2xl overflow-hidden shadow-2xl group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: hero_clinic_default,
									alt: "We Care Physiotherapy & Chiropractic Clinic interior in Guntur",
									width: 1200,
									height: 800,
									fetchPriority: "high",
									decoding: "async",
									className: "w-full h-[360px] md:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105",
									loading: "eager"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-2xl" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								className: "absolute -bottom-5 -left-4 md:-left-8 bg-card rounded-xl px-5 py-3 shadow-xl border border-border/50",
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: .8,
									duration: .6,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display font-bold text-2xl text-primary tabular-nums",
									children: "8,500+"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-xs",
									children: "Patients Recovered"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								className: "absolute -top-4 -right-4 md:-right-8 bg-card rounded-xl px-4 py-2.5 shadow-xl border border-border/50",
								initial: {
									opacity: 0,
									y: -20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: 1,
									duration: .6,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1 mb-0.5",
									children: [
										1,
										2,
										3,
										4,
										5
									].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3 h-3 fill-primary text-primary" }, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-foreground text-xs font-medium",
									children: "Top Rated Clinic"
								})]
							})
						]
					})
				})]
			})
		]
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border/50 bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container py-8 grid sm:grid-cols-3 gap-6 text-center sm:text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary font-semibold text-xs tracking-wide uppercase mb-1",
					children: "Visit Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-foreground text-sm font-medium",
					children: "Door No 13, 5-18, 4th Lane, near Kamaraju Diagnostic Centre, Gunturvari Thota, Kothapeta, Guntur 522001"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
					delay: .08,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-xs tracking-wide uppercase mb-1",
						children: "Open Daily"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-foreground text-sm font-medium",
						children: "Open every day, closes 11 PM — flexible timings for working professionals"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
					delay: .16,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-xs tracking-wide uppercase mb-1",
						children: "Book a Visit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-foreground text-sm font-medium",
						children: [
							"Call ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+917330833964",
								className: "text-primary hover:underline",
								children: "073308 33964"
							}),
							" or ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								to: "/contact",
								className: "text-primary hover:underline",
								children: "book an appointment online"
							})
						]
					})]
				})
			]
		})
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-primary text-primary-foreground relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(135deg,hsl(174_84%_28%)_0%,hsl(160_90%_14%)_100%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10",
			children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				delay: i * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
						value: s.value,
						className: "font-display font-bold text-3xl md:text-5xl tabular-nums block"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary-foreground/70 text-sm mt-2",
						children: s.label
					})]
				})
			}, s.label))
		})]
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container py-20 md:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
				className: "text-center mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-sm tracking-wide uppercase mb-2",
						children: "What We Offer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display font-bold text-3xl md:text-4xl text-foreground",
						children: "Comprehensive Physiotherapy & Rehabilitation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-3 max-w-2xl mx-auto",
						children: "From pain relief to paralysis treatment — personalized care following international rehab protocols at our Guntur clinic."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
				children: services.map((svc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
						to: "/services",
						className: "group block bg-card rounded-2xl p-7 shadow-xs hover:shadow-xl transition-all duration-300 h-full border border-border/50 hover:-translate-y-1 relative overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-12 rounded-xl bg-teal-soft flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(svc.icon, { className: "w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-semibold text-base mb-2 text-foreground group-hover:text-primary transition-colors duration-300",
									children: svc.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm leading-relaxed",
									children: svc.desc
								})
							]
						})]
					})
				}, svc.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				delay: .3,
				className: "text-center mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
					to: "/services",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "lg",
						className: "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground gap-2 active:scale-[0.97] transition-all duration-200",
						children: ["View All 15+ Services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
					})
				})
			})
		]
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-surface-warm py-20 md:py-28 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-10 right-[5%] w-32 h-32 rounded-full bg-primary/3 animate-float pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
				className: "text-center mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary font-semibold text-sm tracking-wide uppercase mb-2",
					children: "Why Choose Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display font-bold text-3xl md:text-4xl text-foreground",
					children: "Trusted by Thousands in Guntur"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-8",
				children: [
					{
						icon: Award,
						title: "International Protocols",
						desc: "We follow international rehabilitation protocols for every treatment — ensuring world-class care right here in Guntur."
					},
					{
						icon: Shield,
						title: "Evidence-Based Care",
						desc: "Every treatment plan is grounded in the latest clinical research and best practices in physiotherapy and chiropractic care."
					},
					{
						icon: Users,
						title: "Patient-First Approach",
						desc: "We listen, understand, and create personalized recovery journeys for every individual — from athletes to elderly patients."
					}
				].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold text-xl mb-3 text-foreground",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground leading-relaxed",
								children: item.desc
							})
						]
					})
				}, item.title))
			})]
		})]
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container py-20 md:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
				className: "text-center mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary font-semibold text-sm tracking-wide uppercase mb-2",
					children: "What Patients Say"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display font-bold text-3xl md:text-4xl text-foreground",
					children: "Real Stories, Real Recovery"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto",
				children: miniTestimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card rounded-2xl p-7 shadow-xs border border-border/50 h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-4 right-5 text-5xl font-serif text-primary/10 leading-none select-none",
								children: "\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-0.5 mb-3",
								children: Array.from({ length: t.rating }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 fill-primary text-primary" }, j))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-foreground/80 text-sm leading-relaxed flex-1 mb-4",
								children: [
									"\"",
									t.text,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display font-semibold text-sm text-foreground",
								children: ["— ", t.name]
							})
						]
					})
				}, t.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				delay: .2,
				className: "text-center mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
					to: "/testimonials",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "lg",
						className: "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground gap-2 active:scale-[0.97] transition-all duration-200",
						children: ["Read All Reviews ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
					})
				})
			})
		]
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(135deg,hsl(160_90%_16%)_0%,hsl(174_84%_25%)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-8 left-[10%] w-24 h-24 rounded-full bg-primary-foreground/5 animate-float pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-8 right-[10%] w-16 h-16 rounded-full bg-primary-foreground/5 animate-float-delayed pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
				className: "container text-center max-w-2xl py-20 relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display font-bold text-3xl md:text-4xl mb-4 text-primary-foreground",
						children: "Ready to Start Your Recovery?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary-foreground/70 text-lg mb-8",
						children: "Don't let pain hold you back. Visit We Care Physiotherapy in Kothapeta, Guntur — or call us today for a consultation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap justify-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								to: "/contact",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									className: "bg-card text-foreground hover:bg-card/90 gap-2 active:scale-[0.97] transition-all duration-200 shadow-lg",
									children: ["Book Appointment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+917330833964",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									variant: "outline",
									className: "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 active:scale-[0.97] transition-all duration-200",
									children: "Call: 073308 33964"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+917036467752",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									variant: "outline",
									className: "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 active:scale-[0.97] transition-all duration-200",
									children: "Call: 070364 67752"
								})
							})
						]
					})
				]
			})
		]
	})
] });
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
