import { createFileRoute } from "@tanstack/react-router";
import LocationServicePage from "@/pages/LocationServicePage";

export const Route = createFileRoute("/physiotherapy/$slug")({
  component: LocationServicePage,
});
