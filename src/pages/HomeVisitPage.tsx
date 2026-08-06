import { Link } from "react-router-dom";
import { CheckCircle2, Phone, MessageCircle, Home, Activity, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const conditions = [
  { title: "Post-Surgery Recovery at Home", desc: "Knee & hip replacement, ACL reconstruction, spine surgery and fracture fixation — guided mobility, swelling control and strengthening from day one of discharge." },
  { title: "Stroke & Paralysis Rehabilitation", desc: "Hemiplegia, facial palsy and Bell's palsy care with neuro-developmental techniques, gait re-education and family caregiver training." },
  { title: "Elderly & Geriatric Care", desc: "Balance and fall-prevention training, arthritis pain relief and safe walking practice for seniors who cannot travel to the clinic." },
  { title: "Back, Neck & Joint Pain", desc: "Manual therapy, IFT, myofascial release and a home exercise plan for bed-ridden or mobility-limited patients." },
  { title: "Bed-Ridden & Long-Term Care", desc: "Chest physiotherapy, bed-sore prevention positioning, passive range-of-motion and contracture management." },
  { title: "Sports Injury Rehab", desc: "Ligament and muscle injury protocols continued at home between clinic sessions, following international rehab protocols." },
];

const equipment = [
  "Portable IFT / TENS unit for pain relief",
  "Ultrasound therapy device",
  "Therapeutic exercise bands and weights",
  "Dry needling and cupping kit (sterile, single-use needles)",
  "Mobility aids assessment — walker, cane, crutch fitting",
  "Pulse oximeter and BP monitor for vitals during sessions",
];

const areas = ["Kothapeta", "Brodipet", "Arundelpet", "Lakshmipuram", "Gunturvari Thota", "Pattabhipuram", "Sangadigunta", "Nallapadu Road"];

const faqs = [
  { q: "Do you provide physiotherapy at home in Guntur?", a: "Yes. We Care Physiotherapy & Chiropractic Clinic provides home-visit physiotherapy across Guntur city, including Kothapeta, Brodipet, Arundelpet and Lakshmipuram. Call 073308 33964 to check availability for your area." },
  { q: "Which patients need a home visit physiotherapist?", a: "Home visits suit post-surgery patients who cannot travel, stroke and paralysis patients, bed-ridden patients, and elderly people with a high fall risk." },
  { q: "What equipment does the physiotherapist bring?", a: "Our therapist carries a portable IFT/TENS unit, ultrasound therapy device, exercise bands, and sterile dry needling supplies, so home sessions match clinic quality." },
  { q: "How long is a home physiotherapy session?", a: "A typical home session runs 45–60 minutes, including assessment, hands-on treatment, and training a family member to continue exercises safely." },
  { q: "How do I book home physiotherapy in Guntur?", a: "Call or WhatsApp 7330833964, or submit the appointment form on our contact page. We confirm the slot and the therapist visits your address." },
];

const HomeVisitPage = () => (
  <>
    <SEOHead
      title="Home Visit Physiotherapy in Guntur | Physiotherapy at Home"
      description="Physiotherapy at home in Guntur for post-surgery, stroke, paralysis and elderly patients. Certified physiotherapist visits Kothapeta, Brodipet, Arundelpet. Call 7330833964."
      canonical="/services/home-visit-physiotherapy"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: "Home Visit Physiotherapy in Guntur",
          description: "Home-visit physiotherapy service in Guntur for post-surgery, stroke, paralysis, elderly and bed-ridden patients.",
          about: { "@type": "MedicalTherapy", name: "Home Visit Physiotherapy" },
          provider: {
            "@type": "MedicalBusiness",
            name: "We Care Physiotherapy & Sports & Chiropractic Clinic",
            telephone: "+91-7330833964",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Door no 13, 5-18, 4th Lane, Gunturvari Thota, Kothapeta",
              addressLocality: "Guntur",
              addressRegion: "Andhra Pradesh",
              postalCode: "522001",
              addressCountry: "IN",
            },
            areaServed: areas.map((a) => ({ "@type": "Place", name: `${a}, Guntur` })),
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        },
      ]}
    />

    <section className="bg-surface-warm py-16 md:py-24">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Home Visit Service</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-6">
            Home Visit Physiotherapy in Guntur
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            When travelling to a clinic is painful or unsafe, our physiotherapist comes to you. We Care Physiotherapy &amp; Sports &amp; Chiropractic Clinic provides home physiotherapy across Guntur for post-surgery recovery, stroke and paralysis rehabilitation, elderly care and bed-ridden patients — with the same international rehab protocols we follow at our Kothapeta clinic.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="tel:+917330833964" aria-label="Call to book a home physiotherapy visit">
                <Phone className="w-4 h-4" /> Call 73308 33964
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/917330833964" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us for a home visit">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <h2 className="font-display font-bold text-3xl text-foreground mb-8">Conditions We Treat at Home</h2>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {conditions.map((c) => (
            <ScrollReveal key={c.title}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-11 h-11 rounded-xl bg-teal-soft flex items-center justify-center mb-4">
                  <HeartPulse className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-surface-warm py-16 md:py-20">
      <div className="container max-w-5xl grid gap-12 md:grid-cols-2">
        <ScrollReveal>
          <h2 className="font-display font-bold text-3xl text-foreground mb-6 flex items-center gap-2">
            <Activity className="w-6 h-6 text-primary" /> Equipment We Bring
          </h2>
          <ul className="space-y-3">
            {equipment.map((e) => (
              <li key={e} className="flex gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="font-display font-bold text-3xl text-foreground mb-6 flex items-center gap-2">
            <Home className="w-6 h-6 text-primary" /> Areas We Visit in Guntur
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {areas.map((a) => (
              <span key={a} className="rounded-full bg-primary/10 text-primary text-sm font-medium px-3 py-1.5">{a}</span>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Outside these areas? Call us — we cover most of Guntur city and nearby localities. You can also visit our{" "}
            <Link to="/contact" className="text-primary font-medium underline underline-offset-4">Kothapeta clinic</Link> or browse all{" "}
            <Link to="/services" className="text-primary font-medium underline underline-offset-4">physiotherapy services</Link>.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <h2 className="font-display font-bold text-3xl text-foreground mb-8">Home Physiotherapy FAQs</h2>
        </ScrollReveal>
        <div className="space-y-6">
          {faqs.map((f) => (
            <ScrollReveal key={f.q}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mt-10 rounded-2xl bg-primary/10 p-8 text-center">
            <h2 className="font-display font-bold text-2xl text-foreground mb-3">Book a Home Visit Today</h2>
            <p className="text-muted-foreground mb-6">Same-day slots are often available across Guntur.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg"><Link to="/contact">Book Appointment</Link></Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+917330833964" aria-label="Call the clinic now">Call Now</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default HomeVisitPage;
