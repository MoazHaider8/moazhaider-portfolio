"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Common questions about SEO services, timelines, and strategies
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isExpanded = expandedFAQ === faq.id;
            
            return (
              <div
                key={faq.id}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white pr-8">
                    {faq.question}
                  </h3>
                  {isExpanded ? (
                    <ChevronUp className="text-primary-600 dark:text-primary-400 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 animate-slide-down">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Have more questions?{" "}
            <a
              href="#contact"
              className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
