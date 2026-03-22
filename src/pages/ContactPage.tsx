import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import { toast } from "sonner";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! We'll contact you shortly to confirm your appointment.");
  };

  return (
    <>
      <SEOHead
        title="Contact Us | Book Appointment | We Care Physiotherapy Guntur"
        description="Book an appointment at We Care Physiotherapy Clinic in Guntur. Call, WhatsApp, or fill out our form. Located in Guntur, Andhra Pradesh. Open Mon-Sat 8AM-8PM."
      />
      <section className="bg-surface-warm py-16 md:py-24">
        <div className="container">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Contact Us</p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-4">
              Book Your Appointment
            </h1>
            <p className="text-muted-foreground text-lg">
              Ready to start your recovery? Reach out to us by phone, WhatsApp, or fill out the form below.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            {/* Contact Info */}
            <ScrollReveal className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl p-7 shadow-sm border border-border/50 space-y-6">
                <h2 className="font-display font-bold text-xl text-foreground">Get in Touch</h2>
                {[
                  { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
                  { icon: Mail, label: "info@wecarephysio.in", href: "mailto:info@wecarephysio.in" },
                  { icon: MapPin, label: "Guntur, Andhra Pradesh, India" },
                  { icon: Clock, label: "Mon–Sat: 8:00 AM – 8:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-soft flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      {item.href ? (
                        <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                          {item.label}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.label}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-border/50 h-64">
                <iframe
                  title="We Care Physiotherapy Clinic Guntur Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122440.16825988611!2d80.37789!3d16.3067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a754b37e46a73%3A0x648d07a4c0f43e7!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={0.1} className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border/50">
                <h2 className="font-display font-bold text-xl text-foreground mb-6">Request an Appointment</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">We've received your request and will contact you within 24 hours to confirm your appointment.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                        <Input required placeholder="Your name" className="h-12" maxLength={100} />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
                        <Input required type="tel" placeholder="+91 XXXXX XXXXX" className="h-12" maxLength={15} />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                      <Input type="email" placeholder="your@email.com" className="h-12" maxLength={255} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Condition / Concern *</label>
                      <select
                        required
                        className="w-full h-12 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select your concern</option>
                        <option>Back Pain / Neck Pain</option>
                        <option>Sports Injury</option>
                        <option>Post-Surgery Rehabilitation</option>
                        <option>Knee / Joint Pain</option>
                        <option>Neurological Condition</option>
                        <option>Chiropractic Care</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                      <Textarea placeholder="Briefly describe your condition or preferred appointment time..." rows={4} maxLength={1000} />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 active:scale-[0.97] transition-transform">
                      <Send className="w-4 h-4" /> Send Appointment Request
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-20 max-w-3xl">
        <ScrollReveal className="mb-10">
          <h2 className="font-display font-bold text-3xl text-foreground text-center">Frequently Asked Questions</h2>
        </ScrollReveal>
        {[
          { q: "Do I need a doctor's referral for physiotherapy?", a: "No, you can directly visit We Care Physiotherapy Clinic in Guntur without a referral. However, if you're recovering from surgery, bringing your medical reports helps us create a better treatment plan." },
          { q: "How many sessions will I need?", a: "The number of sessions depends on your condition, severity, and goals. Typically, patients see improvement within 4–8 sessions. Our physiotherapist will discuss a personalized treatment plan during your first visit." },
          { q: "Is physiotherapy painful?", a: "Physiotherapy should not be painful. You may feel mild discomfort during certain exercises or manual therapy, but our therapists always work within your comfort level. The goal is to reduce pain, not increase it." },
          { q: "What should I wear to my appointment?", a: "Wear comfortable, loose-fitting clothing that allows easy movement. For lower body issues, shorts or track pants work well. For upper body, a comfortable t-shirt is ideal." },
          { q: "Do you accept health insurance?", a: "Yes, we work with most major health insurance providers. Please contact us with your insurance details and we'll help you understand your coverage for physiotherapy treatment." },
        ].map((faq, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="border-b border-border py-6">
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          </ScrollReveal>
        ))}
      </section>
    </>
  );
};

export default ContactPage;
