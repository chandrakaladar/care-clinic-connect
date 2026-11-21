import { createFileRoute } from "@tanstack/react-router";
import ChiropractorGunturPage from "@/pages/ChiropractorGunturPage";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/chiropractor-in-guntur")({
  component: ChiropractorGunturPage,
  head: () => routeSeo({
    title: "Chiropractor in Guntur | Advanced Chiropractic & Osteopathy",
    description: "Trusted chiropractor in Guntur for back pain, neck pain, slipped disc & spinal alignment. Advanced chiropractic & osteopathy at We Care, Kothapeta. Call 7330833964.",
    path: "/chiropractor-in-guntur",
  }),
});
