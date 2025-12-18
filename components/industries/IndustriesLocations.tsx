"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function IndustriesLocations() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Industry SEO{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Anywhere
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Most industries require a combination of <strong>local</strong> and <strong>national</strong> SEO strategies. 
            Home services need city-level targeting. SaaS needs global reach. Professional services often need both.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            I work with businesses across the United States, United Kingdom, Canada, Australia, and internationally. 
            Your industry determines the geographic strategy—not arbitrary limitations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
