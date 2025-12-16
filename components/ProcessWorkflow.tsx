export default function ProcessWorkflow() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Goals",
      description:
        "Understand your business model, target audience, current performance, and revenue objectives to align SEO with business outcomes.",
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "02",
      title: "Technical Baseline",
      description:
        "Comprehensive technical audit covering crawlability, indexation, site architecture, Core Web Vitals, and mobile optimization.",
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "03",
      title: "Entity + Topical Map",
      description:
        "Build semantic entity relationships and topical authority plan based on competitive analysis and content gap identification.",
      color: "from-green-500 to-green-600",
    },
    {
      number: "04",
      title: "Content Engineering",
      description:
        "Create high-information-gain content that matches search intent across awareness, consideration, and decision stages.",
      color: "from-orange-500 to-orange-600",
    },
    {
      number: "05",
      title: "Authority Building",
      description:
        "Acquire high-quality backlinks through digital PR, strategic outreach, and relationship building with authoritative domains.",
      color: "from-red-500 to-red-600",
    },
    {
      number: "06",
      title: "Measurement & Iteration",
      description:
        "Continuous SERP monitoring, performance analysis, algorithm adaptation, and strategy refinement based on data feedback loops.",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Semantic SEO Workflow
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A systematic approach that mirrors how search engines understand and rank content through entity relationships and topical authority.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${step.color} text-white font-bold text-lg rounded-lg mb-4`}>
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Summary */}
        <div className="mt-12 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-primary-100 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Why This Process Works
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
            This methodology is grounded in semantic SEO principles—focusing on how search engines understand entities, relationships, and information gain rather than just keyword density. 
            By establishing technical health first, then building topical authority through entity-rich content, and finally acquiring authoritative signals through links, 
            we create sustainable rankings that withstand algorithm updates and drive continuous business growth.
          </p>
        </div>
      </div>
    </section>
  );
}
