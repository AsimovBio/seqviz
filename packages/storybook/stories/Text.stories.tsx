import React, { ReactNode } from 'react';
import { Story } from '@storybook/react';

export default {
  title: 'Example/Text',
  loaders: [
    async (): Promise<ReactNode> => ({
      Text: (await import('common/components/text')).default,
    }),
  ],
};

export const NormalText: Story = (args, { loaded: { Text } }) => {
  return <Text {...args}>This is normal text</Text>;
};

export const BoldText: Story = (args, { loaded: { Text } }) => {
  return (
    <Text font="bold" {...args}>
      This is bold Text
    </Text>
  );
};
