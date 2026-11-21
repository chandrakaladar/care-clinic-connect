import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/pages/AboutPage";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => routeSeo({
    title: "About Us | We Care Physiotherapy Guntur",
    description: "12+ years of expert physiotherapy in Guntur. 8,500+ patients treated, 97% recovery rate. International rehab protocols.",
    path: "/about",
  }),
});
