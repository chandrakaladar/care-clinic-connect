import { createFileRoute } from "@tanstack/react-router";
import TeamPage from "@/pages/TeamPage";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => routeSeo({
    title: "Our Doctors | Best Physiotherapists in Guntur",
    description: "Meet Dr. R. Chandra Kaladar & Dr. M. Sailaja — Chief Physiotherapists, MPT (Sports), MIAP, CDNT certified.",
    path: "/team",
  }),
});
