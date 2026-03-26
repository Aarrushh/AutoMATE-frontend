"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const capabilities = [
  {
    title: "Pattern Recognition",
    description:
      "Identifies recurring workflow patterns across industries — from e-commerce fulfillment to SaaS onboarding — to find the optimal automation architecture.",
    metric: "20,000+",
    metricLabel: "Templates Analysed",
  },
  {
    title: "Custom Invention",
    description:
      "Goes beyond copy-paste. The RLM combines template fragments to invent bespoke automations unique to your business graph — solutions no template library offers.",
    metric: "∞",
    metricLabel: "Custom Combinations",
  },
  {
    title: "Tool Matching",
    description:
      "Evaluates 500+ automation platforms (Zapier, Make, n8n, custom code) and recommends the most cost-effective stack for your specific workflow requirements.",
    metric: "500+",
    metricLabel: "Platforms Evaluated",
  },
  {
    title: "Cost Modelling",
    description:
      "Weighs manual labour costs against automation OPEX using real pricing data. Every recommendation includes a mathematical proof of ROI.",
    metric: "±3%",
    metricLabel: "Cost Accuracy",
  },
];

export default function TheBrain() {
  return (
    <section id="brain" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="section-divider w-full absolute top-0" />

      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-navy-600/30 animate-[spin_60s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-electric-500/60" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-amber-400/60" />
              </div>

              {/* Middle ring */}
              <div className="absolute inset-12 rounded-full border border-electric-500/10 animate-[spin_40s_linear_infinite_reverse]">
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-electric-400/40" />
              </div>

              {/* Inner ring */}
              <div className="absolute inset-24 rounded-full border border-electric-500/15 animate-[spin_25s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-rose-400/60" />
              </div>

              {/* Center core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 bg-electric-500/10 rounded-full blur-2xl" />
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-electric-500/20 to-electric-600/10 border border-electric-500/30 flex items-center justify-center glow-blue-strong">
                    <div className="text-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="w-10 h-10 text-electric-400 mx-auto mb-1"
                      >
                        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                      <span className="text-[10px] font-mono text-electric-300/80 uppercase tracking-wider">
                        RLM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <line x1="200" y1="130" x2="200" y2="48" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="270" y1="200" x2="352" y2="200" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="200" y1="270" x2="200" y2="352" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="130" y1="200" x2="48" y2="200" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5 mb-6"
            >
              <span className="text-xs font-medium text-electric-300 uppercase tracking-widest">
                The Technology
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            >
              <span className="text-white">Powered by the </span>
              <span className="text-gradient-blue">Consultant Brain</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-400 leading-relaxed mb-10"
            >
              Our Reinforcement Learning Model isn&apos;t a chatbot — it&apos;s
              a workflow architect trained on 20,000+ real automation templates.
              It doesn&apos;t just search a database; it <em>invents</em> custom
              solutions by understanding the mathematics of your business
              processes.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap) => (
                <motion.div
                  key={cap.title}
                  variants={fadeInUp}
                  className="group rounded-xl border border-navy-600 bg-navy-800/30 p-5 transition-all duration-300 hover:border-electric-500/30 hover:bg-navy-800/50"
                >
                  <div className="text-2xl font-bold text-electric-400 mb-0.5 font-mono">
                    {cap.metric}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-3">
                    {cap.metricLabel}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cap.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
