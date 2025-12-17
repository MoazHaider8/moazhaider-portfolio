"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies, getCaseStudiesByIndustry } from "@/data/caseStudiesData";

interface Props {
  currentSlug: string;
  industry: string;
}

export default function RelatedCaseStudies({ currentSlug, industry }: Props) {
  // Get related case studies from the same industry, excluding current
  let relatedCases = getCaseStudiesByIndustry(industry).filter(
    (cs) => cs.slug !== currentSlug
  );

  // If less than 2 related, add from other industries
  if (relatedCases.length < 2) {
    const otherCases = caseStudies.filter(
      (cs) => cs.slug !== currentSlug && cs.industry !== industry
    );
    relatedCases = [...relatedCases, ...otherCases].slice(0, 2);
  } else {
    relatedCases = relatedCases.slice(0, 2);
  }

  if (relatedCases.length === 0) return null;

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            More Case Studies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {relatedCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link
                  href={`/case-studies/${caseStudy.slug}`}
                  className="block p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400">
                      {caseStudy.industry}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {caseStudy.shortTitle}
                  </h3>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800/30 mb-4">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1">
                      {caseStudy.keyMetric.value}
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      {caseStudy.keyMetric.label}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold group-hover:gap-3 transition-all duration-300">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View All Case Studies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
