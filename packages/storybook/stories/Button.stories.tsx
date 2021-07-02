import React, { ReactNode } from 'react';
import { Story } from '@storybook/react';

export default {
  title: 'Example/Button',
  loaders: [
    async (): Promise<ReactNode> => ({
      Button: (await import('common/components/button')).default,
    }),
  ],
};

export const Primary: Story = (args, { loaded: { Button } }) => {
  return <Button {...args}>Federated Button</Button>;
};
