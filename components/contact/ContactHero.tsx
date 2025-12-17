"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ContactHero() {
  const trustSignals = [
    "Free initial consultation",
    "Strict confidentiality",
    "24-hour response time",
    "No spam, ever",
  ];

  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Gradient Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 dark:from-cyan-600/20 dark:to-blue-600/20 rounded-full blur-3xl"
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 dark:border-cyan-400/30">
            <span className="text-sm font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wide">
              Let's Talk
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Let's Talk About Your{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              SEO Goals
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            I respond to all inquiries within 24 hours. No sales pressure, just
            honest advice.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">{signal}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
