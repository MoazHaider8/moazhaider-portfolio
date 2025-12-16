"use client";

import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Briefcase, 
  Heart, 
  Scale, 
  Home,
  Utensils,
  GraduationCap,
  Plane,
  Car,
  Shirt,
  Building2,
  Laptop
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
      staggerChildren: 0.05
    }
  }
};

const industries = [
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    gradient: "from-purple-500 to-pink-500",
    description: "Boost online sales with SEO"
  },
  {
    icon: Briefcase,
    name: "B2B & SaaS",
    gradient: "from-blue-500 to-cyan-500",
    description: "Generate qualified leads"
  },
  {
    icon: Heart,
    name: "Healthcare & Medical",
    gradient: "from-red-500 to-pink-500",
    description: "Attract more patients"
  },
  {
    icon: Scale,
    name: "Legal & Law Firms",
    gradient: "from-gray-600 to-gray-800",
    description: "Rank for legal keywords"
  },
  {
    icon: Home,
    name: "Real Estate",
    gradient: "from-green-500 to-emerald-500",
    description: "Get property inquiries"
  },
  {
    icon: Utensils,
    name: "Food & Restaurant",
    gradient: "from-orange-500 to-red-500",
    description: "Fill more reservations"
  },
  {
    icon: GraduationCap,
    name: "Education",
    gradient: "from-indigo-500 to-purple-500",
    description: "Increase enrollments"
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    gradient: "from-cyan-500 to-blue-500",
    description: "Drive more bookings"
  },
  {
    icon: Car,
    name: "Automotive",
    gradient: "from-yellow-500 to-orange-500",
    description: "Sell more vehicles"
  },
  {
    icon: Shirt,
    name: "Fashion & Apparel",
    gradient: "from-pink-500 to-rose-500",
    description: "Boost fashion sales"
  },
  {
    icon: Building2,
    name: "Construction",
    gradient: "from-amber-600 to-orange-600",
    description: "Win more projects"
  },
  {
    icon: Laptop,
    name: "Technology",
    gradient: "from-teal-500 to-cyan-500",
    description: "Generate tech leads"
  }
];

export default function IndustryClusters() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
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
            Industry SEO Expertise
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Specialized SEO strategies tailored for your industry. I understand the unique challenges and opportunities in each sector to deliver results that matter.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
            >
              <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 group-hover:shadow-xl relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} mb-4 shadow-lg`}
                  >
                    <industry.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {industry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Don't see your industry? I work with businesses across all sectors.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
          >
            Discuss Your Industry Needs
          </a>
        </motion.div>
      </div>
    </section>
  );
}
