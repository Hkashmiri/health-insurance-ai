import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function RenewalsPage() {
  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Medication renewals that stay ahead of your schedule
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Track dosages, pill counts, and auto-initiate renewals before you run out.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Join the beta
                </Link>
                <Link href="/pricing" className="border border-white/60 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                  View pricing
                </Link>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="text-sm uppercase tracking-widest text-blue-100 mb-3">Medication Snapshot</div>
              <div className="space-y-4">
                <div className="bg-white text-blue-900 rounded-lg px-4 py-3">
                  <div className="font-semibold">Atorvastatin 20mg</div>
                  <div className="text-sm">14 pills remaining • 2/day</div>
                </div>
                <div className="bg-white text-blue-900 rounded-lg px-4 py-3">
                  <div className="font-semibold">Metformin 500mg</div>
                  <div className="text-sm">7 pills remaining • 1/day</div>
                </div>
                <div className="bg-blue-900/40 rounded-lg px-4 py-3 text-sm">
                  Renewal trigger will start in 3 days.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Renewal workflow</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">1. Track inventory</h3>
              <p className="text-sm text-gray-600">
                HealthGuard monitors doses taken and calculates remaining days of supply.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">2. Prepare renewals</h3>
              <p className="text-sm text-gray-600">
                We package refill details, insurance rules, and preferred pharmacy info.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">3. Automate the request</h3>
              <p className="text-sm text-gray-600">
                Our device agent can step through pharmacy apps to complete the refill.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Designed for zero missed doses</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-semibold">•</span>
                Smart reminders for morning, afternoon, or split dosing.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-semibold">•</span>
                Renewal status tracking with pharmacy and insurer notes.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-semibold">•</span>
                Alerts for prior authorization or clinician approval.
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg">
            <div className="text-sm uppercase tracking-widest text-blue-600 mb-4">Renewal Agent</div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="font-semibold">Detect: refill button</div>
                <div className="text-sm text-gray-600">Pharmacy app screen captured</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="font-semibold">Plan: confirm dosage + pickup</div>
                <div className="text-sm text-gray-600">Checking for insurance alerts</div>
              </div>
              <div className="bg-blue-600 text-white rounded-xl p-4">
                Execute: submit refill request for approval.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Never run out of critical medication</h2>
          <p className="text-lg mb-8">HealthGuard handles the renewal loop so you can focus on recovery.</p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Talk to sales
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
