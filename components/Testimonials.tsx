import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: "1",
      name: "John Mitchell",
      role: "Owner, HVAC Company",
      location: "Austin, TX",
      content:
        "Moaz completely transformed our online presence. We went from invisible in local search to dominating the map pack. Our phone calls increased by 180% in just 6 months. His technical expertise and local SEO strategy delivered exactly what we needed.",
      rating: 5,
    },
    {
      id: "2",
      name: "Sarah Chen",
      role: "Marketing Director, E-commerce Fashion Brand",
      location: "London, UK",
      content:
        "Working with Moaz was a game-changer for our e-commerce site. He identified and fixed critical technical issues we didn't even know existed. Our organic revenue tripled, and our product pages now rank on page one for competitive keywords. Highly recommend!",
      rating: 5,
    },
    {
      id: "3",
      name: "Michael Rodriguez",
      role: "Managing Partner, Personal Injury Law Firm",
      location: "New York, NY",
      content:
        "Moaz's content strategy and semantic SEO approach helped us establish true topical authority in our practice areas. We're now winning featured snippets and ranking for high-value legal terms. The quality of leads has improved dramatically. Worth every penny.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Trusted by businesses across industries and locations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <Quote className="text-primary-600 dark:text-primary-400 mb-4" size={32} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="text-yellow-400 fill-yellow-400"
                    size={16}
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  📍 {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            ✓ Verified results available on request
          </p>
        </div>
      </div>
    </section>
  );
}
