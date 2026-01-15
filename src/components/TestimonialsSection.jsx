import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Busy Professional",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Franclean has completely transformed my weekly routine. The pickup and delivery service is incredibly convenient, and my clothes always come back looking brand new!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "As a restaurant owner, we need our linens spotless every day. Franclean delivers exceptional quality and reliability. They've never let us down in over 2 years!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Working Mom",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Between work and kids, laundry was always piling up. Franclean gives me back precious time with my family. The quality is amazing and the prices are so reasonable!",
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50/50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
            Customer Love
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Join thousands of satisfied customers who trust Franclean with their laundry needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-sky-500" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-sky-100 group-hover:ring-sky-200 transition-all"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-sky-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm" />
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              4.9/5
            </div>
            <p className="text-gray-500 text-sm mt-1">Average Rating</p>
          </div>
          <div className="h-12 w-px bg-gray-200 hidden md:block" />
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              500+
            </div>
            <p className="text-gray-500 text-sm mt-1">Happy Customers</p>
          </div>
          <div className="h-12 w-px bg-gray-200 hidden md:block" />
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              1,000+
            </div>
            <p className="text-gray-500 text-sm mt-1">Orders Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
