import ScrollReveal from "../components/ScrollReveal";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import blog from '../assets/blog.jpeg'

const Blog = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 relative overflow-hidden bg-transparent">
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-[#52191F]/5 to-transparent -z-10" />

      <article className="max-w-4xl mx-auto">
        <div className="bg-[#F4F0EA] backdrop-blur-sm rounded-3xl shadow-xl px-8 py-12 md:px-16 md:py-16 border border-[#b37e73]/10">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            {/* <p className="text-2xl font-sans font-bold uppercase tracking-[0.2em] text-[#52191F] mb-6 flex items-center justify-center gap-2">
              <BookOpen size={16} /> Reflections
            </p> */}
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#52191F] mb-8 leading-tight">
              Feeling Stuck in Life?<br/>Here's Where to Begin
            </h1>
          </div>
        </ScrollReveal>

        {/* Image */}
        <ScrollReveal delay={0.2}>
          <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-16 shadow-lg">
            <img src={blog} alt="Feeling Stuck in Life" className="w-full h-full object-cover" />
          </div>
        </ScrollReveal>

        {/* Body */}
        <div className="max-w-2xl mx-auto">

          <ScrollReveal delay={0.3}>
            <p className="text-3xl text-[#52191F] font-serif leading-relaxed mb-10 text-center">
              "There are phases in life when, even though you're trying your best, nothing seems to move."
            </p>

            <p className="text-2xl font-serif text-[#52191F]/90 leading-relaxed mb-6">
              You keep putting in effort, but somehow you're not getting where you want to be. And that feeling… of being stuck… can quietly show up in many areas of life.
            </p>
            <p className="text-2xl font-serif text-[#52191F]/90 leading-relaxed mb-6">
              It could be your career.<br/>
              It could be a relationship.<br/>
              It could be something more internal, just a feeling that you want to move ahead, but you don't quite know how.
            </p>
            <p className="text-2xl font-serif text-[#52191F]/90 leading-relaxed mb-6">
              And the truth is, a lot of people are going through this today.
            </p>
            <ul className="list-disc pl-6 mb-8 text-[#52191F]/80 font-serif text-2xl">
              <li className="mb-2">Some are between jobs, trying to figure out their next step.</li>
              <li className="mb-2">Some are in the middle of a transition.</li>
              <li className="mb-2">Some feel stuck in relationships but are unsure what to do.</li>
              <li>And sometimes, nothing looks "wrong" from the outside, but inside, things don't feel okay.</li>
            </ul>
            <p className="text-2xl font-serif text-[#52191F]/90 leading-relaxed mb-12">
              Whatever the reason, this phase can feel heavy and confusing.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">Understanding What Is in Your Control</h2>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-4">
              In moments like this, it can help to pause and ask yourself:
            </p>
            <p className="text-2xl text-[#52191F] font-serif mb-4">
              What is actually in my control right now… and what is not?
            </p>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-6">
              There will always be things we cannot control.<br/>
              But there are also small parts of our life where we still have a say.
            </p>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-12">
              And sometimes, gently shifting your attention there can bring a little stability.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">The Space Between "Now" and "Next"</h2>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-4">
              Every stuck phase comes with a kind of in-between space.
            </p>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-4">
              A space between where you are right now… and where you want to reach.
            </p>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-6">
              It may not feel like it, but this space is not empty.<br/>
              It holds time, and it holds possibility.
            </p>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-8">
              We often spend this time worrying about what's next, or feeling frustrated about where we are.
            </p>
            <div className="bg-[#E8E1D5]/30 p-8 rounded-2xl border-l-4 border-[#b37e73] mb-12">
              <p className="text-2xl italic text-[#52191F] font-serif m-0">
                But what if this phase is not just a pause… what if it is preparing you for what's ahead?
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">Making Meaning of This Time</h2>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-6">
              Instead of waiting for life to change, you can begin to look at what needs your attention right now.
            </p>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-6">It doesn't have to be something big. It could be as simple as:</p>
            <ul className="list-none space-y-4 mb-10 font-serif text-2xl text-[#52191F]/90">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#b37e73] mt-1.5 block shrink-0"></span>
                <span>taking care of your health</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#b37e73] mt-1.5 block shrink-0"></span>
                <span>bringing some structure into your day</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#b37e73] mt-1.5 block shrink-0"></span>
                <span>reconnecting with people you haven't spoken to in a while</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#b37e73] mt-1.5 block shrink-0"></span>
                <span>improving small routines</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#b37e73] mt-1.5 block shrink-0"></span>
                <span>doing things you've been putting off</span>
              </li>
            </ul>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-12">
              There are always things we say we'll do "later."<br/>
              But when life gets busy again, that "later" often doesn't come.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">Use Your Time With Intention</h2>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-4">
              You don't have to fill your day with pressure.
            </p>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-6">
              But it can help to give your day some direction.
            </p>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-6">
              Spend some time on what will help you move forward.<br/>
              And for the rest of the time, try not to get pulled into constant overthinking or self-doubt.
            </p>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-12">
              This phase doesn't have to drain you.<br/>
              If you allow it, it can slowly strengthen you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">A Gentle Perspective</h2>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-6">
              Sometimes, when you eventually reach where you want to be, you may look back and realise:
            </p>
            <p className="text-3xl font-bold text-[#52191F] mb-6 font-serif text-center">
              "Maybe this phase had a purpose."
            </p>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-10 text-center">
              And what will matter then is not just that you reached your goal…<br/>
              but how you lived through this time.
            </p>

            <div className="flex flex-col md:flex-row gap-6 my-12">
              <div className="flex-1 bg-white/40 p-8 rounded-2xl border border-rose-200/40 text-center">
                <p className="text-2xl font-sans uppercase tracking-widest text-[#52191F]/60 mb-4">Instead of feeling...</p>
                <p className="text-2xl text-[#52191F] font-bold font-serif">"I wasted that phase…"</p>
              </div>
              <div className="flex-1 bg-white/80 p-8 rounded-2xl border border-[#b37e73]/30 shadow-md transform md:-translate-y-2 text-center">
                <p className="text-2xl font-sans uppercase tracking-widest text-[#52191F]/60 mb-4">You may feel...</p>
                <p className="text-2xl text-[#52191F] font-bold font-serif">"That time changed me in ways I didn't understand back then."</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">Closing Thought</h2>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-4">
              If you're feeling stuck right now, you're not alone.<br/>
              And this phase will not last forever.
            </p>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-6">
              You don't need to have everything figured out immediately.
            </p>
            <p className="text-2xl font-serif text-[#52191F]/90 mb-12">
              Sometimes, it's okay to just pause… understand what you're going through…<br/>
              and take one step at a time.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-20 p-12 bg-white/60 backdrop-blur-md rounded-[2rem] text-center shadow-lg border border-[#b37e73]/30 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-rose-200/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#b37e73]/10 blur-3xl" />
              <div className="relative z-10">
                <p className="text-3xl text-[#52191F] font-serif mb-8 leading-relaxed italic">
                  If you feel like talking things through, you're welcome to explore a one-on-one session in a calm and confidential space.
                </p>
                <Link
                  to="/connect"
                  className="inline-block bg-[#52191F] text-[#F1E4D1] px-10 py-4 rounded-full font-sans font-semibold tracking-wide transition-all shadow-md hover:shadow-2xl hover:bg-[#3d1118] hover:-translate-y-0.5"
                >
                  Book a Session
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
        </div>
      </article>
    </div>
  );
};

export default Blog;
