import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const faqs = [
  {
    q: "When should I start physiotherapy after surgery?",
    a: "As early as your surgeon allows — often within days of the operation. Early, guided movement prevents stiffness, blood clots and muscle loss. Always follow your surgeon's precautions and your physiotherapist's progression.",
  },
  {
    q: "How long does post-surgery rehabilitation take?",
    a: "It depends on the surgery: knee replacement typically needs 6–12 weeks of physiotherapy, ACL reconstruction 6–9 months, and spinal surgery 3–6 months. Consistent attendance and home exercises shorten recovery.",
  },
  {
    q: "Can I do post-surgery rehabilitation at home in Guntur?",
    a: "Yes. We Care Physiotherapy offers home-visit physiotherapy across Guntur for post-surgery patients who cannot travel. Call 073308 33964 to arrange a home session.",
  },
  {
    q: "Is pain during rehab normal?",
    a: "Mild discomfort during exercises is normal, but sharp pain, increasing swelling, fever or calf pain are warning signs — contact your physiotherapist or surgeon immediately.",
  },
];

const BlogPostSurgery = () => (
  <>
    <SEOHead
      title="Post-Surgery Rehabilitation: Essential Tips for Faster Recovery | Guntur"
      description="Evidence-based post-surgery rehabilitation tips from Guntur physiotherapy experts. Recover faster after knee replacement, spinal or fracture surgery. We Care Physiotherapy."
      canonical="/blog/post-surgery-rehabilitation-tips"
      ogType="article"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Post-Surgery Rehabilitation: Essential Tips for a Faster Recovery",
          description:
            "Evidence-based post-surgery rehabilitation tips from We Care Physiotherapy, Guntur — covering knee replacement, spinal surgery and fracture recovery.",
          datePublished: "2026-02-28",
          dateModified: "2026-02-28",
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
            <span className="bg-teal-soft text-primary px-2.5 py-1 rounded-full font-medium">Recovery</span>
            <span>February 28, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-foreground leading-tight mb-6">
            Post-Surgery Rehabilitation: Essential Tips for a Faster Recovery
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Surgery fixes the structure — rehabilitation restores the function. At{" "}
            <strong>We Care Physiotherapy, Guntur</strong>, we guide patients through
            recovery after knee replacement, spinal surgery, ACL reconstruction and
            fracture fixation. These evidence-based tips will help you heal faster and
            safer.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              1. Start Early, But Follow the Plan
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Modern rehab protocols encourage movement within days of surgery. Early,
              guided motion prevents joint stiffness, blood clots and muscle wasting. But
              each surgery has its own precautions — weight-bearing limits after a knee
              replacement, bending restrictions after spinal surgery. Follow your surgeon's
              and physiotherapist's timeline exactly.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              2. Manage Swelling Proactively
            </h2>
            <ul className="space-y-3">
              {[
                "Ice the area 15–20 minutes at a time, 3–4 times daily in the first two weeks",
                "Elevate the limb above heart level whenever resting",
                "Do ankle pumps and gentle range-of-motion exercises to pump fluid away",
                "Wear compression stockings if prescribed",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              3. Never Skip Your Home Exercises
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Clinic sessions are 2–3 per week, but your recovery happens every day. The
              home exercise programme your physiotherapist prescribes — quadriceps sets,
              heel slides, straight leg raises and walking practice — is what determines
              whether you recover in weeks or months. Treat it like medicine.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              4. Progress Gradually, Not Aggressively
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Doing too much too soon is as harmful as doing too little. Increase walking
              distance, exercise repetitions and weight-bearing step by step, guided by
              your physiotherapist's milestones — not by how you feel on a good day.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              5. Fuel Your Recovery
            </h2>
            <ul className="space-y-3">
              {[
                "Eat protein with every meal — muscles and tissues rebuild from it",
                "Stay hydrated and include calcium- and vitamin D-rich foods",
                "Sleep 7–8 hours; most tissue healing happens during deep sleep",
                "Avoid smoking and alcohol, both of which slow bone and wound healing",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              6. Watch for Red Flags
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Contact your surgeon or physiotherapist immediately if you notice fever,
              wound redness or discharge, calf swelling or pain (possible blood clot),
              sudden increase in pain, or new numbness. Early action prevents serious
              complications.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              Post-Surgery Rehab at We Care Physiotherapy, Guntur
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our post-surgical programmes follow international rehab protocols and include
              manual therapy, IFT for pain control, progressive strengthening, gait
              re-education and — for patients who cannot travel — home visits across Guntur.
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
              Start Your Post-Surgery Rehab in Guntur
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Clinic sessions or home visits — We Care Physiotherapy &amp; Chiropractic Clinic, Kothapeta. Open daily till 11 PM.
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
                  href="https://wa.me/917330833964?text=Hello%2C%20I%20need%20post-surgery%20physiotherapy%20and%20would%20like%20to%20book%20a%20session."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp us about post-surgery rehabilitation"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/services/home-visit-physiotherapy">Home Visit Physiotherapy</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </article>
  </>
);

export default BlogPostSurgery;
