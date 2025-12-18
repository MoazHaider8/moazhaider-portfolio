"use client";

import { motion } from "framer-motion";
import { CheckSquare, Sparkles } from "lucide-react";

interface BestPracticesProps {
  checklist: string[];
  cmsName?: string;
}

export default function BestPractices({ checklist, cmsName = "CMS" }: BestPracticesProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 mb-6">
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              Expert Best Practices
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {cmsName} SEO Best Practices Checklist
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Follow these proven practices to maximize your {cmsName} site's search performance
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {checklist.map((practice, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative p-6 rounded-xl bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-blue-900/20 border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckSquare className="w-6 h-6 text-purple-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {practice}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want a detailed {cmsName} SEO implementation guide?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
          >
            Get Your Custom Strategy
            <Sparkles className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
