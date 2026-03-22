import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";

const team = [
  {
    name: "Dr. R. Chandra Kaladar",
    role: "Chief Physiotherapist",
    img: doc1,
    bio: "Dr. Chandra Kaladar leads We Care Physiotherapy with deep expertise in sports physiotherapy, dry needling, and advanced rehabilitation. Following international rehab protocols, he delivers evidence-based treatment for athletes and patients recovering from complex injuries and surgeries.",
    qualifications: "MPT (Sports), MIAP, CDNT",
  },
  {
    name: "Dr. M. Sailaja",
    role: "Chief Physiotherapist",
    img: doc2,
    bio: "Dr. Sailaja specializes in sports rehabilitation, chiropractic care, and neurological recovery. With advanced training in myofascial release and cupping therapy, she brings a compassionate, patient-first approach to every treatment plan.",
    qualifications: "MPT (Sports), MIAP, CDNT",
  },
];

const TeamPage = () => (
  <>
    <SEOHead
      title="Our Doctors | Best Physiotherapists in Guntur | We Care Clinic"
      description="Meet Dr. R. Chandra Kaladar and Dr. M. Sailaja — Chief Physiotherapists at We Care Clinic Guntur. MPT (Sports), MIAP, CDNT certified specialists."
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 h-full flex flex-col">
                <img
                  src={member.img}
                  alt={`${member.name} - ${member.role} at We Care Physiotherapy Guntur`}
                  className="w-full h-80 object-cover object-top"
                  loading="lazy"
                />
                <div className="p-7 flex flex-col flex-1">
                  <h2 className="font-display font-bold text-xl text-foreground">{member.name}</h2>
                  <p className="text-primary text-sm font-semibold mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground/80 mb-4 font-medium">{member.qualifications}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{member.bio}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default TeamPage;
