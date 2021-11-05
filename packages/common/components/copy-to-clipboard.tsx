import type { ReactNode } from 'react';
import { useCallback, useState } from 'react';

import Button from './button';
import Icon from './icon';
import Text from './text';

type Props = {
  children: ReactNode;
  text: string;
};

export default function CopyToClipboard({ children, text }: Props) {
  const [success, setSuccess] = useState<boolean>(false);
  const onCopy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(undefined);
      }, 1000);
    } catch (err) {
      console.error('An error occurred while writing to clipboard.', err);
      setSuccess(undefined);
    }
  }, []);

  if (success) {
    return (
      <Text
        as="span"
        css={{
          color: '$quaternary',
          display: 'inline-flex',
          alignItems: 'center',
          svg: {
            height: '$0',
            width: '$0',
            path: { stroke: '$quaternary' },
          },
        }}
      >
        <Icon label="CheckCircle" />
        &nbsp;Copied to clipboard
      </Text>
    );
  }

  return (
    <Button
      color="transparent"
      css={{ p: 0 }}
      data-testid="copy-to-clipboard-button"
      onClick={() => onCopy(text)}
      title="Click to copy"
    >
      {children}
    </Button>
  );
}
