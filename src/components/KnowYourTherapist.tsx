import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import poonam from '../assets/poonam-diwan.jpeg';
import knowYourTherapist from '../assets/knowYourTherapist.jpg'

const KnowYourTherapist: React.FC = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-pastel-rose/5 blur-3xl" />
      
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Image Side — shows below text on mobile, left on desktop */}
          <div className="relative z-10 w-full flex justify-center md:justify-end order-2 md:order-1">
            <ScrollReveal className="w-full">
              <div className="w-full max-w-md lg:max-w-lg mx-auto">
                <div className="relative">
                  {/* Decorative Frame */}
                  <div className="hidden md:block absolute inset-0 -translate-x-12 -translate-y-6 lg:-translate-x-24 lg:-translate-y-12 rounded-[32px] bg-[#521920]/40 shadow-2xl" aria-hidden="true" />
                  <img
                    src={knowYourTherapist}
                    alt="Poonam Diwan"
                    className="relative w-full h-80 md:h-[400px] lg:h-[550px] object-cover object-top rounded-3xl shadow-xl"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Content Side — shows first on mobile, right on desktop */}
          <div className="text-center md:text-left space-y-8 order-1 md:order-2">
            <ScrollReveal delay={0.2}>
              <div>
                
                <h2 className="lg:text-6xl font-bold md:text-5xl font-serif text-5xl text-foreground mb-6">
                  Know Your Therapist
                </h2>
                <p className="lg:text-2xl text-2xl font-bold text-foreground/90 font-serif  leading-relaxed mb-6">
                  Poonam Diwan is a psychological counsellor and NLP practitioner with over 20 years of 
                  leadership experience, bringing a grounded and thoughtful perspective to her work.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className=" lg:text-2xl text-2xl space-y-6 text-muted-foreground font-serif font-bold leading-relaxed  md:text-lg">
                <p>
                  She supports individuals who may appear steady on the outside but feel anxious or 
                  disconnected within, especially during times of change, emotional stress, or 
                  important life decisions.
                </p>
                <p>
                  Her approach is calm, warm, and non-judgmental. Rather than offering quick advice, 
                  she creates a safe space where you can slow down, reflect, and understand yourself 
                  more deeply, so you can find your own clarity and direction.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="pt-4 flex items-center justify-center md:justify-start lg:pt-4">
                <Link
                  to="/connect"
              className="inline-block bg-[#521920] btn-ripple border border-sage/20 text-[#E1DAC7] font-sans text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-sage/20 hover:text-[#983355] transition-all duration-500"
                >
                  Book a Session
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KnowYourTherapist;