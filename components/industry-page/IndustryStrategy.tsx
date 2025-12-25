"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lightbulb, ArrowRight } from "lucide-react";
import { IndustryPageData } from "@/lib/industryData";

const serviceLinks: Record<string, { name: string; href: string }> = {
  "local-seo": { name: "Local SEO", href: "/services/local-seo" },
  "technical-seo": { name: "Technical SEO", href: "/services/technical-seo" },
  "content-seo": { name: "Content SEO", href: "/services/content-seo" },
  "on-page-seo": { name: "On-Page SEO", href: "/services/on-page-seo" },
  "off-page-seo": { name: "Off-Page SEO", href: "/services/off-page-seo" },
  "link-building": { name: "Link Building", href: "/services/link-building" },
  "ecommerce-seo": { name: "E-commerce SEO", href: "/services/ecommerce-seo" },
  "seo-audit": { name: "SEO Audit", href: "/services/seo-audit" },
};

export default function IndustryStrategy({ industry }: { industry: IndustryPageData }) {
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
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My SEO Strategy for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {industry.name} Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            How I adapt proven SEO frameworks to your industry's unique search landscape
          </p>
        </motion.div>

        {/* Strategy Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 border border-purple-200 dark:border-purple-500/20 rounded-2xl p-8 md:p-12 mb-12"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {industry.strategyApproach}
          </p>
        </motion.div>

        {/* Primary Service Links */}
        <div className="grid md:grid-cols-3 gap-6">
          {industry.primaryServices.map((serviceSlug, index) => {
            const service = serviceLinks[serviceSlug];
            if (!service) return null;

            return (
              <motion.div
                key={serviceSlug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group block backdrop-blur-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:border-purple-500 dark:hover:border-purple-500 transition-all hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {service.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Learn more about {service.name.toLowerCase()} strategies
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 p-6 bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-500/20 rounded-xl"
        >
          <p className="text-gray-700 dark:text-gray-300">
            <strong>No cookie-cutter templates.</strong> Every {industry.name.toLowerCase()} business gets a custom SEO roadmap 
            tailored to their service area, competition, and growth goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
