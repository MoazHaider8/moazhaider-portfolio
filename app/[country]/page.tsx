import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCountryData, getAllCountrySlugs } from "@/lib/countryData";
import CountryPageClient from "./CountryPageClient";

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

  return <CountryPageClient data={data} country={country} />;
}
