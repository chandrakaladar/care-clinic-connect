import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, MapPin, Phone, MessageCircle, Clock, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import {
  findLocationService,
  services,
  areas,
  buildSlug,
} from "@/data/locationServices";

const PHONE = "073308 33964";
const PHONE_TEL = "+917330833964";
const WHATSAPP = "https://wa.me/917330833964";

const LocationServicePage = () => {
  const { slug = "" } = useParams();
  const match = findLocationService(slug);

  if (!match) return <Navigate to="/services" replace />;

  const { service, area } = match;
  const clamp = (text: string, max: number) =>
    text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;
  const title = clamp(`${service.name} in ${area.name}, Guntur`, 60);
  const description = clamp(
    `Expert ${service.shortName} physiotherapy in ${area.name}, Guntur. Evidence-based care, flexible timings. Call ${PHONE}.`,
    160,
  );
  const canonical = `/physiotherapy/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: `We Care Physiotherapy & Chiropractic Clinic — ${service.name} in ${area.name}`,
      description,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Door No: 13, 5-18, 4th Lane, Kothapeta",
        addressLocality: "Guntur",
        addressRegion: "Andhra Pradesh",
        postalCode: "522001",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "Place", name: `${area.name}, Guntur` },
        { "@type": "Place", name: "Guntur" },
      ],
      telephone: PHONE_TEL,
      medicalSpecialty: "Physiotherapy",
      availableService: {
        "@type": "MedicalTherapy",
        name: service.name,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: `${service.name} in ${area.name}`,
          item: canonical,
        },
      ],
    },
  ];

  const relatedInArea = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4)
    .map((s) => ({ label: `${s.name} in ${area.name}`, to: `/physiotherapy/${buildSlug(s, area)}` }));

  const sameServiceOtherAreas = areas
    .filter((a) => a.slug !== area.slug)
    .map((a) => ({ label: `${service.name} in ${a.name}`, to: `/physiotherapy/${buildSlug(service, a)}` }));

  return (
    <>
      <SEOHead title={title} description={description} canonical={canonical} jsonLd={jsonLd} />

      <article className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" /> All services
          </Link>

          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              <MapPin className="w-3.5 h-3.5" /> Serving {area.name}, Guntur
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {service.name} in {area.name}, Guntur
            </h1>
            <p className="text-lg text-muted-foreground mt-4">
              Looking for expert {service.shortName} treatment in {area.name}? We Care Physiotherapy is {area.distance} {area.name} — offering personalized, evidence-based physiotherapy trusted by patients across Guntur.
            </p>
          </ScrollReveal>

          {/* Hero CTA */}
          <ScrollReveal delay={0.05}>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <Button asChild size="lg" className="gap-2">
                <a href={`tel:${PHONE_TEL}`}><Phone className="w-4 h-4" /> Call {PHONE}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-[hsl(142_70%_45%)]/30 text-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_45%)] hover:text-white">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4" /> WhatsApp us</a>
              </Button>
            </div>
          </ScrollReveal>

          {/* Local intro */}
          <ScrollReveal delay={0.1}>
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why {area.name} residents choose We Care</h2>
              <p className="text-muted-foreground mt-3">{service.intro}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {area.landmarks.map((l) => (
                  <li key={l} className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" /> {l}</li>
                ))}
                <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" /> Open daily till 11 PM — flexible for working professionals in {area.name}.</li>
              </ul>
            </section>
          </ScrollReveal>

          {/* Conditions treated */}
          <ScrollReveal delay={0.15}>
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Conditions we treat</h2>
              <p className="text-muted-foreground mt-3">Common {service.shortName} problems we manage for {area.name} patients:</p>
              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                {service.conditions.map((c) => (
                  <div key={c} className="flex items-start gap-2 p-3 rounded-lg bg-card border border-border/60">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{c}</span>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Treatment approach */}
          <ScrollReveal delay={0.2}>
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our treatment approach</h2>
              <p className="text-muted-foreground mt-3">Every {area.name} patient gets a detailed assessment and a personalised plan combining:</p>
              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                {service.treatments.map((t) => (
                  <div key={t} className="flex items-start gap-2 p-3 rounded-lg bg-card border border-border/60">
                    <Stethoscope className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">{service.sessions}</p>
            </section>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal delay={0.25}>
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently asked questions</h2>
              <div className="mt-5 space-y-4">
                <div className="p-4 rounded-lg bg-card border border-border/60">
                  <h3 className="font-semibold text-foreground">Where exactly is the clinic from {area.name}?</h3>
                  <p className="text-sm text-muted-foreground mt-1.5">We Care Physiotherapy is located at Door No: 13, 5-18, 4th Lane, Kothapeta, Guntur 522001 — {area.distance} {area.name}. Auto, cab and two-wheeler parking are available.</p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border/60">
                  <h3 className="font-semibold text-foreground">Do I need a doctor's referral for {service.shortName} treatment?</h3>
                  <p className="text-sm text-muted-foreground mt-1.5">No referral is required. You can directly book an assessment by calling {PHONE} or messaging us on WhatsApp — we'll examine you and design a treatment plan the same day.</p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border/60">
                  <h3 className="font-semibold text-foreground">How much does a physiotherapy session cost in Guntur?</h3>
                  <p className="text-sm text-muted-foreground mt-1.5">Session pricing depends on your condition and treatment modalities. Call us for a transparent quote — package rates are available for {service.shortName} rehab courses.</p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border/60">
                  <h3 className="font-semibold text-foreground">Do you offer home visits in {area.name}?</h3>
                  <p className="text-sm text-muted-foreground mt-1.5">Yes — we provide home-visit physiotherapy for post-surgery, stroke and elderly patients across {area.name} and greater Guntur. Charges vary based on distance and treatment duration.</p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.3}>
            <section className="mt-12 p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Book your {service.shortName} assessment today</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Serving patients from {area.name} and all of Guntur. Same-day appointments usually available.</p>
              <div className="mt-5 flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg" className="gap-2"><a href={`tel:${PHONE_TEL}`}><Phone className="w-4 h-4" /> Call {PHONE}</a></Button>
                <Button asChild size="lg" variant="outline" className="gap-2"><Link to="/contact">Book online</Link></Button>
              </div>
            </section>
          </ScrollReveal>

          {/* Internal links for SEO */}
          <ScrollReveal delay={0.35}>
            <section className="mt-12 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Other services in {area.name}</h3>
                <ul className="space-y-1.5 text-sm">
                  {relatedInArea.map((r) => (
                    <li key={r.to}><Link to={r.to} className="text-primary hover:underline">{r.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">{service.name} in nearby areas</h3>
                <ul className="space-y-1.5 text-sm">
                  {sameServiceOtherAreas.map((r) => (
                    <li key={r.to}><Link to={r.to} className="text-primary hover:underline">{r.label}</Link></li>
                  ))}
                </ul>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
};

export default LocationServicePage;