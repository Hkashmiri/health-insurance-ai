import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact HealthGuard</h1>
          <p className="text-lg md:text-xl opacity-90">
            Tell us about your needs and we’ll help you get started.
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-50 text-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Send a message</h2>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-600">healthguardpwa@gmail.com</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-sm text-gray-600">+1 (833) 664-1029</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Office</h3>
              <p className="text-sm text-gray-600">
                Dover, DE
              </p>
            </div>
            <div className="bg-blue-600 text-white rounded-2xl p-6 shadow-md">
              We typically respond within 1 business day.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
