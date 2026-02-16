import Checkbox from './Checkbox';
import { useState } from 'react';

const meta = {
  title: 'Pet Protect/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const CheckboxWithState = (args) => {
  const [checked, setChecked] = useState(args.checked || false);
  
  return (
    <Checkbox 
      {...args} 
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const Default = {
  render: CheckboxWithState,
  args: {
    label: 'Complete your profile',
    checked: false,
  },
};

export const Checked = {
  render: CheckboxWithState,
  args: {
    label: 'Complete your profile',
    checked: true,
  },
};

export const GettingStartedExample = {
  render: () => {
    const [items, setItems] = useState({
      profile: false,
      pets: false,
      policy: false,
    });

    return (
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Getting Started
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Complete these steps to activate your pet protection
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <Checkbox 
              checked={items.profile}
              onChange={() => setItems({ ...items, profile: !items.profile })}
            />
            <span className="text-3xl">👤</span>
            <span className={`flex-1 font-medium ${items.profile ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
              Complete your profile
            </span>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <Checkbox 
              checked={items.pets}
              onChange={() => setItems({ ...items, pets: !items.pets })}
            />
            <span className="text-3xl">🐾</span>
            <span className={`flex-1 font-medium ${items.pets ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
              Add your pets
            </span>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <Checkbox 
              checked={items.policy}
              onChange={() => setItems({ ...items, policy: !items.policy })}
            />
            <span className="text-3xl">📋</span>
            <span className={`flex-1 font-medium ${items.policy ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
              Review your policy
            </span>
          </div>
        </div>
      </div>
    );
  },
};
