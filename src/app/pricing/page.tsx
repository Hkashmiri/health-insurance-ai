import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple pricing for modern care</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Transparent plans for individuals, families, and care teams.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Talk to sales
          </Link>
        </div>
      </div>

      <div className="py-16 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <p className="text-sm text-gray-600 mb-4">For individuals getting organized.</p>
              <div className="text-3xl font-bold mb-4">$19<span className="text-base font-normal text-gray-500">/mo</span></div>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li>Appointment notes + summaries</li>
                <li>Medication tracking</li>
                <li>Smart reminders</li>
              </ul>
              <Link href="/contact" className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Get started
              </Link>
            </div>

            <div className="bg-blue-600 text-white rounded-2xl p-6 shadow-lg scale-105">
              <h3 className="text-xl font-semibold mb-2">Family</h3>
              <p className="text-sm text-blue-100 mb-4">For households managing care together.</p>
              <div className="text-3xl font-bold mb-4">$39<span className="text-base font-normal text-blue-100">/mo</span></div>
              <ul className="text-sm space-y-2 mb-6">
                <li>Up to 5 family members</li>
                <li>Shared appointment scheduling</li>
                <li>Renewal automation agent</li>
              </ul>
              <Link href="/contact" className="block text-center bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                Choose Family
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-100">
              <h3 className="text-xl font-semibold mb-2">Care Team</h3>
              <p className="text-sm text-gray-600 mb-4">For clinics and concierge teams.</p>
              <div className="text-3xl font-bold mb-4">Custom</div>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li>Multi-patient workflows</li>
                <li>Advanced compliance reporting</li>
                <li>Dedicated success manager</li>
              </ul>
              <Link href="/contact" className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
