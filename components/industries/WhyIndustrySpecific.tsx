"use client";

import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Zap } from "lucide-react";

export default function WhyIndustrySpecific() {
  const reasons = [
    {
      icon: Target,
      title: "Different Search Intent",
      description:
        "Someone searching 'emergency plumber' has different intent than 'best CRM software'. Your SEO strategy must match how YOUR customers search.",
    },
    {
      icon: Users,
      title: "Unique Competition",
      description:
        "Home services compete locally in Google Maps. SaaS competes globally in organic results. Your competition landscape determines your strategy.",
    },
    {
      icon: TrendingUp,
      title: "Industry-Specific Conversion Paths",
      description:
        "HVAC repairs convert from phone calls. SaaS converts from free trials. Professional services need trust-building content. One funnel doesn't fit all.",
    },
    {
      icon: Zap,
      title: "Platform & Technical Requirements",
      description:
        "E-commerce needs product schema. Local services need Google Business Profile optimization. SaaS needs product-led content. Generic SEO misses these nuances.",
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
            Why Industry-Specific SEO{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Actually Matters
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Generic SEO strategies fail because they ignore the fundamental differences 
            in how industries compete, convert, and succeed online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700"
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

        {/* Bottom Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 dark:border-purple-500/30"
        >
          <p className="text-lg text-gray-700 dark:text-gray-200 text-center">
            <strong>The Bottom Line:</strong> Industry-specific SEO means understanding your 
            customers' search behavior, your competition's weaknesses, and the unique conversion 
            paths that drive revenue in YOUR niche. Generic strategies leave money on the table.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
