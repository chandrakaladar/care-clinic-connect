import { createFileRoute } from "@tanstack/react-router";
import PhysioInGunturPage from "@/pages/PhysioInGunturPage";

export const Route = createFileRoute("/physio-in-guntur")({
  component: PhysioInGunturPage,
});
