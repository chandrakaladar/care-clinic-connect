import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <h3 className="font-display font-bold text-xl mb-4">We Care Physiotherapy</h3>
        <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-3">
          Advanced Chiropractic & Osteopathy, Dry Needling, Myofascial Release, Cupping Therapy, Paralysis Treatment & Rehabilitation Centre in Guntur.
        </p>
        <p className="inline-block bg-secondary-foreground/10 text-secondary-foreground/80 text-xs font-semibold px-3 py-1 rounded-full">
          International Rehab Protocols
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
        <nav className="flex flex-col gap-2 text-sm">
          {[
            { label: "About Us", path: "/about" },
            { label: "Services", path: "/services" },
            { label: "Our Team", path: "/team" },
            { label: "Blog", path: "/blog" },
            { label: "Contact", path: "/contact" },
          ].map((l) => (
            <Link key={l.path} to={l.path} className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
        <nav className="flex flex-col gap-2 text-sm text-secondary-foreground/70">
          <Link to="/services" className="hover:text-secondary-foreground transition-colors">Chiropractic & Osteopathy</Link>
          <Link to="/services" className="hover:text-secondary-foreground transition-colors">Dry Needling & Acupuncture</Link>
          <Link to="/services" className="hover:text-secondary-foreground transition-colors">Myofascial Release</Link>
          <Link to="/services" className="hover:text-secondary-foreground transition-colors">Paralysis Treatment</Link>
          <Link to="/services" className="hover:text-secondary-foreground transition-colors">Sports Injury Rehab</Link>
          <Link to="/services" className="hover:text-secondary-foreground transition-colors">Cupping & Heat Therapy</Link>
        </nav>
      </div>
      <div>
        <h4 className="font-display font-semibold text-lg mb-4">Contact Info</h4>
        <div className="flex flex-col gap-3 text-sm text-secondary-foreground/70">
          <a href="tel:+917330833964" className="flex items-start gap-2 hover:text-secondary-foreground transition-colors">
            <Phone className="w-4 h-4 mt-0.5 shrink-0" /> 073308 33964
          </a>
          <a href="tel:+917036467752" className="flex items-start gap-2 hover:text-secondary-foreground transition-colors">
            <Phone className="w-4 h-4 mt-0.5 shrink-0" /> 070364 67752
          </a>
          <a href="mailto:chandrakaladar@gmail.com" className="flex items-start gap-2 hover:text-secondary-foreground transition-colors">
            <Mail className="w-4 h-4 mt-0.5 shrink-0" /> chandrakaladar@gmail.com
          </a>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Door No: 13, 5-18, 4th Lane, Kothapeta, Guntur, AP 522001
          </div>
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 mt-0.5 shrink-0" /> Open daily · Closes 11 PM
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-secondary-foreground/10">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/50">
        <p>© {new Date().getFullYear()} We Care Physiotherapy & Sports & Chiropractic Clinic, Guntur. All rights reserved.</p>
        <p>Best Physiotherapy Clinic in Guntur, Andhra Pradesh</p>
      </div>
    </div>
  </footer>
);

export default Footer;
