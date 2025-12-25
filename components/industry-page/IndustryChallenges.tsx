"use client";

import { motion } from "framer-motion";
import { AlertCircle, X } from "lucide-react";
import { IndustryPageData } from "@/lib/industryData";

export default function IndustryChallenges({ industry }: { industry: IndustryPageData }) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Common SEO Challenges in{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {industry.name}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              
              {/* Card */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center mt-1">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-white font-medium leading-relaxed">
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
          <p className="text-gray-300 text-lg">
            Sound familiar? Let's fix these issues with a proven {industry.name.toLowerCase()} SEO strategy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
