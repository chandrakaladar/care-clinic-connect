import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const faqs = [
  {
    q: "Is IFT physiotherapy painful?",
    a: "No. IFT (Interferential Therapy) uses low-frequency electrical currents that most patients describe as a gentle tingling or buzzing sensation. It is completely non-invasive and pain-free.",
  },
  {
    q: "How many IFT sessions will I need?",
    a: "Most patients at our Guntur clinic feel noticeable relief within 4–6 sessions. A typical course ranges from 6 to 12 sessions depending on the severity and chronicity of your condition.",
  },
  {
    q: "How long does one IFT session take?",
    a: "A single IFT treatment usually takes 15–20 minutes. When combined with manual therapy, dry needling or exercise rehab, the full appointment at We Care Physiotherapy Guntur runs about 45–60 minutes.",
  },
  {
    q: "Who should not take IFT therapy?",
    a: "IFT is not recommended for patients with pacemakers, active cancer in the treatment area, pregnancy (over the abdomen/low back), open wounds, or deep vein thrombosis. Our physiotherapist screens every patient before starting treatment.",
  },
  {
    q: "Where can I get IFT physiotherapy in Guntur?",
    a: "We Care Physiotherapy & Chiropractic Clinic in Kothapeta, Guntur offers IFT therapy along with a full range of pain management and rehab services. Call 073308 33964 to book.",
  },
];

