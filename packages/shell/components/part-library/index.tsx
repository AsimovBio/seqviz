import { useActor } from '@xstate/react';
import dynamic from 'next/dynamic';
import { DashboardContext } from 'pages';
import { useContext } from 'react';
import { sdk } from 'utils/request';

const Box: any = dynamic(() => import('common/components/box'));
const Button = dynamic(() => import('common/components/button'));
const Icon = dynamic(() => import('common/components/icon'));

export default function PartsLibrary({ initialData }) {
  const {
    state: {
      children: { partLibSvc },
    },
  } = useContext(DashboardContext);

  const [state, send] = useActor<any, any>(partLibSvc);

  const { data, error } = sdk.useParts('Parts', null, {
    initialData,
  });

  if (error) {
    console.error(error);
  }

  const { part: parts } = data ?? {};

  return (
    <Box
      as="ol"
      css={{
        border: `1px solid ${
          state?.value === 'selecting' ? '$primary' : 'transparent'
        }`,
        li: { pt: '$2' },
        listStyle: 'none',
        m: 0,
        p: 0,
      }}
    >
      {parts?.map((part) => {
        const {
          description,
          id,
          name,
          part_type: { glyph, name: partTypeName },
        } = part;

        return (
          <Box
            as="li"
            css={{
              alignItems: 'center',
              backgroundColor: '$overlay',
              display: 'flex',
              mb: '$1',
              px: '$3',
              py: '$1',
              svg: {
                fill: 'none',
                stroke: 'currentColor',
                strokeLinecap: 'square',
                strokeAlignment: 'inner',
                strokeWidth: '2',
                width: '1rem',
              },
            }}
            key={id}
          >
            <Button
              color="transparent"
              css={{
                display: 'block',
                flex: 1,
                fontWeight: '$body',
                textAlign: 'left',
                width: '100%',
              }}
              onClick={() => {
                send({ type: 'SELECT', value: part });
              }}
            >
              <Icon label={name}>
                <span dangerouslySetInnerHTML={{ __html: glyph }} />
              </Icon>
              <Box as="span" css={{ ml: '$3' }}>
                {name}
              </Box>
            </Button>
            <Box as="span" css={{ flex: 1 }}>
              {partTypeName}
            </Box>
            <Box as="span" css={{ flex: 1 }}>
              {description}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
