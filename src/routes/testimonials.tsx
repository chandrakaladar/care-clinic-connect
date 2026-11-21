import { createFileRoute } from "@tanstack/react-router";
import TestimonialsPage from "@/pages/TestimonialsPage";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => routeSeo({
    title: "Patient Reviews | We Care Physiotherapy Guntur",
    description: "Real patient success stories from We Care Physiotherapy Guntur — back pain, knee surgery, sports injuries, paralysis recovery.",
    path: "/testimonials",
  }),
});
