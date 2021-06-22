import { useUser } from '@auth0/nextjs-auth0';
import dynamic from 'next/dynamic';
import AccountPopover from './account-popover';

const Box: any = dynamic(() => import('common/components/box'));
const Text: any = dynamic(() => import('common/components/text'));

export default function Header() {
  const { user } = useUser();

  return (
    <Box
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
        <a href="/api/auth/login" data-testid="login">
          Login
        </a>
      )}
    </Box>
  );
}
