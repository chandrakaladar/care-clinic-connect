import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Phone, CalendarDays, ClipboardList } from "lucide-react";

interface WhatsAppPanelProps {
  phone?: string;
}

const WhatsAppPanel = ({ phone = "917330833964" }: WhatsAppPanelProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [concern, setConcern] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sendToWhatsApp = () => {
    const text =
      `Hello, I would like to book an appointment at We Care Physiotherapy Clinic.\n\n` +
      `👤 Name: ${name || "(not provided)"}\n` +
      `📞 Phone: ${phoneNum || "(not provided)"}\n` +
      `🩺 Concern: ${concern || "(not provided)"}\n\n` +
      `Please confirm my appointment. Thank you!`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhoneNum("");
      setConcern("");
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 w-80 bg-card rounded-2xl shadow-2xl border border-border/60 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[hsl(142_70%_45%)] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Book via WhatsApp</p>
                  <p className="text-white/80 text-xs">We Care Physiotherapy</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close WhatsApp booking panel"
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-14 h-14 rounded-full bg-[hsl(142_70%_45%)]/10 flex items-center justify-center mx-auto mb-3">
                    <Send className="w-6 h-6 text-[hsl(142_70%_45%)]" />
                  </div>
                  <p className="font-semibold text-foreground text-sm">Opening WhatsApp...</p>
                  <p className="text-muted-foreground text-xs mt-1">Send the pre-filled message to book your appointment.</p>
                </motion.div>
              ) : (
                <>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" /> Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(142_70%_45%)]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phoneNum}
                      onChange={(e) => setPhoneNum(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(142_70%_45%)]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1.5">
                      <ClipboardList className="w-3.5 h-3.5" /> Condition / Concern
                    </label>
                    <textarea
                      value={concern}
                      onChange={(e) => setConcern(e.target.value)}
                      placeholder="Briefly describe your condition..."
                      rows={3}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(142_70%_45%)]/30 transition-all resize-none"
                    />
                  </div>
                  <button
                    onClick={sendToWhatsApp}
                    className="w-full h-11 rounded-xl bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_38%)] text-white font-semibold text-sm flex items-center justify-center gap-2 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-[hsl(142_70%_45%)]/20"
                  >
                    <Send className="w-4 h-4" /> Send Appointment Request
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="relative flex items-center justify-center bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_38%)] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[hsl(142_70%_45%)] animate-pulse-ring" />
        <MessageCircle className="w-6 h-6 relative z-10" />
      </motion.button>
    </div>
  );
};

export default WhatsAppPanel;
