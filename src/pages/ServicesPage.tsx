import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bone, Activity, Brain, Heart, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const services = [
  {
    icon: Bone,
    title: "Orthopedic Physiotherapy",
    desc: "Expert treatment for joint pain, arthritis, frozen shoulder, back pain, neck pain, and all musculoskeletal conditions. Our therapists use manual therapy, therapeutic exercises, and modalities to restore mobility and reduce pain.",
    benefits: ["Joint mobilization & manipulation", "Posture correction", "Arthritis management", "Spine rehabilitation"],
  },
  {
    icon: Activity,
    title: "Sports Injury Rehabilitation",
    desc: "Specialized programs for athletes and active individuals recovering from sprains, strains, ligament tears, and overuse injuries. We help you get back to peak performance safely.",
    benefits: ["ACL & meniscus rehab", "Shoulder & rotator cuff recovery", "Return-to-sport programs", "Performance optimization"],
  },
  {
    icon: Brain,
    title: "Neurological Rehabilitation",
    desc: "Comprehensive care for patients with stroke, paralysis, Parkinson's disease, and other neurological conditions. Our evidence-based neuro-rehab programs improve function and independence.",
    benefits: ["Stroke rehabilitation", "Balance & coordination training", "Gait retraining", "Functional recovery programs"],
  },
  {
    icon: Heart,
    title: "Post-Surgery Rehabilitation",
    desc: "Structured recovery programs designed in coordination with your surgeon. Whether it's knee replacement, hip surgery, or spinal surgery, we guide you through every step of recovery.",
    benefits: ["Joint replacement rehab", "Spinal surgery recovery", "Fracture rehabilitation", "Customized recovery timelines"],
  },
  {
    icon: Zap,
    title: "Pain Management",
    desc: "Advanced pain relief physiotherapy for chronic and acute conditions including sciatica, cervical spondylosis, fibromyalgia, and headaches. Drug-free approaches that address the root cause of pain.",
    benefits: ["Chronic back pain relief", "Sciatica treatment", "Migraine & tension headache relief", "Electrotherapy & dry needling"],
  },
];

const ServicesPage = () => (
  <>
    <SEOHead
      title="Physiotherapy Services in Guntur | Pain Relief, Sports Rehab, Neuro Rehab"
      description="Explore our physiotherapy services in Guntur: orthopedic physiotherapy, sports injury rehab, neurological rehabilitation, post-surgery recovery, and pain management."
    />
    <section className="bg-surface-warm py-16 md:py-24">
      <div className="container">
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Our Services</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Expert Physiotherapy Services in Guntur
          </h1>
          <p className="text-muted-foreground text-lg">
            From pain relief to full recovery — our team of specialists delivers personalized treatment plans using the latest evidence-based techniques.
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.title} delay={i * 0.06}>
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border/50 grid md:grid-cols-[1fr_auto] gap-8 items-start">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-teal-soft flex items-center justify-center mb-4">
                    <svc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-3">{svc.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{svc.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {svc.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-foreground/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="shrink-0 self-center">
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 active:scale-[0.97] transition-transform">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ServicesPage;
