import { fn } from 'storybook/test';
import GettingStartedCard from './GettingStartedCard';

export default {
  title: 'Example/GettingStartedCard',
  component: GettingStartedCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onComplete: { action: 'completed' },
  },
  args: {
    onComplete: fn(),
  },
};

export const Default = {
  args: {},
};

export const WithCallback = {
  args: {
    onComplete: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'When all three steps are checked, the onComplete callback fires.',
      },
    },
  },
};
