import { createFileRoute } from "@tanstack/react-router";
import BlogPage from "@/pages/BlogPage";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  head: () => routeSeo({
    title: "Blog | Physiotherapy Tips & Recovery Guides",
    description: "Expert physiotherapy articles, pain relief tips, and recovery guides from We Care Physiotherapy Clinic in Guntur.",
    path: "/blog",
  }),
});
