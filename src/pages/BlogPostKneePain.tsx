import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const faqs = [
  {
    q: "Can physiotherapy fix knee pain without surgery?",
    a: "Yes. Most knee conditions — including early osteoarthritis, patellofemoral pain, ligament sprains and meniscus irritation — respond well to physiotherapy. Surgery is needed only for a small percentage of cases after conservative care has failed.",
  },
  {
    q: "How many physiotherapy sessions are needed for knee pain?",
    a: "Mild injuries often improve in 4–6 sessions. Chronic conditions like osteoarthritis usually need 8–12 sessions plus a home exercise programme. Your physiotherapist will give a realistic timeline after the first assessment.",
  },
  {
    q: "Is walking good or bad for knee pain?",
    a: "Moderate walking on level ground is generally good for arthritic knees — it nourishes the joint cartilage. Avoid stairs, slopes and prolonged standing during acute flare-ups.",
  },
  {
    q: "Where can I get knee pain physiotherapy in Guntur?",
    a: "We Care Physiotherapy & Chiropractic Clinic in Kothapeta, Guntur offers complete knee rehabilitation. Call 073308 33964 to book an assessment.",
  },
];

const BlogPostKneePain = () => (
  <>
    <SEOHead
      title="How Physiotherapy Helps Knee Pain | Guntur Clinic Guide"
      description="Knee pain doesn't always need surgery. Learn how physiotherapy — manual therapy, strengthening & IFT — restores knee health. Expert guide from We Care Physiotherapy, Guntur."
      canonical="/blog/how-physiotherapy-helps-knee-pain"
      ogType="article"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "How Physiotherapy Helps Knee Pain",
          description:
            "How physiotherapy techniques like manual therapy, strengthening exercises and electrotherapy restore knee health — from We Care Physiotherapy, Guntur.",
          datePublished: "2026-03-08",
          dateModified: "2026-03-08",
          author: { "@type": "Organization", name: "We Care Physiotherapy & Chiropractic Clinic" },
          publisher: {
            "@type": "MedicalBusiness",
            name: "We Care Physiotherapy & Chiropractic Clinic",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Guntur",
              addressRegion: "Andhra Pradesh",
              addressCountry: "IN",
            },
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ]}
    />

    <article className="bg-surface-warm py-16 md:py-24">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-primary text-sm font-medium mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
            <span className="bg-teal-soft text-primary px-2.5 py-1 rounded-full font-medium">Knee Health</span>
            <span>March 8, 2026</span>
            <span>·</span>
            <span>4 min read</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-foreground leading-tight mb-6">
            How Physiotherapy Helps Knee Pain
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Knee pain affects everyone from young athletes to senior citizens in Guntur. The
            reassuring truth: most knee problems improve dramatically with physiotherapy —
            no injections, no surgery. Here is how treatment works at{" "}
            <strong>We Care Physiotherapy Clinic, Kothapeta</strong>.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              Common Causes of Knee Pain We Treat
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 not-prose">
              {[
                "Osteoarthritis (age-related wear)",
                "Ligament sprains — ACL, MCL",
                "Meniscus tears",
                "Patellofemoral pain (runner's knee)",
                "Tendinitis around the knee",
                "Post-surgery stiffness (TKR, ACL repair)",
              ].map((cause) => (
                <div
                  key={cause}
                  className="bg-card border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground"
                >
                  {cause}
                </div>
              ))}
            </div>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              1. Accurate Assessment First
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Effective treatment starts with finding the exact source of pain. Our
              physiotherapists examine knee movement, muscle strength, walking pattern,
              and the hip and ankle — because knee pain often starts elsewhere. This
              assessment shapes your individual treatment plan.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              2. Manual Therapy to Restore Movement
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Hands-on techniques — joint mobilisation, myofascial release and soft-tissue
              massage — reduce stiffness and pain in the knee capsule and surrounding
              muscles. Many patients notice easier bending after just a few sessions.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              3. Strengthening the Muscles That Protect the Knee
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Weak quadriceps and hip muscles overload the knee joint with every step.
              Your programme will progress through quadriceps setting, straight leg
              raises, bridges, sit-to-stand and step-ups — each adjusted to your pain
              level and goals.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              4. Electrotherapy & Advanced Modalities
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              IFT (Interferential Therapy) and ultrasound reduce pain and swelling so you
              can exercise comfortably. At We Care Physiotherapy we also use dry needling
              and cupping for stubborn muscle tightness around the knee — following
              international rehab protocols.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              5. Education for Long-Term Relief
            </h2>
            <ul className="space-y-3">
              {[
                "Weight guidance — every extra kilo adds roughly 4 kg of load on the knee",
                "Footwear advice and gait correction",
                "How to climb stairs and sit cross-legged safely",
                "Activity pacing so you stay active without flare-ups",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              Frequently Asked Questions
            </h2>
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border py-5">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
              Treat Your Knee Pain in Guntur
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Book a knee assessment at We Care Physiotherapy &amp; Chiropractic Clinic, Kothapeta. Open daily till 11 PM.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="gap-2">
                <a href="tel:+917330833964" aria-label="Call the clinic now">
                  <Phone className="w-4 h-4" /> Call 073308 33964
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-[hsl(142_70%_45%)]/30 text-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_45%)] hover:text-white"
              >
                <a
                  href="https://wa.me/917330833964?text=Hello%2C%20I%20have%20knee%20pain%20and%20would%20like%20to%20book%20an%20assessment."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp us about knee pain treatment"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Book Appointment Online</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </article>
  </>
);

export default BlogPostKneePain;
