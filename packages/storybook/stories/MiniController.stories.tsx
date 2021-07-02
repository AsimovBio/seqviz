import React, { ReactNode } from 'react';
import { Story } from '@storybook/react';

export default {
  title: 'Example/MiniController',
  loaders: [
    async (): Promise<ReactNode> => ({
      MiniController: (await import('common/components/mini-controller'))
        .default,
    }),
  ],
};

export const Inactive: Story = (args, { loaded: { MiniController } }) => {
  return <MiniController {...args}></MiniController>;
};

export const Hovered: Story = (args, { loaded: { MiniController } }) => {
  return <MiniController isHovered={true} {...args}></MiniController>;
};

export const Active: Story = (args, { loaded: { MiniController } }) => {
  return <MiniController isActive={true} {...args}></MiniController>;
};
