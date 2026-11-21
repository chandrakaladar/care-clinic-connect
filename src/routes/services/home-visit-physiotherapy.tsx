import { createFileRoute } from "@tanstack/react-router";
import HomeVisitPage from "@/pages/HomeVisitPage";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/services/home-visit-physiotherapy")({
  component: HomeVisitPage,
  head: () => routeSeo({
    title: "Home Visit Physiotherapy in Guntur | Physiotherapy at Home",
    description: "Physiotherapy at home in Guntur for post-surgery, stroke, paralysis and elderly patients. Certified physiotherapist visits Kothapeta, Brodipet, Arundelpet. Call 7330833964.",
    path: "/services/home-visit-physiotherapy",
  }),
});
