"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
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
  BarChart3,
  Rocket,
  Shield,
  Trophy,
  Clock,
  DollarSign,
  Mail,
  Phone,
  ExternalLink,
  CheckCircle,
  TrendingDown,
  Briefcase,
  GraduationCap,
  Heart,
  LineChart,
  Package,
  Search,
  Link as LinkIcon,
  Code,
  MessageSquare,
  Plus,
  Minus
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function CountryPageClient({ data, country }: { data: any; country: string }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: `Ecommerce SEO Services in ${data.name}`,
        description: data.metaDescription,
        provider: { "@type": "Person", name: "Moaz Haider", jobTitle: "Ecommerce SEO Expert" },
        areaServed: { "@type": "Country", name: data.name }
      })}} />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial="hidden" animate="show" variants={container} className="max-w-4xl">
            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-400" />
              <span className="text-pink-300 font-semibold tracking-wider uppercase text-sm">{data.name} • Ecommerce SEO</span>
            </motion.div>

            <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              {data.h1.split(' ').map((word: string, i: number) => (
                <span key={i} className={i % 3 === 0 ? "bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent" : ""}>
                  {word}{' '}
                </span>
              ))}
            </motion.h1>

            <motion.p variants={item} className="text-xl sm:text-2xl text-purple-100 mb-10 leading-relaxed max-w-3xl">
              {data.introduction.substring(0, 200)}...
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Link href="/contact" className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-pink-500/50 transition-all hover:scale-105 inline-flex items-center gap-2">
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Start Growing Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/case-studies" className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all inline-flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                See Results
              </Link>
            </motion.div>

            {/* Key Benefits Grid */}
            <motion.div variants={item} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: TrendingUp, 
                  value: "247%", 
                  label: "Average Traffic Growth",
                  gradient: "from-green-400 to-emerald-500"
                },
                { 
                  icon: ShoppingCart, 
                  value: "500+", 
                  label: "Stores Optimized",
                  gradient: "from-blue-400 to-cyan-500"
                },
                { 
                  icon: BarChart3, 
                  value: "180%", 
                  label: "Revenue Increase",
                  gradient: "from-purple-400 to-pink-500"
                },
                { 
                  icon: Clock, 
                  value: "6-12 Mo", 
                  label: "Typical ROI Timeline",
                  gradient: "from-orange-400 to-red-500"
                }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="relative group"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 h-full hover:bg-white/15 transition-all">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent" />
      </section>

      {/* Expert Showcase */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full mb-6">
              <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="font-bold text-purple-900 dark:text-purple-300">Top Ranked Experts</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Meet The <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Elite</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The most accomplished ecommerce SEO professionals transforming online stores in {data.name}
            </p>
          </motion.div>

          {/* Moaz - Premium Card */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="relative mb-16 rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-1">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative bg-gray-900 rounded-[22px] p-8 lg:p-12">
                <div className="absolute top-6 right-6">
                  <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl">
                    <Trophy className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-black">#1</div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white font-bold">5.0 Expert Rating</span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-black text-white mb-3">Moaz Haider</h3>
                  <p className="text-xl text-purple-300 font-semibold mb-6">Premier Ecommerce SEO Strategist</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{data.moazProfile.intro}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{data.moazProfile.results}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-bold text-white">Core Expertise</h4>
                      </div>
                      <ul className="space-y-2">
                        {data.moazProfile.specializations.slice(0, 4).map((spec: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all hover:scale-105 inline-flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Work With Moaz
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/case-studies" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all inline-flex items-center gap-2">
                    View Success Stories
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Experts - Grid */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="grid md:grid-cols-2 gap-6">
            {data.otherExperts.map((expert: any, i: number) => (
              <motion.div key={i} variants={item} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-purple-500 dark:hover:border-purple-500 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-xl font-black">
                      {i + 2}
                    </div>
                    <Shield className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{expert.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-bold mb-4">{expert.title}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{expert.bio || expert.specialization}</p>
                  {expert.location && (
                    <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {expert.location}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose SEO - Feature Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-bold">Why Choose Ecommerce SEO</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              The <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">Smartest Investment</span><br/>
              For Your Online Store
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlike paid ads that stop working when you stop paying, SEO builds lasting value that compounds over time
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: TrendingUp,
                title: "Sustainable Growth",
                description: "Organic traffic grows month over month, creating a compounding asset that drives revenue 24/7 without ongoing ad spend",
                gradient: "from-green-400 to-emerald-500",
                stats: "247% Avg Growth"
              },
              {
                icon: DollarSign,
                title: "Lower CAC",
                description: "Cut customer acquisition costs by 60-80% compared to paid ads while reaching high-intent buyers actively searching for your products",
                gradient: "from-blue-400 to-cyan-500",
                stats: "80% Lower Costs"
              },
              {
                icon: Users,
                title: "Trust & Authority",
                description: "Rank at the top of Google and build brand authority. Customers trust organic results 5x more than paid ads",
                gradient: "from-purple-400 to-pink-500",
                stats: "5x More Trust"
              },
              {
                icon: Target,
                title: "High-Intent Traffic",
                description: "Capture customers with buying intent at the exact moment they're searching for solutions you provide",
                gradient: "from-orange-400 to-red-500",
                stats: "3x Higher CVR"
              },
              {
                icon: Shield,
                title: "Competitive Advantage",
                description: "Dominate search results in your niche and capture market share from competitors still relying on expensive ads",
                gradient: "from-indigo-400 to-purple-500",
                stats: "Market Leader"
              },
              {
                icon: BarChart3,
                title: "Predictable Revenue",
                description: "Build a reliable, scalable revenue channel that isn't subject to algorithm changes on ad platforms or rising CPCs",
                gradient: "from-pink-400 to-rose-500",
                stats: "180% ROI"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all blur-xl" />
                <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="pt-4 border-t border-white/10">
                    <span className={`text-sm font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.stats}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-lg font-black rounded-full hover:shadow-2xl hover:shadow-yellow-500/50 transition-all hover:scale-105">
              <Rocket className="w-6 h-6" />
              Start Your SEO Journey
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cities - Modern Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span className="font-bold text-cyan-900 dark:text-cyan-300">City Coverage</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Major <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Cities</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.cities.map((city: any, i: number) => (
              <motion.div key={i} variants={item} whileHover={{ y: -8, scale: 1.02 }} className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{city.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{city.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How SEO Works - Process Timeline */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-purple-50 to-white dark:from-gray-950 dark:via-purple-950/20 dark:to-gray-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full mb-6">
              <Rocket className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="font-bold text-purple-900 dark:text-purple-300">Proven Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
              How We <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Transform</span><br/>
              Your Ecommerce Store
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A strategic, data-driven approach that delivers measurable results in {data.name}
            </p>
          </motion.div>

          {/* Timeline Process */}
          <div className="relative">
            {/* Vertical Line - Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform -translate-x-1/2" />

            {/* Process Steps */}
            <div className="space-y-12 lg:space-y-24">
              {[
                {
                  phase: "Month 1-2",
                  title: "Discovery & Foundation",
                  description: "Deep-dive analysis of your store, competitors, and market opportunities. Technical audit, keyword research, and strategic roadmap development.",
                  icon: Search,
                  gradient: "from-blue-500 to-cyan-500",
                  outcomes: ["Complete SEO Audit", "Keyword Strategy", "Competitor Analysis", "Technical Fixes"]
                },
                {
                  phase: "Month 3-4",
                  title: "Optimization & Content",
                  description: "Implement technical improvements, optimize product pages, enhance site architecture, and create high-value content that attracts your ideal customers.",
                  icon: Code,
                  gradient: "from-purple-500 to-pink-500",
                  outcomes: ["Page Optimization", "Content Creation", "Schema Markup", "Site Speed Boost"]
                },
                {
                  phase: "Month 5-8",
                  title: "Authority Building",
                  description: "Strategic link building, digital PR, and authority establishment to boost domain strength and topical relevance in your niche.",
                  icon: LinkIcon,
                  gradient: "from-orange-500 to-red-500",
                  outcomes: ["Quality Backlinks", "Brand Mentions", "Digital PR", "Authority Growth"]
                },
                {
                  phase: "Month 9-12",
                  title: "Scale & Domination",
                  description: "Expand keyword coverage, scale winning strategies, and optimize conversion paths. Watch your organic revenue multiply as rankings compound.",
                  icon: Trophy,
                  gradient: "from-green-500 to-emerald-500",
                  outcomes: ["Market Leadership", "Revenue Growth", "Consistent Rankings", "Sustained ROI"]
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content Side */}
                  <div className={`${i % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'} mb-8 lg:mb-0`}>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${step.gradient} rounded-full mb-4`}>
                      <Clock className="w-4 h-4 text-white" />
                      <span className="text-white font-bold text-sm">{step.phase}</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.outcomes.map((outcome, idx) => (
                        <span key={idx} className="px-4 py-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full text-sm font-bold text-gray-900 dark:text-white">
                          <CheckCircle className="w-4 h-4 inline mr-2 text-green-500" />
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Icon Side */}
                  <div className={`${i % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'} flex justify-center lg:justify-start`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative"
                    >
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl blur-2xl opacity-40`} />
                      
                      {/* Icon Container */}
                      <div className={`relative w-32 h-32 lg:w-40 lg:h-40 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl`}>
                        <step.icon className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
                      </div>

                      {/* Step Number */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-purple-500 flex items-center justify-center shadow-lg">
                        <span className="text-xl font-black text-gray-900 dark:text-white">{i + 1}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot - Desktop */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.gradient} border-4 border-white dark:border-gray-950 shadow-lg`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 grid sm:grid-cols-3 gap-8"
          >
            {[
              { icon: Users, value: "500+", label: "Successful Projects" },
              { icon: TrendingUp, value: "247%", label: "Average Growth" },
              { icon: Star, value: "5.0", label: "Client Satisfaction" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
                <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs - Accordion Style */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Common <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="space-y-4">
            {data.faqs.map((faq: any, i: number) => (
              <motion.div key={i} variants={item} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-purple-500 dark:hover:border-purple-500 transition-all">
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-9">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Rocket className="w-20 h-20 text-purple-400 mx-auto mb-8" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Dominate</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Get a free strategy session and discover how ecommerce SEO can transform your online store into a revenue-generating machine
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-black rounded-full hover:shadow-2xl hover:shadow-pink-500/50 transition-all hover:scale-105">
              <Sparkles className="w-6 h-6" />
              Get Free Strategy Session
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
