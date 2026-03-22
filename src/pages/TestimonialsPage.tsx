import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const testimonials = [
  {
    name: "Srinivas Rao",
    condition: "Chronic Back Pain",
    text: "After suffering from severe lower back pain for 3 years, I finally found relief at We Care. Dr. Ramesh's treatment plan was thorough and I started feeling better within the first week. Now I can play with my grandchildren again!",
    rating: 5,
  },
  {
    name: "Lakshmi Devi",
    condition: "Post Knee Replacement",
    text: "The post-surgery rehabilitation at We Care was exceptional. The team was patient, encouraging, and highly skilled. I regained full mobility in my knee within 3 months. Highly recommend this clinic to anyone in Guntur.",
    rating: 5,
  },
  {
    name: "Ravi Teja",
    condition: "Sports Injury — ACL Tear",
    text: "As a cricket player, my ACL injury felt like the end of my career. But Dr. Anil and the team at We Care gave me a comprehensive rehab program. I'm back on the field, stronger than before.",
    rating: 5,
  },
  {
    name: "Padmavathi",
    condition: "Stroke Rehabilitation",
    text: "Dr. Priya's neurological rehabilitation program helped my father regain movement after a stroke. Her expertise and compassion made a difficult time much easier for our entire family.",
    rating: 5,
  },
  {
    name: "Venkat Reddy",
    condition: "Frozen Shoulder",
    text: "I couldn't lift my arm for months. The physiotherapy sessions at We Care gradually restored my range of motion. The clinic is clean, modern, and the staff treats you like family.",
    rating: 5,
  },
  {
    name: "Anitha Kumari",
    condition: "Sciatica Pain",
    text: "The shooting pain down my leg made everyday life unbearable. We Care's pain management approach was drug-free and effective. Within 6 weeks I was pain-free. Best physiotherapy clinic in Guntur!",
    rating: 5,
  },
];

const TestimonialsPage = () => (
  <>
    <SEOHead
      title="Patient Testimonials | We Care Physiotherapy Guntur Reviews"
      description="Read patient success stories from We Care Physiotherapy Clinic in Guntur. Real reviews from patients who recovered from back pain, knee surgery, sports injuries, and more."
    />
    <section className="bg-surface-warm py-16 md:py-24">
      <div className="container">
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Testimonials</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Patient Success Stories
          </h1>
          <p className="text-muted-foreground text-lg">
            Real stories from real patients who found relief, recovery, and renewed strength at our Guntur clinic.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.06}>
              <div className="bg-card rounded-2xl p-7 shadow-sm border border-border/50 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.condition}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} className="text-center mt-16">
          <Link to="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 active:scale-[0.97] transition-transform">
              Book Your Appointment <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default TestimonialsPage;
