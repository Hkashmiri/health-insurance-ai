import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ClaimFiler from '@/components/ClaimFiler';
import InsuranceComparator from '@/components/InsuranceComparator';
import CostCalculator from '@/components/CostCalculator';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Smart Health Insurance Made Simple
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              File claims with AI, compare plans instantly, and calculate real costs
            </p>
            <Link href="/how-it-works" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ClaimFiler />
            <CostCalculator />
            <InsuranceComparator />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8">Take control of your health insurance today.</p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
