export interface CMSPlatform {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  color: string;
  description: string;
  hero: {
    badge: string;
    headline: string;
    subheading: string;
  };
  whatMakesDifferent: {
    intro: string;
    points: string[];
  };
  commonProblems: {
    intro: string;
    problems: Array<{
      title: string;
      description: string;
    }>;
  };
  myApproach: {
    intro: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  whatsIncluded: {
    deliverables: string[];
  };
  bestPractices: {
    intro: string;
    checklist: string[];
  };
  recommendedTools: {
    intro: string;
    tools: Array<{
      name: string;
      category: string;
      description: string;
    }>;
  };
  whoThisIsFor: {
    intro: string;
    businessTypes: string[];
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices: string[];
  relatedIndustries: string[];
}

export const cmsPlatforms: CMSPlatform[] = [
  {
    slug: "wordpress-seo",
    name: "WordPress",
    tagline: "SEO for the world's most popular CMS",
    icon: "Wordpress",
    color: "from-blue-600 to-blue-800",
    description: "Optimize your WordPress site with platform-specific SEO strategies",
    hero: {
      badge: "WordPress SEO Expert",
      headline: "WordPress SEO Services That Fix Index Bloat, Speed Issues & Plugin Conflicts",
      subheading: "Get WordPress-specific SEO optimization from someone who understands Yoast, RankMath, Core Web Vitals, and how to handle thousands of posts without killing your rankings.",
    },
    whatMakesDifferent: {
      intro: "WordPress is flexible and powerful, but it comes with unique SEO challenges that require platform-specific expertise.",
      points: [
        "Plugin conflicts can break schema, slow down your site, or create duplicate content",
        "Category and tag pages often cause massive index bloat if not managed properly",
        "Permalink structure mistakes can destroy years of SEO work overnight",
        "Core Web Vitals require WordPress-specific optimization (themes, plugins, hosting)",
        "Database bloat from revisions, transients, and unused data slows everything down",
        "Theme builders (Elementor, Divi, etc.) often generate bloated code that hurts performance",
      ],
    },
    commonProblems: {
      intro: "Most WordPress sites suffer from these platform-specific SEO issues:",
      problems: [
        {
          title: "Index Bloat from Tags & Categories",
          description: "WordPress creates separate archive pages for every tag and category. Without proper noindex rules, Google wastes crawl budget on thin, duplicate content.",
        },
        {
          title: "Plugin Conflicts Breaking Schema",
          description: "Multiple SEO plugins (Yoast + RankMath + others) or schema plugins conflict, creating invalid markup that Google ignores or penalizes.",
        },
        {
          title: "Slow Core Web Vitals",
          description: "Page builders, heavy themes, unoptimized images, and plugin bloat destroy LCP, CLS, and INP scores—directly impacting rankings.",
        },
        {
          title: "Permalink Structure Mistakes",
          description: "Changing permalink structure after years of content creates massive 404 errors and loses all accumulated link equity without proper redirects.",
        },
        {
          title: "WooCommerce SEO Issues",
          description: "Product variations create duplicate content, faceted navigation wastes crawl budget, and product schema is often misconfigured.",
        },
        {
          title: "XML Sitemap Problems",
          description: "Sitemaps include noindexed pages, have incorrect priorities, or miss critical pages entirely due to plugin misconfiguration.",
        },
      ],
    },
    myApproach: {
      intro: "My WordPress SEO process is built on 10+ years of optimizing WordPress sites of all sizes:",
      steps: [
        {
          title: "Technical Audit (WordPress-Specific)",
          description: "Deep analysis of permalink structure, index status, plugin conflicts, database health, and Core Web Vitals using WordPress-specific tools.",
        },
        {
          title: "Index Optimization",
          description: "Strategic noindex/nofollow implementation for tags, categories, archives, and pagination. Clean up index bloat without losing valuable pages.",
        },
        {
          title: "Plugin Stack Audit",
          description: "Review every plugin for conflicts, performance impact, and necessity. Consolidate functionality, remove bloat, optimize what remains.",
        },
        {
          title: "Core Web Vitals Optimization",
          description: "Theme optimization, image compression, lazy loading, caching strategy, CDN setup, database cleanup, and code minification.",
        },
        {
          title: "Schema Implementation",
          description: "Clean schema markup using one reliable method (usually custom code or Schema Pro). Remove conflicting plugins and fix validation errors.",
        },
        {
          title: "Content Architecture",
          description: "Optimize category/tag structure, internal linking, breadcrumbs, and content hierarchy for both users and search engines.",
        },
      ],
    },
    whatsIncluded: {
      deliverables: [
        "Complete WordPress technical SEO audit (40+ point checklist)",
        "Plugin audit report with recommendations for removal/replacement",
        "Index optimization (noindex rules, sitemap cleanup, robots.txt)",
        "Core Web Vitals optimization (target: Green scores)",
        "Schema markup implementation (Article, BreadcrumbList, Organization)",
        "Permalink structure optimization (with redirect mapping if needed)",
        "WooCommerce SEO setup (if applicable)",
        "Caching and performance optimization",
        "Security hardening (reduces hack-related SEO penalties)",
        "Monthly monitoring and maintenance recommendations",
      ],
    },
    bestPractices: {
      intro: "Follow this checklist to maintain healthy WordPress SEO:",
      checklist: [
        "Use only ONE SEO plugin (Yoast OR RankMath, never both)",
        "Set permalink structure to /%postname%/ (no dates, no categories)",
        "Noindex all tag pages, author archives, and unnecessary taxonomies",
        "Disable WordPress XML-RPC (security + crawl budget)",
        "Enable object caching (Redis or Memcached) for database queries",
        "Use a lightweight theme or optimize your page builder",
        "Compress images before upload (WebP format, max 200KB per image)",
        "Implement lazy loading for images and iframes",
        "Clean database monthly (revisions, transients, spam comments)",
        "Update plugins and themes regularly (but test first on staging)",
        "Use a quality host (avoid cheap shared hosting)",
        "Implement CDN for static assets (Cloudflare, BunnyCDN)",
        "Set up proper breadcrumbs with schema markup",
        "Configure XML sitemap to exclude admin pages, attachments, and noindexed pages",
        "Monitor 404 errors and set up 301 redirects for broken links",
      ],
    },
    recommendedTools: {
      intro: "Essential WordPress SEO tools I use and recommend:",
      tools: [
        {
          name: "Yoast SEO or Rank Math",
          category: "SEO Plugin",
          description: "Choose one. Both are excellent, but using both creates conflicts. I prefer RankMath for flexibility.",
        },
        {
          name: "WP Rocket",
          category: "Caching",
          description: "Best caching plugin for WordPress. Handles page cache, object cache, minification, and lazy loading.",
        },
        {
          name: "ShortPixel or Imagify",
          category: "Image Optimization",
          description: "Automatic image compression and WebP conversion. Essential for Core Web Vitals.",
        },
        {
          name: "Query Monitor",
          category: "Performance Debugging",
          description: "Identifies slow database queries, PHP errors, and plugin conflicts. Developer essential.",
        },
        {
          name: "Redirection",
          category: "Redirect Management",
          description: "Manages 301 redirects, tracks 404 errors. Critical when restructuring permalinks.",
        },
        {
          name: "WP-Optimize",
          category: "Database Cleanup",
          description: "Cleans revisions, transients, spam comments. Keeps database lean and fast.",
        },
        {
          name: "Schema Pro",
          category: "Schema Markup",
          description: "Clean schema implementation without code. Better than built-in SEO plugin schema.",
        },
        {
          name: "Asset CleanUp",
          category: "Script Management",
          description: "Disable unnecessary CSS/JS on specific pages. Reduces page weight dramatically.",
        },
      ],
    },
    whoThisIsFor: {
      intro: "WordPress SEO services are perfect for:",
      businessTypes: [
        "Bloggers and content publishers with 100+ articles",
        "WooCommerce stores struggling with product page rankings",
        "Marketing agencies managing multiple WordPress client sites",
        "B2B companies with WordPress corporate websites",
        "News and media sites dealing with high-volume content",
        "Membership sites and online communities",
        "Local businesses using WordPress for their main website",
        "SaaS companies with WordPress marketing sites",
      ],
    },
    faqs: [
      {
        question: "Should I use Yoast SEO or Rank Math?",
        answer: "Both are excellent. Yoast is more beginner-friendly with better documentation. Rank Math has more features and flexibility. I personally prefer Rank Math, but the key is picking one and learning it thoroughly. Never run both simultaneously.",
      },
      {
        question: "How do I fix WordPress index bloat?",
        answer: "Index bloat comes from WordPress creating archive pages for tags, categories, authors, dates, and pagination. Use your SEO plugin to noindex tag archives, author archives, and date archives. Keep category pages indexed only if they have unique content. Use robots.txt to block parameter-based URLs.",
      },
      {
        question: "Why is my WordPress site so slow?",
        answer: "Most WordPress speed issues come from: 1) Too many plugins (especially page builders), 2) Unoptimized images, 3) No caching, 4) Cheap hosting, 5) Database bloat, 6) External scripts (ads, tracking). Fix these systematically with WP Rocket, image compression, and database cleanup.",
      },
      {
        question: "Can I change my WordPress permalink structure without losing rankings?",
        answer: "Yes, but it requires careful planning. You need to implement 301 redirects for every URL that changes. Use the Redirection plugin to map old URLs to new ones. Test thoroughly on staging first. Expect temporary ranking fluctuations for 2-4 weeks while Google processes the redirects.",
      },
      {
        question: "Do I need a separate schema plugin or is Yoast/RankMath enough?",
        answer: "For basic sites, Yoast or RankMath schema is usually sufficient. For advanced schema (FAQ, HowTo, Product, Event, Recipe), a dedicated plugin like Schema Pro gives you more control and cleaner markup. Avoid running multiple schema sources—pick one method.",
      },
      {
        question: "How do I optimize WordPress for Core Web Vitals?",
        answer: "1) Use a lightweight theme, 2) Compress images (WebP, lazy loading), 3) Implement caching (WP Rocket), 4) Minimize plugins, 5) Use a fast host, 6) Enable CDN, 7) Defer JavaScript, 8) Optimize fonts. This typically improves LCP, CLS, and INP to green scores.",
      },
      {
        question: "Should I noindex WordPress tags?",
        answer: "In most cases, yes. Tag pages are usually thin, duplicate content that wastes crawl budget. Only keep tags indexed if: 1) You actively optimize them with unique content, 2) They target specific keywords, 3) You maintain them regularly. Otherwise, noindex them.",
      },
      {
        question: "How many plugins are too many for WordPress SEO?",
        answer: "It's not about the number—it's about quality and necessity. I've seen sites with 50 lightweight plugins perform better than sites with 10 bloated ones. Audit each plugin: Does it solve a critical problem? Is there a lighter alternative? Can functionality be combined? Remove anything you don't actively need.",
      },
    ],
    relatedServices: [
      "/services/technical-seo",
      "/services/content-seo",
      "/services/ecommerce-seo",
      "/services/local-seo",
      "/services/seo-audit",
    ],
    relatedIndustries: [
      "/industries/saas",
      "/industries/ecommerce",
      "/industries/healthcare",
      "/industries/real-estate",
    ],
  },
  {
    slug: "shopify-seo",
    name: "Shopify",
    tagline: "E-commerce SEO for Shopify stores",
    icon: "ShoppingBag",
    color: "from-green-600 to-green-800",
    description: "Overcome Shopify's SEO limitations and rank your products on page 1",
    hero: {
      badge: "Shopify SEO Specialist",
      headline: "Shopify SEO Services That Fix Duplicate URLs, Collection Bloat & Slow Product Rankings",
      subheading: "Get Shopify-specific SEO optimization that handles canonical issues, faceted navigation, app bloat, and the unique challenges of Shopify's closed platform.",
    },
    whatMakesDifferent: {
      intro: "Shopify is built for ease of use, but its closed architecture creates unique SEO challenges:",
      points: [
        "Duplicate URLs for products appear in multiple collections automatically",
        "Limited control over URL structure, robots.txt, and server-side redirects",
        "Faceted navigation and filters create infinite URL variations",
        "Shopify apps often inject performance-killing scripts",
        "Automatic canonical tags sometimes point to the wrong URL",
        "Blog functionality is limited compared to WordPress",
      ],
    },
    commonProblems: {
      intro: "Most Shopify stores struggle with these SEO issues:",
      problems: [
        {
          title: "Duplicate Product URLs Across Collections",
          description: "Shopify creates separate URLs for products in each collection (/collections/shoes/product vs /collections/sale/product). This creates duplicate content that confuses Google.",
        },
        {
          title: "Faceted Navigation Crawl Waste",
          description: "Filter options (color, size, price) generate thousands of URL variations. Without proper parameter handling, Google wastes crawl budget on duplicate filtered pages.",
        },
        {
          title: "App Bloat Killing Speed",
          description: "Every Shopify app injects JavaScript and CSS. Installing 20+ apps can destroy Core Web Vitals scores and tank mobile rankings.",
        },
        {
          title: "Limited robots.txt Control",
          description: "Shopify's locked-down robots.txt means you can't block certain crawling patterns or control Googlebot access as precisely as other platforms.",
        },
        {
          title: "Blog SEO Limitations",
          description: "Shopify's blog is bare-bones: no custom taxonomies, limited URL control, weak internal linking options. Hard to compete with content-focused sites.",
        },
        {
          title: "Pagination and Infinite Scroll Issues",
          description: "Collection pagination creates duplicate content if not handled properly. Infinite scroll can hide products from Googlebot entirely.",
        },
      ],
    },
    myApproach: {
      intro: "My Shopify SEO process works within platform constraints while maximizing rankings:",
      steps: [
        {
          title: "Technical Audit (Shopify-Specific)",
          description: "Analyze canonical handling, collection structure, URL patterns, app impact, and Core Web Vitals using Shopify-specific tools and workarounds.",
        },
        {
          title: "Canonical & Duplicate Content Strategy",
          description: "Verify canonical tags point to preferred product URLs. Implement collection-level noindex where appropriate. Use URL parameters smartly.",
        },
        {
          title: "App Performance Audit",
          description: "Identify which apps are killing your speed. Remove unnecessary apps, lazy-load third-party scripts, optimize what remains.",
        },
        {
          title: "Collection Architecture",
          description: "Optimize collection structure for SEO: clear hierarchy, targeted keywords per collection, proper internal linking, unique descriptions.",
        },
        {
          title: "Product Page Optimization",
          description: "Schema markup (Product, Review, AggregateRating), unique descriptions, optimized images, internal links, user-generated content.",
        },
        {
          title: "Core Web Vitals Optimization",
          description: "Theme optimization, image compression, lazy loading, script deferral, font optimization—all within Shopify's constraints.",
        },
      ],
    },
    whatsIncluded: {
      deliverables: [
        "Complete Shopify technical SEO audit (35+ point checklist)",
        "Canonical tag audit and duplicate content resolution",
        "App performance audit with removal/optimization recommendations",
        "Collection structure optimization for search intent",
        "Product page schema implementation (Product, Review, Offer)",
        "Core Web Vitals optimization (theme and app-level)",
        "URL parameter handling for faceted navigation",
        "XML sitemap optimization (products, collections, blog)",
        "Internal linking strategy for product discoverability",
        "Blog SEO optimization (with Shopify's limitations in mind)",
        "Monthly ranking tracking and adjustment recommendations",
      ],
    },
    bestPractices: {
      intro: "Follow this checklist to maintain healthy Shopify SEO:",
      checklist: [
        "Assign each product to ONE primary collection (avoid excessive multi-collection placement)",
        "Use canonical tags properly—prefer /products/product-name over /collections/name/products/product-name",
        "Add 'noindex, follow' to filtered collection pages using liquid code",
        "Limit Shopify apps to essentials—remove anything that doesn't drive revenue",
        "Use lazy loading for product images and third-party widgets",
        "Write unique product descriptions (never copy manufacturer descriptions)",
        "Optimize product images: WebP format, descriptive file names, proper alt text",
        "Implement product schema with reviews and pricing data",
        "Use descriptive collection URLs (e.g., /collections/mens-running-shoes)",
        "Enable Shopify's built-in sitemap and submit to Google Search Console",
        "Use Shopify's blog for content marketing (despite limitations)",
        "Set up breadcrumb navigation with proper schema",
        "Optimize collection meta titles and descriptions (unique for each)",
        "Use URL redirects for discontinued products (Shopify admin → Online Store → Navigation → URL Redirects)",
        "Monitor Core Web Vitals monthly and audit new app installations",
      ],
    },
    recommendedTools: {
      intro: "Essential Shopify SEO tools and apps I recommend:",
      tools: [
        {
          name: "SEO Manager by Plug in SEO",
          category: "SEO App",
          description: "Best Shopify SEO app. Handles meta tags, JSON-LD schema, image optimization, and technical SEO fixes Shopify can't do natively.",
        },
        {
          name: "Crush.pics",
          category: "Image Optimization",
          description: "Automatic image compression and WebP conversion. Critical for Core Web Vitals on image-heavy Shopify stores.",
        },
        {
          name: "Judge.me or Loox",
          category: "Product Reviews",
          description: "Generate user-generated content and review schema for products. Reviews dramatically improve product page SEO.",
        },
        {
          name: "Shogun or PageFly",
          category: "Page Builder",
          description: "Create SEO-optimized landing pages beyond Shopify's default templates. Use sparingly—page builders add weight.",
        },
        {
          name: "Bulk Image Edit",
          category: "Alt Text Management",
          description: "Add alt text to thousands of product images at scale. Essential for image SEO and accessibility.",
        },
        {
          name: "Smart SEO",
          category: "Structured Data",
          description: "Adds proper JSON-LD schema for products, breadcrumbs, and organization data. Cleaner than manual Liquid implementation.",
        },
        {
          name: "Redirect Manager",
          category: "Redirect Management",
          description: "Manage 301 redirects for discontinued products and changed URLs. Preserves link equity.",
        },
        {
          name: "SearchPie",
          category: "Technical SEO",
          description: "All-in-one SEO app with schema, meta tags, image optimization, and speed features.",
        },
      ],
    },
    whoThisIsFor: {
      intro: "Shopify SEO services are perfect for:",
      businessTypes: [
        "E-commerce brands with 100+ products struggling to rank",
        "Dropshipping stores competing in saturated niches",
        "Fashion and apparel brands with seasonal collections",
        "DTC (Direct-to-Consumer) brands scaling organic traffic",
        "Print-on-demand stores needing product page optimization",
        "Subscription box services with Shopify + Recharge",
        "Home goods and furniture stores with large catalogs",
        "Beauty and cosmetics brands with multiple product variants",
      ],
    },
    faqs: [
      {
        question: "Can I fully control SEO on Shopify?",
        answer: "Partially. Shopify gives you control over meta tags, content, and some schema, but locks down server-side elements like robots.txt, URL structure, and server response codes. You work within Shopify's framework, not around it. Despite limitations, Shopify stores can still rank very well with proper optimization.",
      },
      {
        question: "How do I fix duplicate product URLs in Shopify?",
        answer: "Shopify's canonical tags usually handle this by pointing all collection-based URLs back to /products/product-name. Verify these are working correctly. If products appear in many collections, choose one primary collection and feature the product there. Use 'noindex' on filtered/sorted collection pages.",
      },
      {
        question: "Why is my Shopify store slow?",
        answer: "Usually due to: 1) Too many apps injecting scripts, 2) Unoptimized images, 3) Heavy themes (especially page builders), 4) Third-party tracking pixels, 5) No lazy loading. Audit apps monthly, compress images, choose lightweight themes, and defer non-critical scripts.",
      },
      {
        question: "Should I add products to multiple collections?",
        answer: "Yes, but strategically. Add products to collections where they naturally belong, but avoid excessive duplication. Use canonical tags to tell Google which URL is primary. Focus on optimizing one collection page per keyword intent rather than splitting authority across many.",
      },
      {
        question: "How do I handle out-of-stock products for SEO?",
        answer: "Keep out-of-stock product pages live with 'Out of Stock' messaging and schema (availability: OutOfStock). This preserves link equity and rankings. Only redirect (301) to category pages if the product is permanently discontinued. Use 'Coming Soon' if it's temporarily unavailable.",
      },
      {
        question: "Do I need the Shopify blog for SEO?",
        answer: "Yes, despite its limitations. Shopify's blog is basic, but it's still your best tool for content marketing and targeting informational keywords. Use it for buyer's guides, how-tos, and comparison content that attracts top-of-funnel traffic. Compensate for weak internal linking with manual contextual links.",
      },
      {
        question: "What's the best Shopify theme for SEO?",
        answer: "Any lightweight, mobile-first Shopify theme works. Popular choices: Dawn (Shopify's free theme, very fast), Turbo (speed-optimized), Symmetry. Avoid overly feature-rich themes that load unnecessary code. Speed and clean HTML matter more than features.",
      },
      {
        question: "How many Shopify apps is too many?",
        answer: "As few as possible. Every app adds scripts and requests. Audit each app: Is it essential? Does it generate revenue? Test site speed before and after installing apps. If you have 20+ apps, you almost certainly have bloat. Consolidate or remove.",
      },
    ],
    relatedServices: [
      "/services/ecommerce-seo",
      "/services/technical-seo",
      "/services/content-seo",
      "/services/link-building",
    ],
    relatedIndustries: [
      "/industries/ecommerce",
      "/industries/fashion",
      "/industries/beauty",
    ],
  },
  // Additional CMS platforms will follow same structure...
];

export function getCMSBySlug(slug: string): CMSPlatform | undefined {
  return cmsPlatforms.find((cms) => cms.slug === slug);
}

export function getAllCMSSlugs(): string[] {
  return cmsPlatforms.map((cms) => cms.slug);
}
