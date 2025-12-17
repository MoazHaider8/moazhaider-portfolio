import { Metadata } from "next";
import { notFound } from "next/navigation";
import LayoutWrapper from "@/components/LayoutWrapper";
import { servicesData, servicesList } from "@/data/servicesData";
import ServiceHero from "@/components/service-detail/ServiceHero";
import ServiceDefinition from "@/components/service-detail/ServiceDefinition";
import ServiceProblems from "@/components/service-detail/ServiceProblems";
import ProvenProcess from "@/components/service-detail/ProvenProcess";
import WhatsIncluded from "@/components/service-detail/WhatsIncluded";
import OptimizedWhyChoose from "@/components/service-detail/OptimizedWhyChoose";
import ServiceFAQs from "@/components/service-detail/ServiceFAQs";
import ServiceCTA from "@/components/service-detail/ServiceCTA";

export async function generateStaticParams() {
  return servicesList.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = servicesData[params.slug];
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} Services | Moaz Haider - SEO Expert`,
    description: service.hero.description,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords].join(", "),
    openGraph: {
      title: service.hero.headline,
      description: service.hero.description,
      type: "website",
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  // JSON-LD Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.definition.what,
    "provider": {
      "@type": "Person",
      "name": "Moaz Haider",
      "jobTitle": "SEO Expert"
    },
    "areaServed": "Global",
    "serviceType": service.primaryKeyword
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://moazhaider.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://moazhaider.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.name,
        "item": `https://moazhaider.com/services/${service.slug}`
      }
    ]
  };

  return (
    <LayoutWrapper>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero - Hook + Convert in 3 seconds */}
      <ServiceHero service={service} />
      
      {/* What is [Service]? - Match search intent, qualify leads */}
      <ServiceDefinition service={service} />
      
      {/* Problems This Solves - Build urgency through pain awareness */}
      <ServiceProblems service={service} />
      
      {/* My Proven Process - Methodology clarity + trust */}
      <ProvenProcess service={service} />
      
      {/* What's Included - Tangible scope clarity */}
      <WhatsIncluded service={service} />
      
      {/* Why Businesses Choose Me - Social proof + differentiation */}
      <OptimizedWhyChoose service={service} />
      
      {/* FAQ - Handle objections, SEO schema */}
      <ServiceFAQs service={service} />
      
      {/* Final CTA - Convert warmed leads */}
      <ServiceCTA serviceName={service.name} />
    </LayoutWrapper>
  );
}
