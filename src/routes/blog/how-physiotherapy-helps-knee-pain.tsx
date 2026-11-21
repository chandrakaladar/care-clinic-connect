import { createFileRoute } from "@tanstack/react-router";
import BlogPostKneePain from "@/pages/BlogPostKneePain";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/blog/how-physiotherapy-helps-knee-pain")({
  component: BlogPostKneePain,
  head: () => routeSeo({
    title: "How Physiotherapy Helps Knee Pain | Guntur Clinic Guide",
    description: "Knee pain doesn't always need surgery. Learn how physiotherapy — manual therapy, strengthening & IFT — restores knee health. Expert guide from We Care Physiotherapy, Guntur.",
    path: "/blog/how-physiotherapy-helps-knee-pain",
    type: "article",
  }),
});
