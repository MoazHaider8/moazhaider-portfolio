"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function DirectContact() {
  const contacts = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@moazhaider.com",
      href: "mailto:contact@moazhaider.com",
      description: "Best for detailed inquiries",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) SEO-EXPERT",
      href: "tel:+1555736397378",
      description: "Available Mon-Fri, 9am-5pm EST",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/moazhaider",
      href: "https://www.linkedin.com/in/moazhaider",
      description: "Connect for quick questions",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Prefer to Reach Out Directly?
          </h2>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.icon === Linkedin ? "_blank" : undefined}
              rel={contact.icon === Linkedin ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <contact.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {contact.title}
              </h3>

              {/* Value */}
              <p className="text-base text-cyan-600 dark:text-cyan-400 font-semibold mb-2 break-all">
                {contact.value}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {contact.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
