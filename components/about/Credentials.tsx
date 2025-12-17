"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, TrendingUp, Users, Target } from "lucide-react";

export default function Credentials() {
  const stats = [
    { value: "500+", label: "Total Rankings", icon: Target },
    { value: "250%", label: "Avg. Traffic Growth", icon: TrendingUp },
    { value: "15+", label: "Industries Served", icon: Users },
    { value: "427%", label: "Avg. ROI", icon: Award },
  ];

  const certifications = [
    "Google Analytics Certified",
    "SEMrush Certified",
    "Ahrefs Certified",
    "HubSpot SEO Certified",
  ];

  const clientTypes = [
    "Fortune 500 Tech Company",
    "Leading Ecommerce Brand",
    "Healthcare Practice",
    "SaaS Startup",
    "Real Estate Agency",
    "Legal Firm",
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
            Credentials & Recognition
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Backed by certifications, proven results, and trust from businesses
            worldwide
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>

              {/* Value */}
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-cyan-600" />
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                >
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Clients */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-blue-600" />
              Client Types
            </h3>
            <ul className="space-y-3">
              {clientTypes.slice(0, 4).map((client, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                >
                  <svg
                    className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {client}
                </li>
              ))}
            </ul>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 mt-6 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300"
            >
              View all case studies
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
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800/30"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              Proven Results
            </h3>
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                  247%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Ecommerce traffic growth
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  463
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Local rankings achieved
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  312%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Healthcare organic growth
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
