"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Eye, Award, Target } from "lucide-react";

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

const reasons = [
  {
    icon: DollarSign,
    title: "SEO is an Asset, Not an Expense",
    description: "Unlike paid ads that stop the moment you stop paying, SEO builds cumulative value that compounds over time.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Organic Traffic Outperforms Paid Ads",
    description: "Organic search delivers higher click-through rates, better engagement, and more qualified leads than paid advertising.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Long-Term Compounding Growth",
    description: "Every piece of optimized content, every backlink, and every ranking improvement builds on itself for exponential growth.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Eye,
    title: "Brand Trust & Visibility",
    description: "Ranking at the top of Google establishes credibility, authority, and trust with potential customers before they even click.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "Capture Intent-Driven Customers",
    description: "Target users actively searching for your solutions—high-intent traffic that's ready to convert.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Award,
    title: "Sustainable Competitive Advantage",
    description: "Once you dominate search results, competitors struggle to catch up—giving you a lasting market edge.",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export default function WhySEOMatters() {
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
            Why SEO Matters for
            <br />
            <span className="gradient-text">Your Business</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            SEO isn't just about rankings—it's about building a sustainable growth engine that drives revenue year after year.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-8"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} mb-6 shadow-lg`}>
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
