import { useEffect } from "react";
import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Link,
  Outlet,
  Scripts,
  useLocation,
  useRouter,
} from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppPanel from "@/components/WhatsAppPanel";
import NotFound from "@/pages/NotFound";
import { initAnalytics, initGlobalClickTracking, trackPageView } from "@/lib/analytics";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import appCss from "../styles.css?url";

const description =
  "Physiotherapy, sports injury rehabilitation and chiropractic care at We Care Clinic in Kothapeta, Guntur. Call 073308 33964 to book an appointment.";
const title = "We Care Physiotherapy & Chiropractic Clinic | Guntur";

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "We Care Physiotherapy & Sports & Chiropractic Clinic",
  url: "https://wecarephysioclinic.com",
  telephone: "+917330833964",
  description:
    "Advanced Chiropractic & Osteopathy, Dry Needling, Myofascial Release, Cupping Therapy, Paralysis Treatment and Rehabilitation Centre following International Rehab Protocols.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Door No: 13, 5-18, 4th Lane, near Kamaraju Diagnostic Centre, Gunturvari Thota, Kothapeta",
    addressLocality: "Guntur",
    addressRegion: "Andhra Pradesh",
    postalCode: "522001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 16.3067, longitude: 80.4365 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "23:00",
  },
  priceRange: "$$",
  medicalSpecialty: ["Physiotherapy", "Sports Medicine", "Chiropractic", "Osteopathy"],
  areaServed: "Guntur, Andhra Pradesh",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "W0yrWiY-1VVtqw88mVtfg0HBzz_POR7JYXqr0QOQ35s" },
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "physiotherapy clinic in Guntur, best physiotherapist near me, pain relief physiotherapy, sports injury rehab Guntur, chiropractic Guntur",
      },
      { property: "og:site_name", content: "We Care Physiotherapy Clinic" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://wecarephysioclinic.com/" },
      { property: "og:image", content: "https://wecarephysioclinic.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://wecarephysioclinic.com/og-image.jpg" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(clinicSchema) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootError,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function PageViewTracker() {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);
  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  // ported from main.tsx (needs the browser, so it runs after hydration)
  useEffect(() => {
    initAnalytics();
    initGlobalClickTracking();
  }, []);
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Sonner />
          <PageViewTracker />
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
          <WhatsAppPanel />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

function RootError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <div className="max-w-md text-center space-y-4">
        <h1 className="font-display text-2xl font-bold">This page didn't load</h1>
        <p className="text-muted-foreground">Something went wrong. Please try again, or call the clinic on 073308 33964.</p>
        <div className="flex justify-center gap-3">
          <button
            className="rounded-lg bg-primary px-4 py-2 text-primary-foreground"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <Link to="/" className="rounded-lg border border-border px-4 py-2">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
