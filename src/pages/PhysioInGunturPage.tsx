import { Link } from "react-router-dom";
import {
  ArrowRight, Phone, MessageCircle, MapPin, Clock, CheckCircle2,
  Award, Shield, Users, Activity, Brain, Zap, Heart, Bone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { services as locationServices, areas, buildSlug } from "@/data/locationServices";

const PHONE = "073308 33964";
const PHONE_TEL = "+917330833964";
const WHATSAPP = "https://wa.me/917330833964";

const conditionsTreated = [
  "Back pain, slipped disc & sciatica",
  "Knee pain & osteoarthritis",
  "Neck pain & cervical spondylosis",
  "Stroke & paralysis rehabilitation",
  "Sports injuries — sprains, tears, tendinopathy",
  "Post-surgery recovery (TKR, ACL, spine)",
  "Frozen shoulder & rotator cuff injuries",
  "Bell's palsy & facial paralysis",
  "Chronic pain & fibromyalgia",
  "Geriatric mobility & fall prevention",
];

const treatments = [
  { icon: Zap, name: "Dry Needling", desc: "Trigger-point release for muscle spasm and chronic pain." },
  { icon: Activity, name: "Myofascial Release", desc: "Soft-tissue mobilisation to restore mobility and break adhesions." },
  { icon: Heart, name: "Cupping Therapy", desc: "Improved circulation, reduced inflammation and deep-tissue healing." },
  { icon: Bone, name: "Chiropractic & Osteopathy", desc: "Spinal adjustments and alignment correction following international protocols." },
  { icon: Brain, name: "Neuro-Rehabilitation", desc: "Bobath, PNF and task-oriented motor re-training for stroke and paralysis." },
  { icon: Shield, name: "Pain Management", desc: "Drug-free IFT, TENS, ultrasound and therapeutic exercise programs." },
];

const areasList = ["Kothapeta", "Brodipet", "Arundelpet", "Lakshmipuram", "Gunturvari Thota", "Pattabhipuram", "Sangadigunta", "Nallapadu Road"];

const faqs = [
  { q: "Which is the best physio clinic in Guntur?", a: "We Care Physiotherapy & Sports & Chiropractic Clinic in Kothapeta, Guntur is a trusted physiotherapy centre with 12+ years of experience, 8,500+ patients treated and international rehab protocols. Call 073308 33964 to book an assessment." },
  { q: "How do I find a physiotherapist near me in Guntur?", a: "If you are searching for a physiotherapist near you in Guntur, our clinic is centrally located at Door No 13, 5-18, 4th Lane, Kothapeta — minutes from Brodipet, Arundelpet and Lakshmipuram. Same-day appointments are usually available." },
  { q: "Do I need a doctor's referral for physio in Guntur?", a: "No referral is required. You can directly call or WhatsApp us and our chief physiotherapists will assess your condition and design a personalised treatment plan the same day." },
  { q: "What conditions does a physiotherapist in Guntur treat?", a: "We treat back pain, knee pain, cervical pain, sciatica, sports injuries, post-surgery cases, stroke and paralysis, frozen shoulder, Bell's palsy, arthritis and chronic pain — using evidence-based protocols." },
  { q: "Do you provide physio at home in Guntur?", a: "Yes. We provide home-visit physiotherapy across Guntur for post-surgery, stroke, paralysis, elderly and bed-ridden patients. The therapist brings portable IFT, ultrasound and dry needling equipment." },
  { q: "How much does a physio session cost in Guntur?", a: "Session pricing depends on your condition and the treatment modalities used. Call us for a transparent quote — package rates are available for rehab courses." },
  { q: "What are your clinic timings in Guntur?", a: "We are open daily and close at 11 PM, with flexible timings for working professionals. Call 073308 33964 to confirm your preferred slot." },
];

const PhysioInGunturPage = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "We Care Physiotherapy & Sports & Chiropractic Clinic",
      description: "Physiotherapy clinic in Guntur offering chiropractic, dry needling, myofascial release, cupping therapy, paralysis treatment and post-surgery rehab following international protocols.",
      telephone: PHONE_TEL,
      email: "chandrakaladar@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Door No 13, 5-18, 4th Lane, Gunturvari Thota, Kothapeta",
        addressLocality: "Guntur",
        addressRegion: "Andhra Pradesh",
        postalCode: "522001",
        addressCountry: "IN",
      },
      areaServed: areasList.map((a) => ({ "@type": "Place", name: `${a}, Guntur` })),
      medicalSpecialty: "Physiotherapy",
      openingHours: "Mo-Su 00:00-23:00",
      url: "https://wecarephysiocliniccom.lovable.app/physio-in-guntur",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
        { "@type": "ListItem", position: 3, name: "Physio in Guntur", item: "/physio-in-guntur" },
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Physio in Guntur | Best Physiotherapy Clinic in Guntur"
        description="Looking for physio in Guntur? We Care Physiotherapy offers chiropractic, dry needling, cupping, paralysis & post-surgery rehab. Open daily till 11 PM. Call 7330833964."
        canonical="/physio-in-guntur"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-warm py-16 md:py-24">
        <div className="absolute top-20 left-[8%] w-20 h-20 rounded-full bg-primary/5 animate-float pointer-events-none" />
        <div className="absolute bottom-16 right-[10%] w-16 h-16 rounded-2xl bg-primary/5 animate-float-delayed pointer-events-none -rotate-6" />
        <div className="container max-w-4xl relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              <MapPin className="w-3.5 h-3.5" /> Kothapeta, Guntur
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Physio in Guntur — Expert Physiotherapy & Rehabilitation
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Searching for the best <strong>physio in Guntur</strong>? We Care Physiotherapy & Sports & Chiropractic Clinic in Kothapeta offers advanced chiropractic, dry needling, myofascial release, cupping therapy and paralysis treatment — all following international rehab protocols. 12+ years of trusted care for patients across Guntur.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/20">
                <Link to="/contact">Book Appointment <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                <a href={`tel:${PHONE_TEL}`} aria-label="Call the clinic now"><Phone className="w-4 h-4" /> Call {PHONE}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us"><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why choose / trust */}
      <section className="py-16 md:py-20">
        <div className="container max-w-6xl">
          <ScrollReveal className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">Trusted Physiotherapy in Guntur</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">Why patients choose our Guntur physio clinic</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "12+ Years Experience", desc: "Chief physiotherapists Dr. R. Chandra Kaladar and Dr. M. Sailaja bring 12+ years and 8,500+ patients treated across Guntur." },
              { icon: Shield, title: "International Protocols", desc: "Every treatment follows international rehab protocols — evidence-based care you can trust, right here in Guntur." },
              { icon: Users, title: "Patient-First Approach", desc: "Personalised recovery plans for athletes, elderly, post-surgery and paralysis patients — everyone gets focused one-on-one care." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="text-center group h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions we treat */}
      <section className="bg-surface-warm py-16 md:py-20">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <h2 className="font-display font-bold text-3xl text-foreground mb-3">Conditions our Guntur physiotherapists treat</h2>
            <p className="text-muted-foreground mb-8">From acute injuries to chronic and neurological conditions — comprehensive physiotherapy care under one roof in Kothapeta, Guntur.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {conditionsTreated.map((c) => (
              <ScrollReveal key={c}>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-card border border-border/60 h-full">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{c}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-16 md:py-20">
        <div className="container max-w-6xl">
          <ScrollReveal className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">Our Treatments</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">Advanced physiotherapy treatments in Guntur</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-card rounded-2xl p-7 shadow-sm border border-border/50 h-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-teal-soft flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <t.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{t.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service + area landing page links */}
      <section className="bg-surface-warm py-16 md:py-20">
        <div className="container max-w-6xl">
          <ScrollReveal className="text-center mb-10 max-w-3xl mx-auto">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">Care Near You</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">Physiotherapy across Guntur neighbourhoods</h2>
            <p className="text-muted-foreground mt-3">Dedicated care pages for patients searching from their locality in Guntur.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <ScrollReveal key={area.slug} className="p-5 rounded-2xl bg-card border border-border/60 h-full">
                <h3 className="font-semibold text-foreground text-lg mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {area.name}, Guntur</h3>
                <ul className="space-y-1.5 text-sm">
                  {locationServices.map((svc) => (
                    <li key={svc.slug}>
                      <Link to={`/physiotherapy/${buildSlug(svc, area)}`} className="text-primary hover:underline">
                        {svc.name} in {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-8">
            <p className="text-muted-foreground">Can't travel to the clinic?{" "}
              <Link to="/services/home-visit-physiotherapy" className="text-primary font-medium hover:underline">Book home visit physiotherapy in Guntur</Link>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Location / hours / contact */}
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <h2 className="font-display font-bold text-3xl text-foreground mb-5">Visit our Guntur physio clinic</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" /> Door No 13, 5-18, 4th Lane, near Kamaraju Diagnostic Centre, Gunturvari Thota, Kothapeta, Guntur, Andhra Pradesh 522001</p>
              <p className="flex items-start gap-3"><Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <a href={`tel:${PHONE_TEL}`} className="hover:text-primary">{PHONE}</a> / 070364 67752</p>
              <p className="flex items-start gap-3"><Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" /> Open daily, closes 11 PM — flexible timings for working professionals.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2"><a href={`tel:${PHONE_TEL}`}><Phone className="w-4 h-4" /> Call {PHONE}</a></Button>
              <Button asChild size="lg" variant="outline" className="gap-2"><Link to="/contact">Book Appointment</Link></Button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-border/60 shadow-sm h-full min-h-[280px]">
              <iframe
                title="We Care Physiotherapy Guntur location map"
                src="https://www.google.com/maps?q=Kothapeta,+Guntur,+Andhra+Pradesh+522001&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "280px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-warm py-16 md:py-20">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <h2 className="font-display font-bold text-3xl text-foreground mb-8">Frequently asked questions about physio in Guntur</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((f) => (
              <ScrollReveal key={f.q}>
                <div className="p-5 rounded-2xl bg-card border border-border/60">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(160_90%_16%)_0%,hsl(174_84%_25%)_100%)]" />
        <ScrollReveal className="container text-center max-w-2xl py-20 relative z-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-primary-foreground">Start your recovery at Guntur's trusted physio clinic</h2>
          <p className="text-primary-foreground/70 text-lg mb-8">Don't let pain hold you back. Book your physiotherapy assessment in Kothapeta, Guntur today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 gap-2 shadow-lg">Book Appointment <ArrowRight className="w-4 h-4" /></Button>
            </Link>
            <a href={`tel:${PHONE_TEL}`}>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">Call: {PHONE}</Button>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default PhysioInGunturPage;
