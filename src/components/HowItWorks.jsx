import { CalendarCheck, CheckCircle2, Package, Truck } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Schedule Pickup",
    description:
      "Book a convenient time slot for us to collect your laundry from your doorstep.",
  },
  {
    icon: Package,
    step: "02",
    title: "We Collect",
    description:
      "Our driver picks up your clothes in our eco-friendly bags at no extra cost.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Expert Cleaning",
    description:
      "Your items are professionally cleaned, pressed, and carefully packaged.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Free Delivery",
    description:
      "Fresh, clean clothes delivered back to you within 24-48 hours.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      style={{ backgroundColor: "#f4ffff" }}
      className="py-20 lg:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 text-sky-600 bg-sky-100"
            // style={{
            //   backgroundColor: "#90f3ff33", // soft aqua bg
            //   color: "#70d9f0", // text same as icon
            // }}
          >
            How It Works
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-600"
          >
            Simple as 1, 2, 3, 4
          </h2>
          <p
            className="text-lg"
            style={{ color: "#6b7280" }} // muted description
          >
            Getting your laundry done has never been easier. Just follow these
            simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-sky-600">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-12 left-[50%] w-[70%] h-0.5 bg-sky-200 border-dotted"
                
                />
              )}

              <div className="relative text-center lg:text-left">
                {/* Step number */}
                <div className="relative inline-flex mb-6">
                  <div
                    className="w-24 h-24 rounded-3xl flex items-center justify-center bg-sky-100"
                  >
                    <item.icon className="w-10 h-10" style={{ color: "text-sky-500" }} />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center text-white bg-sky-500"
                  >
                    {item.step.replace("0", "")}
                  </span>
                </div>

                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#1c1c1c" }}
                >
                  {item.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
