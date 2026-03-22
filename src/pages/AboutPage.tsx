import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const values = [
  "Patient-centered care with personalized treatment plans",
  "Evidence-based physiotherapy and rehabilitation",
  "State-of-the-art equipment and modern techniques",
  "Compassionate team with 12+ years of experience",
  "Affordable and accessible healthcare for all",
  "Comprehensive approach — body, movement, and wellness",
];

const AboutPage = () => (
  <>
    <SEOHead
      title="About Us | We Care Physiotherapy Clinic Guntur"
      description="Learn about We Care Physiotherapy & Sports & Chiropractic Clinic in Guntur. 12+ years of expert physiotherapy care, 8500+ patients treated with a 97% recovery rate."
    />
    <section className="bg-surface-warm py-16 md:py-24">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">About Us</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-6">
            Healing Guntur, One Patient at a Time
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We Care Physiotherapy & Sports & Chiropractic Clinic was founded with a single mission — to provide world-class physiotherapy and rehabilitation services right here in Guntur, Andhra Pradesh. Over the past 12 years, we have helped more than 8,500 patients recover from pain, injuries, and surgeries with evidence-based care and genuine compassion.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">Our Mission</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            To empower every individual in Guntur and surrounding areas to live an active, pain-free life through expert physiotherapy, sports rehabilitation, and chiropractic care. We believe that movement is medicine, and everyone deserves access to quality rehabilitation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">What Sets Us Apart</h2>
          <ul className="space-y-4 mb-12">
            {values.map((v, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/80">{v}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">Visit Our Clinic Today</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Experience the difference that personalized, expert physiotherapy can make. We're located in the heart of Guntur, Andhra Pradesh.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 active:scale-[0.97] transition-transform">
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default AboutPage;
