"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingBag, Scale, Heart, ArrowRight } from "lucide-react";

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

const clients = [
  {
    icon: Building2,
    name: "TechFlow Solutions",
    industry: "SaaS",
    label: "SEO Success Story"
  },
  {
    icon: ShoppingBag,
    name: "Urban Fashion Co",
    industry: "E-commerce",
    label: "SEO Success Story"
  },
  {
    icon: Scale,
    name: "Premier Legal Group",
    industry: "Law Firm",
    label: "SEO Success Story"
  },
  {
    icon: Heart,
    name: "Global Finance Hub",
    industry: "Finance",
    label: "SEO Success Story"
  }
];

export default function TrustedBySection() {
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
            Trusted by Ambitious Businesses
            <br />
            <span className="gradient-text">Across Industries</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From startups to established enterprises, I've partnered with forward-thinking brands that refuse to settle for mediocre SEO results.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.2 }
              }}
              className="glass-card rounded-3xl p-8 text-center group cursor-pointer transition-all"
            >
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-gray-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                <client.icon className="w-10 h-10 text-cyan-600 dark:text-cyan-400" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {client.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {client.industry}
              </p>

              <div className="inline-flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 group-hover:gap-3 transition-all">
                <span>{client.label}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Add a horizontal scroll for mobile alternative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-500 text-sm">
            More case studies available upon request
          </p>
        </motion.div>
      </div>
    </section>
  );
}
