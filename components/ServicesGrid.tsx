import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive SEO Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From technical foundation to content authority and link acquisition, I provide end-to-end SEO solutions tailored to your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                {service.definition}
              </p>
              
              <div className="space-y-2 mb-6">
                {service.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href={service.link}
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold text-sm hover:gap-2 transition-all"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Related Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Looking for something specific? Explore services by intent:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/services/local-seo"
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              For More Local Leads
            </Link>
            <Link
              href="/services/ecommerce-seo"
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              For More Online Sales
            </Link>
            <Link
              href="/services/technical-seo"
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              For Technical Foundation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
