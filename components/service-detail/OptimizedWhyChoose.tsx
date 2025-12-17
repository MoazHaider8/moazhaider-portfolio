"use client";

import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/servicesData";
import * as Icons from "lucide-react";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";

interface Props {
  service: ServiceDetail;
}

export default function OptimizedWhyChoose({ service }: Props) {
  const stats = service.whyBusinessesChoose?.stats || [];
  const reasons = service.whyBusinessesChoose?.reasons || service.whyChooseMe || [];
  const specialist = service.hireSpecialist;

  return (
    <section className="relative py-28 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 dark:from-black dark:via-gray-950 dark:to-indigo-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold text-sm uppercase tracking-widest rounded-full">
              Trusted by Industry Leaders
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Why Top Brands Trust My {service.name} Expertise
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Results-driven expertise backed by proven performance metrics
          </p>
        </motion.div>

        {/* Stats Grid */}
        {stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {stats.slice(0, 4).map((stat: any, idx: number) => {
              const IconComponent = (Icons as any)[stat.icon] || Icons.TrendingUp;
              
              return (
                <div
                  key={idx}
                  className="relative group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <IconComponent className="w-10 h-10 text-cyan-400 mb-4" />
                  <div className="text-4xl font-black text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Differentiators */}
        {reasons.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {reasons.slice(0, 4).map((reason: any, idx: number) => {
              const IconComponent = reason.icon ? (Icons as any)[reason.icon] || Icons.CheckCircle2 : CheckCircle2;
              
              return (
                <div
                  key={idx}
                  className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Social Proof - Mini Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-bold">4.9/5.0</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-300">Trusted by 500+ businesses across SaaS, E-commerce, Healthcare, and B2B</span>
          </div>
        </motion.div>

        {/* Hire Specialist CTA Band */}
        {specialist && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
              </div>

              <div className="relative z-10 text-center">
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
                  Hire the Best {service.name} Specialist
                </h3>

                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  {specialist.tagline}
                </p>

                {specialist.benefits && (
                  <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                    {specialist.benefits.slice(0, 4).map((benefit: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2 text-white">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}

                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                  {specialist.cta || "Get Started Today"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
