"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, FileText, Zap, BarChart } from "lucide-react";

export default function WorkingWithMe() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      description: "We start with a deep-dive audit and strategy session",
      details: [
        "Comprehensive technical SEO audit",
        "Competitor and keyword research",
      ],
    },
    {
      number: "02",
      icon: FileText,
      title: "Strategy",
      description: "I create a custom SEO roadmap for your business",
      details: [
        "Data-driven strategy document",
        "Clear priorities and timeline",
      ],
    },
    {
      number: "03",
      icon: Zap,
      title: "Execution",
      description: "Implementation with transparent progress tracking",
      details: [
        "Weekly progress updates",
        "Real-time dashboard access",
      ],
    },
    {
      number: "04",
      icon: BarChart,
      title: "Results",
      description: "Data-driven optimization and regular reporting",
      details: [
        "Monthly performance reports",
        "Continuous improvement",
      ],
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Gradient line background */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform -translate-y-1/2 hidden lg:block" />

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
            What It's Like{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Working With Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A proven process that delivers consistent, measurable results
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 hidden lg:block transform translate-x-3" />
              )}

              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 h-full">
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 flex items-center justify-center mb-6 border border-cyan-500/20 dark:border-cyan-500/30">
                  <step.icon className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <svg
                        className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your SEO Journey
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
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Free consultation • No obligation • 24-hour response
          </p>
        </motion.div>
      </div>
    </section>
  );
}
