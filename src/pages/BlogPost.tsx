import { useParams, Link, Navigate } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { ArrowLeft, Clock, BookOpen, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { blogs } from "../data/blogs";


const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // If no slug provided, default to first blog or redirect to /blog
  const currentSlug = slug || "feeling-stuck-in-life";
  const currentBlog = blogs.find(
    (b) => b.slug === currentSlug || b.id === currentSlug
  );

  if (!currentBlog) {
    return <Navigate to="/blog" replace />;
  }

  // Find the other blog for "Read Next"
  const otherBlog = blogs.find((b) => b.slug !== currentBlog.slug) || blogs[0];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 relative overflow-hidden bg-transparent">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-[#52191F]/5 via-[#b37e73]/5 to-transparent -z-10" />

      <article className="max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-sans font-semibold text-[#52191F]/80 hover:text-[#52191F] transition-colors py-2 px-4 rounded-full bg-[#F4F0EA]/80 hover:bg-[#F4F0EA] border border-[#b37e73]/15 shadow-sm"
          >
            <ArrowLeft size={16} /> Back to all articles
          </Link>
        </div>

        <div className="bg-[#F4F0EA] backdrop-blur-sm rounded-3xl shadow-xl px-6 py-10 sm:px-12 sm:py-14 md:px-16 md:py-16 border border-[#b37e73]/10">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-[#b37e73] mb-4">
                <span>{currentBlog.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {currentBlog.readTime}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#52191F] mb-6 leading-tight">
                {currentBlog.title}
              </h1>
              <p className="text-sm sm:text-base font-sans font-medium text-[#52191F]/60 tracking-wider">
                Published {currentBlog.date} • By {currentBlog.author}
              </p>
            </div>
          </ScrollReveal>

          {/* Featured Image */}
          <ScrollReveal delay={0.15}>
            <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-14 shadow-lg border border-[#b37e73]/15 bg-stone-200">
              <img
                src={currentBlog.coverImage}
                alt={currentBlog.title}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Article Body */}
          <div className="max-w-2xl mx-auto">
            {currentBlog.slug === "feeling-stuck-in-life" ? (
              /* ================= BLOG 1 CONTENT ================= */
              <>
                <ScrollReveal delay={0.2}>
                  <p className="text-2xl sm:text-3xl text-[#52191F] font-serif leading-relaxed mb-10 text-center italic">
                    "There are phases in life when, even though you're trying your best, nothing seems to move."
                  </p>

                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 leading-relaxed mb-6">
                    You keep putting in effort, but somehow you're not getting where you want to be. And that feeling… of being stuck… can quietly show up in many areas of life.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 leading-relaxed mb-6">
                    It could be your career.<br />
                    It could be a relationship.<br />
                    It could be something more internal, just a feeling that you want to move ahead, but you don't quite know how.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 leading-relaxed mb-6">
                    And the truth is, a lot of people are going through this today.
                  </p>
                  <ul className="list-disc pl-6 mb-8 text-[#52191F]/80 font-serif text-xl sm:text-2xl space-y-2">
                    <li>Some are between jobs, trying to figure out their next step.</li>
                    <li>Some are in the middle of a transition.</li>
                    <li>Some feel stuck in relationships but are unsure what to do.</li>
                    <li>And sometimes, nothing looks "wrong" from the outside, but inside, things don't feel okay.</li>
                  </ul>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 leading-relaxed mb-12">
                    Whatever the reason, this phase can feel heavy and confusing.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">
                    Understanding What Is in Your Control
                  </h2>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-4">
                    In moments like this, it can help to pause and ask yourself:
                  </p>
                  <p className="text-xl sm:text-2xl text-[#52191F] font-serif font-semibold mb-4 pl-4 border-l-2 border-[#b37e73]">
                    What is actually in my control right now… and what is not?
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    There will always be things we cannot control.<br />
                    But there are also small parts of our life where we still have a say.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-12">
                    And sometimes, gently shifting your attention there can bring a little stability.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">
                    The Space Between "Now" and "Next"
                  </h2>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-4">
                    Every stuck phase comes with a kind of in-between space.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-4">
                    A space between where you are right now… and where you want to reach.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    It may not feel like it, but this space is not empty.<br />
                    It holds time, and it holds possibility.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-8">
                    We often spend this time worrying about what's next, or feeling frustrated about where we are.
                  </p>
                  <p className="text-xl sm:text-2xl text-[#52191F] font-serif font-medium bg-white/50 p-6 rounded-2xl border border-[#b37e73]/20 mb-12">
                    But what if this phase is not just a pause… what if it is preparing you for what's ahead?
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">
                    Making Meaning of This Time
                  </h2>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    Instead of waiting for life to change, you can begin to look at what needs your attention right now.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    It doesn't have to be something big. It could be as simple as:
                  </p>
                  <ul className="list-none space-y-4 mb-10 font-serif text-xl sm:text-2xl text-[#52191F]/90">
                    <li className="flex items-start gap-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b37e73] mt-2 block shrink-0" />
                      <span>taking care of your health</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b37e73] mt-2 block shrink-0" />
                      <span>bringing some structure into your day</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b37e73] mt-2 block shrink-0" />
                      <span>reconnecting with people you haven't spoken to in a while</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b37e73] mt-2 block shrink-0" />
                      <span>improving small routines</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b37e73] mt-2 block shrink-0" />
                      <span>doing things you've been putting off</span>
                    </li>
                  </ul>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-12">
                    There are always things we say we'll do "later."<br />
                    But when life gets busy again, that "later" often doesn't come.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">
                    Use Your Time With Intention
                  </h2>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-4">
                    You don't have to fill your day with pressure.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    But it can help to give your day some direction.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    Spend some time on what will help you move forward.<br />
                    And for the rest of the time, try not to get pulled into constant overthinking or self-doubt.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-12">
                    This phase doesn't have to drain you.<br />
                    If you allow it, it can slowly strengthen you.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">
                    A Gentle Perspective
                  </h2>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    Sometimes, when you eventually reach where you want to be, you may look back and realise:
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-[#52191F] mb-6 font-serif text-center">
                    "Maybe this phase had a purpose."
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-10 text-center">
                    And what will matter then is not just that you reached your goal…<br />
                    but how you lived through this time.
                  </p>

                  <div className="flex flex-col md:flex-row gap-6 my-12">
                    <div className="flex-1 bg-white/50 p-8 rounded-2xl border border-rose-200/40 text-center">
                      <p className="text-xs sm:text-sm font-sans uppercase tracking-widest text-[#52191F]/60 mb-4">
                        Instead of feeling...
                      </p>
                      <p className="text-xl sm:text-2xl text-[#52191F] font-bold font-serif">
                        "I wasted that phase…"
                      </p>
                    </div>
                    <div className="flex-1 bg-white/90 p-8 rounded-2xl border border-[#b37e73]/30 shadow-md md:-translate-y-2 text-center">
                      <p className="text-xs sm:text-sm font-sans uppercase tracking-widest text-[#52191F]/60 mb-4">
                        You may feel...
                      </p>
                      <p className="text-xl sm:text-2xl text-[#52191F] font-bold font-serif">
                        "That time changed me in ways I didn't understand back then."
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">
                    Closing Thought
                  </h2>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-4">
                    If you're feeling stuck right now, you're not alone.<br />
                    And this phase will not last forever.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    You don't need to have everything figured out immediately.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-8">
                    Sometimes, it's okay to just pause… understand what you're going through…<br />
                    and take one step at a time.
                  </p>
                  <p className="text-right text-lg sm:text-xl font-sans font-bold text-[#52191F] tracking-widest">
                    - POONAM DIWAN
                  </p>
                </ScrollReveal>
              </>
            ) : (
              /* ================= BLOG 2 CONTENT (FROM GOOGLE DOC) ================= */
              <>
                <ScrollReveal delay={0.2}>
                  <p className="text-2xl sm:text-3xl text-[#52191F] font-serif leading-relaxed mb-10 text-center italic">
                    "Have you ever noticed how one person's anger can change the entire atmosphere around them?"
                  </p>

                  <div className="space-y-3 mb-8 bg-white/40 p-6 sm:p-8 rounded-2xl border border-[#b37e73]/20">
                    <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 leading-relaxed">
                      A small disagreement becomes an argument.
                    </p>
                    <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 leading-relaxed">
                      A simple mistake becomes a reason to shout.
                    </p>
                    <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 leading-relaxed">
                      A passing comment turns into an insult.
                    </p>
                    <p className="text-xl sm:text-2xl font-serif text-[#52191F] font-semibold leading-relaxed pt-2">
                      And slowly, everyone around that person starts becoming careful.
                    </p>
                  </div>

                  <div className="pl-6 border-l-2 border-[#b37e73]/50 my-8 space-y-2 italic font-serif text-lg sm:text-xl text-[#52191F]/80">
                    <p>What should I say?</p>
                    <p>Will this upset them?</p>
                    <p>Should I just stay quiet?</p>
                    <p>Maybe I did something wrong.</p>
                  </div>

                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 leading-relaxed mb-4">
                    When this happens often enough, something important can change.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F] font-semibold leading-relaxed mb-12">
                    You may stop living freely and start managing someone else's reactions.
                  </p>
                </ScrollReveal>

                {/* Section 1 */}
                <ScrollReveal delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">
                    Sometimes, the anger isn't really about the moment
                  </h2>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-4">
                    A person who reacts strongly to every little thing may be carrying much more than what you can see.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F] font-medium mb-6 bg-rose-50/60 p-4 rounded-xl border border-rose-200/40">
                    Frustration. Stress. Hurt. Shame. Disappointment. Helplessness. Unmet expectations.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    Sometimes, there is also a constant gap between where they are and where they believe they should be.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    They may have dreams, ambitions and expectations from life, but keep running into obstacles. Over time, that frustration can build.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    And when someone hasn't learned how to understand and regulate those emotions, they may end up expressing their pain through anger.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6 italic">
                    They may think: <span className="font-semibold">“Everyone is irritating me.”</span><br />
                    But the real story may be much bigger than the person standing in front of them.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    Pain can be one of the things underneath persistent anger, but it isn't the only explanation.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F] font-bold mb-6">
                    And this distinction matters.
                  </p>

                  {/* Highlight Box */}
                  <div className="my-10 p-8 bg-white/80 rounded-2xl border border-[#b37e73]/30 shadow-md">
                    <p className="text-xl sm:text-2xl font-serif text-[#52191F] leading-relaxed mb-4">
                      <span className="font-bold">Anger is an emotion. What you do with it is a behaviour.</span>
                    </p>
                    <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 leading-relaxed mb-4">
                      Feeling angry is human.
                    </p>
                    <p className="text-xl sm:text-2xl font-serif text-[#52191F] font-semibold leading-relaxed">
                      Insulting, humiliating, threatening or repeatedly degrading another person is a choice of behaviour, and understanding someone's pain does not mean excusing the way they treat people.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Section 2 */}
                <ScrollReveal delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">
                    But what happens to the person on the receiving end?
                  </h2>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    This side of anger is often overlooked.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-4">
                    When you are constantly around someone's outbursts, you may begin to:
                  </p>

                  <ul className="list-none space-y-3 mb-8 font-serif text-xl sm:text-2xl text-[#52191F]/90">
                    <li className="flex items-start gap-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b37e73] mt-2 block shrink-0" />
                      <span>anticipate the next reaction</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b37e73] mt-2 block shrink-0" />
                      <span>overthink what you say and do</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b37e73] mt-2 block shrink-0" />
                      <span>become excessively careful</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b37e73] mt-2 block shrink-0" />
                      <span>suppress your own needs</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b37e73] mt-2 block shrink-0" />
                      <span>feel responsible for keeping the peace</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b37e73] mt-2 block shrink-0" />
                      <span>question yourself more than you used to</span>
                    </li>
                  </ul>

                  <p className="text-xl sm:text-2xl font-serif text-[#52191F] font-semibold leading-relaxed mb-8">
                    You may even start spending so much energy managing their reactions that you stop living your own life.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    And there is another way this can show up.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    Instead of constantly trying to keep the other person calm, you may become consumed by your own hurt:
                  </p>

                  <div className="space-y-3 mb-8 bg-white/40 p-6 sm:p-8 rounded-2xl border border-[#b37e73]/20 font-serif text-xl sm:text-2xl text-[#52191F]/90">
                    <p>You keep replaying what happened.</p>
                    <p>You keep explaining to yourself why you were treated unfairly.</p>
                    <p>You keep thinking about how much you have suffered.</p>
                    <p>You begin to see yourself only through the experience of being hurt.</p>
                  </div>

                  <p className="text-xl sm:text-2xl font-serif text-[#52191F] font-semibold leading-relaxed mb-6">
                    That can also keep you stuck.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-2">
                    Your experience matters.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    Your pain matters.
                  </p>
                  <p className="text-2xl font-serif text-[#52191F] font-bold mb-12">
                    But healing also means slowly learning: What is mine to handle, and what isn't?
                  </p>
                </ScrollReveal>

                {/* Section 3: Mine vs Not Mine */}
                <ScrollReveal delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">
                    What belongs to me?
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                    {/* Mine Card */}
                    <div className="bg-white/80 p-8 rounded-3xl border border-[#b37e73]/40 shadow-lg">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 rounded-full bg-[#52191F] text-[#F1E4D1]">
                          <ShieldCheck size={20} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-[#52191F]">
                          Mine
                        </h3>
                      </div>
                      <ul className="space-y-3 font-serif text-xl text-[#52191F]/90">
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#52191F]" />
                          <span>My emotions</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#52191F]" />
                          <span>My responses</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#52191F]" />
                          <span>My boundaries</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#52191F]" />
                          <span>My communication</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#52191F]" />
                          <span>My decision to stay or step away</span>
                        </li>
                      </ul>
                    </div>

                    {/* Not Mine Card */}
                    <div className="bg-rose-50/70 p-8 rounded-3xl border border-rose-200/60 shadow-md">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 rounded-full bg-[#b37e73] text-white">
                          <HeartHandshake size={20} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-[#52191F]">
                          Not Mine
                        </h3>
                      </div>
                      <ul className="space-y-3 font-serif text-xl text-[#52191F]/90">
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#b37e73]" />
                          <span>Someone else's temper</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#b37e73]" />
                          <span>Someone else's interpretation of me</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#b37e73]" />
                          <span>Someone else's choice to insult me</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#b37e73]" />
                          <span>Someone else's refusal to regulate</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4 my-8 font-serif text-xl sm:text-2xl text-[#52191F]/95">
                    <p>You can care about someone without taking responsibility for their emotions.</p>
                    <p>You can understand someone's pain without accepting their disrespect.</p>
                    <p className="font-semibold text-[#52191F]">
                      And you can have compassion without abandoning yourself.
                    </p>
                  </div>

                  <div className="p-6 sm:p-8 bg-white/60 rounded-2xl border-l-4 border-[#52191F] my-8 font-serif text-xl sm:text-2xl text-[#52191F]">
                    <p className="font-bold mb-3">Understanding is not the same as tolerating.</p>
                    <p className="mb-3 text-[#52191F]/90">
                      You can understand why someone behaves the way they do. You can even have compassion for what they may have been through.
                    </p>
                    <p className="font-semibold">
                      And still decide: “Being shouted at, insulted or humiliated is not something I will accept.”
                    </p>
                  </div>
                </ScrollReveal>

                {/* Section 4: Therapy */}
                <ScrollReveal delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 font-serif text-[#52191F]">
                    Therapy isn't about becoming a person who never gets angry
                  </h2>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-4">
                    Anger is a normal human emotion. Therapy is not about removing it.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    It is about learning to understand what your anger is trying to tell you, and what you choose to do with it.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-6">
                    It can help a person recognise their triggers, understand what sits underneath their anger, interrupt impulsive reactions, communicate differently, tolerate frustration and develop healthier ways of dealing with difficult emotions.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-8">
                    And for someone who has spent years on the receiving end of anger, therapy can offer a different kind of healing.
                  </p>

                  <div className="flex flex-col md:flex-row gap-6 my-10">
                    <div className="flex-1 bg-white/40 p-6 sm:p-8 rounded-2xl border border-rose-200/40 text-center">
                      <p className="text-xs sm:text-sm font-sans uppercase tracking-widest text-[#52191F]/60 mb-3">
                        Move away from...
                      </p>
                      <p className="text-xl sm:text-2xl text-[#52191F] font-bold font-serif">
                        “What is wrong with me?”
                      </p>
                    </div>
                    <div className="flex-1 bg-white/90 p-6 sm:p-8 rounded-2xl border border-[#b37e73]/30 shadow-md text-center">
                      <p className="text-xs sm:text-sm font-sans uppercase tracking-widest text-[#52191F]/60 mb-3">
                        To discovering...
                      </p>
                      <p className="text-xl sm:text-2xl text-[#52191F] font-bold font-serif">
                        “What happened to me, what is mine to carry, and what can I choose differently now?”
                      </p>
                    </div>
                  </div>

                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-4">
                    Your anger needs a place to go. It doesn't need another person to land on.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-8">
                    And if you have been living around someone else's anger, remember:
                  </p>

                  {/* Master Quote */}
                  <div className="p-8 sm:p-10 bg-[#52191F] text-[#F1E4D1] rounded-3xl text-center shadow-xl my-10">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold leading-relaxed">
                      "Someone else's emotional storm doesn't have to become your weather."
                    </p>
                  </div>

                  <p className="text-xl sm:text-2xl font-serif text-[#52191F]/90 mb-4">
                    Sometimes, people need help expressing what hurts.<br />
                    Sometimes, people need help recovering from what hurts them.
                  </p>
                  <p className="text-xl sm:text-2xl font-serif text-[#52191F] font-bold mb-8">
                    Both deserve support.
                  </p>

                  <p className="text-right text-lg sm:text-xl font-sans font-bold text-[#52191F] tracking-widest">
                    - POONAM DIWAN
                  </p>
                </ScrollReveal>
              </>
            )}

            {/* Read Next Card */}
            <ScrollReveal delay={0.2}>
              <div className="mt-16 pt-10 border-t border-[#b37e73]/20">
                <p className="text-xs font-sans uppercase tracking-[0.2em] text-[#b37e73] font-bold mb-4">
                  Read Next Article
                </p>
                <Link
                  to={`/blog/${otherBlog.slug}`}
                  className="group block p-6 bg-white/70 hover:bg-white rounded-2xl border border-[#b37e73]/20 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
                    <div>
                      <span className="text-xs font-sans font-bold text-[#b37e73] uppercase tracking-wider">
                        {otherBlog.category} • {otherBlog.readTime}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#52191F] mt-1 group-hover:text-[#882d38] transition-colors">
                        {otherBlog.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-sans font-bold text-[#52191F] group-hover:text-[#b37e73] transition-colors shrink-0">
                      <span>Read</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </ScrollReveal>

            {/* Call To Action Box */}
            <ScrollReveal delay={0.2}>
              <div className="mt-16 p-8 sm:p-12 bg-white/70 backdrop-blur-md rounded-[2rem] text-center shadow-lg border border-[#b37e73]/30 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-rose-200/20 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#b37e73]/10 blur-3xl" />
                <div className="relative z-10">
                  <p className="text-2xl sm:text-3xl text-[#52191F] font-serif mb-8 leading-relaxed italic">
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

export default BlogPost;
