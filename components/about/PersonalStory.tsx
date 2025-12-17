"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Compass, Sparkles } from "lucide-react";

export default function PersonalStory() {
  const storyBeats = [
    {
      icon: Lightbulb,
      title: "The Discovery",
      content:
        "I stumbled into SEO in 2015 while trying to grow my first online project. The moment I saw organic traffic transform into real business results, I was hooked. It wasn't just about rankings—it was about understanding how people search and connecting them with solutions.",
    },
    {
      icon: Rocket,
      title: "The Turning Point",
      content:
        "After helping a small ecommerce business triple their revenue through SEO alone, I realized the true power of strategic optimization. It wasn't about technical tricks—it was about aligning search visibility with business goals. That's when I decided to specialize in results-driven SEO.",
    },
    {
      icon: Compass,
      title: "Philosophy Shift",
      content:
        "Most SEOs chase rankings. I chase revenue. My approach evolved from 'let's rank for everything' to 'let's rank for keywords that actually drive conversions.' This strategic shift transformed how I work with clients and the results they achieve.",
    },
    {
      icon: Sparkles,
      title: "Current Mission",
      content:
        "Today, I help businesses cut through the noise of SEO myths and focus on what actually moves the needle: sustainable, data-driven strategies that deliver measurable ROI. Every project I take on is driven by one question: Will this grow the business?",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How I Became an SEO Expert{" "}
            <span className="text-gray-600 dark:text-gray-400">
              (And Why It Matters to You)
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Gradient line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden sm:block" />

          {/* Story beats */}
          <div className="space-y-12">
            {storyBeats.map((beat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-0 sm:pl-20"
              >
                {/* Icon circle */}
                <div className="absolute left-0 top-0 hidden sm:flex w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 items-center justify-center shadow-lg">
                  <beat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content card */}
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Mobile icon */}
                  <div className="flex sm:hidden w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 items-center justify-center shadow-lg mb-4">
                    <beat.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {beat.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {beat.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
