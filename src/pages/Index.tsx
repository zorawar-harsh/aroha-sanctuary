import { Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import ZenStoneScene from "../components/ZenStoneScene";

const services = [
  {
    title: "Clarity",
    description: "Making sense of emotions, confusion, and inner noise—without judgement or labels.",
  },
  {
    title: "Balance",
    description: "Finding emotional steadiness and grounding during times of uncertainty or change.",
  },
  {
    title: "A Calm Way Forward",
    description: "Supporting thoughtful, grounded decisions so life can move ahead with confidence and composure.",
  },
];

const forYouItems = [
  "Feel emotionally unsettled or unfulfilled despite managing life well",
  "Are navigating a major life transition or emotional turning point",
  "Feel unsure about your direction or next steps",
  "Want calm, reflective support rather than quick fixes",
  "Value depth, self-awareness, and inner growth",
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="min-h-screen flex flex-col items-center justify-center section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-warm/50 via-background to-background" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground mb-8"
        >
          Inner Balance & Life Transitions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-foreground leading-[1.15] mb-6"
        >
          Mindshift for Life{" "}
          <span className="text-gradient">Transformation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl font-sans font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Supporting individuals through inner dissatisfaction and major life changes with clarity, calm, and care.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-sm font-sans text-muted-foreground/70 mt-4 italic"
        >
          A gentle space to pause, reflect, and find your way forward.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="relative z-10 mt-8 w-full max-w-lg mx-auto"
      >
        <Suspense
          fallback={
            <div className="w-full h-[400px] flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-sage/10 animate-breathe" />
            </div>
          }
        >
          <ZenStoneScene />
        </Suspense>
      </motion.div>
    </section>

    {/* Intro */}
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-xl md:text-2xl font-serif font-light text-foreground leading-relaxed mb-8">
            Life doesn't always fall apart loudly.
            <br />
            <span className="text-muted-foreground">
              Sometimes, everything looks fine on the outside, yet something feels unsettled within.
            </span>
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-base font-sans font-light text-muted-foreground leading-relaxed">
            At Aroha, we support individuals who are navigating inner dissatisfaction or major life transitions—such as separation, divorce, career shifts, or prolonged emotional strain—to reconnect with clarity, balance, and a sense of fulfilment.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p className="text-base font-sans font-light text-muted-foreground leading-relaxed mt-4">
            This is a space for quiet reflection, emotional grounding, and steady inner realignment.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* How I Work - Cards */}
    <section className="section-padding bg-fog/30">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-center text-foreground mb-16">
            How I Work
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.15}>
              <div className="glass-card-hover p-8 md:p-10 h-full flex flex-col">
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-sage-dark mb-4">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-serif font-medium text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-sm font-sans font-light text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Who This Is For */}
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-center text-foreground mb-4">
            Who This Is For
          </h2>
          <p className="text-center text-muted-foreground font-sans text-base mb-12">
            This work may be right for you if you:
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {forYouItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-sage mt-2 shrink-0" />
                <p className="text-base font-sans font-light text-foreground/80 leading-relaxed">
                  {item}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-gradient-to-b from-background to-fog/30">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-xl md:text-2xl font-serif font-light text-foreground leading-relaxed mb-8">
            If this resonates with you,
            <br />
            you're welcome to explore further or reach out when it feels right.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link
            to="/contact"
            className="inline-block btn-ripple bg-sage/10 border border-sage/20 text-foreground font-sans text-sm px-8 py-3.5 rounded-full hover:bg-sage/20 transition-all duration-500"
          >
            Begin a Conversation
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default Index;
