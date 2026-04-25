import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Disclaimer: React.FC = () => {
  return (
    <section className="bg-[#F4F1EA] min-h-screen section-padding pt-32 pb-20 relative overflow-hidden">
      {/* Subtle background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pastel-lavender/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-pastel-mint/10 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <ScrollReveal>
          <header className="text-center mb-16">
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-sage-dark/60 block mb-4">
              Important Information
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground">
              Disclaimer
            </h1>
            <div className="w-20 h-px bg-pastel-rose/40 mx-auto mt-8" />
          </header>
        </ScrollReveal>

        <div className="space-y-12">

          {/* Section: Medical and Professional Advice Disclaimer */}
          <ScrollReveal delay={0.1}>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-serif text-foreground border-b border-pastel-lavender/30 pb-2">
                  Medical and Professional Advice Disclaimer
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The information provided on poonamdiwan.com, including text, graphics, images, and other material, is for educational and informational purposes only. Poonam Diwan provides services as a psychological counselor and NLP practitioner; however, the content on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or mental health disorder.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Section: No Therapist-Client Relationship */}
          <ScrollReveal delay={0.2}>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-serif text-foreground border-b border-pastel-peach/30 pb-2">
                  No Therapist-Client Relationship
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground leading-relaxed">
                  Your use of this website, including the submission of contact forms or sending emails, does not create a therapist-client relationship between you and Poonam Diwan. A formal relationship is only established once a service agreement has been signed by both parties and a consultation has commenced.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Section: Emergency & Crisis Disclaimer */}
          <ScrollReveal delay={0.3}>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-serif text-foreground border-b border-pastel-sky/30 pb-2">
                  Emergency & Crisis Disclaimer
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground leading-relaxed">
                  This website is not monitored 24/7 and is not intended for use in an emergency. If you are experiencing a mental health crisis, or if you or someone else is in immediate danger, please contact your local emergency services (e.g., 112 in India) or visit the nearest hospital emergency department immediately.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Section: Results Disclaimer */}
          <ScrollReveal delay={0.4}>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-serif text-foreground border-b border-pastel-rose/30 pb-2">
                  Results Disclaimer
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground leading-relaxed">
                  Any testimonials or examples shown on this website are shared as possible outcomes and do not guarantee that you or any other individual will achieve the same or similar results.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

        <footer className="mt-24 text-center text-xs text-muted-foreground/60 tracking-widest uppercase">
          © {new Date().getFullYear()} MindShift Therapy by Poonam Diwan • All Rights Reserved
        </footer>
      </div>
    </section>
  );
};

export default Disclaimer;