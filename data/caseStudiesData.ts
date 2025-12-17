export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;

  // Classification
  industry: string;
  service: string[];
  platform?: string;
  location: string;

  // Key Metrics (for cards + hero)
  keyMetric: {
    value: string;
    label: string;
  };
  timeline: string;

  // Overview
  overview: {
    companySize: string;
    projectScope: string[];
    duration: string;
    teamSize: string;
    engagementType: string;
  };

  // Challenge
  challenges: {
    title: string;
    description: string;
    icon: string;
    metric?: string;
  }[];

  // Strategy
  strategy: {
    title: string;
    description: string;
    icon: string;
    relatedService: string;
  }[];

  // Implementation
  implementation: {
    phase: string;
    timeline: string;
    tasks: string[];
    tools: string[];
  }[];

  // Results
  results: {
    summary: string;
    metrics: {
      value: string;
      label: string;
      icon: string;
    }[];
    testimonial?: {
      quote: string;
      author: string;
      title: string;
      photo?: string;
    };
  };

  // Tools
  tools: {
    name: string;
    logo: string;
    url: string;
  }[];

  // SEO
  datePublished: string;
  dateModified: string;
  keywords: string[];
  ogImage?: string;

  // Related
  relatedServices: string[];
  relatedCaseStudies: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "ecommerce-traffic-growth-247",
    title: "247% Traffic Growth: How I Helped an Ecommerce Store Dominate Search",
    shortTitle: "Ecommerce Store Achieves 247% Traffic Growth",
    description:
      "A case study showing how strategic Technical SEO and content optimization delivered 247% traffic growth for an ecommerce business in 6 months.",

    industry: "Ecommerce",
    service: ["Technical SEO", "Content Strategy", "Link Building"],
    platform: "Shopify",
    location: "New York, US",

    keyMetric: {
      value: "247%",
      label: "Traffic Increase",
    },
    timeline: "6 months",

    overview: {
      companySize: "20-50 employees",
      projectScope: ["Technical SEO", "Content Optimization", "Link Building"],
      duration: "6 months",
      teamSize: "Solo consultant",
      engagementType: "Ongoing retainer",
    },

    challenges: [
      {
        title: "Slow Page Speed",
        description:
          "Site was loading in 8.3 seconds on average, causing high bounce rates and poor Core Web Vitals scores.",
        icon: "Zap",
        metric: "8.3s average load time",
      },
      {
        title: "Poor Technical Foundation",
        description:
          "1,247 crawl errors, duplicate content issues, and missing schema markup were limiting search visibility.",
        icon: "AlertTriangle",
        metric: "1,247 crawl errors",
      },
      {
        title: "Thin Product Content",
        description:
          "Product pages had minimal content, making it difficult to rank for long-tail keywords and answer user intent.",
        icon: "FileText",
      },
      {
        title: "Low Domain Authority",
        description:
          "Limited backlink profile with DA of 18, struggling to compete in a saturated ecommerce market.",
        icon: "Link",
        metric: "DA 18",
      },
    ],

    strategy: [
      {
        title: "Technical Foundation Overhaul",
        description:
          "Conducted comprehensive technical audit and systematically resolved all critical issues affecting crawlability, indexability, and site performance.",
        icon: "Settings",
        relatedService: "technical-seo",
      },
      {
        title: "Content-First Approach",
        description:
          "Developed rich, keyword-optimized content for product pages and created supporting blog content to capture long-tail queries.",
        icon: "PenTool",
        relatedService: "content-seo",
      },
      {
        title: "Strategic Link Acquisition",
        description:
          "Built high-quality backlinks through industry partnerships, guest posts, and digital PR to increase domain authority.",
        icon: "Link2",
        relatedService: "link-building",
      },
    ],

    implementation: [
      {
        phase: "Phase 1: Technical Audit & Fixes",
        timeline: "Weeks 1-4",
        tasks: [
          "Fixed 1,247 crawl errors affecting search visibility",
          "Optimized Core Web Vitals (LCP, FID, CLS)",
          "Implemented comprehensive schema markup for products",
          "Resolved duplicate content issues",
          "Set up proper canonical tags and redirects",
          "Created XML sitemap and optimized robots.txt",
          "Fixed mobile usability issues",
        ],
        tools: ["Screaming Frog", "Google Search Console", "PageSpeed Insights"],
      },
      {
        phase: "Phase 2: On-Page Optimization",
        timeline: "Weeks 5-8",
        tasks: [
          "Optimized 150+ product pages with keyword-rich content",
          "Enhanced title tags and meta descriptions",
          "Improved internal linking structure",
          "Added FAQ sections to product pages",
          "Optimized images with descriptive alt text",
          "Implemented breadcrumb navigation",
        ],
        tools: ["Surfer SEO", "SEMrush", "Ahrefs"],
      },
      {
        phase: "Phase 3: Content Strategy",
        timeline: "Weeks 9-16",
        tasks: [
          "Created 24 high-quality blog posts targeting long-tail keywords",
          "Developed buying guides and comparison articles",
          "Added customer reviews and testimonials",
          "Created category-level SEO content",
          "Implemented content calendar for ongoing publishing",
        ],
        tools: ["Clearscope", "Grammarly", "Google Trends"],
      },
      {
        phase: "Phase 4: Link Building Campaign",
        timeline: "Weeks 17-24",
        tasks: [
          "Secured 47 high-quality backlinks from industry sites",
          "Published 8 guest posts on relevant blogs",
          "Earned 3 digital PR mentions",
          "Built relationships with industry influencers",
          "Reclaimed broken backlinks",
        ],
        tools: ["Ahrefs", "BuzzStream", "Pitchbox"],
      },
    ],

    results: {
      summary:
        "Within 6 months, the ecommerce store achieved 247% organic traffic growth, ranked for 1,247 new keywords, and generated $127,000 in additional revenue.",
      metrics: [
        {
          value: "247%",
          label: "Traffic Increase",
          icon: "TrendingUp",
        },
        {
          value: "1,247",
          label: "Keywords Ranked",
          icon: "Target",
        },
        {
          value: "342%",
          label: "ROI",
          icon: "DollarSign",
        },
        {
          value: "1.2s",
          label: "Page Load Time (from 8.3s)",
          icon: "Zap",
        },
        {
          value: "32%",
          label: "Conversion Rate Increase",
          icon: "Activity",
        },
        {
          value: "$127k",
          label: "Additional Revenue",
          icon: "Award",
        },
      ],
      testimonial: {
        quote:
          "Moaz's strategic approach transformed our SEO. We saw 247% traffic growth in just 6 months, and more importantly, our revenue increased by over $127k. His technical expertise and content strategy made all the difference.",
        author: "Sarah Johnson",
        title: "Founder, Ecommerce Store",
      },
    },

    tools: [
      {
        name: "SEMrush",
        logo: "/tools/semrush.svg",
        url: "https://www.semrush.com",
      },
      {
        name: "Ahrefs",
        logo: "/tools/ahrefs.svg",
        url: "https://ahrefs.com",
      },
      {
        name: "Screaming Frog",
        logo: "/tools/screamingfrog.svg",
        url: "https://www.screamingfrog.co.uk",
      },
      {
        name: "Google Analytics",
        logo: "/tools/ga.svg",
        url: "https://analytics.google.com",
      },
      {
        name: "Surfer SEO",
        logo: "/tools/surfer.svg",
        url: "https://surferseo.com",
      },
    ],

    datePublished: "2024-09-15",
    dateModified: "2024-09-20",
    keywords: [
      "SEO case study",
      "ecommerce SEO",
      "technical SEO",
      "traffic growth",
      "Shopify SEO",
    ],

    relatedServices: ["technical-seo", "content-seo", "link-building"],
    relatedCaseStudies: ["saas-local-rankings-surge", "healthcare-organic-growth"],
  },

  {
    id: "2",
    slug: "saas-local-rankings-surge",
    title: "463 Local Rankings: How I Helped a SaaS Company Dominate Local Search",
    shortTitle: "SaaS Company Achieves 463 Local Rankings",
    description:
      "A case study showing how targeted Local SEO strategy helped a SaaS company achieve 463 local rankings and 189% organic traffic growth.",

    industry: "SaaS",
    service: ["Local SEO", "Technical SEO", "Content Strategy"],
    platform: "WordPress",
    location: "San Francisco, US",

    keyMetric: {
      value: "463",
      label: "Local Rankings",
    },
    timeline: "4 months",

    overview: {
      companySize: "50-100 employees",
      projectScope: ["Local SEO", "GMB Optimization", "Content Strategy"],
      duration: "4 months",
      teamSize: "Solo consultant with design support",
      engagementType: "Project-based",
    },

    challenges: [
      {
        title: "Zero Local Presence",
        description:
          "SaaS company had no Google Business Profile optimization and wasn't showing up in local search results despite targeting local markets.",
        icon: "MapPin",
        metric: "0 local rankings",
      },
      {
        title: "Multi-Location Challenge",
        description:
          "Needed to optimize for 7 different city locations without duplicate content issues or cannibalization.",
        icon: "Building",
        metric: "7 locations",
      },
      {
        title: "Competitive Market",
        description:
          "Competing against established players with strong local SEO presence and high domain authority.",
        icon: "Users",
      },
    ],

    strategy: [
      {
        title: "Local SEO Foundation",
        description:
          "Set up and optimized Google Business Profiles for all locations with complete NAP consistency across all platforms.",
        icon: "MapPin",
        relatedService: "local-seo",
      },
      {
        title: "Location-Specific Content",
        description:
          "Created unique, valuable content for each location targeting local keywords and addressing local market needs.",
        icon: "FileText",
        relatedService: "content-seo",
      },
      {
        title: "Citation Building Campaign",
        description:
          "Built consistent citations across 50+ authoritative directories and local business listings.",
        icon: "Link",
        relatedService: "link-building",
      },
    ],

    implementation: [
      {
        phase: "Phase 1: Local SEO Audit & Setup",
        timeline: "Weeks 1-2",
        tasks: [
          "Created and optimized 7 Google Business Profiles",
          "Ensured NAP consistency across all platforms",
          "Conducted local competitor analysis",
          "Set up local schema markup",
          "Optimized for local keywords",
        ],
        tools: ["BrightLocal", "Moz Local", "Google Business Profile Manager"],
      },
      {
        phase: "Phase 2: Location Pages & Content",
        timeline: "Weeks 3-8",
        tasks: [
          "Created unique content for 7 location pages",
          "Added local testimonials and case studies",
          "Embedded Google Maps on location pages",
          "Created location-specific blog content",
          "Optimized images with geo-tagged metadata",
        ],
        tools: ["Surfer SEO", "SEMrush", "Canva"],
      },
      {
        phase: "Phase 3: Citation Building",
        timeline: "Weeks 9-12",
        tasks: [
          "Submitted to 50+ local directories",
          "Fixed inconsistent citations",
          "Built industry-specific citations",
          "Earned local backlinks",
          "Set up review management system",
        ],
        tools: ["BrightLocal", "Whitespark", "Yext"],
      },
      {
        phase: "Phase 4: Review & Reputation Management",
        timeline: "Weeks 13-16",
        tasks: [
          "Implemented review request system",
          "Responded to all reviews (positive and negative)",
          "Generated 47 new 5-star reviews",
          "Created FAQ content from common review themes",
        ],
        tools: ["Birdeye", "Podium"],
      },
    ],

    results: {
      summary:
        "Within 4 months, the SaaS company achieved 463 local rankings, 189% organic traffic growth, and generated 67 qualified leads directly from local search.",
      metrics: [
        {
          value: "463",
          label: "Local Rankings",
          icon: "MapPin",
        },
        {
          value: "189%",
          label: "Traffic Increase",
          icon: "TrendingUp",
        },
        {
          value: "67",
          label: "Qualified Leads",
          icon: "Users",
        },
        {
          value: "47",
          label: "5-Star Reviews",
          icon: "Star",
        },
        {
          value: "287%",
          label: "Local Visibility Increase",
          icon: "Eye",
        },
        {
          value: "12x",
          label: "Google Maps Views",
          icon: "Map",
        },
      ],
      testimonial: {
        quote:
          "We had zero local presence before working with Moaz. In just 4 months, we're now ranking in local search for 463 keywords and generating consistent leads from Google Maps. The ROI has been incredible.",
        author: "Michael Chen",
        title: "VP of Marketing, SaaS Company",
      },
    },

    tools: [
      {
        name: "BrightLocal",
        logo: "/tools/brightlocal.svg",
        url: "https://www.brightlocal.com",
      },
      {
        name: "Moz Local",
        logo: "/tools/moz.svg",
        url: "https://moz.com/products/local",
      },
      {
        name: "SEMrush",
        logo: "/tools/semrush.svg",
        url: "https://www.semrush.com",
      },
      {
        name: "Whitespark",
        logo: "/tools/whitespark.svg",
        url: "https://whitespark.ca",
      },
    ],

    datePublished: "2024-10-01",
    dateModified: "2024-10-05",
    keywords: [
      "local SEO case study",
      "SaaS local rankings",
      "Google Business Profile",
      "multi-location SEO",
    ],

    relatedServices: ["local-seo", "technical-seo", "content-seo"],
    relatedCaseStudies: ["ecommerce-traffic-growth-247", "healthcare-organic-growth"],
  },

  {
    id: "3",
    slug: "healthcare-organic-growth",
    title: "312% Organic Growth: Healthcare Practice Dominates Competitive Market",
    shortTitle: "Healthcare Practice Achieves 312% Growth",
    description:
      "A case study showing how comprehensive SEO strategy helped a healthcare practice achieve 312% organic growth and become the #1 ranked provider in their city.",

    industry: "Healthcare",
    service: ["SEO Audit", "Technical SEO", "Content Strategy", "Local SEO"],
    platform: "Custom CMS",
    location: "Los Angeles, US",

    keyMetric: {
      value: "312%",
      label: "Organic Growth",
    },
    timeline: "8 months",

    overview: {
      companySize: "10-20 employees",
      projectScope: [
        "Comprehensive SEO Audit",
        "Technical SEO",
        "Content Strategy",
        "Local SEO",
      ],
      duration: "8 months",
      teamSize: "Solo consultant with content writer",
      engagementType: "Ongoing retainer",
    },

    challenges: [
      {
        title: "YMYL Content Requirements",
        description:
          "Healthcare content required E-E-A-T signals, medical accuracy, and trustworthiness to rank in a competitive YMYL niche.",
        icon: "Shield",
      },
      {
        title: "Outdated Technical Infrastructure",
        description:
          "Custom CMS had severe technical SEO issues including slow load times, mobile usability problems, and security concerns.",
        icon: "AlertOctagon",
        metric: "6.2s load time",
      },
      {
        title: "Low-Quality Backlink Profile",
        description:
          "Previous SEO attempts resulted in spammy backlinks that were actively hurting domain authority.",
        icon: "Link",
        metric: "342 toxic backlinks",
      },
      {
        title: "Limited Online Visibility",
        description:
          "Not ranking for primary service keywords despite being an established practice for 10+ years.",
        icon: "EyeOff",
      },
    ],

    strategy: [
      {
        title: "E-E-A-T Optimization",
        description:
          "Enhanced expertise, experience, authoritativeness, and trustworthiness signals throughout the site to meet YMYL standards.",
        icon: "Award",
        relatedService: "seo-audit",
      },
      {
        title: "Technical Foundation Rebuild",
        description:
          "Overhauled technical infrastructure to improve performance, security, and mobile experience.",
        icon: "Code",
        relatedService: "technical-seo",
      },
      {
        title: "Medical Content Excellence",
        description:
          "Created medically accurate, patient-focused content that addresses search intent and builds trust.",
        icon: "Heart",
        relatedService: "content-seo",
      },
    ],

    implementation: [
      {
        phase: "Phase 1: Comprehensive SEO Audit",
        timeline: "Weeks 1-2",
        tasks: [
          "Conducted 127-point technical SEO audit",
          "Analyzed competitors and keyword opportunities",
          "Identified 342 toxic backlinks for disavowal",
          "Created detailed SEO roadmap",
          "Performed YMYL content audit",
        ],
        tools: ["SEMrush", "Ahrefs", "Screaming Frog", "Google Search Console"],
      },
      {
        phase: "Phase 2: Technical SEO Overhaul",
        timeline: "Weeks 3-8",
        tasks: [
          "Migrated to HTTPS with proper implementation",
          "Optimized Core Web Vitals (LCP, FID, CLS)",
          "Fixed 847 technical issues",
          "Implemented proper schema markup for medical practice",
          "Improved mobile usability score from 42 to 98",
          "Disavowed 342 toxic backlinks",
        ],
        tools: [
          "PageSpeed Insights",
          "GTmetrix",
          "Google Search Console",
          "Schema.org",
        ],
      },
      {
        phase: "Phase 3: E-E-A-T & Content Strategy",
        timeline: "Weeks 9-20",
        tasks: [
          "Added detailed doctor bios with credentials",
          "Created 42 medically accurate service pages",
          "Published 28 educational blog posts",
          "Added patient reviews and testimonials",
          "Implemented medical schema markup",
          "Created FAQ sections addressing patient concerns",
        ],
        tools: ["Clearscope", "Medical writing guidelines", "Google Trends"],
      },
      {
        phase: "Phase 4: Local SEO & Authority Building",
        timeline: "Weeks 21-32",
        tasks: [
          "Optimized Google Business Profile",
          "Built citations on medical directories",
          "Earned 12 high-quality healthcare backlinks",
          "Set up review management system",
          "Created location-specific content",
        ],
        tools: ["BrightLocal", "Healthgrades", "Zocdoc"],
      },
    ],

    results: {
      summary:
        "Within 8 months, the healthcare practice achieved 312% organic growth, became the #1 ranked provider for primary services, and increased patient inquiries by 247%.",
      metrics: [
        {
          value: "312%",
          label: "Organic Traffic Growth",
          icon: "TrendingUp",
        },
        {
          value: "#1",
          label: "Ranking for Primary Keywords",
          icon: "Trophy",
        },
        {
          value: "247%",
          label: "Patient Inquiry Increase",
          icon: "Users",
        },
        {
          value: "98",
          label: "Mobile Usability Score",
          icon: "Smartphone",
        },
        {
          value: "1.4s",
          label: "Page Load Time (from 6.2s)",
          icon: "Zap",
        },
        {
          value: "427%",
          label: "ROI",
          icon: "DollarSign",
        },
      ],
      testimonial: {
        quote:
          "Moaz's expertise in healthcare SEO was exactly what we needed. His attention to E-E-A-T and medical content accuracy helped us achieve #1 rankings and dramatically increase patient inquiries. The technical improvements alone were worth it.",
        author: "Dr. Emily Rodriguez",
        title: "Lead Physician, Healthcare Practice",
      },
    },

    tools: [
      {
        name: "SEMrush",
        logo: "/tools/semrush.svg",
        url: "https://www.semrush.com",
      },
      {
        name: "Ahrefs",
        logo: "/tools/ahrefs.svg",
        url: "https://ahrefs.com",
      },
      {
        name: "Screaming Frog",
        logo: "/tools/screamingfrog.svg",
        url: "https://www.screamingfrog.co.uk",
      },
      {
        name: "BrightLocal",
        logo: "/tools/brightlocal.svg",
        url: "https://www.brightlocal.com",
      },
    ],

    datePublished: "2024-11-10",
    dateModified: "2024-11-15",
    keywords: [
      "healthcare SEO case study",
      "medical practice SEO",
      "YMYL SEO",
      "E-E-A-T optimization",
    ],

    relatedServices: ["seo-audit", "technical-seo", "content-seo", "local-seo"],
    relatedCaseStudies: ["ecommerce-traffic-growth-247", "saas-local-rankings-surge"],
  },
];

// Helper functions
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return caseStudies.filter((cs) => cs.industry === industry);
}

export function getCaseStudiesByService(service: string): CaseStudy[] {
  return caseStudies.filter((cs) => cs.service.includes(service));
}

export function getAllIndustries(): string[] {
  return Array.from(new Set(caseStudies.map((cs) => cs.industry)));
}

export function getAllServices(): string[] {
  const services = new Set<string>();
  caseStudies.forEach((cs) => cs.service.forEach((s) => services.add(s)));
  return Array.from(services);
}
