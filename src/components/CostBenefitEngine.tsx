"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const AGENCY_QUOTE = 10000;
const AUTOMATION_MONTHLY_OPEX = 49; // estimated avg
const MONTHS_PAYBACK = 12;

export default function CostBenefitEngine() {
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyWage, setHourlyWage] = useState(25);
  const [numEmployees, setNumEmployees] = useState(2);
  const [showResults, setShowResults] = useState(false);

  const calculate = useCallback(() => {
    setShowResults(true);
  }, []);

  const results = useMemo(() => {
    const weeklyManualCost = hoursPerWeek * hourlyWage * numEmployees;
    const monthlyManualCost = weeklyManualCost * 4.33; // avg weeks/month
    const annualManualCost = monthlyManualCost * 12;

    // Assume automation can handle ~70% of manual work
    const automationEfficiency = 0.7;
    const annualSavings = annualManualCost * automationEfficiency;
    const monthlySavings = monthlyManualCost * automationEfficiency;

    // Freelance build cost (based on complexity)
    const estimatedBuildHours = Math.max(40, hoursPerWeek * 3);
    const freelanceBuildCost = estimatedBuildHours * 75; // avg freelance rate

    const annualAutomationOpex = AUTOMATION_MONTHLY_OPEX * 12;
    const netAnnualSavings =
      annualSavings - annualAutomationOpex - freelanceBuildCost;
    const roi = ((netAnnualSavings / (freelanceBuildCost + annualAutomationOpex)) * 100);

    return {
      weeklyManualCost,
      monthlyManualCost,
      annualManualCost,
      annualSavings,
      monthlySavings,
      estimatedBuildHours,
      freelanceBuildCost,
      annualAutomationOpex,
      netAnnualSavings,
      roi,
    };
  }, [hoursPerWeek, hourlyWage, numEmployees]);

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <section
      id="calculator"
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      <div className="section-divider w-full absolute top-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6"
          >
            <span className="text-xs font-medium text-emerald-300 uppercase tracking-widest">
              ROI Calculator
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">Your </span>
            <span className="text-gradient-blue">Cost-Benefit Engine</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Input your current manual workload. See exactly how much you&apos;re
            spending on repetitive tasks and what automation will save you — vs.
            the{" "}
            <span className="text-rose-400 line-through decoration-1">
              $10,000
            </span>{" "}
            traditional agency quote.
          </motion.p>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-navy-600 bg-navy-800/30 overflow-hidden glow-blue">
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-navy-700/50">
              {/* Inputs */}
              <div className="p-8 lg:p-10">
                <h3 className="text-lg font-semibold text-white mb-1">
                  Your Current Workload
                </h3>
                <p className="text-sm text-slate-500 mb-8">
                  Tell us about the manual work you want to automate.
                </p>

                <div className="space-y-6">
                  {/* Hours per week */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="hours-per-week"
                        className="text-sm text-slate-300"
                      >
                        Hours of manual work per week
                      </label>
                      <span className="text-sm font-mono text-electric-400" aria-hidden="true">
                        {hoursPerWeek}h
                      </span>
                    </div>
                    <input
                      id="hours-per-week"
                      type="range"
                      min={5}
                      max={60}
                      value={hoursPerWeek}
                      aria-valuetext={`${hoursPerWeek} hours`}
                      onChange={(e) => {
                        setHoursPerWeek(Number(e.target.value));
                        setShowResults(false);
                      }}
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-navy-600 accent-electric-500 focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:outline-none"
                    />
                    <div className="flex justify-between text-xs text-slate-600 mt-1" aria-hidden="true">
                      <span>5h</span>
                      <span>60h</span>
                    </div>
                  </div>

                  {/* Hourly wage */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="hourly-wage"
                        className="text-sm text-slate-300"
                      >
                        Average hourly wage
                      </label>
                      <span className="text-sm font-mono text-electric-400" aria-hidden="true">
                        ${hourlyWage}
                      </span>
                    </div>
                    <input
                      id="hourly-wage"
                      type="range"
                      min={10}
                      max={100}
                      step={5}
                      value={hourlyWage}
                      aria-valuetext={`$${hourlyWage}`}
                      onChange={(e) => {
                        setHourlyWage(Number(e.target.value));
                        setShowResults(false);
                      }}
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-navy-600 accent-electric-500 focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:outline-none"
                    />
                    <div className="flex justify-between text-xs text-slate-600 mt-1" aria-hidden="true">
                      <span>$10</span>
                      <span>$100</span>
                    </div>
                  </div>

                  {/* Number of employees */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="num-employees"
                        className="text-sm text-slate-300"
                      >
                        Employees doing this work
                      </label>
                      <span className="text-sm font-mono text-electric-400" aria-hidden="true">
                        {numEmployees}
                      </span>
                    </div>
                    <input
                      id="num-employees"
                      type="range"
                      min={1}
                      max={20}
                      value={numEmployees}
                      aria-valuetext={`${numEmployees} employee${numEmployees !== 1 ? 's' : ''}`}
                      onChange={(e) => {
                        setNumEmployees(Number(e.target.value));
                        setShowResults(false);
                      }}
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-navy-600 accent-electric-500 focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:outline-none"
                    />
                    <div className="flex justify-between text-xs text-slate-600 mt-1" aria-hidden="true">
                      <span>1</span>
                      <span>20</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={calculate}
                  className="mt-8 w-full py-4 text-base font-semibold text-white bg-electric-500 hover:bg-electric-600 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  id="calculator-cta"
                >
                  Calculate My Savings
                </button>
              </div>

              {/* Results */}
              <div className="p-8 lg:p-10 bg-navy-900/30">
                <AnimatePresence mode="wait">
                  {!showResults ? (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col items-center justify-center text-center py-10"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-navy-700/50 border border-navy-600 flex items-center justify-center mb-5">
                        <svg
                          className="w-8 h-8 text-slate-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                        >
                          <path d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                        </svg>
                      </div>
                      <p className="text-sm text-slate-500 max-w-xs">
                        Adjust the sliders and click{" "}
                        <span className="text-electric-400">
                          &ldquo;Calculate My Savings&rdquo;
                        </span>{" "}
                        to see your personalised ROI analysis.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                    >
                      <h3 className="text-lg font-semibold text-white mb-6">
                        Your Savings Breakdown
                      </h3>

                      {/* Current cost */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between py-2 border-b border-navy-700/50">
                          <span className="text-sm text-slate-400">
                            Current annual manual cost
                          </span>
                          <span className="text-sm font-semibold text-rose-400">
                            {formatCurrency(results.annualManualCost)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-navy-700/50">
                          <span className="text-sm text-slate-400">
                            Estimated automation savings (70%)
                          </span>
                          <span className="text-sm font-semibold text-emerald-400">
                            {formatCurrency(results.annualSavings)}/yr
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-navy-700/50">
                          <span className="text-sm text-slate-400">
                            Freelance build cost
                          </span>
                          <span className="text-sm font-mono text-slate-300">
                            {formatCurrency(results.freelanceBuildCost)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-navy-700/50">
                          <span className="text-sm text-slate-400">
                            Automation OPEX (annual)
                          </span>
                          <span className="text-sm font-mono text-slate-300">
                            {formatCurrency(results.annualAutomationOpex)}
                          </span>
                        </div>
                      </div>

                      {/* Agency comparison */}
                      <div className="rounded-xl border border-navy-600 bg-navy-800/50 p-4 mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs uppercase tracking-widest text-slate-500">
                            Traditional Agency Quote
                          </span>
                          <span className="text-lg font-bold text-rose-400 line-through decoration-2">
                            {formatCurrency(AGENCY_QUOTE)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs uppercase tracking-widest text-slate-500">
                            AutoMATE Discovery Cost
                          </span>
                          <span className="text-lg font-bold text-emerald-400">
                            $0
                          </span>
                        </div>
                      </div>

                      {/* Big number */}
                      <div className="rounded-xl bg-gradient-to-br from-electric-500/10 to-emerald-500/10 border border-electric-500/20 p-6 text-center">
                        <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                          Net Annual Savings
                        </p>
                        <p
                          className={`text-4xl font-bold mb-1 ${
                            results.netAnnualSavings > 0
                              ? "text-gradient-emerald"
                              : "text-rose-400"
                          }`}
                        >
                          {formatCurrency(results.netAnnualSavings)}
                        </p>
                        <p className="text-sm text-slate-400">
                          {results.roi > 0
                            ? `${Math.round(results.roi)}% ROI in the first year`
                            : "Consider increasing automation scope"}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-600">
              Calculations based on a 70% automation efficiency rate using
              industry-standard templates. Actual savings may vary.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
