"use client";

import { motion } from "framer-motion";
import { BarChart3, Brain, FileCheck, Target, TrendingUp, Shield } from "lucide-react";

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

const features = [
  {
    icon: BarChart3,
    title: "Data-Driven SEO Strategies",
    description: "Every decision backed by analytics, search data, and performance metrics for measurable results.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Brain,
    title: "Semantic SEO & Topical Authority",
    description: "Build comprehensive topic coverage using entity-based SEO and semantic relationships for lasting rankings.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: FileCheck,
    title: "Transparent Reporting",
    description: "Clear, actionable reports showing exactly what's working and where your investment is going.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Target,
    title: "Industry-Specific Frameworks",
    description: "Tailored SEO strategies designed for your industry's unique challenges and opportunities.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: TrendingUp,
    title: "Long-Term Ranking Stability",
    description: "Sustainable, white-hat SEO techniques that build lasting authority—not quick hacks that fade.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Risk-Free White-Hat Only",
    description: "No black-hat tactics, no shortcuts, no penalties. Just proven strategies that Google rewards.",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export default function DifferentiationSection() {
  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Makes Me
              <br />
              <span className="gradient-text">Different</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I don't just follow the SEO playbook—I write it. My approach combines cutting-edge semantic SEO, data analysis, and industry-specific insights to deliver results that last.
            </motion.p>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-6"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
