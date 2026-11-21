import { createFileRoute } from "@tanstack/react-router";
import ParalysisTreatmentPage from "@/pages/ParalysisTreatmentPage";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/services/paralysis-treatment-guntur")({
  component: ParalysisTreatmentPage,
  head: () => routeSeo({
    title: "Paralysis Treatment in Guntur | Stroke & Neuro Rehabilitation",
    description: "Paralysis treatment in Guntur: stroke rehab, Bell's palsy, spinal cord injury & GBS recovery with international neuro-rehab protocols. Home visits available. Call 7330833964.",
    path: "/services/paralysis-treatment-guntur",
  }),
});
