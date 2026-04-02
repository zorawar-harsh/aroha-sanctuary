import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const Contact = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    {
      label: "Your Name",
      field: "name" as const,
      type: "text",
      placeholder: "What should I call you?",
    },
    {
      label: "Your Email",
      field: "email" as const,
      type: "email",
      placeholder: "Where can I respond?",
    },
    {
      label: "Your Message",
      field: "message" as const,
      type: "textarea",
      placeholder: "Share whatever feels right. There are no wrong words here.",
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else {
      setSubmitted(true);
    }
  };

  const currentStep = steps[step];
  const canProceed = form[currentStep?.field]?.trim().length > 0;

  return (
    <div className="min-h-screen pt-32">
      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground mb-6">Connect</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4">Get in Touch</h1>
            <p className="text-base font-sans font-light text-muted-foreground leading-relaxed mb-4">
              If you feel drawn to this work, you're welcome to reach out.
            </p>
            <p className="text-base font-sans font-light text-muted-foreground leading-relaxed mb-16">
              You don't need to have the right words or clarity before contacting me.
              We can begin from wherever you are.
            </p>
          </ScrollReveal>

          {!submitted ? (
            <div className="glass-card p-8 md:p-12">
              {/* Progress dots */}
              <div className="flex gap-2 mb-10">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i <= step ? "bg-sage w-8" : "bg-border w-4"
                    }`}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <label className="block text-sm font-sans text-muted-foreground mb-3 uppercase tracking-wider">
                    {currentStep.label}
                  </label>
                  {currentStep.type === "textarea" ? (
                    <textarea
                      value={form[currentStep.field]}
                      onChange={(e) => setForm({ ...form, [currentStep.field]: e.target.value })}
                      placeholder={currentStep.placeholder}
                      rows={5}
                      className="w-full bg-transparent border-b border-border/50 focus:border-sage/50 outline-none text-foreground font-sans font-light text-lg py-3 resize-none placeholder:text-muted-foreground/40 transition-colors duration-300"
                      autoFocus
                    />
                  ) : (
                    <input
                      type={currentStep.type}
                      value={form[currentStep.field]}
                      onChange={(e) => setForm({ ...form, [currentStep.field]: e.target.value })}
                      placeholder={currentStep.placeholder}
                      className="w-full bg-transparent border-b border-border/50 focus:border-sage/50 outline-none text-foreground font-sans font-light text-lg py-3 placeholder:text-muted-foreground/40 transition-colors duration-300"
                      autoFocus
                      onKeyDown={(e) => e.key === "Enter" && canProceed && handleNext()}
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-10">
                {step > 0 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ← Back
                  </button>
                ) : (
                  <div />
                )}
                <button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="btn-ripple bg-sage/10 border border-sage/20 text-foreground font-sans text-sm px-6 py-2.5 rounded-full hover:bg-sage/20 transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {step < steps.length - 1 ? "Continue →" : "Send with Care"}
                </button>
              </div>
            </div>
          ) : (
            <ScrollReveal>
              <div className="glass-card p-8 md:p-12 text-center">
                <div className="w-12 h-12 rounded-full bg-sage/15 mx-auto mb-6 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-sage" />
                </div>
                <p className="text-xl font-serif font-light text-foreground mb-3">Thank you</p>
                <p className="text-sm font-sans text-muted-foreground">
                  I will respond with care and discretion.
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
