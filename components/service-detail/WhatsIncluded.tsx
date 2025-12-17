"use client";

import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/servicesData";
import * as Icons from "lucide-react";
import { CheckCircle2, Package, Sparkles } from "lucide-react";
import { useState } from "react";

interface Props {
  service: ServiceDetail;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function WhatsIncluded({ service }: Props) {
  // Merge deliverables and comprehensiveServices
  const deliverables = service.deliverables || [];
  const comprehensiveServices = service.comprehensiveServices?.serviceCategories || [];

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50/30 to-indigo-50 dark:from-gray-950 dark:via-purple-950/20 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-600/10 dark:to-purple-600/10 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 dark:bg-purple-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="inline-block mb-8">
            <motion.div 
              className="relative px-8 py-4 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: "200% 200%" }}
              />
              <div className="relative flex items-center gap-3">
                <Package className="w-5 h-5 text-white" />
                <span className="text-sm font-black text-white uppercase tracking-widest">
                  Complete Package
                </span>
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          </motion.div>

          <motion.h2 
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-tight"
          >
            What's Included in My{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400">
                {service.name}
              </span>
              {/* Underline decoration */}
              <motion.div
                className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-indigo-400/30 -z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>{" "}
            Package
          </motion.h2>

          <motion.p 
            variants={fadeUp}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Everything you need for complete <span className="font-bold text-purple-600 dark:text-purple-400">{service.name.toLowerCase()}</span> success
          </motion.p>
        </motion.div>

        {/* Deliverables Grid */}
        {deliverables.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {deliverables.slice(0, 9).map((deliverable: any, idx: number) => (
              <DeliverableCard 
                key={idx}
                deliverable={deliverable}
                index={idx}
              />
            ))}
          </motion.div>
        )}

        {/* Comprehensive Services (if available) */}
        {comprehensiveServices.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-16"
          >
            {comprehensiveServices.map((category: any, catIdx: number) => (
              <motion.div
                key={catIdx}
                variants={fadeUp}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex items-center gap-5 mb-8">
                  <motion.div 
                    className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 flex items-center justify-center shadow-2xl"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl font-black text-white">{catIdx + 1}</span>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-2xl blur-xl opacity-50" />
                  </motion.div>
                  
                  <h3 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.slice(0, 4).map((svc: any, svcIdx: number) => {
                    const IconComponent = (Icons as any)[svc.icon] || Icons.Sparkles;
                    
                    return (
                      <ServiceItemCard
                        key={svcIdx}
                        service={svc}
                        IconComponent={IconComponent}
                        index={svcIdx}
                      />
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

// Deliverable Card Component
interface DeliverableCardProps {
  deliverable: any;
  index: number;
}

function DeliverableCard({ deliverable, index }: DeliverableCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const gradients = [
    "from-purple-500 via-purple-600 to-pink-600",
    "from-pink-500 via-pink-600 to-indigo-600",
    "from-indigo-500 via-indigo-600 to-purple-600",
    "from-purple-600 via-pink-600 to-purple-500",
    "from-pink-600 via-indigo-600 to-pink-500",
    "from-indigo-600 via-purple-600 to-indigo-500",
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      variants={fadeUp}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -10,
        transition: { 
          type: "spring", 
          stiffness: 400,
          damping: 25 
        }
      }}
      className="group relative h-full"
    >
      {/* Glow Effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
      />

      {/* Card */}
      <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700 group-hover:border-purple-400 dark:group-hover:border-purple-500 transition-all duration-300 shadow-xl group-hover:shadow-2xl overflow-hidden">
        {/* Top corner decoration */}
        <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`} />

        {/* Number Badge */}
        <motion.div 
          className="relative mb-6"
          animate={{
            rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative inline-block">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-md opacity-50`} />
            <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
              <span className="text-2xl font-black text-white">{index + 1}</span>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-5 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {deliverable.category}
        </h3>

        {/* Items List */}
        <ul className="space-y-3">
          {deliverable.items.slice(0, 4).map((item: string, i: number) => (
            <motion.li 
              key={i} 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <CheckCircle2 className="w-5 h-5 text-purple-500 dark:text-purple-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>

        {/* Bottom accent */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradient}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}

// Service Item Card Component
interface ServiceItemCardProps {
  service: any;
  IconComponent: any;
  index: number;
}

function ServiceItemCard({ service, IconComponent, index }: ServiceItemCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -5,
        transition: { type: "spring", stiffness: 400 }
      }}
      className="group relative"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card */}
      <div className="relative h-full p-6 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl border-2 border-gray-200 dark:border-gray-700 group-hover:border-purple-400 dark:group-hover:border-purple-500 transition-all duration-300 shadow-lg group-hover:shadow-xl">
        {/* Icon */}
        <motion.div
          animate={{
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
            <IconComponent className="w-6 h-6 text-white" />
          </div>
        </motion.div>

        {/* Content */}
        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-base group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {service.name}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
