"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CMSFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is CMS-specific SEO?",
      answer:
        "CMS-specific SEO is search engine optimization tailored to the unique technical architecture, limitations, and capabilities of a specific content management system. Each CMS (WordPress, Shopify, Wix, etc.) has different SEO challenges that require platform-specific expertise to solve effectively.",
    },
    {
      question: "Why does my CMS matter for SEO?",
      answer:
        "Different CMS platforms have different SEO strengths and weaknesses. WordPress has plugin conflicts and index bloat. Shopify has duplicate product URLs. Wix has limited technical control. Each platform requires specialized knowledge to optimize properly. Generic SEO advice often fails because it doesn't account for platform-specific constraints.",
    },
    {
      question: "Which CMS is best for SEO?",
      answer:
        "No single CMS is universally 'best' for SEO. WordPress offers the most flexibility and control. Shopify is excellent for e-commerce with proper optimization. Webflow produces clean code. The 'best' CMS depends on your business needs, technical resources, and SEO goals. Any major CMS can rank well with proper optimization.",
    },
    {
      question: "Can you migrate my site to a different CMS?",
      answer:
        "Yes, I can handle CMS migrations with full SEO preservation including URL mapping, 301 redirects, content migration, and post-migration monitoring. However, I often recommend optimizing your current CMS first—migration is expensive and risky, and most platforms can rank well when properly optimized.",
    },
    {
      question: "Do you work with custom-built CMS platforms?",
      answer:
        "Yes, I work with custom CMS platforms as well. While this content focuses on popular off-the-shelf platforms, I have experience optimizing custom systems. The principles remain the same: understand the architecture, identify constraints, optimize within (or around) limitations.",
    },
    {
      question: "How long does CMS SEO optimization take?",
      answer:
        "Initial optimization typically takes 4-8 weeks depending on site size and issues identified. Results usually appear within 2-3 months. CMS SEO is ongoing—platforms update, your site grows, and search algorithms evolve. Plan for monthly monitoring and quarterly optimization.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions About{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              CMS SEO
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Common questions about platform-specific SEO optimization
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 transition-transform duration-300 ${
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
                  className="px-8 py-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700"
                >
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
