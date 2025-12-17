"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, FileText } from "lucide-react";

export default function WhatHappensNext() {
  const steps = [
    {
      icon: Clock,
      title: "24-Hour Response",
      description:
        "I'll review your inquiry and respond within one business day with next steps",
    },
    {
      icon: Calendar,
      title: "Discovery Call",
      description:
        "We'll schedule a 30-minute call to discuss your goals and challenges (no obligation)",
    },
    {
      icon: FileText,
      title: "Custom Proposal",
      description:
        "If it's a fit, I'll send a detailed proposal outlining strategy, timeline, and pricing",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Happens After You Contact Me
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative text-center"
            >
              {/* Number badge */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white dark:bg-gray-800 border-4 border-cyan-500 dark:border-cyan-400 mb-6 shadow-lg z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/30 dark:to-blue-500/30" />
                <step.icon className="w-10 h-10 text-cyan-600 dark:text-cyan-400 relative z-10" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
