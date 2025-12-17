"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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

export default function ServiceDefinition({ service }: Props) {
  return (
    <section className="relative py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What Is {service.name}?
          </motion.h2>

          <motion.div variants={fadeUp} className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <p className="leading-relaxed">
              {service.definition.what}
            </p>
            
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200 dark:border-cyan-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Who Needs This?</h3>
              <p className="mb-2 text-gray-700 dark:text-gray-300">{service.definition.whoFor}</p>
            </div>

            {service.platforms && (
              <p className="text-base text-gray-600 dark:text-gray-400">
                <strong className="text-gray-900 dark:text-white">Platforms:</strong> Works with {service.platforms.join(', ')} and custom platforms
              </p>
            )}

            <p className="text-base text-gray-600 dark:text-gray-400">
              <strong className="text-gray-900 dark:text-white">Availability:</strong> Serving clients worldwide, with primary markets in US, UK, Canada, and Australia
            </p>

            {service.relatedServices && service.relatedServices.length > 0 && (
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Related Services:</p>
                <div className="flex flex-wrap gap-3">
                  {service.relatedServices.map((relatedSlug) => (
                    <Link
                      key={relatedSlug}
                      href={`/services/${relatedSlug}`}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 text-gray-900 dark:text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      {relatedSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
