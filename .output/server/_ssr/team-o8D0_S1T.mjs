import { r as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Button } from "./button--6q1ISSg.mjs";
import { t as Link$1 } from "./router-compat-CFzcqfAL.mjs";
import { t as SEOHead } from "./SEOHead-Bhz1Qmlz.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { t as ScrollReveal } from "./ScrollReveal-BMk6mIAN.mjs";
import { L as Award, N as BookOpen, _ as Mail, c as Star, j as CalendarCheck, p as Phone, z as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-o8D0_S1T.js
var import_jsx_runtime = require_jsx_runtime();
var team = [{
	name: "Dr. R. Chandra Kaladar",
	role: "CHIEF MUSCULOSKELETAL & SPORTS PHYSIOTHERAPIST",
	img: "/images/doctor-chandra-kaladar.jpeg",
	bio: "Dr. Chandra Kaladar leads We Care Physiotherapy with deep expertise in sports physiotherapy, dry needling, and advanced rehabilitation. Following international rehab protocols, he delivers evidence-based treatment for athletes and patients recovering from complex injuries and surgeries.",
	qualifications: "MPT (Sports), MIAP, CDNT",
	experience: "12+ Years",
	specialties: [
		"CERTIFIED IN REHAB: SPORTS INJURIES",
		"CERTIFIED IN: MUSCULOSKELETAL INJURIES",
		"CERTIFIED IN: LIGAMENT INJURIES",
		"CERTIFIED IN: JOINT REPLACEMENT & PAIN MANAGEMENT",
		"CERTIFIED BIOMECHANICAL CORRECTION OF SPINE",
		"CERTIFIED POST-OPERATIVE KNEE REPLACEMENT REHABILITATION PHYSIO"
	]
}, {
	name: "Dr. M. Sailaja",
	role: "CHIEF MUSCULOSKELETAL & SPORTS PHYSIOTHERAPIST",
	img: "/images/doctor-sailaja.png",
	bio: "Dr. Sailaja specializes in sports rehabilitation, chiropractic care, and neurological recovery. With advanced training in myofascial release and cupping therapy, she brings a compassionate, patient-first approach to every treatment plan.",
	qualifications: "MPT (Sports), MIAP, CDNT",
	experience: "10+ Years",
	specialties: [
		"CERTIFIED IN REHAB: SPORTS INJURIES",
		"CERTIFIED IN: MUSCULOSKELETAL INJURIES",
		"CERTIFIED IN: LIGAMENT INJURIES",
		"CERTIFIED IN: JOINT REPLACEMENT & PAIN MANAGEMENT",
		"CERTIFIED BIOMECHANICAL CORRECTION OF SPINE",
		"CERTIFIED POST-OPERATIVE KNEE REPLACEMENT REHABILITATION PHYSIO"
	]
}];
var TeamPage = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SEOHead, {
	title: "Our Doctors | Best Physiotherapists in Guntur",
	description: "Meet Dr. R. Chandra Kaladar & Dr. M. Sailaja — Chief Physiotherapists, MPT (Sports), MIAP, CDNT certified.",
	canonical: "/team"
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
						children: "Our Doctors"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-4",
						children: "Meet Your Care Team"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-lg",
						children: "Experienced, certified, and genuinely caring — our specialists follow international rehab protocols for your recovery."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto",
				children: team.map((member, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						whileHover: { y: -5 },
						transition: {
							duration: .3,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "bg-card rounded-2xl overflow-hidden shadow-xs border border-border/50 h-full flex flex-col group hover:shadow-xl transition-shadow duration-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: member.img,
									alt: `${member.name} - ${member.role} at We Care Physiotherapy Guntur`,
									className: "w-full h-72 md:h-80 object-cover object-top transition-transform duration-700 group-hover:scale-105",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-4 left-4 right-4 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-full",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-3.5 h-3.5 text-primary" }), member.qualifications]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3.5 h-3.5 fill-current" }), member.experience]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-7 flex flex-col flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display font-bold text-2xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300",
									children: member.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-primary font-semibold text-sm mb-4",
									children: member.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2 mb-4",
									children: member.specialties.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 bg-teal-soft text-primary text-xs font-medium px-2.5 py-1 rounded-full",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-3 h-3" }), s]
									}, s))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm leading-relaxed flex-1 mb-6",
									children: member.bio
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
										to: "/contact",
										className: "flex-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											className: "w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 active:scale-[0.97] transition-all duration-200 shadow-md shadow-secondary/20",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "w-4 h-4" }), " Book Appointment"]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:+917330833964",
										className: "flex-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											className: "w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4" }), " Call Now"]
										})
									})]
								})
							]
						})]
					})
				}, member.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				delay: .15,
				className: "mt-16 max-w-5xl mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-2xl p-6 border border-border/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-bold text-lg text-foreground mb-2",
								children: "Qualifications"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm leading-relaxed",
								children: "Both doctors hold MPT (Sports) — a Master's in Physiotherapy specialising in sports — along with MIAP membership of the Indian Association of Physiotherapists and CDNT certification in dry needling."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-2xl p-6 border border-border/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-bold text-lg text-foreground mb-2",
								children: "Clinical Experience"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm leading-relaxed",
								children: "12+ years of practice and 8,500+ patients treated across Guntur — covering sports injuries, post-surgical rehabilitation, stroke and paralysis recovery, and chronic pain management."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-2xl p-6 border border-border/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-bold text-lg text-foreground mb-2",
								children: "Treatment Approach"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm leading-relaxed",
								children: "Every patient receives a one-on-one assessment and a personalised plan following international rehab protocols — combining manual therapy, dry needling, IFT, and supervised exercise programs."
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				delay: .2,
				className: "mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-5xl mx-auto bg-gradient-to-r from-primary/5 to-primary/[0.02] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-bold text-xl text-foreground mb-2",
						children: "Consult Our Experts"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-4 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+917330833964",
								className: "flex items-center gap-1.5 hover:text-primary transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4" }), " 073308 33964"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+917036467752",
								className: "flex items-center gap-1.5 hover:text-primary transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4" }), " 070364 67752"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:chandrakaladar@gmail.com",
								className: "flex items-center gap-1.5 hover:text-primary transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4" }), " chandrakaladar@gmail.com"]
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						to: "/contact",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 active:scale-[0.97] transition-all duration-200 shadow-md shadow-secondary/20",
							children: ["Book Appointment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
						})
					})]
				})
			})
		]
	})
})] });
var SplitComponent = TeamPage;
//#endregion
export { SplitComponent as component };
