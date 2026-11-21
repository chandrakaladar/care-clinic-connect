import { createFileRoute } from "@tanstack/react-router";
import PhysioInGunturPage from "@/pages/PhysioInGunturPage";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/physio-in-guntur")({
  component: PhysioInGunturPage,
  head: () => routeSeo({
    title: "Physio in Guntur | Best Physiotherapy Clinic in Guntur",
    description: "Looking for physio in Guntur? We Care Physiotherapy offers chiropractic, dry needling, cupping, paralysis & post-surgery rehab. Open daily till 11 PM. Call 7330833964.",
    path: "/physio-in-guntur",
  }),
});
