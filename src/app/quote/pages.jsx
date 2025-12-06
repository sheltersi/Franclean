import Section from "@/components/Section";

export const metadata = {
  title: "Request a Quote | ProGate Welding & Automation",
};

export default function QuotePage() {
  return (
    <Section title="Request a Free Quote">
      <p className="mb-6 text-sm text-slate-700">
        Fill in the form below and, if possible, send us photos of your gate, motor, garage door or
        welding project via WhatsApp so we can give a more accurate estimate.
      </p>
      <form className="card space-y-4 max-w-2xl">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone / WhatsApp</label>
            <input
              type="tel"
              required
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email (optional)</label>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Area / Suburb</label>
            <input
              type="text"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Type of Service</label>
          <select className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
            <option>Gate motor installation / repair</option>
            <option>Remote coding</option>
            <option>Garage door installation / repair</option>
            <option>Welding / steelwork</option>
            <option>Maintenance / other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Describe the problem or project</label>
          <textarea
            rows={4}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Request
        </button>
      </form>
    </Section>
  );
}
