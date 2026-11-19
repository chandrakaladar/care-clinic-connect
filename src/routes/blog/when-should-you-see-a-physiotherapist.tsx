import { createFileRoute } from "@tanstack/react-router";
import BlogPostWhenToSee from "@/pages/BlogPostWhenToSee";

export const Route = createFileRoute("/blog/when-should-you-see-a-physiotherapist")({
  component: BlogPostWhenToSee,
});
