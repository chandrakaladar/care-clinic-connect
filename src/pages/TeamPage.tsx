import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";

const team = [
  {
    name: "Dr. Ramesh Kumar",
    role: "Chief Physiotherapist & Founder",
    img: doc1,
    bio: "With over 15 years of experience in orthopedic and sports physiotherapy, Dr. Ramesh founded We Care with a vision to bring world-class rehabilitation to Guntur.",
    qualifications: "MPT (Ortho), MIAP, Certified Sports Physiotherapist",
  },
  {
    name: "Dr. Priya Reddy",
    role: "Senior Physiotherapist — Neuro Rehab",
    img: doc2,
    bio: "Dr. Priya specializes in neurological rehabilitation with expertise in stroke recovery, balance disorders, and pediatric physiotherapy.",
    qualifications: "MPT (Neuro), DNB Physiotherapy",
  },
  {
    name: "Dr. Anil Varma",
    role: "Chiropractor & Sports Specialist",
    img: doc3,
    bio: "Dr. Anil brings cutting-edge chiropractic techniques combined with sports medicine to help athletes and active individuals recover faster.",
    qualifications: "DC (Chiropractic), CSCS, Sports Rehab Specialist",
  },
];

const TeamPage = () => (
  <>
    <SEOHead
      title="Our Team | Best Physiotherapists in Guntur"
      description="Meet the expert physiotherapists and chiropractors at We Care Clinic Guntur. Certified specialists with 12+ years of experience in pain relief and rehabilitation."
    />
    <section className="bg-surface-warm py-16 md:py-24">
      <div className="container">
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Our Team</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Meet Your Care Team
          </h1>
          <p className="text-muted-foreground text-lg">
            Experienced, certified, and genuinely caring — our specialists are dedicated to your recovery journey.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 h-full flex flex-col">
                <img
                  src={member.img}
                  alt={`${member.name} - ${member.role} at We Care Physiotherapy Guntur`}
                  className="w-full h-72 object-cover object-top"
                  loading="lazy"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-display font-bold text-xl text-foreground">{member.name}</h2>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 flex-1">{member.bio}</p>
                  <p className="text-xs text-muted-foreground/70 border-t pt-3">{member.qualifications}</p>
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
