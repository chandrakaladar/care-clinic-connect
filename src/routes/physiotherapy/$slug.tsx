import { createFileRoute } from "@tanstack/react-router";
import LocationServicePage from "@/pages/LocationServicePage";
import { findLocationService } from "@/data/locationServices";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/physiotherapy/$slug")({
  component: LocationServicePage,
  head: ({ params }) => {
    const match = findLocationService(params.slug);
    if (!match) {
      return {
        ...routeSeo({
          title: "Physiotherapy Services in Guntur | We Care Clinic",
          description: "Explore physiotherapy and rehabilitation services at We Care Clinic in Guntur.",
          path: `/physiotherapy/${params.slug}`,
        }),
        meta: [
          ...routeSeo({
            title: "Physiotherapy Services in Guntur | We Care Clinic",
            description: "Explore physiotherapy and rehabilitation services at We Care Clinic in Guntur.",
            path: `/physiotherapy/${params.slug}`,
          }).meta,
          { name: "robots", content: "noindex,follow" },
        ],
      };
    }
    const title = `${match.service.name} in ${match.area.name}, Guntur`;
    return routeSeo({
      title,
      description: `Expert ${match.service.shortName} physiotherapy in ${match.area.name}, Guntur. Evidence-based care, flexible timings. Call 073308 33964.`,
      path: `/physiotherapy/${params.slug}`,
    });
  },
});
