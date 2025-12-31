"use client";

import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";
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
      staggerChildren: 0.06
    }
  }
};

const countries = [
  { 
    code: "US", 
    name: "United States",
    slug: "united-states",
    flagGradient: "from-blue-700 via-white to-red-600",
    cities: "New York, Los Angeles, Chicago, Houston"
  },
  { 
    code: "GB", 
    name: "United Kingdom",
    slug: "united-kingdom",
    flagGradient: "from-blue-800 via-white to-red-700",
    cities: "London, Manchester, Birmingham"
  },
  { 
    code: "CA", 
    name: "Canada",
    slug: "canada",
    flagGradient: "from-red-600 via-white to-red-600",
    cities: "Toronto, Vancouver, Montreal"
  },
  { 
    code: "AU", 
    name: "Australia",
    slug: "australia",
    flagGradient: "from-blue-700 via-white to-blue-700",
    cities: "Sydney, Melbourne, Brisbane"
  },
  { 
    code: "IN", 
    name: "India",
    slug: "india",
    flagGradient: "from-orange-500 via-white to-green-600",
    cities: "Mumbai, Delhi, Bangalore"
  },
  { 
    code: "DE", 
    name: "Germany",
    slug: "germany",
    flagGradient: "from-gray-900 via-red-600 to-yellow-400",
    cities: "Berlin, Munich, Hamburg"
  },
  { 
    code: "FR", 
    name: "France",
    slug: "france",
    flagGradient: "from-blue-700 via-white to-red-600",
    cities: "Paris, Lyon, Marseille"
  },
  { 
    code: "IT", 
    name: "Italy",
    slug: "italy",
    flagGradient: "from-green-600 via-white to-red-600",
    cities: "Rome, Milan, Naples"
  },
  { 
    code: "ES", 
    name: "Spain",
    slug: "spain",
    flagGradient: "from-red-600 via-yellow-400 to-red-600",
    cities: "Madrid, Barcelona, Valencia"
  },
  { 
    code: "NL", 
    name: "Netherlands",
    slug: "netherlands",
    flagGradient: "from-red-600 via-white to-blue-700",
    cities: "Amsterdam, Rotterdam, The Hague"
  },
  { 
    code: "AE", 
    name: "UAE",
    slug: "uae",
    flagGradient: "from-green-600 via-white to-gray-900",
    cities: "Dubai, Abu Dhabi, Sharjah"
  },
  { 
    code: "SG", 
    name: "Singapore",
    slug: "singapore",
    flagGradient: "from-red-600 via-white to-red-600",
    cities: "Singapore City"
  }
];

export default function LocationsAccordion() {
  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-4"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <Globe className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">Global Coverage</span>
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Select Your <span className="gradient-text">Country</span> for Ecommerce SEO Services
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            I provide expert ecommerce SEO services and search engine optimization across major countries worldwide. My SEO consultant helps ecommerce businesses improve Google rankings and drive organic traffic in your target markets
          </motion.p>
        </motion.div>

        {/* Countries Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12"
        >
          {countries.map((country, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
            >
              <Link href={`/${country.slug}`} className="block">
                <div className="glass-card rounded-2xl p-6 h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                {/* Header with Flag and Country */}
                <div className="flex items-start gap-3 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${country.flagGradient} flex items-center justify-center shadow-md flex-shrink-0`}
                  >
                    <span className="text-sm font-bold text-white drop-shadow-md">{country.code}</span>
                  </motion.div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-1">
                      {country.name}
                    </h3>
                    {/* Cities */}
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{country.cities}</span>
                    </div>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="pt-4 border-t border-gray-200 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    View Ecommerce SEO Services →
                  </span>
                </div>
              </div>
              </Link>
            </motion.div>
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
              Need SEO Services in Another Country?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I work with businesses in over 80+ countries worldwide. Get in touch to discuss your specific market and SEO needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105"
            >
              <Globe className="w-5 h-5" />
              Discuss Your Global SEO Strategy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
