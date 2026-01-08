import { Palette, Shield, Shirt, Sparkles, Timer, Wind } from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Wash & Fold",
    description: "Expert washing, drying, and folding of your everyday clothes with care.",
    color: "sky",
  },
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    description: "Professional dry cleaning for delicate fabrics and formal wear.",
    color: "teal",
  },
  {
    icon: Wind,
    title: "Ironing & Pressing",
    description: "Crisp, wrinkle-free clothes ready to wear straight from the hanger.",
    color: "sky",
  },
  {
    icon: Palette,
    title: "Stain Removal",
    description: "Advanced stain treatment to restore your garments to perfection.",
    color: "teal",
  },
  {
    icon: Timer,
    title: "Express Service",
    description: "Need it fast? Same-day service available for urgent needs.",
    color: "sky",
  },
  {
    icon: Shield,
    title: "Premium Care",
    description: "Special handling for luxury items and designer clothing.",
    color: "teal",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything Your Clothes Need
          </h2>
          <p className="text-lg text-gray-600">
            From everyday laundry to special garment care, we handle it all with expertise and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  service.color === "sky"
                    ? "bg-sky-100"
                    : "bg-teal-100"
                }`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.color === "sky" ? "text-sky-500" : "text-teal-500"
                  }`}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
