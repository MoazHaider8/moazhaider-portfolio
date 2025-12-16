"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, Link, Gauge, FileSearch, Monitor } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const tools = [
  {
    icon: Search,
    name: "Google Search Console",
    description: "Monitor search performance, indexing status, and technical issues directly from Google.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    name: "Google Analytics",
    description: "Track user behavior, conversions, and ROI from organic search traffic.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Link,
    name: "Ahrefs / SEMrush",
    description: "Comprehensive backlink analysis, keyword research, and competitor intelligence.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: FileSearch,
    name: "Screaming Frog",
    description: "Deep technical audits to identify crawl issues, broken links, and on-page problems.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Gauge,
    name: "PageSpeed Insights",
    description: "Analyze and optimize Core Web Vitals and page performance metrics.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Monitor,
    name: "Looker Studio",
    description: "Custom dashboards and data visualization for clear, actionable reporting.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Search,
    name: "Keyword Clustering Tools",
    description: "Advanced semantic keyword grouping for topical authority building.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: BarChart3,
    name: "Rank Tracking Software",
    description: "Monitor keyword rankings across devices, locations, and search engines.",
    gradient: "from-teal-500 to-green-500"
  }
];

export default function ToolsStack() {
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
            My SEO Tools &
            <br />
            <span className="gradient-text">Technology Stack</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Industry-leading tools and platforms to deliver data-driven insights and measurable results.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 text-center group cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${tool.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <tool.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
