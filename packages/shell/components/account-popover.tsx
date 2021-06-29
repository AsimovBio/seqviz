import { UserProfile } from '@auth0/nextjs-auth0';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import UserIcon from './user-icon';

type Props = {
  user: UserProfile;
};

const Popover = dynamic(() => import('common/components/popover'), {
  ssr: false,
});
const Box = dynamic(() => import('common/components/box'));
const Text = dynamic(() => import('common/components/text'));
const Button = dynamic(() => import('common/components/button'));

export default function AccountPopover({ user }: Props) {
  const userIconText = user.nickname?.charAt(0).toUpperCase() || 'A';
  return (
    <Popover
      arrowOffset={16}
      content={
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '$background',
          }}
        >
          <Box
            css={{
              display: 'flex',
              backgroundColor: '$overlay',
              padding: '$3',
              marginBottom: '$1',
            }}
          >
            <Box
              css={{
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <UserIcon className="full" text={userIconText} />
            </Box>
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '$3',
              }}
            >
              <Text css={{ margin: 0 }} font="bold">
                {user.name}
              </Text>
              <Text css={{ margin: 0 }}>{user.email}</Text>
            </Box>
          </Box>
          <Box
            css={{
              backgroundColor: '$overlay',
              a: {
                color: '$text',
                textDecoration: 'none',
              },
            }}
          >
            <Link data-testid="logout" href="/api/auth/logout" passHref>
              <Button
                as="a"
                css={{
                  padding: '$2 $3',
                  justifyContent: 'center',
                  width: '100%',
                  cursor: 'pointer',
                }}
              >
                <Text css={{ margin: 0 }}>Sign out</Text>
              </Button>
            </Link>
          </Box>
        </Box>
      }
    >
      <UserIcon text={userIconText} />
    </Popover>
  );
}
