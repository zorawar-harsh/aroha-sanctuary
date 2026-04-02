import ScrollReveal from "../components/ScrollReveal";

const approachItems = [
  "Emotional understanding",
  "Inner clarity",
  "Restoring self-trust",
  "Creating calm, grounded movement forward",
];

const Approach = () => (
  <div className="min-h-screen pt-32">
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-base font-sans font-bold uppercase tracking-[0.2em] text-amber-900 mb-6">Philosophy</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-amber-950 mb-8">My Approach</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-2xl font-serif font-semibold text-amber-900/90 italic mb-12">
            This work is gentle, grounded, and human.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-lg font-sans font-medium text-amber-950/90 leading-relaxed mb-12">
            I do not approach emotional responses as disorders or weaknesses. Instead, I see them as natural reactions to change, loss, or prolonged stress.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-base font-sans font-bold uppercase tracking-[0.2em] text-amber-900 mb-6">Our work together focuses on</p>
        </ScrollReveal>
        <div className="space-y-4 mb-12">
          {approachItems.map((item, i) => (
            <ScrollReveal key={i} delay={0.25 + i * 0.08}>
              <div className="glass-card p-5 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-amber-800 shrink-0" />
                <p className="text-lg font-sans font-medium text-amber-950/90">{item}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="border-l-4 border-amber-800/40 pl-8 py-4">
            <p className="text-xl font-serif font-semibold text-amber-900/90 italic leading-relaxed">
              Progress is not rushed. Change happens at a pace that feels steady and respectful.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* What sessions feel like */}
    <section className="section-padding bg-fog/30">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-10">
            What This Feels Like
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Pace", desc: "Sessions move gently, at your own rhythm. There's no rush to arrive at conclusions." },
            { title: "Boundaries", desc: "Your space, your story. What's shared stays held with complete discretion and care." },
            { title: "Emotionally", desc: "You may feel lighter, clearer, or more grounded. Sometimes you may feel tender — and that's respected too." },
            { title: "What I don't do", desc: "I don't diagnose, label, or prescribe. This is not about fixing — it's about understanding." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="glass-card-hover p-8 h-full border-t-4 border-amber-800/30">
                <h3 className="font-serif text-2xl font-bold text-amber-950 mb-4">{item.title}</h3>
                <p className="text-base font-sans font-medium text-amber-900/80 leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Approach;
