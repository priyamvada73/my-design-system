import Toggle from './Toggle';
import { useState } from 'react';

const meta = {
  title: 'Pet Protect/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const ToggleWithState = (args) => {
  const [checked, setChecked] = useState(args.checked || false);

  return (
    <Toggle
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const Off = {
  render: ToggleWithState,
  args: {
    label: 'Email notifications',
    checked: false,
  },
};

export const On = {
  render: ToggleWithState,
  args: {
    label: 'Email notifications',
    checked: true,
  },
};

export const WithoutLabel = {
  render: ToggleWithState,
  args: {
    checked: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled toggle',
    checked: false,
    disabled: true,
  },
};

export const DisabledOn = {
  args: {
    label: 'Disabled (on)',
    checked: true,
    disabled: true,
  },
};

export const SmallSize = {
  render: ToggleWithState,
  args: {
    label: 'Small toggle',
    size: 'small',
    checked: false,
  },
};

export const MediumSize = {
  render: ToggleWithState,
  args: {
    label: 'Medium toggle (default)',
    size: 'medium',
    checked: false,
  },
};

export const LargeSize = {
  render: ToggleWithState,
  args: {
    label: 'Large toggle',
    size: 'large',
    checked: false,
  },
};

export const SettingsPanel = {
  render: () => {
    const [settings, setSettings] = useState({
      emailNotifications: true,
      pushNotifications: false,
      smsAlerts: true,
      weeklyReports: false,
    });

    const handleToggle = (key) => {
      setSettings({ ...settings, [key]: !settings[key] });
    };

    return (
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md space-y-4">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Notification Settings
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-sm text-gray-500">Receive updates via email</p>
            </div>
            <Toggle
              checked={settings.emailNotifications}
              onChange={() => handleToggle('emailNotifications')}
            />
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-900">Push Notifications</p>
              <p className="text-sm text-gray-500">Get alerts on your device</p>
            </div>
            <Toggle
              checked={settings.pushNotifications}
              onChange={() => handleToggle('pushNotifications')}
            />
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-900">SMS Alerts</p>
              <p className="text-sm text-gray-500">Text message notifications</p>
            </div>
            <Toggle
              checked={settings.smsAlerts}
              onChange={() => handleToggle('smsAlerts')}
            />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-gray-900">Weekly Reports</p>
              <p className="text-sm text-gray-500">Summary of your pet's activity</p>
            </div>
            <Toggle
              checked={settings.weeklyReports}
              onChange={() => handleToggle('weeklyReports')}
            />
          </div>
        </div>
      </div>
    );
  },
};
