"use client";

import { motion } from "framer-motion";
import { Search, Target, MapPin } from "lucide-react";
import { IndustryPageData } from "@/lib/industryData";

export default function UnderstandingIndustry({ industry }: { industry: IndustryPageData }) {
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Understanding SEO for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {industry.name}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            How customers find and choose {industry.name.toLowerCase()} companies online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Search Behavior */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-500/20 rounded-2xl p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
              <Search className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              How Customers Search
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {industry.searchBehavior}
            </p>
          </motion.div>

          {/* Buying Intent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="backdrop-blur-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-500/20 rounded-2xl p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Buying Intent
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {industry.buyingIntent}
            </p>
          </motion.div>

          {/* SEO Type */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="backdrop-blur-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-500/20 rounded-2xl p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              SEO Focus
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {industry.seoType === "local" && (
                <>
                  <strong>Local SEO</strong> is critical. Most customers search with location intent ("near me", city names). 
                  Dominating Google Maps and local pack rankings drives the majority of leads.
                </>
              )}
              {industry.seoType === "national" && (
                <>
                  <strong>National SEO</strong> is the focus. Customers search for solutions without location modifiers. 
                  Topical authority, technical SEO, and content depth drive rankings and conversions.
                </>
              )}
              {industry.seoType === "hybrid" && (
                <>
                  <strong>Hybrid approach</strong> required. Local offices need Google Maps visibility while national brand 
                  authority requires topical content and technical SEO. Strategy balances both.
                </>
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
