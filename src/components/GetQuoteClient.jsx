"use client";

import {
  Calculator,
  CheckCircle,
  Clock,
  Send,
  Shirt,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";

/**
 * Option A: Estimate online, final price confirmed after pickup/weighing.
 * - Adds: suburb dropdown, pickup time window, turnaround, bagCount / estimatedKg, add-ons
 * - Conditional: item quantities when serviceType is ironing or dry-cleaning
 */

const GetQuoteClient = () => {
  const [formData, setFormData] = useState({
    // Personal
    name: "",
    email: "",
    phone: "",

    // Pickup
    suburb: "",
    addressLine1: "",
    addressLine2: "",
    pickupDate: "",
    pickupWindow: "",

    // Service
    serviceType: "",
    frequency: "",
    turnaround: "",

    // Load estimate (Option A: estimate, confirm after pickup)
    estimateBasis: "bags", // "bags" | "kg"
    bagCount: "",
    estimatedKg: "",

    // Add-ons (affect price/time)
    addOns: [],

    // Conditional item counts (for ironing/dry cleaning)
    items: {
      shirts: "",
      trousers: "",
      dresses: "",
      jackets: "",
      suits: "",
      bedding: "",
      other: "",
    },

    specialInstructions: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // You can replace this with your real service areas list.
  // Tip: keep it sorted and only include where you actually operate.
  const suburbs = useMemo(
    () => [
      "Bramley",
      "Norwood",
      "Highlands North",
      "Lyndhurst",
      "Waverley",
      "Savoy Estate",
      "Sandton",
      "Morningside",
      "Bryanston",
      "Illovo",
      "Rosebank",
      "Melrose",
      "Parkhurst",
      "Parkview",
      "Rivonia",
      "Sunninghill",
      "Lonehill",
    ],
    []
  );

  const serviceTypes = [
    { value: "wash-fold", label: "Wash & Fold" },
    { value: "wash-iron", label: "Wash & Ironing" },
    { value: "ironing", label: "Ironing & Pressing" },
    { value: "dry-cleaning", label: "Dry Cleaning" },
    { value: "alterations", label: "Alterations & Repairs" },
    { value: "mixed", label: "Mixed Services" },
  ];

  const frequencies = [
    { value: "one-time", label: "One-Time Service" },
    { value: "weekly", label: "Weekly" },
    { value: "bi-weekly", label: "Bi-Weekly" },
    { value: "monthly", label: "Monthly" },
  ];

  const pickupWindows = [
    { value: "morning", label: "Morning (08:00 - 12:00)" },
    { value: "afternoon", label: "Afternoon (12:00 - 16:00)" },
    { value: "evening", label: "Evening (16:00 - 19:00)" },
  ];

  const turnarounds = [
    { value: "standard", label: "Standard (24–48 hours)" },
    { value: "next-day", label: "Next Day" },
    { value: "same-day", label: "Same Day (where possible)" },
  ];

  const addOnOptions = [
    { value: "stain-treatment", label: "Stain treatment" },
    { value: "delicates", label: "Delicates / Handwash" },
    { value: "bedding", label: "Bedding (duvets, blankets, etc.)" },
    { value: "curtains", label: "Curtains" },
    { value: "fragrance-free", label: "Fragrance-free detergent" },
    { value: "hypoallergenic", label: "Hypoallergenic wash" },
    { value: "fold-hang", label: "Fold & hang (mixed)" },
  ];

  const needsItemBreakdown =
    formData.serviceType === "ironing" || formData.serviceType === "dry-cleaning";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      // Clear load fields when switching estimate basis
      if (name === "estimateBasis") {
        return {
          ...prev,
          estimateBasis: value,
          bagCount: value === "bags" ? prev.bagCount : "",
          estimatedKg: value === "kg" ? prev.estimatedKg : "",
        };
      }

      return { ...prev, [name]: value };
    });
  };

  const handleItemCountChange = (e) => {
    const { name, value } = e.target; // name like "shirts"
    setFormData((prev) => ({
      ...prev,
      items: { ...prev.items, [name]: value },
    }));
  };

  const toggleAddOn = (addOnValue) => {
    setFormData((prev) => {
      const has = prev.addOns.includes(addOnValue);
      return {
        ...prev,
        addOns: has
          ? prev.addOns.filter((x) => x !== addOnValue)
          : [...prev.addOns, addOnValue],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic guardrails for Option A
    const hasLoadEstimate =
      (formData.estimateBasis === "bags" && String(formData.bagCount).trim() !== "") ||
      (formData.estimateBasis === "kg" && String(formData.estimatedKg).trim() !== "");

    if (!hasLoadEstimate) {
      alert("Please provide an estimated load (bags or kg) so we can estimate.");
      return;
    }

    // In a real app, send to your backend here
    console.log("Quote request (Option A):", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="pt-24 lg:pt-32 pb-16 min-h-screen bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Request Received!
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Thanks for choosing Franclean. We’ll send you an <strong>estimate</strong>{" "}
              based on your details, then confirm the <strong>final price after pickup/weighing</strong>.
            </p>

            <div className="text-left bg-sky-50 border border-sky-100 rounded-2xl p-5 mb-8">
              <p className="text-sm text-gray-700">
                ✅ What happens next:
              </p>
              <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>We confirm pickup time + address</li>
                <li>We weigh/inspect on pickup (for accuracy)</li>
                <li>You approve the final amount before we proceed</li>
              </ul>
            </div>

            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              Estimate + Final Price Confirmed on Pickup
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get an <span className="text-sky-500">Accurate Quote</span>
            </h1>
            <p className="text-lg text-gray-600">
              We’ll estimate based on your details, then confirm the final amount after pickup/weighing.
              No surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-sky-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Fast Reply</h3>
                <p className="text-sm text-gray-500">Confirm pickup details</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shirt className="w-6 h-6 text-sky-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Accurate Pricing</h3>
                <p className="text-sm text-gray-500">Weigh & inspect on pickup</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-sky-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">You Approve First</h3>
                <p className="text-sm text-gray-500">Before we proceed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Fill in Your Details
            </h2>

            {/* Personal */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    placeholder="+27 81 000 0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Suburb / Area *
                  </label>
                  <select
                    name="suburb"
                    value={formData.suburb}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white"
                  >
                    <option value="">Select your suburb</option>
                    {suburbs.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Pickup */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                Pickup Details
              </h3>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address Line 1 *
                  </label>
                  <input
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    placeholder="House/Unit, Street"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address Line 2 (Optional)
                  </label>
                  <input
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    placeholder="Complex name, gate code, instructions"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Pickup Date
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pickup Time Window
                    </label>
                    <select
                      name="pickupWindow"
                      value={formData.pickupWindow}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white"
                    >
                      <option value="">Select a time window</option>
                      {pickupWindows.map((w) => (
                        <option key={w.value} value={w.value}>
                          {w.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Service */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                Service Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Frequency *
                  </label>
                  <select
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white"
                  >
                    <option value="">Select frequency</option>
                    {frequencies.map((f) => (
                      <option key={f.value} value={f.value}>
                        {f.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Turnaround *
                  </label>
                  <select
                    name="turnaround"
                    value={formData.turnaround}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white"
                  >
                    <option value="">Select turnaround</option>
                    {turnarounds.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-2">
                    Express options may cost more and depend on availability.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimate Based On *
                  </label>
                  <select
                    name="estimateBasis"
                    value={formData.estimateBasis}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white"
                  >
                    <option value="bags">Number of bags</option>
                    <option value="kg">Estimated weight (kg)</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-2">
                    Final price is confirmed after pickup/weighing.
                  </p>
                </div>
              </div>

              {/* Load estimate input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formData.estimateBasis === "bags" ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Bags *
                    </label>
                    <select
                      name="bagCount"
                      value={formData.bagCount}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white"
                    >
                      <option value="">Select</option>
                      <option value="1">1 bag</option>
                      <option value="2">2 bags</option>
                      <option value="3">3 bags</option>
                      <option value="4">4 bags</option>
                      <option value="5+">5+ bags</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-2">
                      Tip: one standard shopping bag is a helpful reference.
                    </p>
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Weight (kg) *
                    </label>
                    <input
                      type="number"
                      min="1"
                      step="0.5"
                      name="estimatedKg"
                      value={formData.estimatedKg}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      placeholder="e.g., 6.5"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      If unsure, choose bags instead—final price is confirmed after weighing.
                    </p>
                  </div>
                )}

                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Add-ons (Optional)
                  </label>

                  <div className="grid grid-cols-1 gap-2">
                    {addOnOptions.map((opt) => {
                      const checked = formData.addOns?.includes(opt.value) ?? false;
                      return (
                        <label
                          key={opt.value}
                          className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-gray-300 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleAddOn(opt.value)}
                            className="h-4 w-4"
                          />
                          <span className="text-sm text-gray-700">{opt.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Conditional item breakdown */}
              {needsItemBreakdown && (
                <div className="mt-10">
                  <h4 className="text-md font-semibold text-gray-900 mb-3">
                    Item Breakdown (helps accurate pricing)
                  </h4>
                  <p className="text-sm text-gray-600 mb-5">
                    If you’re not sure, estimate roughly — we’ll confirm on pickup.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      ["shirts", "Shirts"],
                      ["trousers", "Trousers / Jeans"],
                      ["dresses", "Dresses / Skirts"],
                      ["jackets", "Jackets / Blazers"],
                      ["suits", "Suits"],
                      ["bedding", "Bedding Items"],
                    ].map(([key, label]) => (
                      <div key={key}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {label}
                        </label>
                        <input
                          type="number"
                          min="0"
                          name={key}
                          value={formData.items[key]}
                          onChange={handleItemCountChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                          placeholder="0"
                        />
                      </div>
                    ))}

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Other Items (brief)
                      </label>
                      <input
                        type="text"
                        name="other"
                        value={formData.items.other}
                        onChange={handleItemCountChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                        placeholder="e.g., 2 hoodies, 1 coat"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Instructions */}
            <div className="mb-10">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Instructions or Questions
              </label>
              <textarea
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors resize-none"
                placeholder="Any stains, delicate items, fabric concerns, gate access, etc."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/20"
            >
              <Send className="w-5 h-5" />
              Request Estimate
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              We respect your privacy. Final pricing is confirmed after pickup/weighing and your approval.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default GetQuoteClient;
