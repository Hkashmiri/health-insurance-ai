import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg md:text-xl opacity-90">
            These terms outline how HealthGuard services are provided and used.
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-50 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">Use of service</h2>
            <p className="text-sm text-gray-600">
              HealthGuard provides tools for managing appointments, medications, and insurance
              workflows. You are responsible for the accuracy of the information you provide.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">Medical disclaimer</h2>
            <p className="text-sm text-gray-600">
              HealthGuard is not a substitute for professional medical advice, diagnosis, or
              treatment. Always consult a qualified healthcare provider with questions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">Account responsibility</h2>
            <p className="text-sm text-gray-600">
              You are responsible for maintaining the confidentiality of your account and device.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p className="text-sm text-gray-600">
              Questions about these terms? Email healthguardpwa@gmail.com.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
