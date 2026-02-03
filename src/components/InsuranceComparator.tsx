'use client';

import { useState } from 'react';

interface InsurancePlan {
  name: string;
  monthlyPremium: number;
  deductible: number;
  copay: number;
  coinsurance: number;
}

const insurancePlans: InsurancePlan[] = [
  { name: 'Basic Plan', monthlyPremium: 150, deductible: 1500, copay: 40, coinsurance: 30 },
  { name: 'Standard Plan', monthlyPremium: 250, deductible: 1000, copay: 30, coinsurance: 20 },
  { name: 'Premium Plan', monthlyPremium: 400, deductible: 500, copay: 20, coinsurance: 10 },
  { name: 'Gold Plan', monthlyPremium: 500, deductible: 250, copay: 15, coinsurance: 5 },
];

export default function InsuranceComparator() {
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);
  const [annualCost, setAnnualCost] = useState(0);

  const togglePlan = (planName: string) => {
    if (selectedPlans.includes(planName)) {
      setSelectedPlans(selectedPlans.filter(p => p !== planName));
    } else {
      setSelectedPlans([...selectedPlans, planName]);
    }
  };

  const calculateAnnualCost = () => {
    const selected = insurancePlans.filter(p => selectedPlans.includes(p.name));
    if (selected.length === 0) {
      setAnnualCost(0);
      return;
    }
    
    const total = selected.reduce((acc, plan) => {
      return acc + (plan.monthlyPremium * 12);
    }, 0);
    
    setAnnualCost(total);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-black">Compare Insurance Plans</h3>
      
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {insurancePlans.map(plan => (
          <div key={plan.name} className="p-4 border-2 rounded-lg cursor-pointer transition hover:border-blue-500"
            onClick={() => togglePlan(plan.name)}
          >
            <input
              type="checkbox"
              checked={selectedPlans.includes(plan.name)}
              onChange={() => {}}
              className="mr-3"
            />
            <label className="cursor-pointer font-semibold text-lg text-black">{plan.name}</label>
            <div className="mt-3 space-y-2 text-sm text-black">
              <p>Monthly Premium: <span className="font-bold text-blue-600">${plan.monthlyPremium}</span></p>
              <p>Deductible: <span className="font-bold">${plan.deductible}</span></p>
              <p>Copay: <span className="font-bold">${plan.copay}</span></p>
              <p>Coinsurance: <span className="font-bold">{plan.coinsurance}%</span></p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={calculateAnnualCost}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition mb-6"
      >
        Calculate Annual Cost
      </button>

      {annualCost > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200">
          <p className="text-black mb-2">Selected Plans Annual Cost:</p>
          <p className="text-4xl font-bold text-blue-600">${annualCost.toLocaleString()}</p>
          <p className="text-sm text-black mt-2">Monthly average: ${(annualCost / 12).toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
