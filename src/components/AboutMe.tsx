import React from 'react';
import poonam from '../assets/poonam.jpeg'

const AboutMe: React.FC = () => {
  return (
    <>
      <section className="bg-[#F4F1EA] min-h-screen px-6 py-16 flex flex-col items-center font-serif text-[#2D2D2D] overflow-x-hidden">
        {/* Image and Floating Badge Container */}
        <div className="relative w-full max-w-2xl mb-24 md:mb-12">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-lg">
            <img 
              src={poonam} 
              alt="Poonam Diwan" 
              className="w-full h-full rounded-md object-cover object-top"
            />
          </div>

          {/* Floating Blue Badge - Adjusted for mobile */}
          <div className="
            absolute 
            -bottom-12 left-1/2 -translate-x-1/2  /* Center it at the bottom on mobile */
            md:bottom-auto md:top-1/3 md:left-auto md:translate-x-0 md:-right-12 /* Original overlap on desktop */
            bg-[#B39998] text-white p-6 md:p-10 
            w-[85%] md:w-72 
            shadow-xl z-20"
          >
            <h2 className="text-lg md:text-2xl  leading-tight text-center">
              Poonam Diwan is a psychological counsellor and NLP practitioner with over two decades
              of corporate experience 
            </h2>
          </div>
        </div>

        {/* Hero Quote / Statement */}
        <div className="max-w-4xl text-center mb-12 mt-8 md:mt-0">
          <h1 className="text-3xl text-[#521920] md:text-4xl lg:text-5xl font-medium leading-tight">
            Poonam believes true change begins when you feel safe, heard, and
            understood, helping you navigate life with clarity and confidence.
          </h1>
        </div>

        {/* Detailed Bio */}
        <div className="max-w-5xl text-center mx-auto ">
          <p className="text-sm text-[#4A0E15] font-bold lg:text-xl  opacity-80  ">
            With over 20 years of corporate leadership experience, I bring a seasoned perspective to personal and professional development. My background is anchored by an MBA in Marketing and Finance, complemented by advanced studies in Psychology (MAPC) and certification as an NLP Practitioner. This diverse expertise allows me to bridge the gap between emotional well-being and practical success. I specialize in supporting individuals through complex life transitions, career hurdles, and relationship dynamics. By integrating psychological insight with real-world leadership strategies, I empower clients to build lasting confidence and navigate their professional and personal journeys with clarity and resilience.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;