import {
  ArrowRight,
  Briefcase,
  Check,
  Droplets,
  Home,
  Scissors,
  Shirt,
  Sparkles,
  Timer,
  View,
  Wind
} from "lucide-react";
import Link from "next/link";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "Wash & Fold",
      description: "Our signature service for everyday laundry. We wash, dry, and neatly fold your clothes using premium detergents and fabric softeners.",
      features: [
        "Sorted by color and fabric type",
        "Premium eco-friendly detergents",
        "Fabric softener included",
        "Neatly folded and packaged",
      ],
      price: "$2.50/lb",
      popular: true,
    },
    {
      icon: Sparkles,
      title: "Dry Cleaning",
      description: "Professional dry cleaning for delicate fabrics, suits, dresses, and formal wear. Expert care for your most precious garments.",
      features: [
        "Gentle on delicate fabrics",
        "Stain pre-treatment",
        "Hand-finished pressing",
        "Protective garment bags",
      ],
      price: "From $8.99",
      popular: false,
    },
    {
      icon: Wind,
      title: "Ironing & Pressing",
      description: "Crisp, wrinkle-free clothes ready for any occasion. Professional pressing that makes your garments look brand new.",
      features: [
        "Steam pressing technology",
        "Attention to collar and cuffs",
        "Button and seam inspection",
        "Hung or folded as preferred",
      ],
      price: "From $3.99",
      popular: false,
    },
    {
      icon: Droplets,
      title: "Stain Removal",
      description: "Specialized treatment for stubborn stains. Our experts use advanced techniques to tackle even the toughest marks.",
      features: [
        "Expert stain analysis",
        "Targeted treatment solutions",
        "Multiple treatment attempts",
        "Fabric-safe methods",
      ],
      price: "From $5.99",
      popular: false,
    },
    {
      icon: Timer,
      title: "Express Service",
      description: "Need it fast? Our express service delivers your clean laundry within hours. Perfect for busy professionals.",
      features: [
        "Same-day turnaround",
        "Priority processing",
        "Rush pickup available",
        "Text notifications",
      ],
      price: "$4.99/lb",
      popular: false,
    },
    {
      icon: Scissors,
      title: "Alterations & Repairs",
      description: "Minor alterations and repairs to keep your clothes fitting perfectly. From hem adjustments to button replacements.",
      features: [
        "Hem adjustments",
        "Button replacement",
        "Zipper repairs",
        "Seam repairs",
      ],
      price: "From $12.99",
      popular: false,
    },
  ];

  const specialtyServices = [
    {
      icon: Briefcase,
      title: "Commercial Services",
      description: "Tailored solutions for restaurants, hotels, salons, and other businesses requiring regular linen and uniform care.",
      link: "/contact",
    },
    {
      icon: Home,
      title: "Household Items",
      description: "Beyond clothing - we handle bedding, curtains, tablecloths, and other household textiles with expert care.",
      link: "/contact",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#8be4fb] via-[#e9f9ff] to-[#ffffff]
 ">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              From everyday laundry to specialized care, we offer comprehensive solutions for all your garment needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
             <Card
  key={index}
  className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
    service.popular
      ? '!border-2 !border-[#38AECC]'
      : 'border'
  }`}
>

                {service.popular && (
                  <div className="absolute top-0 right-0 bg-[#38AECC] text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-2xl bg-[#38AECC]/10 flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-[#38AECC]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                        <Check className="h-4 w-4 text-[#38AECC] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between py-4 border-t">
                    {/* <span className="text-2xl font-bold text-[#38AECC]">{service.price}</span> */}
                    <button className="bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 outline-red-50 rounded-lg">
                      <Link href="/pricing">Details</Link>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-[#EAF4FD]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Specialty Services</h2>
            <p className="text-gray-400 text-lg">
              Custom solutions for unique needs and business requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialtyServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-2xl bg-[#68edc6ff]/20 flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-[#68edc6ff]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <Button variant="outline" asChild>
                    <Link href={service.link}>
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-gray-400 text-lg">
              Getting your laundry done has never been easier. Just four simple steps.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Schedule", description: "Book a pickup time that works for you through our app or website." },
              { step: "2", title: "We Collect", description: "Our driver picks up your laundry from your doorstep." },
              { step: "3", title: "We Clean", description: "Your items are professionally cleaned with care and attention." },
              { step: "4", title: "We Deliver", description: "Fresh, clean laundry delivered back to you." },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="h-16 w-16 rounded-full bg-sky-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-sky-500" />
                )}
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-500">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-white text-lg mb-8">
              Schedule your first pickup today and experience the convenience of professional laundry care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-white hover:scale-105 transition-all duration-300">
                <Link href="/contact">
                  Schedule Pickup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <button className="flex outline py-2 px-6 rounded-lg outline-amber-50 text-white hover:bg-white/10 transition-all duration-300">
                 <View className="ml-2 h-4 w-4 mt-1 mr-1"  />
                <Link href="/pricing">View Pricing</Link>
              </button>
            </div>
           
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
};

export default Services;
