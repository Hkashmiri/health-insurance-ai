import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg md:text-xl opacity-90">
            We take privacy seriously and design HealthGuard to keep your data protected.
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-50 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">What we collect</h2>
            <p className="text-sm text-gray-600">
              We collect the information you provide in the app, including appointment notes,
              medication details, and support requests. We minimize data collection and only store
              what is needed to provide the service.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">How we use information</h2>
            <p className="text-sm text-gray-600">
              Data is used to power appointment scheduling, recording summaries, medication renewals,
              and user support. We do not sell personal information.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">Data protection</h2>
            <p className="text-sm text-gray-600">
              We use encryption, access controls, and privacy-first workflows to protect your data.
              Local processing is prioritized where possible.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p className="text-sm text-gray-600">
              Questions about privacy? Email healthguardpwa@gmail.com.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
