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

export default function CTASection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="section-divider w-full absolute top-0" />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-electric-500/5 rounded-full blur-[160px]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">Ready to Replace the </span>
          <span className="text-rose-400 line-through decoration-2">
            $10K Discovery Phase
          </span>
          <span className="text-white">?</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Start your free workflow audit today. AutoMATE&apos;s Consultant Brain
          will map your entire business process and deliver a ready&#8209;to&#8209;code
          automation blueprint — at zero cost.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#calculator"
            className="group inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-white bg-electric-500 hover:bg-electric-600 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            id="cta-primary"
          >
            <span>Start Free Audit</span>
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
          <span className="text-sm text-slate-500">
            No credit card required
          </span>
        </motion.div>

        {/* Social proof */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 flex items-center justify-center gap-8 flex-wrap"
        >
          {[
            "20,000+ templates trained",
            "500+ platforms evaluated",
            "Zero discovery cost",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-slate-400">{item}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
