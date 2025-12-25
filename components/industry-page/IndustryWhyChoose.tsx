"use client";

import { motion } from "framer-motion";
import { Award, Shield, TrendingUp, User } from "lucide-react";
import { IndustryPageData } from "@/lib/industryData";

export default function IndustryWhyChoose({ industry }: { industry: IndustryPageData }) {
  const reasons = [
    {
      icon: Award,
      title: `${industry.name} Experience`,
      description: industry.industryExperience,
    },
    {
      icon: Shield,
      title: "White-Hat Only",
      description: "No black-hat tactics, no link schemes, no shortcuts. I build sustainable SEO that won't get you penalized. Your business reputation matters more than quick wins.",
    },
    {
      icon: User,
      title: "Direct Expert Access",
      description: "You work directly with me—no account managers, no junior staff. Every strategy, audit, and optimization comes from my expertise. No communication barriers.",
    },
    {
      icon: TrendingUp,
      title: "ROI-Driven SEO",
      description: `I don't optimize for vanity metrics. Every recommendation ties back to lead generation, conversion rates, and revenue. Your ${industry.name.toLowerCase()} business growth is the only KPI that matters.`,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/10 dark:to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.05),transparent_50%)]" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Why Choose Me for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              {industry.name} SEO
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The advantages of working with an industry-focused SEO consultant
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group backdrop-blur-xl bg-white dark:bg-slate-900/80 border-2 border-blue-100 dark:border-blue-900/30 rounded-2xl p-8 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8, delay: index * 0.1 }}
                className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center mb-6 shadow-xl shadow-blue-500/30 group-hover:shadow-2xl group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300"
              >
                <reason.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Signal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 p-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-none"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            <strong className="text-slate-900 dark:text-white">No contracts, no retainers, no lock-ins.</strong> You stay because the results 
            are worth it—not because you're trapped in a long-term agreement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
