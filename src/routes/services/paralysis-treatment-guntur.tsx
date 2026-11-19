import { createFileRoute } from "@tanstack/react-router";
import ParalysisTreatmentPage from "@/pages/ParalysisTreatmentPage";

export const Route = createFileRoute("/services/paralysis-treatment-guntur")({
  component: ParalysisTreatmentPage,
});
