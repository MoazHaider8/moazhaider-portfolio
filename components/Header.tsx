"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    if (stored) {
      setTheme(stored);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const services = [
    { name: "All Services", href: "/services" },
    { name: "Technical SEO", href: "/services/technical-seo" },
    { name: "Local SEO", href: "/services/local-seo" },
    { name: "E-commerce SEO", href: "/services/ecommerce-seo" },
    { name: "Content SEO", href: "/services/content-seo" },
    { name: "Link Building", href: "/services/link-building" },
    { name: "On-Page SEO", href: "/services/on-page-seo" },
    { name: "Off-Page SEO", href: "/services/off-page-seo" },
    { name: "SEO Audit", href: "/services/seo-audit" },
  ];

  const cmsPlatforms = [
    { name: "All CMS", href: "/cms" },
    { name: "WordPress SEO", href: "/cms/wordpress-seo" },
    { name: "Shopify SEO", href: "/cms/shopify-seo" },
    { name: "Wix SEO", href: "/cms/wix-seo" },
    { name: "Squarespace SEO", href: "/cms/squarespace-seo" },
    { name: "Webflow SEO", href: "/cms/webflow-seo" },
    { name: "Magento SEO", href: "/cms/magento-seo" },
    { name: "Drupal SEO", href: "/cms/drupal-seo" },
    { name: "Joomla SEO", href: "/cms/joomla-seo" },
  ];

  const industries = [
    { name: "All Industries", href: "/industries" },
    { name: "Appliance Repair", href: "/industries/appliance-repair-seo" },
    { name: "Carpet Cleaning", href: "/industries/carpet-cleaning-seo" },
    { name: "Gutter Installation & Maintenance", href: "/industries/gutter-installation-seo" },
    { name: "Plumbing Services", href: "/industries/plumbing-seo" },
    { name: "Siding Services", href: "/industries/siding-seo" },
    { name: "Bathroom Remodeling", href: "/industries/bathroom-remodeling-seo" },
    { name: "Dumpster Rental", href: "/industries/dumpster-rental-seo" },
    { name: "Home Security Systems", href: "/industries/home-security-seo" },
  ];

  const mainNav = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 glass backdrop-blur-xl border-b border-gray-200 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Moaz Haider
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-2">
            {mainNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors rounded-lg"
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors rounded-lg flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "services" && (
                <div className="absolute top-full left-0 mt-1 w-56 glass-card rounded-2xl shadow-2xl py-2 animate-slide-down">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CMS Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("cms")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors rounded-lg flex items-center gap-1">
                CMS
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "cms" && (
                <div className="absolute top-full left-0 mt-1 w-56 glass-card rounded-2xl shadow-2xl py-2 animate-slide-down">
                  {cmsPlatforms.map((platform) => (
                    <Link
                      key={platform.name}
                      href={platform.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {platform.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("industries")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors rounded-lg flex items-center gap-1">
                Industries
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "industries" && (
                <div className="absolute top-full left-0 mt-1 w-64 glass-card rounded-2xl shadow-2xl py-2 animate-slide-down max-h-96 overflow-y-auto">
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons & Theme Toggle */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            )}
            <Link
              href="#contact"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              Free SEO Audit
            </Link>
            <Link
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-x-2 lg:hidden">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            )}
            <button
              type="button"
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-white/10 py-4 animate-slide-down max-h-[80vh] overflow-y-auto">
            <div className="space-y-2">
              {mainNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Services */}
              <div className="pt-2 border-t border-gray-200 dark:border-white/10">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CMS */}
              <div className="pt-2 border-t border-gray-200 dark:border-white/10">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">CMS Platforms</div>
                {cmsPlatforms.map((platform) => (
                  <Link
                    key={platform.name}
                    href={platform.href}
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {platform.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Industries */}
              <div className="pt-2 border-t border-gray-200 dark:border-white/10">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Industries</div>
                {industries.map((industry) => (
                  <Link
                    key={industry.name}
                    href={industry.href}
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 space-y-2 border-t border-gray-200 dark:border-white/10">
                <Link
                  href="#contact"
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Free SEO Audit
                </Link>
                <Link
                  href="#contact"
                  className="block px-3 py-2 text-base font-semibold text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
