"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function IndustriesCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Not Sure Which SEO Strategy Fits Your Industry?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Every industry has unique search behavior, competition, and conversion paths. 
            Let's build a custom SEO roadmap for your specific business model.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              Get Free SEO Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-purple-900/50 backdrop-blur-xl text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-purple-900/70 transition-all hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              Book a Strategy Call
            </Link>
          </div>

          <p className="text-sm text-purple-200 mt-8">
            Free 30-minute audit includes competitor analysis, keyword gap report, and custom roadmap
          </p>
        </motion.div>
      </div>
    </section>
  );
}
