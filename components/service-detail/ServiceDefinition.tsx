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
              <strong className="text-gray-900 dark:text-white">What:</strong> {service.definition.what}
            </p>
            <p className="leading-relaxed">
              <strong className="text-gray-900 dark:text-white">Why:</strong> {service.definition.why}
            </p>
            <p className="leading-relaxed">
              <strong className="text-gray-900 dark:text-white">Who it's for:</strong> {service.definition.whoFor}
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              {service.relatedServices.map((relatedSlug) => (
                <Link
                  key={relatedSlug}
                  href={`/services/${relatedSlug}`}
                  className="text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  → {relatedSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
