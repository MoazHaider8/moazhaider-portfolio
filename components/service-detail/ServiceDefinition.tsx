"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceDetail } from "@/data/servicesData";
import { Sparkles, Users, Globe2, Layers } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity
  }
};

interface Props {
  service: ServiceDetail;
}

export default function ServiceDefinition({ service }: Props) {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={floatAnimation}
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 dark:from-cyan-600/10 dark:to-blue-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          {/* Header with Badge */}
          <motion.div variants={fadeUp} className="text-center mb-12">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 dark:border-cyan-400/30"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">Service Overview</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-900 dark:from-white dark:via-cyan-200 dark:to-blue-200">
              What Is {service.name}?
            </h2>
          </motion.div>

          {/* Main Definition Card */}
          <motion.div 
            variants={fadeUp} 
            className="relative group mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-gray-200 dark:border-gray-700 shadow-xl">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {service.definition.what}
              </p>
            </div>
          </motion.div>

          {/* Who Needs This - Enhanced Card */}
          <motion.div 
            variants={fadeUp}
            className="relative group mb-8"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 dark:from-cyan-900/20 dark:via-blue-900/20 dark:to-purple-900/20 border-2 border-cyan-400/30 dark:border-cyan-600/30 rounded-3xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="w-7 h-7 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Who Needs This?</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{service.definition.whoFor}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info Grid */}
          <motion.div 
            variants={fadeUp}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            {/* Platforms Card */}
            {service.platforms && (
              <motion.div 
                className="group relative"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Platforms</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Works with <span className="font-semibold text-gray-900 dark:text-white">{service.platforms.join(', ')}</span> and custom platforms
                  </p>
                </div>
              </motion.div>
            )}

            {/* Availability Card */}
            <motion.div 
              className="group relative"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Globe2 className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Availability</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Serving clients <span className="font-semibold text-gray-900 dark:text-white">worldwide</span>, with primary markets in <Link href="/united-states" className="text-green-600 dark:text-green-400 hover:underline font-semibold">US</Link>, <Link href="/united-kingdom" className="text-green-600 dark:text-green-400 hover:underline font-semibold">UK</Link>, <Link href="/canada" className="text-green-600 dark:text-green-400 hover:underline font-semibold">Canada</Link>, and <Link href="/australia" className="text-green-600 dark:text-green-400 hover:underline font-semibold">Australia</Link>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Related Services */}
          {service.relatedServices && service.relatedServices.length > 0 && (
            <motion.div 
              variants={fadeUp}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />
                  Related Services
                </h4>
                <div className="flex flex-wrap gap-3">
                  {service.relatedServices.map((relatedSlug, idx) => (
                    <motion.div
                      key={relatedSlug}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <Link
                        href={`/services/${relatedSlug}`}
                        className="group relative inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-900/30 dark:hover:to-blue-900/30 border border-gray-300 dark:border-gray-600 hover:border-cyan-400 dark:hover:border-cyan-500 rounded-xl text-sm font-semibold text-gray-900 dark:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        {relatedSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
