"use client";

import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/servicesData";
import * as Icons from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

interface Props {
  service: ServiceDetail;
}

export default function WhyBusinessesChoose({ service }: Props) {
  if (!service.whyBusinessesChoose) return null;

  return (
    <section className="relative py-28 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 dark:from-black dark:via-gray-950 dark:to-indigo-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="inline-block mb-6">
            <span className="px-6 py-3 bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold text-sm uppercase tracking-widest rounded-full">
              Trusted by Industry Leaders
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeUp} 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight"
          >
            Why Top Businesses Choose Me for{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
              SEO
            </span>
          </motion.h2>

          <motion.p 
            variants={fadeUp} 
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Results-driven expertise backed by proven performance metrics
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {service.whyBusinessesChoose.stats.map((stat, idx) => {
            const IconComponent = (Icons as any)[stat.icon] || Icons.TrendingUp;
            
            return (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300 overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>

                    {/* Value */}
                    <div className="text-4xl sm:text-5xl font-black text-white mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                      {stat.value}
                    </div>

                    {/* Label */}
                    <div className="text-sm sm:text-base text-gray-300 font-semibold">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {service.whyBusinessesChoose.reasons.map((reason, idx) => {
            const IconComponent = (Icons as any)[reason.icon] || Icons.Zap;
            
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:via-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
                  
                  <div className="relative z-10 flex items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-2xl font-black text-white mb-4">
                        {reason.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base text-gray-300 leading-relaxed font-medium">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300 mb-8 font-medium">
            Join hundreds of businesses achieving exceptional SEO results
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Get Started Today</span>
            <Icons.ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
