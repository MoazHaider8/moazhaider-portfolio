import Link from "next/link";
import { TrendingUp, Users, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Moaz Haider — SEO Expert for{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Local, Technical & Growth-Driven
              </span>{" "}
              SEO Campaigns
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Drive more traffic, leads, and revenue with proven SEO strategies that establish topical authority and deliver measurable business outcomes.
            </p>

            {/* Value Bullets */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Technical SEO</strong> that improves crawlability, indexation & site architecture
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Local SEO</strong> that increases map pack visibility and local conversions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Content + topical authority</strong> built with semantic SEO strategy
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all hover:shadow-lg hover:scale-105"
              >
                Book a Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 dark:border-primary-400 text-base font-semibold rounded-lg text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors"
              >
                Get an SEO Audit
              </Link>
            </div>

            {/* Microcopy */}
            <p className="text-sm text-gray-500 dark:text-gray-500">
              ⚡ Response within 24 hours • 📧 {" "}
              <a href="mailto:contact@moazhaider.com" className="hover:text-primary-600 dark:hover:text-primary-400">
                contact@moazhaider.com
              </a>
              {" "}• 📞 +92 302 4698992
            </p>
          </div>

          {/* Right Column - Results & Trust Indicators */}
          <div className="animate-slide-up">
            {/* Results Snapshot Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Proven Results Across Industries
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    312%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Avg Traffic Increase
                  </div>
                </div>
                <div className="text-center border-x border-gray-200 dark:border-gray-700">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    245+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Top 3 Rankings
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Clients Served
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Bar */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-primary-100 dark:border-gray-700 p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex justify-center mb-2">
                    <Globe className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    80+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Countries Served
                  </div>
                </div>
                <div className="border-x border-primary-200 dark:border-gray-700">
                  <div className="flex justify-center mb-2">
                    <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    27+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Industries
                  </div>
                </div>
                <div>
                  <div className="flex justify-center mb-2">
                    <TrendingUp className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    8+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    CMS Platforms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
