import { useUser } from '@auth0/nextjs-auth0';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { ReactNode } from 'react';

import AccountPopover from './account-popover';

const Box: any = dynamic(() => import('common/components/box'));

type Props = { children?: ReactNode };

export default function PageHeader({ children }: Props) {
  const { user } = useUser();

  return (
    <Box
      as="header"
      css={{
        alignItems: 'center',
        display: 'flex',
        gridArea: 'header',
        justifyContent: !!children ? 'space-between' : 'flex-end',
        px: '$3',
      }}
    >
      {children}
      {user ? (
        <AccountPopover user={user} />
      ) : (
        <Link data-testid="login" href="/api/auth/login">
          Login
        </Link>
      )}
    </Box>
  );
}
