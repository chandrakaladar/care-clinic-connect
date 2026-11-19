import { createFileRoute } from "@tanstack/react-router";
import HomeVisitPage from "@/pages/HomeVisitPage";

export const Route = createFileRoute("/services/home-visit-physiotherapy")({
  component: HomeVisitPage,
});
