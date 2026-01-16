import {
  Palette,
  Shield,
  Shirt,
  Sparkles,
  Timer,
  Wind,
} from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Wash & Fold",
    description:
      "Expert washing, drying, and folding of your everyday clothes with care.",
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    description:
      "Professional dry cleaning for delicate fabrics and formal wear.",
    color: "accent",
  },
  {
    icon: Wind,
    title: "Ironing & Pressing",
    description:
      "Crisp, wrinkle-free clothes ready to wear straight from the hanger.",
    color: "primary",
  },
  {
    icon: Palette,
    title: "Stain Removal",
    description:
      "Advanced stain treatment to restore your garments to perfection.",
    color: "accent",
  },
  {
    icon: Timer,
    title: "Express Service",
    description:
      "Need it fast? Same-day service available for urgent needs.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Premium Care",
    description:
      "Special handling for luxury items and designer clothing.",
    color: "accent",
  },
];

const ServicesSection = () => {
  return (
    <section
      // id="services"
      className="py-20 lg:py-32 bg-[#dffdffff]"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#90F3FF] text-sm text-green-900 font-medium mb-4">
  Our Services
</span>


          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 mt-4">
            Everything Your Clothes Need
          </h2>

          <p className="text-lg text-gray-500">
            From everyday laundry to special garment care, we handle it all with
            expertise and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group bg-[#ffffff] rounded-2xl p-6 lg:p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    service.color === "primary"
                      ? "bg-primary text-[#1c1c1c]"
                      : "bg-accent text-accent-foreground"
                  }`}
                >
  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-sky-100">
  <Icon className="w-6 h-6 text-sky-500" />
</div>

                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
