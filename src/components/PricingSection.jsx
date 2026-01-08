import { Check } from "lucide-react";
import Link from "next/link";

const PricingSection = () => {
  const plans = [
    {
      name: "Wash, Dry & Fold",
      price: "R45",
      unit: "/kg",
      description: "Perfect for everyday laundry needs",
      features: [
        "Wash & Fold Service",
        "48-Hour Turnaround",
        "Free Pickup & Delivery",
        "Eco-Friendly Detergent",
      ],
      popular: false,
    },
    {
      name: "Wash, Dry & Iron",
      price: "R50",
      unit: "/kg",
      description: "Our most popular choice for busy professionals",
      features: [
        "We wash, dry and iron for you.",
        "24-Hour Express Turnaround",
        "Stain Treatment Included",
        "Fabric Softener & Scent Options",
        "Folded & Organized by Type",
      ],
      popular: true,
    },
    {
      name: "Express / Same-Day Laundry",
      price: "R50",
      unit: "/kg",
      description: "Need your laundry urgently? Our express service delivers clean clothes the same day — ideal for emergencies and busy schedules.",
      features: [
        "Same-day or next-day turnaround",
        "Priority processing",
        "Wash, dry & fold or iron",
        "Perfect for last-minute needs"
      ],
      popular: false,
    },
       {
      name: "Delicates & Special Care",
      price: "R50",
      unit: "/kg",
      description: "Extra care for delicate garments that need gentle handling to maintain quality, softness, and longevity.",
      features: [
        "Hand-wash or gentle cycles",
        "Separate loads",
        "Low-heat or air-dry",
        "Baby clothes & delicate fabrics",
        "Extra fabric care attention"
      ],
      popular: false,
    },
     {
      name: "Ironing Only",
      price: "R40",
      unit: "/kg",
      description: "Let us handle the ironing while you save time. Perfect for freshly washed clothes that need a crisp, professional finish.",
      features: [
        "Professional pressing",
        "Shirts, trousers & uniforms",
        "Folded or hung neatly",
        "Ideal for home-washed clothes",

      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "ring-2 ring-sky-500 scale-105"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 mb-1">{plan.unit}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-sky-500" />
                    </div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
<Link href="/quote">
              <button
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-sky-500/30"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
              Get a quote
              </button></Link>
            </div>
          ))}
        </div>

          {/* <div className="flex justify-center my-20">
         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700">Bedding & Linen Care</h2>
          </div> */}
           
      </div>
    </section>
  );
};

export default PricingSection;
