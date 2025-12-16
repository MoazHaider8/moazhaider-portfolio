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
  framework?: {
    title: string;
    description: string;
    pillars: Array<{
      icon: string;
      title: string;
      description: string;
      features: string[];
    }>;
  };
  whyBusinessesChoose?: {
    stats: Array<{
      value: string;
      label: string;
      icon: string;
    }>;
    reasons: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  hireSpecialist?: {
    tagline: string;
    benefits: string[];
    cta: string;
  };
  howItWorks?: {
    timeline: Array<{
      week: string;
      title: string;
      description: string;
      deliverables: string[];
      icon: string;
    }>;
  };
  comprehensiveServices?: {
    introduction: string;
    serviceCategories: Array<{
      category: string;
      services: Array<{
        name: string;
        description: string;
        icon: string;
      }>;
    }>;
  };
  whyMatters?: {
    impact: string;
    statistics: Array<{
      stat: string;
      description: string;
    }>;
    consequences: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  transformProcess?: {
    subtitle: string;
    phases: Array<{
      phase: string;
      title: string;
      description: string;
      outcomes: string[];
      icon: string;
    }>;
  };
  definition: {
    what: string;
    why: string;
    whoFor: string;
  };
  problems: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  process: Array<{
    number: string;
    title: string;
    description: string;
    icon: string;
  }>;
  deliverables: Array<{
    category: string;
    items: string[];
  }>;
  industries: string[];
  platforms?: string[];
  platformNote?: string;
  whyChooseMe: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  countriesServed?: {
    description: string;
    regions: Array<{
      region: string;
      countries: string[];
      highlight: boolean;
    }>;
  };
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
    framework: {
      title: "My Technical SEO Framework",
      description: "A systematic approach built on 4 core pillars that address every technical factor affecting your search visibility and user experience.",
      pillars: [
        {
          icon: "Server",
          title: "Crawl Optimization",
          description: "Ensure search engines can efficiently discover and access all important pages on your site.",
          features: [
            "Robots.txt optimization and crawl budget management",
            "XML sitemap structure and submission",
            "Internal linking architecture",
            "URL parameter handling and canonicalization"
          ]
        },
        {
          icon: "Database",
          title: "Indexability & Structure",
          description: "Control which pages get indexed and how search engines understand your site hierarchy.",
          features: [
            "Meta robots and X-Robots-Tag configuration",
            "Structured data implementation (Schema.org)",
            "Site architecture and information hierarchy",
            "Duplicate content resolution"
          ]
        },
        {
          icon: "Zap",
          title: "Performance Optimization",
          description: "Deliver lightning-fast page speeds that satisfy both users and search algorithms.",
          features: [
            "Core Web Vitals optimization (LCP, FID, CLS)",
            "Image optimization and lazy loading",
            "JavaScript and CSS minification",
            "Server response time and caching strategies"
          ]
        },
        {
          icon: "Shield",
          title: "Technical Health",
          description: "Maintain a secure, mobile-friendly, and error-free technical foundation.",
          features: [
            "HTTPS implementation and security headers",
            "Mobile-first optimization and responsive design",
            "404 error resolution and redirect management",
            "Hreflang and international SEO setup"
          ]
        }
      ]
    },
    whyBusinessesChoose: {
      stats: [
        {
          value: "500+",
          label: "Sites Optimized",
          icon: "TrendingUp"
        },
        {
          value: "94%",
          label: "Average Core Web Vitals Score",
          icon: "Zap"
        },
        {
          value: "67%",
          label: "Average Indexation Improvement",
          icon: "Database"
        },
        {
          value: "2.4s",
          label: "Average Load Time Reduction",
          icon: "Clock"
        }
      ],
      reasons: [
        {
          title: "Deep Technical Expertise",
          description: "15+ years working with complex enterprise sites, custom CMS platforms, and everything in between. I've diagnosed and fixed thousands of technical issues across every platform.",
          icon: "Code"
        },
        {
          title: "Crawl Budget Mastery",
          description: "Specialized expertise in crawl optimization for large sites. I ensure search engines focus on your most important pages, not wasting resources on duplicate or low-value content.",
          icon: "Server"
        },
        {
          title: "Performance-First Approach",
          description: "Core Web Vitals aren't just checkboxes—they're user experience factors that directly impact rankings. I optimize for real-world performance, not just test scores.",
          icon: "Gauge"
        },
        {
          title: "Platform-Agnostic Solutions",
          description: "From WordPress to custom-built platforms, I implement technical SEO solutions that work within your tech stack's constraints while maximizing search visibility.",
          icon: "Layers"
        }
      ]
    },
    hireSpecialist: {
      tagline: "Ready to fix what's holding your site back?",
      benefits: [
        "Get a comprehensive technical audit revealing every issue blocking your rankings",
        "Receive a prioritized roadmap with impact scores for each technical fix",
        "Stop losing rankings to preventable technical problems",
        "Ensure every page you publish is crawlable, indexable, and optimized"
      ],
      cta: "Get Your Technical SEO Audit"
    },
    howItWorks: {
      timeline: [
        {
          week: "Week 1",
          title: "Comprehensive Technical Audit",
          description: "Complete technical analysis using Screaming Frog, Google Search Console, Core Web Vitals data, and server log analysis. Identify every technical issue affecting SEO performance.",
          deliverables: [
            "Technical SEO audit report with prioritized issues",
            "Core Web Vitals assessment and improvement plan",
            "Crawl budget analysis and optimization recommendations",
            "Indexation audit identifying blocked or missing pages"
          ],
          icon: "Search"
        },
        {
          week: "Week 2",
          title: "Critical Issues Resolution",
          description: "Fix high-impact technical issues first: crawl errors, indexation problems, critical performance issues, and mobile usability problems preventing proper ranking.",
          deliverables: [
            "Resolved crawl errors and access issues",
            "Corrected robots.txt and meta robots directives",
            "Fixed critical site speed and Core Web Vitals issues",
            "Implemented proper canonicalization"
          ],
          icon: "Wrench"
        },
        {
          week: "Week 3",
          title: "Performance Optimization",
          description: "Deep dive into site speed, Core Web Vitals, and user experience metrics. Optimize images, implement efficient caching, reduce JavaScript bloat, and improve server response times.",
          deliverables: [
            "Optimized Core Web Vitals scores (LCP, FID, CLS)",
            "Implemented lazy loading and efficient resource delivery",
            "Reduced page weight and load times by 40-60%",
            "Mobile performance optimization"
          ],
          icon: "Zap"
        },
        {
          week: "Week 4",
          title: "Structured Data Implementation",
          description: "Deploy Schema markup for enhanced search appearances. Implement organization, product, article, FAQ, and other relevant schema types to help search engines understand your content.",
          deliverables: [
            "Comprehensive Schema.org markup implementation",
            "Rich snippet optimization for key page types",
            "Knowledge Graph entity optimization",
            "Schema validation and testing"
          ],
          icon: "FileCode"
        },
        {
          week: "Week 5",
          title: "Site Architecture Enhancement",
          description: "Optimize internal linking, URL structure, and site hierarchy. Improve crawl efficiency, distribute link equity effectively, and enhance topical relevance through strategic architecture.",
          deliverables: [
            "Optimized internal linking structure",
            "URL structure recommendations and implementation",
            "Enhanced XML sitemap hierarchy",
            "Improved site navigation and information architecture"
          ],
          icon: "Network"
        },
        {
          week: "Week 6",
          title: "Monitoring & Documentation",
          description: "Set up ongoing technical health monitoring, document all changes, establish maintenance protocols, and provide training on maintaining technical SEO standards.",
          deliverables: [
            "Technical SEO monitoring dashboard setup",
            "Complete documentation of all fixes and changes",
            "Maintenance checklist and protocols",
            "Training session on technical SEO best practices"
          ],
          icon: "Monitor"
        }
      ]
    },
    comprehensiveServices: {
      introduction: "Everything you need to build and maintain a technically sound, search-friendly website that delivers exceptional performance.",
      serviceCategories: [
        {
          category: "Site Performance",
          services: [
            {
              name: "Core Web Vitals Optimization",
              description: "Optimize LCP, FID, and CLS scores for better rankings and user experience",
              icon: "Zap"
            },
            {
              name: "Page Speed Optimization",
              description: "Reduce load times through efficient resource delivery and caching strategies",
              icon: "Gauge"
            },
            {
              name: "Mobile Performance",
              description: "Optimize for mobile-first indexing with responsive design and efficient mobile delivery",
              icon: "Smartphone"
            },
            {
              name: "Image Optimization",
              description: "Implement WebP, lazy loading, and proper sizing for faster page loads",
              icon: "Image"
            }
          ]
        },
        {
          category: "Crawl & Index Management",
          services: [
            {
              name: "Crawl Budget Optimization",
              description: "Ensure search engines crawl your most important pages efficiently",
              icon: "Server"
            },
            {
              name: "XML Sitemap Optimization",
              description: "Structure and submit optimized sitemaps for better discovery",
              icon: "FileText"
            },
            {
              name: "Robots.txt Configuration",
              description: "Control crawler access and prevent indexation of sensitive content",
              icon: "Shield"
            },
            {
              name: "Indexation Management",
              description: "Ensure proper indexing of important pages while blocking thin content",
              icon: "Database"
            }
          ]
        },
        {
          category: "Technical Infrastructure",
          services: [
            {
              name: "HTTPS & Security",
              description: "Implement SSL certificates, security headers, and secure protocols",
              icon: "Lock"
            },
            {
              name: "Structured Data Markup",
              description: "Deploy Schema.org markup for rich snippets and enhanced search appearance",
              icon: "FileCode"
            },
            {
              name: "Hreflang Implementation",
              description: "Configure international targeting for multi-language or multi-region sites",
              icon: "Globe"
            },
            {
              name: "Canonical URL Management",
              description: "Prevent duplicate content issues with proper canonicalization",
              icon: "Link"
            }
          ]
        },
        {
          category: "Error Resolution",
          services: [
            {
              name: "404 Error Fixing",
              description: "Identify and resolve broken links damaging user experience and SEO",
              icon: "AlertCircle"
            },
            {
              name: "Redirect Management",
              description: "Implement proper 301 redirects and eliminate redirect chains",
              icon: "ArrowRight"
            },
            {
              name: "Broken Link Recovery",
              description: "Fix internal and external broken links to preserve link equity",
              icon: "Link2Off"
            },
            {
              name: "Server Error Resolution",
              description: "Diagnose and fix 5xx errors preventing search engine access",
              icon: "ServerCrash"
            }
          ]
        }
      ]
    },
    whyMatters: {
      impact: "Technical SEO is the foundation that determines whether search engines can even find, access, and rank your content. Without solid technical infrastructure, even the best content strategy fails. It's the difference between being invisible and dominating your market.",
      statistics: [
        {
          stat: "53% of users abandon",
          description: "sites taking more than 3 seconds to load—costing you rankings and revenue"
        },
        {
          stat: "Mobile-first indexing means",
          description: "Google primarily uses your mobile site for ranking—poor mobile performance = poor rankings"
        },
        {
          stat: "Core Web Vitals are",
          description: "confirmed ranking factors—slow sites get deprioritized in search results"
        }
      ],
      consequences: [
        {
          title: "Lost Rankings",
          description: "Technical issues like slow speeds, crawl errors, and poor mobile experience directly lower your search rankings—handing visibility to competitors.",
          icon: "TrendingDown"
        },
        {
          title: "Wasted Crawl Budget",
          description: "Large sites with technical issues waste crawl budget on duplicate content and broken pages instead of important, revenue-generating content.",
          icon: "Server"
        },
        {
          title: "Blocked Revenue",
          description: "If search engines can't crawl your product pages, service pages, or content, you're invisible to potential customers actively searching for what you offer.",
          icon: "DollarSign"
        },
        {
          title: "Poor User Experience",
          description: "Technical problems create slow, broken, frustrating experiences that drive visitors away—damaging both conversions and SEO through poor engagement metrics.",
          icon: "UserX"
        }
      ]
    },
    transformProcess: {
      subtitle: "Our battle-tested 6-step process that takes sites from technically broken to search-engine optimized",
      phases: [
        {
          phase: "Phase 1",
          title: "Audit & Analysis",
          description: "Comprehensive technical analysis using Screaming Frog, Google Search Console, PageSpeed Insights, and server log analysis. Identify every issue preventing optimal search performance.",
          outcomes: [
            "Complete technical audit report with prioritized issues",
            "Core Web Vitals baseline and improvement roadmap",
            "Crawl efficiency analysis and recommendations",
            "Mobile usability assessment"
          ],
          icon: "FileSearch"
        },
        {
          phase: "Phase 2",
          title: "Critical Issue Resolution",
          description: "Fix high-impact technical barriers first: crawl errors blocking indexation, severe performance issues, critical mobile problems, and security vulnerabilities.",
          outcomes: [
            "Resolved crawl errors and access issues",
            "Fixed critical Core Web Vitals problems",
            "Corrected indexation directives",
            "Implemented proper HTTPS and security headers"
          ],
          icon: "AlertTriangle"
        },
        {
          phase: "Phase 3",
          title: "Performance Optimization",
          description: "Deep optimization of site speed, Core Web Vitals, and resource delivery. Implement caching, image optimization, code minification, and efficient loading strategies.",
          outcomes: [
            "Optimized LCP, FID, and CLS scores",
            "40-60% reduction in page load times",
            "Implemented lazy loading and efficient resource delivery",
            "Mobile performance optimization"
          ],
          icon: "Zap"
        },
        {
          phase: "Phase 4",
          title: "Structure & Markup",
          description: "Optimize site architecture, implement structured data, and enhance crawl efficiency through strategic internal linking and sitemap optimization.",
          outcomes: [
            "Comprehensive Schema.org markup deployed",
            "Optimized site architecture and URL structure",
            "Enhanced XML sitemaps and robots.txt",
            "Improved internal linking for crawl efficiency"
          ],
          icon: "Layout"
        },
        {
          phase: "Phase 5",
          title: "Index Management",
          description: "Ensure proper indexation of important pages while blocking thin or duplicate content. Optimize crawl budget for large sites and resolve indexation issues.",
          outcomes: [
            "Proper canonicalization across all pages",
            "Strategic noindex implementation for thin content",
            "Optimized crawl budget allocation",
            "Resolved duplicate content issues"
          ],
          icon: "Database"
        },
        {
          phase: "Phase 6",
          title: "Monitor & Maintain",
          description: "Establish ongoing technical health monitoring, set up alerts for new issues, document all changes, and create maintenance protocols for long-term success.",
          outcomes: [
            "Technical SEO monitoring dashboard implemented",
            "Automated alerts for technical issues",
            "Complete documentation and maintenance guide",
            "Quarterly technical health audits scheduled"
          ],
          icon: "Activity"
        }
      ]
    },
    countriesServed: {
      description: "Providing technical SEO services globally to businesses of all sizes across major markets",
      regions: [
        {
          region: "North America",
          countries: ["United States", "Canada", "Mexico"],
          highlight: true
        },
        {
          region: "Europe",
          countries: ["United Kingdom", "Germany", "France", "Spain", "Italy", "Netherlands", "Switzerland"],
          highlight: true
        },
        {
          region: "Asia Pacific",
          countries: ["Australia", "Singapore", "India", "Japan", "New Zealand"],
          highlight: false
        },
        {
          region: "Middle East",
          countries: ["United Arab Emirates", "Saudi Arabia", "Qatar"],
          highlight: false
        }
      ]
    },
    definition: {
      what: "Technical SEO is the process of optimizing your website's infrastructure to help search engines crawl, index, and understand your content more effectively.",
      why: "Even the best content can't rank if search engines can't access it properly. Technical SEO ensures your site is fast, crawlable, secure, and structured for maximum visibility.",
      whoFor: "Essential for websites with indexing issues, slow page speeds, crawl errors, or poor mobile performance—especially e-commerce sites, large content sites, and SaaS platforms."
    },
    problems: [
      { icon: "Wrench", title: "Slow Page Speed", description: "Poor Core Web Vitals hurting rankings and user experience" },
      { icon: "FileSearch", title: "Crawl Errors", description: "Pages not being discovered or indexed by search engines" },
      { icon: "Layout", title: "Mobile Issues", description: "Poor mobile usability affecting mobile-first indexing" },
      { icon: "Link2", title: "Broken Links", description: "404 errors and redirect chains damaging site authority" },
      { icon: "Search", title: "Indexation Problems", description: "Important pages blocked from search results" },
      { icon: "TrendingUp", title: "Poor Site Architecture", description: "Confusing URL structure preventing efficient crawling" }
    ],
    process: [
      { number: "01", title: "Technical Audit", description: "Comprehensive crawl analysis identifying all technical issues affecting SEO performance", icon: "FileSearch" },
      { number: "02", title: "Priority Mapping", description: "Categorize issues by impact and create an implementation roadmap", icon: "Layout" },
      { number: "03", title: "Core Fixes", description: "Resolve critical issues: crawlability, indexability, site speed, mobile optimization", icon: "Wrench" },
      { number: "04", title: "Schema Implementation", description: "Deploy structured data for enhanced search appearance and entity recognition", icon: "FileText" },
      { number: "05", title: "Performance Optimization", description: "Improve Core Web Vitals, reduce load times, optimize resources", icon: "TrendingUp" },
      { number: "06", title: "Monitoring & Maintenance", description: "Ongoing technical health checks and proactive issue resolution", icon: "Search" }
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
      { icon: "Wrench", title: "Expert-Level Execution", description: "15+ years fixing complex technical SEO issues across hundreds of sites" },
      { icon: "TrendingUp", title: "Data-Driven Fixes", description: "Every recommendation backed by crawl data, analytics, and testing" },
      { icon: "Search", title: "Google Best Practices", description: "Adherence to official Google guidelines and Search Central documentation" },
      { icon: "FileText", title: "Transparent Reporting", description: "Clear documentation of all issues found and fixes implemented" }
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
      { icon: "MapPin", title: "Invisible on Google Maps", description: "Not showing up in local pack results for your service area" },
      { icon: "Search", title: "Low Local Rankings", description: "Competitors outranking you for 'near me' and city-based searches" },
      { icon: "Users", title: "Inconsistent NAP Data", description: "Different business information across the web confusing customers and Google" },
      { icon: "FileText", title: "Missing Reviews", description: "Few or no Google reviews compared to competitors" },
      { icon: "MapPin", title: "Wrong Service Areas", description: "Not targeting all the cities and neighborhoods you serve" },
      { icon: "TrendingUp", title: "Poor Conversion", description: "Getting map views but not phone calls or direction requests" }
    ],
    process: [
      { number: "01", title: "Local SEO Audit", description: "Analyze your Google Business Profile, citations, reviews, and local visibility", icon: "FileSearch" },
      { number: "02", title: "GBP Optimization", description: "Fully optimize your Google Business Profile with categories, photos, posts, and attributes", icon: "MapPin" },
      { number: "03", title: "Citation Building", description: "Build and clean up NAP consistency across directories, platforms, and local sites", icon: "FileText" },
      { number: "04", title: "Review Strategy", description: "Implement systems to generate and respond to Google reviews authentically", icon: "Users" },
      { number: "05", title: "Local Content", description: "Create location-specific content targeting your service areas and local keywords", icon: "Layout" },
      { number: "06", title: "Tracking & Reporting", description: "Monitor local rankings, map visibility, calls, and direction requests", icon: "TrendingUp" }
    ],
    deliverables: [
      { category: "GBP Optimization", items: ["Complete profile setup", "Category optimization", "Photo optimization", "Regular posts schedule"] },
      { category: "Citation Building", items: ["50+ directory submissions", "NAP consistency audit", "Duplicate listing cleanup", "Local schema markup"] },
      { category: "Review Management", items: ["Review generation system", "Response templates", "Review monitoring setup"] },
      { category: "Local Content", items: ["Location pages", "Service area content", "Local blog posts", "City-specific landing pages"] }
    ],
    industries: ["Home Services", "Medical & Dental", "Legal Services", "Restaurants", "Retail", "Professional Services"],
    whyChooseMe: [
      { icon: "MapPin", title: "Local Market Expertise", description: "Proven strategies that work across multiple geographic markets" },
      { icon: "Users", title: "White-Hat Only", description: "No fake reviews, spam, or black-hat tactics that risk penalties" },
      { icon: "TrendingUp", title: "Conversion-Focused", description: "Focus on rankings that drive calls, visits, and revenue—not vanity metrics" },
      { icon: "FileText", title: "Transparent Reporting", description: "Monthly reports showing rankings, visibility, calls, and ROI" }
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
      { icon: "ShoppingCart", title: "Low Product Visibility", description: "Products buried on page 5+ while competitors dominate page 1" },
      { icon: "Search", title: "Thin Product Descriptions", description: "Duplicate or minimal content failing to rank or convert" },
      { icon: "Layout", title: "Poor Site Architecture", description: "Confusing category structure making products hard to find" },
      { icon: "TrendingUp", title: "High Bounce Rates", description: "Traffic arriving but not converting into sales" },
      { icon: "FileText", title: "Missing Rich Snippets", description: "No star ratings, pricing, or availability showing in search" },
      { icon: "Link2", title: "Weak Internal Linking", description: "Products not benefiting from category and homepage authority" }
    ],
    process: [
      { number: "01", title: "Store Audit", description: "Comprehensive analysis of site structure, technical issues, and content gaps", icon: "FileSearch" },
      { number: "02", title: "Keyword Research", description: "Identify high-intent product and category keywords with buyer intent", icon: "Search" },
      { number: "03", title: "Technical Optimization", description: "Fix crawl issues, improve site speed, optimize for mobile shoppers", icon: "Wrench" },
      { number: "04", title: "On-Page Optimization", description: "Optimize product titles, descriptions, images, and category pages", icon: "Layout" },
      { number: "05", title: "Schema Implementation", description: "Add product schema for rich snippets, reviews, pricing, and availability", icon: "FileText" },
      { number: "06", title: "Content Strategy", description: "Build buying guides, comparison pages, and category descriptions", icon: "FileText" }
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
      { icon: "ShoppingCart", title: "Revenue-Focused", description: "Prioritize keywords and optimizations that drive sales, not vanity traffic" },
      { icon: "TrendingUp", title: "Platform Expertise", description: "Deep experience with all major e-commerce platforms and their SEO limitations" },
      { icon: "FileText", title: "Conversion Optimization", description: "SEO strategies that improve rankings AND product conversion rates" },
      { icon: "Search", title: "Competitive Analysis", description: "Identify gaps in competitor strategies and capitalize on opportunities" }
    ],
    faqs: [
      { question: "How long does e-commerce SEO take?", answer: "Initial improvements appear within 2-3 months. Full category and product dominance takes 6-12 months depending on competition and catalog size." },
      { question: "Should I optimize every product page?", answer: "Prioritize high-value products first, then scale. I focus on products with the best profit margins and search volume first." },
      { question: "Do I need a blog for e-commerce SEO?", answer: "Not mandatory, but highly recommended. Blogs target informational keywords that introduce customers to your products earlier in their journey." },
      { question: "How do I compete with Amazon and big retailers?", answer: "Target long-tail product keywords, build topical authority in your niche, and optimize for user experience. You can win specific product searches." },
      { question: "Is e-commerce SEO different from regular SEO?", answer: "Yes—it requires product-specific optimization, schema markup, category structure planning, and dealing with duplicate content challenges unique to online stores." }
    ],
    relatedServices: ["technical-seo", "content-seo", "link-building"]
  },

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
      { icon: "FileText", title: "Thin Content", description: "Pages with insufficient depth failing to compete with comprehensive competitor content" },
      { icon: "Search", title: "Wrong Keywords", description: "Targeting keywords with no search volume or commercial intent" },
      { icon: "Users", title: "Poor Engagement", description: "High bounce rates and low time-on-page signaling poor content quality" },
      { icon: "TrendingUp", title: "No Topical Authority", description: "Lack of comprehensive coverage preventing rankings for competitive terms" },
      { icon: "FileText", title: "Duplicate Content", description: "Similar pages competing against each other internally" },
      { icon: "Layout", title: "Bad Content Structure", description: "Poor formatting and organization hurting readability and SEO" }
    ],
    process: [
      { number: "01", title: "Content Audit", description: "Analyze existing content performance, gaps, and optimization opportunities", icon: "FileSearch" },
      { number: "02", title: "Keyword Strategy", description: "Map keywords to content types based on search intent and business goals", icon: "Search" },
      { number: "03", title: "Topic Clusters", description: "Build topical authority with pillar pages and supporting cluster content", icon: "Layout" },
      { number: "04", title: "Content Creation", description: "Produce high-quality, comprehensive content optimized for target keywords", icon: "FileText" },
      { number: "05", title: "On-Page Optimization", description: "Optimize titles, headings, internal links, and semantic SEO elements", icon: "Wrench" },
      { number: "06", title: "Performance Tracking", description: "Monitor rankings, traffic, and conversions for all content", icon: "TrendingUp" }
    ],
    deliverables: [
      { category: "Strategy", items: ["Content gap analysis", "Keyword mapping", "Topic cluster plan", "Content calendar"] },
      { category: "Content Creation", items: ["SEO-optimized blog posts", "Landing pages", "Pillar content", "Product/service pages"] },
      { category: "Optimization", items: ["Existing content optimization", "Internal linking structure", "Meta data optimization", "Schema markup"] },
      { category: "Reporting", items: ["Traffic & rankings report", "Engagement metrics", "Conversion tracking", "ROI analysis"] }
    ],
    industries: ["SaaS", "Professional Services", "E-commerce", "B2B", "Healthcare", "Finance"],
    whyChooseMe: [
      { icon: "FileText", title: "Semantic SEO Expert", description: "Deep understanding of entity-based SEO and topical authority building" },
      { icon: "Search", title: "Intent-Focused", description: "Content mapped to precise search intent for maximum relevance" },
      { icon: "Users", title: "Conversion-Driven", description: "Content that ranks AND converts visitors into customers" },
      { icon: "TrendingUp", title: "Data-Backed", description: "Every content decision backed by keyword research and competitor analysis" }
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
      { icon: "Link2", title: "Low Domain Authority", description: "Weak backlink profile preventing rankings for competitive keywords" },
      { icon: "TrendingUp", title: "Competitors Outranking You", description: "Sites with stronger link profiles dominating your target keywords" },
      { icon: "Search", title: "Penalty Risk", description: "Spammy or low-quality links harming your rankings" },
      { icon: "FileText", title: "No Link Strategy", description: "Random, unfocused link acquisition with no clear plan" },
      { icon: "Users", title: "Irrelevant Links", description: "Backlinks from unrelated sites providing no authority benefit" },
      { icon: "Wrench", title: "Slow Progress", description: "Link building taking too long with minimal results" }
    ],
    process: [
      { number: "01", title: "Link Audit", description: "Analyze your current backlink profile and identify toxic links to disavow", icon: "FileSearch" },
      { number: "02", title: "Competitor Analysis", description: "Study competitor link profiles to identify opportunities and gaps", icon: "Users" },
      { number: "03", title: "Strategy Development", description: "Create a custom link acquisition plan based on your niche and goals", icon: "Layout" },
      { number: "04", title: "Outreach & Acquisition", description: "Execute white-hat link building tactics: guest posts, PR, resource links", icon: "Link2" },
      { number: "05", title: "Content Assets", description: "Create linkable assets that naturally attract backlinks", icon: "FileText" },
      { number: "06", title: "Monitoring & Reporting", description: "Track new links, domain authority growth, and ranking improvements", icon: "TrendingUp" }
    ],
    deliverables: [
      { category: "Strategy", items: ["Link gap analysis", "Competitor backlink study", "Custom outreach strategy", "Linkable asset plan"] },
      { category: "Link Acquisition", items: ["10-20 high-quality links/month", "Guest post placements", "Resource page links", "Editorial mentions"] },
      { category: "Content Creation", items: ["Guest post content", "Linkable infographics", "Data studies", "Expert roundups"] },
      { category: "Reporting", items: ["Monthly link report", "Domain authority tracking", "Ranking improvements", "Link quality metrics"] }
    ],
    industries: ["All industries", "SaaS", "E-commerce", "Local Business", "B2B", "Professional Services"],
    whyChooseMe: [
      { icon: "Link2", title: "White-Hat Only", description: "100% ethical link building—no spam, PBNs, or black-hat tactics" },
      { icon: "TrendingUp", title: "Quality Over Quantity", description: "Focus on high-authority, relevant links that move the needle" },
      { icon: "Users", title: "Relationship-Based", description: "Build real relationships with editors and site owners for sustainable links" },
      { icon: "FileText", title: "Transparent Reporting", description: "Full disclosure of every link acquired with metrics and proof" }
    ],
    faqs: [
      { question: "How many links do I need?", answer: "Quality matters more than quantity. 5-10 high-authority links often outperform 100 low-quality links. Strategy depends on your competition." },
      { question: "How long does link building take?", answer: "Initial links can be acquired within weeks, but meaningful ranking improvements typically take 3-6 months as Google processes new authority." },
      { question: "Are all link building services spam?", answer: "No—but many are. White-hat link building focuses on earning links through quality content, relationships, and value—not buying or manipulating." },
      { question: "Do I need to keep building links forever?", answer: "Link building is ongoing. Competitors are building links too, so maintaining and growing your profile is essential for sustained rankings." },
      { question: "What's the difference between do-follow and no-follow links?", answer: "Do-follow links pass authority; no-follow don't. Both are valuable—a natural profile includes both types from diverse sources." }
    ],
    relatedServices: ["content-seo", "off-page-seo", "competitor-analysis"]
  },

  "on-page-seo": {
    slug: "on-page-seo",
    name: "On-Page SEO",
    primaryKeyword: "on-page SEO services",
    secondaryKeywords: ["page optimization", "meta tags", "content optimization", "internal linking"],
    hero: {
      badge: "SEO Services",
      headline: "On-Page SEO That Maximizes Every Page's Ranking Potential",
      description: "Optimize every element on your pages—from titles and headings to content structure and internal linking. Make every page work harder for rankings and conversions."
    },
    definition: {
      what: "On-page SEO is the practice of optimizing individual web pages to rank higher and earn more relevant traffic by improving content, HTML elements, and user experience signals.",
      why: "On-page SEO tells search engines exactly what your page is about and why it deserves to rank. Without proper optimization, even great content won't reach its ranking potential.",
      whoFor: "Essential for every website—whether you're launching new pages, refreshing existing content, or trying to improve underperforming pages."
    },
    problems: [
      { icon: "FileText", title: "Poor Title Tags", description: "Missing keywords or weak titles failing to attract clicks" },
      { icon: "Layout", title: "Bad Content Structure", description: "No clear H1/H2/H3 hierarchy confusing users and search engines" },
      { icon: "Search", title: "Keyword Cannibalization", description: "Multiple pages competing for the same keywords" },
      { icon: "Link2", title: "Weak Internal Linking", description: "Pages not benefiting from site-wide authority distribution" },
      { icon: "FileSearch", title: "Missing Schema Markup", description: "No structured data limiting rich snippet opportunities" },
      { icon: "Users", title: "High Bounce Rates", description: "Poor UX signals harming rankings despite good content" }
    ],
    process: [
      { number: "01", title: "Page Audit", description: "Analyze all on-page elements: titles, descriptions, headings, content, images", icon: "FileSearch" },
      { number: "02", title: "Keyword Mapping", description: "Assign target keywords to pages based on intent and search volume", icon: "Search" },
      { number: "03", title: "Content Optimization", description: "Enhance content quality, depth, readability, and keyword targeting", icon: "FileText" },
      { number: "04", title: "HTML Optimization", description: "Perfect title tags, meta descriptions, headings, and image alt text", icon: "Layout" },
      { number: "05", title: "Internal Linking", description: "Build strategic internal link structure to distribute authority", icon: "Link2" },
      { number: "06", title: "Schema Implementation", description: "Add relevant structured data for enhanced search appearance", icon: "Wrench" }
    ],
    deliverables: [
      { category: "HTML Elements", items: ["Optimized title tags", "Compelling meta descriptions", "Proper heading hierarchy", "Image alt text optimization"] },
      { category: "Content", items: ["Keyword-optimized copy", "Improved readability", "Content depth enhancement", "FAQ sections"] },
      { category: "Technical Elements", items: ["Internal linking strategy", "URL optimization", "Schema markup", "Canonical tags"] },
      { category: "Reporting", items: ["Before/after comparison", "Ranking improvements", "CTR improvements", "Traffic growth"] }
    ],
    industries: ["All industries", "SaaS", "E-commerce", "Local Business", "B2B", "Services"],
    platforms: ["WordPress", "Shopify", "Webflow", "Custom CMS", "Static sites"],
    platformNote: "On-page SEO works on any platform. Implementation methods vary, but optimization principles remain consistent.",
    whyChooseMe: [
      { icon: "Search", title: "Semantic SEO Expert", description: "Deep understanding of entity-based optimization and topical relevance" },
      { icon: "FileText", title: "User-Focused", description: "Optimization that improves both rankings and user experience" },
      { icon: "TrendingUp", title: "Data-Driven", description: "Every change backed by keyword research and competitive analysis" },
      { icon: "Layout", title: "Conversion-Aware", description: "Optimize for rankings AND conversions, not just traffic" }
    ],
    faqs: [
      { question: "How long does on-page SEO take?", answer: "Initial optimization of key pages takes 2-4 weeks. Full site optimization depends on site size but typically 1-3 months." },
      { question: "Will on-page SEO alone improve my rankings?", answer: "On-page is essential but works best combined with technical SEO and link building. For low-competition keywords, on-page alone can rank you." },
      { question: "How often should I update on-page SEO?", answer: "Review quarterly or when performance drops. Update content annually to maintain freshness and relevance." },
      { question: "What's the most important on-page element?", answer: "No single element dominates—it's the combination. Title tags, content quality, and user experience signals all matter equally." },
      { question: "Can I do on-page SEO myself?", answer: "Basic optimization yes, but expert-level semantic SEO, keyword mapping, and schema require deep technical knowledge and experience." }
    ],
    relatedServices: ["content-seo", "technical-seo", "keyword-research"]
  },

  "off-page-seo": {
    slug: "off-page-seo",
    name: "Off-Page SEO",
    primaryKeyword: "off-page SEO services",
    secondaryKeywords: ["link building", "brand mentions", "social signals", "authority building"],
    hero: {
      badge: "SEO Services",
      headline: "Off-Page SEO That Builds Authority and Trust",
      description: "Build your site's authority through strategic link acquisition, brand mentions, and reputation management. Earn the trust signals Google uses to rank competitive keywords."
    },
    definition: {
      what: "Off-page SEO encompasses all activities outside your website that influence your rankings—primarily backlinks, brand mentions, social signals, and online reputation.",
      why: "Off-page SEO builds the external authority and trust signals that tell Google your site deserves to rank. Without it, you can't compete for valuable keywords.",
      whoFor: "Critical for sites in competitive niches, new sites building initial authority, or established sites trying to outrank stronger competitors."
    },
    problems: [
      { icon: "TrendingUp", title: "Low Domain Authority", description: "Weak off-page profile preventing rankings for competitive terms" },
      { icon: "Link2", title: "Few Quality Backlinks", description: "Not enough high-authority sites linking to your content" },
      { icon: "Users", title: "No Brand Recognition", description: "Lack of brand mentions and citations hurting E-E-A-T signals" },
      { icon: "Search", title: "Competitor Dominance", description: "Competitors with stronger off-page profiles outranking you" },
      { icon: "FileText", title: "Toxic Backlinks", description: "Spammy links from previous tactics harming your rankings" },
      { icon: "MapPin", title: "Weak Local Signals", description: "Missing local citations and reviews for local rankings" }
    ],
    process: [
      { number: "01", title: "Authority Audit", description: "Analyze your backlink profile, domain authority, and off-page signals", icon: "FileSearch" },
      { number: "02", title: "Competitor Research", description: "Study competitor link profiles and identify acquisition opportunities", icon: "Users" },
      { number: "03", title: "Link Strategy", description: "Develop white-hat link building plan targeting high-authority sites", icon: "Link2" },
      { number: "04", title: "Brand Building", description: "Secure brand mentions, PR placements, and thought leadership opportunities", icon: "TrendingUp" },
      { number: "05", title: "Reputation Management", description: "Build positive reviews, manage citations, strengthen E-E-A-T signals", icon: "FileText" },
      { number: "06", title: "Monitoring", description: "Track new links, mentions, domain authority growth, and ranking impact", icon: "Search" }
    ],
    deliverables: [
      { category: "Link Acquisition", items: ["High-authority backlinks", "Guest post placements", "Resource page links", "Editorial mentions"] },
      { category: "Brand Building", items: ["Press mentions", "Industry citations", "Podcast appearances", "Expert roundup features"] },
      { category: "Reputation", items: ["Review generation", "Citation building", "Social proof", "Testimonial placements"] },
      { category: "Reporting", items: ["Link acquisition report", "Domain authority tracking", "Brand mention monitoring", "Ranking improvements"] }
    ],
    industries: ["All industries", "SaaS", "E-commerce", "B2B", "Professional Services", "Local Business"],
    whyChooseMe: [
      { icon: "Link2", title: "White-Hat Strategies", description: "100% ethical tactics that build lasting authority without risk" },
      { icon: "TrendingUp", title: "Relationship-Based", description: "Real connections with publishers, journalists, and industry influencers" },
      { icon: "Users", title: "Brand-Focused", description: "Build actual brand authority, not just manipulated link metrics" },
      { icon: "FileText", title: "Full Transparency", description: "Complete disclosure of all off-page activities and results" }
    ],
    faqs: [
      { question: "What's the difference between off-page and link building?", answer: "Link building is part of off-page SEO. Off-page also includes brand mentions, social signals, reviews, and reputation management." },
      { question: "How long does off-page SEO take?", answer: "Initial activities start immediately, but meaningful authority improvements take 3-6 months as Google processes new trust signals." },
      { question: "Is off-page SEO risky?", answer: "Only if you use black-hat tactics. White-hat off-page SEO focusing on real relationships and quality is completely safe and sustainable." },
      { question: "How many backlinks do I need?", answer: "Quality matters more than quantity. Focus on relevance, authority, and natural acquisition patterns rather than hitting a number." },
      { question: "Can I rank without off-page SEO?", answer: "For very low-competition keywords, yes. For anything competitive, off-page SEO is essential—you can't outrank sites with stronger authority." }
    ],
    relatedServices: ["link-building", "local-seo", "content-seo"]
  },

  "seo-audit": {
    slug: "seo-audit",
    name: "SEO Audit",
    primaryKeyword: "SEO audit services",
    secondaryKeywords: ["website audit", "SEO analysis", "technical audit", "comprehensive SEO audit"],
    hero: {
      badge: "SEO Services",
      headline: "Comprehensive SEO Audits That Reveal What's Holding You Back",
      description: "Get a complete diagnosis of your site's SEO health. I identify technical issues, content gaps, and opportunities—prioritized by impact and delivered with actionable fixes."
    },
    definition: {
      what: "An SEO audit is a comprehensive analysis of your website's technical health, content quality, and off-page authority to identify issues preventing optimal search performance.",
      why: "You can't fix what you don't know is broken. An SEO audit reveals exactly what's preventing your site from ranking and provides a clear roadmap for improvement.",
      whoFor: "Essential before starting any SEO campaign, when rankings drop unexpectedly, after site migrations, or annually to maintain search performance."
    },
    problems: [
      { icon: "Search", title: "Declining Rankings", description: "Rankings dropping but you don't know why or what to fix first" },
      { icon: "Wrench", title: "Unknown Technical Issues", description: "Hidden problems preventing Google from properly crawling or indexing" },
      { icon: "FileText", title: "Content Gaps", description: "Missing topics and keywords competitors are ranking for" },
      { icon: "TrendingUp", title: "Poor ROI", description: "SEO investment not delivering expected results" },
      { icon: "Link2", title: "Penalty Risk", description: "Unsure if your backlink profile or tactics are risky" },
      { icon: "Layout", title: "No Clear Strategy", description: "Don't know what to prioritize or where to start" }
    ],
    process: [
      { number: "01", title: "Technical Crawl", description: "Full site crawl analyzing structure, speed, mobile, indexability, and errors", icon: "Wrench" },
      { number: "02", title: "On-Page Analysis", description: "Evaluate titles, content, internal linking, and keyword optimization", icon: "FileText" },
      { number: "03", title: "Backlink Audit", description: "Assess link profile quality, toxic links, and authority opportunities", icon: "Link2" },
      { number: "04", title: "Competitor Comparison", description: "Benchmark against top-ranking competitors in your niche", icon: "Users" },
      { number: "05", title: "Opportunity Identification", description: "Find quick wins and high-impact improvements for rankings", icon: "Search" },
      { number: "06", title: "Roadmap Creation", description: "Deliver prioritized action plan with timeline and expected impact", icon: "TrendingUp" }
    ],
    deliverables: [
      { category: "Technical Audit", items: ["Full crawl report", "Page speed analysis", "Mobile usability review", "Indexation issues", "Core Web Vitals assessment"] },
      { category: "Content Audit", items: ["Page-by-page analysis", "Keyword mapping", "Content gap identification", "Thin content report", "Duplicate content issues"] },
      { category: "Backlink Audit", items: ["Link profile analysis", "Toxic link identification", "Competitor link gaps", "Disavow file (if needed)"] },
      { category: "Action Plan", items: ["Prioritized fix list", "Implementation roadmap", "Quick win opportunities", "Expected impact estimates"] }
    ],
    industries: ["All industries", "SaaS", "E-commerce", "Local Business", "Enterprise", "Professional Services"],
    platforms: ["WordPress", "Shopify", "Magento", "Webflow", "Wix", "Custom platforms"],
    platformNote: "SEO audits work for any platform. Analysis identifies platform-specific issues and limitations.",
    whyChooseMe: [
      { icon: "FileSearch", title: "Comprehensive Coverage", description: "Full technical, on-page, and off-page analysis—nothing missed" },
      { icon: "TrendingUp", title: "Actionable Insights", description: "Clear, prioritized recommendations—not overwhelming data dumps" },
      { icon: "Wrench", title: "Expert Analysis", description: "15+ years of experience interpreting data and identifying root causes" },
      { icon: "FileText", title: "Clear Roadmap", description: "Step-by-step implementation plan with timelines and impact" }
    ],
    faqs: [
      { question: "How long does an SEO audit take?", answer: "Most audits are completed within 1-2 weeks depending on site size. Small sites (under 100 pages) can be audited in 3-5 days." },
      { question: "What's included in an SEO audit?", answer: "Technical crawl, on-page analysis, content audit, backlink profile review, competitor analysis, and prioritized action plan." },
      { question: "Do I need an audit if my site is new?", answer: "Yes—catching technical issues early prevents problems as you grow. Pre-launch audits ensure you start with a solid foundation." },
      { question: "How often should I get an SEO audit?", answer: "Annually for most sites, quarterly for large e-commerce sites, and immediately after major site changes or traffic drops." },
      { question: "Will you fix the issues or just identify them?", answer: "The audit identifies and prioritizes issues. I can implement fixes as a separate service or provide detailed instructions for your team." }
    ],
    relatedServices: ["technical-seo", "on-page-seo", "competitor-analysis"]
  },

  "keyword-research": {
    slug: "keyword-research",
    name: "Keyword Research",
    primaryKeyword: "keyword research services",
    secondaryKeywords: ["SEO keyword research", "keyword analysis", "keyword strategy", "search intent analysis"],
    hero: {
      badge: "SEO Services",
      headline: "Keyword Research That Targets What Your Customers Actually Search",
      description: "Discover high-value keywords with real search volume and buyer intent. I find the terms that drive revenue, not just traffic—and map them to a winning content strategy."
    },
    definition: {
      what: "Keyword research is the strategic process of discovering, analyzing, and selecting search terms that your target audience uses to find products, services, or information.",
      why: "Targeting the wrong keywords wastes time and money. Proper keyword research ensures you target terms people actually search for with commercial intent and achievable competition.",
      whoFor: "Essential before starting any SEO campaign, launching new content, or expanding into new markets or product lines."
    },
    problems: [
      { icon: "Search", title: "Targeting Wrong Keywords", description: "Ranking for terms that don't drive conversions or revenue" },
      { icon: "Users", title: "No Search Volume", description: "Targeting keywords nobody actually searches for" },
      { icon: "TrendingUp", title: "Too Competitive", description: "Chasing keywords impossible to rank for with your authority" },
      { icon: "FileText", title: "Missing Opportunities", description: "Competitors ranking for valuable terms you haven't targeted" },
      { icon: "Layout", title: "Unclear Search Intent", description: "Content not matching what searchers actually want" },
      { icon: "FileSearch", title: "No Content Strategy", description: "Keywords identified but no plan for implementation" }
    ],
    process: [
      { number: "01", title: "Business Discovery", description: "Understand your products, services, audience, and business goals", icon: "Users" },
      { number: "02", title: "Seed Keyword Expansion", description: "Generate comprehensive keyword list from core terms and topics", icon: "Search" },
      { number: "03", title: "Search Volume Analysis", description: "Assess real search volume and traffic potential for each term", icon: "TrendingUp" },
      { number: "04", title: "Competition Assessment", description: "Evaluate keyword difficulty and ranking feasibility", icon: "FileSearch" },
      { number: "05", title: "Intent Classification", description: "Categorize keywords by search intent: informational, commercial, transactional", icon: "Layout" },
      { number: "06", title: "Keyword Mapping", description: "Map keywords to pages, content types, and implementation priority", icon: "FileText" }
    ],
    deliverables: [
      { category: "Keyword List", items: ["500-1000 relevant keywords", "Search volume data", "Competition metrics", "Keyword difficulty scores"] },
      { category: "Analysis", items: ["Search intent classification", "Opportunity identification", "Quick wins list", "Long-term targets"] },
      { category: "Strategy", items: ["Keyword-to-page mapping", "Content recommendations", "Priority implementation order", "Topic cluster plan"] },
      { category: "Tools Access", items: ["Keyword tracking setup", "Search Console configuration", "Rank tracking dashboard"] }
    ],
    industries: ["All industries", "SaaS", "E-commerce", "Local Business", "B2B", "Services"],
    whyChooseMe: [
      { icon: "Search", title: "Intent-Focused", description: "Prioritize keywords based on business value and search intent, not just volume" },
      { icon: "TrendingUp", title: "Realistic Targets", description: "Identify keywords you can actually rank for based on your authority" },
      { icon: "FileText", title: "Strategic Mapping", description: "Clear implementation plan—not just a spreadsheet of keywords" },
      { icon: "Users", title: "Competitor Insights", description: "Identify gaps in competitor strategies you can exploit" }
    ],
    faqs: [
      { question: "How many keywords should I target?", answer: "Quality over quantity. Start with 20-30 high-value keywords, then expand. Most sites can meaningfully target 100-300 keywords." },
      { question: "Should I target high-volume or low-volume keywords?", answer: "Both. High-volume for traffic, long-tail for conversions. A balanced strategy targets various volumes based on intent and competition." },
      { question: "How do you determine keyword difficulty?", answer: "Analyze top 10 results' domain authority, content quality, backlinks, and on-page optimization to assess ranking feasibility." },
      { question: "Can I do keyword research myself?", answer: "Basic research yes, but expert-level analysis requires experience interpreting data, understanding intent, and assessing true competition—not just tool scores." },
      { question: "How often should I update keyword research?", answer: "Annually for most businesses, quarterly for rapidly changing industries, and whenever launching new products or entering new markets." }
    ],
    relatedServices: ["content-seo", "on-page-seo", "competitor-analysis"]
  },

  "competitor-analysis": {
    slug: "competitor-analysis",
    name: "Competitor Analysis",
    primaryKeyword: "SEO competitor analysis",
    secondaryKeywords: ["competitive analysis", "competitor research", "competitor keywords", "backlink gap analysis"],
    hero: {
      badge: "SEO Services",
      headline: "SEO Competitor Analysis That Reveals Your Path to Page 1",
      description: "See exactly what your competitors are doing to rank. I reverse-engineer their strategies, identify their weaknesses, and create a plan to outrank them."
    },
    definition: {
      what: "SEO competitor analysis is the systematic evaluation of your top-ranking competitors' SEO strategies to identify opportunities, gaps, and tactics you can use to outrank them.",
      why: "Your competitors are already ranking for valuable keywords. Understanding their strategies reveals proven tactics and opportunities they're missing—your shortcut to page 1.",
      whoFor: "Essential for entering competitive markets, improving existing rankings, or understanding why competitors consistently outrank you."
    },
    problems: [
      { icon: "TrendingUp", title: "Competitors Outranking You", description: "Competitors dominating page 1 for your target keywords" },
      { icon: "Search", title: "Unknown Tactics", description: "Don't know what competitors are doing to rank" },
      { icon: "Link2", title: "Link Gap", description: "Competitors have links from sites you haven't targeted" },
      { icon: "FileText", title: "Content Advantage", description: "Competitors producing content you haven't thought of" },
      { icon: "Layout", title: "Missed Opportunities", description: "Competitors ranking for keywords you didn't know existed" },
      { icon: "Users", title: "No Differentiation", description: "Can't identify unique angles to stand out" }
    ],
    process: [
      { number: "01", title: "Competitor Identification", description: "Identify your true SEO competitors based on keyword overlap", icon: "Users" },
      { number: "02", title: "Keyword Gap Analysis", description: "Find keywords competitors rank for that you don't", icon: "Search" },
      { number: "03", title: "Backlink Analysis", description: "Analyze competitor link profiles and identify acquisition opportunities", icon: "Link2" },
      { number: "04", title: "Content Audit", description: "Evaluate competitor content depth, topics, and engagement", icon: "FileText" },
      { number: "05", title: "Technical Review", description: "Assess competitor site speed, structure, and technical advantages", icon: "Wrench" },
      { number: "06", title: "Strategy Development", description: "Create action plan to close gaps and exploit weaknesses", icon: "TrendingUp" }
    ],
    deliverables: [
      { category: "Competitor Profiles", items: ["3-5 competitor deep-dives", "Traffic estimates", "Top ranking keywords", "Domain authority metrics"] },
      { category: "Gap Analysis", items: ["Keyword opportunities", "Content gaps", "Backlink opportunities", "Technical advantages/disadvantages"] },
      { category: "Strategy Report", items: ["Actionable recommendations", "Quick wins identification", "Competitive differentiation angles", "Implementation priorities"] },
      { category: "Ongoing Monitoring", items: ["Competitor rank tracking", "New content alerts", "Backlink monitoring", "Strategy shift notifications"] }
    ],
    industries: ["All industries", "SaaS", "E-commerce", "Local Business", "B2B", "Professional Services"],
    whyChooseMe: [
      { icon: "Users", title: "True Competitor Focus", description: "Analyze actual SEO competitors, not just business competitors" },
      { icon: "Search", title: "Actionable Intelligence", description: "Clear opportunities and tactics you can implement, not just data" },
      { icon: "TrendingUp", title: "Weakness Exploitation", description: "Identify gaps in competitor strategies you can capitalize on" },
      { icon: "FileText", title: "Ongoing Monitoring", description: "Track competitor changes and adapt strategy proactively" }
    ],
    faqs: [
      { question: "How many competitors should I analyze?", answer: "3-5 direct SEO competitors is optimal. More than that dilutes focus; fewer misses important patterns." },
      { question: "How is SEO competitor different from business competitor?", answer: "Business competitors may not be your SEO competitors. I analyze sites actually ranking for your target keywords, even if they're not direct business rivals." },
      { question: "Can I see my competitors' exact strategy?", answer: "Not exact—but I can reverse-engineer their tactics: keywords they target, content they create, links they build, and technical optimizations they use." },
      { question: "How often should I do competitor analysis?", answer: "Initial deep-dive once, then quarterly check-ins to monitor changes. Immediate re-analysis if a competitor suddenly starts outranking you." },
      { question: "Will copying competitors guarantee rankings?", answer: "No—but understanding what works plus adding your unique value creates a winning strategy. I identify tactics to replicate and opportunities to differentiate." }
    ],
    relatedServices: ["keyword-research", "link-building", "content-seo"]
  }
};

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
