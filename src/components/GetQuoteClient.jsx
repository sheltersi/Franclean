"use client"

import { Calculator, CheckCircle, Clock, Send, Shirt, Sparkles } from "lucide-react";
import { useState } from "react";

const GetQuoteClient = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    items: "",
    frequency: "",
    pickupDate: "",
    address: "",
    specialInstructions: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTypes = [
    { value: "wash-fold", label: "Wash & Fold" },
    { value: "dry-cleaning", label: "Dry Cleaning" },
    { value: "ironing", label: "Ironing & Pressing" },
    { value: "alterations", label: "Alterations & Repairs" },
    { value: "mixed", label: "Mixed Services" },
  ];

  const frequencies = [
    { value: "one-time", label: "One-Time Service" },
    { value: "weekly", label: "Weekly" },
    { value: "bi-weekly", label: "Bi-Weekly" },
    { value: "monthly", label: "Monthly" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <main className="pt-24 lg:pt-32 pb-16 min-h-screen bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Quote Request Received!
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Thank you for your interest in FreshWash. Our team will review your 
                request and send you a personalized quote within 24 hours.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-sky-50 to-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-6">
                <Calculator className="w-4 h-4" />
                Free Estimate
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Get Your{" "}
                <span className="text-sky-500">Personalized Quote</span>
              </h1>
              <p className="text-lg text-gray-600">
                Tell us about your laundry needs and we'll provide you with a 
                customized quote. No obligation, completely free!
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Quick Response</h3>
                  <p className="text-sm text-gray-500">Within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shirt className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">All Services</h3>
                  <p className="text-sm text-gray-500">Tailored to your needs</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">No Obligation</h3>
                  <p className="text-sm text-gray-500">100% free estimate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Fill in Your Details
              </h2>

              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Pickup Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      placeholder="123 Main St, City"
                    />
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  Service Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      {serviceTypes.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="frequency"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Frequency *
                    </label>
                    <select
                      id="frequency"
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white"
                    >
                      <option value="">Select frequency</option>
                      {frequencies.map((freq) => (
                        <option key={freq.value} value={freq.value}>
                          {freq.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="items"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Estimated Items/Load
                    </label>
                    <input
                      type="text"
                      id="items"
                      name="items"
                      value={formData.items}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      placeholder="e.g., 2 bags, 15 items"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="pickupDate"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Preferred Pickup Date
                    </label>
                    <input
                      type="date"
                      id="pickupDate"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Special Instructions */}
              <div className="mb-8">
                <label
                  htmlFor="specialInstructions"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Special Instructions or Questions
                </label>
                <textarea
                  id="specialInstructions"
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors resize-none"
                  placeholder="Any special care instructions, fabric concerns, or questions..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/20"
              >
                <Send className="w-5 h-5" />
                Get My Free Quote
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          </div>
        </section>
      </main>

    </>
  );
};

export default GetQuoteClient;
