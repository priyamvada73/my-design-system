import GettingStartedCard from './GettingStartedCard';

const meta = {
  title: 'Pet Protect/GettingStartedCard',
  component: GettingStartedCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f3f4f6' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    onComplete: () => console.log('All steps completed!'),
  },
};

export const PartiallyComplete = {
  args: {
    onComplete: () => console.log('All steps completed!'),
    initialCheckedItems: {
      profile: true,
      pets: true,
      policy: false,
    },
  },
};

export const AllComplete = {
  args: {
    onComplete: () => alert('Ready to continue!'),
    initialCheckedItems: {
      profile: true,
      pets: true,
      policy: true,
    },
  },
};
