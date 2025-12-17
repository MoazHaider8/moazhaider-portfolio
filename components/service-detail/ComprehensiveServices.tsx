"use client";

import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/servicesData";
import * as Icons from "lucide-react";

interface Props {
  service: ServiceDetail;
}

export default function ComprehensiveServices({ service }: Props) {
  if (!service.comprehensiveServices) return null;

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
              Complete Solution
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Comprehensive {service.name} Services
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium">
            {service.comprehensiveServices.introduction}
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-16">
          {service.comprehensiveServices.serviceCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.15 }}
            >
              {/* Category Title */}
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-4">
                <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-xl">
                  {catIdx + 1}
                </span>
                {category.category}
              </h3>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, sIdx) => {
                  const IconComponent = (Icons as any)[service.icon] || Icons.Box;
                  
                  return (
                    <motion.div
                      key={sIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.15 + sIdx * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group relative"
                    >
                      <div className="relative h-full rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-md hover:shadow-xl transition-all duration-300">
                        {/* Icon */}
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 mb-4 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                        </div>

                        {/* Service Name */}
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                          {service.name}
                        </h4>

                        {/* Description */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Hover Gradient */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Get All These Services</span>
            <Icons.ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
