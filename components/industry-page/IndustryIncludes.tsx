"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { IndustryPageData } from "@/lib/industryData";

export default function IndustryIncludes({ industry }: { industry: IndustryPageData }) {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-slate-50 dark:from-slate-900 dark:via-emerald-900/10 dark:to-slate-900 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            What's Included in {industry.name}{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 dark:from-emerald-400 dark:via-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
              SEO Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tangible deliverables focused on outcomes, not busywork
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {industry.includes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group backdrop-blur-xl bg-white dark:bg-slate-900/80 border-2 border-emerald-100 dark:border-emerald-900/30 rounded-2xl p-8 hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mt-1 shadow-lg shadow-emerald-500/30 group-hover:shadow-xl group-hover:shadow-emerald-500/50 transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 p-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-none"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            <strong className="text-slate-900 dark:text-white">Every deliverable is outcome-focused.</strong> I don't bill for tasks—I deliver results 
            that move your {industry.name.toLowerCase()} business forward.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
