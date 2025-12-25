"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { IndustryPageData } from "@/lib/industryData";

export default function IndustryCTA({ industry }: { industry: IndustryPageData }) {
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
            Ready to Grow Your {industry.name} Business with SEO?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Stop losing leads to competitors. Get a free SEO audit showing exactly where you rank, 
            what's holding you back, and how to fix it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#audit-form"
              className="group inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              Get Free SEO Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-purple-900/50 backdrop-blur-xl text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-purple-900/70 transition-all hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              Book a Strategy Call
            </Link>
          </div>

          <p className="text-sm text-purple-200 mt-8">
            <strong>Free 30-minute audit includes:</strong> Competitor analysis, keyword gap report, 
            and custom SEO roadmap for your {industry.name.toLowerCase()} business
          </p>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">No Contracts</div>
              <div className="text-sm text-purple-200">Stay because it works</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">White-Hat</div>
              <div className="text-sm text-purple-200">100% Google-safe</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">Direct Access</div>
              <div className="text-sm text-purple-200">No account managers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">ROI-Focused</div>
              <div className="text-sm text-purple-200">Leads over metrics</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
