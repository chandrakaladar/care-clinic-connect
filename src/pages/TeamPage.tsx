import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Award, BookOpen, Star, CalendarCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";

const team = [
  {
    name: "Dr. R. Chandra Kaladar",
    role: "CHIEF MUSCULOSKELETAL & SPORTS PHYSIOTHERAPIST",
    img: "/images/doctor-chandra-kaladar.jpeg",
    bio: "Dr. Chandra Kaladar leads We Care Physiotherapy with deep expertise in sports physiotherapy, dry needling, and advanced rehabilitation. Following international rehab protocols, he delivers evidence-based treatment for athletes and patients recovering from complex injuries and surgeries.",
    qualifications: "MPT (Sports), MIAP, CDNT",
    experience: "12+ Years",
    specialties: [
      "CERTIFIED IN REHAB: SPORTS INJURIES",
      "CERTIFIED IN: MUSCULOSKELETAL INJURIES",
      "CERTIFIED IN: LIGAMENT INJURIES",
      "CERTIFIED IN: JOINT REPLACEMENT & PAIN MANAGEMENT",
      "CERTIFIED BIOMECHANICAL CORRECTION OF SPINE",
    ],
  },
  {
    name: "Dr. M. Sailaja",
    role: "CHIEF MUSCULOSKELETAL & SPORTS PHYSIOTHERAPIST",
    img: "/images/doctor-sailaja.png",
    bio: "Dr. Sailaja specializes in sports rehabilitation, chiropractic care, and neurological recovery. With advanced training in myofascial release and cupping therapy, she brings a compassionate, patient-first approach to every treatment plan.",
    qualifications: "MPT (Sports), MIAP, CDNT",
    experience: "10+ Years",
    specialties: [
      "CERTIFIED IN REHAB: SPORTS INJURIES",
      "CERTIFIED IN: MUSCULOSKELETAL INJURIES",
      "CERTIFIED IN: LIGAMENT INJURIES",
      "CERTIFIED IN: JOINT REPLACEMENT & PAIN MANAGEMENT",
      "CERTIFIED BIOMECHANICAL CORRECTION OF SPINE",
    ],
  },
];

const TeamPage = () => (
  <>
    <SEOHead
      title="Our Doctors | Best Physiotherapists in Guntur"
      description="Meet Dr. R. Chandra Kaladar & Dr. M. Sailaja — Chief Physiotherapists, MPT (Sports), MIAP, CDNT certified."
      canonical="/team"
    />
    <section className="bg-surface-warm py-16 md:py-24">
      <div className="container">
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Our Doctors</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Meet Your Care Team
          </h1>
          <p className="text-muted-foreground text-lg">
            Experienced, certified, and genuinely caring — our specialists follow international rehab protocols for your recovery.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 h-full flex flex-col group hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.img}
                    alt={`${member.name} - ${member.role} at We Care Physiotherapy Guntur`}
                    className="w-full h-72 md:h-80 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                      <Award className="w-3.5 h-3.5 text-primary" />
                      {member.qualifications}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h2 className="font-display font-bold text-2xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h2>
                  <p className="text-primary font-semibold text-sm mb-4">{member.role}</p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.specialties.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center gap-1 bg-teal-soft text-primary text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        <BookOpen className="w-3 h-3" />
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                    {member.bio}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact" className="flex-1">
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 active:scale-[0.97] transition-all duration-200 shadow-md shadow-secondary/20">
                        <CalendarCheck className="w-4 h-4" /> Book Appointment
                      </Button>
                    </Link>
                    <a href="tel:+917330833964" className="flex-1">
                      <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground gap-2">
                        <Phone className="w-4 h-4" /> Call Now
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact strip */}
        <ScrollReveal delay={0.2} className="mt-16">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/5 to-primary/[0.02] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/10">
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">Consult Our Experts</h3>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <a href="tel:+917330833964" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Phone className="w-4 h-4" /> 073308 33964</a>
                <a href="tel:+917036467752" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Phone className="w-4 h-4" /> 070364 67752</a>
                <a href="mailto:chandrakaladar@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors"><Mail className="w-4 h-4" /> chandrakaladar@gmail.com</a>
              </div>
            </div>
            <Link to="/contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 active:scale-[0.97] transition-all duration-200 shadow-md shadow-secondary/20">
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default TeamPage;
