import { r as require_jsx_runtime } from "./_libs/@ai-sdk/react+[...].mjs";
import { t as Button } from "./_ssr/button--6q1ISSg.mjs";
import { i as useParams$1, n as Navigate$1, t as Link$1 } from "./_ssr/router-compat-CFzcqfAL.mjs";
import { t as SEOHead } from "./_ssr/SEOHead-Bhz1Qmlz.mjs";
import { i as services, n as buildSlug, r as findLocationService, t as areas } from "./_ssr/locationServices-G7szTpVF.mjs";
import { t as ScrollReveal } from "./_ssr/ScrollReveal-BMk6mIAN.mjs";
import { B as ArrowLeft, E as Clock, g as MapPin, k as CircleCheck, m as MessageCircle, p as Phone, s as Stethoscope } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BHm5Uwdx.js
var import_jsx_runtime = require_jsx_runtime();
var PHONE = "073308 33964";
var PHONE_TEL = "+917330833964";
var WHATSAPP = "https://wa.me/917330833964";
var LocationServicePage = () => {
	const { slug = "" } = useParams$1();
	const match = findLocationService(slug);
	if (!match) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate$1, {
		to: "/services",
		replace: true
	});
	const { service, area } = match;
	const clamp = (text, max) => text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;
	const title = clamp(`${service.name} in ${area.name}, Guntur`, 60);
	const description = clamp(`Expert ${service.shortName} physiotherapy in ${area.name}, Guntur. Evidence-based care, flexible timings. Call ${PHONE}.`, 160);
	const canonical = `/physiotherapy/${slug}`;
	const jsonLd = [{
		"@context": "https://schema.org",
		"@type": "MedicalBusiness",
		name: `We Care Physiotherapy & Chiropractic Clinic — ${service.name} in ${area.name}`,
		description,
		address: {
			"@type": "PostalAddress",
			streetAddress: "Door No: 13, 5-18, 4th Lane, Kothapeta",
			addressLocality: "Guntur",
			addressRegion: "Andhra Pradesh",
			postalCode: "522001",
			addressCountry: "IN"
		},
		areaServed: [{
			"@type": "Place",
			name: `${area.name}, Guntur`
		}, {
			"@type": "Place",
			name: "Guntur"
		}],
		telephone: PHONE_TEL,
		medicalSpecialty: "Physiotherapy",
		availableService: {
			"@type": "MedicalTherapy",
			name: service.name
		}
	}, {
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
				name: `${service.name} in ${area.name}`,
				item: `https://wecarephysioclinic.com${canonical}`
			}
		]
	}];
	const relatedInArea = services.filter((s) => s.slug !== service.slug).slice(0, 4).map((s) => ({
		label: `${s.name} in ${area.name}`,
		to: `/physiotherapy/${buildSlug(s, area)}`
	}));
	const sameServiceOtherAreas = areas.filter((a) => a.slug !== area.slug).map((a) => ({
		label: `${service.name} in ${a.name}`,
		to: `/physiotherapy/${buildSlug(service, a)}`
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SEOHead, {
		title,
		description,
		canonical,
		jsonLd
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "pt-28 pb-20 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-6 max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
					to: "/services",
					className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-4 h-4" }), " All services"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-3.5 h-3.5" }),
							" Serving ",
							area.name,
							", Guntur"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl md:text-5xl font-bold text-foreground leading-tight",
						children: [
							service.name,
							" in ",
							area.name,
							", Guntur"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg text-muted-foreground mt-4",
						children: [
							"Looking for expert ",
							service.shortName,
							" treatment in ",
							area.name,
							"? We Care Physiotherapy is ",
							area.distance,
							" ",
							area.name,
							" — offering personalized, evidence-based physiotherapy trusted by patients across Guntur."
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid sm:grid-cols-2 gap-3",
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
							className: "gap-2 border-[hsl(142_70%_45%)]/30 text-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_45%)] hover:text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WHATSAPP,
								target: "_blank",
								rel: "noopener noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4" }), " WhatsApp us"]
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-2xl md:text-3xl font-bold text-foreground",
								children: [
									"Why ",
									area.name,
									" residents choose We Care"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-3",
								children: service.intro
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-2 text-sm text-muted-foreground",
								children: [area.landmarks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 mt-0.5 text-primary shrink-0" }),
										" ",
										l
									]
								}, l)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-4 h-4 mt-0.5 text-primary shrink-0" }),
										" Open daily till 11 PM — flexible for working professionals in ",
										area.name,
										"."
									]
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl md:text-3xl font-bold text-foreground",
								children: "Conditions we treat"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground mt-3",
								children: [
									"Common ",
									service.shortName,
									" problems we manage for ",
									area.name,
									" patients:"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid sm:grid-cols-2 gap-3",
								children: service.conditions.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-2 p-3 rounded-lg bg-card border border-border/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-foreground",
										children: c
									})]
								}, c))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl md:text-3xl font-bold text-foreground",
								children: "Our treatment approach"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground mt-3",
								children: [
									"Every ",
									area.name,
									" patient gets a detailed assessment and a personalised plan combining:"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid sm:grid-cols-2 gap-3",
								children: service.treatments.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-2 p-3 rounded-lg bg-card border border-border/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-foreground",
										children: t
									})]
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-4",
								children: service.sessions
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: .25,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl md:text-3xl font-bold text-foreground",
							children: "Frequently asked questions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-lg bg-card border border-border/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-semibold text-foreground",
										children: [
											"Where exactly is the clinic from ",
											area.name,
											"?"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted-foreground mt-1.5",
										children: [
											"We Care Physiotherapy is located at Door No: 13, 5-18, 4th Lane, Kothapeta, Guntur 522001 — ",
											area.distance,
											" ",
											area.name,
											". Auto, cab and two-wheeler parking are available."
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-lg bg-card border border-border/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-semibold text-foreground",
										children: [
											"Do I need a doctor's referral for ",
											service.shortName,
											" treatment?"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted-foreground mt-1.5",
										children: [
											"No referral is required. You can directly book an assessment by calling ",
											PHONE,
											" or messaging us on WhatsApp — we'll examine you and design a treatment plan the same day."
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-lg bg-card border border-border/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold text-foreground",
										children: "How much does a physiotherapy session cost in Guntur?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted-foreground mt-1.5",
										children: [
											"Session pricing depends on your condition and treatment modalities. Call us for a transparent quote — package rates are available for ",
											service.shortName,
											" rehab courses."
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-lg bg-card border border-border/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-semibold text-foreground",
										children: [
											"Do you offer home visits in ",
											area.name,
											"?"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted-foreground mt-1.5",
										children: [
											"Yes — we provide home-visit physiotherapy for post-surgery, stroke and elderly patients across ",
											area.name,
											" and greater Guntur. Charges vary based on distance and treatment duration."
										]
									})]
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: .3,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12 p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-2xl md:text-3xl font-bold text-foreground",
								children: [
									"Book your ",
									service.shortName,
									" assessment today"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground mt-2 max-w-xl mx-auto",
								children: [
									"Serving patients from ",
									area.name,
									" and all of Guntur. Same-day appointments usually available."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap gap-3 justify-center",
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
										children: "Book online"
									})
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: .35,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12 grid md:grid-cols-2 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-semibold text-foreground mb-3",
							children: ["Other services in ", area.name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1.5 text-sm",
							children: relatedInArea.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								to: r.to,
								className: "text-primary hover:underline",
								children: r.label
							}) }, r.to))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-semibold text-foreground mb-3",
							children: [service.name, " in nearby areas"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1.5 text-sm",
							children: sameServiceOtherAreas.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								to: r.to,
								className: "text-primary hover:underline",
								children: r.label
							}) }, r.to))
						})] })]
					})
				})
			]
		})
	})] });
};
var SplitComponent = LocationServicePage;
//#endregion
export { SplitComponent as component };
