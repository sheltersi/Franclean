import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-100">
      <div className="container flex items-center justify-between py-4 gap-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-brand.blue text-white flex items-center justify-center text-sm font-bold">
            PG
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-slate-900">ProGate</div>
            <div className="text-xs text-slate-500">Welding & Automation</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brand.blue transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="tel:+27XXXXXXXXX" className="btn btn-primary text-xs md:text-sm">
            Call / WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
