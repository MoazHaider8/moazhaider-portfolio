"use client";

import { motion } from "framer-motion";
import { AlertCircle, X } from "lucide-react";
import { IndustryPageData } from "@/lib/industryData";

export default function IndustryChallenges({ industry }: { industry: IndustryPageData }) {
  return (
    <section className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-slate-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-red-500/30"
          >
            <AlertCircle className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Common SEO Challenges in{" "}
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 dark:from-red-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">
              {industry.name}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The SEO problems holding {industry.name.toLowerCase()} companies back from consistent lead flow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {industry.challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
              
              {/* Card */}
              <div className="relative h-full backdrop-blur-xl bg-white dark:bg-slate-900/80 border-2 border-red-100 dark:border-red-900/30 group-hover:border-red-300 dark:group-hover:border-red-700/50 rounded-2xl p-6 flex items-start gap-4 shadow-xl group-hover:shadow-2xl group-hover:scale-[1.02] transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-600 border-2 border-red-300 dark:border-red-700 flex items-center justify-center mt-1 shadow-lg">
                  <X className="w-4 h-4 text-white font-bold" />
                </div>
                <p className="text-slate-800 dark:text-white font-semibold leading-relaxed">
                  {challenge}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Sound familiar? Let's fix these issues with a proven {industry.name.toLowerCase()} SEO strategy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
