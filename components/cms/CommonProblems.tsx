"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Search } from "lucide-react";

interface Problem {
  title: string;
  description: string;
}

interface CommonProblemsProps {
  problems: Problem[];
  cmsName?: string;
}

export default function CommonProblems({ problems, cmsName = "CMS" }: CommonProblemsProps) {
  const icons = [AlertCircle, TrendingDown, Search];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
            Common {cmsName} SEO Problems
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These issues can severely impact your search rankings and organic traffic
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {problems.map((problem, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-red-400 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-orange-500 transition-colors duration-300">
                  {problem.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {problem.description}
                </p>

                {/* Hover gradient effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
