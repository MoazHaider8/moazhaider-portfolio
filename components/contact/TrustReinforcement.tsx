"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, FileX, DollarSign, Star } from "lucide-react";

export default function TrustReinforcement() {
  const trustSignals = [
    {
      icon: Shield,
      title: "Confidentiality Guaranteed",
      description: "Your business information is always kept strictly confidential",
    },
    {
      icon: FileX,
      title: "No Long-Term Contracts",
      description: "Month-to-month engagements with no lock-in periods",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees or surprises",
    },
    {
      icon: Star,
      title: "Proven Results",
      description: "Track record of 250%+ average traffic growth for clients",
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why You Can Trust Me With Your SEO
          </h2>
        </motion.div>

        {/* Trust Signals Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustSignals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <signal.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {signal.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {signal.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold text-lg hover:gap-3 transition-all duration-300"
          >
            See Results
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
