"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Wrench, 
  MapPin, 
  ShoppingCart, 
  FileText, 
  Link2, 
  LayoutTemplate,
  Network,
  SearchCheck,
  KeyRound,
  Swords,
  ArrowRight 
} from "lucide-react";

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

const services = [
  {
    icon: Wrench,
    name: "Technical SEO",
    description: "Expert technical SEO services to fix site speed issues, improve crawlability, and enhance Core Web Vitals.",
    gradient: "from-blue-500 to-cyan-500",
    link: "/services/technical-seo"
  },
  {
    icon: MapPin,
    name: "Local SEO",
    description: "Professional local SEO services to dominate Google Maps, optimize citations, and increase local visibility.",
    gradient: "from-green-500 to-emerald-500",
    link: "/services/local-seo"
  },
  {
    icon: ShoppingCart,
    name: "E-commerce SEO",
    description: "Comprehensive e-commerce SEO services to drive more organic sales, optimize product pages, and boost revenue.",
    gradient: "from-purple-500 to-pink-500",
    link: "/services/ecommerce-seo"
  },
  {
    icon: FileText,
    name: "Content SEO",
    description: "Expert content SEO services to create high-ranking, search-optimized content that drives organic traffic.",
    gradient: "from-orange-500 to-red-500",
    link: "/services/content-seo"
  },
  {
    icon: Link2,
    name: "Link Building",
    description: "Professional white-hat link building services to acquire high-quality backlinks and boost domain authority.",
    gradient: "from-cyan-500 to-blue-500",
    link: "/services/link-building"
  },
  {
    icon: LayoutTemplate,
    name: "On-Page SEO",
    description: "Complete on-page SEO optimization including meta tags, headers, internal linking, and content structure.",
    gradient: "from-indigo-500 to-purple-500",
    link: "/services/on-page-seo"
  },
  {
    icon: Network,
    name: "Off-Page SEO",
    description: "Strategic off-page SEO to build brand authority through backlinks, social signals, and digital PR.",
    gradient: "from-pink-500 to-rose-500",
    link: "/services/off-page-seo"
  },
  {
    icon: SearchCheck,
    name: "SEO Audit",
    description: "Comprehensive SEO audit to identify technical issues, content gaps, and growth opportunities.",
    gradient: "from-teal-500 to-green-500",
    link: "/services/seo-audit"
  },
  {
    icon: KeyRound,
    name: "Keyword Research",
    description: "In-depth keyword research to discover high-value search terms and content opportunities.",
    gradient: "from-yellow-500 to-orange-500",
    link: "/services/keyword-research"
  },
  {
    icon: Swords,
    name: "Competitor Analysis",
    description: "Detailed competitor analysis to uncover their strategies and identify your competitive advantages.",
    gradient: "from-red-500 to-pink-500",
    link: "/services/competitor-analysis"
  }
];

export default function ServicesShowcase() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional SEO Services for
            <br />
            <span className="gradient-text">Your Business</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive search engine optimization services including technical SEO, local SEO, content SEO, link building, and more. My SEO expert delivers proven strategies to improve your Google rankings and drive qualified organic traffic to your website.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Link href={service.link}>
                <div className="glass-card rounded-3xl p-8 h-full transition-all group-hover:border-white/30 relative overflow-hidden">
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Icon Badge */}
                    <motion.div 
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                      <span>Explore {service.name}</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-3xl p-8 inline-block">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Looking for something specific? Explore services by intent:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/services/local-seo"
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-xl text-sm font-medium text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 transition-all"
              >
                For More Local Leads
              </Link>
              <Link
                href="/services/ecommerce-seo"
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-xl text-sm font-medium text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 transition-all"
              >
                For More Online Sales
              </Link>
              <Link
                href="/services/technical-seo"
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-xl text-sm font-medium text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 transition-all"
              >
                For Technical Foundation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
