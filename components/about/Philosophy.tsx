"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Target, TrendingUp, Shield } from "lucide-react";

export default function Philosophy() {
  const principles = [
    {
      icon: Target,
      title: "Business Goals First",
      description:
        "SEO isn't about vanity metrics like 'keyword rankings.' It's about driving revenue, leads, and real business outcomes.",
      differentiator:
        "Unlike most SEOs who celebrate rankings, I optimize for conversions and ROI from day one.",
      serviceLink: "/services/technical-seo",
    },
    {
      icon: TrendingUp,
      title: "Content That Converts",
      description:
        "Rankings without conversions are worthless. I create SEO content that ranks AND persuades visitors to take action.",
      differentiator:
        "Unlike agencies that stuff keywords, I blend search optimization with conversion psychology.",
      serviceLink: "/services/content-seo",
    },
    {
      icon: Shield,
      title: "Sustainable Growth",
      description:
        "Quick wins fade fast. I build SEO foundations that deliver compounding results year after year, not temporary spikes.",
      differentiator:
        "Unlike 'SEO hackers' who chase algorithm loopholes, I focus on long-term strategies that withstand Google updates.",
      serviceLink: "/services/seo-audit",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Gradient Orb */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/20 to-purple-400/20 dark:from-cyan-600/10 dark:to-purple-600/10 rounded-full blur-3xl"
      />

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
            My SEO Philosophy:{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Strategy Over Tactics
            </span>
          </h2>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {principle.description}
                </p>

                {/* Differentiator */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800/30 mb-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-semibold text-cyan-700 dark:text-cyan-400">
                      Unlike most SEOs...
                    </span>{" "}
                    {principle.differentiator}
                  </p>
                </div>

                {/* Link */}
                <Link
                  href={principle.serviceLink}
                  className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:gap-3 transition-all duration-300"
                >
                  Learn more about my approach
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
