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
  visible: { transition: { staggerChildren: 0.15 } },
};

const steps = [
  {
    number: "01",
    title: "Dynamic Onboarding",
    description:
      "Our AI interviews you through adaptive chat, smart forms, and document uploads. It maps your entire business cycle — tools, processes, bottlenecks — in a single session.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    accent: "electric",
  },
  {
    number: "02",
    title: "Workflow Analysis",
    description:
      "The Consultant Brain cross-references your data against 20,000+ automation templates. It identifies redundant manual steps, integration opportunities, and cost-saving automations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    accent: "amber",
  },
  {
    number: "03",
    title: "Cost-Benefit Proof",
    description:
      "Before you spend a penny, AutoMATE mathematically proves the ROI. You see exactly what manual labor costs today vs. the automation OPEX — with transparent calculations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    accent: "emerald",
  },
  {
    number: "04",
    title: "Ready-to-Code Blueprint",
    description:
      "Receive a complete automation architecture: tool recommendations, integration diagrams, implementation steps, and vendor-agnostic specs any developer can execute.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    accent: "electric",
  },
];

const accentColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  electric: {
    bg: "bg-electric-500/10",
    border: "border-electric-500/20",
    text: "text-electric-400",
    dot: "bg-electric-500",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    dot: "bg-amber-500",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    dot: "bg-emerald-500",
  },
};

export default function SymbioticWorkflow() {
  return (
    <section id="workflow" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Divider */}
      <div className="section-divider w-full absolute top-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5 mb-6"
          >
            <span className="text-xs font-medium text-electric-300 uppercase tracking-widest">
              How It Works
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">From Expensive Agency Calls</span>
            <br />
            <span className="text-white">to </span>
            <span className="text-gradient-blue">Symbiotic AI Discovery</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-slate-400 leading-relaxed">
            Traditional agencies charge $10K+ just to understand your business.
            AutoMATE&apos;s Consultant Brain does this in minutes — not weeks — via
            an intelligent onboarding flow that maps your entire operation.
          </motion.p>
        </motion.div>

        {/* Comparison banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="relative rounded-2xl border border-navy-600 bg-navy-800/30 p-6 lg:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-transparent to-emerald-500/5" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Traditional */}
              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-widest text-rose-400/80 mb-2">
                  Traditional Agency
                </p>
                <p className="text-slate-400 text-sm">
                  4–6 week discovery • Multiple calls • Manual audits • $10,000–$25,000
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <div className="h-px w-12 bg-gradient-to-r from-rose-500/40 to-transparent" />
                  <div className="w-10 h-10 rounded-full border border-electric-500/30 bg-electric-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="h-px w-12 bg-gradient-to-l from-emerald-500/40 to-transparent" />
                </div>
              </div>

              {/* AutoMATE */}
              <div className="text-center md:text-right">
                <p className="text-xs uppercase tracking-widest text-emerald-400/80 mb-2">
                  AutoMATE Discovery
                </p>
                <p className="text-slate-400 text-sm">
                  30-min AI session • Zero calls • Instant analysis • $0
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {steps.map((step) => {
            const colors = accentColors[step.accent];
            return (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="group relative rounded-2xl border border-navy-600 bg-navy-800/30 p-8 transition-all duration-500 hover:border-electric-500/30 hover:bg-navy-800/50"
              >
                {/* Step number */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} transition-transform duration-300 group-hover:scale-110`}
                  >
                    {step.icon}
                  </div>
                  <span className="text-sm font-mono text-navy-600 group-hover:text-slate-500 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-electric-500/0 to-transparent group-hover:via-electric-500/30 transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
