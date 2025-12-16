import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/data";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proven Results & Case Studies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real campaigns, measurable outcomes. See how strategic SEO drives traffic, leads, and revenue across diverse industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 font-semibold mb-2">
                  <TrendingUp size={16} />
                  <span>{study.industry}</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  📍 {study.location}
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Challenge
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {study.challenge}
                </p>
              </div>

              {/* Actions */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Actions Taken
                </h4>
                <ul className="space-y-1">
                  {study.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-primary-600 dark:text-primary-400">•</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div className="bg-primary-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Results
                </h4>
                <div className="space-y-2">
                  {study.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {outcome.metric}
                      </span>
                      <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                        {outcome.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href={`/case-studies/${study.slug}`}
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold text-sm hover:gap-2 transition-all"
              >
                Read full case study
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            More detailed case studies available upon request
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all"
          >
            Request case study portfolio
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
