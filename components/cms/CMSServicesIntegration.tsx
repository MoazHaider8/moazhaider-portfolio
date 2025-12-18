"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wrench, FileSearch, Link as LinkIcon, BarChart } from "lucide-react";

export default function CMSServicesIntegration() {
  const services = [
    {
      icon: Wrench,
      title: "Technical SEO",
      description: "Platform-specific technical fixes, crawl optimization, and performance tuning",
      link: "/services/technical-seo",
    },
    {
      icon: FileSearch,
      title: "SEO Audits",
      description: "Comprehensive CMS audits identifying platform-specific issues and opportunities",
      link: "/services/seo-audit",
    },
    {
      icon: LinkIcon,
      title: "Link Building",
      description: "Authority building strategies that work with your CMS structure",
      link: "/services/link-building",
    },
    {
      icon: BarChart,
      title: "Content SEO",
      description: "Content optimization leveraging your CMS's capabilities",
      link: "/services/content-seo",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How CMS SEO Fits Into{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            CMS optimization is part of my comprehensive SEO approach—not a separate service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.link}>
                <div className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl cursor-pointer h-full">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            <strong>No cannibalization:</strong> CMS SEO pages target platform-specific searches
            ("WordPress SEO services"), while service pages target broader searches
            ("Technical SEO services"). They complement each other, not compete.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
