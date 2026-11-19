import { createFileRoute } from "@tanstack/react-router";
import BlogPostKneePain from "@/pages/BlogPostKneePain";

export const Route = createFileRoute("/blog/how-physiotherapy-helps-knee-pain")({
  component: BlogPostKneePain,
});
