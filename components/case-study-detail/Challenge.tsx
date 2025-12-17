"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { CaseStudy } from "@/data/caseStudiesData";

interface Props {
  caseStudy: CaseStudy;
}

export default function Challenge({ caseStudy }: Props) {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              The Challenge
            </h2>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {caseStudy.challenges.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400">
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
