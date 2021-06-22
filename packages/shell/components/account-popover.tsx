import dynamic from 'next/dynamic';
import { UserProfile } from '@auth0/nextjs-auth0';

import UserIcon from './user-icon';

type Props = {
  user: UserProfile;
};

const Popover = dynamic(() => import('common/components/popover'));
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
              <UserIcon text={userIconText} className="full" />
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
            <a
              href={`${process.env.NEXT_PUBLIC_FEDERATED_URL_SHELL}/api/auth/logout`}
              data-testid="logout"
            >
              <Button
                css={{
                  padding: '$2 $3',
                  justifyContent: 'center',
                  width: '100%',
                  cursor: 'pointer',
                }}
              >
                <Text css={{ margin: 0 }}>Sign out</Text>
              </Button>
            </a>
          </Box>
        </Box>
      }
    >
      <UserIcon text={userIconText} />
    </Popover>
  );
}
