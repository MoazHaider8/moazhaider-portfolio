import { Metadata } from "next";
import CMSHero from "@/components/cms/CMSHero";
import WhyCMSMatters from "@/components/cms/WhyCMSMatters";
import CMSPlatformsGrid from "@/components/cms/CMSPlatformsGrid";
import CMSServicesIntegration from "@/components/cms/CMSServicesIntegration";
import CMSProofStrip from "@/components/cms/CMSProofStrip";
import CMSFAQ from "@/components/cms/CMSFAQ";
import FreeAuditForm from "@/components/FreeAuditForm";

export const metadata: Metadata = {
  title: "CMS SEO Services | WordPress, Shopify, Webflow & More | Moaz Haider",
  description:
    "Platform-specific SEO optimization for WordPress, Shopify, Wix, Squarespace, Webflow, Magento, Drupal & Joomla. Fix CMS-specific SEO issues and rank higher.",
  
  alternates: {
    canonical: "https://moazhaider.com/cms",
  },

  openGraph: {
    title: "CMS-Specific SEO Services | Expert Optimization for Every Platform",
    description:
      "Get platform-specific SEO that handles WordPress plugin conflicts, Shopify duplicate URLs, and CMS-specific technical challenges.",
    url: "https://moazhaider.com/cms",
    siteName: "Moaz Haider SEO",
    images: [
      {
        url: "https://moazhaider.com/og-cms.jpg",
        width: 1200,
        height: 600,
        alt: "CMS SEO Services by Moaz Haider",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CMS-Specific SEO Services | All Major Platforms",
    description: "Expert SEO for WordPress, Shopify, Webflow & more. Platform-specific optimization.",
    images: ["https://moazhaider.com/og-cms.jpg"],
  },
};

export default function CMSHubPage() {
  // JSON-LD Schemas
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CMS SEO Services",
    description:
      "Platform-specific SEO optimization for WordPress, Shopify, Wix, Squarespace, Webflow, Magento, Drupal & Joomla.",
    url: "https://moazhaider.com/cms",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Moaz Haider SEO",
      url: "https://moazhaider.com",
    },
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
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is CMS-specific SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CMS-specific SEO is search engine optimization tailored to the unique technical architecture, limitations, and capabilities of a specific content management system. Each CMS (WordPress, Shopify, Wix, etc.) has different SEO challenges that require platform-specific expertise to solve effectively.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my CMS matter for SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Different CMS platforms have different SEO strengths and weaknesses. WordPress has plugin conflicts and index bloat. Shopify has duplicate product URLs. Wix has limited technical control. Each platform requires specialized knowledge to optimize properly. Generic SEO advice often fails because it doesn't account for platform-specific constraints.",
        },
      },
      {
        "@type": "Question",
        name: "Which CMS is best for SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No single CMS is universally 'best' for SEO. WordPress offers the most flexibility and control. Shopify is excellent for e-commerce with proper optimization. Webflow produces clean code. The 'best' CMS depends on your business needs, technical resources, and SEO goals. Any major CMS can rank well with proper optimization.",
        },
      },
      {
        "@type": "Question",
        name: "Can you migrate my site to a different CMS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, I can handle CMS migrations with full SEO preservation including URL mapping, 301 redirects, content migration, and post-migration monitoring. However, I often recommend optimizing your current CMS first—migration is expensive and risky, and most platforms can rank well when properly optimized.",
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero with Form */}
        <CMSHero />

        {/* Why CMS-Specific SEO Matters */}
        <WhyCMSMatters />

        {/* 8 Platform Cards Grid */}
        <CMSPlatformsGrid />

        {/* How CMS SEO Fits Into Services */}
        <CMSServicesIntegration />

        {/* Proof Strip */}
        <CMSProofStrip />

        {/* FAQ Section */}
        <CMSFAQ />

        {/* Free Audit Form */}
        <FreeAuditForm />
      </main>
    </>
  );
}
