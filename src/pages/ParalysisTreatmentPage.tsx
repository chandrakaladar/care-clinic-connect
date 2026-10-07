import { Link } from "react-router-dom";
import { CheckCircle2, Phone, MessageCircle, Brain, Activity, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const conditions = [
  { title: "Stroke (Hemiplegia) Rehabilitation", desc: "Structured neuro-rehabilitation after stroke — regaining movement in the affected arm and leg, balance retraining, and step-by-step return to daily activities." },
  { title: "Bell's Palsy & Facial Paralysis", desc: "Facial muscle re-education, electrical stimulation and exercises to restore symmetry and expression after facial nerve palsy." },
  { title: "Spinal Cord Injury Recovery", desc: "Strength, mobility and independence training for paraplegia and quadriplegia, with posture management and pressure-sore prevention." },
  { title: "Guillain-Barré Syndrome (GBS)", desc: "Graded strengthening and endurance programs during recovery from GBS, paced to your nerve regeneration timeline." },
  { title: "Parkinson's Disease & Movement Disorders", desc: "Gait training, balance work and cueing strategies to reduce freezing, falls and rigidity in Parkinson's and similar conditions." },
  { title: "Post-Polio & Nerve Injury Weakness", desc: "Targeted strengthening, orthotic guidance and energy-conservation training for long-standing weakness from polio or peripheral nerve injuries." },
];

const approach = [
  "Detailed neurological assessment — muscle power, tone, balance and gait analysis",
  "Neuro-developmental techniques (NDT/Bobath) and task-oriented training",
  "Functional electrical stimulation (FES) and IFT for muscle re-education",
  "Gait retraining with parallel bars, walkers and assistive devices",
  "Balance, coordination and fall-prevention training",
  "Family caregiver training so exercises continue safely at home",
  "Home-visit option for patients who cannot travel to the clinic",
];

const faqs = [
  { q: "Can paralysis be treated with physiotherapy?", a: "In many cases, yes — especially after stroke, Bell's palsy, GBS and nerve injuries, physiotherapy is the primary treatment that helps the brain and muscles relearn movement. Recovery depends on the cause and how early treatment starts, so beginning rehab as soon as possible gives the best results." },
  { q: "How soon after a stroke should physiotherapy start?", a: "Ideally within days of medical stabilisation, once your doctor clears you. Early mobilisation and neuro-rehabilitation significantly improve long-term recovery of movement and independence." },
  { q: "How long does paralysis recovery take?", a: "It varies by condition and severity. Stroke patients often see the fastest gains in the first 3–6 months, with continued improvement over a year or more. We set realistic milestones and review progress every few weeks." },
  { q: "Do you offer home visits for paralysis patients in Guntur?", a: "Yes. For patients who cannot travel, our physiotherapist provides home-visit sessions across Guntur including Kothapeta, Brodipet, Arundelpet and Lakshmipuram. Call 073308 33964 to arrange a visit." },
  { q: "What should we bring for the first consultation?", a: "Bring discharge summaries, MRI/CT reports, current medication lists and any previous therapy records. This helps us design a safe, personalised rehabilitation plan." },
];

const ParalysisTreatmentPage = () => (
  <>
    <SEOHead
      title="Paralysis Treatment in Guntur | Stroke & Neuro Rehabilitation"
      description="Paralysis treatment in Guntur: stroke rehab, Bell's palsy, spinal cord injury & GBS recovery with international neuro-rehab protocols. Home visits available. Call 7330833964."
      canonical="/services/paralysis-treatment-guntur"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: "Paralysis Treatment in Guntur",
          description: "Specialised paralysis treatment and neurological rehabilitation in Guntur for stroke, Bell's palsy, spinal cord injury, Guillain-Barré syndrome and Parkinson's disease.",
          about: { "@type": "MedicalTherapy", name: "Neurological Rehabilitation" },
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
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Neurological Rehabilitation</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-6">
            Paralysis Treatment in Guntur
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Paralysis is not the end of movement. At We Care Physiotherapy &amp; Sports &amp; Chiropractic Clinic in Kothapeta, Guntur, our neuro-rehabilitation team helps patients recover from stroke, Bell's palsy, spinal cord injury and nerve disorders using international rehab protocols — with home visits available for patients who cannot travel.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="tel:+917330833964" aria-label="Call to book a paralysis rehabilitation consultation">
                <Phone className="w-4 h-4" /> Call 73308 33964
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/917330833964" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us about paralysis treatment">
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
          <h2 className="font-display font-bold text-3xl text-foreground mb-8">Conditions We Treat</h2>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {conditions.map((c) => (
            <ScrollReveal key={c.title}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-11 h-11 rounded-xl bg-teal-soft flex items-center justify-center mb-4">
                  <Brain className="w-5 h-5 text-primary" />
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
            <Activity className="w-6 h-6 text-primary" /> Our Rehabilitation Approach
          </h2>
          <ul className="space-y-3">
            {approach.map((a) => (
              <li key={a} className="flex gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="font-display font-bold text-3xl text-foreground mb-6 flex items-center gap-2">
            <HeartPulse className="w-6 h-6 text-primary" /> Why Early Rehab Matters
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The brain and nervous system recover fastest in the first weeks and months after a stroke or nerve injury. Starting physiotherapy early — even while still in hospital — prevents stiffness, contractures and bed sores, and gives the best chance of regaining independent movement.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Cannot come to the clinic? We offer{" "}
            <Link to="/services/home-visit-physiotherapy" className="text-primary font-medium underline underline-offset-4">home-visit physiotherapy in Guntur</Link>, or explore all our{" "}
            <Link to="/services" className="text-primary font-medium underline underline-offset-4">physiotherapy services</Link>.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <h2 className="font-display font-bold text-3xl text-foreground mb-8">Paralysis Treatment FAQs</h2>
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
            <h2 className="font-display font-bold text-2xl text-foreground mb-3">Start Rehabilitation Today</h2>
            <p className="text-muted-foreground mb-6">Early treatment makes the biggest difference. Book an assessment at our Kothapeta clinic or request a home visit.</p>
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

export default ParalysisTreatmentPage;
