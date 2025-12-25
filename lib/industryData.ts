// Industry-specific SEO page data for all 27 industries

export interface IndustryPageData {
  name: string;
  slug: string;
  icon: string; // Lucide icon name
  
  // SEO Metadata
  metaTitle: string;
  metaDescription: string;
  
  // Hero Section
  badge: string;
  h1: string;
  positioning: string;
  
  // Understanding Section
  searchBehavior: string;
  buyingIntent: string;
  seoType: "local" | "national" | "hybrid";
  
  // Challenges
  challenges: string[];
  
  // Strategy
  strategyApproach: string;
  primaryServices: string[]; // Links to service pages
  
  // What's Included (outcome-focused)
  includes: {
    title: string;
    outcome: string;
  }[];
  
  // Location Synergy
  locationStrategy: string;
  
  // Why Choose Me
  industryExperience: string;
  
  // Related Services (slugs for internal linking)
  relatedServices: string[];
  
  // CMS Relevance
  relatedCMS?: string[];
  
  // FAQs
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const industryPages: Record<string, IndustryPageData> = {
  "appliance-repair-seo": {
    name: "Appliance Repair",
    slug: "appliance-repair-seo",
    icon: "Wrench",
    
    metaTitle: "Appliance Repair SEO Services | Get More Service Calls",
    metaDescription: "Dominate local search for appliance repair services. Increase emergency calls, same-day bookings, and Google Maps visibility with proven SEO strategies.",
    
    badge: "Appliance Repair SEO",
    h1: "SEO Services for Appliance Repair Companies That Want More Service Calls",
    positioning: "Turn emergency searches into booked appointments. Dominate your local area with Google Maps rankings and high-intent keyword targeting.",
    
    searchBehavior: "Customers search for appliance repair with urgent, location-based intent like 'refrigerator repair near me' or 'same-day washer fix'. These are high-intent, emergency searches requiring immediate local visibility.",
    buyingIntent: "Emergency/transactional - customers need repairs NOW and convert quickly when they find you in the Google Local Pack.",
    seoType: "local",
    
    challenges: [
      "Competing with franchise chains and aggregators",
      "Ranking in Google's Local Pack (Map Pack)",
      "Getting calls instead of form fills",
      "Same-day service visibility during peak times",
      "Building trust with reviews and local authority"
    ],
    
    strategyApproach: "My appliance repair SEO focuses on emergency keyword targeting, Google Business Profile optimization, and hyper-local content that captures same-day service searches. I help you outrank franchises by building genuine local authority.",
    primaryServices: ["local-seo", "on-page-seo", "technical-seo"],
    
    includes: [
      {
        title: "Emergency Keyword Research",
        outcome: "Target high-intent searches like 'refrigerator repair near me' and 'emergency appliance fix'"
      },
      {
        title: "Google Business Profile Optimization",
        outcome: "Rank in the Local Pack for your service area and get more phone calls"
      },
      {
        title: "Service Area Pages",
        outcome: "Dominate multiple cities/neighborhoods with location-specific landing pages"
      },
      {
        title: "Review Generation Strategy",
        outcome: "Build trust and social proof with a steady flow of 5-star reviews"
      },
      {
        title: "Mobile Call Tracking",
        outcome: "Understand which keywords drive actual phone calls, not just clicks"
      },
      {
        title: "Competitor Gap Analysis",
        outcome: "Identify opportunities where local competitors are weak"
      }
    ],
    
    locationStrategy: "Appliance repair is hyper-local. I create city/neighborhood-specific pages, optimize for 'near me' searches, and ensure your Google Business Profile dominates the service areas that matter most to your business.",
    
    industryExperience: "I've worked with appliance repair companies to increase emergency call volume by optimizing for high-intent local searches. I understand the seasonal demand cycles and the importance of mobile-first, click-to-call optimization.",
    
    relatedServices: ["local-seo", "on-page-seo", "technical-seo", "seo-audit"],
    relatedCMS: ["wordpress-seo"],
    
    faqs: [
      {
        question: "How long does SEO take to get more appliance repair calls?",
        answer: "Local SEO for appliance repair typically shows results in 3-6 months. Google Business Profile optimization can improve visibility within weeks, while ranking for competitive keywords takes longer. Emergency searches convert fast once you rank."
      },
      {
        question: "Is SEO better than Google Ads for appliance repair?",
        answer: "Both work, but SEO provides long-term cost efficiency. Google Ads give immediate visibility but stop when you stop paying. SEO builds lasting local authority and captures organic + map pack traffic without per-click costs."
      },
      {
        question: "Do I need separate pages for each appliance type?",
        answer: "Yes, if you want to rank. Service-specific pages (refrigerator repair, washer repair, dryer repair) help you target exact-match searches and provide better user experience. Generic pages rarely rank competitively."
      },
      {
        question: "How important are reviews for appliance repair SEO?",
        answer: "Critical. Google heavily weights reviews for local service rankings. I help implement review generation strategies that build trust and improve Local Pack visibility. More reviews = more rankings = more calls."
      },
      {
        question: "Can SEO help me compete with national chains?",
        answer: "Absolutely. National chains struggle with local relevance. By building hyper-local content, genuine community engagement, and service area authority, you can outrank them in specific neighborhoods."
      },
      {
        question: "What's the ROI on appliance repair SEO?",
        answer: "High. One new customer can cover a month of SEO investment. Once you rank in the Local Pack, you generate consistent leads without per-call costs. Most clients see 3-5x ROI within 12 months."
      }
    ]
  },

  "hvac-seo": {
    name: "HVAC",
    slug: "hvac-seo",
    icon: "Flame",
    
    metaTitle: "HVAC SEO Services | Dominate Local Heating & Cooling Searches",
    metaDescription: "Generate more HVAC leads with proven local SEO strategies. Rank for emergency repairs, seasonal installs, and maintenance contracts in your service area.",
    
    badge: "HVAC SEO Services",
    h1: "SEO Services for HVAC Companies That Want Consistent Leads Year-Round",
    positioning: "Stop relying on referrals. Dominate seasonal searches, emergency repairs, and maintenance contracts with strategic HVAC SEO.",
    
    searchBehavior: "HVAC searches split between emergency ('furnace repair near me'), seasonal ('AC installation cost'), and maintenance ('HVAC tune-up'). Intent varies by season and urgency.",
    buyingIntent: "Mixed - emergency repairs convert instantly, seasonal installs involve research and comparison, maintenance contracts require trust-building.",
    seoType: "local",
    
    challenges: [
      "Seasonal demand fluctuations (summer AC, winter heating)",
      "High competition from franchises and aggregators",
      "Ranking for both emergency and planned services",
      "Building authority for high-ticket installs",
      "Converting maintenance contract leads"
    ],
    
    strategyApproach: "My HVAC SEO strategy balances emergency repair visibility with seasonal install targeting and evergreen maintenance content. I optimize for the full customer journey—from urgent fixes to planned replacements.",
    primaryServices: ["local-seo", "content-seo", "on-page-seo"],
    
    includes: [
      {
        title: "Seasonal Keyword Strategy",
        outcome: "Rank for AC searches in summer, heating in winter, and year-round maintenance"
      },
      {
        title: "Emergency + Planned Service Pages",
        outcome: "Capture urgent repairs AND high-ticket installation searches"
      },
      {
        title: "Service Area Domination",
        outcome: "Own multiple cities/zip codes with location-specific landing pages"
      },
      {
        title: "Google Business Profile Optimization",
        outcome: "Rank in Local Pack for all your service areas and service types"
      },
      {
        title: "Content for High-Ticket Decisions",
        outcome: "Educational content that builds trust for $5k-$15k HVAC installs"
      },
      {
        title: "Maintenance Contract SEO",
        outcome: "Attract recurring revenue with optimized membership/subscription pages"
      }
    ],
    
    locationStrategy: "HVAC businesses serve wide areas but need neighborhood-level visibility. I create service area pages for each city/region, optimize for 'near me' searches, and ensure you rank across your entire territory.",
    
    industryExperience: "I've helped HVAC companies balance seasonal demand with year-round SEO visibility. I understand the difference between emergency repair SEO and high-ticket install content strategies.",
    
    relatedServices: ["local-seo", "content-seo", "on-page-seo", "technical-seo"],
    relatedCMS: ["wordpress-seo"],
    
    faqs: [
      {
        question: "How do I rank for both AC and heating searches?",
        answer: "Separate service pages for each system type, seasonal content updates, and year-round technical SEO. I help you maintain visibility across all HVAC service categories without keyword cannibalization."
      },
      {
        question: "Can SEO generate leads during slow seasons?",
        answer: "Yes. Strategic content targeting maintenance contracts, off-season discounts, and equipment replacement planning keeps leads flowing when emergency demand is low."
      },
      {
        question: "How long does HVAC SEO take to work?",
        answer: "Local Pack visibility improves in 3-6 months. High-ticket install keywords (more competitive) take 6-12 months. Emergency repair rankings often come faster due to lower competition."
      },
      {
        question: "Should I target commercial or residential HVAC searches?",
        answer: "Depends on your business model. If you do both, you need separate page structures and keyword strategies. Commercial HVAC has different search behavior and longer sales cycles."
      },
      {
        question: "Do I need a blog for HVAC SEO?",
        answer: "Only if it serves search intent. Educational content about system selection, maintenance tips, and efficiency guides can rank well and build trust for high-ticket sales. Fluff blogs don't help."
      },
      {
        question: "How important are reviews for HVAC companies?",
        answer: "Extremely. HVAC is a high-trust decision. Google prioritizes businesses with strong review profiles for local rankings. I help implement review generation systems that build authority."
      }
    ]
  },

  // Template structure for remaining industries (to be customized)
  "plumbing-seo": {
    name: "Plumbing",
    slug: "plumbing-seo",
    icon: "Droplets",
    metaTitle: "Plumbing SEO Services | Generate Emergency & Scheduled Calls",
    metaDescription: "Dominate local plumbing searches. Rank for emergency repairs, drain cleaning, water heater installs, and repiping projects with proven SEO strategies.",
    badge: "Plumbing SEO Services",
    h1: "SEO Services for Plumbers That Want More Emergency Calls & Big Jobs",
    positioning: "Capture emergency searches and high-value repiping projects. Own your local market with Google Maps dominance and service-specific landing pages.",
    searchBehavior: "Plumbing searches are highly urgent ('emergency plumber near me', 'burst pipe repair') or planned ('water heater installation cost'). Mobile-first, location-based intent dominates.",
    buyingIntent: "Emergency/transactional for repairs, research-based for installations. Customers call immediately for leaks, compare options for big jobs.",
    seoType: "local",
    challenges: [
      "24/7 emergency competition",
      "Ranking for both residential and commercial",
      "Competing with franchise plumbers",
      "High-value project lead generation",
      "Seasonal demand (frozen pipes, water heaters)"
    ],
    strategyApproach: "My plumbing SEO targets emergency searches with Local Pack optimization while building authority for high-ticket services like repiping and sewer line replacement.",
    primaryServices: ["local-seo", "on-page-seo", "technical-seo"],
    includes: [
      { title: "Emergency Keyword Targeting", outcome: "Rank for 'plumber near me' and urgent repair searches" },
      { title: "Service-Specific Pages", outcome: "Separate pages for drain cleaning, water heaters, repiping, etc." },
      { title: "Google Business Profile Setup", outcome: "Dominate Local Pack for your service area" },
      { title: "Review Generation System", outcome: "Build trust with consistent 5-star reviews" },
      { title: "Mobile Click-to-Call Optimization", outcome: "Turn mobile searches into phone calls instantly" },
      { title: "Competitor Analysis", outcome: "Find gaps where local competitors are weak" }
    ],
    locationStrategy: "Plumbing is hyper-local. I create neighborhood-specific pages and optimize for service area keywords to ensure you rank across your entire territory.",
    industryExperience: "I've worked with plumbing companies to increase emergency call volume and high-ticket project leads through strategic local SEO and service page optimization.",
    relatedServices: ["local-seo", "on-page-seo", "technical-seo", "seo-audit"],
    relatedCMS: ["wordpress-seo"],
    faqs: [
      { question: "How fast can SEO generate plumbing leads?", answer: "Google Business Profile optimization shows results in weeks. Organic rankings take 3-6 months. Emergency searches convert immediately once you rank in the Local Pack." },
      { question: "Do I need separate pages for each plumbing service?", answer: "Yes. Drain cleaning, water heaters, sewer lines, and repiping all have distinct search intent. Service-specific pages rank better and convert higher." },
      { question: "Can SEO compete with HomeAdvisor and Angi?", answer: "Absolutely. Organic SEO gives you direct leads without referral fees. Ranking in the Local Pack bypasses aggregators entirely." },
      { question: "How important are reviews for plumbers?", answer: "Critical. Google heavily weighs reviews for local service rankings. More reviews = better rankings = more calls." },
      { question: "Should I target commercial plumbing searches?", answer: "If you serve commercial clients, yes—but with separate pages and keyword strategies. Commercial plumbing has different search behavior." },
      { question: "What's the ROI on plumbing SEO?", answer: "High. One repiping job can cover months of SEO investment. Most plumbers see 3-5x ROI within the first year." }
    ]
  }

  // NOTE: Add remaining 24 industries following this same structure
  // Each industry needs customized: challenges, strategy, FAQs, search behavior, etc.
  // Use the industry-specific insights from the original brief
};

// Helper function to get all industry slugs (for generating static paths)
export function getAllIndustrySlugs(): string[] {
  return Object.keys(industryPages);
}

// Helper function to get industry data by slug
export function getIndustryData(slug: string): IndustryPageData | null {
  return industryPages[slug] || null;
}
