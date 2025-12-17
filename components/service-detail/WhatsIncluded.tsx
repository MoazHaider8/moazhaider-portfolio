"use client";

import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/servicesData";
import * as Icons from "lucide-react";

interface Props {
  service: ServiceDetail;
}

export default function WhatsIncluded({ service }: Props) {
  // Merge deliverables and comprehensiveServices
  const deliverables = service.deliverables || [];
  const comprehensiveServices = service.comprehensiveServices?.serviceCategories || [];

  return (
    <section className="relative py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 font-bold text-sm uppercase tracking-widest rounded-full">
              Complete Package
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
            What's Included in My {service.name} Package
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need for complete {service.name.toLowerCase()} success
          </p>
        </motion.div>

        {/* Deliverables Grid */}
        {deliverables.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {deliverables.slice(0, 9).map((deliverable: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-2xl font-black text-white">{idx + 1}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {deliverable.category}
                </h3>

                <ul className="space-y-2">
                  {deliverable.items.slice(0, 4).map((item: string, i: number) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        )}

        {/* Comprehensive Services (if available) */}
        {comprehensiveServices.length > 0 && (
          <div className="space-y-12">
            {comprehensiveServices.map((category: any, catIdx: number) => (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.15 }}
              >
                {/* Category Title */}
                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-xl">
                    {catIdx + 1}
                  </span>
                  <span>{category.category}</span>
                </h3>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.services.slice(0, 4).map((svc: any, svcIdx: number) => {
                    const IconComponent = (Icons as any)[svc.icon] || Icons.Sparkles;
                    
                    return (
                      <div
                        key={svcIdx}
                        className="p-5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300"
                      >
                        <IconComponent className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">
                          {svc.name}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                          {svc.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
