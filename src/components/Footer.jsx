import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand.dark text-slate-300 mt-12">
      <div className="container py-8 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <h3 className="font-semibold text-white mb-2">ProGate Welding & Automation</h3>
          <p>Strong steel. Smart access. Welding, gate motors, remotes and garage doors.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/service-areas" className="hover:underline">Service Areas</Link></li>
            <li><Link href="/quote" className="hover:underline">Request a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Contact</h4>
          <p>Phone / WhatsApp: +27 XX XXX XXXX</p>
          <p>Email: info@example.com</p>
          <p>Johannesburg & surrounding areas</p>
        </div>
      </div>
      <div className="border-t border-slate-700 text-xs text-center py-3 text-slate-500">
        © {new Date().getFullYear()} ProGate Welding & Automation. All rights reserved.
      </div>
    </footer>
  );
}
