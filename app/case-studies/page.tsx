import { Metadata } from "next";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudiesGrid from "@/components/case-studies/CaseStudiesGrid";
import RelatedServicesCTA from "@/components/case-studies/RelatedServicesCTA";
import FinalCTA from "@/components/case-studies/FinalCTA";

export const metadata: Metadata = {
  title: "SEO Case Studies – Real Results from Moaz Haider",
  description:
    "See proven SEO results. Case studies showing 100%+ traffic growth, top rankings, and ROI for ecommerce, SaaS, and local businesses.",

  alternates: {
    canonical: "https://moazhaider.com/case-studies",
  },

  openGraph: {
    title: "SEO Case Studies – Real Results, Real Growth",
    description:
      "Explore case studies showing how strategic SEO delivers traffic, rankings, and revenue.",
    url: "https://moazhaider.com/case-studies",
    siteName: "Moaz Haider SEO",
    images: [
      {
        url: "https://moazhaider.com/og-case-studies.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Case Studies by Moaz Haider",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SEO Case Studies – Proven Results",
    description: "See how strategic SEO delivers traffic, rankings, and ROI.",
    images: ["https://moazhaider.com/og-case-studies.jpg"],
  },

  keywords: [
    "SEO case studies",
    "SEO results",
    "Moaz Haider case studies",
    "SEO portfolio",
  ],
};

export default function CaseStudiesPage() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: "https://moazhaider.com/case-studies",
    name: "SEO Case Studies - Moaz Haider",
    description:
      "See real SEO results. Case studies showing traffic growth, rankings, and ROI for businesses across industries.",
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
        name: "Case Studies",
        item: "https://moazhaider.com/case-studies",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <CaseStudiesHero />

        {/* Case Studies Grid */}
        <CaseStudiesGrid />

        {/* Related Services CTA */}
        <RelatedServicesCTA />

        {/* Final CTA */}
        <FinalCTA />
      </main>
    </>
  );
}
