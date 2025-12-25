"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { IndustryPageData } from "@/lib/industryData";

export default function IndustryFAQ({ industry }: { industry: IndustryPageData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            FAQs About{" "}
            <span className="bg-gradient-to-r from-purple-600 dark:from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {industry.name} SEO
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Common questions about SEO for {industry.name.toLowerCase()} companies
          </p>
        </motion.div>

        <div className="space-y-4">
          {industry.faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg dark:shadow-none"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 dark:text-purple-400 transition-transform flex-shrink-0 ${
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
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl shadow-lg dark:shadow-none"
        >
          <p className="text-gray-700 dark:text-gray-300">
            Have more questions about {industry.name.toLowerCase()} SEO?{" "}
            <a href="/contact" className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 font-semibold underline">
              Let's talk
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
