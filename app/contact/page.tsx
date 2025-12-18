import { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import DirectContact from "@/components/contact/DirectContact";
import WhatHappensNext from "@/components/contact/WhatHappensNext";
import ContactFAQ from "@/components/contact/ContactFAQ";
import TrustReinforcement from "@/components/contact/TrustReinforcement";
import FreeAuditForm from "@/components/FreeAuditForm";

export const metadata: Metadata = {
  title: "Contact Moaz Haider – Get Your Free SEO Consultation",
  description:
    "Ready to grow your organic traffic? Contact Moaz Haider for a free SEO consultation. 24-hour response time guaranteed. No sales pressure.",

  alternates: {
    canonical: "https://moazhaider.com/contact",
  },

  openGraph: {
    title: "Contact Moaz Haider – SEO Expert",
    description:
      "Get in touch to discuss your SEO goals. Free consultation, 24-hour response time.",
    url: "https://moazhaider.com/contact",
    siteName: "Moaz Haider SEO",
    images: [
      {
        url: "https://moazhaider.com/og-contact.jpg",
        width: 1200,
        height: 600,
        alt: "Contact Moaz Haider for SEO Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Moaz Haider – Free SEO Consultation",
    description: "Get expert SEO advice. 24-hour response time, no obligation.",
    images: ["https://moazhaider.com/og-contact.jpg"],
  },

  keywords: ["Contact Moaz Haider", "SEO Consultation", "Hire SEO Expert"],
};

export default function ContactPage() {
  // JSON-LD Schemas
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: "https://moazhaider.com/contact",
    name: "Contact Moaz Haider - SEO Expert",
    description:
      "Get in touch to discuss your SEO goals. Free consultation, no obligation.",
    mainEntity: {
      "@type": "Person",
      "@id": "https://moazhaider.com/#person",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://moazhaider.com/#organization",
    name: "Moaz Haider SEO Consulting",
    url: "https://moazhaider.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-SEO-EXPERT",
      contactType: "customer service",
      email: "contact@moazhaider.com",
      availableLanguage: ["English"],
      areaServed: ["Worldwide"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
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
        name: "Contact",
        item: "https://moazhaider.com/contact",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <ContactHero />

        {/* Contact Form Section */}
        <ContactForm />

        {/* Direct Contact Options */}
        <DirectContact />

        {/* What Happens Next */}
        <WhatHappensNext />

        {/* FAQ Section */}
        <ContactFAQ />

        {/* Free SEO Audit Form */}
        <FreeAuditForm />

        {/* Trust Reinforcement */}
        <TrustReinforcement />
      </main>
    </>
  );
}
