import LayoutWrapper from "@/components/LayoutWrapper";
import HeroWithAuditForm from "@/components/HeroWithAuditForm";
import TrustedBySection from "@/components/TrustedBySection";
import TopicalAuthority from "@/components/TopicalAuthority";
import ServicesShowcase from "@/components/ServicesShowcase";
import IndustryClusters from "@/components/IndustryClustersNew";
import PlatformsGrid from "@/components/PlatformsGridNew";
import CaseStudies from "@/components/CaseStudiesNew";
import ProcessWorkflow from "@/components/ProcessWorkflow";
import LocationsAccordion from "@/components/LocationsAccordionNew";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import ContactCTA from "@/components/ContactCTA";
import { generateAllSchemas, schemaToJsonLd } from "@/lib/schema";
import { faqs } from "@/lib/data";

export default function HomePage() {
  // Generate all schemas
  const schemas = generateAllSchemas(faqs);

  return (
    <>
      {/* JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: schemaToJsonLd(schemas.person),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: schemaToJsonLd(schemas.organization),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: schemaToJsonLd(schemas.website),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: schemaToJsonLd(schemas.webpage),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: schemaToJsonLd(schemas.breadcrumb),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: schemaToJsonLd(schemas.faq),
        }}
      />

      {/* Page Structure */}
      <LayoutWrapper>
        <HeroWithAuditForm />
        <TrustedBySection />
        <TopicalAuthority />
        <ServicesShowcase />
        <IndustryClusters />
        <PlatformsGrid />
        <CaseStudies />
        <ProcessWorkflow />
        <LocationsAccordion />
        <Testimonials />
        <FAQSection />
        <ContactCTA />
      </LayoutWrapper>
    </>
  );
}
