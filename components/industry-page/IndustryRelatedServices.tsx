"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IndustryPageData } from "@/lib/industryData";

const allServices: Record<string, { name: string; description: string; href: string }> = {
  "local-seo": {
    name: "Local SEO",
    description: "Dominate Google Maps and local pack rankings in your service area",
    href: "/services/local-seo",
  },
  "technical-seo": {
    name: "Technical SEO",
    description: "Fix crawl errors, site speed, mobile issues, and indexing problems",
    href: "/services/technical-seo",
  },
  "content-seo": {
    name: "Content SEO",
    description: "Build topical authority with strategic, search-optimized content",
    href: "/services/content-seo",
  },
  "on-page-seo": {
    name: "On-Page SEO",
    description: "Optimize title tags, meta descriptions, headers, and internal links",
    href: "/services/on-page-seo",
  },
  "link-building": {
    name: "Link Building",
    description: "Earn high-quality backlinks that improve domain authority and rankings",
    href: "/services/link-building",
  },
  "seo-audit": {
    name: "SEO Audit",
    description: "Comprehensive analysis of your current SEO performance and opportunities",
    href: "/services/seo-audit",
  },
  "ecommerce-seo": {
    name: "E-commerce SEO",
    description: "Optimize product pages, category pages, and conversion funnels",
    href: "/services/ecommerce-seo",
  },
  "off-page-seo": {
    name: "Off-Page SEO",
    description: "Build external signals like citations, brand mentions, and authority",
    href: "/services/off-page-seo",
  },
};

export default function IndustryRelatedServices({ industry }: { industry: IndustryPageData }) {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Related{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SEO Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore additional SEO services that complement {industry.name.toLowerCase()} strategies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industry.relatedServices.map((serviceSlug, index) => {
            const service = allServices[serviceSlug];
            if (!service) return null;

            return (
              <motion.div
                key={serviceSlug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group block h-full backdrop-blur-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 border border-purple-200 dark:border-purple-500/20 rounded-2xl p-6 hover:border-purple-500 dark:hover:border-purple-400 transition-all hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
          >
            View All Industries
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
