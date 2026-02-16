import React, { useState } from 'react';

const defaultCheckedItems = {
  profile: false,
  pets: false,
  policy: false,
};

const GettingStartedCard = ({
  onComplete,
  initialCheckedItems,
}) => {
  const [checkedItems, setCheckedItems] = useState(
    initialCheckedItems ?? defaultCheckedItems
  );

  const steps = [
    { id: 'profile', label: 'Complete your profile', icon: '👤' },
    { id: 'pets', label: 'Add your pets', icon: '🐾' },
    { id: 'policy', label: 'Review your policy', icon: '📋' }
  ];

  const handleCheck = (id) => {
    const newChecked = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(newChecked);

    const allComplete = Object.values(newChecked).every(v => v);
    if (allComplete && onComplete) {
      onComplete();
    }
  };

  const progress = (Object.values(checkedItems).filter(Boolean).length / 3) * 100;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Getting Started
        </h2>
        <p className="text-gray-600 text-sm">
          Complete these steps to activate your pet protection
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            {Object.values(checkedItems).filter(Boolean).length} of 3 completed
          </span>
          <span className="text-sm font-medium text-emerald-600">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
            onClick={() => handleCheck(step.id)}
          >
            {/* Checkbox */}
            <div className="flex-shrink-0">
              <div
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                  checkedItems[step.id]
                    ? 'bg-emerald-500 border-emerald-500'
                    : 'border-gray-300 bg-white'
                }`}
              >
                {checkedItems[step.id] && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Icon */}
            <div className="text-3xl">
              {step.icon}
            </div>

            {/* Label */}
            <div className="flex-1">
              <p className={`font-medium transition-colors ${
                checkedItems[step.id]
                  ? 'text-gray-400 line-through'
                  : 'text-gray-900'
              }`}>
                {step.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {progress === 100 && (
        <button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
          Continue to Dashboard
        </button>
      )}
    </div>
  );
};

export default GettingStartedCard;
