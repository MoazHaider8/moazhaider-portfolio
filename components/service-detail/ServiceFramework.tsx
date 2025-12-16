"use client";

import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/servicesData";
import * as Icons from "lucide-react";
import { CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

interface Props {
  service: ServiceDetail;
}

export default function ServiceFramework({ service }: Props) {
  return (
    <section className="relative py-28 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/20 to-blue-200/20 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-200/20 to-pink-200/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="inline-block mb-4">
            <span className="px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 font-bold text-sm uppercase tracking-wider rounded-full">
              Proven Methodology
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeUp} 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight"
          >
            My SEO Framework for{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
              {service.name}
            </span>
          </motion.h2>

          <motion.p 
            variants={fadeUp} 
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            {service.framework.description}
          </motion.p>
        </motion.div>

        {/* Framework Pillars Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {service.framework.pillars.map((pillar, idx) => {
            const IconComponent = (Icons as any)[pillar.icon] || Icons.Sparkles;
            
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 p-10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Number Badge */}
                  <div className="absolute top-8 right-8 text-7xl font-black text-gray-100 dark:text-gray-800/50 leading-none">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-4">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium">
                      {pillar.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      {pillar.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connecting Lines for Visual Flow */}
                {idx < service.framework.pillars.length - 1 && (
                  <div className="hidden md:block absolute -bottom-4 left-1/2 w-px h-8 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <span>Start Your {service.name} Project</span>
            <Icons.ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
