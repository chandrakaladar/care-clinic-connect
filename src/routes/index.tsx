import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages/HomePage";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () =>
    routeSeo({
      title: "Best Physiotherapy Clinic in Guntur | We Care",
      description: "Advanced chiropractic, dry needling, myofascial release, cupping & paralysis treatment in Guntur. International rehab protocols. Book now.",
      path: "/",
    }),
});
