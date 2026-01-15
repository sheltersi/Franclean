import { FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title:"Terms of Service - Franclean Laundry Service",
    description: "Read the terms and conditions for using Franclean laundry services."
} 


const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 mb-6">
              <FileText className="w-8 h-8 text-sky-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing or using Franclean services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-600 mb-4">
                Franclean provides professional laundry and dry cleaning services including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Wash and fold services</li>
                <li>Dry cleaning</li>
                <li>Ironing and pressing</li>
                <li>Stain removal treatment</li>
                <li>Express and same-day services</li>
                <li>Free pickup and delivery within service areas</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate and complete information when placing orders</li>
                <li>Ensure items are accessible for pickup at scheduled times</li>
                <li>Empty all pockets before submitting garments</li>
                <li>Disclose any special care requirements or fabric sensitivities</li>
                <li>Inspect items upon delivery and report any issues within 24 hours</li>
                <li>Maintain a safe environment for our pickup and delivery personnel</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Pricing and Payment</h2>
              <p className="text-gray-600 mb-4">
                All prices are listed on our website and are subject to change. Payment terms include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Payment is due upon delivery of cleaned items</li>
                <li>We accept major credit cards, debit cards, and digital payment methods</li>
                <li>Subscription customers are billed according to their selected plan</li>
                <li>Additional charges may apply for specialty items or stain removal</li>
                <li>Prices may vary based on item weight, quantity, or special requirements</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Pickup and Delivery</h2>
              <p className="text-gray-600 mb-4">Our pickup and delivery service operates under the following conditions:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We offer free pickup and delivery within our designated service areas</li>
                <li>Scheduled pickup times are estimates and may vary by up to 30 minutes</li>
                <li>Items not available at scheduled pickup time may result in rescheduling fees</li>
                <li>We are not responsible for items left unattended after delivery</li>
                <li>Delivery to secure buildings requires proper access arrangements</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Care and Liability</h2>
              <p className="text-gray-600 mb-4">
                While we take utmost care with your garments:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We follow manufacturer care labels and industry best practices</li>
                <li>We are not liable for damage due to defective materials, pre-existing damage, or improper care labels</li>
                <li>Maximum liability for lost or damaged items is limited to 10x the cleaning cost or fair market value, whichever is less</li>
                <li>Claims must be filed within 24 hours of delivery</li>
                <li>We recommend removing valuable items from pockets; we are not responsible for items left in pockets</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cancellation and Refunds</h2>
              <p className="text-gray-600 mb-4">Our cancellation policy:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Orders may be cancelled free of charge up to 2 hours before scheduled pickup</li>
                <li>Late cancellations may incur a service fee</li>
                <li>Refunds for unsatisfactory service will be evaluated on a case-by-case basis</li>
                <li>Subscription cancellations require 7 days notice before the next billing cycle</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Prohibited Items</h2>
              <p className="text-gray-600 mb-4">We do not accept the following items:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Items contaminated with hazardous materials</li>
                <li>Items with excessive pet hair (additional fees may apply)</li>
                <li>Items infested with pests</li>
                <li>Flammable or explosive materials</li>
                <li>Items requiring specialized medical or industrial cleaning</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Intellectual Property</h2>
              <p className="text-gray-600">
                All content on the Franclean website, including text, graphics, logos, and software, is the property of Franclean and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-600">
                These Terms of Service are governed by and construed in accordance with applicable laws. Any disputes arising from these terms or our services shall be resolved through arbitration or in the courts of our jurisdiction.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none text-gray-600 space-y-2">
                <li><strong>Email:</strong> legal@Franclean.com</li>
                <li><strong>Phone:</strong> (123) 456-7890</li>
                <li><strong>Address:</strong> 123 Clean Street, Laundry District, City 12345</li>
              </ul>
            </section>
          </div>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link href="/" className="text-sky-600 hover:text-sky-700 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

    </div>
  );
};

export default TermsOfService;
