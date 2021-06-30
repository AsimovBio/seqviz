import React from 'react';

export default {
  title: 'Example/Text',
  loaders: [async () => ({ Text: (await import('common/components/text')).default })]
};

export const NormalText = (args, { loaded: { Text } }) => {
  return (<Text {...args}>This is normal text</Text>)
};

export const BoldText = (args, { loaded: { Text } }) => {
  return (<Text font="bold" {...args}>This is bold Text</Text>)
};
