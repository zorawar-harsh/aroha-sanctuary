import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InlineWidget, PopupWidget } from "react-calendly";
import { X, Calendar, Mail, Send, CheckCircle } from "lucide-react";
import Loader from "../components/Loader";

const CALENDLY_URL = "https://calendly.com/pdiwan1/0";

// ─── Calendly Popup Modal ────────────────────────────────────────────────────
export const CalendlyPopup = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (open) {
      // Lock scroll
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="calendly-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.55)" }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 30 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl bg-white dark:bg-[#1a1614] rounded-3xl overflow-hidden shadow-2xl"
            style={{ height: "min(90vh, 760px)" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close booking calendar"
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-amber-900/10 hover:bg-amber-900/20 text-[#521920] dark:text-[#F1E4D1] transition-colors"
            >
              <X size={18} />
            </button>

            {/* Header strip */}
            <div className="px-8 pt-6 pb-4 border-b border-amber-900/10">
              <h2 className="text-xl font-serif text-[#521920] dark:text-[#F1E4D1] font-semibold">
                Book A Session
              </h2>
              <p className="text-sm text-muted-foreground mt-0.5">
                Choose a time that works best for you.
              </p>
            </div>

            {/* Calendly widget */}
            <div className="h-[calc(100%-76px)] w-full">
              <InlineWidget
                url={CALENDLY_URL}
                styles={{ height: "100%", width: "100%", minWidth: "0" }}
                pageSettings={{
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Main Page ───────────────────────────────────────────────────────────────
const BookAndConnect = () => {
  const [formResult, setFormResult] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setFormResult("Sending...");

    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setFormResult("Message sent! I'll get back to you soon.");
        setSubmitted(true);
        form.reset();
      } else {
        setFormResult(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setFormResult("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* ── Hero strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4 mb-12"
      >
        <h1 className="text-4xl lg:text-6xl font-serif text-[#521920] dark:text-[#F1E4D1] mb-3">
          Book &amp; Connect
        </h1>
        <p className="max-w-xl mx-auto text-2xl lg:text-2xl font-serif text-[#521920]">
          Schedule a session directly or send me a message — I'm here to help
          you find clarity and move forward.
        </p>
        {/* Quick-jump pill buttons */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          <a
            href="#booking-section"
            // className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#521920] text-white text-sm font-semibold hover:bg-amber-950 transition-colors shadow-sm"
                          className="inline-flex items-center gap-2 bg-[#521920] btn-ripple border border-sage/20 text-[#E1DAC7] font-sans text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-sage/20 hover:text-[#983355] transition-all duration-500"

          >
            <Calendar size={15} />
            Book A Session
          </a>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-900/40 text-[#521920] dark:text-[#F1E4D1] text-sm font-semibold hover:bg-amber-900/10 transition-colors"
          >
            <Mail size={15} />
            Send a Message
          </button>
        </div>
      </motion.div>

      {/* ── Booking Section ── */}
      <section
        id="booking-section"
        className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-20 scroll-mt-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 md:p-10 rounded-3xl relative overflow-hidden"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-100/20 dark:bg-amber-900/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-rose-100/20 dark:bg-rose-900/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-900/10">
                <Calendar size={18} className="text-amber-900 dark:text-[#F1E4D1]" />
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif text-amber-950 dark:text-[#F1E4D1]">
                Schedule a Session
              </h2>
            </div>
            <p className="text-muted-foreground mb-8 text-2xl lg:text-2xl font-serif md:text-base max-w-lg">
              Pick a time that suits you. Your session will sync directly
              with my calendar.
            </p>

            <div className="w-full min-w-0 bg-transparent rounded-3xl overflow-hidden" style={{ height: "700px" }}>
              <InlineWidget
                url={CALENDLY_URL}
                styles={{
                  height: "700px",
                  width: "100%",
                  minWidth: "0",
                }}
                pageSettings={{
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mb-20">
        <div className="relative flex items-center gap-4">
          <div className="flex-1 h-px bg-amber-900/15" />
          <span className="text-xl uppercase tracking-[0.2em] font-bold text-[#521920] dark:text-[#F1E4D1] font-serif">
            or reach out directly
          </span>
          <div className="flex-1 h-px bg-amber-900/15" />
        </div>
      </div>

      {/* ── Contact Section ── */}
      <section
        ref={contactRef}
        className="px-4 sm:px-6 md:px-8 max-w-3xl mx-auto scroll-mt-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-rose-100/20 dark:bg-rose-900/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-900/10">
                <Mail size={18} className="text-amber-900 dark:text-[#F1E4D1]" />
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif text-amber-950 dark:text-[#F1E4D1]">
                Get in Touch
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-10 font-serif text-2xl lg:text-2xl md:text-base max-w-md mx-auto">
              I'm here to hold space for you. Send me a message and I'll get
              back to you as soon as I can.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-12"
              >
                <CheckCircle size={52} className="text-green-600 dark:text-green-400" />
                <p className="text-lg font-serif text-amber-950 dark:text-[#F1E4D1] text-center">
                  Thank you for reaching out!
                </p>
                <p className="text-sm text-muted-foreground text-center max-w-xs">
                  {formResult}
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormResult(""); }}
                  className="mt-2 text-sm text-[#521920] hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5 max-w-md mx-auto">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-amber-950 dark:text-[#F1E4D1] mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full p-3 bg-transparent border border-amber-900/30 rounded-xl focus:outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900 transition-all placeholder:text-muted-foreground/50 text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-[#521920] dark:text-[#F1E4D1] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full p-3 bg-transparent border border-amber-900/30 rounded-xl focus:outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900 transition-all placeholder:text-muted-foreground/50 text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-amber-950 dark:text-[#F1E4D1] mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full p-3 bg-transparent border border-amber-900/30 rounded-xl focus:outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900 transition-all resize-none placeholder:text-muted-foreground/50 text-sm"
                  />
                </div>

                {/* Hidden spam-prevention fields */}
                <input type="hidden" name="subject" value="New Contact from Aroha Sanctuary" />
                <input type="hidden" name="from_name" value="Aroha Website" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#521920] text-white py-3.5 px-8 rounded-xl hover:bg-[#521920] transition-colors disabled:opacity-70 disabled:cursor-not-allowed font-semibold text-base mt-1 shadow-sm"
                >
                  <Send size={16} />
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>

                {formResult && !submitted && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-center text-sm ${
                      formResult.includes("sent")
                        ? "text-green-700 dark:text-green-400"
                        : "text-[#521920] dark:text-[#F1E4D1]"
                    }`}
                  >
                    {formResult}
                  </motion.p>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BookAndConnect;
