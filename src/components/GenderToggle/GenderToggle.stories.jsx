import GenderToggle from './GenderToggle';
import { useState } from 'react';

const meta = {
  title: 'Pet Protect/GenderToggle',
  component: GenderToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const ToggleWithState = (args) => {
  const [value, setValue] = useState(args.value || 'boy');

  return (
    <div className="w-96">
      <GenderToggle
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          console.log('Selected:', newValue);
        }}
      />
    </div>
  );
};

export const BoySelected = {
  render: ToggleWithState,
  args: {
    value: 'boy',
  },
};

export const GirlSelected = {
  render: ToggleWithState,
  args: {
    value: 'girl',
  },
};

export const SmallSize = {
  render: ToggleWithState,
  args: {
    value: 'boy',
    size: 'small',
  },
};

export const MediumSize = {
  render: ToggleWithState,
  args: {
    value: 'boy',
    size: 'medium',
  },
};

export const LargeSize = {
  render: ToggleWithState,
  args: {
    value: 'boy',
    size: 'large',
  },
};

export const Disabled = {
  args: {
    value: 'boy',
    disabled: true,
  },
};

export const InForm = {
  render: () => {
    const [formData, setFormData] = useState({
      petName: '',
      gender: 'boy',
      breed: '',
    });

    return (
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md space-y-4">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Add Your Pet
        </h3>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pet Name
          </label>
          <input
            type="text"
            value={formData.petName}
            onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
            placeholder="Enter pet name"
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <GenderToggle
            value={formData.gender}
            onChange={(value) => setFormData({ ...formData, gender: value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Breed
          </label>
          <input
            type="text"
            value={formData.breed}
            onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
            placeholder="Enter breed"
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
          Add Pet
        </button>

        <div className="mt-4 p-4 bg-gray-50 rounded-xl">
          <p className="text-sm text-gray-600">Selected: <strong>{formData.gender}</strong></p>
        </div>
      </div>
    );
  },
};

export const AllVariants = {
  render: () => (
    <div className="space-y-6 p-6">
      <div>
        <p className="text-sm text-gray-600 mb-2">Small - Boy Selected</p>
        <div className="w-64">
          <GenderToggle value="boy" size="small" />
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-2">Small - Girl Selected</p>
        <div className="w-64">
          <GenderToggle value="girl" size="small" />
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-2">Medium - Boy Selected</p>
        <div className="w-80">
          <GenderToggle value="boy" size="medium" />
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-2">Medium - Girl Selected</p>
        <div className="w-80">
          <GenderToggle value="girl" size="medium" />
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-2">Large - Boy Selected</p>
        <div className="w-96">
          <GenderToggle value="boy" size="large" />
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-2">Large - Girl Selected</p>
        <div className="w-96">
          <GenderToggle value="girl" size="large" />
        </div>
      </div>
    </div>
  ),
};
