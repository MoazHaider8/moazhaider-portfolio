"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Wrench,
  Droplets,
  Sparkles,
  Hammer,
  Home,
  Bath,
  Trash2,
  ShieldCheck,
  Wind,
  Container,
  ChefHat,
  Zap,
  Flame,
  ShieldAlert,
  Activity,
  Scale,
  Building2,
  Code,
  Users,
  Briefcase,
  Smile,
  Warehouse,
  Shield,
  DoorClosed,
  Bug,
  Waves,
  FlameKindling,
} from "lucide-react";

export default function IndustriesGrid() {
  const industries = [
    {
      name: "Appliance Repair",
      slug: "appliance-repair-seo",
      tagline: "Emergency-driven local SEO for appliance repair businesses",
      icon: Wrench,
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Carpet Cleaning",
      slug: "carpet-cleaning-seo",
      tagline: "Local visibility for carpet cleaning & restoration services",
      icon: Sparkles,
      color: "from-green-600 to-green-800",
    },
    {
      name: "Gutter Installation & Maintenance",
      slug: "gutter-installation-seo",
      tagline: "Seasonal SEO for gutter installation & cleaning companies",
      icon: Home,
      color: "from-orange-600 to-orange-800",
    },
    {
      name: "Plumbing",
      slug: "plumbing-seo",
      tagline: "Emergency + scheduled plumbing SEO that drives calls",
      icon: Droplets,
      color: "from-cyan-600 to-blue-600",
    },
    {
      name: "Siding",
      slug: "siding-seo",
      tagline: "Lead generation SEO for siding contractors",
      icon: Hammer,
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "Bathroom Remodeling",
      slug: "bathroom-remodeling-seo",
      tagline: "High-ticket remodeling SEO with visual content strategy",
      icon: Bath,
      color: "from-purple-600 to-purple-800",
    },
    {
      name: "Dumpster Rental",
      slug: "dumpster-rental-seo",
      tagline: "Local + commercial dumpster rental lead generation",
      icon: Trash2,
      color: "from-yellow-600 to-orange-600",
    },
    {
      name: "Home Security Systems",
      slug: "home-security-seo",
      tagline: "Trust-driven SEO for home security & alarm companies",
      icon: ShieldCheck,
      color: "from-red-600 to-red-800",
    },
    {
      name: "Mold Remediation",
      slug: "mold-remediation-seo",
      tagline: "Emergency restoration SEO with trust signals",
      icon: Wind,
      color: "from-teal-600 to-teal-800",
    },
    {
      name: "Walk-In Tubs",
      slug: "walk-in-tubs-seo",
      tagline: "Senior-focused accessibility product SEO",
      icon: Container,
      color: "from-indigo-600 to-indigo-800",
    },
    {
      name: "Kitchen Remodeling",
      slug: "kitchen-remodeling-seo",
      tagline: "Premium remodeling SEO with portfolio emphasis",
      icon: ChefHat,
      color: "from-pink-600 to-rose-600",
    },
    {
      name: "Electrician",
      slug: "electrician-seo",
      tagline: "Local electrician SEO for residential & commercial work",
      icon: Zap,
      color: "from-yellow-500 to-yellow-700",
    },
    {
      name: "HVAC",
      slug: "hvac-seo",
      tagline: "Seasonal HVAC SEO for heating, cooling & maintenance",
      icon: Flame,
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Roofing Contractor",
      slug: "roofing-seo",
      tagline: "Storm damage + scheduled roofing lead generation",
      icon: Home,
      color: "from-slate-600 to-slate-800",
    },
    {
      name: "Water Damage Restoration",
      slug: "water-damage-restoration-seo",
      tagline: "Emergency restoration SEO with 24/7 targeting",
      icon: Waves,
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Flooring",
      slug: "flooring-seo",
      tagline: "Product + service SEO for flooring installers",
      icon: Container,
      color: "from-amber-600 to-amber-800",
    },
    {
      name: "Garage Door Repair",
      slug: "garage-door-repair-seo",
      tagline: "Emergency + maintenance garage door SEO",
      icon: DoorClosed,
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Pest Control Company",
      slug: "pest-control-seo",
      tagline: "Seasonal pest control SEO with urgency targeting",
      icon: Bug,
      color: "from-green-700 to-green-900",
    },
    {
      name: "Self Storage",
      slug: "self-storage-seo",
      tagline: "Local + long-tail self storage lead generation",
      icon: Warehouse,
      color: "from-blue-700 to-blue-900",
    },
    {
      name: "Fire Damage Restoration",
      slug: "fire-damage-restoration-seo",
      tagline: "Emergency restoration SEO with empathy-driven content",
      icon: FlameKindling,
      color: "from-red-600 to-orange-600",
    },
    {
      name: "Healthcare",
      slug: "healthcare-seo",
      tagline: "HIPAA-compliant healthcare & medical practice SEO",
      icon: Activity,
      color: "from-blue-600 to-teal-600",
    },
    {
      name: "Law Firm",
      slug: "law-firm-seo",
      tagline: "Authority-driven legal SEO for client acquisition",
      icon: Scale,
      color: "from-gray-800 to-slate-900",
    },
    {
      name: "Real Estate",
      slug: "real-estate-seo",
      tagline: "Local + market-specific real estate SEO",
      icon: Building2,
      color: "from-emerald-600 to-emerald-800",
    },
    {
      name: "SaaS",
      slug: "saas-seo",
      tagline: "Product-led SEO for SaaS companies & startups",
      icon: Code,
      color: "from-indigo-600 to-purple-600",
    },
    {
      name: "Home Services (General)",
      slug: "home-services-seo",
      tagline: "Multi-service home services SEO strategies",
      icon: Home,
      color: "from-cyan-600 to-blue-700",
    },
    {
      name: "B2B",
      slug: "b2b-seo",
      tagline: "Long sales cycle B2B SEO with thought leadership",
      icon: Briefcase,
      color: "from-purple-700 to-indigo-800",
    },
    {
      name: "Dental",
      slug: "dental-seo",
      tagline: "Local dental practice SEO for patient acquisition",
      icon: Smile,
      color: "from-teal-600 to-cyan-700",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            All Industries{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Click any industry to see custom SEO strategies, case studies, and results 
            specific to your niche.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Link key={index} href={`/industries/${industry.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Industry Name */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {industry.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {industry.tagline}
                  </p>

                  {/* Learn More */}
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
