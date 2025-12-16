"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, ArrowRight, Award } from "lucide-react";

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

const caseStudies = [
  {
    title: "E-commerce Revenue Growth",
    industry: "Fashion Retail",
    challenge: "Struggling to compete with major retailers in organic search",
    results: [
      { icon: TrendingUp, label: "Organic Traffic", value: "+285%" },
      { icon: DollarSign, label: "Revenue", value: "+$420K" },
      { icon: Users, label: "Conversions", value: "+180%" }
    ],
    timeline: "6 months",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Local SEO Domination",
    industry: "Legal Services",
    challenge: "Zero visibility in local 'lawyer near me' searches",
    results: [
      { icon: Award, label: "Google Rankings", value: "Top 3" },
      { icon: Users, label: "Quality Leads", value: "+340%" },
      { icon: TrendingUp, label: "Organic Calls", value: "+220%" }
    ],
    timeline: "4 months",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "SaaS Lead Generation",
    industry: "B2B Software",
    challenge: "High CPC costs with poor organic presence",
    results: [
      { icon: Users, label: "MQLs", value: "+450%" },
      { icon: DollarSign, label: "Ad Savings", value: "$85K/yr" },
      { icon: TrendingUp, label: "Rankings", value: "200+ KWs" }
    ],
    timeline: "8 months",
    gradient: "from-green-500 to-emerald-500"
  }
];

export default function CaseStudies() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Proven Results & Case Studies
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real businesses, real results. See how my SEO strategies have transformed organic performance for companies across industries.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-6"
        >
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${study.gradient}`} />
                
                {/* Header */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    "{study.challenge}"
                  </p>
                </div>

                {/* Results Grid */}
                <div className="space-y-4 mb-6">
                  {study.results.map((result, resultIdx) => (
                    <div
                      key={resultIdx}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${study.gradient} flex items-center justify-center`}>
                          <result.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {result.label}
                        </span>
                      </div>
                      <span className="text-2xl font-bold gradient-text">
                        {result.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-white/10">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Timeline: <strong className="text-gray-900 dark:text-white">{study.timeline}</strong>
                  </span>
                  <button className="flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105"
          >
            Get Similar Results for Your Business
          </a>
        </motion.div>
      </div>
    </section>
  );
}
