import Button from "@/components/Button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <>
      {/* HERO */}
    <Hero />

      {/* SERVICES */}
      <Section title="Our Services">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section title="What Our Clients Say">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="bg-slate-100" title="Ready to secure and automate your home?">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-700">
            Tell us what you need, send a quick photo of your gate or garage door, and we’ll send you
            a free quote.
          </p>
          <div className="flex gap-3">
            <Button href="/quote">Get a Free Quote</Button>
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
