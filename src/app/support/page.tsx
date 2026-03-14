import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support</h1>
          <p className="text-lg md:text-xl opacity-90">
            We are here to help with onboarding, troubleshooting, and account questions.
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-50 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">Get in touch</h2>
            <p className="text-sm text-gray-600 mb-4">
              For urgent issues or product feedback, reach out and we will respond within one business day.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Contact Support
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">Helpful resources</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Product onboarding and setup checklist</li>
              <li>Appointment recording best practices</li>
              <li>Medication renewal troubleshooting</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">Policies</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
