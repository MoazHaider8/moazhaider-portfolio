"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { IndustryPageData } from "@/lib/industryData";

export default function IndustryFAQ({ industry }: { industry: IndustryPageData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            FAQs About{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
              {industry.name} SEO
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
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
              className="group backdrop-blur-xl bg-white dark:bg-slate-900/80 border-2 border-purple-100 dark:border-purple-900/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              >
                <span className="text-lg font-bold text-slate-900 dark:text-white pr-8 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg shadow-purple-500/30' 
                    : 'bg-purple-100 dark:bg-purple-900/30'
                }`}>
                  <ChevronDown
                    className={`w-5 h-5 transition-all duration-300 ${
                      openIndex === index 
                        ? 'rotate-180 text-white' 
                        : 'text-purple-600 dark:text-purple-400'
                    }`}
                  />
                </div>
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
