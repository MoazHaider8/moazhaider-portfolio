"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Globe, Users } from "lucide-react";

export default function IndustriesProof() {
  const stats = [
    { icon: Users, value: "25+", label: "Industries Served" },
    { icon: TrendingUp, value: "250%", label: "Avg. Traffic Increase" },
    { icon: Globe, value: "15+", label: "Countries" },
    { icon: Award, value: "10+", label: "Years Experience" },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Experience that spans niches, platforms, and markets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20"
            >
              <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-purple-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
