"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, Star } from "lucide-react";

interface Tool {
  name: string;
  category: string;
  description: string;
}

interface RecommendedToolsProps {
  tools: Tool[];
  cmsName?: string;
}

export default function RecommendedTools({ tools, cmsName = "CMS" }: RecommendedToolsProps) {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Group tools by category
  const categories = Array.from(new Set(tools.map(tool => tool.category)));

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 mb-6">
            <Wrench className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
              Recommended Tools
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Essential {cmsName} SEO Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful tools and plugins I recommend for optimizing your {cmsName} site
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              {/* Category Header */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3"
              >
                <Zap className="w-6 h-6 text-orange-500" />
                {category}
              </motion.h3>

              {/* Tools Grid */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {tools
                  .filter(tool => tool.category === category)
                  .map((tool, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="group relative p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-pink-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1"
                    >
                      {/* Tool Icon/Badge */}
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30">
                          <Star className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                          <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                            Recommended
                          </span>
                        </div>
                      </div>

                      {/* Tool Name */}
                      <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                        {tool.name}
                      </h4>

                      {/* Tool Description */}
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {tool.description}
                      </p>

                      {/* Hover gradient */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 border border-orange-200 dark:border-orange-700"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Need help setting up these tools?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I'll configure and optimize these tools specifically for your {cmsName} site as part of my SEO service.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 to-pink-600 text-white font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105"
          >
            Get Expert Setup
            <Wrench className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
