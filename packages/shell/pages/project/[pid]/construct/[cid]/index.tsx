import type { WithPageAuthRequiredProps } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import useLocalStorage from 'hooks/useLocalStorage';
import type { ConstructQuery } from 'models/graphql';
import { ConstructDocument } from 'models/graphql';
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextApiRequest,
} from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Dashboard } from 'pages';
import { useCallback, useEffect } from 'react';
import { mutate } from 'swr';
import { debounce } from 'ts-debounce';
import requestUtil, { sdk } from 'utils/request';

type Props = {
  data?: ConstructQuery;
} & WithPageAuthRequiredProps;

const Box: any = dynamic(() => import('common/components/box'));
const Icon = dynamic(() => import('common/components/icon'));

const Input = dynamic(async () => {
  const { Input } = await import('common/components/form');
  return Input;
});

const Label = dynamic(async () => {
  const { Label } = await import('common/components/form');
  return Label;
});

export function Construct({ data: initialData }: Props) {
  const router = useRouter();
  const { cid, pid } = router.query;
  const [recentConstructs, setRecentConstructs] = useLocalStorage<unknown[]>(
    'recentConstructs',
    []
  );
  let construct;

  const { data } = sdk.useConstruct(
    cid ? cid : null,
    { id: cid },
    {
      initialData,
    }
  );

  if (data) {
    ({
      construct: [construct],
    } = data);
  }

  useEffect(() => {
    if (construct) {
      const constructs = [...recentConstructs];
      const existingIdx = constructs.findIndex(
        ({ id }) => id === construct?.id
      );

      if (existingIdx !== -1) {
        constructs.splice(existingIdx, 1, construct);
      } else {
        constructs.push(construct);
      }

      setRecentConstructs(constructs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      mutate('Projects', async (data) => {
        if (data) {
          try {
            const { project: projects } = data;

            const { update_construct_by_pk: updatedConstruct } =
              await sdk.UpdateConstruct({
                id: construct?.id,
                input: { [name]: value },
              });

            const activeProject = projects.find(({ id }) => id === pid);

            if (activeProject) {
              const filteredConstructs =
                activeProject.project_constructs.filter(
                  ({ id }) => id !== updatedConstruct.id
                );
              activeProject.project_constructs = [
                updatedConstruct,
                ...filteredConstructs,
              ];
            }
          } catch (err) {
            console.error(err);
          }
        }

        return data;
      });
    },
    [construct?.id, pid]
  );

  return (
    <Dashboard>
      <Box
        css={{
          alignItems: 'center',
          background: '$overlay',
          borderColor: '$highlight',
          borderStyle: 'solid',
          borderWidth: '0 0 $space$1 0',
          display: 'flex',
          px: '$3',
          py: '$2',
          width: '100%',
          svg: { mr: '$2', path: { fill: '$primary' } },
        }}
      >
        <Label htmlFor="construct-name">
          <Icon name="Circle" />
        </Label>
        <Input
          css={{ border: 'none', flex: 1, m: 0 }}
          defaultValue={construct?.name}
          id="construct-name"
          key={cid as string}
          name="name"
          onChange={debounce(handleChange, 500)}
        />
      </Box>
    </Dashboard>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps({ req, res, query }: GetServerSidePropsContext) {
    const { cid } = query;

    let data = null;

    try {
      (req as NextApiRequest).body = {
        query: ConstructDocument,
        variables: { id: cid },
      };
      data = await requestUtil(req, res);
    } catch (err) {
      console.error(err);
    }

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data,
      },
    };
  },
});

export default withPageAuthRequired(Construct);
