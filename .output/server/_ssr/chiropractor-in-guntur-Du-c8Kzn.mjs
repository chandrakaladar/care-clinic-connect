import { r as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Button } from "./button--6q1ISSg.mjs";
import { t as Link$1 } from "./router-compat-CFzcqfAL.mjs";
import { t as SEOHead } from "./SEOHead-Bhz1Qmlz.mjs";
import { i as services, n as buildSlug, t as areas } from "./locationServices-G7szTpVF.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { t as ScrollReveal } from "./ScrollReveal-BMk6mIAN.mjs";
import { E as Clock, H as Activity, L as Award, P as Bone, g as MapPin, i as Users, k as CircleCheck, m as MessageCircle, p as Phone, t as Zap, u as Shield, z as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chiropractor-in-guntur-Du-c8Kzn.js
var import_jsx_runtime = require_jsx_runtime();
var PHONE = "073308 33964";
var PHONE_TEL = "+917330833964";
var WHATSAPP = "https://wa.me/917330833964";
var conditionsTreated = [
	"Chronic lower back pain & stiffness",
	"Neck pain & cervical spondylosis",
	"Slipped disc & sciatica",
	"Spinal misalignment & subluxation",
	"Postural problems & forward-head posture",
	"Cervicogenic headaches & migraines",
	"Joint stiffness & restricted mobility",
	"Sports-related spinal strain"
];
var techniques = [
	{
		icon: Bone,
		name: "Chiropractic Adjustments",
		desc: "Precise spinal adjustments to restore alignment and relieve nerve pressure."
	},
	{
		icon: Activity,
		name: "Osteopathic Mobilisation",
		desc: "Gentle joint and soft-tissue techniques to restore natural movement."
	},
	{
		icon: Shield,
		name: "Biomechanical Spine Correction",
		desc: "Certified biomechanical assessment and correction of spinal mechanics."
	},
	{
		icon: Zap,
		name: "Myofascial Release",
		desc: "Deep soft-tissue release to break adhesions and ease chronic tension."
	}
];
var faqs = [
	{
		q: "Is there a good chiropractor in Guntur?",
		a: "Yes — We Care Physiotherapy & Sports & Chiropractic Clinic in Kothapeta, Guntur offers advanced chiropractic and osteopathy care led by Dr. R. Chandra Kaladar (MPT Sports, MIAP, CDNT), certified in biomechanical correction of the spine. Call 073308 33964 to book."
	},
	{
		q: "Is chiropractic treatment safe?",
		a: "When performed by a trained, certified professional, chiropractic adjustment is a safe, drug-free treatment. Our chiropractors follow international protocols and always begin with a detailed assessment before any adjustment."
	},
	{
		q: "What conditions does a chiropractor treat?",
		a: "Chiropractic care is effective for back pain, neck pain, slipped disc, sciatica, spinal misalignment, postural problems, joint stiffness and headaches that originate from the spine."
	},
	{
		q: "How many chiropractic sessions will I need?",
		a: "Many patients feel noticeable relief within 3–5 adjustments. A full corrective course typically runs 8–12 sessions, followed by maintenance visits if needed."
	},
	{
		q: "Do you combine chiropractic with physiotherapy?",
		a: "Yes. Every chiropractic plan at our Guntur clinic is supported with physiotherapy, myofascial release, dry needling and corrective exercises so the results last."
	},
	{
		q: "What are your clinic timings?",
		a: "We are open daily and close at 11 PM, with flexible slots for working professionals. Call 073308 33964 to confirm your preferred time."
	}
];
var ChiropractorGunturPage = () => {
	const chiroService = services.find((s) => s.slug === "chiropractic-and-osteopathy");
	const jsonLd = [
		{
			"@context": "https://schema.org",
			"@type": "MedicalBusiness",
			name: "We Care Physiotherapy & Sports & Chiropractic Clinic",
			description: "Chiropractor in Guntur offering advanced chiropractic adjustments, osteopathy, spinal alignment correction and myofascial release following international rehab protocols.",
			telephone: PHONE_TEL,
			email: "chandrakaladar@gmail.com",
			address: {
				"@type": "PostalAddress",
				streetAddress: "Door No 13, 5-18, 4th Lane, Gunturvari Thota, Kothapeta",
				addressLocality: "Guntur",
				addressRegion: "Andhra Pradesh",
				postalCode: "522001",
				addressCountry: "IN"
			},
			areaServed: {
				"@type": "Place",
				name: "Guntur, Andhra Pradesh"
			},
			medicalSpecialty: [
				"Chiropractic",
				"Osteopathy",
				"Physiotherapy"
			],
			openingHours: "Mo-Su 08:00-23:00",
			url: "https://wecarephysioclinic.com/chiropractor-in-guntur"
		},
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: faqs.map((f) => ({
				"@type": "Question",
				name: f.q,
				acceptedAnswer: {
					"@type": "Answer",
					text: f.a
				}
			}))
		},
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: "/"
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Services",
					item: "/services"
				},
				{
					"@type": "ListItem",
					position: 3,
					name: "Chiropractor in Guntur",
					item: "/chiropractor-in-guntur"
				}
			]
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SEOHead, {
			title: "Chiropractor in Guntur | Advanced Chiropractic & Osteopathy",
			description: "Trusted chiropractor in Guntur for back pain, neck pain, slipped disc & spinal alignment. Advanced chiropractic & osteopathy at We Care, Kothapeta. Call 7330833964.",
			canonical: "/chiropractor-in-guntur",
			jsonLd
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-surface-warm py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-20 left-[8%] w-20 h-20 rounded-full bg-primary/5 animate-float pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-16 right-[10%] w-16 h-16 rounded-2xl bg-primary/5 animate-float-delayed pointer-events-none -rotate-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container max-w-4xl relative z-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-3.5 h-3.5" }), " Kothapeta, Guntur"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-6",
							children: "Chiropractor in Guntur — Advanced Chiropractic & Osteopathy Care"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground text-lg leading-relaxed mb-6",
							children: [
								"Looking for a trusted ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "chiropractor in Guntur" }),
								"? We Care Physiotherapy & Sports & Chiropractic Clinic in Kothapeta offers advanced chiropractic adjustments, osteopathic mobilisation and biomechanical spine correction — all following international rehab protocols, with 12+ years of trusted care."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
										to: "/contact",
										children: ["Book Appointment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${PHONE_TEL}`,
										"aria-label": "Call the clinic now",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4" }),
											" Call ",
											PHONE
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: WHATSAPP,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": "WhatsApp us",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4" }), " WhatsApp Us"]
									})
								})
							]
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
					className: "text-center mb-12 max-w-3xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-sm tracking-wide uppercase mb-2",
						children: "Trusted Chiropractic Care"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display font-bold text-3xl md:text-4xl text-foreground",
						children: "Why patients choose our Guntur chiropractic clinic"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: [
						{
							icon: Award,
							title: "Certified Specialists",
							desc: "Dr. R. Chandra Kaladar is certified in biomechanical correction of the spine, sports injuries and joint replacement & pain management."
						},
						{
							icon: Shield,
							title: "International Protocols",
							desc: "Every adjustment follows international rehab protocols — safe, evidence-based chiropractic care right here in Guntur."
						},
						{
							icon: Users,
							title: "Complete Care Under One Roof",
							desc: "Chiropractic combined with physiotherapy, dry needling and myofascial release for results that last."
						}
					].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
						delay: i * .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center group h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "w-8 h-8 text-primary" })
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
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface-warm py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container max-w-5xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display font-bold text-3xl text-foreground mb-3",
					children: "Conditions our Guntur chiropractors treat"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mb-8",
					children: "From chronic back pain to postural problems — drug-free chiropractic and osteopathy care in Kothapeta, Guntur."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 gap-3",
					children: conditionsTreated.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2 p-3 rounded-lg bg-card border border-border/60 h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-foreground",
							children: c
						})]
					}) }, c))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
					className: "text-center mb-12 max-w-3xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-sm tracking-wide uppercase mb-2",
						children: "Our Techniques"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display font-bold text-3xl md:text-4xl text-foreground",
						children: "Advanced chiropractic techniques in Guntur"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
					children: techniques.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
						delay: i * .06,
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
							className: "group bg-card rounded-2xl p-7 shadow-xs border border-border/50 h-full hover:shadow-xl transition-shadow duration-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-14 h-14 rounded-2xl bg-teal-soft flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300",
									children: t.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm leading-relaxed",
									children: t.desc
								})
							]
						})
					}, t.name))
				})]
			})
		}),
		chiroService && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface-warm py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
					className: "text-center mb-10 max-w-3xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-sm tracking-wide uppercase mb-2",
						children: "Care Near You"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display font-bold text-3xl md:text-4xl text-foreground",
						children: "Chiropractic care across Guntur neighbourhoods"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
					children: areas.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
						className: "p-5 rounded-2xl bg-card border border-border/60 h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-semibold text-foreground text-lg mb-3 flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-primary" }),
								" ",
								area.name,
								", Guntur"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
							to: `/physiotherapy/${buildSlug(chiroService, area)}`,
							className: "text-primary hover:underline text-sm",
							children: ["Chiropractic & Osteopathy in ", area.name]
						})]
					}, area.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container max-w-5xl grid md:grid-cols-2 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display font-bold text-3xl text-foreground mb-5",
						children: "Visit our Guntur chiropractic clinic"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }), " Door No 13, 5-18, 4th Lane, near Kamaraju Diagnostic Centre, Gunturvari Thota, Kothapeta, Guntur, Andhra Pradesh 522001"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-start gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${PHONE_TEL}`,
										className: "hover:text-primary",
										children: PHONE
									}),
									" / 070364 67752"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }), " Open daily, closes 11 PM — flexible timings for working professionals."]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${PHONE_TEL}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4" }),
									" Call ",
									PHONE
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							className: "gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								to: "/contact",
								children: "Book Appointment"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl overflow-hidden border border-border/60 shadow-xs h-full min-h-[280px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "We Care Physiotherapy Guntur location map",
							src: "https://www.google.com/maps?q=Kothapeta,+Guntur,+Andhra+Pradesh+522001&output=embed",
							width: "100%",
							height: "100%",
							style: {
								border: 0,
								minHeight: "280px"
							},
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface-warm py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display font-bold text-3xl text-foreground mb-8",
					children: "Frequently asked questions about chiropractic in Guntur"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 rounded-2xl bg-card border border-border/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-bold text-lg text-foreground mb-2",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed text-sm",
							children: f.a
						})]
					}) }, f.q))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(135deg,hsl(160_90%_16%)_0%,hsl(174_84%_25%)_100%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
				className: "container text-center max-w-2xl py-20 relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display font-bold text-3xl md:text-4xl mb-4 text-primary-foreground",
						children: "Relieve your pain at Guntur's trusted chiropractic clinic"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary-foreground/70 text-lg mb-8",
						children: "Don't let back or neck pain hold you back. Book your chiropractic assessment in Kothapeta, Guntur today."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/contact",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								className: "bg-card text-foreground hover:bg-card/90 gap-2 shadow-lg",
								children: ["Book Appointment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${PHONE_TEL}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								variant: "outline",
								className: "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
								children: ["Call: ", PHONE]
							})
						})]
					})
				]
			})]
		})
	] });
};
var SplitComponent = ChiropractorGunturPage;
//#endregion
export { SplitComponent as component };
