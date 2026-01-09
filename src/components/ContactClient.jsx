"use client"

import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";

const ContactClient = () => {

  const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
  
    async function handleSubmit(e) {
      e.preventDefault();
  
      if (loading) return;
  
      const form = e.target;
      const formData = new FormData(form);
  
      const payload = {
        name: formData.get("name")?.trim(),
        email: formData.get("email")?.trim(),
        phone: formData.get("phone")?.trim(),
        message: formData.get("message")?.trim(),
      };
  
      
  
      // -----------------------
      // CLIENT-SIDE VALIDATION
      // -----------------------
  
      if (
        !payload.name ||
        !payload.email ||
        !payload.message
      ) {
        Swal.fire({
          icon: "warning",
          title: "Missing information",
          text: "Please fill in all required fields.",
        });
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(payload.email)) {
        Swal.fire({
          icon: "error",
          title: "Invalid email",
          text: "Please enter a valid email address.",
        });
        return;
      }
  
      try {
        setLoading(true);
  
        // -----------------------
        // SAVE TO SUPABASE
        // -----------------------
        const { error } = await supabase
          .from("contact_requests")
          .insert([payload]);
  
        if (error) {
          throw new Error("Database error");
        }
  
        // -----------------------
        // SEND EMAIL (SERVER)
        // -----------------------
        const emailRes = await fetch("/api/send-contact-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
  
        if (!emailRes.ok) {
          throw new Error("Email failed");
        }
  
        // -----------------------
        // SUCCESS FEEDBACK
        // -----------------------
        // Swal.fire({
        //   icon: "success",
        //   title: "Message sent!",
        //   text: "Thank you for contacting us. We’ll get back to you shortly.",
        //   confirmButtonColor: "#2563eb",
        // });
  
        Swal.fire({
          icon: "success",
          title: "Message sent!",
          text: "Would you like to continue on WhatsApp?",
          showCancelButton: true,
          confirmButtonText: "Open WhatsApp",
          confirmButtonColor: "#104911",
          cancelButtonText: "Close",
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(
              `https://wa.me/27810713204?text=Hi%20Fraclean%20Laundry%20Team,%20I%20just%20sent%20a%20message`,
              "_blank"
            );
          }
        });
  
        form.reset();
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Please try again later or contact us directly.",
        });
      } finally {
        setLoading(false);
      }
    }
  
  return (
<>
           {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#8be4fb] via-[#e9f9ff] to-[#ffffff]">

        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-700">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-[#627384] leading-relaxed">
              Have questions or ready to schedule your first pickup? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

    <section
      id="contact"
      className="pt-20 lg:pt-32"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        {/* <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: "#e6feff", color: "#0f172a" }}
          >
            Contact Us
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4">
            Let’s Talk Laundry
          </h2>

          <p className="text-lg text-[#64748b]">
            Have questions or ready to schedule a pickup? We’re here to help.
          </p>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: CONTACT INFO */}
          <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

            {/* Info Card */}
            <div
              className="flex items-start gap-4 p-6 rounded-2xl shadow-lg"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#e6feff" }}
              >
                <Phone className="w-6 h-6" style={{ color: "#70d9f0" }} />
              </div>
              <div>
                <p className="font-semibold text-[#0f172a]">Phone</p>
                <p className="text-sm text-[#64748b]">081 071 3204</p>
              </div>
            </div>

            <div
              className="flex items-start gap-4 p-6 rounded-2xl shadow-lg"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#e6feff" }}
              >
                <Mail className="w-6 h-6" style={{ color: "#70d9f0" }} />
              </div>
              <div>
                <p className="font-semibold text-[#0f172a]">Email</p>
                <p className="text-sm text-[#64748b]">info@franclean.co.za</p>
              </div>
            </div>

            <div
              className="flex items-start gap-4 p-6 rounded-2xl shadow-lg"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#e6feff" }}
              >
                <MapPin className="w-6 h-6" style={{ color: "#70d9f0" }} />
              </div>
              <div>
                <p className="font-semibold text-[#0f172a]">Location</p>
                <p className="text-sm text-[#64748b]">
                  4 Heelra Road, Bramley Park, Sandton, South Africa
                </p>
              </div>
            </div>
             <div
              className="flex items-start gap-4 p-6 rounded-2xl shadow-lg"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#e6feff" }}
              >
                <Clock className="w-6 h-6" style={{ color: "#70d9f0" }} />
              </div>
              <div>
                <p className="font-semibold text-[#0f172a]">Hours</p>
                <p className="text-sm text-[#64748b]">
                "Mon-Sat: 8AM-6PM, Sun: 9AM-6PM"
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div
            className="p-8 rounded-3xl shadow-lg"
            style={{ backgroundColor: "#ffffff" }}
          >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border outline-none"
                  style={{ borderColor: "#e5e7eb" }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border outline-none"
                  style={{ borderColor: "#e5e7eb" }}
                />
              </div>
                <div className="">
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Phone (optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border outline-none"
                      placeholder="(555) 123-4567"
                      style={{ borderColor: "#e5e7eb" }}
                    />
                  </div>

              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border outline-none resize-none"
                  style={{ borderColor: "#e5e7eb" }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition
                ${
                loading
                ? "bg-mint-leaf-500 cursor-not-allowed"
                : "bg-sky-500 hover:bg-sky-700"
                }
                text-white
                `}
              >
                {loading? "Sending" : "Send Message"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      
      {/* Map Section */}
      <section className="mt-20 py-20 bg-[#F2F4F6]/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700">Find Us</h2>
            <p className="text-[#627384] text-lg">
              Conveniently located in the heart Bramley.
            </p>
          </div>
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="aspect-[21/9] bg-gradient-to-br from-[#0EA5E9]/10 to-[#27AA83]/10 flex items-center justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.3293493002298!2d28.076554675636654!3d-26.12080237712807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950d3c9da215d9%3A0xf23027d64f85a7ac!2s4%20Heelra%20Rd%2C%20Raumaraispark%2C%20Johannesburg%2C%202090!5e0!3m2!1sen!2sza!4v1767602569056!5m2!1sen!2sza" 
              className="w-full h-full"
              style={{ border:0}}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"></iframe>
        
            </div>
          </Card>
        </div>
      </section>
  </div>
       {/* Quick Contact */}
      <section className="py-20 mb-0 bg-cyan-glow-200">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Experience Fresh, Clean Laundry?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Schedule your first pickup today. New customers get 20% off their first order!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="py-3 px-8 rounded-2xl bg-aquamarine-500 hover:bg-aquamarine-700 flex justify-center hover:text-white">
                <Phone className="mr-2 h-4 w-4 mt-1" />
                081 071 3204 
              </button>
              <button className=" py-3 px-8 rounded-2xl border-white bg-cyan-glow-500 hover:bg-cyan-glow-700 hover:text-white flex">
                <Mail className="mr-2 h-4 w-4 mt-1" />
                info@franclean.co.za
              </button>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppButton/>
    </section>
    <WhatsAppButton />
    </>
  );
};

export default ContactClient;
