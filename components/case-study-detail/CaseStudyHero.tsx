"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Tag } from "lucide-react";
import { CaseStudy } from "@/data/caseStudiesData";

interface Props {
  caseStudy: CaseStudy;
}

export default function CaseStudyHero({ caseStudy }: Props) {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Gradient Orbs */}
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

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400">
              <Tag className="w-4 h-4" />
              {caseStudy.industry}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
              <MapPin className="w-4 h-4" />
              {caseStudy.location}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
              <Calendar className="w-4 h-4" />
              {caseStudy.timeline}
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {caseStudy.shortTitle}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            {caseStudy.description}
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {caseStudy.results.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
