"use client";

import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/servicesData";
import * as Icons from "lucide-react";
import { Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

interface Props {
  service: ServiceDetail;
}

export default function TransformProcess({ service }: Props) {
  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 dark:from-gray-950 dark:via-indigo-950/20 dark:to-purple-950/20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-gradient-to-br from-indigo-200/30 to-purple-200/30 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-200/30 to-blue-200/30 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-400 font-bold text-sm uppercase tracking-widest rounded-full">
              Battle-Tested Process
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeUp} 
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
          >
            <span className="text-gray-900 dark:text-white">How I Transform Your </span>
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
              {service.name}
            </span>
          </motion.h2>

          <motion.p 
            variants={fadeUp} 
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            {service.transformProcess.subtitle}
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 transform -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-20">
            {service.transformProcess.phases.map((phase, idx) => {
              const IconComponent = (Icons as any)[phase.icon] || Icons.Zap;
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={isEven ? fadeRight : fadeLeft}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex items-center gap-12 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full lg:w-auto">
                    <div className="group relative rounded-3xl bg-white dark:bg-gray-800/70 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700 p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      {/* Phase Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 rounded-full mb-6">
                        <Icons.Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-sm font-bold text-indigo-700 dark:text-indigo-400 uppercase">
                          {phase.phase}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-4">
                        {phase.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium">
                        {phase.description}
                      </p>

                      {/* Outcomes */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-3">
                          <Icons.Target className="w-4 h-4" />
                          <span>Key Outcomes:</span>
                        </div>
                        {phase.outcomes.map((outcome, oIdx) => (
                          <div key={oIdx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                              {outcome}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Gradient */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Center Icon (Timeline Marker) */}
                  <div className="relative flex-shrink-0 hidden lg:block">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative z-20 w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl"
                    >
                      <IconComponent className="w-12 h-12 text-white" />
                    </motion.div>

                    {/* Numbered Badge */}
                    <div className="absolute -top-3 -right-3 z-30 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-indigo-500 flex items-center justify-center">
                      <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">
                        {idx + 1}
                      </span>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-50"></div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="lg:hidden w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-semibold">
            Ready to see these results for your business?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Start Your Transformation</span>
            <Icons.ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
