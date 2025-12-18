"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Target, Users, Award, ArrowRight, Loader2, CheckCircle } from "lucide-react";

export default function CaseStudiesHero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const stats = [
    { icon: Award, value: "20+", label: "Total Projects" },
    { icon: TrendingUp, value: "250%", label: "Avg. Traffic Increase" },
    { icon: Target, value: "500+", label: "Keywords Ranked" },
    { icon: Users, value: "15+", label: "Industries Served" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: "Case Studies Page Inquiry",
          description: "Contact request from Case Studies page",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks! I'll respond within 24 hours.");
        setFormData({ name: "", email: "", website: "", phone: "" });
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="relative pt-24 pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Gradient Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-400/30">
              <span className="text-sm font-bold text-cyan-400 uppercase tracking-wide">
                Case Studies
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              SEO Case Studies:{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Real Results
              </span>{" "}
              for Real Businesses
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              See how I've helped businesses achieve 247% traffic growth, 463 local
              rankings, and measurable ROI through strategic SEO
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-xl bg-slate-800/50 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="p-8 rounded-3xl bg-slate-800/50 backdrop-blur-xl border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Get Similar Results
              </h2>
              <p className="text-gray-300 mb-6">
                Ready to achieve breakthrough results like these businesses? Let's discuss your SEO strategy.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="url"
                    placeholder="Website URL"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-green-200 text-sm">{message}</p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-xl bg-red-500/20 border border-red-500/30"
                >
                  <p className="text-red-200 text-sm">{message}</p>
                </motion.div>
              )}

              {/* Trust Signals */}
              <div className="mt-6 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">24hr Response</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
