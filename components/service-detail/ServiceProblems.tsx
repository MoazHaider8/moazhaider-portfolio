"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ServiceDetail } from "@/data/servicesData";
import * as Icons from "lucide-react";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

interface Props {
  service: ServiceDetail;
}

export default function ServiceProblems({ service }: Props) {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-red-50/30 to-orange-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-300 dark:text-gray-700"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-red-400/30 to-orange-400/30 dark:from-red-600/20 dark:to-orange-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2
        }}
        className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/30 to-red-400/30 dark:from-orange-600/20 dark:to-red-600/20 rounded-full blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div 
            variants={scaleIn}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border border-red-500/20 dark:border-red-400/30 shadow-lg"
          >
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            <span className="text-sm font-bold text-red-700 dark:text-red-400 uppercase tracking-wide">Critical Issues</span>
          </motion.div>

          {/* Title */}
          <motion.h2 
            variants={fadeUp} 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6"
          >
            Problems <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-orange-600 to-red-600 dark:from-red-400 dark:via-orange-400 dark:to-red-400">{service.name}</span> Solves
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            variants={fadeUp} 
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Eliminate these common issues holding your site back from ranking
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {service.problems.map((problem, idx) => {
            const IconComponent = (Icons as any)[problem.icon] || Icons.HelpCircle;
            
            const gradients = [
              "from-red-500 via-red-600 to-orange-600",
              "from-orange-500 via-orange-600 to-red-600",
              "from-red-600 via-orange-600 to-red-500",
              "from-orange-600 via-red-600 to-orange-500",
              "from-red-500 via-orange-500 to-red-600",
              "from-orange-500 via-red-500 to-orange-600"
            ];
            
            const gradient = gradients[idx % gradients.length];
            
            return (
              <ProblemCard 
                key={idx}
                problem={problem}
                IconComponent={IconComponent}
                gradient={gradient}
                index={idx}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

interface ProblemCardProps {
  problem: any;
  IconComponent: any;
  gradient: string;
  index: number;
}

function ProblemCard({ problem, IconComponent, gradient, index }: ProblemCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
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
        className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card Content */}
      <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl p-7 border-2 border-gray-200 dark:border-gray-700 group-hover:border-red-300 dark:group-hover:border-red-600/50 transition-all duration-300 shadow-lg group-hover:shadow-2xl overflow-hidden">
        {/* Corner Accent */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`} />

        {/* Icon Container */}
        <motion.div 
          className="relative mb-5"
          animate={{
            rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative inline-block">
            {/* Icon Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-md opacity-50`} />
            
            {/* Icon */}
            <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
              <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>

            {/* Pulse Ring */}
            <motion.div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient}`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
            {problem.title}
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {problem.description}
          </p>
        </div>

        {/* Bottom Accent Line */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}
