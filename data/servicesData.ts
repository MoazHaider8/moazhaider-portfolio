import { 
  Wrench, MapPin, ShoppingCart, FileText, Link2, Layout, 
  TrendingUp, FileSearch, Search, Users, LucideIcon 
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  name: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  hero: {
    badge: string;
    headline: string;
    description: string;
  };
  definition: {
    what: string;
    why: string;
    whoFor: string;
  };
  problems: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }>;
  process: Array<{
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
  deliverables: Array<{
    category: string;
    items: string[];
  }>;
  industries: string[];
  platforms?: string[];
  platformNote?: string;
  whyChooseMe: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "technical-seo": {
    slug: "technical-seo",
    name: "Technical SEO",
    primaryKeyword: "technical SEO services",
    secondaryKeywords: ["technical audit", "site speed optimization", "crawlability", "indexability", "Core Web Vitals"],
    hero: {
      badge: "SEO Services",
      headline: "Technical SEO Services That Fix Issues and Unlock Rankings",
      description: "Eliminate technical barriers holding your site back. From crawl errors to Core Web Vitals, I diagnose and fix the issues that prevent Google from ranking your pages."
    },
    definition: {
      what: "Technical SEO is the process of optimizing your website's infrastructure to help search engines crawl, index, and understand your content more effectively.",
      why: "Even the best content can't rank if search engines can't access it properly. Technical SEO ensures your site is fast, crawlable, secure, and structured for maximum visibility.",
      whoFor: "Essential for websites with indexing issues, slow page speeds, crawl errors, or poor mobile performance—especially e-commerce sites, large content sites, and SaaS platforms."
    },
    problems: [
      { icon: Wrench, title: "Slow Page Speed", description: "Poor Core Web Vitals hurting rankings and user experience" },
      { icon: FileSearch, title: "Crawl Errors", description: "Pages not being discovered or indexed by search engines" },
      { icon: Layout, title: "Mobile Issues", description: "Poor mobile usability affecting mobile-first indexing" },
      { icon: Link2, title: "Broken Links", description: "404 errors and redirect chains damaging site authority" },
      { icon: Search, title: "Indexation Problems", description: "Important pages blocked from search results" },
      { icon: TrendingUp, title: "Poor Site Architecture", description: "Confusing URL structure preventing efficient crawling" }
    ],
    process: [
      { number: "01", title: "Technical Audit", description: "Comprehensive crawl analysis identifying all technical issues affecting SEO performance", icon: FileSearch },
      { number: "02", title: "Priority Mapping", description: "Categorize issues by impact and create an implementation roadmap", icon: Layout },
      { number: "03", title: "Core Fixes", description: "Resolve critical issues: crawlability, indexability, site speed, mobile optimization", icon: Wrench },
      { number: "04", title: "Schema Implementation", description: "Deploy structured data for enhanced search appearance and entity recognition", icon: FileText },
      { number: "05", title: "Performance Optimization", description: "Improve Core Web Vitals, reduce load times, optimize resources", icon: TrendingUp },
      { number: "06", title: "Monitoring & Maintenance", description: "Ongoing technical health checks and proactive issue resolution", icon: Search }
    ],
    deliverables: [
      { category: "Technical Audit Report", items: ["Complete crawl analysis", "Prioritized issue list", "Core Web Vitals assessment", "Mobile usability review"] },
      { category: "Fixes Implemented", items: ["Crawl error resolution", "Page speed optimization", "Schema markup", "XML sitemap optimization", "Robots.txt configuration"] },
      { category: "Documentation", items: ["Technical SEO checklist", "Before/after metrics", "Implementation guide", "Maintenance recommendations"] }
    ],
    industries: ["E-commerce", "SaaS", "Enterprise", "Publishing", "Local Business"],
    platforms: ["WordPress", "Shopify", "Magento", "Webflow", "Wix", "Custom CMS"],
    platformNote: "Technical SEO implementation varies by platform. I have deep experience with all major CMS platforms and can optimize within platform constraints.",
    whyChooseMe: [
      { icon: Wrench, title: "Expert-Level Execution", description: "15+ years fixing complex technical SEO issues across hundreds of sites" },
      { icon: TrendingUp, title: "Data-Driven Fixes", description: "Every recommendation backed by crawl data, analytics, and testing" },
      { icon: Search, title: "Google Best Practices", description: "Adherence to official Google guidelines and Search Central documentation" },
      { icon: FileText, title: "Transparent Reporting", description: "Clear documentation of all issues found and fixes implemented" }
    ],
    faqs: [
      { question: "How long does technical SEO take?", answer: "Initial audit and priority fixes typically take 2-4 weeks. Ongoing optimization is continuous as search engines and your site evolve." },
      { question: "Will technical SEO improve my rankings?", answer: "Yes—fixing technical issues removes barriers preventing Google from properly crawling, indexing, and ranking your content. Most sites see measurable improvements within 30-60 days." },
      { question: "Do I need technical SEO if my site is new?", answer: "Absolutely. Starting with a solid technical foundation prevents costly issues later and ensures your content can rank from day one." },
      { question: "How do you measure technical SEO success?", answer: "Key metrics include: crawl efficiency, indexation rate, Core Web Vitals scores, page speed improvements, and organic visibility increases." },
      { question: "Is technical SEO a one-time fix?", answer: "Initial fixes are one-time, but ongoing monitoring is essential. Site updates, CMS changes, and search algorithm updates require continuous technical maintenance." }
    ],
    relatedServices: ["seo-audit", "on-page-seo", "local-seo"]
  },

  "local-seo": {
    slug: "local-seo",
    name: "Local SEO",
    primaryKeyword: "local SEO services",
    secondaryKeywords: ["Google Business Profile optimization", "local citations", "local rankings", "near me searches"],
    hero: {
      badge: "SEO Services",
      headline: "Local SEO Services That Dominate Your Service Area",
      description: "Get found by customers in your area. I optimize your Google Business Profile, build local citations, and implement strategies that put you on the map—literally."
    },
    definition: {
      what: "Local SEO is the practice of optimizing your online presence to attract customers from local and geographic-specific searches.",
      why: "76% of people who search for something nearby visit a business within 24 hours. Local SEO ensures you show up when local customers are actively searching for your services.",
      whoFor: "Critical for businesses serving specific geographic areas: home services, medical practices, legal firms, restaurants, retail stores, and service-area businesses."
    },
    problems: [
      { icon: MapPin, title: "Invisible on Google Maps", description: "Not showing up in local pack results for your service area" },
      { icon: Search, title: "Low Local Rankings", description: "Competitors outranking you for 'near me' and city-based searches" },
      { icon: Users, title: "Inconsistent NAP Data", description: "Different business information across the web confusing customers and Google" },
      { icon: FileText, title: "Missing Reviews", description: "Few or no Google reviews compared to competitors" },
      { icon: MapPin, title: "Wrong Service Areas", description: "Not targeting all the cities and neighborhoods you serve" },
      { icon: TrendingUp, title: "Poor Conversion", description: "Getting map views but not phone calls or direction requests" }
    ],
    process: [
      { number: "01", title: "Local SEO Audit", description: "Analyze your Google Business Profile, citations, reviews, and local visibility", icon: FileSearch },
      { number: "02", title: "GBP Optimization", description: "Fully optimize your Google Business Profile with categories, photos, posts, and attributes", icon: MapPin },
      { number: "03", title: "Citation Building", description: "Build and clean up NAP consistency across directories, platforms, and local sites", icon: FileText },
      { number: "04", title: "Review Strategy", description: "Implement systems to generate and respond to Google reviews authentically", icon: Users },
      { number: "05", title: "Local Content", description: "Create location-specific content targeting your service areas and local keywords", icon: Layout },
      { number: "06", title: "Tracking & Reporting", description: "Monitor local rankings, map visibility, calls, and direction requests", icon: TrendingUp }
    ],
    deliverables: [
      { category: "GBP Optimization", items: ["Complete profile setup", "Category optimization", "Photo optimization", "Regular posts schedule"] },
      { category: "Citation Building", items: ["50+ directory submissions", "NAP consistency audit", "Duplicate listing cleanup", "Local schema markup"] },
      { category: "Review Management", items: ["Review generation system", "Response templates", "Review monitoring setup"] },
      { category: "Local Content", items: ["Location pages", "Service area content", "Local blog posts", "City-specific landing pages"] }
    ],
    industries: ["Home Services", "Medical & Dental", "Legal Services", "Restaurants", "Retail", "Professional Services"],
    whyChooseMe: [
      { icon: MapPin, title: "Local Market Expertise", description: "Proven strategies that work across multiple geographic markets" },
      { icon: Users, title: "White-Hat Only", description: "No fake reviews, spam, or black-hat tactics that risk penalties" },
      { icon: TrendingUp, title: "Conversion-Focused", description: "Focus on rankings that drive calls, visits, and revenue—not vanity metrics" },
      { icon: FileText, title: "Transparent Reporting", description: "Monthly reports showing rankings, visibility, calls, and ROI" }
    ],
    faqs: [
      { question: "How long does local SEO take to work?", answer: "You'll see initial improvements within 4-8 weeks. Full local pack dominance typically takes 3-6 months depending on competition." },
      { question: "Do I need local SEO if I have a physical location?", answer: "Yes—even if customers visit your location, most find you through local search first. Without local SEO, you're invisible to nearby searchers." },
      { question: "Can local SEO work for service-area businesses?", answer: "Absolutely. Even if you don't have a storefront, I can optimize for the cities and areas you serve." },
      { question: "How important are Google reviews?", answer: "Critical. Reviews are a top 3 local ranking factor and heavily influence customer decisions. I help you build authentic reviews ethically." },
      { question: "What's the difference between local SEO and regular SEO?", answer: "Local SEO focuses on geographic visibility—Google Maps, local pack, and 'near me' searches. Regular SEO targets broader, non-location-based keywords." }
    ],
    relatedServices: ["technical-seo", "on-page-seo", "content-seo"]
  },

  "ecommerce-seo": {
    slug: "ecommerce-seo",
    name: "E-commerce SEO",
    primaryKeyword: "ecommerce SEO services",
    secondaryKeywords: ["product page optimization", "category page SEO", "ecommerce site structure", "shopping SEO"],
    hero: {
      badge: "SEO Services",
      headline: "E-commerce SEO That Drives Sales, Not Just Traffic",
      description: "Optimize your online store for profitable keywords, improve product visibility, and turn search traffic into revenue. I specialize in Shopify, WooCommerce, Magento, and custom platforms."
    },
    definition: {
      what: "E-commerce SEO is the strategic optimization of online stores to rank product and category pages for high-intent shopping keywords that drive sales.",
      why: "37% of e-commerce traffic comes from organic search. Without SEO, you're losing sales to competitors who rank higher for the products you both sell.",
      whoFor: "Essential for online stores of all sizes—from startups to enterprises selling physical products, digital goods, or subscription services."
    },
    problems: [
      { icon: ShoppingCart, title: "Low Product Visibility", description: "Products buried on page 5+ while competitors dominate page 1" },
      { icon: Search, title: "Thin Product Descriptions", description: "Duplicate or minimal content failing to rank or convert" },
      { icon: Layout, title: "Poor Site Architecture", description: "Confusing category structure making products hard to find" },
      { icon: TrendingUp, title: "High Bounce Rates", description: "Traffic arriving but not converting into sales" },
      { icon: FileText, title: "Missing Rich Snippets", description: "No star ratings, pricing, or availability showing in search" },
      { icon: Link2, title: "Weak Internal Linking", description: "Products not benefiting from category and homepage authority" }
    ],
    process: [
      { number: "01", title: "Store Audit", description: "Comprehensive analysis of site structure, technical issues, and content gaps", icon: FileSearch },
      { number: "02", title: "Keyword Research", description: "Identify high-intent product and category keywords with buyer intent", icon: Search },
      { number: "03", title: "Technical Optimization", description: "Fix crawl issues, improve site speed, optimize for mobile shoppers", icon: Wrench },
      { number: "04", title: "On-Page Optimization", description: "Optimize product titles, descriptions, images, and category pages", icon: Layout },
      { number: "05", title: "Schema Implementation", description: "Add product schema for rich snippets, reviews, pricing, and availability", icon: FileText },
      { number: "06", title: "Content Strategy", description: "Build buying guides, comparison pages, and category descriptions", icon: FileText }
    ],
    deliverables: [
      { category: "Technical SEO", items: ["Site speed optimization", "Mobile optimization", "Crawl efficiency improvements", "Pagination & filtering fixes"] },
      { category: "Product Optimization", items: ["Optimized product titles & descriptions", "Image SEO & alt text", "Product schema markup", "Internal linking structure"] },
      { category: "Category Pages", items: ["Keyword-optimized category content", "Faceted navigation optimization", "Category page schema", "Collection page SEO"] },
      { category: "Content Creation", items: ["Buying guides", "Product comparison pages", "Blog content targeting keywords", "FAQ pages"] }
    ],
    industries: ["Retail", "Fashion", "Electronics", "Home & Garden", "Beauty", "Sports & Outdoors"],
    platforms: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Wix", "Custom platforms"],
    platformNote: "Each e-commerce platform has unique SEO considerations. I optimize within your platform's capabilities while maximizing search visibility.",
    whyChooseMe: [
      { icon: ShoppingCart, title: "Revenue-Focused", description: "Prioritize keywords and optimizations that drive sales, not vanity traffic" },
      { icon: TrendingUp, title: "Platform Expertise", description: "Deep experience with all major e-commerce platforms and their SEO limitations" },
      { icon: FileText, title: "Conversion Optimization", description: "SEO strategies that improve rankings AND product conversion rates" },
      { icon: Search, title: "Competitive Analysis", description: "Identify gaps in competitor strategies and capitalize on opportunities" }
    ],
    faqs: [
      { question: "How long does e-commerce SEO take?", answer: "Initial improvements appear within 2-3 months. Full category and product dominance takes 6-12 months depending on competition and catalog size." },
      { question: "Should I optimize every product page?", answer: "Prioritize high-value products first, then scale. I focus on products with the best profit margins and search volume first." },
      { question: "Do I need a blog for e-commerce SEO?", answer: "Not mandatory, but highly recommended. Blogs target informational keywords that introduce customers to your products earlier in their journey." },
      { question: "How do I compete with Amazon and big retailers?", answer: "Target long-tail product keywords, build topical authority in your niche, and optimize for user experience. You can win specific product searches." },
      { question: "Is e-commerce SEO different from regular SEO?", answer: "Yes—it requires product-specific optimization, schema markup, category structure planning, and dealing with duplicate content challenges unique to online stores." }
    ],
    relatedServices: ["technical-seo", "content-seo", "link-building"]
  }
};

