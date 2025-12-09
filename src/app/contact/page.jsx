"use client";

import ServicesMap from "@/components/ServicesAreaMap";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-16 relative overflow-hidden">

      {/* Background abstract shapes */}
      <div className="absolute top-10 left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            Contact Us
          </h1>
          <p className="text-blue-700 mt-4 text-lg">
            We're here to help. Reach out anytime.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* CONTACT INFORMATION BOX */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Get in Touch</h2>

            <div className="space-y-6">

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Phone Number</p>
                  <p className="text-blue-700">+27 68 000 0000</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Email Address</p>
                  <p className="text-blue-700">info@yourbusiness.co.za</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Our Location</p>
                  <p className="text-blue-700">Johannesburg, South Africa</p>
                </div>
              </div>

            </div>

            {/* Small Message */}
            <p className="text-blue-700 text-sm mt-10">
              Our team replies within 1–12 hours. For urgent help, please call us directly.
            </p>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Send Us a Message</h2>

            <form className="space-y-5">

              {/* Name */}
              <div>
                <label className="block font-medium text-blue-900 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium text-blue-900 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium text-blue-900 mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-medium text-blue-900 mb-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
            Our Service Area
          </h2>

          <ServicesMap />

          <div className="w-full h-64 bg-blue-200/30 rounded-2xl border border-blue-100 flex items-center justify-center text-blue-700">
            {/* Placeholder map — you can embed Google Maps here */}
    
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.3293493002298!2d28.076554675636654!3d-26.12080237712807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950d3c9da215d9%3A0xf23027d64f85a7ac!2s4%20Heelra%20Rd%2C%20Raumaraispark%2C%20Johannesburg%2C%202090!5e0!3m2!1sen!2sza!4v1765031112834!5m2!1sen!2sza" 
className="w-full h-64"
style={{ "border":0, }}
allowFullScreen="" 
loading="lazy" 
referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
