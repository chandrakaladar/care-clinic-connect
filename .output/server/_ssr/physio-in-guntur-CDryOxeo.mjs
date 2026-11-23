import { r as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Button } from "./button--6q1ISSg.mjs";
import { t as Link$1 } from "./router-compat-CFzcqfAL.mjs";
import { t as SEOHead } from "./SEOHead-Bhz1Qmlz.mjs";
import { i as services, n as buildSlug, t as areas } from "./locationServices-G7szTpVF.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { t as ScrollReveal } from "./ScrollReveal-BMk6mIAN.mjs";
import { E as Clock, H as Activity, L as Award, M as Brain, P as Bone, b as Heart, g as MapPin, i as Users, k as CircleCheck, m as MessageCircle, p as Phone, t as Zap, u as Shield, z as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/physio-in-guntur-CDryOxeo.js
var import_jsx_runtime = require_jsx_runtime();
var PHONE = "073308 33964";
var PHONE_TEL = "+917330833964";
var WHATSAPP = "https://wa.me/917330833964";
var conditionsTreated = [
	"Back pain, slipped disc & sciatica",
	"Knee pain & osteoarthritis",
	"Neck pain & cervical spondylosis",
	"Stroke & paralysis rehabilitation",
	"Sports injuries — sprains, tears, tendinopathy",
	"Post-surgery recovery (TKR, ACL, spine)",
	"Frozen shoulder & rotator cuff injuries",
	"Bell's palsy & facial paralysis",
	"Chronic pain & fibromyalgia",
	"Geriatric mobility & fall prevention"
];
var treatments = [
	{
		icon: Zap,
		name: "Dry Needling",
		desc: "Trigger-point release for muscle spasm and chronic pain."
	},
	{
		icon: Activity,
		name: "Myofascial Release",
		desc: "Soft-tissue mobilisation to restore mobility and break adhesions."
	},
	{
		icon: Heart,
		name: "Cupping Therapy",
		desc: "Improved circulation, reduced inflammation and deep-tissue healing."
	},
	{
		icon: Bone,
		name: "Chiropractic & Osteopathy",
		desc: "Spinal adjustments and alignment correction following international protocols."
	},
	{
		icon: Brain,
		name: "Neuro-Rehabilitation",
		desc: "Bobath, PNF and task-oriented motor re-training for stroke and paralysis."
	},
	{
		icon: Shield,
		name: "Pain Management",
		desc: "Drug-free IFT, TENS, ultrasound and therapeutic exercise programs."
	}
];
var areasList = [
	"Kothapeta",
	"Brodipet",
	"Arundelpet",
	"Lakshmipuram",
	"Gunturvari Thota",
	"Pattabhipuram",
	"Sangadigunta",
	"Nallapadu Road"
];
var faqs = [
	{
		q: "Which is the best physio clinic in Guntur?",
		a: "We Care Physiotherapy & Sports & Chiropractic Clinic in Kothapeta, Guntur is a trusted physiotherapy centre with 12+ years of experience, 8,500+ patients treated and international rehab protocols. Call 073308 33964 to book an assessment."
	},
	{
		q: "How do I find a physiotherapist near me in Guntur?",
		a: "If you are searching for a physiotherapist near you in Guntur, our clinic is centrally located at Door No 13, 5-18, 4th Lane, Kothapeta — minutes from Brodipet, Arundelpet and Lakshmipuram. Same-day appointments are usually available."
	},
	{
		q: "Do I need a doctor's referral for physio in Guntur?",
		a: "No referral is required. You can directly call or WhatsApp us and our chief physiotherapists will assess your condition and design a personalised treatment plan the same day."
	},
	{
		q: "What conditions does a physiotherapist in Guntur treat?",
		a: "We treat back pain, knee pain, cervical pain, sciatica, sports injuries, post-surgery cases, stroke and paralysis, frozen shoulder, Bell's palsy, arthritis and chronic pain — using evidence-based protocols."
	},
	{
		q: "Do you provide physio at home in Guntur?",
		a: "Yes. We provide home-visit physiotherapy across Guntur for post-surgery, stroke, paralysis, elderly and bed-ridden patients. The therapist brings portable IFT, ultrasound and dry needling equipment."
	},
	{
		q: "How much does a physio session cost in Guntur?",
		a: "Session pricing depends on your condition and the treatment modalities used. Call us for a transparent quote — package rates are available for rehab courses."
	},
	{
		q: "What are your clinic timings in Guntur?",
		a: "We are open daily and close at 11 PM, with flexible timings for working professionals. Call 073308 33964 to confirm your preferred slot."
	}
];
var PhysioInGunturPage = () => {
	const jsonLd = [
		{
			"@context": "https://schema.org",
			"@type": "MedicalBusiness",
			name: "We Care Physiotherapy & Sports & Chiropractic Clinic",
			description: "Physiotherapy clinic in Guntur offering chiropractic, dry needling, myofascial release, cupping therapy, paralysis treatment and post-surgery rehab following international protocols.",
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
			areaServed: areasList.map((a) => ({
				"@type": "Place",
				name: `${a}, Guntur`
			})),
			medicalSpecialty: "Physiotherapy",
			openingHours: "Mo-Su 08:00-23:00",
			url: "https://wecarephysioclinic.com/physio-in-guntur"
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
					name: "Physio in Guntur",
					item: "/physio-in-guntur"
				}
			]
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SEOHead, {
			title: "Physio in Guntur | Best Physiotherapy Clinic in Guntur",
			description: "Looking for physio in Guntur? We Care Physiotherapy offers chiropractic, dry needling, cupping, paralysis & post-surgery rehab. Open daily till 11 PM. Call 7330833964.",
			canonical: "/physio-in-guntur",
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
							children: "Physio in Guntur — Expert Physiotherapy & Rehabilitation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground text-lg leading-relaxed mb-6",
							children: [
								"Searching for the best ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "physio in Guntur" }),
								"? We Care Physiotherapy & Sports & Chiropractic Clinic in Kothapeta offers advanced chiropractic, dry needling, myofascial release, cupping therapy and paralysis treatment — all following international rehab protocols. 12+ years of trusted care for patients across Guntur."
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
						children: "Trusted Physiotherapy in Guntur"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display font-bold text-3xl md:text-4xl text-foreground",
						children: "Why patients choose our Guntur physio clinic"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: [
						{
							icon: Award,
							title: "12+ Years Experience",
							desc: "Chief physiotherapists Dr. R. Chandra Kaladar and Dr. M. Sailaja bring 12+ years and 8,500+ patients treated across Guntur."
						},
						{
							icon: Shield,
							title: "International Protocols",
							desc: "Every treatment follows international rehab protocols — evidence-based care you can trust, right here in Guntur."
						},
						{
							icon: Users,
							title: "Patient-First Approach",
							desc: "Personalised recovery plans for athletes, elderly, post-surgery and paralysis patients — everyone gets focused one-on-one care."
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
					children: "Conditions our Guntur physiotherapists treat"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mb-8",
					children: "From acute injuries to chronic and neurological conditions — comprehensive physiotherapy care under one roof in Kothapeta, Guntur."
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
						children: "Our Treatments"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display font-bold text-3xl md:text-4xl text-foreground",
						children: "Advanced physiotherapy treatments in Guntur"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: treatments.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
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
							className: "group bg-card rounded-2xl p-7 shadow-xs border border-border/50 h-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10",
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
							})]
						})
					}, t.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface-warm py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
						className: "text-center mb-10 max-w-3xl mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-primary font-semibold text-sm tracking-wide uppercase mb-2",
								children: "Care Near You"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display font-bold text-3xl md:text-4xl text-foreground",
								children: "Physiotherapy across Guntur neighbourhoods"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-3",
								children: "Dedicated care pages for patients searching from their locality in Guntur."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1.5 text-sm",
								children: services.map((svc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
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
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
						className: "text-center mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground",
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
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container max-w-5xl grid md:grid-cols-2 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display font-bold text-3xl text-foreground mb-5",
						children: "Visit our Guntur physio clinic"
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
					children: "Frequently asked questions about physio in Guntur"
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
						children: "Start your recovery at Guntur's trusted physio clinic"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary-foreground/70 text-lg mb-8",
						children: "Don't let pain hold you back. Book your physiotherapy assessment in Kothapeta, Guntur today."
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
var SplitComponent = PhysioInGunturPage;
//#endregion
export { SplitComponent as component };
