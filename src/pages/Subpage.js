import { useState } from 'react';

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-600">Choose a Subscription Plan</h2>
      <div className="mt-6 space-y-4">
        <div
          className={`border p-4 rounded-md ${selectedPlan === 'basic' ? 'bg-blue-100' : 'bg-white'}`}
          onClick={() => handlePlanSelect('basic')}
        >
          <h3 className="text-xl font-semibold">Basic Plan</h3>
          <p className="text-gray-700">$10/month</p>
          {selectedPlan === 'basic' && <p className="text-gray-700 mt-2">Basic access to all features</p>}
        </div>
        <div
          className={`border p-4 rounded-md ${selectedPlan === 'premium' ? 'bg-blue-100' : 'bg-white'}`}
          onClick={() => handlePlanSelect('premium')}
        >
          <h3 className="text-xl font-semibold">Premium Plan</h3>
          <p className="text-gray-700">$25/month</p>
          {selectedPlan === 'premium' && <p className="text-gray-700 mt-2">Full access with extra features</p>}
        </div>
        <div
          className={`border p-4 rounded-md ${selectedPlan === 'pro' ? 'bg-blue-100' : 'bg-white'}`}
          onClick={() => handlePlanSelect('pro')}
        >
          <h3 className="text-xl font-semibold">Pro Plan</h3>
          <p className="text-gray-700">$50/month</p>
          {selectedPlan === 'pro' && <p className="text-gray-700 mt-2">Pro access with priority support</p>}
        </div>
      </div>

      <div className="mt-6">
        {selectedPlan && (
          <div>
            <h3 className="text-xl font-semibold">Selected Plan: {selectedPlan}</h3>
            <p className="text-gray-700 mt-2">
              You have selected the {selectedPlan} plan. Click the button below to proceed with your subscription.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Subscribe Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
