import { Metadata } from "next";
import Link from "next/link";
import CMSSubpageHero from "@/components/cms/CMSSubpageHero";
import WhatMakesDifferent from "@/components/cms/WhatMakesDifferent";
import CommonProblems from "@/components/cms/CommonProblems";
import MyApproach from "@/components/cms/MyApproach";
import WhatsIncluded from "@/components/cms/WhatsIncluded";
import BestPractices from "@/components/cms/BestPractices";
import RecommendedTools from "@/components/cms/RecommendedTools";
import WhoThisIsFor from "@/components/cms/WhoThisIsFor";
import CMSSubpageFAQ from "@/components/cms/CMSSubpageFAQ";
import FreeAuditForm from "@/components/FreeAuditForm";

export const metadata: Metadata = {
  title: "WordPress SEO Services | Fix Plugin Conflicts & Index Bloat | Moaz Haider",
  description:
    "Expert WordPress SEO optimization. Fix Yoast/RankMath conflicts, index bloat, Core Web Vitals, and permalink issues. Get WordPress sites ranking on page 1.",
  
  alternates: {
    canonical: "https://moazhaider.com/cms/wordpress-seo",
  },

  openGraph: {
    title: "WordPress SEO Services | Platform-Specific Optimization",
    description:
      "Fix WordPress SEO issues: plugin conflicts, index bloat, speed problems. Get expert optimization for WordPress sites.",
    url: "https://moazhaider.com/cms/wordpress-seo",
    siteName: "Moaz Haider SEO",
    images: [
      {
        url: "https://moazhaider.com/og-wordpress-seo.jpg",
        width: 1200,
        height: 600,
        alt: "WordPress SEO Services",
      },
    ],
    type: "website",
  },
};

export default function WordPressSEOPage() {
  const wordpressData = {
    name: "WordPress",
    slug: "wordpress-seo",
    color: "from-blue-600 to-blue-800",
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
    commonProblems: [
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
    myApproach: [
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
    whatsIncluded: [
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
    bestPractices: [
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
    recommendedTools: [
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
    whoThisIsFor: [
      "Bloggers and content publishers with 100+ articles",
      "WooCommerce stores struggling with product page rankings",
      "Marketing agencies managing multiple WordPress client sites",
      "B2B companies with WordPress corporate websites",
      "News and media sites dealing with high-volume content",
      "Membership sites and online communities",
      "Local businesses using WordPress for their main website",
      "SaaS companies with WordPress marketing sites",
    ],
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
  };

  // Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WordPress SEO Services",
    description: "Expert WordPress SEO optimization including plugin audits, Core Web Vitals optimization, index management, and technical SEO fixes.",
    provider: {
      "@type": "Person",
      name: "Moaz Haider",
      url: "https://moazhaider.com",
    },
    areaServed: "Worldwide",
    serviceType: "WordPress SEO Optimization",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://moazhaider.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "CMS SEO",
        item: "https://moazhaider.com/cms",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "WordPress SEO",
        item: "https://moazhaider.com/cms/wordpress-seo",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen">
        <CMSSubpageHero data={wordpressData} />
        <WhatMakesDifferent data={wordpressData} />
        <CommonProblems problems={wordpressData.commonProblems} cmsName="WordPress" />
        <MyApproach steps={wordpressData.myApproach} cmsName="WordPress" />
        <WhatsIncluded deliverables={wordpressData.whatsIncluded} cmsName="WordPress" />
        <BestPractices checklist={wordpressData.bestPractices} cmsName="WordPress" />
        <RecommendedTools tools={wordpressData.recommendedTools} cmsName="WordPress" />
        <WhoThisIsFor businessTypes={wordpressData.whoThisIsFor} cmsName="WordPress" />
        <CMSSubpageFAQ faqs={wordpressData.faqs} cmsName="WordPress" />
        <FreeAuditForm />
        
        {/* Navigation Links */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link href="/cms" className="text-purple-600 dark:text-purple-400 hover:underline">
                ← Back to CMS Hub
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/services" className="text-purple-600 dark:text-purple-400 hover:underline">
                All Services
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/case-studies" className="text-purple-600 dark:text-purple-400 hover:underline">
                Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
