import ScrollReveal from "../components/ScrollReveal";
import therapySession from "@/assets/therapy-session.jpg";
import meditationHero from "@/assets/meditation-hero.jpg";

const About = () => (
  <div className="min-h-screen pt-32">
    {/* About Aroha */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-20 right-10 w-48 h-48 rounded-full bg-earthy-rust/20 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-earthy-forest/15 blur-3xl" />

      <div className="max-w-3xl mx-auto relative z-10">
        <ScrollReveal>
          <p className="text-base md:text-lg font-sans font-bold uppercase tracking-[0.2em] text-amber-900 dark:text-[#F1E4D1] mb-6">About</p>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-amber-950 dark:text-[#F1E4D1] mb-8">Aroha</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-2xl md:text-3xl font-serif font-semibold text-amber-900/90 dark:text-[#F1E4D1]/90 italic mb-8">
            Mindshift Therepy by Poonam Diwan
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl font-sans font-medium text-amber-950/90 dark:text-[#F1E4D1]/90 leading-relaxed mb-6">
            This practice was created as a quiet, supportive space for people who are experiencing inner change—often during moments when life feels emotionally disorienting or unsteady.
          </p>
          <p className="text-lg md:text-xl font-sans font-medium text-amber-950/90 dark:text-[#F1E4D1]/90 leading-relaxed">
            Here emotional responses to life events are not seen as problems to be fixed, but as signals asking for understanding, space, and care.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Divider */}
    <div className="max-w-24 mx-auto h-1 rounded-full bg-gradient-to-r from-earthy-rust/50 via-earthy-forest/50 to-earthy-ochre/50" />

    {/* About Poonam */}
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-amber-950 dark:text-[#F1E4D1] mb-8">About Poonam</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg md:text-xl font-serif font-semibold text-amber-900/90 dark:text-[#F1E4D1]/90 italic mb-8">
                Hi, I'm Poonam.
              </p>
            </ScrollReveal>
            <div className="space-y-6">
              <ScrollReveal delay={0.15}>
                <p className="text-base md:text-lg font-sans font-medium text-amber-950/90 dark:text-[#F1E4D1]/90 leading-relaxed">
                  I work with individuals who appear steady on the outside but feel unsettled or disconnected within—especially during or after significant life changes.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-base md:text-lg font-sans font-medium text-amber-950/90 dark:text-[#F1E4D1]/90 leading-relaxed">
                  My approach is calm, non-pathologising, and reflective. I believe that clarity and emotional balance emerge naturally when people are given a safe, respectful space to slow down and reconnect with themselves.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p className="text-base md:text-lg font-sans font-medium text-amber-950/90 dark:text-[#F1E4D1]/90 leading-relaxed">
                  My role is not to tell you what to do, but to support you in finding your own grounded understanding and direction.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-earthy-forest/30 via-earthy-rust/20 to-earthy-clay/30 rounded-3xl blur-lg" />
              <img
                src={therapySession}
                alt="Calm therapy space"
                className="relative rounded-2xl shadow-lg w-full"
                loading="lazy"
                width={800}
                height={600}
              />
              {/* Earthy accent dots */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-earthy-rust/60" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-earthy-ochre/60" />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 glass-card p-8 md:p-10 border-2 border-earthy-forest/30">
            <p className="text-base md:text-lg font-sans font-semibold text-amber-950/90 dark:text-[#F1E4D1]/90 leading-relaxed italic">
              "Life coaching, at its core, is a journey of self-discovery — learning to recognize inner obstacles, move beyond fear, reconnect with one's innate wisdom, and take conscious action toward meaningful goals."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Philosophy with meditation image */}
    <section className="section-padding bg-fog/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-earthy-sun/15 blur-3xl" />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-tr from-earthy-ochre/30 to-earthy-sun/20 rounded-3xl blur-lg" />
            <img
              src={meditationHero}
              alt="Inner peace and meditation"
              className="relative rounded-2xl shadow-lg w-full"
              loading="lazy"
              width={1280}
              height={720}
            />
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <p className="text-base md:text-lg font-sans font-medium text-amber-950/90 dark:text-[#F1E4D1]/90 leading-relaxed mb-6">
              I do not offer ready-made answers or advice. Instead, I walk alongside you — holding space, asking the right questions, and helping you bridge the gap between where you are and where you wish to be.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base md:text-lg font-sans font-medium text-amber-950/90 dark:text-[#F1E4D1]/90 leading-relaxed mb-6">
              Through self-awareness, emotional clarity, and grounded psychological tools, I support individuals in uncovering their true potential, making aligned choices, and building a life that feels authentic — both personally and professionally.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl font-serif font-bold text-amber-900/90 dark:text-[#F1E4D1]/90 italic">
              Coaching with me is not about fixing yourself. It is about remembering your strengths, reclaiming your voice, and learning to trust yourself again.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </div>
);

export default About;
