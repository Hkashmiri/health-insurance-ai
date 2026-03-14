import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How HealthGuard Works</h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              A unified AI assistant for insurance, appointments, and medication continuity.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Talk to the team
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Core flows</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">1. Insurance clarity</h3>
              <p className="text-sm text-gray-600">
                Compare plans, estimate out-of-pocket costs, and file claims in minutes.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">2. Appointment support</h3>
              <p className="text-sm text-gray-600">
                Schedule visits, record and transcribe consultations, and capture action items.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">3. Medication continuity</h3>
              <p className="text-sm text-gray-600">
                Track doses and automate renewals before you run out.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Privacy-first by design</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-semibold">•</span>
                Local processing for transcripts and summaries when possible.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-semibold">•</span>
                Encrypted storage for appointments and medications.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-semibold">•</span>
                Clear audit trail for automation actions.
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg">
            <div className="text-sm uppercase tracking-widest text-blue-600 mb-4">AI Workflow</div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="font-semibold">Listen</div>
                <div className="text-sm text-gray-600">Capture appointment audio securely.</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="font-semibold">Understand</div>
                <div className="text-sm text-gray-600">Summarize diagnosis, meds, follow-ups.</div>
              </div>
              <div className="bg-blue-600 text-white rounded-xl p-4">
                Act: schedule, renew, and remind without extra effort.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
