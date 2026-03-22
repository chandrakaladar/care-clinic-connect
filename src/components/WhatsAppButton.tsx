import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_38%)] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppButton;
