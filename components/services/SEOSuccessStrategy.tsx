"use client";

import { motion } from "framer-motion";
import { Network, Target, TrendingUp, RefreshCw, Brain, Search } from "lucide-react";

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

const strategies = [
  {
    icon: Brain,
    title: "Semantic SEO",
    description: "Move beyond keywords to entities, relationships, and context. Build content that demonstrates deep topical understanding and expertise.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Target,
    title: "Intent Mapping",
    description: "Analyze and match content to user search intent—informational, navigational, commercial, and transactional queries.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Network,
    title: "Topical Authority",
    description: "Build comprehensive topic clusters that cover every angle of your niche, establishing your site as the go-to resource.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Search,
    title: "Search Demand Modeling",
    description: "Forecast search volume trends, seasonal patterns, and emerging opportunities to stay ahead of the competition.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: TrendingUp,
    title: "Entity-Based Optimization",
    description: "Optimize for entities, not just keywords. Help Google understand your expertise and connect related concepts.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: RefreshCw,
    title: "Continuous Optimization Loop",
    description: "Iterative testing, analysis, and refinement based on performance data, algorithm updates, and competitive shifts.",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export default function SEOSuccessStrategy() {
  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
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
            <span className="gradient-text">SEO Success</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Advanced SEO methodologies inspired by industry leaders like Koray Semet, combining semantic search, topical authority, and data-driven optimization.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {strategies.map((strategy, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-8"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${strategy.gradient} mb-6 shadow-lg`}>
                <strategy.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {strategy.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {strategy.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
