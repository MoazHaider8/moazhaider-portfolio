import { Metadata } from "next";
import { notFound } from "next/navigation";
import LayoutWrapper from "@/components/LayoutWrapper";
import { servicesData, servicesList } from "@/data/servicesData";
import ServiceHero from "@/components/service-detail/ServiceHero";
import ServiceDefinition from "@/components/service-detail/ServiceDefinition";
import ServiceProblems from "@/components/service-detail/ServiceProblems";
import ServiceProcess from "@/components/service-detail/ServiceProcess";
import ServiceDeliverables from "@/components/service-detail/ServiceDeliverables";
import ServiceIndustries from "@/components/service-detail/ServiceIndustries";
import ServicePlatforms from "@/components/service-detail/ServicePlatforms";
import ServiceWhyChoose from "@/components/service-detail/ServiceWhyChoose";
import ServiceAvailability from "@/components/service-detail/ServiceAvailability";
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

      <ServiceHero service={service} />
      <ServiceDefinition service={service} />
      <ServiceProblems service={service} />
      <ServiceProcess service={service} />
      <ServiceDeliverables service={service} />
      <ServiceIndustries service={service} />
      {service.platforms && <ServicePlatforms service={service} />}
      <ServiceWhyChoose service={service} />
      <ServiceAvailability />
      <ServiceFAQs service={service} />
      <ServiceCTA serviceName={service.name} />
    </LayoutWrapper>
  );
}
