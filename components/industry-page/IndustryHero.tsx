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
    <section className="relative pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-pink-400/20 to-purple-400/20 dark:from-pink-600/10 dark:to-purple-600/10 rounded-full blur-3xl"
        />
      </div>
      
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 border-2 border-purple-500/40 dark:border-purple-500/20 mb-6 backdrop-blur-xl shadow-lg shadow-purple-500/10"
            >
              <div className="p-1.5 rounded-full bg-gradient-to-br from-purple-600 to-pink-600">
                <Icon className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-bold text-purple-700 dark:text-purple-300 tracking-wide">
                {industry.badge}
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
                {industry.h1}
              </span>
            </motion.h1>

            {/* Positioning */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              {industry.positioning}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#audit-form"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-500 hover:scale-105 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free SEO Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800/50 backdrop-blur-xl border-2 border-slate-300 dark:border-white/20 px-8 py-4 rounded-xl font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:border-purple-500 dark:hover:border-purple-400 transition-all hover:scale-105 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Book a Strategy Call
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-900/10 dark:border-white/10"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  {industry.seoType === "local" ? "Local" : industry.seoType === "national" ? "National" : "Hybrid"}
                </div>
                <div className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">SEO Focus</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">100%</div>
                <div className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">White-Hat</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">Direct</div>
                <div className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Expert Access</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Quick Audit Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative backdrop-blur-2xl bg-white/95 dark:bg-slate-900/90 border-2 border-purple-200 dark:border-purple-500/30 rounded-2xl p-8 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-bl-full" />
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 relative">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Get Your Free {industry.name} SEO Audit
                </span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 relative">
                See exactly how you rank vs. competitors in your area
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 relative">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="url"
                    placeholder="Your Website (if you have one)"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 rounded-xl font-bold text-white hover:from-purple-500 hover:to-pink-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105"
                >
                  {status === "loading" ? "Sending..." : status === "success" ? "✓ Request Sent!" : "Get Free Audit →"}
                </button>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 dark:text-green-400 text-sm text-center font-medium"
                  >
                    ✓ Thanks! I'll send your audit within 24 hours.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 dark:text-red-400 text-sm text-center font-medium"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-6 text-center relative">
                🔒 No spam. Unsubscribe anytime. I respect your inbox.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
