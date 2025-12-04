import Section from "@/components/Section";

export const metadata = {
  title: "Contact | ProGate Welding & Automation",
};

export default function ContactPage() {
  return (
    <Section title="Contact Us">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3 text-sm text-slate-700">
          <p>Need help with your gate, remote, garage door or welding project? Get in touch.</p>
          <p>Phone / WhatsApp: +27 XX XXX XXXX</p>
          <p>Email: info@example.com</p>
          <p>Areas: Johannesburg and surrounding suburbs.</p>
          <p>Hours: Monday–Saturday, 8:00 – 18:00 (emergency call-outs by arrangement).</p>
        </div>
        <form className="card space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone / WhatsApp</label>
            <input
              type="tel"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email (optional)</label>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}
