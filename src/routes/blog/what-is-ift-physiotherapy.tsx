import { createFileRoute } from "@tanstack/react-router";
import BlogPostIFT from "@/pages/BlogPostIFT";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/blog/what-is-ift-physiotherapy")({
  component: BlogPostIFT,
  head: () => routeSeo({
    title: "What is IFT Physiotherapy? Benefits & Uses | Guntur",
    description: "IFT (Interferential Therapy) explained by physiotherapists in Guntur. Learn how it relieves back, knee & joint pain, session cost, and who it's for.",
    path: "/blog/what-is-ift-physiotherapy",
    type: "article",
  }),
});
