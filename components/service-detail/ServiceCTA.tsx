"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface Props {
  serviceName: string;
}

export default function ServiceCTA({ serviceName }: Props) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Strong gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Improve Your
            <br />
            SEO Performance?
          </motion.h2>

          <motion.p variants={fadeUp} className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's build an {serviceName} strategy that drives real business results. Get a free consultation and discover your growth opportunities.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="#contact"
              className="group px-10 py-5 bg-white hover:bg-gray-50 text-cyan-600 font-bold rounded-xl shadow-2xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2 text-lg"
            >
              Get Free SEO Audit
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="px-10 py-5 bg-white/10 hover:bg-white/20 border-2 border-white text-white font-bold rounded-xl backdrop-blur-sm transition-all hover:scale-105 text-center text-lg"
            >
              Book a Call
            </Link>
          </motion.div>

          {/* Trust Microcopy */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-medium">24-Hour Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-medium">No Long-Term Contracts</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
