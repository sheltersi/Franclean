import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata = {
  title: "Services | ProGate Welding & Automation",
};

export default function ServicesPage() {
  return (
    <Section title="Our Services">
      <p className="mb-6 text-slate-600">
        We provide a full range of services for gates, gate motors, remotes, garage doors and custom
        welding projects.
      </p>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} {...service} />
        ))}
      </div>
    </Section>
  );
}
