"use client";

import { motion } from "framer-motion";
import { AlertCircle, Zap, Target, TrendingUp } from "lucide-react";

export default function WhyCMSMatters() {
  const reasons = [
    {
      icon: AlertCircle,
      title: "Each CMS Has Unique SEO Challenges",
      description:
        "WordPress has plugin conflicts. Shopify has duplicate URLs. Wix has limited control. Generic SEO advice fails because it ignores platform-specific constraints.",
    },
    {
      icon: Zap,
      title: "Platform-Specific Optimizations Work Better",
      description:
        "Knowing how to leverage WordPress plugins, optimize Shopify collections, or work around Wix limitations delivers better results than one-size-fits-all SEO.",
    },
    {
      icon: Target,
      title: "Avoid Costly CMS Migrations",
      description:
        "Most businesses don't need to switch CMSs—they need someone who knows how to optimize their current platform properly. Save time and money.",
    },
    {
      icon: TrendingUp,
      title: "Maximize Your Platform's Strengths",
      description:
        "Every CMS has SEO advantages. WordPress flexibility, Shopify e-commerce features, Webflow's clean code—I help you leverage what your platform does best.",
    },
  ];

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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why CMS-Specific SEO{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Actually Matters
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your CMS isn't just a tool—it's the foundation of your SEO. Different platforms require different strategies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
