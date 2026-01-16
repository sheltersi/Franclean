"use client"

import { format } from "date-fns";
import { CalendarIcon, CheckCircle, Clock, MapPin, Package, Shield, Truck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const SchedulePickupClient = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [date, setDate] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    timeSlot: "",
    serviceType: "",
    specialInstructions: "",
  });

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 8:00 PM",
  ];

  const serviceTypes = [
    "Wash & Fold",
    "Dry Cleaning",
    "Ironing & Pressing",
    "Bedding & Linens",
    "Mixed Services",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pickup scheduled:", { ...formData, date });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
   
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Pickup Scheduled!</h1>
              <p className="text-gray-600 mb-2">
                Your pickup has been scheduled for:
              </p>
              <p className="text-xl font-semibold text-sky-600 mb-6">
                {date && format(date, "EEEE, MMMM do, yyyy")}
                <br />
                <span className="text-lg">{formData.timeSlot}</span>
              </p>
              <p className="text-gray-600 mb-8">
                We've sent a confirmation email to <span className="font-medium">{formData.email}</span>
              </p>
              <Link href="/">
                <Button variant="hero" size="lg" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-50">

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-6">
              <Truck className="w-4 h-4" />
              Free Pickup & Delivery
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Schedule Your <span className="text-sky-500">Pickup</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose a convenient time and we'll be there to collect your laundry. 
              It's that simple!
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: "Flexible Timing", desc: "Choose from 6 convenient time slots" },
                { icon: Truck, title: "Free Pickup", desc: "No extra charges for pickup & delivery" },
                { icon: Shield, title: "Insured Service", desc: "Your clothes are fully protected" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="pb-24 px-4">
          <div className="max-w-4xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                {/* Left Column - Date & Time */}
                <div className="p-8 md:p-10 bg-gradient-to-br from-sky-500 to-sky-600 text-white">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <CalendarIcon className="w-6 h-6" />
                    Select Date & Time
                  </h2>

                  {/* Calendar */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium mb-3 text-sky-100">
                      Pickup Date *
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white",
                            !date && "text-sky-200"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-sm font-medium mb-3 text-sky-100">
                      Preferred Time Slot *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, timeSlot: slot }))}
                          className={cn(
                            "px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                            formData.timeSlot === slot
                              ? "bg-white text-sky-600 shadow-lg"
                              : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Type */}
                  <div className="mt-8">
                    <label className="block text-sm font-medium mb-3 text-sky-100">
                      Service Type *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceTypes.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, serviceType: service }))}
                          className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                            formData.serviceType === service
                              ? "bg-white text-sky-600 shadow-lg"
                              : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                          )}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Info */}
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-sky-500" />
                    Pickup Details
                  </h2>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@email.com"
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pickup Address *
                      </label>
                      <Input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="123 Main Street, Apt 4B"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <Input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="New York"
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ZIP Code *
                        </label>
                        <Input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          placeholder="10001"
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Special Instructions
                      </label>
                      <textarea
                        name="specialInstructions"
                        value={formData.specialInstructions}
                        onChange={handleChange}
                        placeholder="Gate code, building instructions, or special requests..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full mt-8"
                    disabled={!date || !formData.timeSlot || !formData.serviceType}
                  >
                    <Package className="w-5 h-5 mr-2" />
                    Schedule Pickup
                  </Button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    By scheduling, you agree to our{" "}
                    <Link href="/terms-of-service" className="text-sky-600 hover:underline">
                      Terms of Service
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>

       
      </div>
    </>
  );
};

export default SchedulePickupClient;
