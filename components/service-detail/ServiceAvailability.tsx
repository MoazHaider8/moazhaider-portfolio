"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, MapPin } from "lucide-react";

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

export default function ServiceAvailability() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-6 shadow-xl">
            <Globe className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Local & Global Availability
          </motion.h2>

          <motion.p variants={fadeUp} className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            I work with businesses worldwide, delivering SEO services remotely with the same level of quality and communication as if I were on-site. Whether you're in New York, London, Dubai, or anywhere else, I provide strategic SEO that drives results regardless of your location.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white font-medium hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors shadow-sm"
            >
              <MapPin className="w-5 h-5" />
              View All Locations
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
