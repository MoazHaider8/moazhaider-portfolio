"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies, getAllIndustries, getAllServices } from "@/data/caseStudiesData";
import { MapPin, ArrowRight } from "lucide-react";

export default function CaseStudiesGrid() {
  const [filter, setFilter] = useState({ type: "all", value: "all" });

  const industries = getAllIndustries();
  const services = getAllServices();

  const filteredCaseStudies = caseStudies.filter((cs) => {
    if (filter.type === "industry") {
      return cs.industry === filter.value;
    }
    if (filter.type === "service") {
      return cs.service.includes(filter.value);
    }
    return true;
  });

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <button
            onClick={() => setFilter({ type: "all", value: "all" })}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              filter.type === "all"
                ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            All Case Studies
          </button>

          {/* Industry Filters */}
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setFilter({ type: "industry", value: industry })}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter.type === "industry" && filter.value === industry
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Showing {filteredCaseStudies.length} of {caseStudies.length} case studies
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Gradient border on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                {/* Badges */}
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400">
                    {caseStudy.industry}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                    {caseStudy.service[0]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {caseStudy.shortTitle}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <MapPin className="w-4 h-4" />
                  {caseStudy.location}
                </div>

                {/* Key Metric */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800/30 mb-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {caseStudy.keyMetric.value}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                    {caseStudy.keyMetric.label}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {caseStudy.timeline}
                  </div>
                </div>

                {/* Snippet */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {caseStudy.description}
                </p>

                {/* CTA */}
                <Link
                  href={`/case-studies/${caseStudy.slug}`}
                  className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
