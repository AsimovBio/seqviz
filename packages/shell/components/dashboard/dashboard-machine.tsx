import { constructMachine } from 'components/construct-designer/construct-machine';
import { partLibMachine } from 'components/part-library/part-lib-machine';
import type { Construct, Folder, FoldersQuery } from 'models/graphql';
import { mutate } from 'swr';
import { getAnnotationsFromParts } from 'utils/getAnnotationsFromParts';
import { sdk } from 'utils/request';
import { assign, createMachine, forwardTo } from 'xstate';

export type DashboardContext = {
  newConstruct?: Construct;
  newFolder?: Folder;
  folders: Folder[];
  recentConstructs: Construct[];
};

export type DashboardEvent = { type: string; [key: string]: any };

export async function createNew(_, { parts, fid, value }: DashboardEvent) {
  let data: FoldersQuery;
  let newFolder;
  let newConstruct;

  switch (value) {
    case 'folder':
      data = await mutate('Folders', async (data) => {
        try {
          ({ insert_folder_one: newFolder } = await sdk.CreateFolder({
            input: { name: 'Untitled folder', description: '' },
          }));

          data.folder.push(newFolder);
        } catch (err) {
          console.error(err);
        }
        return data;
      });

      break;
    case 'construct':
      data = await mutate('Folders', async (data) => {
        const { folder: folders } = data ?? {};

        ({ insert_construct_one: newConstruct } = await sdk.CreateConstruct({
          input: {
            folder_id: fid,
            name: 'Untitled construct',
            sequence: parts
              .map(({ part: { sequence = '' } }) => sequence)
              .join(''),
          },
        }));

        const { id: constructId } = newConstruct;

        // ConstructParts and Annotations are separate queries because Annotations rely on new ConstructPart id
        // TODO: Rework queries / Hasura so that ConstructParts and Annotations are properly created on CreateConstruct mutation
        const {
          insert_construct_part: { returning: updatedConstructParts },
        } = await sdk.InsertConstructPart({
          construct_id: constructId,
          input: parts.map(({ part, id, ...rest }) => ({
            ...rest,
            construct_id: constructId,
          })),
        });

        await sdk.InsertAnnotation({
          construct_id: constructId,
          input: getAnnotationsFromParts(updatedConstructParts, constructId),
        });

        const activeFolder = folders.find(({ id }) => id === fid);

        if (activeFolder) {
          activeFolder.constructs.push({
            construct: newConstruct,
          });
        }

        return data;
      });
      break;
    default:
      break;
  }

  return { newConstruct, newFolder, folders: data.folder };
}

export const dashboardMachine = createMachine<DashboardContext, DashboardEvent>(
  {
    id: 'dashboard',
    context: {
      newConstruct: null,
      newFolder: null,
      folders: [],
      recentConstructs: [],
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
              (_, fallbackData) => fallbackData as Partial<DashboardContext>
            ),
          },
          CREATE: { target: 'ready.creating' },
          OPEN_CONSTRUCT: {
            actions: assign((context, { value: currentConstruct }) => {
              const constructs = [...context.recentConstructs];
              const existingIdx = constructs.findIndex(
                ({ id }) => id === currentConstruct?.id
              );
              if (existingIdx !== -1) {
                constructs.splice(existingIdx, 1);
              }
              constructs.unshift(currentConstruct);

              typeof window !== 'undefined' &&
                localStorage.setItem(
                  'recentConstructs',
                  JSON.stringify(constructs)
                );

              return {
                ...context,
                recentConstructs: constructs,
              };
            }),
          },
          CLEAR_RECENT_CONSTRUCTS: {
            actions: assign((context) => {
              return {
                ...context,
                recentConstructs: [],
              };
            }),
          },
          'PARTLIB.ENGAGE': {
            actions: forwardTo('partLibSvc'),
          },
          'PARTLIB.RESET': { actions: forwardTo('partLibSvc') },
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
