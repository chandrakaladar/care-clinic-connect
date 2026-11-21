import { createFileRoute } from "@tanstack/react-router";
import BlogPostBackPain from "@/pages/BlogPostBackPain";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/blog/best-exercises-for-back-pain")({
  component: BlogPostBackPain,
  head: () => routeSeo({
    title: "Best Exercises for Back Pain Relief | Guntur Physiotherapists",
    description: "Physiotherapist-recommended exercises for lower back pain you can do at home. Strengthen your back, reduce pain naturally. Expert tips from Guntur's We Care Physiotherapy.",
    path: "/blog/best-exercises-for-back-pain",
    type: "article",
  }),
});
