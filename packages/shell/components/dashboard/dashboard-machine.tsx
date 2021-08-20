import { constructMachine } from 'components/construct-designer/construct-machine';
import { partLibMachine } from 'components/part-library/part-lib-machine';
import type { Construct, Project, ProjectsQuery } from 'models/graphql';
import { mutate } from 'swr';
import { sdk } from 'utils/request';
import { assign, createMachine, forwardTo } from 'xstate';

export type DashboardContext = {
  newConstruct?: Construct;
  newProject?: Project;
  projects: Project[];
};

export type DashboardEvent = { type: string; [key: string]: any };

export async function createNew(
  _,
  { construct_parts, pid, value }: DashboardEvent
) {
  let data: ProjectsQuery;
  let newProject;
  let newConstruct;

  switch (value) {
    case 'project':
      data = await mutate('Projects', async (data) => {
        try {
          ({ insert_project_one: newProject } = await sdk.CreateProject({
            input: { name: 'Untitled project', description: '' },
          }));

          data.project.push(newProject);
        } catch (err) {
          console.error(err);
        }
        return data;
      });

      break;
    case 'construct':
      data = await mutate('Projects', async (data) => {
        const { project: projects } = data ?? {};

        ({ insert_construct_one: newConstruct } = await sdk.CreateConstruct({
          input: {
            name: 'Untitled construct',
            construct_projects: { data: [{ project_id: pid }] },
            construct_parts: {
              data: construct_parts.map(
                ({ construct_id, part, id, ...rest }) => rest
              ),
            },
          },
        }));

        const activeProject = projects.find(({ id }) => id === pid);

        if (activeProject) {
          activeProject.project_constructs.push({
            construct: newConstruct,
          });
        }

        return data;
      });
      break;
    default:
      break;
  }

  return { newConstruct, newProject, projects: data.project };
}

export const dashboardMachine = createMachine<DashboardContext, DashboardEvent>(
  {
    id: 'dashboard',
    context: {
      newConstruct: null,
      newProject: null,
      projects: [],
    },
    initial: 'ready',
    states: {
      ready: {
        initial: 'idle',
        invoke: [
          {
            id: 'partLibSvc',
            src: 'partLibMachine',
          },
          {
            id: 'constructSvc',
            src: 'constructMachine',
          },
        ],
        on: {
          BOOTSTRAP: {
            actions: assign(
              (_, initialData) => initialData as Partial<DashboardContext>
            ),
          },
          CREATE: { target: 'ready.creating' },
          'PARTLIB.ENGAGE': {
            actions: forwardTo('partLibSvc'),
          },
          'PARTLIB.SELECT': { actions: forwardTo('constructSvc') },
        },
        states: {
          idle: {},
          creating: {
            invoke: {
              id: 'createNew',
              src: createNew,
              onDone: {
                actions: assign((_, { data }) => data),
              },
              onError: {},
            },
          },
        },
      },
    },
  },
  {
    services: { partLibMachine, constructMachine },
  }
);
