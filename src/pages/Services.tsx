import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import zenBalance from "@/assets/zen-balance.jpg";

const offerings = [
  "Inner dissatisfaction or emotional fatigue",
  "Life transitions such as separation, divorce, or career changes",
  "Loss of clarity, confidence, or self-trust",
  'A sense of "something missing" despite effort and responsibility',
];

const formats = [
  { text: "One-to-one sessions", color: "bg-pastel-rose" },
  { text: "Online / in-person", color: "bg-pastel-lavender" },
  { text: "Short-term or ongoing support, depending on need", color: "bg-pastel-mint" },
];

const Services = () => (
  <div className="min-h-screen pt-32">
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-pastel-peach/12 blur-3xl" />
      <div className="absolute bottom-0 right-10 w-56 h-56 rounded-full bg-pastel-lavender/10 blur-3xl" />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start relative z-10">
        <div>
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
            {offerings.map((item, i) => {
              const colors = ["bg-pastel-rose", "bg-pastel-lavender", "bg-pastel-mint", "bg-pastel-peach"];
              return (
                <ScrollReveal key={i} delay={0.15 + i * 0.08}>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors duration-300">
                    <div className={`w-2.5 h-2.5 rounded-full ${colors[i]} mt-2 shrink-0`} />
                    <p className="text-base font-sans font-light text-foreground/80 leading-relaxed">{item}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.4}>
            <p className="text-lg font-serif font-light text-foreground/90 italic">
              Sessions offer a calm space to reflect, process emotions, and rebuild inner steadiness.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="relative mt-12 md:mt-24">
            <div className="absolute -inset-4 bg-gradient-to-br from-pastel-rose/20 via-pastel-lavender/15 to-pastel-mint/20 rounded-3xl blur-xl" />
            <img
              src={zenBalance}
              alt="Zen stones representing balance"
              className="relative rounded-2xl shadow-lg w-full"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-pastel-lavender/60" />
            <div className="absolute -bottom-3 -right-3 w-7 h-7 rounded-full bg-pastel-peach/50" />
          </div>
        </ScrollReveal>
      </div>
    </section>

    <div className="max-w-24 mx-auto h-px bg-gradient-to-r from-pastel-rose/50 via-pastel-lavender/50 to-pastel-mint/50" />

    {/* Format */}
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-serif font-light text-foreground mb-8">Session Format</h2>
        </ScrollReveal>
        <div className="glass-card p-8 md:p-10 mb-8 border border-pastel-mint/20">
          {formats.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex items-center gap-4 py-3 border-b border-border/20 last:border-0">
                <div className={`w-2 h-2 rounded-full ${item.color} shrink-0`} />
                <p className="text-base font-sans font-light text-foreground/80">{item.text}</p>
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
