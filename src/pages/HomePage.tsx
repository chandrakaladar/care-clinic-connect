import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users, Heart, Activity, Brain, Bone, Zap, Hand, Scissors, Flame, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/hero-clinic.jpg";
import { motion } from "framer-motion";

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

const miniTestimonials = [
  { name: "Srinivas R.", text: "After 3 years of back pain, I found relief within a week!", rating: 5 },
  { name: "Lakshmi D.", text: "Exceptional post-knee-replacement rehab. Full mobility in 3 months.", rating: 5 },
  { name: "Ravi T.", text: "ACL injury felt career-ending. Now I'm back on the field, stronger.", rating: 5 },
];

const HomePage = () => (
  <>
    <SEOHead
      title="Best Physiotherapy Clinic in Guntur | We Care"
      description="Advanced chiropractic, dry needling, myofascial release, cupping & paralysis treatment in Guntur. International rehab protocols. Book now."
      canonical="/"
    />

    {/* Hero */}
    <section className="relative overflow-hidden bg-surface-warm">
      {/* Decorative floating shapes */}
      <div className="absolute top-20 left-[8%] w-20 h-20 rounded-full bg-primary/5 animate-float pointer-events-none" />
      <div className="absolute bottom-16 left-[15%] w-12 h-12 rounded-xl bg-primary/8 animate-float-delayed pointer-events-none rotate-12" />
      <div className="absolute top-32 right-[12%] w-16 h-16 rounded-2xl bg-primary/5 animate-float-delayed pointer-events-none -rotate-6" />
      <div className="absolute bottom-24 right-[8%] w-10 h-10 rounded-full bg-primary/6 animate-float pointer-events-none" />

      <div className="container py-16 md:py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <ScrollReveal>
          <motion.p
            className="text-primary font-semibold text-sm tracking-wide uppercase mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Physiotherapy & Rehabilitation Centre in Guntur
          </motion.p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.08] mb-6">
            Your Recovery,<br />
            <span className="text-gradient">Our Commitment</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-4 leading-relaxed">
            Advanced Chiropractic & Osteopathy, Dry Needling, Myofascial Release, Cupping Therapy, and Paralysis Treatment — all following international rehab protocols.
          </p>
          <motion.p
            className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-8"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            ✦ International Rehab Protocols
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30">
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:+917330833964">
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.97] transition-all duration-200">
                Call: 073308 33964
              </Button>
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={heroImg}
                alt="We Care Physiotherapy & Chiropractic Clinic interior in Guntur"
                width={1200}
                height={800}
                fetchPriority="high"
                decoding="async"
                className="w-full h-[360px] md:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-2xl" />
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-5 -left-4 md:-left-8 bg-card rounded-xl px-5 py-3 shadow-xl border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display font-bold text-2xl text-primary tabular-nums">8,500+</p>
              <p className="text-muted-foreground text-xs">Patients Recovered</p>
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 md:-right-8 bg-card rounded-xl px-4 py-2.5 shadow-xl border border-border/50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-1 mb-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
              </div>
              <p className="text-foreground text-xs font-medium">Top Rated Clinic</p>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(174_84%_28%)_0%,hsl(160_90%_14%)_100%)]" />
      <div className="container py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 0.08}>
            <div className="group">
              <AnimatedCounter
                value={s.value}
                className="font-display font-bold text-3xl md:text-5xl tabular-nums block"
              />
              <p className="text-primary-foreground/70 text-sm mt-2">{s.label}</p>
            </div>
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
            <Link to="/services" className="group block bg-card rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-border/50 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-teal-soft flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <svc.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="font-display font-semibold text-base mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{svc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={0.3} className="text-center mt-10">
        <Link to="/services">
          <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground gap-2 active:scale-[0.97] transition-all duration-200">
            View All 15+ Services <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </ScrollReveal>
    </section>

    {/* Why Choose Us */}
    <section className="bg-surface-warm py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-10 right-[5%] w-32 h-32 rounded-full bg-primary/3 animate-float pointer-events-none" />
      <div className="container relative z-10">
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
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonial Preview */}
    <section className="container py-20 md:py-28">
      <ScrollReveal className="text-center mb-14">
        <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">What Patients Say</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">Real Stories, Real Recovery</h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {miniTestimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.08}>
            <div className="bg-card rounded-2xl p-7 shadow-sm border border-border/50 h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
              <span className="absolute top-4 right-5 text-5xl font-serif text-primary/10 leading-none select-none">"</span>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed flex-1 mb-4">"{t.text}"</p>
              <p className="font-display font-semibold text-sm text-foreground">— {t.name}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={0.2} className="text-center mt-10">
        <Link to="/testimonials">
          <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground gap-2 active:scale-[0.97] transition-all duration-200">
            Read All Reviews <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </ScrollReveal>
    </section>

    {/* CTA */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(160_90%_16%)_0%,hsl(174_84%_25%)_100%)]" />
      <div className="absolute top-8 left-[10%] w-24 h-24 rounded-full bg-primary-foreground/5 animate-float pointer-events-none" />
      <div className="absolute bottom-8 right-[10%] w-16 h-16 rounded-full bg-primary-foreground/5 animate-float-delayed pointer-events-none" />
      <ScrollReveal className="container text-center max-w-2xl py-20 relative z-10">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-primary-foreground">Ready to Start Your Recovery?</h2>
        <p className="text-primary-foreground/70 text-lg mb-8">
          Don't let pain hold you back. Visit We Care Physiotherapy in Kothapeta, Guntur — or call us today for a consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-card text-foreground hover:bg-card/90 gap-2 active:scale-[0.97] transition-all duration-200 shadow-lg">
              Book Appointment <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <a href="tel:+917330833964">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 active:scale-[0.97] transition-all duration-200">
              Call: 073308 33964
            </Button>
          </a>
          <a href="tel:+917036467752">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 active:scale-[0.97] transition-all duration-200">
              Call: 070364 67752
            </Button>
          </a>
        </div>
      </ScrollReveal>
    </section>
  </>
);

export default HomePage;
