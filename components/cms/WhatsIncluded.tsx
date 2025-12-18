"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface WhatsIncludedProps {
  deliverables: string[];
  cmsName?: string;
}

export default function WhatsIncluded({ deliverables, cmsName = "CMS" }: WhatsIncludedProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            What's Included in {cmsName} SEO
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive optimization deliverables for your {cmsName} website
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {deliverables.map((deliverable, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-green-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {deliverable}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
          >
            Get Started with {cmsName} SEO
            <CheckCircle className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
