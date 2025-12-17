"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, Sparkles, Lock, DollarSign } from "lucide-react";

export default function Differentiators() {
  const differentiators = [
    {
      icon: User,
      title: "Direct Access",
      description:
        "You work directly with me—no account managers, no junior staff, no communication barriers. Every strategy, every decision, every optimization comes from my expertise.",
      highlight: "No middlemen, just results",
    },
    {
      icon: Sparkles,
      title: "Custom Strategy",
      description:
        "I don't use cookie-cutter templates or one-size-fits-all approaches. Every SEO strategy is tailored to your specific business goals, industry, and competitive landscape.",
      highlight: "Your business deserves unique solutions",
    },
    {
      icon: Lock,
      title: "Transparent Reporting",
      description:
        "No vanity metrics or inflated numbers. You get honest, transparent reports showing real traffic, conversions, and ROI—not just keyword rankings.",
      highlight: "Real metrics, not fluff",
    },
    {
      icon: DollarSign,
      title: "Long-Term Partnership",
      description:
        "I'm not here for a quick project and disappear. I build lasting partnerships focused on sustainable growth, not transactional relationships.",
      highlight: "Invested in your success",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Businesses Choose Me{" "}
            <span className="text-gray-600 dark:text-gray-400">
              Over Agencies
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The advantages of working with an expert consultant vs. a large agency
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Gradient border on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <diff.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {diff.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {diff.description}
                </p>

                {/* Highlight */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 border border-cyan-500/20 dark:border-cyan-500/30">
                  <svg
                    className="w-4 h-4 text-cyan-600 dark:text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                    {diff.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold text-lg hover:gap-3 transition-all duration-300"
          >
            Experience the difference
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
