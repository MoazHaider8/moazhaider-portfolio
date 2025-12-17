"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, MapPin, ShoppingCart } from "lucide-react";

export default function RelatedServicesCTA() {
  const services = [
    {
      icon: Code,
      name: "Technical SEO",
      description: "Fix crawl errors, optimize Core Web Vitals, and improve site architecture",
      link: "/services/technical-seo",
    },
    {
      icon: ShoppingCart,
      name: "Ecommerce SEO",
      description: "Drive more sales with product page optimization and category SEO",
      link: "/services/ecommerce-seo",
    },
    {
      icon: MapPin,
      name: "Local SEO",
      description: "Dominate local search with GMB optimization and citation building",
      link: "/services/local-seo",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore My Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={service.link}
                className="group block p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
