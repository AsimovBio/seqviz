import { useActor } from '@xstate/react';
import dynamic from 'next/dynamic';
import { DashboardContext } from 'pages';
import { useContext } from 'react';
import { sdk } from 'utils/request';

const Box: any = dynamic(() => import('common/components/box'));
const Button = dynamic(() => import('common/components/button'));

export default function PartsLibrary({ initialData }) {
  const { partLibSvc } = useContext(DashboardContext);

  const [state, send] = useActor(partLibSvc);

  const { data, error } = sdk.useParts('Parts', null, {
    initialData,
  });

  if (error) {
    console.error(error);
  }

  const { part: parts } = data ?? {};

  return (
    <Box
      as="ul"
      css={{
        border: state?.value === 'selecting' ? '1px solid $primary' : undefined,
        listStyle: 'none',
        m: 0,
        p: 0,
        li: { pt: '$2' },
      }}
    >
      {parts?.map((part) => {
        const { id, name } = part;

        return (
          <li key={id}>
            <Button
              onClick={() => {
                send({ type: 'SELECT', value: part });
              }}
            >
              {name}
            </Button>
          </li>
        );
      })}
    </Box>
  );
}
