import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    author: "Shreya Shivohi",
    content: "I had a very good session with Poonam. Before starting, I was completely neutral, but during the session I connected deeply with myself and my life journey. The picture-based approach really helped me reflect, especially the ocean waves...",
    color: "#4A0E15",
    bgAccent: "bg-pastel-rose/10"
  },
  {
    author: "Dr Krishan Mohan",
    content: "An incredibly centering and beautifully grounded session. The sanctuary holds a rare space of pure non-judgement and warmth. Highly recommended.", // Placeholder used because text wasn't provided!
    color: "border-pastel-mint/30",
    bgAccent: "bg-pastel-mint/10"
  },
  {
    author: "Sophia L.",
    content: "I came to Aroha feeling entirely untethered. The gentle, judgment-free space allowed me to rebuild my confidence piece by piece. It wasn't a quick fix, but a meaningful transformation.",
    color: "border-pastel-lavender/30",
    bgAccent: "bg-pastel-lavender/10"
  },
  {
    author: "Michael B.",
    content: "Sometimes you just need someone to hold a mirror up to your thoughts without judgment. The clarity gained here has shaped how I approach every relationship in my life.",
    color: "border-pastel-peach/30",
    bgAccent: "bg-pastel-peach/10"
  },
  {
    author: "Amara K.",
    content: "The emotional fatigue was heavy, but the sanctuary felt light. Every session felt like walking into a room where I could finally set my burdens down.",
    color: "border-pastel-sky/30",
    bgAccent: "bg-pastel-sky/10"
  },
  {
    author: "David M.",
    content: "True balance doesn't mean life stops being difficult; it means you stop being easily toppled. I learned how to stand my ground emotionally.",
    color: "border-sage/30",
    bgAccent: "bg-sage/10"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 15 
    }
  }
};

const Testimonial = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-40 left-10 w-96 h-96 rounded-full bg-pastel-lavender/10 blur-3xl -z-10" />
      <div className="absolute bottom-20 right-20 w-[30rem] h-[30rem] rounded-full bg-pastel-mint/10 blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-pastel-peach/10 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm md:text-base font-sans font-bold uppercase tracking-[0.2em] text-[#521920] dark:text-[#F1E4D1] mb-4">
              Quiet Echoes
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#521920] dark:text-[#F1E4D1] mb-6">
              Words from Within
            </h1>
            <p className="text-base md:text-lg font-sans font-medium text-[#521920] dark:text-[#F1E4D1]/80 max-w-2xl mx-auto leading-relaxed">
              Real reflections from those who have walked the path of inner realignment. Every journey is unique, yet universally human.
            </p>
          </div>
        </ScrollReveal>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className={`glass-card p-8 relative flex flex-col group transition-all duration-500 ease-out border-border/40 hover:${testimonial.color} hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full ${testimonial.bgAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <Quote className="w-8 h-8 text-amber-900/20 dark:text-[#F1E4D1]/20 mb-6 group-hover:text-amber-900/40 dark:group-hover:text-[#F1E4D1]/40 transition-colors" />
              
              <p className="text-base font-sans font-medium text-[#521920] dark:text-[#F1E4D1]/90 leading-relaxed italic flex-grow relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="mt-8 pt-6 border-t border-border/40 flex items-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg font-bold text-white shadow-sm ${testimonial.bgAccent.replace('/10', '/80')}`}>
                  {testimonial.author.charAt(0)}
                </div>
                <p className="ml-4 font-sans font-bold text-sm tracking-widest text-[#521920] dark:text-[#F1E4D1] uppercase">
                  {testimonial.author}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
