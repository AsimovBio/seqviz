import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import type { ProjectQuery } from 'models/graphql';
import { ProjectDocument } from 'models/graphql';
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextApiRequest,
} from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Dashboard } from 'pages';
import type { ReactNode } from 'react';
import { useCallback } from 'react';
import { mutate } from 'swr';
import { debounce } from 'ts-debounce';
import requestUtil, { sdk } from 'utils/request';

type Props = {
  data?: ProjectQuery;
  children?: ReactNode;
};

const Header: any = dynamic(() => import('common/components/header'));
const Icon = dynamic(() => import('common/components/icon'));

const Input = dynamic(async () => {
  const { Input } = await import('common/components/form');
  return Input;
});

const Label = dynamic(async () => {
  const { Label } = await import('common/components/form');
  return Label;
});

const Text: any = dynamic(() => import('common/components/text'));

export function Project({ data: initialData }: Props) {
  const router = useRouter();
  const pid = router.query?.pid;
  let project;

  const { data } = sdk.useProject(
    pid ? pid : null,
    { id: pid },
    {
      initialData,
    }
  );

  if (data) {
    ({
      project: [project],
    } = data);
  }

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      mutate(
        'Projects',
        async (data) => {
          if (data) {
            try {
              const { project: projects } = data;

              const { update_project_by_pk: updatedProject } =
                await sdk.UpdateProject({
                  id: project.id,
                  input: { [name]: value },
                });

              const idx = projects.findIndex(({ id }) => id === project?.id);

              if (idx !== -1) {
                projects.splice(idx, 1, updatedProject);

                return { project: projects };
              }
            } catch (err) {
              console.error(err);
            }
          }

          return data;
        },
        true
      );
    },
    [project?.id]
  );

  return (
    <Dashboard key={pid as string}>
      <Header as="header">
        <Label htmlFor="project-name">
          <Icon label="Circle" />
        </Label>
        <Input
          css={{ border: 'none', flex: 1, m: 0 }}
          defaultValue={project?.name}
          id="project-name"
          name="name"
          onChange={debounce(handleChange, 500)}
        />
      </Header>
      <Text css={{ px: '$3', py: '$2' }} uppercase>
        Create or select a construct
      </Text>
    </Dashboard>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps({ req, res, query }: GetServerSidePropsContext) {
    const { pid } = query;

    let data = null;

    try {
      (req as NextApiRequest).body = {
        query: ProjectDocument,
        variables: { id: pid },
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

export default withPageAuthRequired(Project);
