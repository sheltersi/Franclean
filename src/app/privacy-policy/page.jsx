import { Shield } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title:"Privacy Policy - Franclean Laundry Service",
    description: "Learn how Franclean protects your privacy and handles your personal information."
}

const PrivacyPolicy = () => {


  return (
    <div className="min-h-screen bg-white">
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 mb-6">
              <Shield className="w-8 h-8 text-sky-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: January 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                At Franclean, we collect information to provide you with the best laundry service experience. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and delivery address when you create an account or place an order.</li>
                <li><strong>Payment Information:</strong> Credit card details and billing information processed securely through our payment providers.</li>
                <li><strong>Service Preferences:</strong> Your laundry preferences, special instructions, and order history.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website and services.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the collected information for:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Processing and fulfilling your laundry orders</li>
                <li>Communicating with you about your orders and our services</li>
                <li>Improving our services and customer experience</li>
                <li>Sending promotional offers and updates (with your consent)</li>
                <li>Ensuring the security of our platform</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Service Providers:</strong> Delivery partners and payment processors who help us operate our business.</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600">
                We implement industry-standard security measures to protect your personal information. This includes encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies</h2>
              <p className="text-gray-600">
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none text-gray-600 space-y-2">
                <li><strong>Email:</strong> privacy@franclean.com</li>
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

export default PrivacyPolicy;
