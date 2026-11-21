import { createFileRoute } from "@tanstack/react-router";
import BlogPostWhenToSee from "@/pages/BlogPostWhenToSee";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/blog/when-should-you-see-a-physiotherapist")({
  component: BlogPostWhenToSee,
  head: () => routeSeo({
    title: "When Should You See a Physiotherapist? | Signs to Watch | Guntur",
    description: "Don't wait until pain becomes unbearable. Learn the early warning signs that mean it's time to visit a physiotherapist in Guntur. Expert advice from We Care Physiotherapy.",
    path: "/blog/when-should-you-see-a-physiotherapist",
    type: "article",
  }),
});
