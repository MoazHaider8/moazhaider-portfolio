"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { countries } from "@/lib/data";

export default function LocationsAccordion() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCountries, setExpandedCountries] = useState<string[]>([]);

  // Filter countries based on search
  const filteredCountries = countries.filter((country) => {
    const matchesCountry = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = country.cities.some((city) =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesCountry || matchesCity;
  });

  const toggleCountry = (countrySlug: string) => {
    setExpandedCountries((prev) =>
      prev.includes(countrySlug)
        ? prev.filter((slug) => slug !== countrySlug)
        : [...prev, countrySlug]
    );
  };

  return (
    <section id="locations" className="py-20 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            SEO Services Worldwide
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Providing localized SEO strategies across 80+ countries and hundreds of cities. 
            Every location has unique search behaviors, competition levels, and conversion patterns that require tailored approaches.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Find your country or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 transition-colors"
            />
          </div>
        </div>

        {/* Countries Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredCountries.map((country) => {
            const isExpanded = expandedCountries.includes(country.slug);
            
            return (
              <div
                key={country.slug}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                {/* Country Header */}
                <button
                  onClick={() => toggleCountry(country.slug)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {country.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      ({country.cities.length} cities)
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="text-gray-500" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500" size={20} />
                  )}
                </button>

                {/* Cities List */}
                {isExpanded && (
                  <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900 animate-slide-down">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                      {country.cities.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/locations/${country.slug}/${city.slug}`}
                          className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:underline transition-colors"
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredCountries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No countries or cities match your search. Try a different term.
            </p>
          </div>
        )}

        {/* Localization Explanation */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Why Location Matters for SEO
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Search engine results vary significantly by location due to different competition levels, search behaviors, language nuances, and user intent patterns. 
            A {" "}
            <Link href="/services/local-seo" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Local SEO
            </Link>
            {" "}strategy for{" "}
            <Link href="/locations/united-states/new-york" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              New York
            </Link>
            {" "}differs from{" "}
            <Link href="/locations/united-kingdom/london" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              London
            </Link>
            {" "}or{" "}
            <Link href="/locations/australia/sydney" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Sydney
            </Link>
            {" "}— each requires localized keyword research, competitive analysis, and conversion optimization tailored to that market.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            I adapt SEO strategies to your specific market, whether you need to dominate local map packs, rank internationally, or target multiple geo-locations simultaneously.
          </p>
        </div>

        {/* Additional Countries Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Serving clients in 80+ countries including all regions worldwide. Don't see your location?{" "}
            <Link href="#contact" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Contact me
            </Link>
            {" "}to discuss your market.
          </p>
        </div>
      </div>
    </section>
  );
}
