"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wordpress, ShoppingBag, Layout, Box, Code, Database, Layers, FileCode } from "lucide-react";

export default function CMSPlatformsGrid() {
  const platforms = [
    {
      name: "WordPress",
      slug: "wordpress-seo",
      icon: Wordpress,
      tagline: "Fix plugin conflicts & index bloat",
      color: "from-blue-600 to-blue-800",
      popular: true,
    },
    {
      name: "Shopify",
      slug: "shopify-seo",
      icon: ShoppingBag,
      tagline: "Optimize collections & product pages",
      color: "from-green-600 to-green-800",
      popular: true,
    },
    {
      name: "Wix",
      slug: "wix-seo",
      icon: Layout,
      tagline: "Work around Wix limitations",
      color: "from-orange-600 to-orange-800",
      popular: false,
    },
    {
      name: "Squarespace",
      slug: "squarespace-seo",
      icon: Box,
      tagline: "Maximize template SEO potential",
      color: "from-pink-600 to-pink-800",
      popular: false,
    },
    {
      name: "Webflow",
      slug: "webflow-seo",
      icon: Code,
      tagline: "Leverage clean code & CMS collections",
      color: "from-indigo-600 to-indigo-800",
      popular: true,
    },
    {
      name: "Magento",
      slug: "magento-seo",
      icon: Database,
      tagline: "Handle large catalogs & faceted navigation",
      color: "from-red-600 to-red-800",
      popular: false,
    },
    {
      name: "Drupal",
      slug: "drupal-seo",
      icon: Layers,
      tagline: "Optimize modules & taxonomy",
      color: "from-cyan-600 to-cyan-800",
      popular: false,
    },
    {
      name: "Joomla",
      slug: "joomla-seo",
      icon: FileCode,
      tagline: "Configure SEF URLs & extensions",
      color: "from-purple-600 to-purple-800",
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              CMS Platform
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Select your platform to see specific SEO strategies, challenges, and solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Link href={`/cms/${platform.slug}`}>
                <div className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer h-full">
                  {/* Popular Badge */}
                  {platform.popular && (
                    <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-bold shadow-lg">
                      Popular
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {platform.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {platform.tagline}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-4 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
