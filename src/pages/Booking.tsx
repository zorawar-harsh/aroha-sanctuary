import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import Loader from "../components/Loader";

const Booking = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setShowCalendly(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 md:px-8 lg:px-10 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6 md:p-10 rounded-3xl relative overflow-hidden"
      >
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-serif text-amber-950 dark:text-[#F1E4D1] mb-6 text-center">
            Book an Appointment
          </h1>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Schedule a session with me at a time that works best for you. Your appointment will directly sync with my calendar.
          </p>

          <div className="w-full min-w-0 bg-transparent rounded-3xl overflow-hidden min-h-[560px] h-[calc(100vh-14rem)] max-h-[900px] sm:min-h-[640px]">
            {showCalendly ? (
              <InlineWidget
                url="https://calendly.com/pdiwan1/0"
                styles={{
                  height: '100%',
                  width: '100%',
                  minWidth: '0',
                  minHeight: '100%',
                }}
                pageSettings={{ hideEventTypeDetails: false, hideLandingPageDetails: false }}
              />
            ) : (
              <div className="flex h-full items-center justify-center rounded-3xl bg-slate-50/40 dark:bg-slate-900/40">
                <Loader />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Booking;
