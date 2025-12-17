"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you work with my industry?",
      answer:
        "Yes! I've worked with 15+ industries including Ecommerce, SaaS, Healthcare, Legal, Real Estate, and more. Every industry has unique SEO challenges, and I tailor strategies accordingly.",
    },
    {
      question: "What are your rates?",
      answer:
        "My services start at $2,000/month for ongoing SEO or $1,500 for one-time audits. Pricing depends on project scope, industry competitiveness, and business goals. I provide detailed quotes after our discovery call.",
    },
    {
      question: "Do you offer audits only?",
      answer:
        "Yes! I offer standalone SEO audits that provide a comprehensive analysis of your site's technical health, content, and backlink profile, plus actionable recommendations.",
      link: { text: "Learn more about SEO Audits", href: "/services/seo-audit" },
    },
    {
      question: "How long until I see results?",
      answer:
        "SEO is a 3-6 month investment. You'll see technical improvements within weeks, but meaningful traffic and ranking gains typically appear around month 3-4. Sustainable growth compounds over time.",
    },
    {
      question: "Can I hire you for one-time projects?",
      answer:
        "Yes, I offer both ongoing retainers and project-based work (audits, migrations, content strategies). The best fit depends on your goals and current SEO needs.",
    },
    {
      question: "Do you work with agencies?",
      answer:
        "Yes, I offer white-label SEO services for agencies looking to provide expert SEO to their clients without building an in-house team.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Common Questions Before We Talk
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                  {faq.link && (
                    <Link
                      href={faq.link.href}
                      className="inline-flex items-center gap-2 mt-3 text-cyan-600 dark:text-cyan-400 font-semibold hover:gap-3 transition-all duration-300"
                    >
                      {faq.link.text}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
