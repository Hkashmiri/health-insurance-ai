import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function FaqPage() {
  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl opacity-90">
            Everything you need to know about HealthGuard and MedPilot workflows.
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-50 text-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Does HealthGuard store my medical data?</h3>
              <p className="text-sm text-gray-600">
                The platform is designed to keep sensitive data on-device whenever possible, with
                encrypted storage for appointment notes and medication plans.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Can I schedule appointments directly?</h3>
              <p className="text-sm text-gray-600">
                MedPilot coordinates appointment requests, verifies in-network coverage, and
                prepares availability options before confirmation.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">How do renewals work?</h3>
              <p className="text-sm text-gray-600">
                We monitor pill counts and dosing schedules to trigger renewals before you run out,
                then guide or automate the refill process.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Is appointment recording secure?</h3>
              <p className="text-sm text-gray-600">
                Recordings are stored locally, transcripts are generated on device, and you control
                what gets shared.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Can caregivers manage multiple profiles?</h3>
              <p className="text-sm text-gray-600">
                Yes. Family plans support multiple dependents with shared reminders and scheduling.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
