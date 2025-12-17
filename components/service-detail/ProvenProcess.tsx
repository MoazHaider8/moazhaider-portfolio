"use client";

import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/servicesData";
import * as Icons from "lucide-react";
import { Check, Sparkles } from "lucide-react";

interface Props {
  service: ServiceDetail;
}

export default function ProvenProcess({ service }: Props) {
  // Merge data from process, howItWorks, transformProcess
  const processSteps = service.transformProcess?.phases || service.process || [];
  const insights = service.serviceInsights || [];

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-400 font-bold text-sm uppercase tracking-widest rounded-full">
              Battle-Tested Process
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-gray-900 dark:text-white">My Proven </span>
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
              {service.name}
            </span>
            <span className="text-gray-900 dark:text-white"> Process</span>
          </h2>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A proven methodology delivering consistent, measurable results
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative max-w-6xl mx-auto mb-20">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 transform -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-16">
            {processSteps.map((phase: any, idx: number) => {
              const IconComponent = (Icons as any)[phase.icon] || Icons.Zap;
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300">
                      {/* Phase Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-bold mb-4">
                        <IconComponent className="w-4 h-4" />
                        {phase.phase || phase.title || `Phase ${idx + 1}`}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {phase.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {phase.description}
                      </p>

                      {/* Outcomes/Deliverables */}
                      {(phase.outcomes || phase.deliverables) && (
                        <ul className="space-y-2">
                          {(phase.outcomes || phase.deliverables).map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg">
                    <span className="text-white font-black text-xl">{idx + 1}</span>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Service-Specific Insights Block */}
        {insights && insights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl">
              <div className="absolute top-4 right-4">
                <Sparkles className="w-8 h-8 text-white/30" />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white">
                  {service.name} Insights
                </h3>
              </div>

              <ul className="space-y-4">
                {insights.map((insight: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-white text-lg font-medium leading-relaxed">
                      {insight}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
