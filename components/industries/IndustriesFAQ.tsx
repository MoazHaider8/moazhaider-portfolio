"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How is SEO different for each industry?",
    answer:
      "Search behavior, competition, and conversion paths vary dramatically by industry. HVAC companies compete for emergency keywords ('furnace repair near me'), while law firms target long research cycles ('best personal injury lawyer'). SaaS needs product-led content, home services need local citations. Each requires fundamentally different keyword strategies, content types, and technical implementations.",
  },
  {
    question: "Do you customize SEO strategies per niche?",
    answer:
      "Absolutely. I don't use templates. Every industry gets a custom audit analyzing their specific search landscape, competitor analysis, and conversion funnel. A plumber needs Google Business Profile optimization and local pack rankings. A B2B SaaS company needs topical authority clusters and product-market SEO. The tactics, timelines, and KPIs are all customized.",
  },
  {
    question: "Can you handle local and national industry SEO?",
    answer:
      "Yes. Most industries need both. Home services (HVAC, plumbing, roofing) are local-first with city-level campaigns. SaaS and B2B are national/global with topical authority strategies. Professional services (law, healthcare, real estate) often need hybrid approaches—local offices with national brand authority. I scale the strategy to match your business model.",
  },
  {
    question: "How long does industry-specific SEO take to see results?",
    answer:
      "Local industries (home services, contractors) can see rankings improve in 3-6 months with aggressive local SEO. National industries (SaaS, B2B) take 6-12 months to build topical authority. Competitive industries (law, healthcare) may take 9-18 months. It depends on your current site authority, competition density, and content velocity. I provide realistic timelines during the audit.",
  },
  {
    question: "What industries do you specialize in most?",
    answer:
      "I've worked extensively with home services (HVAC, plumbing, roofing), remodeling contractors (bathroom, kitchen, flooring), restoration companies (water damage, fire damage, mold), professional services (law, healthcare, real estate), and SaaS/B2B companies. I've also handled niche industries like self-storage, pest control, and dental practices. If your industry isn't listed, I can still help—I specialize in the research process.",
  },
  {
    question: "Do you work with industries not listed on this page?",
    answer:
      "Yes. The 27 industries listed are my most common clients, but I've worked with 40+ industries total. If your niche has search volume and commercial intent, I can build an SEO strategy for it. During the free audit, I'll analyze your industry's search landscape and confirm if SEO is a viable channel for your business model.",
  },
];

export default function IndustriesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Industry SEO{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Common questions about industry-specific SEO strategies
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
