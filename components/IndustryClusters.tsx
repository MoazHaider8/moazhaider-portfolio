import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/data";

export default function IndustryClusters() {
  // Group industries by cluster
  const clusters = industries.reduce((acc, industry) => {
    if (!acc[industry.cluster]) {
      acc[industry.cluster] = [];
    }
    acc[industry.cluster].push(industry);
    return acc;
  }, {} as Record<string, typeof industries>);

  const clusterColors: Record<string, { bg: string; border: string; text: string }> = {
    "Home Services": {
      bg: "bg-blue-50 dark:bg-gray-800",
      border: "border-blue-200 dark:border-gray-700",
      text: "text-blue-600 dark:text-blue-400",
    },
    Remodeling: {
      bg: "bg-purple-50 dark:bg-gray-800",
      border: "border-purple-200 dark:border-gray-700",
      text: "text-purple-600 dark:text-purple-400",
    },
    Restoration: {
      bg: "bg-red-50 dark:bg-gray-800",
      border: "border-red-200 dark:border-gray-700",
      text: "text-red-600 dark:text-red-400",
    },
    Professional: {
      bg: "bg-green-50 dark:bg-gray-800",
      border: "border-green-200 dark:border-gray-700",
      text: "text-green-600 dark:text-green-400",
    },
  };

  return (
    <section id="industries" className="py-20 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Industry SEO Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Specialized SEO strategies for 27+ industries. Each vertical requires unique topical authority approaches, competitive analysis, and intent mapping.
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(clusters).map(([clusterName, clusterIndustries]) => {
            const colors = clusterColors[clusterName] || clusterColors["Home Services"];
            
            return (
              <div key={clusterName}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {clusterName}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {clusterIndustries.map((industry) => (
                    <Link
                      key={industry.id}
                      href={industry.link}
                      className={`${colors.bg} ${colors.border} border rounded-lg p-4 hover:shadow-md transition-all hover:-translate-y-0.5 group`}
                    >
                      <h4 className={`font-semibold ${colors.text} mb-2 group-hover:underline`}>
                        {industry.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {industry.description}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                        <span>Related:</span>
                        <span className={`font-medium ${colors.text}`}>
                          {industry.relatedService}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Semantic Context */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            Industry-Specific SEO Approach
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Each industry requires a tailored SEO strategy. For example,{" "}
            <Link href="/industries/plumbing" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Plumbing SEO
            </Link>
            {" "}combines{" "}
            <Link href="/services/local-seo" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Local SEO
            </Link>
            {" "}with emergency-focused keywords, while{" "}
            <Link href="/industries/saas" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              SaaS SEO
            </Link>
            {" "}requires{" "}
            <Link href="/services/technical-seo" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Technical SEO
            </Link>
            {" "}and{" "}
            <Link href="/services/content-seo" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Content SEO
            </Link>
            {" "}to build thought leadership. Every campaign is grounded in competitive analysis, topical mapping, and semantic entity relationships.
          </p>
        </div>
      </div>
    </section>
  );
}
