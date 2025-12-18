import LayoutWrapper from "@/components/LayoutWrapper";
import ServicesHero from "@/components/services/ServicesHero";
import AllServicesSection from "@/components/services/AllServicesSection";
import DifferentiationSection from "@/components/services/DifferentiationSection";
import CountriesServed from "@/components/services/CountriesServed";
import CMSPlatforms from "@/components/services/CMSPlatforms";
import DeliveryProcess from "@/components/services/DeliveryProcess";
import IndustriesServed from "@/components/services/IndustriesServed";
import WhyChooseMe from "@/components/services/WhyChooseMe";
import WhySEOMatters from "@/components/services/WhySEOMatters";
import SEOSuccessStrategy from "@/components/services/SEOSuccessStrategy";
import ToolsStack from "@/components/services/ToolsStack";
import FinalCTA from "@/components/services/FinalCTA";
import FreeAuditForm from "@/components/FreeAuditForm";

export const metadata = {
  title: "Professional SEO Services | Moaz Haider - Expert SEO Consultant",
  description: "Comprehensive SEO services including Technical SEO, Local SEO, E-commerce SEO, Content SEO, Link Building and more. Drive organic growth with proven SEO strategies.",
  keywords: "SEO services, technical SEO, local SEO, ecommerce SEO, content SEO, link building, SEO consultant",
};

export default function ServicesPage() {
  // JSON-LD Schema for Services Page
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Professional SEO Services",
    "description": "Comprehensive SEO services for businesses looking to improve organic rankings and drive qualified traffic",
    "url": "https://moazhaider.com/services",
    "provider": {
      "@type": "Person",
      "name": "Moaz Haider",
      "jobTitle": "SEO Consultant",
      "url": "https://moazhaider.com"
    }
  };

  const offerCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "SEO Services Catalog",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technical SEO",
          "description": "Expert technical SEO services to improve site speed, crawlability, and Core Web Vitals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local SEO",
          "description": "Professional local SEO to dominate Google Maps and local search results"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-commerce SEO",
          "description": "Comprehensive e-commerce SEO to drive organic sales and product visibility"
        }
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offerCatalogSchema),
        }}
      />

      <LayoutWrapper>
        <ServicesHero />
        <AllServicesSection />
        <DifferentiationSection />
        <CountriesServed />
        <CMSPlatforms />
        <DeliveryProcess />
        <IndustriesServed />
        <WhyChooseMe />
        <WhySEOMatters />
        <SEOSuccessStrategy />
        <ToolsStack />
        <FreeAuditForm />
        <FinalCTA />
      </LayoutWrapper>
    </>
  );
}
