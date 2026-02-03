'use client';

import { useState } from 'react';

interface CostCalculatorInput {
  treatmentCost: string;
  planType: string;
  hasMetDeductible: boolean;
}

export default function CostCalculator() {
  const [input, setInput] = useState<CostCalculatorInput>({
    treatmentCost: '',
    planType: 'Standard Plan',
    hasMetDeductible: false,
  });
  const [result, setResult] = useState<{ insurance: number; outOfPocket: number } | null>(null);

  const planDetails: Record<string, { deductible: number; copay: number; coinsurance: number }> = {
    'Basic Plan': { deductible: 1500, copay: 40, coinsurance: 0.30 },
    'Standard Plan': { deductible: 1000, copay: 30, coinsurance: 0.20 },
    'Premium Plan': { deductible: 500, copay: 20, coinsurance: 0.10 },
    'Gold Plan': { deductible: 250, copay: 15, coinsurance: 0.05 },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setInput(prev => ({ ...prev, hasMetDeductible: (e.target as HTMLInputElement).checked }));
    } else {
      setInput(prev => ({ ...prev, [name]: value }));
    }
  };

  const calculateCost = (e: React.FormEvent) => {
    e.preventDefault();
    const cost = parseFloat(input.treatmentCost);
    
    if (isNaN(cost) || cost <= 0) {
      alert('Please enter a valid treatment cost');
      return;
    }

    const plan = planDetails[input.planType];
    let insurancePays = 0;
    let outOfPocketCost = 0;

    if (!input.hasMetDeductible) {
      // Still need to meet deductible
      if (cost <= plan.deductible) {
        outOfPocketCost = cost;
        insurancePays = 0;
      } else {
        outOfPocketCost = plan.deductible;
        const remainingCost = cost - plan.deductible;
        insurancePays = remainingCost * (1 - plan.coinsurance);
        outOfPocketCost += remainingCost * plan.coinsurance;
      }
    } else {
      // Already met deductible
      outOfPocketCost = Math.min(plan.copay, cost);
      insurancePays = cost - outOfPocketCost;
    }

    setResult({
      insurance: Math.round(insurancePays * 100) / 100,
      outOfPocket: Math.round(outOfPocketCost * 100) / 100,
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-black">Treatment Cost Calculator</h3>
      
      <form onSubmit={calculateCost} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-black mb-1">Treatment Cost</label>
          <input
            type="number"
            name="treatmentCost"
            value={input.treatmentCost}
            onChange={handleChange}
            placeholder="Enter treatment cost"
            step="0.01"
            min="0"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder:text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-1">Insurance Plan</label>
          <select
            name="planType"
            value={input.planType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
          >
            <option>Basic Plan</option>
            <option>Standard Plan</option>
            <option>Premium Plan</option>
            <option>Gold Plan</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="hasMetDeductible"
            checked={input.hasMetDeductible}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm text-black">Already met deductible for this year</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
        >
          Calculate Cost
        </button>
      </form>

      {result && (
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <p className="text-black text-sm mb-2">Insurance Pays</p>
            <p className="text-3xl font-bold text-green-600">${result.insurance.toFixed(2)}</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
            <p className="text-black text-sm mb-2">You Pay (Out-of-Pocket)</p>
            <p className="text-3xl font-bold text-orange-600">${result.outOfPocket.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
