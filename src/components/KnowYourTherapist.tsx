import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import poonam from '../assets/poonam-diwan.jpeg';
import knowYourTherapist from '../assets/know-therapist.jpeg'

const KnowYourTherapist: React.FC = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-pastel-rose/5 blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Image Side */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-pastel-lavender/30 rounded-2xl -translate-x-2 translate-y-2" />
                <img
                  src={knowYourTherapist}
                  alt="Poonam Diwan"
                  className="relative w-full h-[600px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Content Side */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal delay={0.2}>
              <div>
                
                <h2 className="lg:text-6xl font-bold md:text-5xl font-serif  text-foreground mb-6">
                  Know Your Therapist
                </h2>
                <p className="text-2xl text-foreground/90 font-serif font-bold  leading-relaxed mb-6">
                  Poonam Diwan is a psychological counsellor and NLP practitioner with over 20 years of 
                  corporate experience, bringing a grounded and thoughtful perspective to her work.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className=" lg:text-2xl space-y-6 text-muted-foreground font-serif font-bold  leading-relaxed  md:text-lg">
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
              <div className="pt-4">
                <Link
                  to="/connect"
                  className="inline-block bg-[#4a0e15] text-[#E1DAC7] px-10 py-4 rounded-full font-sans text-sm tracking-wide hover:bg-[#521920] transition-all duration-300 shadow-md"
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