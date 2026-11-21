import { createFileRoute } from "@tanstack/react-router";
import BlogPostSurgery from "@/pages/BlogPostSurgery";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/blog/post-surgery-rehabilitation-tips")({
  component: BlogPostSurgery,
  head: () => routeSeo({
    title: "Post-Surgery Rehabilitation: Essential Tips for Faster Recovery | Guntur",
    description: "Evidence-based post-surgery rehabilitation tips from Guntur physiotherapy experts. Recover faster after knee replacement, spinal or fracture surgery. We Care Physiotherapy.",
    path: "/blog/post-surgery-rehabilitation-tips",
    type: "article",
  }),
});
