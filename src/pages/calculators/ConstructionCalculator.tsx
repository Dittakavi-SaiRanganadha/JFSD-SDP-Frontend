import { useState } from 'react';
import Navbar from '../../components/Header/Navbar';

interface MaterialCost {
  name: string;
  unit: string;
  pricePerUnit: number;
}

const materials: MaterialCost[] = [
  { name: 'Bricks', unit: 'per 1000 pieces', pricePerUnit: 5000 },
  { name: 'Cement', unit: 'per bag', pricePerUnit: 350 },
  { name: 'Sand', unit: 'per cubic ft', pricePerUnit: 35 },
  { name: 'Steel', unit: 'per kg', pricePerUnit: 65 },
  { name: 'Paint', unit: 'per liter', pricePerUnit: 200 },
  { name: 'Flooring', unit: 'per sq ft', pricePerUnit: 80 }
];

export default function ConstructionCalculator() {
  const [area, setArea] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialCost>(materials[0]);
  const [quantity, setQuantity] = useState('');
  const [estimates, setEstimates] = useState<{material: string; cost: number}[]>([]);

  const addEstimate = () => {
    const cost = parseFloat(quantity) * selectedMaterial.pricePerUnit;
    setEstimates([...estimates, {
      material: selectedMaterial.name,
      cost
    }]);
    setQuantity('');
  };

  const getTotalCost = () => {
    return estimates.reduce((acc, curr) => acc + curr.cost, 0);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Construction Cost Calculator</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Construction Area (sq ft)</label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Material</label>
              <select
                value={selectedMaterial.name}
                onChange={(e) => {
                  const material = materials.find(m => m.name === e.target.value);
                  if (material) setSelectedMaterial(material);
                }}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                {materials.map(material => (
                  <option key={material.name} value={material.name}>
                    {material.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity ({selectedMaterial.unit})</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={addEstimate}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Add Material
              </button>
            </div>
          </div>

          {estimates.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Cost Breakdown</h2>
              <div className="space-y-2">
                {estimates.map((estimate, index) => (
                  <div key={index} className="flex justify-between p-2 bg-gray-50 rounded-md">
                    <span>{estimate.material}</span>
                    <span>₹{estimate.cost.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex justify-between p-2 bg-blue-50 rounded-md font-bold">
                  <span>Total Cost</span>
                  <span>₹{getTotalCost().toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}