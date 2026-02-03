'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">HealthAI</h3>
            <p className="text-sm">Making health insurance simple, transparent, and affordable for everyone.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="/pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:info@healthai.com" className="hover:text-white transition">info@healthai.com</a></li>
              <li>Phone: <a href="tel:1-800-HEALTH" className="hover:text-white transition">1-800-HEALTH</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {currentYear} HealthAI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition text-sm">Twitter</a>
            <a href="#" className="hover:text-white transition text-sm">Facebook</a>
            <a href="#" className="hover:text-white transition text-sm">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
