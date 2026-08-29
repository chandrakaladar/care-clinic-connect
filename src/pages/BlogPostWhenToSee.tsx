import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const faqs = [
  {
    q: "Do I need a doctor's referral to see a physiotherapist?",
    a: "No. In India you can consult a physiotherapist directly. At We Care Physiotherapy, Guntur, you can walk in or book an appointment without a referral, and we coordinate with your doctor whenever needed.",
  },
  {
    q: "Can physiotherapy help chronic pain I've had for years?",
    a: "Yes. Even long-standing back, neck or knee pain improves with the right combination of manual therapy, exercise and lifestyle changes. Chronic pain takes longer to resolve, but most patients see meaningful improvement.",
  },
  {
    q: "How do I know if my pain is serious?",
    a: "Seek immediate medical attention for pain after major trauma, unexplained weight loss, fever with back pain, loss of bladder or bowel control, or progressive limb weakness. A physiotherapist will also screen for these red flags.",
  },
  {
    q: "Where can I consult a physiotherapist in Guntur?",
    a: "We Care Physiotherapy & Chiropractic Clinic in Kothapeta, Guntur offers assessments daily till 11 PM. Call 073308 33964 or WhatsApp to book.",
  },
];

const BlogPostWhenToSee = () => (
  <>
    <SEOHead
      title="When Should You See a Physiotherapist? | Signs to Watch | Guntur"
      description="Don't wait until pain becomes unbearable. Learn the early warning signs that mean it's time to visit a physiotherapist in Guntur. Expert advice from We Care Physiotherapy."
      canonical="/blog/when-should-you-see-a-physiotherapist"
      ogType="article"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "When Should You See a Physiotherapist?",
          description:
            "Early warning signs that indicate it is time to visit a physiotherapist — from We Care Physiotherapy, Guntur.",
          datePublished: "2026-02-20",
          dateModified: "2026-02-20",
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
            <span className="bg-teal-soft text-primary px-2.5 py-1 rounded-full font-medium">Wellness</span>
            <span>February 20, 2026</span>
            <span>·</span>
            <span>4 min read</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-foreground leading-tight mb-6">
            When Should You See a Physiotherapist?
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Most people visit a physiotherapist only after pain becomes unbearable — weeks
            or months after it started. By then, a simple problem has often become a complex
            one. Here are the early signs that mean it is time to book an assessment at a{" "}
            <strong>physiotherapy clinic in Guntur</strong>.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              1. Pain That Lasts More Than a Few Days
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Minor strains settle within 3–7 days. If your neck, back or joint pain is
              still there after a week — or keeps returning — the underlying cause needs
              treatment, not just painkillers.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              2. Pain That Spreads or Radiates
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Pain travelling down your arm or leg, or tingling and numbness in your hands
              or feet, often means a nerve is irritated — for example, sciatica or a
              cervical disc problem. These respond very well to physiotherapy when treated
              early.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              3. Stiffness That Limits Your Daily Life
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Struggling to turn your head while driving, bend to tie your shoes, or sit
              cross-legged on the floor? Progressive stiffness — common in frozen shoulder
              and knee arthritis — is a clear signal to start treatment before the joint
              stiffens further.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              4. After an Injury, Surgery or Fracture
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sports injuries, road accidents and operations all need structured
              rehabilitation. Starting physiotherapy early after surgery or fracture
              removal of a cast prevents long-term weakness and stiffness.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              5. Balance Problems or Repeated Falls
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you or an elderly family member feels unsteady, has fallen, or fears
              falling, balance and strength training can dramatically reduce the risk. This
              is especially important for seniors in Guntur living alone.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              6. You Rely on Painkillers to Get Through the Day
            </h2>
            <ul className="space-y-3">
              {[
                "Painkillers mask symptoms; physiotherapy treats the cause",
                "Early physiotherapy is cheaper than months of medication and repeated scans",
                "Most conditions improve faster with active treatment than with rest alone",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              What Happens at Your First Visit?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At We Care Physiotherapy, Kothapeta, your first session includes a detailed
              assessment, a clear explanation of what is causing your pain, and a treatment
              plan with honest timelines. Treatment often begins the same day — and you go
              home with simple exercises to start your recovery immediately.
            </p>

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
              Don't Wait for the Pain to Worsen
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Book an assessment at We Care Physiotherapy &amp; Chiropractic Clinic, Kothapeta, Guntur. Open daily till 11 PM.
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
                  href="https://wa.me/917330833964?text=Hello%2C%20I%20would%20like%20to%20book%20a%20physiotherapy%20assessment."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp us to book a physiotherapy assessment"
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

export default BlogPostWhenToSee;
