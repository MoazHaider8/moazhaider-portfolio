"use client";

import { motion } from "framer-motion";
import { Users, Building, ShoppingCart, GraduationCap, Briefcase } from "lucide-react";

interface WhoThisIsForProps {
  businessTypes: string[];
  cmsName?: string;
}

export default function WhoThisIsFor({ businessTypes, cmsName = "CMS" }: WhoThisIsForProps) {
  // Icon mapping for common business types
  const getIcon = (index: number) => {
    const icons = [Building, ShoppingCart, GraduationCap, Briefcase, Users];
    const Icon = icons[index % icons.length];
    return Icon;
  };

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
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 mb-6">
            <Users className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
              Ideal Clients
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Who This {cmsName} SEO Service Is For
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I specialize in helping these types of businesses maximize their {cmsName} site's organic performance
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {businessTypes.map((businessType, index) => {
            const Icon = getIcon(index);
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-800 dark:to-blue-900/20 border border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Business Type */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {businessType}
                </h3>

                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Not Listed Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Don't see your business type listed?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I work with all types of businesses using {cmsName}. If you're committed to growing your organic traffic, let's talk.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
          >
            Discuss Your Project
            <Users className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
