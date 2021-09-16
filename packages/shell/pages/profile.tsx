import type { UserProfile } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import type { ReactElement } from 'react';

import Layout from '../components/layout/base-layout';

type ProfileProps = { user: UserProfile };

function Profile({ user }: ProfileProps): React.ReactElement {
  return (
    <div>
      <h1>Profile</h1>
      <h4>User info (server rendered)</h4>
      <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Profile;
