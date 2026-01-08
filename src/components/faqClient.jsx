"use client"

import { ChevronDown } from "lucide-react";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the pickup and delivery service work?",
      answer: "Simply schedule a pickup through our website or app. We'll come to your door at the scheduled time, collect your laundry, clean it professionally, and return it fresh and folded. You can track your order status in real-time."
    },
    {
      question: "What are your turnaround times?",
      answer: "Our standard turnaround is 48 hours. Premium members get 24-hour turnaround, and we offer same-day service (for an additional fee) if you need it urgently. Pickup before 10 AM qualifies for next-day delivery."
    },
    {
      question: "How do you handle delicate items?",
      answer: "Delicate items are separated and treated with special care. We use gentle cycles, appropriate water temperatures, and specialized detergents. For very delicate items, we recommend our dry cleaning service."
    },
    {
      question: "What if something gets damaged or lost?",
      answer: "While rare, if an item is damaged or lost due to our error, we'll reimburse you based on the item current value. We photograph all items at intake for documentation."
    },
    {
      question: "Do you offer eco-friendly options?",
      answer: "Yes! We use eco-friendly, biodegradable detergents by default. Our dry cleaning uses environmentally responsible solvents. We also offer a green packaging option with reusable bags."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently serve only suburbs in Gauteng. Enter your zip code on our website to check if we deliver to your location. We're expanding to new areas regularly!"
    },
    {
      question: "How should I prepare my laundry for pickup?",
      answer: "Just put your items in any bag or basket – we'll provide a reusable Franclean bag on your first order. Please remove items from pockets and separate any items needing special care. Include a note if you have specific instructions."
    },
    {
      question: "Can I specify my detergent preferences?",
      answer: "Absolutely! You can choose from several detergent options including unscented/hypoallergenic, various scents, or bring your own detergent. Just update your preferences in your account settings."
    },
    {
      question: "How do I pay for services?",
      answer: "We accept all major credit cards and digital payment methods. Your card is charged after your order is complete and you've received your items. Business accounts can set up monthly invoicing."
    },
    {
      question: "What's your cancellation policy?",
      answer: "You can cancel or reschedule a pickup up to 2 hours before your scheduled time at no charge. Cancellations within 2 hours may incur a small fee. Monthly subscriptions can be paused or cancelled anytime."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <main className="pt-0">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#8be4fb] via-[#e9f9ff] to-[#ffffff]">
          <div className="container mx-auto px-4 text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Frequently Asked 
              <span className="text-gradient"> Questions</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Got questions? We've got answers. Find everything you need to know about our services.
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        {/* <section className="py-20 bg-blue-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-8">Can't find what you're looking for? We're here to help.</p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-sky-500 text-white font-semibold rounded-full hover:bg-sky-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section> */}

         {/* Contact CTA */}
      <section className="py-20 bg-deep-sky-blue-50">
        <div className="container">
          <Card className="border-0 shadow-lg max-w-4xl mx-auto bg-white">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-deep-sky-blue-50 flex items-center justify-center mb-6">
                    <MessageCircle className="h-7 w-7 text-deep-sky-blue-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-coffee-bean-500">
                    Still Have Questions?
                  </h2>
                  <p className="text-coffee-bean-300 mb-6">
                    Our customer service team is here to help. Reach out and we'll get back to you within 24 hours.
                  </p>
                     <a
              href="/contact"
              className=" px-4 py-3 bg-sky-500 text-white font-semibold rounded-full hover:bg-sky-600 flex justify-center"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 mt-1"  />
            </a>
                </div>
                <div className="space-y-4 text-center md:text-right">
                  <div>
                    <p className="text-sm text-coffee-bean-300">Email us at</p>
                    <p className="text-lg font-semibold text-coffee-been-500">info@franclean.co.za</p>
                  </div>
                  <div>
                    <p className="text-sm text-coffee-bean-300">Or call us</p>
                    <p className="text-lg font-semibold text-coffee-been-500">081 071 3204</p>
                  </div>
                  <div>
                    <p className="text-sm text-coffee-bean-300">Available</p>
                    <p className="text-lg font-semibold text-coffee-been-500">Mon-Sat, 8AM-6PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
};

export default FAQ;
