import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryData, getAllIndustrySlugs } from "@/lib/industryData";
import IndustryHero from "@/components/industry-page/IndustryHero";
import UnderstandingIndustry from "@/components/industry-page/UnderstandingIndustry";
import IndustryChallenges from "@/components/industry-page/IndustryChallenges";
import IndustryStrategy from "@/components/industry-page/IndustryStrategy";
import IndustryIncludes from "@/components/industry-page/IndustryIncludes";
import IndustryLocations from "@/components/industry-page/IndustryLocations";
import IndustryWhyChoose from "@/components/industry-page/IndustryWhyChoose";
import IndustryRelatedServices from "@/components/industry-page/IndustryRelatedServices";
import IndustryFAQ from "@/components/industry-page/IndustryFAQ";
import IndustryCTA from "@/components/industry-page/IndustryCTA";
import FreeAuditForm from "@/components/FreeAuditForm";

export async function generateStaticParams() {
  const slugs = getAllIndustrySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryData(slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://moazhaider.com/industries/${slug}`,
      siteName: "Moaz Haider - SEO Consultant",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
    alternates: {
      canonical: `https://moazhaider.com/industries/${slug}`,
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryData(slug);

  if (!industry) {
    notFound();
  }

  // Schema markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://moazhaider.com/industries/${slug}#service`,
        "name": `${industry.name} SEO Services`,
        "description": industry.metaDescription,
        "provider": {
          "@type": "Person",
          "name": "Moaz Haider",
          "url": "https://moazhaider.com",
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States",
        },
        "serviceType": "SEO Consulting",
      },
      {
        "@type": "WebPage",
        "@id": `https://moazhaider.com/industries/${slug}#webpage`,
        "url": `https://moazhaider.com/industries/${slug}`,
        "name": industry.metaTitle,
        "description": industry.metaDescription,
        "isPartOf": {
          "@id": "https://moazhaider.com/#website",
        },
        "about": {
          "@id": `https://moazhaider.com/industries/${slug}#service`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://moazhaider.com/industries/${slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://moazhaider.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Industries",
            "item": "https://moazhaider.com/industries",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": industry.name,
            "item": `https://moazhaider.com/industries/${slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://moazhaider.com/industries/${slug}#faq`,
        "mainEntity": industry.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <IndustryHero industry={industry} />
      <UnderstandingIndustry industry={industry} />
      <IndustryChallenges industry={industry} />
      <IndustryStrategy industry={industry} />
      <IndustryIncludes industry={industry} />
      <IndustryLocations industry={industry} />
      <IndustryWhyChoose industry={industry} />
      <IndustryRelatedServices industry={industry} />
      <IndustryFAQ industry={industry} />
      <IndustryCTA industry={industry} />
      <FreeAuditForm />
    </>
  );
}
