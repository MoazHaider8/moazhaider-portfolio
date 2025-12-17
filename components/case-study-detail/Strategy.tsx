"use client";

import { motion } from "framer-motion";
import { Target, CheckCircle } from "lucide-react";
import { CaseStudy } from "@/data/caseStudiesData";

interface Props {
  caseStudy: CaseStudy;
}

export default function Strategy({ caseStudy }: Props) {
  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Strategic Approach
            </h2>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="grid gap-6 mt-8">
              {caseStudy.strategy.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 pl-20 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800/30"
                >
                  <div className="absolute left-6 top-6 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
