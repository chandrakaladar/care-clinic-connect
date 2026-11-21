import { createFileRoute } from "@tanstack/react-router";
import ServicesPage from "@/pages/ServicesPage";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => routeSeo({
    title: "Services | Physiotherapy & Chiropractic in Guntur",
    description: "15+ services in Guntur: chiropractic, dry needling, myofascial release, cupping, paralysis treatment, sports rehab. International protocols.",
    path: "/services",
  }),
});
