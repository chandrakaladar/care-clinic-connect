import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users, Heart, Activity, Brain, Bone, Zap, Hand, Scissors, Flame } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/hero-clinic.jpg";

const services = [
  { icon: Bone, title: "Orthopedic Physiotherapy", desc: "Relief from joint pain, arthritis, and musculoskeletal conditions with expert manual therapy." },
  { icon: Activity, title: "Sports Injury Rehab", desc: "Get back in the game with specialized sports rehabilitation and performance recovery." },
  { icon: Brain, title: "Neurological Rehab & Paralysis Treatment", desc: "Comprehensive rehabilitation for stroke, paralysis, and neurological conditions." },
  { icon: Zap, title: "Chiropractic & Osteopathy", desc: "Advanced spinal adjustments and osteopathic techniques following international protocols." },
  { icon: Scissors, title: "Dry Needling & Acupuncture", desc: "Targeted trigger point therapy and acupuncture for chronic and acute pain relief." },
  { icon: Hand, title: "Myofascial Release & Cupping", desc: "Soft tissue techniques and cupping therapy to improve mobility and reduce pain." },
  { icon: Heart, title: "Post-Surgery Rehab", desc: "Structured recovery programs after joint replacement, ACL surgery, and more." },
  { icon: Flame, title: "Pain Management", desc: "Drug-free techniques for back pain, neck pain, sciatica, knee pain, and more." },
];

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "8,500+", label: "Patients Treated" },
  { value: "97%", label: "Recovery Rate" },
  { value: "15+", label: "Specialized Services" },
];

const HomePage = () => (
  <>
    <SEOHead
      title="Best Physiotherapy Clinic in Guntur | We Care Physiotherapy & Sports Clinic"
      description="We Care Physiotherapy & Sports & Chiropractic Clinic in Guntur — Advanced Chiropractic, Dry Needling, Myofascial Release, Cupping Therapy, Paralysis Treatment. International rehab protocols. Book now."
    />

    {/* Hero */}
    <section className="relative overflow-hidden bg-surface-warm">
      <div className="container py-16 md:py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">Physiotherapy & Rehabilitation Centre in Guntur</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.08] mb-6">
            Your Recovery,<br />Our Commitment
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-4 leading-relaxed">
            Advanced Chiropractic & Osteopathy, Dry Needling, Myofascial Release, Cupping Therapy, and Paralysis Treatment — all following international rehab protocols.
          </p>
          <p className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-8">
            International Rehab Protocols
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 active:scale-[0.97] transition-transform">
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:+917330833964">
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.97] transition-transform">
                Call: 073308 33964
              </Button>
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={heroImg} alt="We Care Physiotherapy & Chiropractic Clinic interior in Guntur" className="w-full h-[360px] md:h-[460px] object-cover" loading="eager" />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-2xl" />
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 0.08}>
            <p className="font-display font-bold text-3xl md:text-4xl tabular-nums">{s.value}</p>
            <p className="text-primary-foreground/70 text-sm mt-1">{s.label}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Services */}
    <section className="container py-20 md:py-28">
      <ScrollReveal className="text-center mb-14">
        <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">What We Offer</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">Comprehensive Physiotherapy & Rehabilitation</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">From pain relief to paralysis treatment — personalized care following international rehab protocols at our Guntur clinic.</p>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((svc, i) => (
          <ScrollReveal key={svc.title} delay={i * 0.06}>
            <Link to="/services" className="group block bg-card rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 h-full border border-border/50">
              <div className="w-12 h-12 rounded-lg bg-teal-soft flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <svc.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display font-semibold text-base mb-2 text-foreground">{svc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={0.3} className="text-center mt-10">
        <Link to="/services">
          <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground gap-2 active:scale-[0.97] transition-transform">
            View All 15+ Services <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </ScrollReveal>
    </section>

    {/* Why Choose Us */}
    <section className="bg-surface-warm py-20 md:py-28">
      <div className="container">
        <ScrollReveal className="text-center mb-14">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">Why Choose Us</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">Trusted by Thousands in Guntur</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Award, title: "International Protocols", desc: "We follow international rehabilitation protocols for every treatment — ensuring world-class care right here in Guntur." },
            { icon: Shield, title: "Evidence-Based Care", desc: "Every treatment plan is grounded in the latest clinical research and best practices in physiotherapy and chiropractic care." },
            { icon: Users, title: "Patient-First Approach", desc: "We listen, understand, and create personalized recovery journeys for every individual — from athletes to elderly patients." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
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

    {/* CTA */}
    <section className="bg-secondary text-secondary-foreground py-20">
      <ScrollReveal className="container text-center max-w-2xl">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Ready to Start Your Recovery?</h2>
        <p className="text-secondary-foreground/70 text-lg mb-8">
          Don't let pain hold you back. Visit We Care Physiotherapy in Kothapeta, Guntur — or call us today for a consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 active:scale-[0.97] transition-transform">
              Book Appointment <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <a href="tel:+917330833964">
            <Button size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 active:scale-[0.97] transition-transform">
              Call: 073308 33964
            </Button>
          </a>
          <a href="tel:+917036467752">
            <Button size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 active:scale-[0.97] transition-transform">
              Call: 070364 67752
            </Button>
          </a>
        </div>
      </ScrollReveal>
    </section>
  </>
);

export default HomePage;
