"use client";

import { motion } from "framer-motion";
import { Search, Wrench, FileText, Link2, BarChart3, RefreshCw } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const steps = [
  {
    number: "01",
    icon: Search,
    title: "SEO Audit & Discovery",
    description: "Comprehensive analysis of your website, competitors, and market opportunities to identify quick wins and growth potential.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    icon: Wrench,
    title: "Technical Fixes & Site Architecture",
    description: "Resolve technical issues, improve site speed, fix crawl errors, and optimize site structure for search engines.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    icon: FileText,
    title: "Keyword & Entity Mapping",
    description: "Strategic keyword research and semantic entity mapping to build topical authority and target high-value search terms.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    number: "04",
    icon: FileText,
    title: "Content Optimization",
    description: "Create and optimize content that matches search intent, answers user questions, and establishes expertise.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    number: "05",
    icon: Link2,
    title: "Authority Building",
    description: "Acquire high-quality backlinks, build brand mentions, and establish your site as a trusted industry resource.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Tracking & Iteration",
    description: "Continuous monitoring, analysis, and optimization based on performance data and algorithm updates.",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export default function DeliveryProcess() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How I Deliver
            <br />
            <span className="gradient-text">Results</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A proven, systematic approach to SEO that delivers measurable improvements at every stage.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-gray-100 dark:text-white/5">
                {step.number}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} mb-6 shadow-lg`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
