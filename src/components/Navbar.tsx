import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Our Team", path: "/team" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display font-bold text-lg md:text-xl text-primary leading-tight">
          We Care<br className="hidden md:block" />
          <span className="text-xs md:text-sm font-medium text-muted-foreground">Physiotherapy & Sports Clinic</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-teal-soft"
                  : "text-foreground/70 hover:text-primary hover:bg-teal-soft"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+917330833964" className="hidden md:flex">
            <Button variant="outline" size="sm" className="gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
              <Phone className="w-4 h-4" /> 073308 33964
            </Button>
          </a>
          <Link to="/contact" className="hidden md:block">
            <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Book Appointment
            </Button>
          </Link>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-card border-t">
          <nav className="container flex flex-col py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-teal-soft"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+917330833964" className="mt-2">
              <Button variant="outline" className="w-full gap-2 border-primary/30 text-primary">
                <Phone className="w-4 h-4" /> 073308 33964
              </Button>
            </a>
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-1">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Book Appointment
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
