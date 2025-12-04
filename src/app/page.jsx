import Button from "@/components/Button";
import Header from "@/components/Header";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <>
    <div className="bg-red-500 text-white p-4">
  Tailwind Test
</div>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="flex-1">
            <p className="hero-kicker">Gates • Gate Motors • Garage Doors • Welding</p>
            <h1 className="hero-title">Professional Welding & Automation Services</h1>
            <p className="hero-subtitle">
              We install, repair and maintain gates, gate motors, remotes and garage doors –
              fast, reliable and affordable in Johannesburg and surrounding areas.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button href="/quote">Request a Quote</Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
            <ul className="text-sm text-slate-200 space-y-1">
              <li>• 10+ years experience</li>
              <li>• Mobile service – we come to you</li>
              <li>• Same-day emergency repairs when available</li>
            </ul>
          </div>

          <div className="flex-1">
            <div className="card bg-slate-900/40 border-slate-700 text-slate-100">
              <h3 className="text-lg font-semibold mb-2">Need urgent help?</h3>
              <p className="text-sm mb-4">
                Gate stuck open, remote not working or garage door jammed? Send us a WhatsApp with a
                photo and we’ll respond as soon as possible.
              </p>
              <a href="https://wa.me/27XXXXXXXXX" className="btn btn-primary text-sm">
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

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
