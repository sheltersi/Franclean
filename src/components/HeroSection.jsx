import { ArrowRight, Clock, Sparkles, Truck } from "lucide-react";

import Bubble from "./Bubble";
import { WhatsAppButton } from "./WhatsAppButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0 bg-gradient-to-br from-gray-50 via-sky-50 to-teal-50">
      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Bubble size="sm" className="left-[10%] bottom-0" delay={0} duration={7} />
        <Bubble size="lg" className="left-[20%] bottom-0" delay={2} duration={9} />
        <Bubble size="md" className="left-[35%] bottom-0" delay={1} duration={8} />
        <Bubble size="xl" className="left-[50%] bottom-0" delay={3} duration={10} />
        <Bubble size="sm" className="left-[65%] bottom-0" delay={0.5} duration={6} />
        <Bubble size="md" className="left-[80%] bottom-0" delay={2.5} duration={8} />
        <Bubble size="lg" className="left-[90%] bottom-0" delay={1.5} duration={9} />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium animate-fade-in-up"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Premium Laundry Service</span>
            </div>

            {/* Headline */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              Fresh Clothes,{" "}
              <span className="text-gradient">Delivered</span>{" "}
              to Your Door
            </h1>

            {/* Description */}
            <p 
              className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              Professional laundry and dry cleaning service with free pickup and delivery. 
              Experience the convenience of perfectly clean clothes without the hassle.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-500 text-white font-semibold rounded-2xl hover:bg-sky-600 hover:scale-105 transition-all duration-300 shadow-bubble group">
                Schedule Pickup
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-700 bg-white/80 backdrop-blur-sm font-semibold rounded-2xl hover:border-sky-500 hover:text-sky-500 transition-all duration-300">
                View Pricing
              </button>
            </div>

            {/* Stats */}
            <div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200/50 animate-fade-in-up"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">24h</p>
                <p className="text-sm text-gray-500">Turnaround</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">5k+</p>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-500">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div 
            className="relative animate-fade-in-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src="/assets/hero/hero-laundry.jpg"
                alt="Professional laundry service with neatly folded clothes and fresh towels"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-card animate-float hidden md:flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-sky-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Fast Service</p>
                <p className="text-sm text-gray-500">Same day available</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-card animate-float hidden md:flex items-center gap-3" style={{ animationDelay: "1s" }}>
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                <Truck className="w-6 h-6 text-teal-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Free Delivery</p>
                <p className="text-sm text-gray-500">No extra charges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton/>
    </section>
  );
};

export default HeroSection;
