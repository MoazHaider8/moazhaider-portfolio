"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Target } from "lucide-react";

export default function CMSProofStrip() {
  const stats = [
    {
      icon: TrendingUp,
      value: "250%",
      label: "Avg. Traffic Increase",
      description: "Across all CMS platforms",
    },
    {
      icon: Award,
      value: "8",
      label: "CMS Platforms",
      description: "Deep expertise in each",
    },
    {
      icon: Target,
      value: "500+",
      label: "Sites Optimized",
      description: "WordPress, Shopify & more",
    },
    {
      icon: Users,
      value: "10+",
      label: "Years Experience",
      description: "Platform-specific SEO",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Proven Results Across All Major CMS Platforms
          </h2>
          <p className="text-xl text-purple-100">
            Real numbers from real CMS optimization projects
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-purple-100 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-purple-200">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
