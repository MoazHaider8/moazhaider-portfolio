"use client";

import { motion } from "framer-motion";
import { CaseStudy } from "@/data/caseStudiesData";

interface Props {
  caseStudy: CaseStudy;
}

export default function CaseStudyOverview({ caseStudy }: Props) {
  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Project Overview
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Company Size</h3>
                <p className="text-base text-gray-600 dark:text-gray-400">{caseStudy.overview.companySize}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Duration</h3>
                <p className="text-base text-gray-600 dark:text-gray-400">{caseStudy.overview.duration}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Team Size</h3>
                <p className="text-base text-gray-600 dark:text-gray-400">{caseStudy.overview.teamSize}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Engagement Type</h3>
                <p className="text-base text-gray-600 dark:text-gray-400">{caseStudy.overview.engagementType}</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Project Scope</h3>
              <ul className="list-disc list-inside space-y-1 text-base text-gray-600 dark:text-gray-400">
                {caseStudy.overview.projectScope.map((scope, idx) => (
                  <li key={idx}>{scope}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
