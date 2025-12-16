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
  ArrowRight,
  CheckCircle2
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
      staggerChildren: 0.06
    }
  }
};

const services = [
  {
    icon: Wrench,
    name: "Technical SEO",
    definition: "Optimize website architecture, speed, and crawlability to improve search engine indexing and user experience.",
    outcomes: [
      "Faster page load speeds",
      "Improved Core Web Vitals",
      "Better crawl efficiency",
      "Higher search rankings"
    ],
    gradient: "from-blue-500 to-cyan-500",
    link: "/services/technical-seo"
  },
  {
    icon: MapPin,
    name: "Local SEO",
    definition: "Dominate local search results and Google Maps to attract nearby customers and increase foot traffic.",
    outcomes: [
      "Top 3 Google Maps rankings",
      "Increased local visibility",
      "More qualified leads",
      "Higher conversion rates"
    ],
    gradient: "from-green-500 to-emerald-500",
    link: "/services/local-seo"
  },
  {
    icon: ShoppingCart,
    name: "E-commerce SEO",
    definition: "Drive organic sales by optimizing product pages, category structure, and shopping experience for search engines.",
    outcomes: [
      "Increased product visibility",
      "Higher organic revenue",
      "Better conversion rates",
      "Reduced ad dependency"
    ],
    gradient: "from-purple-500 to-pink-500",
    link: "/services/ecommerce-seo"
  },
  {
    icon: FileText,
    name: "Content SEO",
    definition: "Create and optimize high-quality, search-intent-driven content that ranks and converts.",
    outcomes: [
      "Top rankings for target keywords",
      "Increased organic traffic",
      "Better user engagement",
      "Authority building"
    ],
    gradient: "from-orange-500 to-red-500",
    link: "/services/content-seo"
  },
  {
    icon: Link2,
    name: "Link Building",
    definition: "Acquire high-quality, relevant backlinks through white-hat strategies to boost domain authority and rankings.",
    outcomes: [
      "Increased domain authority",
      "Higher search rankings",
      "More referral traffic",
      "Stronger brand presence"
    ],
    gradient: "from-cyan-500 to-blue-500",
    link: "/services/link-building"
  },
  {
    icon: LayoutTemplate,
    name: "On-Page SEO",
    definition: "Optimize individual pages with proper meta tags, headers, internal linking, and content structure for maximum relevance.",
    outcomes: [
      "Better keyword targeting",
      "Improved click-through rates",
      "Higher page rankings",
      "Enhanced user experience"
    ],
    gradient: "from-indigo-500 to-purple-500",
    link: "/services/on-page-seo"
  },
  {
    icon: Network,
    name: "Off-Page SEO",
    definition: "Build brand authority and trust through strategic backlinks, social signals, and digital PR campaigns.",
    outcomes: [
      "Stronger brand authority",
      "Increased website trust",
      "More quality backlinks",
      "Better search visibility"
    ],
    gradient: "from-pink-500 to-rose-500",
    link: "/services/off-page-seo"
  },
  {
    icon: SearchCheck,
    name: "SEO Audit",
    definition: "Comprehensive analysis of your website's SEO health to identify technical issues, content gaps, and growth opportunities.",
    outcomes: [
      "Identify critical issues",
      "Discover quick wins",
      "Competitive analysis",
      "Actionable roadmap"
    ],
    gradient: "from-teal-500 to-green-500",
    link: "/services/seo-audit"
  },
  {
    icon: KeyRound,
    name: "Keyword Research",
    definition: "In-depth keyword and search intent analysis to discover high-value opportunities and content gaps.",
    outcomes: [
      "Target profitable keywords",
      "Understand search intent",
      "Find content opportunities",
      "Beat competitors"
    ],
    gradient: "from-yellow-500 to-orange-500",
    link: "/services/keyword-research"
  },
  {
    icon: Swords,
    name: "Competitor Analysis",
    definition: "Deep analysis of competitor strategies to identify their strengths, weaknesses, and your competitive advantages.",
    outcomes: [
      "Understand competitor tactics",
      "Find market gaps",
      "Steal their best keywords",
      "Outrank competition"
    ],
    gradient: "from-red-500 to-pink-500",
    link: "/services/competitor-analysis"
  }
];

export default function AllServicesSection() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Complete SEO Services
            <br />
            <span className="gradient-text">Tailored to Your Goals</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From technical foundations to content strategy and link acquisition, I offer the full spectrum of SEO services to help your business dominate search results.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
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
                <div className="glass-card rounded-3xl p-8 h-full transition-all group-hover:shadow-2xl relative overflow-hidden">
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

                    {/* Service Name */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>

                    {/* Definition */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {service.definition}
                    </p>

                    {/* Outcomes */}
                    <div className="space-y-2 mb-6">
                      {service.outcomes.map((outcome, outcomeIdx) => (
                        <div key={outcomeIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{outcome}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
