"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { ServiceDetail } from "@/data/servicesData";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

interface Props {
  service: ServiceDetail;
}

export default function ServiceHero({ service }: Props) {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-950 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Trust Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-2xl">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="h-4 w-px bg-white/30"></div>
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-white">{service.hero.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={fadeUp} 
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight"
          >
            {service.hero.headline.split(' ').map((word, index) => {
              const highlightWords = ['Technical', 'Local', 'E-commerce', 'Content', 'Link', 'On-Page', 'Off-Page', 'Audit', 'Keyword', 'Competitor'];
              const isHighlight = highlightWords.some(hw => word.includes(hw));
              return (
                <span key={index}>
                  {isHighlight ? (
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                      {word}
                    </span>
                  ) : word}
                  {' '}
                </span>
              );
            })}
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={fadeUp} 
            className="text-xl sm:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            {service.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="#contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative z-10">Get Free SEO Audit</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="px-10 py-5 bg-white/5 hover:bg-white/10 border-2 border-white/30 hover:border-white/50 text-white font-bold text-lg rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book a Strategy Call
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={fadeUp}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-300"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available Worldwide</span>
            </div>
            <div className="h-4 w-px bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">500+ Projects Completed</span>
            </div>
            <div className="h-4 w-px bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">15+ Years Experience</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
