"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award } from "lucide-react";
import { CaseStudy } from "@/data/caseStudiesData";

interface Props {
  caseStudy: CaseStudy;
}

export default function Results({ caseStudy }: Props) {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The Results
            </h2>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {caseStudy.results.summary}
            </p>

            {/* Key Metrics Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {caseStudy.results.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            {caseStudy.results.testimonial && (
              <div className="mt-12 p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <Award className="w-8 h-8 text-cyan-400 mb-4" />
                <blockquote className="text-xl text-white italic mb-4">
                  "{caseStudy.results.testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-white">{caseStudy.results.testimonial.author}</div>
                  <div className="text-sm text-gray-400">{caseStudy.results.testimonial.title}</div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
