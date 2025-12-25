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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Me for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {industry.name} SEO
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
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
          className="text-center mt-12 p-8 bg-white/5 border border-white/10 rounded-2xl"
        >
          <p className="text-lg text-gray-300">
            <strong className="text-white">No contracts, no retainers, no lock-ins.</strong> You stay because the results 
            are worth it—not because you're trapped in a long-term agreement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
