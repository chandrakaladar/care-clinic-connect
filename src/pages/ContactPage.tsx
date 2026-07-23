import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle, CalendarDays } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const faqs = [
  { q: "Do I need a doctor's referral for physiotherapy?", a: "No, you can directly visit We Care Physiotherapy Clinic in Guntur without a referral. However, if you're recovering from surgery, bringing your medical reports helps us create a better treatment plan." },
  { q: "How many sessions will I need?", a: "The number of sessions depends on your condition, severity, and goals. Typically, patients see improvement within 4–8 sessions. Our physiotherapist will discuss a personalized treatment plan during your first visit." },
  { q: "What services do you specialize in?", a: "We specialize in Advanced Chiropractic & Osteopathy, Dry Needling, Myofascial Release, Cupping Therapy, Paralysis Treatment, Sports Rehab, and many more — all following international rehabilitation protocols." },
  { q: "What are your clinic hours?", a: "We are open daily and close at 11 PM. Walk-ins are welcome, but we recommend booking an appointment to avoid waiting. Call us at 073308 33964." },
  { q: "Do you accept health insurance?", a: "Yes, we work with most major health insurance providers. Please contact us with your insurance details and we'll help you understand your coverage for physiotherapy treatment." },
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    concern: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("appointment_requests").insert({
        patient_name: formData.name,
        phone: formData.phone,
        email: formData.email || null,
        concern: formData.concern,
        message: formData.message || null,
        source: "website_contact_form",
        email_sent: false,
      });

      if (error) {
        console.error("Supabase insert error:", error);
        toast.error("Failed to submit. Please try again or call us directly.");
        setLoading(false);
        return;
      }

      setSubmitted(true);
      toast.success("Appointment request received! We'll contact you shortly to confirm.");
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Something went wrong. Please call us at 073308 33964.");
    } finally {
      setLoading(false);
    }
  };

  const bookViaWhatsApp = () => {
    const text = `Hello, I would like to book an appointment at We Care Physiotherapy Clinic.%0A%0A👤 Name: ${formData.name || "(not provided)"}%0A📞 Phone: ${formData.phone || "(not provided)"}%0A📧 Email: ${formData.email || "(not provided)"}%0A🩺 Concern: ${formData.concern || "(not provided)"}%0A📝 Message: ${formData.message || "(not provided)"}%0A%0APlease confirm my appointment. Thank you!`;
    window.open(`https://wa.me/917330833964?text=${text}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="Contact Us | Book Appointment in Guntur"
        description="Book an appointment at We Care Physiotherapy in Kothapeta, Guntur. Call 073308 33964, WhatsApp, or fill our form. Open till 11 PM."
        canonical="/contact"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Physiotherapy",
            name: "We Care Physiotherapy & Sports & Chiropractic Clinic",
            image: "https://carewell-clinic-web.lovable.app/images/clinic-hero.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Door No: 13, 5-18, 4th Lane, near Kamaraju Diagnostic Centre, Gunturvari Thota",
              addressLocality: "Kothapeta, Guntur",
              addressRegion: "Andhra Pradesh",
              postalCode: "522001",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "16.3067",
              longitude: "80.4365",
            },
            telephone: "+917330833964",
            openingHours: "Mo-Su 00:00-23:00",
            url: "https://carewell-clinic-web.lovable.app/contact",
            areaServed: {
              "@type": "City",
              name: "Guntur",
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
                  { icon: Phone, label: "073308 33964", href: "tel:+917330833964" },
                  { icon: Phone, label: "070364 67752", href: "tel:+917036467752" },
                  { icon: Mail, label: "chandrakaladar@gmail.com", href: "mailto:chandrakaladar@gmail.com" },
                  { icon: MapPin, label: "Door No: 13, 5-18, 4th Lane, near Kamaraju Diagnostic Centre, Gunturvari Thota, Kothapeta, Guntur, AP 522001" },
                  { icon: Clock, label: "Open daily · Closes 11 PM" },
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

              {/* Quick WhatsApp CTA */}
              <div className="bg-gradient-to-br from-[hsl(142_70%_45%)]/10 to-[hsl(142_70%_45%)]/5 rounded-2xl p-6 border border-[hsl(142_70%_45%)]/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(142_70%_45%)]/15 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[hsl(142_70%_45%)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Prefer WhatsApp?</p>
                    <p className="text-muted-foreground text-xs">Get instant replies</p>
                  </div>
                </div>
                <Button
                  onClick={bookViaWhatsApp}
                  variant="outline"
                  className="w-full border-[hsl(142_70%_45%)]/30 text-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_45%)] hover:text-white gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Book via WhatsApp
                </Button>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-border/50 bg-card">
                <div className="h-72 md:h-80">
                  <iframe
                    title="We Care Physiotherapy Clinic Location in Kothapeta, Guntur"
                    src="https://www.google.com/maps?q=We+Care+Physiotherapy+%26+Sports+%26+Chiropractic+Clinic,+Door+No+13,+5-18,+4th+Lane,+near+Kamaraju+Diagnostic+Center,+Gunturvari+Thota,+Kothapeta,+Guntur,+Andhra+Pradesh+522001&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Google Map showing We Care Physiotherapy Clinic location in Kothapeta, Guntur"
                  />
                </div>
                <div className="p-4 border-t border-border/50">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=We+Care+Physiotherapy+%26+Sports+%26+Chiropractic+Clinic,+Door+No+13,+5-18,+4th+Lane,+Kothapeta,+Guntur,+Andhra+Pradesh+522001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Get directions to our clinic
                  </a>
                </div>
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
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <Button onClick={bookViaWhatsApp} variant="outline" className="gap-2 border-[hsl(142_70%_45%)]/30 text-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_45%)] hover:text-white">
                        <MessageCircle className="w-4 h-4" /> Also Notify via WhatsApp
                      </Button>
                      <Button onClick={() => setSubmitted(false)} variant="outline" className="gap-2">
                        <CalendarDays className="w-4 h-4" /> Book Another
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                        <Input
                          id="contact-name"
                          name="name"
                          required
                          placeholder="Your name"
                          className="h-12"
                          maxLength={100}
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
                        <Input
                          id="contact-phone"
                          name="phone"
                          required
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className="h-12"
                          maxLength={15}
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        className="h-12"
                        maxLength={255}
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-concern" className="text-sm font-medium text-foreground mb-1.5 block">Condition / Concern *</label>
                      <select
                        id="contact-concern"
                        name="concern"
                        required
                        value={formData.concern}
                        onChange={(e) => handleChange("concern", e.target.value)}
                        className="w-full h-12 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select your concern</option>
                        <option>Back Pain / Neck Pain</option>
                        <option>Knee / Hip / Joint Pain</option>
                        <option>Sports Injury</option>
                        <option>Post-Surgery Rehabilitation</option>
                        <option>Chiropractic / Osteopathy</option>
                        <option>Paralysis / Neurological Condition</option>
                        <option>Dry Needling / Acupuncture</option>
                        <option>Cupping / Myofascial Therapy</option>
                        <option>Foot & Ankle Pain</option>
                        <option>Paediatric Physiotherapy</option>
                        <option>Geriatric / Elderly Care</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        placeholder="Briefly describe your condition or preferred appointment time..."
                        rows={4}
                        maxLength={1000}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={loading}
                        className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 active:scale-[0.97] transition-transform"
                      >
                        <Send className="w-4 h-4" />
                        {loading ? "Submitting..." : "Send Appointment Request"}
                      </Button>
                      <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        onClick={bookViaWhatsApp}
                        className="flex-1 border-[hsl(142_70%_45%)]/30 text-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_45%)] hover:text-white gap-2"
                      >
                        <MessageCircle className="w-4 h-4" /> Book via WhatsApp
                      </Button>
                    </div>
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
        {faqs.map((faq, i) => (
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
