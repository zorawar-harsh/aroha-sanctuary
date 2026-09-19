import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { blogs } from "../data/blogs";

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Life Transitions", "Emotional Boundaries"];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 relative overflow-hidden bg-transparent">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[#52191F]/5 via-[#b37e73]/5 to-transparent -z-10" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#d1b2bc]/20 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-2/3 -right-40 w-96 h-96 rounded-full bg-[#b37e73]/15 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm sm:text-base font-sans font-bold uppercase tracking-[0.25em] text-[#b37e73] mb-4 flex items-center justify-center gap-2">
              <BookOpen size={18} /> Aroha Journal &amp; Articles
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#52191F] mb-6 leading-tight">
              Thoughts, Reflections &amp; Emotional Grounding
            </h1>
            <p className="text-lg sm:text-xl font-serif text-[#52191F]/80 leading-relaxed">
              Explore insightful pieces on navigating life transitions, cultivating inner balance, understanding your emotional world, and honouring healthy boundaries.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-sans font-semibold tracking-wide transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#52191F] text-[#F1E4D1] shadow-md shadow-[#52191F]/20 scale-105"
                    : "bg-[#F4F0EA] text-[#52191F]/80 hover:bg-[#ebdccc] hover:text-[#52191F] border border-[#b37e73]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredBlogs.map((blog, idx) => (
            <ScrollReveal key={blog.id} delay={0.15 * (idx + 1)}>
              <article className="group h-full bg-[#F4F0EA] rounded-3xl overflow-hidden border border-[#b37e73]/15 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1">
                <div>
                  {/* Image Container */}
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="block relative aspect-[16/10] overflow-hidden bg-stone-200"
                  >
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#52191F]/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    <span className="absolute top-4 left-4 bg-[#52191F]/90 backdrop-blur-md text-[#F1E4D1] text-xs font-sans font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase shadow-md">
                      {blog.category}
                    </span>
                    <span className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-[#52191F] text-xs font-sans font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <Clock size={13} /> {blog.readTime}
                    </span>
                  </Link>

                  {/* Content Container */}
                  <div className="p-6 sm:p-8">
                    <div className="text-xs font-sans font-semibold text-[#b37e73] tracking-widest uppercase mb-3">
                      {blog.date} • {blog.author}
                    </div>

                    <Link to={`/blog/${blog.slug}`}>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#52191F] mb-4 leading-snug group-hover:text-[#882d38] transition-colors duration-200">
                        {blog.title}
                      </h2>
                    </Link>

                    <p className="text-base sm:text-lg font-serif text-[#52191F]/80 leading-relaxed line-clamp-3 mb-6">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 font-sans font-bold text-sm tracking-wide text-[#52191F] group-hover:text-[#b37e73] transition-colors duration-200"
                  >
                    <span>Read Article</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Call To Action Banner */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 p-10 sm:p-14 bg-[#52191F] rounded-3xl text-center text-[#F1E4D1] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#b37e73]/20 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#f8d3c1] mb-4">
                <Sparkles size={16} /> Personal Sanctuary
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-5 leading-snug">
                Need a Supportive Space to Talk Things Through?
              </h3>
              <p className="text-lg font-serif text-[#F1E4D1]/90 mb-8 leading-relaxed">
                Whether navigating a life transition, feeling overwhelmed by relational dynamics, or seeking inner clarity, you are welcome to schedule a confidential one-on-one session.
              </p>
              <Link
                to="/connect"
                className="inline-block bg-[#f8d3c1] text-[#511820] px-9 py-4 rounded-full font-sans font-semibold tracking-wide shadow-lg hover:bg-[#f4b79d] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default BlogList;
