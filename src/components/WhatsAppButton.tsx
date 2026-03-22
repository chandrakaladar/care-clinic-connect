import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/917330833964?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 group"
    aria-label="Chat on WhatsApp"
  >
    {/* Pulse ring */}
    <span className="absolute inset-0 rounded-full bg-[hsl(142_70%_45%)] animate-pulse-ring" />
    <span className="relative flex items-center justify-center bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_38%)] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95">
      <MessageCircle className="w-6 h-6" />
    </span>
  </a>
);

export default WhatsAppButton;