const BlogPostIFT = () => (
  <>
    <SEOHead
      title="What is IFT Physiotherapy? Benefits & Uses | Guntur"
      description="IFT (Interferential Therapy) explained by physiotherapists in Guntur. Learn how it relieves back, knee & joint pain, session cost, and who it's for."
      canonical="/blog/what-is-ift-physiotherapy"
      ogType="article"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "What is IFT Physiotherapy? Benefits, Uses & How It Works",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://wecarephysioclinic.com/blog/what-is-ift-physiotherapy",
          },
          description:
            "A complete guide to Interferential Therapy (IFT) in physiotherapy — how it works, conditions it treats, benefits, safety, and where to get IFT treatment in Guntur.",
          datePublished: "2026-07-02",
          dateModified: "2026-07-02",
          author: {
            "@type": "Organization",
            name: "We Care Physiotherapy & Chiropractic Clinic",
          },
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
          about: {
            "@type": "MedicalTherapy",
            name: "Interferential Therapy (IFT)",
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
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://wecarephysioclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://wecarephysioclinic.com/blog" },
            { "@type": "ListItem", position: 3, name: "What is IFT Physiotherapy", item: "https://wecarephysioclinic.com/blog/what-is-ift-physiotherapy" },
          ],
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
            <span className="bg-teal-soft text-primary px-2.5 py-1 rounded-full font-medium">
              Electrotherapy
            </span>
            <span>July 2, 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-foreground leading-tight mb-6">
            What is IFT Physiotherapy? Benefits, Uses &amp; How It Works
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            IFT — short for <strong>Interferential Therapy</strong> — is one of the most
            widely used electrotherapy techniques in modern physiotherapy. At{" "}
            <strong>We Care Physiotherapy Clinic in Guntur</strong>, we use IFT every day
            to relieve back pain, knee pain, sciatica, sports injuries and post-surgical
            stiffness — safely, non-invasively, and without medication.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              What is IFT (Interferential Therapy)?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              IFT physiotherapy is a form of electrical stimulation that delivers two
              medium-frequency currents through the skin. Where these currents cross
              inside the body, they produce a low-frequency &ldquo;interferential&rdquo;
              current that stimulates deep tissues, nerves and muscles — without the
              sharp, uncomfortable sensation of traditional TENS.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Because the current is generated <em>inside</em> the tissues rather than at
              the skin surface, IFT can reach deeper structures like the lumbar spine,
              hip joint and knee — making it especially effective for chronic and
              deep-seated pain.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              How Does IFT Work?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your physiotherapist places 4 electrode pads around the painful area. Two
              currents of slightly different frequencies (e.g. 4000 Hz and 4100 Hz) are
              passed through them. Where they intersect, the difference creates a
              therapeutic beat frequency (typically 1–150 Hz), which:
            </p>
            <ul className="space-y-3">
              {[
                "Blocks pain signals travelling to the brain (Gate Control Theory)",
                "Triggers the release of endorphins — your body's natural painkillers",
                "Increases local blood flow to speed up healing",
                "Reduces swelling, inflammation and muscle spasm",
                "Stimulates weakened muscles to prevent wasting after injury",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              Conditions IFT Physiotherapy Treats
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At our Guntur clinic, IFT is one of the most-requested treatments for both
              acute injuries and chronic pain. Common conditions include:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 not-prose">
              {[
                "Lower back pain & sciatica",
                "Cervical (neck) pain",
                "Knee osteoarthritis",
                "Frozen shoulder",
                "Sports injuries & sprains",
                "Post-surgery stiffness",
                "Muscle spasms",
                "Tennis elbow & golfer's elbow",
                "Post-fracture rehabilitation",
                "Menstrual cramps",
              ].map((cond) => (
                <div
                  key={cond}
                  className="bg-card border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground"
                >
                  {cond}
                </div>
              ))}
            </div>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              Benefits of IFT Therapy
            </h2>
            <ul className="space-y-3">
              {[
                "Drug-free, non-invasive pain relief",
                "Comfortable — most patients feel only a gentle tingle",
                "Reaches deep tissues that surface therapies cannot",
                "Faster recovery when combined with manual therapy & exercise",
                "Safe for most age groups, including elderly patients",
                "Backed by decades of clinical evidence",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              What to Expect in an IFT Session at We Care Physiotherapy, Guntur
            </h2>
            <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
              <li>
                <strong className="text-foreground">Assessment.</strong> Our physiotherapist
                evaluates your pain, medical history and any red-flag conditions.
              </li>
              <li>
                <strong className="text-foreground">Electrode placement.</strong> Four
                self-adhesive pads are placed around the target area.
              </li>
              <li>
                <strong className="text-foreground">Treatment.</strong> Current intensity
                is slowly increased to a comfortable tingle for 15–20 minutes.
              </li>
              <li>
                <strong className="text-foreground">Combined therapy.</strong> IFT is
                usually paired with mobilisation, dry needling, cupping or targeted
                exercises for best results.
              </li>
              <li>
                <strong className="text-foreground">Home advice.</strong> You go home with
                simple stretches and posture tips to maintain the relief.
              </li>
            </ol>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              Is IFT Safe? Any Side Effects?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              IFT has an excellent safety record when administered by a qualified
              physiotherapist. It should <strong>not</strong> be used over pacemakers,
              active cancer sites, open wounds, the abdomen during pregnancy, or areas
              with active infection or DVT. Our team screens every patient before the
              first session.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              Why Choose We Care Physiotherapy for IFT in Guntur?
            </h2>
            <ul className="space-y-3">
              {[
                "Modern IFT equipment maintained to international standards",
                "Every session supervised by a qualified physiotherapist — never by an assistant",
                "Combined with advanced chiropractic, dry needling & cupping for faster recovery",
                "Central location in Kothapeta, Guntur — easy access from all parts of the city",
                "Open daily till 11 PM to fit around your work schedule",
                "Transparent pricing with no hidden charges",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground pt-6">
              Frequently Asked Questions
            </h2>
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border py-5">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
              Book IFT Physiotherapy in Guntur Today
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Get expert IFT therapy at We Care Physiotherapy &amp; Chiropractic Clinic,
              Kothapeta, Guntur. Open daily till 11 PM.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="gap-2">
                <a href="tel:+917330833964">
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
                  href="https://wa.me/917330833964?text=Hello%2C%20I%20would%20like%20to%20book%20an%20IFT%20physiotherapy%20session."
                  target="_blank"
                  rel="noopener noreferrer"
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

export default BlogPostIFT;