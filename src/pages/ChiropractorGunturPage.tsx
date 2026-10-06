import { Link } from "react-router-dom";
import {
  ArrowRight, Phone, MessageCircle, MapPin, Clock, CheckCircle2,
  Award, Shield, Users, Bone, Activity, Zap,
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
  "Chronic lower back pain & stiffness",
  "Neck pain & cervical spondylosis",
  "Slipped disc & sciatica",
  "Spinal misalignment & subluxation",
  "Postural problems & forward-head posture",
  "Cervicogenic headaches & migraines",
  "Joint stiffness & restricted mobility",
  "Sports-related spinal strain",
];

const techniques = [
  { icon: Bone, name: "Chiropractic Adjustments", desc: "Precise spinal adjustments to restore alignment and relieve nerve pressure." },
  { icon: Activity, name: "Osteopathic Mobilisation", desc: "Gentle joint and soft-tissue techniques to restore natural movement." },
  { icon: Shield, name: "Biomechanical Spine Correction", desc: "Certified biomechanical assessment and correction of spinal mechanics." },
  { icon: Zap, name: "Myofascial Release", desc: "Deep soft-tissue release to break adhesions and ease chronic tension." },
];

const faqs = [
  { q: "Is there a good chiropractor in Guntur?", a: "Yes — We Care Physiotherapy & Sports & Chiropractic Clinic in Kothapeta, Guntur offers advanced chiropractic and osteopathy care led by Dr. R. Chandra Kaladar (MPT Sports, MIAP, CDNT), certified in biomechanical correction of the spine. Call 073308 33964 to book." },
  { q: "Is chiropractic treatment safe?", a: "When performed by a trained, certified professional, chiropractic adjustment is a safe, drug-free treatment. Our chiropractors follow international protocols and always begin with a detailed assessment before any adjustment." },
  { q: "What conditions does a chiropractor treat?", a: "Chiropractic care is effective for back pain, neck pain, slipped disc, sciatica, spinal misalignment, postural problems, joint stiffness and headaches that originate from the spine." },
  { q: "How many chiropractic sessions will I need?", a: "Many patients feel noticeable relief within 3–5 adjustments. A full corrective course typically runs 8–12 sessions, followed by maintenance visits if needed." },
  { q: "Do you combine chiropractic with physiotherapy?", a: "Yes. Every chiropractic plan at our Guntur clinic is supported with physiotherapy, myofascial release, dry needling and corrective exercises so the results last." },
  { q: "What are your clinic timings?", a: "We are open daily and close at 11 PM, with flexible slots for working professionals. Call 073308 33964 to confirm your preferred time." },
];

const ChiropractorGunturPage = () => {
  const chiroService = locationServices.find((s) => s.slug === "chiropractic-and-osteopathy");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "We Care Physiotherapy & Sports & Chiropractic Clinic",
      description: "Chiropractor in Guntur offering advanced chiropractic adjustments, osteopathy, spinal alignment correction and myofascial release following international rehab protocols.",
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
      areaServed: { "@type": "Place", name: "Guntur, Andhra Pradesh" },
      medicalSpecialty: ["Chiropractic", "Osteopathy", "Physiotherapy"],
      openingHours: "Mo-Su 08:00-23:00",
      url: "https://wecarephysioclinic.com/chiropractor-in-guntur",
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
        { "@type": "ListItem", position: 3, name: "Chiropractor in Guntur", item: "/chiropractor-in-guntur" },
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Chiropractor in Guntur | Advanced Chiropractic & Osteopathy"
        description="Trusted chiropractor in Guntur for back pain, neck pain, slipped disc & spinal alignment. Advanced chiropractic & osteopathy at We Care, Kothapeta. Call 7330833964."
        canonical="/chiropractor-in-guntur"
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
              Chiropractor in Guntur — Advanced Chiropractic & Osteopathy Care
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Looking for a trusted <strong>chiropractor in Guntur</strong>? We Care Physiotherapy & Sports & Chiropractic Clinic in Kothapeta offers advanced chiropractic adjustments, osteopathic mobilisation and biomechanical spine correction — all following international rehab protocols, with 12+ years of trusted care.
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

      {/* Why choose */}
      <section className="py-16 md:py-20">
        <div className="container max-w-6xl">
          <ScrollReveal className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">Trusted Chiropractic Care</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">Why patients choose our Guntur chiropractic clinic</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Certified Specialists", desc: "Dr. R. Chandra Kaladar is certified in biomechanical correction of the spine, sports injuries and joint replacement & pain management." },
              { icon: Shield, title: "International Protocols", desc: "Every adjustment follows international rehab protocols — safe, evidence-based chiropractic care right here in Guntur." },
              { icon: Users, title: "Complete Care Under One Roof", desc: "Chiropractic combined with physiotherapy, dry needling and myofascial release for results that last." },
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

      {/* Conditions */}
      <section className="bg-surface-warm py-16 md:py-20">
        <div className="container max-w-5xl">
          <ScrollReveal>
            <h2 className="font-display font-bold text-3xl text-foreground mb-3">Conditions our Guntur chiropractors treat</h2>
            <p className="text-muted-foreground mb-8">From chronic back pain to postural problems — drug-free chiropractic and osteopathy care in Kothapeta, Guntur.</p>
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

      {/* Techniques */}
      <section className="py-16 md:py-20">
        <div className="container max-w-6xl">
          <ScrollReveal className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">Our Techniques</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">Advanced chiropractic techniques in Guntur</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techniques.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-card rounded-2xl p-7 shadow-sm border border-border/50 h-full hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-teal-soft flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <t.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{t.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Neighbourhood links */}
      {chiroService && (
        <section className="bg-surface-warm py-16 md:py-20">
          <div className="container max-w-6xl">
            <ScrollReveal className="text-center mb-10 max-w-3xl mx-auto">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">Care Near You</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">Chiropractic care across Guntur neighbourhoods</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {areas.map((area) => (
                <ScrollReveal key={area.slug} className="p-5 rounded-2xl bg-card border border-border/60 h-full">
                  <h3 className="font-semibold text-foreground text-lg mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {area.name}, Guntur</h3>
                  <Link to={`/physiotherapy/${buildSlug(chiroService, area)}`} className="text-primary hover:underline text-sm">
                    Chiropractic & Osteopathy in {area.name}
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Location / hours */}
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <h2 className="font-display font-bold text-3xl text-foreground mb-5">Visit our Guntur chiropractic clinic</h2>
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
            <h2 className="font-display font-bold text-3xl text-foreground mb-8">Frequently asked questions about chiropractic in Guntur</h2>
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
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-primary-foreground">Relieve your pain at Guntur's trusted chiropractic clinic</h2>
          <p className="text-primary-foreground/70 text-lg mb-8">Don't let back or neck pain hold you back. Book your chiropractic assessment in Kothapeta, Guntur today.</p>
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

export default ChiropractorGunturPage;
