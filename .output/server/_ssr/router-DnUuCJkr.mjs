import { a as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { n as cn, t as Button } from "./button--6q1ISSg.mjs";
import { C as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useLocation, v as createFileRoute, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useLocation$1, t as Link$1 } from "./router-compat-CFzcqfAL.mjs";
import { r as routeSeo, t as SEOHead } from "./SEOHead-Bhz1Qmlz.mjs";
import { r as findLocationService } from "./locationServices-G7szTpVF.mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { D as ClipboardList, E as Clock, _ as Mail, a as User, d as Send, g as MapPin, h as Menu, m as MessageCircle, n as X, p as Phone } from "../_libs/lucide-react.mjs";
import { a as trackWhatsAppClick, i as trackPageView, n as initGlobalClickTracking, t as initAnalytics } from "./analytics-CNY1eqex.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as j } from "../_libs/next-themes.mjs";
import { n as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DnUuCJkr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	const { theme = "system" } = j();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		theme,
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var TooltipProvider = Provider;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
	...props
}));
TooltipContent.displayName = Content2.displayName;
var navLinks = [
	{
		label: "Home",
		path: "/"
	},
	{
		label: "About",
		path: "/about"
	},
	{
		label: "Services",
		path: "/services"
	},
	{
		label: "Our Team",
		path: "/team"
	},
	{
		label: "Testimonials",
		path: "/testimonials"
	},
	{
		label: "Blog",
		path: "/blog"
	},
	{
		label: "Contact",
		path: "/contact"
	}
];
var Navbar = () => {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const location = useLocation$1();
	(0, import_react.useEffect)(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-lg shadow-xs" : "bg-card/80 backdrop-blur-md"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container flex items-center justify-between h-16 md:h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
					to: "/",
					className: "font-display font-bold text-lg md:text-xl text-primary leading-tight",
					children: [
						"We Care",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs md:text-sm font-medium text-muted-foreground",
							children: "Physiotherapy & Sports Clinic"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-1",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						to: link.path,
						className: `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${location.pathname === link.path ? "text-primary bg-teal-soft" : "text-foreground/70 hover:text-primary hover:bg-teal-soft"}`,
						children: link.label
					}, link.path))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+917330833964",
							className: "hidden md:flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4" }), " 073308 33964"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/contact",
							className: "hidden md:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								className: "bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-md shadow-secondary/20 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-200",
								children: "Book Appointment"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "lg:hidden p-2 text-foreground",
							onClick: () => setOpen(!open),
							"aria-label": "Toggle menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-6 h-6" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `lg:hidden overflow-hidden transition-all duration-300 ease-out ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-card border-t",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "container flex flex-col py-4 gap-1",
					children: [
						navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: link.path,
							onClick: () => setOpen(false),
							className: `px-4 py-3 rounded-md text-base font-medium transition-colors ${location.pathname === link.path ? "text-primary bg-teal-soft" : "text-foreground/70 hover:text-primary"}`,
							children: link.label
						}, link.path)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+917330833964",
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								className: "w-full gap-2 border-primary/30 text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4" }), " 073308 33964"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/contact",
							onClick: () => setOpen(false),
							className: "mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground",
								children: "Book Appointment"
							})
						})
					]
				})
			})
		})]
	});
};
var Footer = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
	className: "bg-secondary text-secondary-foreground",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display font-bold text-xl mb-4",
					children: "We Care Physiotherapy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-secondary-foreground/70 text-sm leading-relaxed mb-3",
					children: "Advanced Chiropractic & Osteopathy, Dry Needling, Myofascial Release, Cupping Therapy, Paralysis Treatment & Rehabilitation Centre in Guntur."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "inline-block bg-secondary-foreground/10 text-secondary-foreground/80 text-xs font-semibold px-3 py-1 rounded-full",
					children: "International Rehab Protocols"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "font-display font-semibold text-lg mb-4",
				children: "Quick Links"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-2 text-sm",
				children: [
					{
						label: "About Us",
						path: "/about"
					},
					{
						label: "Services",
						path: "/services"
					},
					{
						label: "Our Team",
						path: "/team"
					},
					{
						label: "Blog",
						path: "/blog"
					},
					{
						label: "Contact",
						path: "/contact"
					}
				].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
					to: l.path,
					className: "text-secondary-foreground/70 hover:text-secondary-foreground transition-colors",
					children: l.label
				}, l.path))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "font-display font-semibold text-lg mb-4",
				children: "Services"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-2 text-sm text-secondary-foreground/70",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						to: "/services",
						className: "hover:text-secondary-foreground transition-colors",
						children: "Chiropractic & Osteopathy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						to: "/services",
						className: "hover:text-secondary-foreground transition-colors",
						children: "Dry Needling & Acupuncture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						to: "/services",
						className: "hover:text-secondary-foreground transition-colors",
						children: "Myofascial Release"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						to: "/services/paralysis-treatment-guntur",
						className: "hover:text-secondary-foreground transition-colors",
						children: "Paralysis Treatment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						to: "/services",
						className: "hover:text-secondary-foreground transition-colors",
						children: "Sports Injury Rehab"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						to: "/services",
						className: "hover:text-secondary-foreground transition-colors",
						children: "Cupping & Heat Therapy"
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "font-display font-semibold text-lg mb-4",
				children: "Contact Info"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 text-sm text-secondary-foreground/70",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+917330833964",
						className: "flex items-start gap-2 hover:text-secondary-foreground transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4 mt-0.5 shrink-0" }), " 073308 33964"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+917036467752",
						className: "flex items-start gap-2 hover:text-secondary-foreground transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4 mt-0.5 shrink-0" }), " 070364 67752"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "mailto:chandrakaladar@gmail.com",
						className: "flex items-start gap-2 hover:text-secondary-foreground transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4 mt-0.5 shrink-0" }), " chandrakaladar@gmail.com"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 mt-0.5 shrink-0" }), " Door No: 13, 5-18, 4th Lane, Kothapeta, Guntur, AP 522001"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-4 h-4 mt-0.5 shrink-0" }), " Open daily · Closes 11 PM"]
					})
				]
			})] })
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-t border-secondary-foreground/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" We Care Physiotherapy & Sports & Chiropractic Clinic, Guntur. All rights reserved."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Best Physiotherapy Clinic in Guntur, Andhra Pradesh" })]
		})
	})]
});
var WhatsAppPanel = ({ phone = "917330833964" }) => {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [phoneNum, setPhoneNum] = (0, import_react.useState)("");
	const [concern, setConcern] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const sendToWhatsApp = () => {
		const text = `Hello, I would like to book an appointment at We Care Physiotherapy Clinic.\n\n👤 Name: ${name || "(not provided)"}\n📞 Phone: ${phoneNum || "(not provided)"}\n🩺 Concern: ${concern || "(not provided)"}\n\nPlease confirm my appointment. Thank you!`;
		trackWhatsAppClick("whatsapp_panel");
		window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
		setSubmitted(true);
		setTimeout(() => {
			setSubmitted(false);
			setName("");
			setPhoneNum("");
			setConcern("");
		}, 3e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-6 right-6 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20,
				scale: .95
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: 20,
				scale: .95
			},
			transition: {
				duration: .25,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "mb-4 w-80 bg-card rounded-2xl shadow-2xl border border-border/60 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-[hsl(142_70%_45%)] px-5 py-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-10 h-10 rounded-full bg-white/20 flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-5 h-5 text-white" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white font-semibold text-sm",
						children: "Book via WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white/80 text-xs",
						children: "We Care Physiotherapy"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(false),
					"aria-label": "Close WhatsApp booking panel",
					className: "text-white/80 hover:text-white transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-5 space-y-4",
				children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					className: "text-center py-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-14 h-14 rounded-full bg-[hsl(142_70%_45%)]/10 flex items-center justify-center mx-auto mb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-6 h-6 text-[hsl(142_70%_45%)]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-foreground text-sm",
							children: "Opening WhatsApp..."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs mt-1",
							children: "Send the pre-filled message to book your appointment."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "w-3.5 h-3.5" }), " Your Name"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: name,
						onChange: (e) => setName(e.target.value),
						placeholder: "Enter your name",
						className: "w-full h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-[hsl(142_70%_45%)]/30 transition-all"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3.5 h-3.5" }), " Phone Number"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "tel",
						value: phoneNum,
						onChange: (e) => setPhoneNum(e.target.value),
						placeholder: "+91 XXXXX XXXXX",
						className: "w-full h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-[hsl(142_70%_45%)]/30 transition-all"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "w-3.5 h-3.5" }), " Condition / Concern"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: concern,
						onChange: (e) => setConcern(e.target.value),
						placeholder: "Briefly describe your condition...",
						rows: 3,
						className: "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-[hsl(142_70%_45%)]/30 transition-all resize-none"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: sendToWhatsApp,
						className: "w-full h-11 rounded-xl bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_38%)] text-white font-semibold text-sm flex items-center justify-center gap-2 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-[hsl(142_70%_45%)]/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" }), " Send Appointment Request"]
					})
				] })
			})]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
			onClick: () => setOpen(!open),
			className: "relative flex items-center justify-center bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_38%)] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95",
			whileHover: { scale: 1.05 },
			whileTap: { scale: .95 },
			"aria-label": "Chat on WhatsApp",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-[hsl(142_70%_45%)] animate-pulse-ring" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-6 h-6 relative z-10" })]
		})]
	});
};
var NotFound = () => {
	const location = useLocation$1();
	(0, import_react.useEffect)(() => {
		console.error("404 Error: User attempted to access non-existent route:", location.pathname);
	}, [location.pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SEOHead, {
		title: "Page Not Found | We Care Physiotherapy Guntur",
		description: "The page you are looking for does not exist.",
		noindex: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mb-4 text-4xl font-bold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xl text-muted-foreground",
					children: "Oops! Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "text-primary underline hover:text-primary/90",
					children: "Return to Home"
				})
			]
		})
	})] });
};
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var styles_default = "/assets/styles-CpgsQ0Xi.css";
var clinicSchema = {
	"@context": "https://schema.org",
	"@type": "MedicalBusiness",
	name: "We Care Physiotherapy & Sports & Chiropractic Clinic",
	url: "https://wecarephysiocliniccom.lovable.app",
	telephone: "+917330833964",
	description: "Advanced Chiropractic & Osteopathy, Dry Needling, Myofascial Release, Cupping Therapy, Paralysis Treatment and Rehabilitation Centre following International Rehab Protocols.",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Door No: 13, 5-18, 4th Lane, near Kamaraju Diagnostic Centre, Gunturvari Thota, Kothapeta",
		addressLocality: "Guntur",
		addressRegion: "Andhra Pradesh",
		postalCode: "522001",
		addressCountry: "IN"
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 16.3067,
		longitude: 80.4365
	},
	openingHoursSpecification: {
		"@type": "OpeningHoursSpecification",
		dayOfWeek: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday"
		],
		opens: "08:00",
		closes: "23:00"
	},
	priceRange: "$$",
	medicalSpecialty: [
		"Physiotherapy",
		"Sports Medicine",
		"Chiropractic",
		"Osteopathy"
	],
	areaServed: "Guntur, Andhra Pradesh"
};
var Route$17 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "google-site-verification",
				content: "W0yrWiY-1VVtqw88mVtfg0HBzz_POR7JYXqr0QOQ35s"
			},
			{
				name: "keywords",
				content: "physiotherapy clinic in Guntur, best physiotherapist near me, pain relief physiotherapy, sports injury rehab Guntur, chiropractic Guntur"
			},
			{
				property: "og:site_name",
				content: "We Care Physiotherapy Clinic"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(clinicSchema)
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFound,
	errorComponent: RootError
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function PageViewTracker() {
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		trackPageView(location.pathname);
	}, [location.pathname]);
	return null;
}
function RootComponent() {
	const { queryClient } = Route$17.useRouteContext();
	(0, import_react.useEffect)(() => {
		initAnalytics();
		initGlobalClickTracking();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageViewTracker, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppPanel, {})
		] })
	});
}
function RootError({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		console.error(error);
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4 text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Something went wrong. Please try again, or call the clinic on 073308 33964."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-lg bg-primary px-4 py-2 text-primary-foreground",
						onClick: () => {
							router.invalidate();
							reset();
						},
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "rounded-lg border border-border px-4 py-2",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var $$splitComponentImporter$16 = () => import("./routes-gAec4Wl3.mjs");
var Route$16 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$16, "component"),
	head: () => routeSeo({
		title: "Best Physiotherapy Clinic in Guntur | We Care",
		description: "Advanced chiropractic, dry needling, myofascial release, cupping & paralysis treatment in Guntur. International rehab protocols. Book now.",
		path: "/"
	})
});
var $$splitComponentImporter$15 = () => import("./about-DlU-W3UI.mjs");
var Route$15 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$15, "component"),
	head: () => routeSeo({
		title: "About Us | We Care Physiotherapy Guntur",
		description: "12+ years of expert physiotherapy in Guntur. 8,500+ patients treated, 97% recovery rate. International rehab protocols.",
		path: "/about"
	})
});
var $$splitComponentImporter$14 = () => import("./chiropractor-in-guntur-Du-c8Kzn.mjs");
var Route$14 = createFileRoute("/chiropractor-in-guntur")({
	component: lazyRouteComponent($$splitComponentImporter$14, "component"),
	head: () => routeSeo({
		title: "Chiropractor in Guntur | Advanced Chiropractic & Osteopathy",
		description: "Trusted chiropractor in Guntur for back pain, neck pain, slipped disc & spinal alignment. Advanced chiropractic & osteopathy at We Care, Kothapeta. Call 7330833964.",
		path: "/chiropractor-in-guntur"
	})
});
var $$splitComponentImporter$13 = () => import("./contact-E_vVDNhF.mjs");
var Route$13 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$13, "component"),
	head: () => routeSeo({
		title: "Contact Us | Book Appointment in Guntur",
		description: "Book an appointment at We Care Physiotherapy in Kothapeta, Guntur. Call 073308 33964, WhatsApp, or fill our form. Open till 11 PM.",
		path: "/contact"
	})
});
var $$splitComponentImporter$12 = () => import("./physio-in-guntur-CDryOxeo.mjs");
var Route$12 = createFileRoute("/physio-in-guntur")({
	component: lazyRouteComponent($$splitComponentImporter$12, "component"),
	head: () => routeSeo({
		title: "Physio in Guntur | Best Physiotherapy Clinic in Guntur",
		description: "Looking for physio in Guntur? We Care Physiotherapy offers chiropractic, dry needling, cupping, paralysis & post-surgery rehab. Open daily till 11 PM. Call 7330833964.",
		path: "/physio-in-guntur"
	})
});
var $$splitComponentImporter$11 = () => import("./team-o8D0_S1T.mjs");
var Route$11 = createFileRoute("/team")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => routeSeo({
		title: "Our Doctors | Best Physiotherapists in Guntur",
		description: "Meet Dr. R. Chandra Kaladar & Dr. M. Sailaja — Chief Physiotherapists, MPT (Sports), MIAP, CDNT certified.",
		path: "/team"
	})
});
var $$splitComponentImporter$10 = () => import("./testimonials-DwCfVCNU.mjs");
var Route$10 = createFileRoute("/testimonials")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => routeSeo({
		title: "Patient Reviews | We Care Physiotherapy Guntur",
		description: "Real patient success stories from We Care Physiotherapy Guntur — back pain, knee surgery, sports injuries, paralysis recovery.",
		path: "/testimonials"
	})
});
var $$splitComponentImporter$9 = () => import("./blog-a2LBLXt5.mjs");
var Route$9 = createFileRoute("/blog/")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => routeSeo({
		title: "Blog | Physiotherapy Tips & Recovery Guides",
		description: "Expert physiotherapy articles, pain relief tips, and recovery guides from We Care Physiotherapy Clinic in Guntur.",
		path: "/blog"
	})
});
var $$splitComponentImporter$8 = () => import("./best-exercises-for-back-pain-Cx-CI7Of.mjs");
var Route$8 = createFileRoute("/blog/best-exercises-for-back-pain")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => routeSeo({
		title: "Best Exercises for Back Pain Relief | Guntur Physiotherapists",
		description: "Physiotherapist-recommended exercises for lower back pain you can do at home. Strengthen your back, reduce pain naturally. Expert tips from Guntur's We Care Physiotherapy.",
		path: "/blog/best-exercises-for-back-pain",
		type: "article"
	})
});
var $$splitComponentImporter$7 = () => import("./how-physiotherapy-helps-knee-pain-B6dgcZOg.mjs");
var Route$7 = createFileRoute("/blog/how-physiotherapy-helps-knee-pain")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => routeSeo({
		title: "How Physiotherapy Helps Knee Pain | Guntur Clinic Guide",
		description: "Knee pain doesn't always need surgery. Learn how physiotherapy — manual therapy, strengthening & IFT — restores knee health. Expert guide from We Care Physiotherapy, Guntur.",
		path: "/blog/how-physiotherapy-helps-knee-pain",
		type: "article"
	})
});
var $$splitComponentImporter$6 = () => import("./post-surgery-rehabilitation-tips-B1OI0kiv.mjs");
var Route$6 = createFileRoute("/blog/post-surgery-rehabilitation-tips")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => routeSeo({
		title: "Post-Surgery Rehabilitation: Essential Tips for Faster Recovery | Guntur",
		description: "Evidence-based post-surgery rehabilitation tips from Guntur physiotherapy experts. Recover faster after knee replacement, spinal or fracture surgery. We Care Physiotherapy.",
		path: "/blog/post-surgery-rehabilitation-tips",
		type: "article"
	})
});
var $$splitComponentImporter$5 = () => import("./what-is-ift-physiotherapy-B_jn97JG.mjs");
var Route$5 = createFileRoute("/blog/what-is-ift-physiotherapy")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => routeSeo({
		title: "What is IFT Physiotherapy? Benefits & Uses | Guntur",
		description: "IFT (Interferential Therapy) explained by physiotherapists in Guntur. Learn how it relieves back, knee & joint pain, session cost, and who it's for.",
		path: "/blog/what-is-ift-physiotherapy",
		type: "article"
	})
});
var $$splitComponentImporter$4 = () => import("./when-should-you-see-a-physiotherapist-CPexpP-g.mjs");
var Route$4 = createFileRoute("/blog/when-should-you-see-a-physiotherapist")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => routeSeo({
		title: "When Should You See a Physiotherapist? | Signs to Watch | Guntur",
		description: "Don't wait until pain becomes unbearable. Learn the early warning signs that mean it's time to visit a physiotherapist in Guntur. Expert advice from We Care Physiotherapy.",
		path: "/blog/when-should-you-see-a-physiotherapist",
		type: "article"
	})
});
var $$splitComponentImporter$3 = () => import("../_slug-BHm5Uwdx.mjs");
var Route$3 = createFileRoute("/physiotherapy/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: ({ params }) => {
		const match = findLocationService(params.slug);
		if (!match) return {
			...routeSeo({
				title: "Physiotherapy Services in Guntur | We Care Clinic",
				description: "Explore physiotherapy and rehabilitation services at We Care Clinic in Guntur.",
				path: `/physiotherapy/${params.slug}`
			}),
			meta: [...routeSeo({
				title: "Physiotherapy Services in Guntur | We Care Clinic",
				description: "Explore physiotherapy and rehabilitation services at We Care Clinic in Guntur.",
				path: `/physiotherapy/${params.slug}`
			}).meta, {
				name: "robots",
				content: "noindex,follow"
			}]
		};
		const title = `${match.service.name} in ${match.area.name}, Guntur`;
		return routeSeo({
			title,
			description: `Expert ${match.service.shortName} physiotherapy in ${match.area.name}, Guntur. Evidence-based care, flexible timings. Call 073308 33964.`,
			path: `/physiotherapy/${params.slug}`
		});
	}
});
var $$splitComponentImporter$2 = () => import("./services-BqQbU6Q6.mjs");
var Route$2 = createFileRoute("/services/")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => routeSeo({
		title: "Services | Physiotherapy & Chiropractic in Guntur",
		description: "15+ services in Guntur: chiropractic, dry needling, myofascial release, cupping, paralysis treatment, sports rehab. International protocols.",
		path: "/services"
	})
});
var $$splitComponentImporter$1 = () => import("./home-visit-physiotherapy-DnMoKbrX.mjs");
var Route$1 = createFileRoute("/services/home-visit-physiotherapy")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => routeSeo({
		title: "Home Visit Physiotherapy in Guntur | Physiotherapy at Home",
		description: "Physiotherapy at home in Guntur for post-surgery, stroke, paralysis and elderly patients. Certified physiotherapist visits Kothapeta, Brodipet, Arundelpet. Call 7330833964.",
		path: "/services/home-visit-physiotherapy"
	})
});
var $$splitComponentImporter = () => import("./paralysis-treatment-guntur-35IZzJOn.mjs");
var Route = createFileRoute("/services/paralysis-treatment-guntur")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => routeSeo({
		title: "Paralysis Treatment in Guntur | Stroke & Neuro Rehabilitation",
		description: "Paralysis treatment in Guntur: stroke rehab, Bell's palsy, spinal cord injury & GBS recovery with international neuro-rehab protocols. Home visits available. Call 7330833964.",
		path: "/services/paralysis-treatment-guntur"
	})
});
var IndexRoute = Route$16.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$17
});
var AboutRoute = Route$15.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$17
});
var ChiropractorInGunturRoute = Route$14.update({
	id: "/chiropractor-in-guntur",
	path: "/chiropractor-in-guntur",
	getParentRoute: () => Route$17
});
var ContactRoute = Route$13.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$17
});
var PhysioInGunturRoute = Route$12.update({
	id: "/physio-in-guntur",
	path: "/physio-in-guntur",
	getParentRoute: () => Route$17
});
var TeamRoute = Route$11.update({
	id: "/team",
	path: "/team",
	getParentRoute: () => Route$17
});
var TestimonialsRoute = Route$10.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$17
});
var BlogIndexRoute = Route$9.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$17
});
var BlogBestExercisesForBackPainRoute = Route$8.update({
	id: "/blog/best-exercises-for-back-pain",
	path: "/blog/best-exercises-for-back-pain",
	getParentRoute: () => Route$17
});
var BlogHowPhysiotherapyHelpsKneePainRoute = Route$7.update({
	id: "/blog/how-physiotherapy-helps-knee-pain",
	path: "/blog/how-physiotherapy-helps-knee-pain",
	getParentRoute: () => Route$17
});
var BlogPostSurgeryRehabilitationTipsRoute = Route$6.update({
	id: "/blog/post-surgery-rehabilitation-tips",
	path: "/blog/post-surgery-rehabilitation-tips",
	getParentRoute: () => Route$17
});
var BlogWhatIsIftPhysiotherapyRoute = Route$5.update({
	id: "/blog/what-is-ift-physiotherapy",
	path: "/blog/what-is-ift-physiotherapy",
	getParentRoute: () => Route$17
});
var BlogWhenShouldYouSeeAPhysiotherapistRoute = Route$4.update({
	id: "/blog/when-should-you-see-a-physiotherapist",
	path: "/blog/when-should-you-see-a-physiotherapist",
	getParentRoute: () => Route$17
});
var PhysiotherapySlugRoute = Route$3.update({
	id: "/physiotherapy/$slug",
	path: "/physiotherapy/$slug",
	getParentRoute: () => Route$17
});
var ServicesIndexRoute = Route$2.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$17
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ChiropractorInGunturRoute,
	ContactRoute,
	PhysioInGunturRoute,
	TeamRoute,
	TestimonialsRoute,
	BlogBestExercisesForBackPainRoute,
	BlogHowPhysiotherapyHelpsKneePainRoute,
	BlogPostSurgeryRehabilitationTipsRoute,
	BlogWhatIsIftPhysiotherapyRoute,
	BlogWhenShouldYouSeeAPhysiotherapistRoute,
	PhysiotherapySlugRoute,
	ServicesHomeVisitPhysiotherapyRoute: Route$1.update({
		id: "/services/home-visit-physiotherapy",
		path: "/services/home-visit-physiotherapy",
		getParentRoute: () => Route$17
	}),
	ServicesParalysisTreatmentGunturRoute: Route.update({
		id: "/services/paralysis-treatment-guntur",
		path: "/services/paralysis-treatment-guntur",
		getParentRoute: () => Route$17
	}),
	BlogIndexRoute,
	ServicesIndexRoute
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
