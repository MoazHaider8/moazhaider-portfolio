"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Settings, Blocks, FolderKanban, ArrowRight } from "lucide-react";

export default function IndustryServicesFit() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How Industry SEO Fits{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Into My Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Understanding the difference between WHO I serve, HOW I execute, and WHERE it's implemented
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Industry Pages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
              <FolderKanban className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Industry Pages = WHO
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              These pages target <strong>your niche</strong>: HVAC companies, law firms, SaaS startups. 
              They explain why your industry needs specialized SEO.
            </p>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:gap-3 transition-all"
            >
              Browse Industries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Service Pages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-700"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
              <Settings className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Service Pages = HOW
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              These pages explain <strong>SEO tactics</strong>: Technical SEO, Local SEO, Link Building. 
              They detail the methods I use to drive results.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:gap-3 transition-all"
            >
              View Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* CMS Pages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-700"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
              <Blocks className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              CMS Pages = WHERE
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              These pages cover <strong>platforms</strong>: WordPress, Shopify, Webflow. 
              They explain platform-specific SEO implementation.
            </p>
            <Link
              href="/cms"
              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all"
            >
              Explore Platforms
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 dark:border-purple-500/30"
        >
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Real Example: HVAC Company on WordPress
          </h4>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-purple-600 dark:text-purple-400 font-bold mb-2">WHO (Industry)</div>
              <p className="text-gray-700 dark:text-gray-300">
                <Link href="/industries/hvac-seo" className="underline hover:text-purple-600 dark:hover:text-purple-400">
                  HVAC SEO
                </Link> page explains seasonal targeting, emergency keywords, and local map pack optimization.
              </p>
            </div>
            <div>
              <div className="text-cyan-600 dark:text-cyan-400 font-bold mb-2">HOW (Service)</div>
              <p className="text-gray-700 dark:text-gray-300">
                <Link href="/services/local-seo" className="underline hover:text-cyan-600 dark:hover:text-cyan-400">
                  Local SEO
                </Link> page details Google Business Profile optimization, citations, and review management.
              </p>
            </div>
            <div>
              <div className="text-indigo-600 dark:text-indigo-400 font-bold mb-2">WHERE (CMS)</div>
              <p className="text-gray-700 dark:text-gray-300">
                <Link href="/cms/wordpress-seo" className="underline hover:text-indigo-600 dark:hover:text-indigo-400">
                  WordPress SEO
                </Link> page covers plugin conflicts, index bloat, and Core Web Vitals optimization.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105"
          >
            See Real Industry Results
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
