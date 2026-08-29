import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const faqs = [
  {
    q: "Can exercises cure back pain without medicine?",
    a: "For most mechanical back pain, targeted exercises combined with posture correction relieve pain as effectively as medication — and prevent recurrence better. Severe pain should always be assessed by a physiotherapist first.",
  },
  {
    q: "How often should I do back pain exercises?",
    a: "Start with once daily, 5–10 repetitions of each exercise. Consistency matters more than intensity. Stop any movement that causes sharp or radiating pain and consult a physiotherapist.",
  },
  {
    q: "Which exercises should I avoid with back pain?",
    a: "Avoid heavy lifting with a rounded back, repeated toe-touch stretches, and high-impact twisting movements during an acute episode. Sit-ups and double leg raises can overload the lumbar spine.",
  },
  {
    q: "When should I see a physiotherapist for back pain in Guntur?",
    a: "See a physiotherapist if pain lasts more than 1–2 weeks, spreads down the leg, causes numbness or weakness, or follows an injury. Call We Care Physiotherapy, Kothapeta at 073308 33964 for an assessment.",
  },
];

const BlogPostBackPain = () => (
  <>
    <SEOHead
      title="Best Exercises for Back Pain Relief | Guntur Physiotherapists"
      description="Physiotherapist-recommended exercises for lower back pain you can do at home. Strengthen your back, reduce pain naturally. Expert tips from Guntur's We Care Physiotherapy."
      canonical="/blog/best-exercises-for-back-pain"
      ogType="article"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Best Exercises for Back Pain Relief",
          description:
            "Top physiotherapist-recommended home exercises to strengthen the back and reduce lower back pain naturally, from We Care Physiotherapy, Guntur.",
          datePublished: "2026-03-15",
          dateModified: "2026-03-15",
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
            <span className="bg-teal-soft text-primary px-2.5 py-1 rounded-full font-medium">Pain Relief</span>
            <span>March 15, 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-foreground leading-tight mb-6">
            Best Exercises for Back Pain Relief
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Lower back pain is one of the most common complaints we treat at{" "}
            <strong>We Care Physiotherapy in Guntur</strong>. The good news: most back pain
            responds well to movement, not rest. These physiotherapist-approved exercises
            strengthen your core, improve flexibility and ease pain — all from home.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              Before You Start
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Move slowly and breathe normally. Mild muscle tension is fine, but sharp,
              shooting or radiating pain is a signal to stop. If your back pain has lasted
              more than two weeks or spreads down your leg, get assessed by a physiotherapist
              before starting any exercise programme.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              1. Knee-to-Chest Stretch
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lie on your back with knees bent. Gently pull one knee towards your chest,
              hold for 20 seconds, and switch sides. Repeat 3 times per leg. This stretch
              releases tightness in the lower back and glutes — ideal after long hours of
              sitting.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              2. Pelvic Tilts
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lie on your back, knees bent, feet flat. Tighten your stomach muscles and
              gently flatten your lower back into the floor. Hold 5 seconds, relax. Do
              10–15 repetitions. Pelvic tilts activate the deep core muscles that support
              your spine throughout the day.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              3. Cat-Cow Stretch
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              On hands and knees, alternate between arching your back upwards (cat) and
              letting it sink while lifting your head (cow). Move slowly with your breath
              for 10–15 cycles. This restores gentle mobility through the whole spine.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              4. Bird-Dog
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From hands and knees, extend your right arm forward and left leg backward
              while keeping your spine neutral. Hold 5 seconds, switch sides. Aim for 8–10
              repetitions per side. Bird-dog builds the stabilising strength that protects
              your back during daily activities.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              5. Partial Curl-Ups
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lie on your back with knees bent. Cross your arms over your chest and curl
              only your head and shoulders off the floor. Hold 3 seconds, lower slowly. Do
              10 repetitions. Unlike full sit-ups, partial curl-ups strengthen the
              abdominal muscles without straining the lower back.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              Habits That Matter as Much as Exercises
            </h2>
            <ul className="space-y-3">
              {[
                "Stand up and walk for 2 minutes every 30–45 minutes of sitting",
                "Keep your screen at eye level and feet flat on the floor",
                "Sleep on a firm mattress; side sleepers should use a pillow between the knees",
                "Lift with your legs, keeping the load close to your body",
                "Walk 30 minutes daily — walking is one of the best treatments for back pain",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              When Home Exercise Is Not Enough
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If pain persists beyond 1–2 weeks despite exercise, or you notice numbness,
              tingling, or weakness in a leg, you need a professional assessment. At We Care
              Physiotherapy, Kothapeta, we combine manual therapy, IFT, dry needling and
              individualised exercise programmes to treat the root cause — not just the
              symptom.
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
              Get Expert Back Pain Treatment in Guntur
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Visit We Care Physiotherapy &amp; Chiropractic Clinic, Kothapeta, Guntur. Open daily till 11 PM.
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
                  href="https://wa.me/917330833964?text=Hello%2C%20I%20have%20back%20pain%20and%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp us about back pain treatment"
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

export default BlogPostBackPain;
