"use client";

import { motion } from "framer-motion";
import { Home, Hammer, Shield, Briefcase, Code } from "lucide-react";

export default function IndustryClusters() {
  const clusters = [
    {
      icon: Home,
      name: "Home Services",
      industries: "HVAC, Plumbing, Electrician, Pest Control, Appliance Repair, Garage Door, Carpet Cleaning",
      seoFocus: "Local SEO, Google Business Profile, emergency keywords, seasonal targeting, mobile optimization",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Hammer,
      name: "Remodeling & Construction",
      industries: "Bathroom Remodeling, Kitchen Remodeling, Flooring, Siding, Roofing, Gutter Installation",
      seoFocus: "Portfolio content, high-ticket lead generation, before/after visuals, review management",
      color: "from-orange-600 to-amber-600",
    },
    {
      icon: Shield,
      name: "Restoration Services",
      industries: "Water Damage Restoration, Fire Damage Restoration, Mold Remediation",
      seoFocus: "24/7 emergency targeting, trust signals, PTSD-sensitive content, insurance keywords",
      color: "from-red-600 to-rose-600",
    },
    {
      icon: Briefcase,
      name: "Professional Services",
      industries: "Law Firms, Healthcare, Dental, Real Estate",
      seoFocus: "Authority content, trust building, local+national reach, compliance (HIPAA, BAA)",
      color: "from-purple-600 to-indigo-600",
    },
    {
      icon: Code,
      name: "SaaS & B2B",
      industries: "SaaS, B2B Services, Home Services (platforms)",
      seoFocus: "Product-led content, long-form guides, bottom-funnel targeting, demo/trial optimization",
      color: "from-indigo-600 to-purple-600",
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
            Industry{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Clusters
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            How SEO strategies differ across industry categories
          </p>
        </motion.div>

        <div className="space-y-6">
          {clusters.map((cluster, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cluster.color} flex items-center justify-center flex-shrink-0`}
                >
                  <cluster.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {cluster.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Industries:</strong> {cluster.industries}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-purple-600 dark:text-purple-400">SEO Focus:</strong>{" "}
                    {cluster.seoFocus}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 dark:border-purple-500/30 text-center"
        >
          <p className="text-gray-700 dark:text-gray-200">
            <strong>Key Insight:</strong> Each cluster requires fundamentally different SEO tactics. 
            Home services need local visibility. SaaS needs thought leadership. Professional services 
            need trust signals. One strategy doesn't work for all.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
