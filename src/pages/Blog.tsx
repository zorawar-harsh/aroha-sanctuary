import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

// Placeholder images from Unsplash optimized for calming themes
const blogPosts = [
  {
    id: 1,
    title: "Finding Stillness in a Noisy World",
    excerpt: "The modern world rarely stops moving, but we can learn to anchor ourselves amidst the chaos. Discover simple daily practices for inner quiet.",
    date: "August 12, 2024",
    category: "Mindfulness",
    imgUrl: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Navigating Life Transitions",
    excerpt: "Change is the only constant, yet it often disrupts our sense of self. How to approach career changes or relationship shifts with grace.",
    date: "September 05, 2024",
    category: "Growth",
    imgUrl: "https://images.unsplash.com/photo-1505364440864-16a704e6c388?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Emotional Weight of Responsibility",
    excerpt: "Feeling like 'something is missing' despite doing everything right? Unpacking emotional fatigue and high-functioning exhaustion.",
    date: "October 22, 2024",
    category: "Wellbeing",
    imgUrl: "https://images.unsplash.com/photo-1436891620584-47fd0e565afb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Rebuilding Self-Trust",
    excerpt: "After periods of self-doubt or trauma, learning to trust your own inner voice again is a slow but beautiful process of reclamation.",
    date: "November 14, 2024",
    category: "Healing",
    imgUrl: "https://images.unsplash.com/photo-1470138988019-3f044bb71337?q=80&w=2070&auto=format&fit=crop",
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-earthy-rust/5 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full bg-pastel-mint/10 blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-sm md:text-base font-sans font-bold uppercase tracking-[0.2em] text-[#521920] dark:text-[#F1E4D1] mb-6 flex items-center justify-center gap-2">
              <BookOpen size={16} /> Journal
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#521920] dark:text-[#F1E4D1] mb-6">
              Reflections on Growth
            </h1>
            <p className="text-base md:text-lg font-sans font-medium text-[#521920] dark:text-[#F1E4D1]/80 max-w-2xl mx-auto leading-relaxed">
              Gentle guidance, thoughtful inquiries, and practical tools to support your emotional landscape and daily living.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 0.1}>
              <motion.article 
                className="group cursor-pointer flex flex-col h-full bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm border border-border/40 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-earthy-rust/5 transition-all duration-500 ease-out hover:-translate-y-1"
              >
                {/* Image Container with Micro-interaction Zoom */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-[#1a1816]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#521920] dark:text-[#F1E4D1] shadow-sm transform group-hover:-translate-y-1 transition-transform duration-300">
                    {post.category}
                  </div>
                  <motion.img 
                    src={post.imgUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover origin-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Dark overlay for overlayed effect */}
                  <div className="absolute inset-0 bg-amber-950/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="p-8 flex flex-col flex-grow relative">
                  <p className="text-sm font-sans font-bold text-amber-900/60 dark:text-[#F1E4D1]/60 uppercase tracking-widest mb-3">
                    {post.date}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-950 dark:text-[#F1E4D1] mb-4 group-hover:text-amber-900 dark:group-hover:text-white transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-amber-950/80 dark:text-[#F1E4D1]/80 font-sans leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-6">
                    <span className="font-sans font-bold text-sm tracking-widest uppercase text-amber-950 dark:text-[#F1E4D1] group-hover:text-amber-800 transition-colors">
                      Read Article
                    </span>
                    <div className="w-10 h-10 rounded-full bg-earthy-rust/5 flex items-center justify-center group-hover:bg-earthy-rust group-hover:text-white dark:group-hover:text-[#1a1816] dark:text-[#F1E4D1] transition-all duration-300 transform group-hover:translate-x-1">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
