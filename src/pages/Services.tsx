import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

const offerings = [
  "Inner dissatisfaction or emotional fatigue",
  "Life transitions such as separation, divorce, or career changes",
  "Loss of clarity, confidence, or self-trust",
  'A sense of "something missing" despite effort and responsibility',
];

const formats = [
  "One-to-one sessions",
  "Online / in-person",
  "Short-term or ongoing support, depending on need",
];

const Services = () => (
  <div className="min-h-screen pt-32">
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground mb-6">Services</p>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-8">
            Individual Counselling Sessions
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-base font-sans font-light text-muted-foreground leading-relaxed mb-8">
            These sessions are designed for individuals who are experiencing:
          </p>
        </ScrollReveal>

        <div className="space-y-3 mb-12">
          {offerings.map((item, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.08}>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-sage mt-2 shrink-0" />
                <p className="text-base font-sans font-light text-foreground/80 leading-relaxed">{item}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-lg font-serif font-light text-foreground/90 italic mb-16">
            Sessions offer a calm space to reflect, process emotions, and rebuild inner steadiness.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <div className="max-w-24 mx-auto h-px bg-border/50" />

    {/* Format */}
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-serif font-light text-foreground mb-8">Session Format</h2>
        </ScrollReveal>
        <div className="glass-card p-8 md:p-10 mb-8">
          {formats.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex items-center gap-4 py-3 border-b border-border/20 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                <p className="text-base font-sans font-light text-foreground/80">{item}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <p className="text-sm font-sans text-muted-foreground mb-8">
            Pricing and booking details can be shared on request or via contact.
          </p>
          <Link
            to="/contact"
            className="inline-block btn-ripple bg-sage/10 border border-sage/20 text-foreground font-sans text-sm px-8 py-3.5 rounded-full hover:bg-sage/20 transition-all duration-500"
          >
            Reach Out
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default Services;
