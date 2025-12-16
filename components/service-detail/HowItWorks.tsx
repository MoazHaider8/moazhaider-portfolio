"use client";

import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/servicesData";
import * as Icons from "lucide-react";

interface Props {
  service: ServiceDetail;
}

export default function HowItWorks({ service }: Props) {
  return (
    <section className="relative py-28 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 font-bold text-sm uppercase tracking-widest rounded-full">
              Step-by-Step Process
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
            How It Works
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A proven methodology delivering consistent, measurable results
          </p>
        </motion.div>

        {/* Timeline Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {service.howItWorks.timeline.map((item, idx) => {
            const IconComponent = (Icons as any)[item.icon] || Icons.Circle;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full rounded-3xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Week Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/20 rounded-full mb-6">
                    <Icons.Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-sm font-bold text-cyan-700 dark:text-cyan-400 uppercase">
                      {item.week}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-6 shadow-xl group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-medium">
                    {item.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2">
                    {item.deliverables.map((deliverable, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <Icons.CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 text-6xl font-black text-gray-100 dark:text-gray-800 leading-none">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
