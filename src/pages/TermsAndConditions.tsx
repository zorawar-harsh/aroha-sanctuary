import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const TermsAndConditions: React.FC = () => {
  return (
    <section className="bg-[#F4F1EA] min-h-screen section-padding pt-32 pb-20 relative overflow-hidden">
      {/* Subtle background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pastel-lavender/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-pastel-mint/10 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <ScrollReveal>
          <header className="text-center mb-16">
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-sage-dark/60 block mb-4">
              Legal Agreement
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground">
              Terms and Conditions
            </h1>
            <div className="w-20 h-px bg-pastel-rose/40 mx-auto mt-8" />
          </header>
        </ScrollReveal>

        <div className="space-y-12">

          {/* 1. Acceptance of Terms */}
          <ScrollReveal delay={0.1}>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-serif text-foreground border-b border-pastel-lavender/30 pb-2">
                  1. Acceptance of Terms
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using poonamdiwan.com, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. Use License */}
          <ScrollReveal delay={0.2}>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-serif text-foreground border-b border-pastel-peach/30 pb-2">
                  2. Use License
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials on poonamdiwan.com for personal, non-commercial transitory viewing only. You may not:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                  <li>Modify or copy the materials.</li>
                  <li>Use the materials for any commercial purpose or public display.</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the site.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* 3. Professional Services */}
          <ScrollReveal delay={0.3}>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-serif text-foreground border-b border-pastel-sky/30 pb-2">
                  3. Professional Services
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground leading-relaxed">
                  Bookings for counseling or NLP sessions are subject to availability. We reserve the right to refuse service to anyone for any reason at any time.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 4. Cancellation and Refund Policy */}
          <ScrollReveal delay={0.4}>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-serif text-foreground border-b border-pastel-rose/30 pb-2">
                  4. Cancellation & Refunds
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Cancellations:</strong> Please provide at least 24 hours' notice for cancellations. Failure to do so may result in a cancellation fee or forfeiture of the session fee.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Refunds:</strong> Payments for completed sessions are non-refundable.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 5. User Conduct */}
          <ScrollReveal delay={0.5}>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-serif text-foreground border-b border-pastel-lavender/30 pb-2">
                  5. User Conduct
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  You agree to use the website for lawful purposes only. You are prohibited from posting or transmitting any material that is defamatory, obscene, or infringing on intellectual property rights.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 6. Limitation of Liability */}
          <ScrollReveal delay={0.6}>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-serif text-foreground border-b border-pastel-peach/30 pb-2">
                  6. Limitation of Liability
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Poonam Diwan or MindShift Therapy be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on this website, even if notified orally or in writing of the possibility of such damage.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 7. Revisions and Errata */}
          <ScrollReveal delay={0.7}>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-serif text-foreground border-b border-pastel-sky/30 pb-2">
                  7. Revisions and Errata
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The materials appearing on the website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 8. Governing Law */}
          <ScrollReveal delay={0.8}>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-serif text-foreground border-b border-pastel-rose/30 pb-2">
                  8. Governing Law
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Any claim relating to poonamdiwan.com shall be governed by the laws of the State of Uttar Pradesh, India, without regard to its conflict of law provisions.
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

export default TermsAndConditions;