import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="bg-[#F4F1EA] min-h-screen section-padding relative overflow-hidden">
      {/* Subtle background orbs to match the Home page */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pastel-lavender/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-pastel-mint/10 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <ScrollReveal>
          <header className="text-center mb-16">
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-sage-dark/60 block mb-4">
              Commitment to Care
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground">
              Privacy Policy
            </h1>
            <div className="w-20 h-px bg-pastel-rose/40 mx-auto mt-8" />
          </header>
        </ScrollReveal>

        <div className="space-y-12">
          {/* Intro */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white/40 backdrop-blur-sm border border-white/60 p-8 rounded-2xl shadow-sm">
              <p className="text-lg md:text-xl font-serif text-foreground/80 leading-relaxed text-center italic">
                "Your privacy is important to us. This website is committed to protecting your personal information and ensuring a safe and secure experience."
              </p>
            </div>
          </ScrollReveal>

          {/* Section: Collection */}
          <ScrollReveal delay={0.2}>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-serif text-foreground border-b border-pastel-lavender/30 pb-2">
                  Information We Collect
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  When you interact with this website, you may choose to share personal information such as 
                  <strong> name, email address, and phone number</strong>—primarily when booking a session 
                  or contacting us.
                </p>
                <p className="text-sm font-sans text-sage-dark/70 bg-pastel-mint/20 px-4 py-2 rounded-lg inline-block">
                  Note: You may browse the website without providing any personal information.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Section: Usage */}
          <ScrollReveal delay={0.3}>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-serif text-foreground border-b border-pastel-peach/30 pb-2">
                  How Your Information Is Used
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground mb-6">Your information is used only to:</p>
                <ul className="space-y-4">
                  {[
                    "Schedule and manage sessions",
                    "Communicate with you regarding appointments",
                    "Share relevant updates or respond to your queries"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-pastel-sky" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Section: Third Parties */}
          <ScrollReveal delay={0.4}>
            <div className="mt-12 p-8 rounded-2xl bg-[#4a0e15]/5 border border-[#4a0e15]/10 text-center">
              <p className="text-foreground/90 font-medium">
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer Note */}
        <footer className="mt-24 text-center text-xs text-muted-foreground/60 tracking-widest uppercase">
          © {new Date().getFullYear()} Mindshift Therapy • All Rights Reserved
        </footer>
      </div>
    </section>
  );
};

export default PrivacyPolicy;