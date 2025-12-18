import { Metadata } from "next";
import IndustriesHero from "@/components/industries/IndustriesHero";
import WhyIndustrySpecific from "@/components/industries/WhyIndustrySpecific";
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import IndustryClusters from "@/components/industries/IndustryClusters";
import IndustryServicesFit from "@/components/industries/IndustryServicesFit";
import IndustriesProof from "@/components/industries/IndustriesProof";
import IndustriesLocations from "@/components/industries/IndustriesLocations";
import IndustriesFAQ from "@/components/industries/IndustriesFAQ";
import IndustriesCTA from "@/components/industries/IndustriesCTA";
import FreeAuditForm from "@/components/FreeAuditForm";

export const metadata: Metadata = {
  title: "Industries We Serve | SEO Services for 25+ Business Types | Moaz Haider",
  description:
    "Industry-specific SEO services for home services, professional services, SaaS, B2B, and more. Custom SEO strategies tailored to your niche, audience, and competition.",
  keywords:
    "industry SEO, home services SEO, professional services SEO, SaaS SEO, B2B SEO, niche SEO services",
  openGraph: {
    title: "Industries We Serve | Custom SEO for Your Business Type",
    description:
      "Industry-specific SEO services for 25+ business types. From home services to SaaS—custom strategies for your niche.",
    url: "https://moazhaider.com/industries",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Custom SEO for Your Business Type",
    description:
      "Industry-specific SEO services for 25+ business types. Custom strategies for your niche.",
  },
  alternates: {
    canonical: "https://moazhaider.com/industries",
  },
};

export default function IndustriesPage() {
  // Schema markup
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industries We Serve - SEO Services",
    description:
      "Industry-specific SEO services for home services, professional services, SaaS, B2B, and more.",
    url: "https://moazhaider.com/industries",
    mainEntity: {
      "@type": "Service",
      serviceType: "Industry-Specific SEO Services",
      provider: {
        "@type": "Person",
        name: "Moaz Haider",
        url: "https://moazhaider.com",
      },
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
        name: "Industries",
        item: "https://moazhaider.com/industries",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is SEO different for each industry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each industry has unique search intent, competition levels, conversion paths, and customer behavior. Home services need local SEO and emergency keywords. SaaS requires long-form content and product-led SEO. Professional services need trust signals and authority content. Generic SEO strategies fail because they don't account for these industry-specific nuances.",
        },
      },
      {
        "@type": "Question",
        name: "Do you customize SEO strategies per niche?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, every industry gets a custom SEO strategy. I research your specific niche's search intent, competitor landscape, seasonal patterns, and conversion paths. A plumbing company needs emergency keywords and Google Local Pack optimization. A SaaS company needs bottom-of-funnel content and product schema. One-size-fits-all SEO doesn't work.",
        },
      },
      {
        "@type": "Question",
        name: "Can you handle both local and national industry SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Home services typically need local SEO (city-level targeting, Google Business Profile, local citations). SaaS and B2B need national or international SEO (thought leadership content, product SEO, industry authority). Many businesses need both—local presence with national reach. I customize based on your business model and target market.",
        },
      },
      {
        "@type": "Question",
        name: "How long does industry-specific SEO take to show results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timeline varies by industry competitiveness. Low-competition local niches (specialized trades): 2-3 months. Moderate competition (general home services, healthcare): 3-6 months. High competition (law firms, real estate, SaaS): 6-12 months. I focus on early wins (technical fixes, quick-ranking keywords) while building long-term authority.",
        },
      },
      {
        "@type": "Question",
        name: "What industries do you specialize in most?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I have deep experience in home services (HVAC, plumbing, roofing, restoration), professional services (law firms, healthcare, dental), and B2B/SaaS. That said, I work across 25+ industries because the fundamentals of strategic SEO apply universally—it's about understanding your audience's search behavior and your competition's weaknesses, regardless of niche.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with industries not listed on this page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The industries listed represent my most common clients, but I work with any business that needs SEO. If your industry isn't listed, that's fine—I'll research your niche, understand your competition, and build a custom strategy. The core SEO principles apply across all industries; it's just a matter of adapting tactics to your specific market.",
        },
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
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
        <IndustriesHero />
        <WhyIndustrySpecific />
        <IndustriesGrid />
        <IndustryClusters />
        <IndustryServicesFit />
        <IndustriesProof />
        <IndustriesLocations />
        <IndustriesFAQ />
        <IndustriesCTA />
        <FreeAuditForm />
      </main>
    </>
  );
}
