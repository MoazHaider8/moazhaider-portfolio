"use client";

import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const benefits = [
  {
    benefit: "SEO Expert-Led Strategy",
    me: true,
    others: false,
    description: "Direct access to an experienced SEO consultant, not junior staff or outsourced teams."
  },
  {
    benefit: "Proven Track Record",
    me: true,
    others: "Sometimes",
    description: "Real case studies with measurable results across multiple industries and markets."
  },
  {
    benefit: "White-Hat Only Techniques",
    me: true,
    others: "Sometimes",
    description: "100% compliant with Google guidelines—no risky shortcuts that could harm your rankings."
  },
  {
    benefit: "ROI-Focused Approach",
    me: true,
    others: false,
    description: "Every strategy tied to business goals: revenue, leads, and conversions—not just traffic."
  },
  {
    benefit: "Clear Communication",
    me: true,
    others: false,
    description: "Regular updates, transparent reporting, and straightforward explanations of complex SEO topics."
  },
  {
    benefit: "Semantic & Topical Authority",
    me: true,
    others: false,
    description: "Advanced entity-based SEO and comprehensive topic coverage for lasting search dominance."
  }
];

export default function WhyChooseMe() {
  return (
    <section className="relative py-12 overflow-hidden bg-gray-50 dark:bg-gray-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose
            <br />
            <span className="gradient-text">My SEO Services</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Not all SEO services are created equal. Here's what sets my approach apart from generic agencies.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          {/* Comparison Table */}
          <div className="glass-card rounded-3xl p-8">
            <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-white/10">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">Feature</div>
              <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 text-center">My Service</div>
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 text-center">Others</div>
            </div>

            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100 dark:border-white/5 last:border-0"
              >
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.benefit}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
                <div className="flex items-center justify-center">
                  {item.me === true && <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />}
                </div>
                <div className="flex items-center justify-center">
                  {item.others === true && <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />}
                  {item.others === false && <X className="w-6 h-6 text-red-500 dark:text-red-400" />}
                  {item.others === "Sometimes" && <span className="text-sm text-gray-500 dark:text-gray-400">Sometimes</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
