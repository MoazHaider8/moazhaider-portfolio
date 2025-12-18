import { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { getCMSData } from "@/data/allCMSData";

export async function generateStaticParams() {
  return [
    { slug: "wordpress-seo" },
    { slug: "shopify-seo" },
    { slug: "wix-seo" },
    { slug: "squarespace-seo" },
    { slug: "webflow-seo" },
    { slug: "magento-seo" },
    { slug: "drupal-seo" },
    { slug: "joomla-seo" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cmsData = getCMSData(params.slug);
  
  if (!cmsData) {
    return {
      title: "CMS SEO Services | Moaz Haider",
    };
  }

  return {
    title: `${cmsData.name} SEO Services | ${cmsData.metaTitle} | Moaz Haider`,
    description: cmsData.metaDescription,
    alternates: {
      canonical: `https://moazhaider.com/cms/${params.slug}`,
    },
    openGraph: {
      title: `${cmsData.name} SEO Services | Platform-Specific Optimization`,
      description: cmsData.metaDescription,
      url: `https://moazhaider.com/cms/${params.slug}`,
      siteName: "Moaz Haider SEO",
      images: [
        {
          url: `https://moazhaider.com/og-${params.slug}.jpg`,
          width: 1200,
          height: 600,
          alt: `${cmsData.name} SEO Services`,
        },
      ],
      type: "website",
    },
  };
}

export default function CMSSubpage({ params }: { params: { slug: string } }) {
  const cmsData = getCMSData(params.slug);

  if (!cmsData) {
    notFound();
  }

  // Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${cmsData.name} SEO Services`,
    description: cmsData.metaDescription,
    provider: {
      "@type": "Person",
      name: "Moaz Haider",
      url: "https://moazhaider.com",
    },
    areaServed: "Worldwide",
    serviceType: `${cmsData.name} SEO Optimization`,
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
        name: `${cmsData.name} SEO`,
        item: `https://moazhaider.com/cms/${params.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cmsData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen">
        <CMSSubpageHero data={cmsData} />
        <WhatMakesDifferent data={cmsData.whatMakesDifferent} />
        <CommonProblems problems={cmsData.commonProblems} cmsName={cmsData.name} />
        <MyApproach steps={cmsData.myApproach} cmsName={cmsData.name} />
        <WhatsIncluded deliverables={cmsData.whatsIncluded} cmsName={cmsData.name} />
        <BestPractices checklist={cmsData.bestPractices} cmsName={cmsData.name} />
        <RecommendedTools tools={cmsData.recommendedTools} cmsName={cmsData.name} />
        <WhoThisIsFor businessTypes={cmsData.whoThisIsFor} cmsName={cmsData.name} />
        <CMSSubpageFAQ faqs={cmsData.faqs} cmsName={cmsData.name} />
        <FreeAuditForm />
        
        {/* Navigation Links */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link href="/cms" className="text-purple-600 dark:text-purple-400 hover:underline">
                ← Back to CMS Hub
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/services/technical-seo" className="text-purple-600 dark:text-purple-400 hover:underline">
                Technical SEO
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/services/content-seo" className="text-purple-600 dark:text-purple-400 hover:underline">
                Content SEO
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
