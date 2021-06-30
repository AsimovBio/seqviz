import React from 'react';

export default {
  title: 'Example/Button',
  loaders: [async () => ({ Button: (await import('common/components/button')).default })]
};

export const Primary = (args, {loaded: { Button }}) => {
  return <Button {...args}>Federated Button</Button>
};
