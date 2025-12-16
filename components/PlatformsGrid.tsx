import Link from "next/link";
import { platforms } from "@/lib/data";

export default function PlatformsGrid() {
  return (
    <section id="platforms" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Platform-Specific SEO
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Every CMS has unique technical constraints and SEO opportunities. I optimize for your platform's strengths while overcoming its limitations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <Link
              key={platform.id}
              href={platform.link}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:shadow-lg group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-lg mb-4 mx-auto group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-primary-700 dark:text-primary-300">
                  {platform.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {platform.name} SEO
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {platform.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            Why Platform Matters for SEO
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Different CMS platforms have varying levels of technical control, code cleanliness, and SEO flexibility. 
            {" "}<Link href="/platforms/wordpress" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">WordPress</Link> offers maximum plugin flexibility,
            {" "}<Link href="/platforms/shopify" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">Shopify</Link> excels for e-commerce but has URL limitations,
            {" "}<Link href="/platforms/webflow" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">Webflow</Link> provides clean code and visual control, while
            {" "}<Link href="/platforms/wix" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">Wix</Link> has improved significantly but requires platform-specific strategies. 
            I tailor technical implementations, schema markup, and performance optimizations to your specific CMS architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
