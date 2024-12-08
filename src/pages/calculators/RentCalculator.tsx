import { useState } from 'react';
import Navbar from '../../components/Header/Navbar';

export default function RentCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [result, setResult] = useState<{ maxRent: number; recommended: number } | null>(null);

  const calculateAffordableRent = () => {
    const income = parseFloat(monthlyIncome);
    // Using the 30% rule for rent affordability
    const maxRent = income * 0.3;
    // Recommended is slightly lower for financial safety
    const recommended = income * 0.25;
    
    setResult({
      maxRent: Math.round(maxRent),
      recommended: Math.round(recommended)
    });
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Rent Calculator</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Monthly Income (₹)</label>
            <input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <button
            onClick={calculateAffordableRent}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Calculate Affordable Rent
          </button>

          {result && (
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-gray-50 rounded-md">
                <h2 className="text-xl font-semibold mb-2">Maximum Affordable Rent (30% rule)</h2>
                <p className="text-3xl font-bold text-blue-600">₹{result.maxRent.toLocaleString()}</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-md">
                <h2 className="text-xl font-semibold mb-2">Recommended Rent (25% rule)</h2>
                <p className="text-3xl font-bold text-green-600">₹{result.recommended.toLocaleString()}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}