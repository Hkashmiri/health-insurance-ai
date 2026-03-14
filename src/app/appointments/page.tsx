import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import AppointmentDetailPanel from '@/components/appointments/AppointmentDetailPanel';

export default function AppointmentsPage() {
  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Smarter appointment scheduling that actually gets you seen
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                HealthGuard coordinates availability, preferences, and insurance rules to book
                the right appointment without the back-and-forth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Request Early Access
                </Link>
                <Link href="/how-it-works" className="border border-white/60 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="text-sm uppercase tracking-widest text-blue-100 mb-3">Appointment Request</div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-blue-100">Specialty</label>
                  <div className="mt-1 bg-white text-blue-900 rounded-lg px-4 py-3">Cardiology</div>
                </div>
                <div>
                  <label className="text-sm text-blue-100">Preferred Times</label>
                  <div className="mt-1 bg-white text-blue-900 rounded-lg px-4 py-3">Mon–Wed, 9am–1pm</div>
                </div>
                <div>
                  <label className="text-sm text-blue-100">Location</label>
                  <div className="mt-1 bg-white text-blue-900 rounded-lg px-4 py-3">Within 10 miles</div>
                </div>
                <div className="bg-blue-900/40 rounded-lg px-4 py-3 text-sm">
                  Matching providers in-network and opening a slot now.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">How appointment making works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">1. Tell us your need</h3>
              <p className="text-sm text-gray-600">
                Choose specialty, symptoms, and urgency. We align requirements with in-network rules.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">2. We coordinate options</h3>
              <p className="text-sm text-gray-600">
                HealthGuard checks provider availability, travel distance, and virtual visit options.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">3. You confirm</h3>
              <p className="text-sm text-gray-600">
                Review proposed slots, confirm with one tap, and get calendar + reminder sync.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Built for busy patients and caregivers</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-semibold">•</span>
                Multi-appointment scheduling for families and dependents.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-semibold">•</span>
                Smart intake questions to reduce paperwork time.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-semibold">•</span>
                Insurance-aware slot recommendations to avoid surprise costs.
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg">
            <div className="text-sm uppercase tracking-widest text-blue-600 mb-4">Upcoming</div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="font-semibold">Primary Care Checkup</div>
                <div className="text-sm text-gray-600">Tue, 10:30 AM • Downtown Clinic</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="font-semibold">Lab Results Follow-up</div>
                <div className="text-sm text-gray-600">Thu, 2:15 PM • Telehealth</div>
              </div>
              <div className="bg-blue-600 text-white rounded-xl p-4">
                Auto-reminders enabled with SMS, email, and in-app alerts.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Appointment Details</h2>
              <p className="text-sm text-gray-600">Capture summaries, translations, and action items.</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              Completed
            </span>
          </div>

          <AppointmentDetailPanel />
        </div>
      </div>

      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Let HealthGuard schedule your next visit</h2>
          <p className="text-lg mb-8">Get matched, book faster, and keep everything synced in one place.</p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Talk to the team
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
