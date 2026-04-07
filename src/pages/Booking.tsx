import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";

const Booking = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
      >
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-serif text-amber-950 dark:text-[#F1E4D1] mb-6 text-center">
            Book an Appointment
          </h1>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Schedule a session with me at a time that works best for you. Your appointment will directly sync with my calendar.
          </p>

          <div className="bg-transparent rounded-xl overflow-hidden min-h-[700px]">
            <InlineWidget 
              url="https://calendly.com/pdiwan1/0" 
              styles={{
                height: '700px',
                width: '100%',
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Booking;
