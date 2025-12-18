"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface WhatMakesDifferentProps {
  data: {
    intro: string;
    points: string[];
  };
  cmsName?: string;
}

export default function WhatMakesDifferent({ data, cmsName = "CMS" }: WhatMakesDifferentProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What Makes My {cmsName} SEO Different
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            {data.intro}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {data.points.map((point, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-purple-900/20 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {point}
                </p>
              </div>
              
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
