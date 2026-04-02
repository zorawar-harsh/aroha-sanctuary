import ScrollReveal from "../components/ScrollReveal";

const reflections = [
  {
    text: "Sometimes the bravest thing you can do is sit still with what you feel — without rushing to fix it.",
    date: "March 2026",
  },
  {
    text: "Clarity doesn't come from thinking harder. It comes from creating enough space to hear what you already know.",
    date: "February 2026",
  },
  {
    text: "You don't need to have it all figured out before you begin. You just need to be willing to begin.",
    date: "January 2026",
  },
  {
    text: "Healing isn't about going back to who you were. It's about becoming someone who can hold all of who you are.",
    date: "December 2025",
  },
  {
    text: "The discomfort you feel isn't a sign that something is wrong. It may be a sign that something is ready to shift.",
    date: "November 2025",
  },
];

const Reflections = () => (
  <div className="min-h-screen pt-32">
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground mb-6">Quiet Words</p>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4">Reflections</h1>
          <p className="text-base font-sans font-light text-muted-foreground mb-16">
            Thoughts shared without schedule or expectation — just when they feel true.
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {reflections.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card-hover p-8 md:p-10">
                <p className="text-lg md:text-xl font-serif font-light text-foreground/90 leading-relaxed italic mb-4">
                  "{r.text}"
                </p>
                <p className="text-xs font-sans text-muted-foreground uppercase tracking-wider">{r.date}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Reflections;
