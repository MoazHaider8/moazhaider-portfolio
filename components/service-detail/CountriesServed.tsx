"use client";

import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/servicesData";
import { Globe, MapPin, CheckCircle } from "lucide-react";

interface Props {
  service: ServiceDetail;
}

export default function CountriesServed({ service }: Props) {
  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30 dark:from-gray-950 dark:via-cyan-950/20 dark:to-blue-950/20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/20 to-blue-200/20 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/20 to-indigo-200/20 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 dark:border-cyan-500/30 rounded-full">
              <Globe className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span className="text-cyan-700 dark:text-cyan-400 font-bold text-sm uppercase tracking-widest">
                Global Reach
              </span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Serving Businesses Worldwide
          </h2>

          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            {service.countriesServed.description}
          </p>
        </motion.div>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.countriesServed.regions.map((region, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div 
                className={`relative h-full rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  region.highlight 
                    ? 'bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 text-white' 
                    : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700'
                }`}
              >
                {/* Highlight Badge */}
                {region.highlight && (
                  <div className="absolute -top-3 -right-3 px-4 py-2 bg-yellow-400 text-yellow-900 font-black text-xs uppercase rounded-full shadow-lg">
                    Primary Markets
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform ${
                  region.highlight 
                    ? 'bg-white/20 backdrop-blur-md' 
                    : 'bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30'
                }`}>
                  <MapPin className={`w-7 h-7 ${region.highlight ? 'text-white' : 'text-cyan-600 dark:text-cyan-400'}`} />
                </div>

                {/* Region Name */}
                <h3 className={`text-2xl font-black mb-6 ${
                  region.highlight ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  {region.region}
                </h3>

                {/* Countries List */}
                <div className="space-y-3">
                  {region.countries.map((country, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                        region.highlight ? 'text-white' : 'text-green-600 dark:text-green-400'
                      }`} />
                      <span className={`text-sm font-semibold ${
                        region.highlight ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {country}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                {!region.highlight && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/20 rounded-2xl">
            <Globe className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
              Available for remote work worldwide • All time zones supported
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
