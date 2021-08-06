import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import dynamic from 'next/dynamic';
import { Dashboard } from 'pages';
import { getModule } from 'utils/import';

const Text: any = dynamic(getModule('./components/text'), { ssr: false });

export function Project() {
  return (
    <Dashboard>
      <Text
        css={{ px: '$3', py: '$6', textAlign: 'center', color: '$mutedText' }}
      >
        Click the “+ Construct” button to instantiate a new genetic design
      </Text>
    </Dashboard>
  );
}

export default withPageAuthRequired(Project);
