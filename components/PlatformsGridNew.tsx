"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const platforms = [
  {
    name: "WordPress",
    description: "Complete WordPress SEO optimization including speed, schema, and content structure",
    gradient: "from-blue-600 to-blue-800",
    logo: "W",
    href: "/cms/wordpress-seo"
  },
  {
    name: "Shopify",
    description: "E-commerce SEO for Shopify stores to rank products and increase sales",
    gradient: "from-green-600 to-green-800",
    logo: "S",
    href: "/cms/shopify-seo"
  },
  {
    name: "Wix",
    description: "Expert Wix SEO services to overcome platform limitations and improve rankings",
    gradient: "from-purple-600 to-purple-800",
    logo: "W",
    href: "/cms/wix-seo"
  },
  {
    name: "Squarespace",
    description: "Professional Squarespace SEO to maximize your site's search visibility",
    gradient: "from-gray-700 to-gray-900",
    logo: "SQ",
    href: "/cms/squarespace-seo"
  },
  {
    name: "Magento",
    description: "Advanced Magento SEO for large-scale e-commerce operations",
    gradient: "from-orange-600 to-red-600",
    logo: "M",
    href: "/cms/magento-seo"
  },
  {
    name: "Webflow",
    description: "Technical Webflow SEO optimization for modern websites",
    gradient: "from-cyan-600 to-blue-600",
    logo: "WF",
    href: "/cms/webflow-seo"
  },
  {
    name: "BigCommerce",
    description: "Comprehensive BigCommerce SEO to drive organic e-commerce growth",
    gradient: "from-indigo-600 to-purple-600",
    logo: "BC",
    href: "/cms"
  },
  {
    name: "Custom CMS",
    description: "Tailored SEO solutions for custom-built websites and applications",
    gradient: "from-pink-600 to-rose-600",
    logo: "C",
    href: "/cms"
  }
];

export default function PlatformsGrid() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Platform-Specific SEO Services
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Expert SEO optimization for all major CMS platforms. I know the technical nuances of each platform to maximize your search engine rankings.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {platforms.map((platform, idx) => (
            <Link
              key={idx}
              href={platform.href}
            >
              <motion.div
                variants={fadeUp}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group cursor-pointer"
              >
                <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Logo Badge */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <span className="text-2xl font-bold text-white">{platform.logo}</span>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {platform.name} SEO
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">
                    {platform.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
                    <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="glass-card rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Not Sure Which Platform You're On?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              No worries! I can identify your CMS and create a customized SEO strategy regardless of your platform.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105"
            >
              Get Platform-Specific Audit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
