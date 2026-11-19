import { createFileRoute } from "@tanstack/react-router";
import BlogPostBackPain from "@/pages/BlogPostBackPain";

export const Route = createFileRoute("/blog/best-exercises-for-back-pain")({
  component: BlogPostBackPain,
});
