export default function PricingSection() {
  const pricing = [
    {
      title: "Sliding Gates",
      price: "From R4,500",
      features: [
        "Custom sizes",
        "Modern or palisade designs",
        "Motor-ready frame",
        "Installation available",
      ],
    },
    {
      title: "Privacy Sheet Gates",
      price: "From R6,500",
      features: [
        "Solid steel sheet",
        "Premium modern look",
        "Laser-cut options available",
        "Strong & long-lasting",
      ],
    },
    {
      title: "Gate Motor Installation",
      price: "From R1,800",
      features: [
        "All major brands",
        "New installation or repairs",
        "Remote programming",
        "Safety checks included",
      ],
    },
    {
      title: "Burglar Bars",
      price: "From R350 per window",
      features: [
        "Custom sizes",
        "Strong steel build",
        "Modern or cottage-pane style",
        "Installation included",
      ],
    },
    {
      title: "Carports",
      price: "From R8,000",
      features: [
        "Steel frame",
        "IBR roof available",
        "Custom sizes",
        "Perfect for homes & businesses",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Pricing Guide
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricing.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-blue-600 font-bold text-3xl mb-4">
                {item.price}
              </p>

              <ul className="space-y-2 text-gray-600">
                {item.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
