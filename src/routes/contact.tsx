import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/pages/ContactPage";
import { routeSeo } from "@/lib/route-seo";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => routeSeo({
    title: "Contact Us | Book Appointment in Guntur",
    description: "Book an appointment at We Care Physiotherapy in Kothapeta, Guntur. Call 073308 33964, WhatsApp, or fill our form. Open till 11 PM.",
    path: "/contact",
  }),
});
