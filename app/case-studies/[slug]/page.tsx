import { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudiesData";
import CaseStudyHero from "@/components/case-study-detail/CaseStudyHero";
import CaseStudyOverview from "@/components/case-study-detail/CaseStudyOverview";
import Challenge from "@/components/case-study-detail/Challenge";
import Strategy from "@/components/case-study-detail/Strategy";
import Implementation from "@/components/case-study-detail/Implementation";
import Results from "@/components/case-study-detail/Results";
import ToolsTech from "@/components/case-study-detail/ToolsTech";
import RelatedCaseStudies from "@/components/case-study-detail/RelatedCaseStudies";
import FinalCTADetail from "@/components/case-study-detail/FinalCTADetail";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug);
  
  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.description,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      type: "article",
      url: `https://moazhaider.com/case-studies/${caseStudy.slug}`,
      images: [
        {
          url: "/images/og-default.jpg",
          width: 1200,
          height: 630,
          alt: caseStudy.shortTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.description,
      images: ["/images/og-default.jpg"],
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.shortTitle,
    description: caseStudy.description,
    author: {
      "@type": "Person",
      name: "Moaz Haider",
      url: "https://moazhaider.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Moaz Haider - SEO Freelancer",
      logo: {
        "@type": "ImageObject",
        url: "https://moazhaider.com/logo.png",
      },
    },
    datePublished: "2024-01-15",
    dateModified: "2024-01-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://moazhaider.com/case-studies/${caseStudy.slug}`,
    },
  };

  // Breadcrumb Schema
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
      {
        "@type": "ListItem",
        position: 3,
        name: caseStudy.shortTitle,
        item: `https://moazhaider.com/case-studies/${caseStudy.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <CaseStudyHero caseStudy={caseStudy} />
      <CaseStudyOverview caseStudy={caseStudy} />
      <Challenge caseStudy={caseStudy} />
      <Strategy caseStudy={caseStudy} />
      <Implementation caseStudy={caseStudy} />
      <Results caseStudy={caseStudy} />
      <ToolsTech caseStudy={caseStudy} />
      <RelatedCaseStudies currentSlug={caseStudy.slug} industry={caseStudy.industry} />
      <FinalCTADetail />
    </>
  );
}
