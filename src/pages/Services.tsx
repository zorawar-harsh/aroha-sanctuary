import React from 'react';
import {
  User,
  Heart,
  Briefcase,
  Users,
  ShieldCheck,
  Sparkles,
  Search,
  Clock
} from 'lucide-react';

import poonam from '../assets/services.jpeg'
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Individual Counselling",
      icon: <User className="w-6 h-6" />,
      description: "A safe, non-judgmental space to explore your thoughts, emotions, and experiences at your own pace.",
      details: "Whether you are feeling anxious, overwhelmed, or disconnected, these sessions help you gain clarity, understand yourself better, and move forward with confidence."
    },
    {
      title: "Emotional Well-being",
      icon: <Heart className="w-6 h-6" />,
      description: "Support for managing stress, overthinking, low confidence, and emotional imbalance.",
      details: "Through simple, practical tools and reflective conversations, you will learn to build self-awareness, emotional strength, and a greater sense of inner stability."
    },
    {
      title: "Career Clarity & Work Place Support",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Guidance for navigating workplace stress, decision-making, and career transitions.",
      details: "Backed by MBA education and over two decades of corporate leadership experience, I understand workplace stress, career confusion, difficult managers, confidence loss, and professional transitions."
    },
    {
      title: "Relationship Support",
      icon: <Users className="w-6 h-6" />,
      description: "Support in understanding relationship patterns and improving communication.",
      details: "These sessions help you build healthier connections, both with others and with yourself, making better life decisions along the way."
    }
  ];

  const features = [
    { title: "A Safe, Non-Judgmental Space", icon: <ShieldCheck />, desc: "Where you can pause, be yourself, and feel truly heard." },
    { title: "A Practical, Grounded Approach", icon: <Sparkles />, desc: "Simple, thoughtful guidance that helps you navigate real-life challenges." },
    { title: "Understanding Beyond the Surface", icon: <Search />, desc: "Gently uncover patterns and create meaningful, lasting change." },
    { title: "Experience That Understands You", icon: <Clock />, desc: "Over two decades of corporate experience meeting emotional expertise." }
  ];

  return (
    <section className="py-16 px-6 bg-[#F4F0EA]">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="w-full md:w-1/3">
            <div className="aspect-[3/4] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
              <img src={poonam} alt="Poonam" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h1 className="text-4xl lg:text-6xl font-serif font-medium text-[#511820] mb-6">
              How I Can Support You
            </h1>
            <p className="text-2xl font-bold font-serif text-[#511820] leading-relaxed mb-6">
              Life can feel overwhelming at times, whether you're dealing with emotional stress, relationship
              challenges, or important life and career decisions. You don't have to navigate it alone.
            </p>
            <p className="text-2xl font-bold font-serif text-[#511820] leading-relaxed">
              Each session is designed to support you in understanding yourself more deeply,
              so you can move forward with clarity, confidence, and a stronger sense of direction.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-[#511820] mb-4">{service.icon}</div>
              <h3 className="text-4xl font-semibold text-[#521920] mb-3">{service.title}</h3>
              <p className="text-2xl text-[#521920] font-serif mb-2">{service.description}</p>
              <p className="text-2xl text-[#521920] font-serif  leading-relaxed">{service.details}</p>
            </div>
          ))}
        </div>

        {/* Philosophy/Approach Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-slate-200">
          {features.map((f, i) => (
            <div key={i} className="text-center bg-[#FFFFFF] p-8 rounded-sm md:text-left">
              <div className="text-[#511820] mb-3 flex justify-center md:justify-start">{f.icon}</div>
              <h4 className="text-4xl font-bold text-[#521920] mb-2">{f.title}</h4>
              <p className="text-2xl font-serif text-[#521920]">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-[#511820] rounded-[2rem] p-12 shadow-lg relative overflow-hidden">
          {/* Decorative background blurs */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#b37e73]/20 blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-4xl font-medium text-[#F1E4D1] mb-4">Ready to take the first step?</h3>
            <p className="text-2xl font-serif text-[#F1E4D1]/80 mb-8 max-w-2xl mx-auto">
              If this resonates with you, book a session and see what opens up for you.
            </p>
            <Link to="/connect" className="inline-block bg-[#F4F0EA] btn-ripple border border-transparent text-[#521920] font-sans text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-[#511820] hover:text-[#F4F0EA] hover:border-[#F4F0EA] hover:-translate-y-0.5 transition-all duration-500 shadow-md hover:shadow-xl active:scale-95">
              Book a Session
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;