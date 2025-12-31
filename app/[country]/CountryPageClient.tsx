"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Award, 
  TrendingUp, 
  Zap, 
  Target, 
  Star,
  ChevronRight,
  MapPin,
  Building2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Globe2,
  Users,
  ShoppingCart,
  BarChart3
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } }
};

export default function CountryPageClient({ data, country }: { data: any; country: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfessionalService",
                name: `Ecommerce SEO Services in ${data.name}`,
                description: data.metaDescription,
                provider: {
                  "@type": "Person",
                  name: "Moaz Haider",
                  jobTitle: "Ecommerce SEO Expert",
                },
                areaServed: { "@type": "Country", name: data.name },
              },
              {
                "@type": "FAQPage",
                mainEntity: data.faqs.map((faq: any) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              },
            ],
          }) 
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8"
          >
            <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services/ecommerce-seo" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Ecommerce SEO
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 dark:text-white font-medium">{data.name}</span>
          </motion.nav>

          {/* Hero Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Globe2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-400">
                Ecommerce SEO Experts in {data.name}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              {data.h1}
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {data.introduction}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                Get Expert Help
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 text-gray-900 dark:text-white font-semibold rounded-xl transition-all hover:scale-105"
              >
                View Success Stories
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Market Overview Stats */}
      <section className="py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={scaleIn} className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{data.marketOverview.marketSize}</h3>
              <p className="text-gray-600 dark:text-gray-400">Market Size</p>
            </motion.div>

            <motion.div variants={scaleIn} className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{data.marketOverview.growthRate || data.marketOverview.growthTrends}</h3>
              <p className="text-gray-600 dark:text-gray-400">Annual Growth</p>
            </motion.div>

            <motion.div variants={scaleIn} className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                {Array.isArray(data.marketOverview.dominantPlatforms) 
                  ? data.marketOverview.dominantPlatforms.join(", ") 
                  : data.marketOverview.dominantPlatforms}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Top Platforms</p>
            </motion.div>

            <motion.div variants={scaleIn} className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{data.marketOverview.consumerBehavior}</h3>
              <p className="text-gray-600 dark:text-gray-400">Consumer Trend</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Top Ecommerce SEO Experts */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50/50 via-transparent to-cyan-50/50 dark:from-purple-900/10 dark:via-transparent dark:to-cyan-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-400">Top Experts</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Leading <span className="gradient-text">Ecommerce SEO Experts</span> in {data.name}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Meet the top ecommerce SEO professionals helping online stores dominate search rankings and drive revenue
            </p>
          </motion.div>

          {/* Moaz Haider - #1 Expert */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="mb-12"
          >
            <div className="relative glass-card rounded-3xl p-8 lg:p-12 overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* #1 Badge */}
              <div className="absolute top-6 right-6 z-20">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl font-bold text-white">#1</span>
                </motion.div>
              </div>

              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-4">
                  <Award className="w-10 h-10 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      Moaz Haider – #1 Ecommerce SEO Expert
                    </h3>
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-4">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-gray-700 dark:text-gray-300 ml-2 font-semibold">5.0 Expert Rating</span>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-4 mb-6">
                  <p>{data.moazProfile.intro}</p>
                  <p>{data.moazProfile.experience}</p>
                  <p>{data.moazProfile.results}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-100 dark:border-purple-800">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      Core Specializations
                    </h4>
                    <ul className="space-y-2">
                      {data.moazProfile.specializations.map((spec: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-6 border border-cyan-100 dark:border-cyan-800">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                      Why Choose Moaz
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {data.moazProfile.whyChoose}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl shadow-lg transition-all hover:scale-105"
                >
                  Work with Moaz
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Other Experts */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {data.otherExperts.map((expert: any, index: number) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {expert.name}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">{expert.title}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">#{index + 2}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {expert.bio || expert.specialization}
                </p>

                <div className="space-y-2 text-sm">
                  {expert.location && (
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Location:</span> {expert.location}
                    </p>
                  )}
                  {expert.experience && (
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Experience:</span> {expert.experience}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">Local Coverage</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Ecommerce SEO Services in <span className="gradient-text">Major Cities</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Expert ecommerce SEO consulting available across all major metropolitan areas
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {data.cities.map((city: any, index: number) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-xl p-6 cursor-pointer group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {city.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {data.faqs.map((faq: any, index: number) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 pl-9">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="relative glass-card rounded-3xl p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Dominate Ecommerce Search Rankings?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Get a free strategy session with Moaz Haider and discover how to drive more revenue from organic search
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
