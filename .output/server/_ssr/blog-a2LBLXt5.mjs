import { r as require_jsx_runtime } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Link$1 } from "./router-compat-CFzcqfAL.mjs";
import { n as SITE_URL, t as SEOHead } from "./SEOHead-Bhz1Qmlz.mjs";
import { t as ScrollReveal } from "./ScrollReveal-BMk6mIAN.mjs";
import { z as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-a2LBLXt5.js
var import_jsx_runtime = require_jsx_runtime();
var posts = [
	{
		slug: "what-is-ift-physiotherapy",
		title: "What is IFT Physiotherapy? Benefits, Uses & How It Works",
		excerpt: "IFT (Interferential Therapy) is one of the most effective non-invasive treatments for back pain, knee pain and sports injuries. Learn how our Guntur physiotherapists use it to speed up your recovery.",
		date: "July 2, 2026",
		datePublished: "2026-07-02",
		category: "Electrotherapy",
		readTime: "8 min read"
	},
	{
		slug: "best-exercises-for-back-pain",
		title: "Best Exercises for Back Pain Relief",
		excerpt: "Suffering from lower back pain? Discover the top physiotherapist-recommended exercises you can do at home to strengthen your back and reduce pain naturally.",
		date: "March 15, 2026",
		datePublished: "2026-03-15",
		category: "Pain Relief",
		readTime: "5 min read"
	},
	{
		slug: "how-physiotherapy-helps-knee-pain",
		title: "How Physiotherapy Helps Knee Pain",
		excerpt: "Knee pain doesn't always require surgery. Learn how physiotherapy techniques like manual therapy, strengthening exercises, and electrotherapy can restore your knee health.",
		date: "March 8, 2026",
		datePublished: "2026-03-08",
		category: "Knee Health",
		readTime: "4 min read"
	},
	{
		slug: "post-surgery-rehabilitation-tips",
		title: "Post-Surgery Rehabilitation: Essential Tips for a Faster Recovery",
		excerpt: "Had a knee replacement or spinal surgery? Here are evidence-based rehabilitation tips from our Guntur physiotherapy experts to speed up your recovery safely.",
		date: "February 28, 2026",
		datePublished: "2026-02-28",
		category: "Recovery",
		readTime: "6 min read"
	},
	{
		slug: "when-should-you-see-a-physiotherapist",
		title: "When Should You See a Physiotherapist?",
		excerpt: "Many people delay physiotherapy until pain becomes unbearable. Learn the early warning signs that indicate it's time to visit a physiotherapist in Guntur.",
		date: "February 20, 2026",
		datePublished: "2026-02-20",
		category: "Wellness",
		readTime: "4 min read"
	}
];
var BlogPage = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SEOHead, {
	title: "Blog | Physiotherapy Tips & Recovery Guides",
	description: "Expert physiotherapy articles, pain relief tips, and recovery guides from We Care Physiotherapy Clinic in Guntur.",
	canonical: "/blog",
	jsonLd: {
		"@context": "https://schema.org",
		"@type": "Blog",
		url: `${SITE_URL}/blog`,
		name: "We Care Physiotherapy Blog",
		description: "Expert physiotherapy articles, pain relief tips and recovery guides from We Care Physiotherapy Clinic in Guntur.",
		blogPost: posts.map((p) => ({
			"@type": "BlogPosting",
			headline: p.title,
			description: p.excerpt,
			datePublished: p.datePublished,
			url: `${SITE_URL}/blog/${p.slug}`,
			mainEntityOfPage: `${SITE_URL}/blog/${p.slug}`,
			author: {
				"@type": "Organization",
				name: "We Care Physiotherapy & Chiropractic Clinic"
			}
		}))
	}
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
	className: "bg-surface-warm py-16 md:py-24",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container max-w-4xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollReveal, {
			className: "mb-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary font-semibold text-sm tracking-wide uppercase mb-3",
					children: "Our Blog"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-4",
					children: "Health Tips & Recovery Guides"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-lg",
					children: "Expert insights from our Guntur physiotherapy team to help you stay active, recover faster, and live pain-free."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-6",
			children: posts.map((post, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				delay: i * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-card rounded-2xl p-8 shadow-xs border border-border/50 group hover:shadow-md transition-shadow duration-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-xs text-muted-foreground mb-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-teal-soft text-primary px-2.5 py-1 rounded-full font-medium",
									children: post.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
									dateTime: post.datePublished,
									children: post.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: post.readTime })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display font-bold text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors",
							children: post.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed mb-4",
							children: post.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
							to: `/blog/${post.slug}`,
							"aria-label": `Read the full guide on ${post.title}`,
							className: "inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:gap-3 transition-all duration-200",
							children: [
								"Read the full guide on ",
								post.title,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })
							]
						})
					]
				})
			}, post.slug))
		})]
	})
})] });
var SplitComponent = BlogPage;
//#endregion
export { SplitComponent as component };
