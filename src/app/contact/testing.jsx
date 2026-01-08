import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "(555) 123-4567", href: "tel:+15551234567" },
    { icon: Mail, label: "Email", value: "hello@freshwash.com", href: "mailto:hello@freshwash.com" },
    { icon: MapPin, label: "Address", value: "123 Clean Street, Laundry City, LC 12345" },
    { icon: Clock, label: "Hours", value: "Mon-Sat: 7AM-9PM, Sun: 9AM-6PM" }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - FreshWash | Get in Touch</title>
        <meta name="description" content="Contact FreshWash for questions, scheduling, or feedback. We're here to help with all your laundry needs." />
      </Helmet>

      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-sky-50 to-cyan-50">
          <div className="container mx-auto px-4 text-center">
            <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Get in Touch
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Have a question or ready to schedule your first pickup? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone (optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-sky-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-gray-900 font-medium hover:text-sky-500 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                  <p className="text-gray-500">Map coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
