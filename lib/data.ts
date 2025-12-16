// Type definitions
export interface Service {
  id: string;
  name: string;
  slug: string;
  definition: string;
  outcomes: string[];
  link: string;
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  cluster: string;
  relatedService: string;
  description: string;
  link: string;
}

export interface Platform {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  link: string;
}

export interface City {
  name: string;
  slug: string;
}

export interface Country {
  name: string;
  slug: string;
  cities: City[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  industry: string;
  location: string;
  challenge: string;
  actions: string[];
  outcomes: {
    metric: string;
    value: string;
  }[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Services Data
export const services: Service[] = [
  {
    id: "1",
    name: "Technical SEO",
    slug: "technical-seo",
    definition:
      "Technical SEO improves crawling, indexation, and site architecture to ensure search engines can efficiently discover, understand, and rank your content.",
    outcomes: [
      "Improved crawl efficiency and indexation rates",
      "Enhanced site speed and Core Web Vitals",
      "Reduced crawl errors and technical barriers",
    ],
    link: "/services/technical-seo",
  },
  {
    id: "2",
    name: "Local SEO",
    slug: "local-seo",
    definition:
      "Local SEO increases visibility in local map pack results and location-based searches to drive foot traffic, calls, and local conversions.",
    outcomes: [
      "Higher Google Maps rankings and visibility",
      "Increased local citations and NAP consistency",
      "More qualified local leads and phone calls",
    ],
    link: "/services/local-seo",
  },
  {
    id: "3",
    name: "E-commerce SEO",
    slug: "ecommerce-seo",
    definition:
      "E-commerce SEO optimizes product pages, category architecture, and technical elements to increase online sales and organic revenue.",
    outcomes: [
      "Higher product page rankings for commercial queries",
      "Improved conversion rates and revenue per visitor",
      "Enhanced product discoverability in search",
    ],
    link: "/services/ecommerce-seo",
  },
  {
    id: "4",
    name: "Content SEO",
    slug: "content-seo",
    definition:
      "Content SEO creates topical authority through semantic optimization, entity relationships, and information gain strategies.",
    outcomes: [
      "Established topical authority in target niches",
      "Increased featured snippet and SERP feature wins",
      "Higher engagement and content performance metrics",
    ],
    link: "/services/content-seo",
  },
  {
    id: "5",
    name: "Link Building",
    slug: "link-building",
    definition:
      "Link Building establishes domain authority through strategic digital PR, outreach, and relationship-building to acquire high-quality backlinks.",
    outcomes: [
      "Increased domain authority and trust metrics",
      "High-quality editorial backlinks from relevant sites",
      "Improved rankings for competitive keywords",
    ],
    link: "/services/link-building",
  },
  {
    id: "6",
    name: "On-Page SEO",
    slug: "on-page-seo",
    definition:
      "On-Page SEO optimizes individual pages through content structure, internal linking, and HTML elements to improve relevance and rankings.",
    outcomes: [
      "Optimized title tags, meta descriptions, and headers",
      "Enhanced internal linking and topical relevance",
      "Improved click-through rates from search results",
    ],
    link: "/services/on-page-seo",
  },
  {
    id: "7",
    name: "Off-Page SEO",
    slug: "off-page-seo",
    definition:
      "Off-Page SEO builds authority signals through backlinks, brand mentions, social signals, and external validation.",
    outcomes: [
      "Stronger brand authority and online reputation",
      "Increased referral traffic from external sources",
      "Enhanced trust signals for search algorithms",
    ],
    link: "/services/off-page-seo",
  },
  {
    id: "8",
    name: "SEO Audit",
    slug: "seo-audit",
    definition:
      "SEO Audit provides comprehensive analysis of technical health, content quality, and backlink profile to identify optimization opportunities.",
    outcomes: [
      "Complete technical SEO health assessment",
      "Prioritized action plan with quick wins",
      "Competitive gap analysis and opportunities",
    ],
    link: "/services/seo-audit",
  },
  {
    id: "9",
    name: "Keyword Research",
    slug: "keyword-research",
    definition:
      "Keyword Research identifies high-intent search opportunities through semantic analysis, search volume data, and competitive intelligence.",
    outcomes: [
      "Comprehensive keyword clusters by intent",
      "Opportunity assessment with traffic potential",
      "Content gap analysis vs. competitors",
    ],
    link: "/services/keyword-research",
  },
  {
    id: "10",
    name: "Competitor Analysis",
    slug: "competitor-analysis",
    definition:
      "Competitor Analysis reveals strategic advantages by examining competitor rankings, backlinks, content strategies, and technical implementations.",
    outcomes: [
      "Competitive landscape mapping and insights",
      "Backlink and content opportunity identification",
      "Strategic differentiation recommendations",
    ],
    link: "/services/competitor-analysis",
  },
];

// Industries Data
export const industries: Industry[] = [
  {
    id: "1",
    name: "Appliance Repair",
    slug: "appliance-repair",
    cluster: "Home Services",
    relatedService: "Local SEO",
    description: "Drive more local service calls with map pack visibility",
    link: "/industries/appliance-repair",
  },
  {
    id: "2",
    name: "Carpet Cleaning",
    slug: "carpet-cleaning",
    cluster: "Home Services",
    relatedService: "Local SEO",
    description: "Increase booking rates through local search dominance",
    link: "/industries/carpet-cleaning",
  },
  {
    id: "3",
    name: "Gutter Installation & Maintenance",
    slug: "gutter-installation",
    cluster: "Home Services",
    relatedService: "Local SEO",
    description: "Generate qualified leads through seasonal SEO strategies",
    link: "/industries/gutter-installation",
  },
  {
    id: "4",
    name: "Plumbing",
    slug: "plumbing",
    cluster: "Home Services",
    relatedService: "Local SEO",
    description: "Dominate emergency plumbing searches in your service area",
    link: "/industries/plumbing",
  },
  {
    id: "5",
    name: "Siding",
    slug: "siding",
    cluster: "Home Services",
    relatedService: "Local SEO",
    description: "Capture home improvement leads with technical + local SEO",
    link: "/industries/siding",
  },
  {
    id: "6",
    name: "Bathroom Remodeling",
    slug: "bathroom-remodeling",
    cluster: "Remodeling",
    relatedService: "Local SEO + Content SEO",
    description: "Convert high-value remodeling leads through content authority",
    link: "/industries/bathroom-remodeling",
  },
  {
    id: "7",
    name: "Kitchen Remodeling",
    slug: "kitchen-remodeling",
    cluster: "Remodeling",
    relatedService: "Local SEO + Content SEO",
    description: "Win premium remodeling projects with strategic SEO",
    link: "/industries/kitchen-remodeling",
  },
  {
    id: "8",
    name: "Flooring",
    slug: "flooring",
    cluster: "Remodeling",
    relatedService: "Local SEO + E-commerce SEO",
    description: "Drive showroom visits and online flooring sales",
    link: "/industries/flooring",
  },
  {
    id: "9",
    name: "Walk-In Tubs",
    slug: "walk-in-tubs",
    cluster: "Remodeling",
    relatedService: "Content SEO",
    description: "Educate buyers and generate qualified accessibility leads",
    link: "/industries/walk-in-tubs",
  },
  {
    id: "10",
    name: "Dumpster Rental",
    slug: "dumpster-rental",
    cluster: "Home Services",
    relatedService: "Local SEO",
    description: "Increase same-day rental bookings through local search",
    link: "/industries/dumpster-rental",
  },
  {
    id: "11",
    name: "Home Security",
    slug: "home-security",
    cluster: "Home Services",
    relatedService: "Content SEO + Local SEO",
    description: "Build trust and authority in the security installation market",
    link: "/industries/home-security",
  },
  {
    id: "12",
    name: "Mold Remediation",
    slug: "mold-remediation",
    cluster: "Restoration",
    relatedService: "Local SEO + Technical SEO",
    description: "Respond to urgent mold removal searches in your area",
    link: "/industries/mold-remediation",
  },
  {
    id: "13",
    name: "Electrician",
    slug: "electrician",
    cluster: "Home Services",
    relatedService: "Local SEO",
    description: "Capture emergency and scheduled electrical service calls",
    link: "/industries/electrician",
  },
  {
    id: "14",
    name: "HVAC",
    slug: "hvac",
    cluster: "Home Services",
    relatedService: "Local SEO + Content SEO",
    description: "Dominate seasonal HVAC searches and maintenance contracts",
    link: "/industries/hvac",
  },
  {
    id: "15",
    name: "Roofing Contractor",
    slug: "roofing-contractor",
    cluster: "Home Services",
    relatedService: "Local SEO",
    description: "Win high-value roofing projects through local visibility",
    link: "/industries/roofing-contractor",
  },
  {
    id: "16",
    name: "Water Damage Restoration",
    slug: "water-damage-restoration",
    cluster: "Restoration",
    relatedService: "Local SEO",
    description: "Respond to emergency water damage calls first",
    link: "/industries/water-damage-restoration",
  },
  {
    id: "17",
    name: "Garage Door Repair",
    slug: "garage-door-repair",
    cluster: "Home Services",
    relatedService: "Local SEO",
    description: "Increase same-day repair bookings with local SEO",
    link: "/industries/garage-door-repair",
  },
  {
    id: "18",
    name: "Pest Control",
    slug: "pest-control",
    cluster: "Home Services",
    relatedService: "Local SEO + Content SEO",
    description: "Generate recurring service contracts through SEO",
    link: "/industries/pest-control",
  },
  {
    id: "19",
    name: "Self Storage",
    slug: "self-storage",
    cluster: "Home Services",
    relatedService: "Local SEO",
    description: "Fill storage units through local search visibility",
    link: "/industries/self-storage",
  },
  {
    id: "20",
    name: "Fire Damage Restoration",
    slug: "fire-damage-restoration",
    cluster: "Restoration",
    relatedService: "Local SEO",
    description: "Capture emergency fire restoration leads immediately",
    link: "/industries/fire-damage-restoration",
  },
  {
    id: "21",
    name: "Healthcare",
    slug: "healthcare",
    cluster: "Professional",
    relatedService: "Local SEO + Content SEO + Technical SEO",
    description: "Build patient trust and medical authority online",
    link: "/industries/healthcare",
  },
  {
    id: "22",
    name: "Law Firm",
    slug: "law-firm",
    cluster: "Professional",
    relatedService: "Local SEO + Content SEO",
    description: "Attract high-value legal clients through search",
    link: "/industries/law-firm",
  },
  {
    id: "23",
    name: "Real Estate",
    slug: "real-estate",
    cluster: "Professional",
    relatedService: "Local SEO + Content SEO",
    description: "Generate qualified buyer and seller leads",
    link: "/industries/real-estate",
  },
  {
    id: "24",
    name: "SaaS",
    slug: "saas",
    cluster: "Professional",
    relatedService: "Content SEO + Technical SEO",
    description: "Drive product signups through organic search",
    link: "/industries/saas",
  },
  {
    id: "25",
    name: "Home Services",
    slug: "home-services",
    cluster: "Home Services",
    relatedService: "Local SEO",
    description: "Comprehensive local SEO for all home service businesses",
    link: "/industries/home-services",
  },
  {
    id: "26",
    name: "B2B",
    slug: "b2b",
    cluster: "Professional",
    relatedService: "Content SEO + Technical SEO",
    description: "Generate enterprise leads through thought leadership",
    link: "/industries/b2b",
  },
  {
    id: "27",
    name: "Dental",
    slug: "dental",
    cluster: "Professional",
    relatedService: "Local SEO + Content SEO",
    description: "Fill your appointment calendar with new patients",
    link: "/industries/dental",
  },
];

// Platforms Data
export const platforms: Platform[] = [
  {
    id: "1",
    name: "WordPress",
    slug: "wordpress",
    icon: "wordpress",
    description:
      "Optimize WordPress sites with technical SEO plugins, schema markup, and performance enhancements.",
    link: "/platforms/wordpress",
  },
  {
    id: "2",
    name: "Shopify",
    slug: "shopify",
    icon: "shopify",
    description:
      "Overcome Shopify's technical limitations while optimizing product pages and collection architecture.",
    link: "/platforms/shopify",
  },
  {
    id: "3",
    name: "Wix",
    slug: "wix",
    icon: "wix",
    description:
      "Navigate Wix's platform constraints to improve indexation, speed, and on-page optimization.",
    link: "/platforms/wix",
  },
  {
    id: "4",
    name: "Squarespace",
    slug: "squarespace",
    icon: "squarespace",
    description:
      "Enhance Squarespace SEO through template optimization, schema implementation, and content strategy.",
    link: "/platforms/squarespace",
  },
  {
    id: "5",
    name: "Webflow",
    slug: "webflow",
    icon: "webflow",
    description:
      "Leverage Webflow's clean code for advanced technical SEO and structured data implementation.",
    link: "/platforms/webflow",
  },
  {
    id: "6",
    name: "Magento",
    slug: "magento",
    icon: "magento",
    description:
      "Optimize large-scale Magento stores with enterprise-level technical SEO and performance tuning.",
    link: "/platforms/magento",
  },
  {
    id: "7",
    name: "Drupal",
    slug: "drupal",
    icon: "drupal",
    description:
      "Implement advanced SEO strategies on Drupal with custom module configuration and optimization.",
    link: "/platforms/drupal",
  },
  {
    id: "8",
    name: "Joomla",
    slug: "joomla",
    icon: "joomla",
    description:
      "Enhance Joomla SEO through extension optimization, URL structure, and metadata management.",
    link: "/platforms/joomla",
  },
];

// Case Studies Data
export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "hvac-local-seo",
    industry: "HVAC",
    location: "Austin, TX",
    challenge:
      "HVAC company struggling to rank in competitive local market with low map pack visibility.",
    actions: [
      "Complete Google Business Profile optimization",
      "Local citation building and NAP consistency",
      "Service area page creation with local keywords",
      "Review generation strategy and reputation management",
    ],
    outcomes: [
      { metric: "Map Pack Rankings", value: "+350% increase" },
      { metric: "Organic Traffic", value: "+218% growth" },
      { metric: "Phone Calls", value: "+186% more leads" },
    ],
  },
  {
    id: "2",
    slug: "ecommerce-fashion",
    industry: "E-commerce (Fashion)",
    location: "United Kingdom",
    challenge:
      "Fashion e-commerce site with poor product page rankings and low conversion rates.",
    actions: [
      "Technical SEO audit and Core Web Vitals optimization",
      "Product schema implementation across catalog",
      "Category page architecture restructuring",
      "Product description optimization for long-tail keywords",
    ],
    outcomes: [
      { metric: "Organic Revenue", value: "+312% increase" },
      { metric: "Product Page Rankings", value: "+245% top 10" },
      { metric: "Site Speed", value: "+68% faster load time" },
    ],
  },
  {
    id: "3",
    slug: "law-firm-content-authority",
    industry: "Law Firm",
    location: "New York, NY",
    challenge:
      "Personal injury law firm lacking topical authority and losing cases to competitors.",
    actions: [
      "Topical authority content strategy development",
      "Entity-based content clusters for practice areas",
      "High-quality backlink acquisition from legal publications",
      "FAQ and Q&A optimization for featured snippets",
    ],
    outcomes: [
      { metric: "Featured Snippets", value: "23 new wins" },
      { metric: "Organic Leads", value: "+164% growth" },
      { metric: "Domain Authority", value: "+18 points" },
    ],
  },
];

// Countries and Cities Data
export const countries: Country[] = [
  {
    name: "United States",
    slug: "united-states",
    cities: [
      { name: "New York", slug: "new-york" },
      { name: "Los Angeles", slug: "los-angeles" },
      { name: "Chicago", slug: "chicago" },
      { name: "Houston", slug: "houston" },
      { name: "Phoenix", slug: "phoenix" },
      { name: "Philadelphia", slug: "philadelphia" },
      { name: "San Antonio", slug: "san-antonio" },
      { name: "San Diego", slug: "san-diego" },
      { name: "Dallas", slug: "dallas" },
      { name: "Austin", slug: "austin" },
    ],
  },
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    cities: [
      { name: "London", slug: "london" },
      { name: "Manchester", slug: "manchester" },
      { name: "Birmingham", slug: "birmingham" },
      { name: "Leeds", slug: "leeds" },
      { name: "Glasgow", slug: "glasgow" },
      { name: "Liverpool", slug: "liverpool" },
      { name: "Edinburgh", slug: "edinburgh" },
      { name: "Bristol", slug: "bristol" },
    ],
  },
  {
    name: "Canada",
    slug: "canada",
    cities: [
      { name: "Toronto", slug: "toronto" },
      { name: "Montreal", slug: "montreal" },
      { name: "Vancouver", slug: "vancouver" },
      { name: "Calgary", slug: "calgary" },
      { name: "Ottawa", slug: "ottawa" },
      { name: "Edmonton", slug: "edmonton" },
    ],
  },
  {
    name: "Australia",
    slug: "australia",
    cities: [
      { name: "Sydney", slug: "sydney" },
      { name: "Melbourne", slug: "melbourne" },
      { name: "Brisbane", slug: "brisbane" },
      { name: "Perth", slug: "perth" },
      { name: "Adelaide", slug: "adelaide" },
    ],
  },
  {
    name: "India",
    slug: "india",
    cities: [
      { name: "Mumbai", slug: "mumbai" },
      { name: "Delhi", slug: "delhi" },
      { name: "Bangalore", slug: "bangalore" },
      { name: "Hyderabad", slug: "hyderabad" },
      { name: "Chennai", slug: "chennai" },
      { name: "Kolkata", slug: "kolkata" },
    ],
  },
  {
    name: "Germany",
    slug: "germany",
    cities: [
      { name: "Berlin", slug: "berlin" },
      { name: "Munich", slug: "munich" },
      { name: "Hamburg", slug: "hamburg" },
      { name: "Frankfurt", slug: "frankfurt" },
      { name: "Cologne", slug: "cologne" },
    ],
  },
  {
    name: "France",
    slug: "france",
    cities: [
      { name: "Paris", slug: "paris" },
      { name: "Marseille", slug: "marseille" },
      { name: "Lyon", slug: "lyon" },
      { name: "Toulouse", slug: "toulouse" },
      { name: "Nice", slug: "nice" },
    ],
  },
  {
    name: "Italy",
    slug: "italy",
    cities: [
      { name: "Rome", slug: "rome" },
      { name: "Milan", slug: "milan" },
      { name: "Naples", slug: "naples" },
      { name: "Turin", slug: "turin" },
      { name: "Florence", slug: "florence" },
    ],
  },
  {
    name: "Spain",
    slug: "spain",
    cities: [
      { name: "Madrid", slug: "madrid" },
      { name: "Barcelona", slug: "barcelona" },
      { name: "Valencia", slug: "valencia" },
      { name: "Seville", slug: "seville" },
      { name: "Bilbao", slug: "bilbao" },
    ],
  },
  {
    name: "Brazil",
    slug: "brazil",
    cities: [
      { name: "São Paulo", slug: "sao-paulo" },
      { name: "Rio de Janeiro", slug: "rio-de-janeiro" },
      { name: "Brasília", slug: "brasilia" },
      { name: "Salvador", slug: "salvador" },
      { name: "Fortaleza", slug: "fortaleza" },
    ],
  },
  {
    name: "Mexico",
    slug: "mexico",
    cities: [
      { name: "Mexico City", slug: "mexico-city" },
      { name: "Guadalajara", slug: "guadalajara" },
      { name: "Monterrey", slug: "monterrey" },
      { name: "Puebla", slug: "puebla" },
      { name: "Cancún", slug: "cancun" },
    ],
  },
  {
    name: "China",
    slug: "china",
    cities: [
      { name: "Beijing", slug: "beijing" },
      { name: "Shanghai", slug: "shanghai" },
      { name: "Guangzhou", slug: "guangzhou" },
      { name: "Shenzhen", slug: "shenzhen" },
      { name: "Chengdu", slug: "chengdu" },
    ],
  },
  {
    name: "Japan",
    slug: "japan",
    cities: [
      { name: "Tokyo", slug: "tokyo" },
      { name: "Osaka", slug: "osaka" },
      { name: "Kyoto", slug: "kyoto" },
      { name: "Yokohama", slug: "yokohama" },
      { name: "Nagoya", slug: "nagoya" },
    ],
  },
  {
    name: "South Korea",
    slug: "south-korea",
    cities: [
      { name: "Seoul", slug: "seoul" },
      { name: "Busan", slug: "busan" },
      { name: "Incheon", slug: "incheon" },
      { name: "Daegu", slug: "daegu" },
      { name: "Daejeon", slug: "daejeon" },
    ],
  },
  {
    name: "United Arab Emirates",
    slug: "united-arab-emirates",
    cities: [
      { name: "Dubai", slug: "dubai" },
      { name: "Abu Dhabi", slug: "abu-dhabi" },
      { name: "Sharjah", slug: "sharjah" },
      { name: "Ajman", slug: "ajman" },
    ],
  },
  {
    name: "Singapore",
    slug: "singapore",
    cities: [{ name: "Singapore", slug: "singapore" }],
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    cities: [
      { name: "Amsterdam", slug: "amsterdam" },
      { name: "Rotterdam", slug: "rotterdam" },
      { name: "The Hague", slug: "the-hague" },
      { name: "Utrecht", slug: "utrecht" },
    ],
  },
  {
    name: "Switzerland",
    slug: "switzerland",
    cities: [
      { name: "Zurich", slug: "zurich" },
      { name: "Geneva", slug: "geneva" },
      { name: "Basel", slug: "basel" },
      { name: "Bern", slug: "bern" },
    ],
  },
  {
    name: "Sweden",
    slug: "sweden",
    cities: [
      { name: "Stockholm", slug: "stockholm" },
      { name: "Gothenburg", slug: "gothenburg" },
      { name: "Malmö", slug: "malmo" },
    ],
  },
  {
    name: "Norway",
    slug: "norway",
    cities: [
      { name: "Oslo", slug: "oslo" },
      { name: "Bergen", slug: "bergen" },
      { name: "Trondheim", slug: "trondheim" },
    ],
  },
  {
    name: "Denmark",
    slug: "denmark",
    cities: [
      { name: "Copenhagen", slug: "copenhagen" },
      { name: "Aarhus", slug: "aarhus" },
      { name: "Odense", slug: "odense" },
    ],
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    cities: [
      { name: "Auckland", slug: "auckland" },
      { name: "Wellington", slug: "wellington" },
      { name: "Christchurch", slug: "christchurch" },
    ],
  },
  {
    name: "South Africa",
    slug: "south-africa",
    cities: [
      { name: "Johannesburg", slug: "johannesburg" },
      { name: "Cape Town", slug: "cape-town" },
      { name: "Durban", slug: "durban" },
      { name: "Pretoria", slug: "pretoria" },
    ],
  },
];

