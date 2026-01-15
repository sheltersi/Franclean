import { Calendar, Package, Sparkles, Truck } from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata ={
title: "How It Works - Franclean | Easy Laundry Pickup & Delivery",
description: "Learn how Franclean makes laundry effortless. Schedule, we pickup, clean professionally, and deliver fresh clothes to your door."
}

const HowItWorksPage = () => {
  const steps = [
    {
      icon: Calendar,
      step: "01",
      title: "Schedule Your Pickup",
      description: "Choose a convenient time for us to collect your laundry. You can schedule online or through our app in seconds.",
      details: [
        "Select your preferred date and time slot",
        "Choose from morning, afternoon, or evening windows",
        "Get confirmation via text and email",
        "Reschedule anytime up to 2 hours before"
      ]
    },
    {
      icon: Truck,
      step: "02",
      title: "We Pick Up Your Laundry",
      description: "Our friendly driver arrives at your door. Simply hand over your laundry bag – we'll take it from there.",
      details: [
        "Contactless pickup available",
        "Free reusable laundry bag on first order",
        "Real-time driver tracking",
        "Leave outside option for convenience"
      ]
    },
    {
      icon: Sparkles,
      step: "03",
      title: "Professional Cleaning",
      description: "Your clothes are sorted, washed, and treated with expert care using premium eco-friendly products.",
      details: [
        "Sorted by color, fabric, and care instructions",
        "Temperature-appropriate wash cycles",
        "Stain treatment included",
        "Quality inspection before delivery"
      ]
    },
    {
      icon: Package,
      step: "04",
      title: "Delivery to Your Door",
      description: "Fresh, clean, and perfectly folded – your laundry returns ready to put away.",
      details: [
        "Neatly folded or hung on hangers",
        "Wrapped in protective packaging",
        "Delivered at your chosen time",
        "Photo confirmation of delivery"
      ]
    }
  ];

  return (
    <>
      <main className="">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#8be4fb] via-[#e9f9ff] to-[#ffffff]">
          <div className="container mx-auto px-4 text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Laundry Made 
              <span className="text-gradient"> Simple</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Four easy steps to fresh, clean clothes without lifting a finger. Here's how we make laundry day disappear.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-start ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon & Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 bg-sky-100 rounded-2xl flex items-center justify-center">
                        <step.icon className="w-10 h-10 text-sky-500" />
                      </div>
                      <span className="absolute -top-3 -right-3 w-8 h-8 bg-sky-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h2>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-500">
                          <span className="w-1.5 h-1.5 bg-sky-400 rounded-full flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Visual */}
        <section className="py-20 bg-sky-500">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Typical Timeline</h2>
              <p className="text-sky-100">From pickup to delivery – here's what to expect</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center flex-1">
                <p className="text-sky-100 text-sm mb-1">Morning</p>
                <p className="text-white font-bold text-lg">Pickup</p>
              </div>
              <div className="hidden md:block text-white text-2xl">→</div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center flex-1">
                <p className="text-sky-100 text-sm mb-1">Same Day</p>
                <p className="text-white font-bold text-lg">Processing</p>
              </div>
              <div className="hidden md:block text-white text-2xl">→</div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center flex-1">
                <p className="text-sky-100 text-sm mb-1">Next Day</p>
                <p className="text-white font-bold text-lg">Quality Check</p>
              </div>
              <div className="hidden md:block text-white text-2xl">→</div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center flex-1">
                <p className="text-sky-100 text-sm mb-1">Day 2</p>
                <p className="text-white font-bold text-lg">Delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Try It?</h2>
            <p className="text-gray-600 mb-8">Schedule your first pickup and see how easy laundry can be.</p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-sky-500 text-white font-semibold rounded-full hover:bg-sky-600 transition-colors"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>

      <WhatsAppButton />
    </>
  );
};

export default HowItWorksPage;
