import dynamic from 'next/dynamic';
import { DashboardContext } from 'pages';
import { useContext } from 'react';
import { useCallback } from 'react';
import { mutate } from 'swr';
import { debounce } from 'ts-debounce';
import { sdk } from 'utils/request';

import PageHeader from './header';

const AutosizeInput = dynamic(
  async () => {
    const { AutosizeInput } = await import('common/components/form');
    return AutosizeInput;
  },
  { ssr: false }
);
const Button: any = dynamic(() => import('common/components/button'));
const Box: any = dynamic(() => import('common/components/box'));
const Icon: any = dynamic(() => import('common/components/icon'));
const Label = dynamic(async () => {
  const { Label } = await import('common/components/form');
  return Label;
});
const Text: any = dynamic(() => import('common/components/text'));

export default function ProjectPageHeader({ currentProject }) {
  const { send } = useContext(DashboardContext);

  const handleCreateConstruct = useCallback(() => {
    if (currentProject) {
      send({ pid: currentProject.id, type: 'CREATE', value: 'construct' });
    }
  }, [currentProject, send]);

  const handleChange = useCallback(
    (name, value) => {
      mutate(
        'Projects',
        async (data) => {
          if (data) {
            try {
              const { project: projects } = data;

              const { update_project_by_pk: updatedProject } =
                await sdk.UpdateProject({
                  id: currentProject.id,
                  input: { [name]: value },
                });

              const idx = projects.findIndex(
                ({ id }) => id === currentProject?.id
              );

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
    [currentProject?.id]
  );

  return (
    <PageHeader>
      {currentProject && (
        <Box
          css={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          {currentProject?.chassis && (
            <>
              <Text>{currentProject.chassis}</Text>
              <Icon label="CaretRight" />
            </>
          )}
          <Label htmlFor="project-name">
            <Icon
              css={{ mr: '$2', path: { fill: '$primary' } }}
              label="Circle"
            />
            <AutosizeInput
              css={{
                input: {
                  border: 'none',
                  flex: 1,
                  m: 0,
                },
              }}
              id="project-name"
              name="name"
              onChange={debounce(handleChange, 500)}
              value={currentProject?.name}
            />
          </Label>
          <Box
            css={{
              svg: { width: '1.5em', height: '1.5em' },
            }}
          >
            <Icon label="CaretRight" />
          </Box>
          <Button
            aria-label="Create construct"
            css={{
              cursor: 'pointer',
              backgroundColor: '$background',
              fontWeight: '$body',
              fontSize: '$0',
              px: '$2',
              py: '$1',
              svg: {
                width: 'unset',
                height: 'unset',
              },
              '&:hover': {
                '& svg path': { fill: '$quaternary' },
              },
            }}
            onClick={() => handleCreateConstruct()}
            value="construct"
          >
            <Icon label="Plus" />
            &nbsp;Construct
          </Button>
        </Box>
      )}
    </PageHeader>
  );
}