"content-seo": {
    slug: "content-seo",
    name: "Content SEO",
    primaryKeyword: "content SEO services",
    secondaryKeywords: ["SEO content writing", "content optimization", "semantic SEO", "topical authority"],
    hero: {
      badge: "SEO Services",
      headline: "Content SEO That Ranks and Converts",
      description: "Strategic content creation and optimization that builds topical authority, ranks for valuable keywords, and turns visitors into customers."
    },
    definition: {
      what: "Content SEO is the strategic creation and optimization of content to rank for target keywords while satisfying search intent and building topical authority.",
      why: "Content is the foundation of SEO. Without high-quality, optimized content targeting the right keywords, your site won't rank—regardless of technical perfection.",
      whoFor: "Essential for businesses looking to build organic visibility, establish thought leadership, and drive conversions through educational and transactional content."
    },
    problems: [
      { icon: FileText, title: "Thin Content", description: "Pages with insufficient depth failing to compete with comprehensive competitor content" },
      { icon: Search, title: "Wrong Keywords", description: "Targeting keywords with no search volume or commercial intent" },
      { icon: Users, title: "Poor Engagement", description: "High bounce rates and low time-on-page signaling poor content quality" },
      { icon: TrendingUp, title: "No Topical Authority", description: "Lack of comprehensive coverage preventing rankings for competitive terms" },
      { icon: FileText, title: "Duplicate Content", description: "Similar pages competing against each other internally" },
      { icon: Layout, title: "Bad Content Structure", description: "Poor formatting and organization hurting readability and SEO" }
    ],
    process: [
      { number: "01", title: "Content Audit", description: "Analyze existing content performance, gaps, and optimization opportunities", icon: FileSearch },
      { number: "02", title: "Keyword Strategy", description: "Map keywords to content types based on search intent and business goals", icon: Search },
      { number: "03", title: "Topic Clusters", description: "Build topical authority with pillar pages and supporting cluster content", icon: Layout },
      { number: "04", title: "Content Creation", description: "Produce high-quality, comprehensive content optimized for target keywords", icon: FileText },
      { number: "05", title: "On-Page Optimization", description: "Optimize titles, headings, internal links, and semantic SEO elements", icon: Wrench },
      { number: "06", title: "Performance Tracking", description: "Monitor rankings, traffic, and conversions for all content", icon: TrendingUp }
    ],
    deliverables: [
      { category: "Strategy", items: ["Content gap analysis", "Keyword mapping", "Topic cluster plan", "Content calendar"] },
      { category: "Content Creation", items: ["SEO-optimized blog posts", "Landing pages", "Pillar content", "Product/service pages"] },
      { category: "Optimization", items: ["Existing content optimization", "Internal linking structure", "Meta data optimization", "Schema markup"] },
      { category: "Reporting", items: ["Traffic & rankings report", "Engagement metrics", "Conversion tracking", "ROI analysis"] }
    ],
    industries: ["SaaS", "Professional Services", "E-commerce", "B2B", "Healthcare", "Finance"],
    whyChooseMe: [
      { icon: FileText, title: "Semantic SEO Expert", description: "Deep understanding of entity-based SEO and topical authority building" },
      { icon: Search, title: "Intent-Focused", description: "Content mapped to precise search intent for maximum relevance" },
      { icon: Users, title: "Conversion-Driven", description: "Content that ranks AND converts visitors into customers" },
      { icon: TrendingUp, title: "Data-Backed", description: "Every content decision backed by keyword research and competitor analysis" }
    ],
    faqs: [
      { question: "How many blog posts do I need?", answer: "Quality over quantity. Start with 10-15 high-quality pieces targeting your most valuable keywords, then scale based on performance." },
      { question: "Should I focus on short or long-form content?", answer: "Depends on search intent. Informational queries need depth (1500+ words), while transactional queries can be shorter but conversion-focused." },
      { question: "How often should I publish new content?", answer: "Consistency matters more than frequency. 2-4 high-quality posts per month is better than daily low-quality content." },
      { question: "Can you optimize my existing content?", answer: "Yes—often optimizing existing content delivers faster results than creating new content. I audit and optimize underperforming pages first." },
      { question: "What's the difference between content SEO and content marketing?", answer: "Content SEO focuses on organic search visibility and rankings. Content marketing includes broader distribution (social, email). I focus on SEO-driven content." }
    ],
    relatedServices: ["keyword-research", "on-page-seo", "technical-seo"]
  },

  "link-building": {
    slug: "link-building",
    name: "Link Building",
    primaryKeyword: "link building services",
    secondaryKeywords: ["backlink building", "white-hat link building", "authority links", "link acquisition"],
    hero: {
      badge: "SEO Services",
      headline: "White-Hat Link Building That Builds Authority",
      description: "Earn high-quality backlinks from relevant, authoritative sites. No spam, no PBNs, no penalties—just sustainable link acquisition strategies that improve rankings."
    },
    definition: {
      what: "Link building is the process of acquiring backlinks from other websites to improve your site's authority, trustworthiness, and search engine rankings.",
      why: "Backlinks remain one of Google's top 3 ranking factors. Without high-quality links, even perfect on-page SEO won't get you to page 1 for competitive keywords.",
      whoFor: "Critical for any site competing for valuable keywords—especially new sites building initial authority or established sites trying to outrank strong competitors."
    },
    problems: [
      { icon: Link2, title: "Low Domain Authority", description: "Weak backlink profile preventing rankings for competitive keywords" },
      { icon: TrendingUp, title: "Competitors Outranking You", description: "Sites with stronger link profiles dominating your target keywords" },
      { icon: Search, title: "Penalty Risk", description: "Spammy or low-quality links harming your rankings" },
      { icon: FileText, title: "No Link Strategy", description: "Random, unfocused link acquisition with no clear plan" },
      { icon: Users, title: "Irrelevant Links", description: "Backlinks from unrelated sites providing no authority benefit" },
      { icon: Wrench, title: "Slow Progress", description: "Link building taking too long with minimal results" }
    ],
    process: [
      { number: "01", title: "Link Audit", description: "Analyze your current backlink profile and identify toxic links to disavow", icon: FileSearch },
      { number: "02", title: "Competitor Analysis", description: "Study competitor link profiles to identify opportunities and gaps", icon: Users },
      { number: "03", title: "Strategy Development", description: "Create a custom link acquisition plan based on your niche and goals", icon: Layout },
      { number: "04", title: "Outreach & Acquisition", description: "Execute white-hat link building tactics: guest posts, PR, resource links", icon: Link2 },
      { number: "05", title: "Content Assets", description: "Create linkable assets that naturally attract backlinks", icon: FileText },
      { number: "06", title: "Monitoring & Reporting", description: "Track new links, domain authority growth, and ranking improvements", icon: TrendingUp }
    ],
    deliverables: [
      { category: "Strategy", items: ["Link gap analysis", "Competitor backlink study", "Custom outreach strategy", "Linkable asset plan"] },
      { category: "Link Acquisition", items: ["10-20 high-quality links/month", "Guest post placements", "Resource page links", "Editorial mentions"] },
      { category: "Content Creation", items: ["Guest post content", "Linkable infographics", "Data studies", "Expert roundups"] },
      { category: "Reporting", items: ["Monthly link report", "Domain authority tracking", "Ranking improvements", "Link quality metrics"] }
    ],
    industries: ["All industries", "SaaS", "E-commerce", "Local Business", "B2B", "Professional Services"],
    whyChooseMe: [
      { icon: Link2, title: "White-Hat Only", description: "100% ethical link building—no spam, PBNs, or black-hat tactics" },
      { icon: TrendingUp, title: "Quality Over Quantity", description: "Focus on high-authority, relevant links that move the needle" },
      { icon: Users, title: "Relationship-Based", description: "Build real relationships with editors and site owners for sustainable links" },
      { icon: FileText, title: "Transparent Reporting", description: "Full disclosure of every link acquired with metrics and proof" }
    ],
    faqs: [
      { question: "How many links do I need?", answer: "Quality matters more than quantity. 5-10 high-authority links often outperform 100 low-quality links. Strategy depends on your competition." },
      { question: "How long does link building take?", answer: "Initial links can be acquired within weeks, but meaningful ranking improvements typically take 3-6 months as Google processes new authority." },
      { question: "Are all link building services spam?", answer: "No—but many are. White-hat link building focuses on earning links through quality content, relationships, and value—not buying or manipulating." },
      { question: "Do I need to keep building links forever?", answer: "Link building is ongoing. Competitors are building links too, so maintaining and growing your profile is essential for sustained rankings." },
      { question: "What's the difference between do-follow and no-follow links?", answer: "Do-follow links pass authority; no-follow don't. Both are valuable—a natural profile includes both types from diverse sources." }
    ],
    relatedServices: ["content-seo", "off-page-seo", "competitor-analysis"]
  }

export const servicesList = [
  "technical-seo",
  "local-seo",
  "ecommerce-seo",
  "content-seo",
  "link-building",
  "on-page-seo",
  "off-page-seo",
  "seo-audit",
  "keyword-research",
  "competitor-analysis"
];
