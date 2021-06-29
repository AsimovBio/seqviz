import { useUser } from '@auth0/nextjs-auth0';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import AccountPopover from './account-popover';

const Box: any = dynamic(() => import('common/components/box'));
const Text: any = dynamic(() => import('common/components/text'));

export default function Header() {
  const { user } = useUser();

  return (
    <Box
      as="header"
      css={{
        alignItems: 'center',
        display: 'flex',
        gridArea: 'header',
        justifyContent: 'space-between',
        px: '$3',
      }}
    >
      <Text as="h2" font="heading" uppercase>
        Design
      </Text>
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
