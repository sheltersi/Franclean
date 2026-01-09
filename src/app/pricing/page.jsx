import PricingSection from "@/components/PricingSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata = {
  title: "Pricing - Franclean | Affordable Laundry Services",
  description:
    "View Franclean pricing for wash & fold, dry cleaning, and specialty services. Transparent pricing with no hidden fees.",
};

const Pricing = () => {
  const dryCleaningServices = [
    { service: "3 PC Suit", price: "R250" },
    { service: "2 PC Suit", price: "R220" },
    { service: "Jersey", price: "R120" },
    { service: "Evening Dress", price: "R220" },
    { service: "Leather Jacket", price: "R350" },
    { service: "Pencil Pleated Dress", price: "R200" },
    { service: "Leather Jacket", price: "R350" },
    { service: "Full Coat", price: "R300" },
    { service: "knee Length Coat", price: "R200" },
    { service: "Wedding Dress", price: "R1600" },
    { service: "Short Coat", price: "R150" },
    { service: "Pillow", price: "R80" },
    { service: "Jacket / Blazer", price: "R240" },
    { service: "Skirt", price: "R90" },
    { service: "Trousers", price: "R100" },
    { service: "Winter Coat", price: "R350" },
    { service: "Trench Coat/Overcoat", price: "R300" },
    { service: "Wind Breaker", price: "R240" },
  ];

  const beddingServices = [
    { service: "Blanket(Double)", price: "R200" },
    { service: "Blanket(Queen and King", price: "R250" },
    { service: "Comforters/Fleece(Double)", price: "R200" },
    { service: "Comforters/Fleece(Queen and King)", price: "R230" },
    { service: "Duvet Inners(Double)", price: "R250" },
    { service: "Duvet Inners(Double)", price: "R300" },
    { service: "Duvet Inner Feather Hallow (Double)", price: "R300" },
    { service: "Duvet Inner Feather Hallow (Queen and King)", price: "R350" },
    { service: "Mattress Protector (Double)", price: "R200" },
    { service: "Mattress Protector (Queen and King)", price: "R250" },
    { service: "Electric Blanket", price: "R400" },
  ];

  return (
    <>
      <main className="">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#8be4fb] via-[#e9f9ff] to-[#ffffff]">
          <div className="container mx-auto px-4 text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Simple, Honest
              <span className="text-gradient"> Pricing</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Quality laundry services at prices that make sense. No hidden
              fees, no surprises.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <PricingSection />

          {/* Bedding & Linen Care Individual Item Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Bedding & Linen Care
              </h2>
              <p className="text-gray-600">
                Individual item pricing for bedding & linen care services
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {beddingServices.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl border border-gray-100 p-4 hover:bg-gray-50 transition"
                  >
                    <span className="text-gray-700 font-medium">
                      <span className="text-lg pr-2">🧺</span>
                      {item.service}
                    </span>
                    {/* Flexible dotted divider */}
                    <div className="flex-1 mx-3 border-b border-dotted border-gray-500" />
                    <span className="text-gray-900 font-semibold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dry Cleaning Individual Item Pricing */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dry Cleaning Prices
              </h2>
              <p className="text-gray-600">
                Individual item pricing for dry cleaning services
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dryCleaningServices.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl border border-gray-100 p-4 hover:bg-gray-50 transition"
                  >
                    <span className="text-gray-700 font-medium">
                      <span className="text-lg pr-2">🧺</span>
                      {item.service}
                    </span>
                    {/* Flexible dotted divider */}
                    <div className="flex-1 mx-3 border-b border-dotted border-gray-500" />
                    <span className="text-gray-900 font-semibold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              First-time customers get 20% off their first order!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-sky-500 text-white font-semibold rounded-full hover:bg-sky-600 transition-colors"
            >
              Schedule Your Pickup
            </a>
          </div>
        </section>
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Pricing;
