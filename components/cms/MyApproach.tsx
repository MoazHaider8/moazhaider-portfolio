"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

interface MyApproachProps {
  steps: Step[];
  cmsName?: string;
}

export default function MyApproach({ steps, cmsName = "CMS" }: MyApproachProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My {cmsName} SEO Approach
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A systematic process designed to maximize your {cmsName} site's organic visibility
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
            >
              <div className="flex gap-6 items-start p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-purple-900/20 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-6 h-6 text-blue-500 dark:text-purple-400" />
                </div>
              </div>

              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="ml-8 h-6 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600 opacity-30" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
