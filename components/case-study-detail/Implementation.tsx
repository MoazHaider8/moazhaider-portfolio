"use client";

import { motion } from "framer-motion";
import { Settings, CheckCircle } from "lucide-react";
import { CaseStudy } from "@/data/caseStudiesData";

interface Props {
  caseStudy: CaseStudy;
}

export default function Implementation({ caseStudy }: Props) {
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
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Implementation Process
            </h2>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="space-y-8 mt-8">
              {caseStudy.implementation.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {phase.phase}
                      </h3>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {phase.timeline}
                      </span>
                    </div>
                  </div>

                  {phase.tasks && phase.tasks.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-3">
                        Key Tasks
                      </h4>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
