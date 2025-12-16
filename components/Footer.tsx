import Link from "next/link";
import { Mail, Phone, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function Footer() {
  const serviceLinks = [
    { name: "Technical SEO", href: "/services/technical-seo" },
    { name: "Local SEO", href: "/services/local-seo" },
    { name: "E-commerce SEO", href: "/services/ecommerce-seo" },
    { name: "Content SEO", href: "/services/content-seo" },
    { name: "Link Building", href: "/services/link-building" },
  ];

  const industryLinks = [
    { name: "HVAC", href: "/industries/hvac" },
    { name: "Plumbing", href: "/industries/plumbing" },
    { name: "Law Firm", href: "/industries/law-firm" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Real Estate", href: "/industries/real-estate" },
  ];

  const platformLinks = [
    { name: "WordPress SEO", href: "/platforms/wordpress" },
    { name: "Shopify SEO", href: "/platforms/shopify" },
    { name: "Webflow SEO", href: "/platforms/webflow" },
    { name: "Wix SEO", href: "/platforms/wix" },
  ];

  const locationLinks = [
    { name: "United States", href: "/locations/united-states" },
    { name: "United Kingdom", href: "/locations/united-kingdom" },
    { name: "Canada", href: "/locations/canada" },
    { name: "Australia", href: "/locations/australia" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Moaz Haider
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              SEO Expert specializing in Technical SEO, Local SEO, and E-commerce optimization.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Phone size={16} />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail size={16} />
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Industries
            </h3>
            <ul className="space-y-2">
              {industryLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Platforms
            </h3>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Locations
            </h3>
            <ul className="space-y-2">
              {locationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Moaz Haider. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={contactInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={contactInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter/X"
              >
                <Twitter size={20} />
              </a>
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
