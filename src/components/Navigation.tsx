'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold flex items-center gap-2">
              <div className="bg-white text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                ℏ
              </div>
              <span>HealthAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-blue-200 transition">Home</Link>
            <Link href="/how-it-works" className="hover:text-blue-200 transition">How It Works</Link>
            <Link href="/pricing" className="hover:text-blue-200 transition">Pricing</Link>
            <Link href="/faq" className="hover:text-blue-200 transition">FAQ</Link>
            <Link href="/contact" className="hover:text-blue-200 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 transition"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 rounded hover:bg-blue-700 transition">Home</Link>
            <Link href="/how-it-works" className="block px-4 py-2 rounded hover:bg-blue-700 transition">How It Works</Link>
            <Link href="/pricing" className="block px-4 py-2 rounded hover:bg-blue-700 transition">Pricing</Link>
            <Link href="/faq" className="block px-4 py-2 rounded hover:bg-blue-700 transition">FAQ</Link>
            <Link href="/contact" className="block px-4 py-2 rounded hover:bg-blue-700 transition">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
