import Link from "next/link";
import { ArrowRight, Target, TrendingUp, Lightbulb } from "lucide-react";

export default function TopicalAuthority() {
  return (
    <section className="py-12 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Building Topical Authority Through Semantic SEO
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My approach combines entity relationships, intent mapping, and information gain to create ranking stability that withstands algorithm updates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Awareness Stage */}
          <div className="bg-gradient-to-br from-blue-50 to-primary-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 border border-primary-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-600 dark:bg-primary-500 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Awareness Stage
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Need more visibility? Start with foundational content that educates and builds brand recognition through informational queries.
            </p>
            <Link
              href="/services/content-seo"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all"
            >
              Explore Content SEO
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          {/* Consideration Stage */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 border border-green-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-600 dark:bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Consideration Stage
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Need more leads? Target comparison and evaluation queries that capture users actively researching solutions.
            </p>
            <Link
              href="/services/local-seo"
              className="inline-flex items-center text-green-600 dark:text-green-400 font-semibold hover:gap-2 transition-all"
            >
              Explore Local SEO
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          {/* Decision Stage */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 border border-purple-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Decision Stage
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Need more sales? Optimize for high-intent commercial queries and ensure clean technical foundation for conversions.
            </p>
            <Link
              href="/services/ecommerce-seo"
              className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:gap-2 transition-all"
            >
              Explore E-commerce SEO
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Entity Relationships */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Core SEO Entities & Their Relationships
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-6">
            <Link href="/services/seo-audit" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              SEO Audit
            </Link>
            {" "}establishes the baseline → {" "}
            <Link href="/services/technical-seo" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Technical SEO
            </Link>
            {" "}fixes the foundation → {" "}
            <Link href="/services/content-seo" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Content SEO
            </Link>
            {" "}builds topical authority → {" "}
            <Link href="/services/link-building" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Link Building
            </Link>
            {" "}establishes domain authority → resulting in sustainable rankings that drive leads and revenue
          </p>
        </div>
      </div>
    </section>
  );
}
