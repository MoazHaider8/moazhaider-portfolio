import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AboutHero from "@/components/about/AboutHero";
import PersonalStory from "@/components/about/PersonalStory";
import Philosophy from "@/components/about/Philosophy";
import Credentials from "@/components/about/Credentials";
import WorkingWithMe from "@/components/about/WorkingWithMe";
import Differentiators from "@/components/about/Differentiators";
import PersonalTouch from "@/components/about/PersonalTouch";
import FinalCTA from "@/components/about/FinalCTA";
import FreeAuditForm from "@/components/FreeAuditForm";

export const metadata: Metadata = {
  title: "About Moaz Haider – SEO Expert Driving Results Since 2015",
  description:
    "Meet Moaz Haider, an SEO expert specializing in data-driven strategies that deliver sustainable organic growth. Learn about his philosophy, credentials, and approach to SEO.",

  alternates: {
    canonical: "https://moazhaider.com/about",
  },

  openGraph: {
    title: "About Moaz Haider – SEO Expert & Consultant",
    description:
      "Discover how Moaz Haider helps businesses achieve sustainable SEO growth through strategic, data-driven optimization.",
    url: "https://moazhaider.com/about",
    siteName: "Moaz Haider SEO",
    images: [
      {
        url: "https://moazhaider.com/images/moaz-haider.jpg",
        width: 1200,
        height: 630,
        alt: "Moaz Haider - SEO Expert",
      },
    ],
    locale: "en_US",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Moaz Haider – SEO Expert",
    description:
      "Learn about Moaz Haider's approach to strategic SEO and organic growth.",
    images: ["https://moazhaider.com/images/moaz-haider.jpg"],
  },

  authors: [{ name: "Moaz Haider" }],
  keywords: ["Moaz Haider", "SEO Expert", "SEO Consultant", "About Moaz Haider"],
};

export default function AboutPage() {
  // JSON-LD Schemas
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://moazhaider.com/#person",
    name: "Moaz Haider",
    givenName: "Moaz",
    familyName: "Haider",
    url: "https://moazhaider.com",
    image: "https://moazhaider.com/images/moaz-haider.jpg",
    jobTitle: "SEO Expert & Consultant",
    description:
      "SEO Expert specializing in technical SEO, content strategy, and sustainable organic growth for businesses worldwide.",
    email: "contact@moazhaider.com",
    telephone: "+1-555-SEO-EXPERT",
    sameAs: [
      "https://www.linkedin.com/in/moazhaider",
      "https://twitter.com/moazhaider",
      "https://github.com/moazhaider",
    ],
    knowsAbout: [
      "SEO",
      "Technical SEO",
      "Content Strategy",
      "Link Building",
      "On-Page SEO",
      "Off-Page SEO",
    ],
    worksFor: {
      "@type": "ProfessionalService",
      "@id": "https://moazhaider.com/#organization",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://moazhaider.com/#organization",
    name: "Moaz Haider SEO Consulting",
    url: "https://moazhaider.com",
    logo: "https://moazhaider.com/logo.png",
    image: "https://moazhaider.com/images/moaz-haider.jpg",
    description:
      "Premium SEO consulting services delivering sustainable organic growth through strategic, data-driven optimization.",
    founder: {
      "@type": "Person",
      "@id": "https://moazhaider.com/#person",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-SEO-EXPERT",
      contactType: "customer service",
      email: "contact@moazhaider.com",
      availableLanguage: ["English"],
      areaServed: ["Worldwide"],
    },
    priceRange: "$$$",
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: "https://moazhaider.com/about",
    name: "About Moaz Haider - SEO Expert",
    description:
      "Learn about Moaz Haider's journey, philosophy, and approach to SEO consulting.",
    mainEntity: {
      "@id": "https://moazhaider.com/#person",
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
        name: "About",
        item: "https://moazhaider.com/about",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section with Photo */}
        <AboutHero />

        {/* Personal Story */}
        <PersonalStory />

        {/* Philosophy/Methodology */}
        <Philosophy />

        {/* Credentials & Authority */}
        <Credentials />

        {/* Working With Me */}
        <WorkingWithMe />

        {/* Differentiators */}
        <Differentiators />

        {/* Personal Touch */}
        <PersonalTouch />

        {/* Free SEO Audit Form */}
        <FreeAuditForm />

        {/* Final CTA */}
        <FinalCTA />
      </main>
    </>
  );
}
