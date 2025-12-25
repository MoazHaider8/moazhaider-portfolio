"use client";

import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import { IndustryPageData } from "@/lib/industryData";

export default function IndustryLocations({ industry }: { industry: IndustryPageData }) {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-6">
            {industry.seoType === "local" ? (
              <MapPin className="w-8 h-8 text-white" />
            ) : (
              <Globe className="w-8 h-8 text-white" />
            )}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {industry.name} SEO +{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Location Targeting
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            How industry-specific SEO and geographic targeting work together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 border border-purple-200 dark:border-purple-500/20 rounded-2xl p-8 md:p-12"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {industry.locationStrategy}
          </p>

          {/* Location Support */}
          <div className="grid md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-purple-200 dark:border-purple-500/20">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Single-Location Businesses
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dominate your primary service area with hyper-local content, Google Business Profile optimization, 
                and neighborhood-level targeting.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Multi-Location Businesses
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Each location gets dedicated landing pages with unique content, local citations, and city-specific 
                keyword strategies to avoid internal competition.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Geography Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 p-6 bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-500/20 rounded-xl"
        >
          <p className="text-gray-700 dark:text-gray-300">
            I work with {industry.name.toLowerCase()} businesses across the{" "}
            <strong>United States, United Kingdom, Canada, Australia, and internationally</strong>. 
            Your service area determines the geographic strategy—not arbitrary limitations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
