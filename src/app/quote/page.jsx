"use client";

import { useState } from "react";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-16 relative overflow-hidden">

      {/* Background abstract shapes */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            Get a Free Quote
          </h1>
          <p className="text-blue-700 mt-4 text-lg">
            We respond within 24 hours. Tell us how we can help you.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 border border-blue-100">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="block font-medium text-blue-900 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium text-blue-900 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium text-blue-900 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="block font-medium text-blue-900 mb-1">
                Service Type
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Gate Motor Installation</option>
                <option>Welding & Steel Work</option>
                <option>Electric Fencing</option>
                <option>Security Gate Fabrication</option>
                <option>Garage Door Motors</option>
                <option>Other Custom Work</option>
              </select>
            </div>

            {/* Upload Photo */}
            <div className="md:col-span-2">
              <label className="block font-medium text-blue-900 mb-1">
                Upload a Photo (optional)
              </label>
              <input
                type="file"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-blue-50/40"
              />
            </div>

            {/* Project Details */}
            <div className="md:col-span-2">
              <label className="block font-medium text-blue-900 mb-1">
                Project Details
              </label>
              <textarea
                rows="5"
                placeholder="Describe what you need done"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* BUTTON */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-4 text-white font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 transition-all text-lg shadow-md"
              >
                Get My Free Quote
              </button>
            </div>
          </form>
        </div>

        {/* TRUST BADGES */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          <div className="flex items-center justify-center gap-3">
            <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 text-3xl" />
            <p className="text-blue-900 font-medium">Over 150 Gates Installed</p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 text-3xl" />
            <p className="text-blue-900 font-medium">Fast, Same-Day Service</p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 text-3xl" />
            <p className="text-blue-900 font-medium">Professional Technicians</p>
          </div>

        </div>
      </div>
    </div>
  );
}