// FAQ Data
export const faqs: FAQ[] = [
  {
    id: "1",
    question: "How long does SEO take to show results?",
    answer:
      "SEO typically shows initial results within 3-6 months, with significant improvements at 6-12 months. Technical fixes and on-page optimizations can impact rankings within weeks, while building topical authority and domain authority takes longer. Timeline depends on competition level, current site health, and implementation speed.",
  },
  {
    id: "2",
    question: "Do you offer monthly SEO services?",
    answer:
      "Yes, I offer ongoing monthly SEO services that include continuous optimization, content strategy, technical monitoring, link building, and performance reporting. Monthly SEO ensures your site maintains rankings, adapts to algorithm updates, and captures new opportunities as they arise.",
  },
  {
    id: "3",
    question: "What's included in an SEO audit?",
    answer:
      "An SEO audit includes comprehensive analysis of technical health (crawlability, indexation, site speed, Core Web Vitals), on-page optimization, content quality, backlink profile, competitive landscape, and keyword opportunities. You'll receive a prioritized action plan with quick wins and long-term strategies.",
  },
  {
    id: "4",
    question: "Which CMS is best for SEO?",
    answer:
      "WordPress and Webflow are generally best for SEO due to clean code, plugin flexibility, and technical control. However, any CMS can rank well with proper optimization. Shopify works great for e-commerce, while Wix and Squarespace have improved significantly. The best CMS depends on your specific needs and technical resources.",
  },
  {
    id: "5",
    question: "Can you rank local service businesses?",
    answer:
      "Absolutely. Local SEO for service businesses is a core specialty. I optimize Google Business Profiles, build local citations, create service area pages, and implement schema markup to dominate local map pack results. Strategies are tailored for plumbers, HVAC, roofers, electricians, and all home service industries.",
  },
  {
    id: "6",
    question: "Do you work internationally?",
    answer:
      "Yes, I work with clients worldwide across North America, Europe, Asia, Australia, and other regions. SEO strategies are adapted for local search behaviors, language considerations, and regional competition. Whether you need local SEO in London or e-commerce SEO in Australia, I provide location-specific optimization.",
  },
  {
    id: "7",
    question: "What makes your SEO approach different?",
    answer:
      "My approach combines technical precision with semantic SEO principles, focusing on entity relationships, topical authority, and information gain. I don't just chase keywords—I build content ecosystems that establish expertise, answer user intent across awareness to decision stages, and create sustainable ranking stability.",
  },
  {
    id: "8",
    question: "How do you measure SEO success?",
    answer:
      "Success is measured through business outcomes: organic traffic growth, keyword ranking improvements, conversion increases, lead generation, and revenue impact. I track technical health metrics, Core Web Vitals, backlink growth, and topical authority expansion. Regular reporting keeps you informed of progress and ROI.",
  },
];

// Contact Information
export const contactInfo = {
  name: "Moaz Haider",
  role: "SEO Expert",
  phone: "+92 302 4698992",
  email: "contact@moazhaider.com",
  website: "https://moazhaider.com",
  social: {
    linkedin: "https://www.linkedin.com/in/moaz-haider/",
    facebook: "https://www.facebook.com/moaz.haider.14",
    twitter: "https://x.com/MoazHaider71",
    instagram: "https://www.instagram.com/moazhaider5/",
  },
};
