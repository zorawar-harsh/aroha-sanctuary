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
          <p className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground mb-6">Philosophy</p>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-8">My Approach</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-xl font-serif font-light text-foreground/90 italic mb-12">
            This work is gentle, grounded, and human.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-base font-sans font-light text-muted-foreground leading-relaxed mb-12">
            I do not approach emotional responses as disorders or weaknesses. Instead, I see them as natural reactions to change, loss, or prolonged stress.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-sage-dark mb-6">Our work together focuses on</p>
        </ScrollReveal>
        <div className="space-y-4 mb-12">
          {approachItems.map((item, i) => (
            <ScrollReveal key={i} delay={0.25 + i * 0.08}>
              <div className="glass-card p-5 flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                <p className="text-base font-sans font-light text-foreground/80">{item}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="border-l-2 border-sage/30 pl-8 py-4">
            <p className="text-lg font-serif font-light text-foreground/90 italic leading-relaxed">
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
          <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-8">
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
              <div className="glass-card-hover p-8 h-full">
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">{item.title}</h3>
                <p className="text-sm font-sans font-light text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Approach;
