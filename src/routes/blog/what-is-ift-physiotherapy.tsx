import { createFileRoute } from "@tanstack/react-router";
import BlogPostIFT from "@/pages/BlogPostIFT";

export const Route = createFileRoute("/blog/what-is-ift-physiotherapy")({
  component: BlogPostIFT,
});
