"use client";

import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/servicesData";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

interface Props {
  service: ServiceDetail;
}

export default function HireSpecialist({ service }: Props) {
  return (
    <section className="relative py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full mb-8"
          >
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-sm uppercase tracking-wide">
              Expert {service.name} Services
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Hire the Best {service.name} Specialist
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-white/90 mb-12 font-medium max-w-3xl mx-auto"
          >
            {service.hireSpecialist.tagline}
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12"
          >
            {service.hireSpecialist.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4"
              >
                <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span className="text-white font-semibold text-left">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-12 py-6 bg-white hover:bg-gray-50 text-indigo-600 font-black text-xl rounded-2xl shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
            >
              <span>{service.hireSpecialist.cta}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust Indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-8 text-white/80 text-sm font-medium"
          >
            ✓ No long-term contracts required  •  ✓ Results guaranteed  •  ✓ Free consultation included
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
