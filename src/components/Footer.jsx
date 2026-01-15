"use client";

import {
  Droplet,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { footerLinks } from "@/data/footerLinks";
import { serviceAreas } from "@/data/serviceAreas";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 g-y-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <Droplet className="w-8 h-8 text-sky-500 fill-sky-200" />
              <span className="text-xl font-bold">
                Fran<span className="text-sky-500">Clean</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional laundry service with free pickup and delivery. Your
              clothes deserve the best care.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>

            <ul className="space-y-3">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-sky-500 transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Areas We Serve</h4>

            {(() => {
              const areas = (serviceAreas ?? [])
                .map((a) => (typeof a === "string" ? a : a?.name))
                .filter(Boolean);

              const INITIAL_COUNT = 16;
              const [expanded, setExpanded] = useState(false);

              const visibleAreas = expanded
                ? areas
                : areas.slice(0, INITIAL_COUNT);
              const remaining = areas.length - INITIAL_COUNT;

              return (
                <>
                  <div className="flex flex-wrap gap-2">
                    {visibleAreas.map((name) => (
                      <span
                        key={name}
                        className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition"
                      >
                        {name}
                      </span>
                    ))}

                    {!expanded && remaining > 0 && (
                      <button
                        onClick={() => setExpanded(true)}
                        className="text-xs px-2 py-1 rounded-full bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 transition"
                      >
                        + {remaining} more
                      </button>
                    )}
                  </div>

                  {expanded && remaining > 0 && (
                    <button
                      onClick={() => setExpanded(false)}
                      className="mt-3 text-xs text-sky-400 hover:text-sky-300 transition"
                    >
                      Show less
                    </button>
                  )}

                  <p className="mt-3 text-xs text-gray-500 leading-relaxed">
                    Free pickup & delivery in selected areas.
                  </p>
                </>
              );
            })()}
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  4 Heelra Road, Raumaraispark, Johannesburg 2090, South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-sky-500 transition-colors"
                >
                  081 071 3204
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <a
                  href="mailto:info@franclean.co.za"
                  className="text-gray-400 hover:text-sky-500 transition-colors"
                >
                  info@franclean.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Franclean. All rights reserved.{" "}
          </p>
          <p className="text-gray-500 hover:text-sky-500 transition-colors text-sm">
            Designed & Developed By{" "}
            <a
              href="https://sheltersibanda.com/"
              className="text-sky-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shelter
            </a>
          </p>

          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-sky-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-500 hover:text-sky-500 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
