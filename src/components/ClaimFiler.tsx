'use client';

import { useState } from 'react';

interface ClaimFormData {
  name: string;
  email: string;
  medication: string;
  dosage: string;
  frequency: string;
}

export default function ClaimFiler() {
  const [formData, setFormData] = useState<ClaimFormData>({
    name: '',
    email: '',
    medication: '',
    dosage: '',
    frequency: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to a backend
    console.log('Claim submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-black">File Your Medication Claim</h3>
      
      {submitted && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
          ✓ Claim submitted successfully! Our AI will review it shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-black mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder:text-black"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder:text-black"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-1">Medication Name</label>
          <input
            type="text"
            name="medication"
            value={formData.medication}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder:text-black"
            placeholder="e.g., Lisinopril"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">Dosage</label>
            <input
              type="text"
              name="dosage"
              value={formData.dosage}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder:text-black"
              placeholder="e.g., 10mg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Frequency</label>
            <select
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select frequency</option>
              <option value="daily">Daily</option>
              <option value="twice-daily">Twice Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
        >
          Submit Claim
        </button>
      </form>
    </div>
  );
}
