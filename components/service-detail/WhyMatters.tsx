"use client";

import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/servicesData";
import * as Icons from "lucide-react";
import { TrendingUp, AlertTriangle } from "lucide-react";

interface Props {
  service: ServiceDetail;
}

export default function WhyMatters({ service }: Props) {
  if (!service.whyMatters) return null;

  return (
    <section className="relative py-28 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 dark:from-black dark:via-indigo-950 dark:to-purple-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-red-500/10 border border-red-500/20 backdrop-blur-md text-red-400 font-bold text-sm uppercase tracking-widest rounded-full">
              Critical Impact
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Why {service.name} Matters
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            {service.whyMatters.impact}
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {service.whyMatters.statistics.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300"
            >
              <TrendingUp className="w-12 h-12 text-red-400 mx-auto mb-6" />
              <div className="text-4xl sm:text-5xl font-black text-white mb-4 bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
                {stat.stat}
              </div>
              <p className="text-base text-gray-300 font-medium">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Consequences Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {service.whyMatters.consequences.map((consequence, idx) => {
            const IconComponent = (Icons as any)[consequence.icon] || AlertTriangle;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative h-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-red-400" />
                      </div>
                    </div>

                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-2xl font-black text-white mb-4">
                        {consequence.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base text-gray-300 leading-relaxed font-medium">
                        {consequence.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-300 mb-8 font-semibold">
            Don't let these issues hold your business back
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Fix These Issues Now</span>
            <Icons.ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
