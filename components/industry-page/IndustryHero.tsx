"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { IndustryPageData } from "@/lib/industryData";
import { useState } from "react";

export default function IndustryHero({ industry }: { industry: IndustryPageData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    industry: industry.name,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const Icon = (LucideIcons as any)[industry.icon] || LucideIcons.Wrench;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          message: `${industry.name} SEO Page Inquiry`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", website: "", industry: industry.name });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] dark:bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 dark:border-purple-500/20 mb-6">
              <Icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                {industry.badge}
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {industry.h1}
            </h1>

            {/* Positioning */}
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {industry.positioning}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#audit-form"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-xl font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-105 shadow-xl shadow-purple-500/20"
              >
                Get Free SEO Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-white/10 backdrop-blur-xl border border-slate-300 dark:border-white/20 px-8 py-4 rounded-xl font-semibold text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 transition-all"
              >
                <Calendar className="w-5 h-5" />
                Book a Strategy Call
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-900/10 dark:border-white/10">
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{industry.seoType === "local" ? "Local" : industry.seoType === "national" ? "National" : "Hybrid"}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">SEO Focus</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">White-Hat</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Direct</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Expert Access</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Quick Audit Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-xl bg-white/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-xl dark:shadow-none"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Get Your Free {industry.name} SEO Audit
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              See exactly how you rank vs. competitors in your area
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <input
                  type="url"
                  placeholder="Your Website (if you have one)"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 rounded-xl font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Request Sent!" : "Get Free Audit"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  Thanks! I'll send your audit within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>

            <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 text-center">
              No spam. Unsubscribe anytime. I respect your inbox.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
