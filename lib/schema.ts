import { contactInfo, services } from "./data";

// Schema type definitions
interface PersonSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  email: string;
  telephone: string;
  jobTitle: string;
  sameAs: string[];
}

interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo?: string;
  contactPoint: {
    "@type": string;
    telephone: string;
    email: string;
    contactType: string;
  };
  sameAs: string[];
}

interface WebSiteSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  potentialAction: {
    "@type": string;
    target: {
      "@type": string;
      urlTemplate: string;
    };
    "query-input": string;
  };
}

interface WebPageSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
}

interface BreadcrumbSchema {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item?: string;
  }>;
}

interface FAQPageSchema {
  "@context": string;
  "@type": string;
  mainEntity: Array<{
    "@type": string;
    name: string;
    acceptedAnswer: {
      "@type": string;
      text: string;
    };
  }>;
}

interface ServiceSchema {
  "@context": string;
  "@type": string;
  serviceType: string;
  provider: {
    "@type": string;
    name: string;
  };
  areaServed: string;
  description: string;
}

// Generate Person Schema
export function generatePersonSchema(): PersonSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: contactInfo.name,
    url: contactInfo.website,
    email: contactInfo.email,
    telephone: contactInfo.phone,
    jobTitle: contactInfo.role,
    sameAs: [
      contactInfo.social.linkedin,
      contactInfo.social.facebook,
      contactInfo.social.twitter,
      contactInfo.social.instagram,
    ],
  };
}

// Generate Organization Schema
export function generateOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: contactInfo.name,
    url: contactInfo.website,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactInfo.phone,
      email: contactInfo.email,
      contactType: "Customer Service",
    },
    sameAs: [
      contactInfo.social.linkedin,
      contactInfo.social.facebook,
      contactInfo.social.twitter,
      contactInfo.social.instagram,
    ],
  };
}

// Generate WebSite Schema
export function generateWebSiteSchema(): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Moaz Haider - SEO Expert",
    url: contactInfo.website,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${contactInfo.website}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// Generate WebPage Schema
export function generateWebPageSchema(): WebPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Moaz Haider - SEO Expert | Technical, Local & E-commerce SEO Services",
    description:
      "Moaz Haider is an SEO Expert specializing in Technical SEO, Local SEO, E-commerce SEO, and Content Strategy. Drive more traffic, leads, and revenue with proven SEO campaigns.",
    url: contactInfo.website,
  };
}

// Generate Breadcrumb Schema
export function generateBreadcrumbSchema(): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
      },
    ],
  };
}

// Generate FAQ Schema
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): FAQPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generate Service Schema
export function generateServiceSchema(serviceName: string): ServiceSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@type": "Person",
      name: contactInfo.name,
    },
    areaServed: "Worldwide",
    description: `Professional ${serviceName} services by Moaz Haider, SEO Expert`,
  };
}

// Generate all schemas for homepage
export function generateAllSchemas(faqs: Array<{ question: string; answer: string }>) {
  return {
    person: generatePersonSchema(),
    organization: generateOrganizationSchema(),
    website: generateWebSiteSchema(),
    webpage: generateWebPageSchema(),
    breadcrumb: generateBreadcrumbSchema(),
    faq: generateFAQSchema(faqs),
  };
}

// Utility to convert schema to JSON-LD script
export function schemaToJsonLd(schema: any): string {
  return JSON.stringify(schema);
}
