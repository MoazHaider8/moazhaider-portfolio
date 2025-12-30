import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCountryData, getAllCountrySlugs } from "@/lib/countryData";
import { CheckCircle, Globe, TrendingUp, Users, Award, BookOpen } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getAllCountrySlugs();
  return slugs.map((slug) => ({ country: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const countryData = getCountryData(country);

  if (!countryData) {
    return {
      title: "Country Not Found",
    };
  }

  return {
    title: countryData.metaTitle,
    description: countryData.metaDescription,
    openGraph: {
      title: countryData.metaTitle,
      description: countryData.metaDescription,
      url: `https://moazhaider.com/${country}`,
      siteName: "Moaz Haider - Ecommerce SEO Expert",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: countryData.metaTitle,
      description: countryData.metaDescription,
    },
    alternates: {
      canonical: `https://moazhaider.com/${country}`,
    },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const data = getCountryData(country);

  if (!data) {
    notFound();
  }

  // Schema markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `https://moazhaider.com/${country}#service`,
        name: `Ecommerce SEO Services in ${data.name}`,
        description: data.metaDescription,
        provider: {
          "@type": "Person",
          name: "Moaz Haider",
          url: "https://moazhaider.com",
          jobTitle: "Ecommerce SEO Expert",
        },
        areaServed: {
          "@type": "Country",
          name: data.name,
        },
        serviceType: "Ecommerce SEO Consulting",
      },
      {
        "@type": "WebPage",
        "@id": `https://moazhaider.com/${country}#webpage`,
        url: `https://moazhaider.com/${country}`,
        name: data.metaTitle,
        description: data.metaDescription,
        isPartOf: {
          "@id": "https://moazhaider.com/#website",
        },
        about: {
          "@id": `https://moazhaider.com/${country}#service`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://moazhaider.com/${country}#breadcrumb`,
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
            name: "Ecommerce SEO",
            item: "https://moazhaider.com/services/ecommerce-seo",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: data.name,
            item: `https://moazhaider.com/${country}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://moazhaider.com/${country}#faq`,
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-purple-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services/ecommerce-seo" className="hover:text-purple-600">Ecommerce SEO</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{data.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            {data.h1}
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 max-w-4xl leading-relaxed">
            {data.introduction}
          </p>
        </div>
      </section>

      {/* Moaz Haider Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <Award className="w-10 h-10 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  #1 Ecommerce SEO Expert in {data.name} – Moaz Haider
                </h2>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>{data.moazProfile.intro}</p>
              <p>{data.moazProfile.experience}</p>
              <p>{data.moazProfile.results}</p>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Specialized Expertise
                </h3>
                <ul className="space-y-2">
                  {data.moazProfile.specializations.map((spec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>{data.moazProfile.whyChoose}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services/ecommerce-seo"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Explore Ecommerce SEO Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Schedule Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <Globe className="w-10 h-10 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  The {data.name} Ecommerce Landscape
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Market Size</h3>
                <p className="text-gray-700">{data.marketOverview.marketSize}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Growth Trends</h3>
                <p className="text-gray-700">{data.marketOverview.growthTrends}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Dominant Platforms</h3>
                <ul className="space-y-2">
                  {data.marketOverview.dominantPlatforms.map((platform, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      {platform}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Characteristics</h3>
                <p className="text-gray-700">{data.marketOverview.keyCharacteristics}</p>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Competitive Landscape</h3>
                <p className="text-gray-700">{data.marketOverview.competitiveLandscape}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Consumer Behavior</h3>
                <p className="text-gray-700">{data.marketOverview.consumerBehavior}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Regulatory Environment</h3>
                <p className="text-gray-700">{data.marketOverview.regulatory}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Experts */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <Users className="w-10 h-10 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Other Leading Ecommerce SEO Professionals in {data.name}
                </h2>
                <p className="text-gray-600">
                  Additional experts and consultants serving the {data.name} market
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {data.otherExperts.map((expert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 lg:p-8 rounded-lg border border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {expert.name} – {expert.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Location:</strong> {expert.location}
                  </p>

                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Specialization:</strong> {expert.specialization}
                    </p>
                    <p>
                      <strong>Experience:</strong> {expert.experience}
                    </p>
                    <p>
                      <strong>Approach:</strong> {expert.approach}
                    </p>
                    <p>
                      <strong>Best For:</strong> {expert.bestFor}
                    </p>
                    {expert.website && (
                      <p>
                        <a
                          href={expert.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-700 underline"
                        >
                          Visit Website →
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <TrendingUp className="w-10 h-10 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Ecommerce SEO Experts in Major {data.name} Cities
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  The {data.name}'s diverse ecommerce landscape means local market expertise
                  matters. Find specialized Ecommerce SEO consultants by city:
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${country}/${city.slug}`}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition mb-2">
                    {city.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{city.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Expert Stand Out */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What Makes an Ecommerce SEO Expert Stand Out
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>{data.whatMakesExpertStandOut}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing Consultant */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Choosing the Right Ecommerce SEO Consultant
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>{data.choosingConsultant}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <BookOpen className="w-10 h-10 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>

            <div className="space-y-8">
              {data.faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                    {faq.question}
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Get Expert Ecommerce SEO for Your {data.name} Brand
            </h2>
            <p className="text-lg lg:text-xl mb-8 text-purple-100">
              Ready to scale your online store with strategic organic growth? Let's discuss
              how proven Ecommerce SEO strategies can drive sustainable revenue for your
              business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition border-2 border-white"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
