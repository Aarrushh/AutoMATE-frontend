"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stats = [
  { value: "$10K+", label: "Avg. Agency Discovery Cost" },
  { value: "20,000+", label: "Automation Templates Trained" },
  { value: "$0", label: "Your Discovery Cost" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 radial-glow" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/5 rounded-full blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-electric-600/5 rounded-full blur-[100px] animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-electric-300 tracking-wide uppercase">
              Zero-Cost Discovery — Now Live
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-white">We understand your </span>
            <span className="text-gradient-blue">business workflow</span>
            <br />
            <span className="text-white">and find the best tools — </span>
            <span className="text-gradient-emerald">at zero cost.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            AutoMATE replaces the $10,000+ agency discovery phase. Our
            AI&nbsp;Consultant Brain absorbs your business cycle via dynamic
            chat, smart forms &amp; document uploads — then outputs a
            ready&#8209;to&#8209;code automation blueprint.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#calculator"
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-electric-500 hover:bg-electric-600 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              id="hero-cta-primary"
            >
              <span>Calculate Your Savings</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-slate-300 border border-navy-600 hover:border-electric-500/40 rounded-xl transition-all duration-300 hover:bg-white/5"
              id="hero-cta-secondary"
            >
              <span>See How It Works</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`relative p-5 rounded-xl border transition-all duration-300 hover:glow-blue ${
                  i === 2
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : i === 0
                    ? "border-rose-500/20 bg-rose-500/5"
                    : "border-navy-600 bg-navy-800/50"
                }`}
              >
                <div
                  className={`text-2xl lg:text-3xl font-bold mb-1 ${
                    i === 2
                      ? "text-emerald-400"
                      : i === 0
                      ? "text-rose-400 line-through decoration-2"
                      : "text-electric-400"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
}
