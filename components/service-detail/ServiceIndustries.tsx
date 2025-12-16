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
      staggerChildren: 0.1
    }
  }
};

interface Props {
  service: ServiceDetail;
}

export default function ServiceIndustries({ service }: Props) {
  return (
    <section className="relative py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Industries That Benefit from {service.name}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Proven results across diverse business sectors
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {service.industries.map((industry, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <Link
                href="/industries"
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/40 rounded-full text-gray-900 dark:text-white font-medium transition-all"
              >
                {industry}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
