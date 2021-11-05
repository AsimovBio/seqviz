import { DashboardContext } from 'components/layout/dashboard-layout';
import type { Construct, Folder } from 'models/graphql';
import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { useCallback } from 'react';
import { mutate } from 'swr';
import { debounce } from 'ts-debounce';
import { sdk } from 'utils/request';

import PageHeader from './header';
import TemplatesDropdown from './templates-dropdown';

type Props = {
  currentFolder?: Partial<Folder>;
  resetUrl: () => void;
  isNewFolder: boolean;
  setMenuActive: (isActive: boolean) => void;
  templates: Construct[];
};

const AutosizeInput = dynamic(
  async () => {
    const { AutosizeInput } = await import('common/components/form');
    return AutosizeInput;
  },
  { ssr: false }
);
const Box: any = dynamic(() => import('common/components/box'));
const Icon: any = dynamic(() => import('common/components/icon'));
const Label = dynamic(async () => {
  const { Label } = await import('common/components/form');
  return Label;
});
const Text: any = dynamic(() => import('common/components/text'));

export default function FolderPageHeader({
  currentFolder,
  resetUrl,
  isNewFolder,
  setMenuActive,
  templates,
}: Props) {
  const { send } = useContext(DashboardContext);

  const handleCreateConstruct = useCallback(
    (template) => {
      if (currentFolder) {
        send({
          fid: currentFolder.id,
          type: 'CREATE',
          value: 'construct',
          ...template,
        });
      }
    },
    [currentFolder, send]
  );

  const handleChange = useCallback(
    (name, value) => {
      mutate(
        'Folders',
        async (data) => {
          if (data) {
            try {
              const { folder: folders } = data;

              const { update_folder_by_pk: updatedFolder } =
                await sdk.UpdateFolder({
                  id: currentFolder.id,
                  input: { [name]: value },
                });

              const idx = folders.findIndex(
                ({ id }) => id === currentFolder?.id
              );

              if (idx !== -1) {
                folders.splice(idx, 1, updatedFolder);

                return { folder: folders };
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
    [currentFolder?.id]
  );

  const handleBlur = () => {
    if (isNewFolder) {
      resetUrl();
    }
  };

  return (
    <PageHeader>
      {currentFolder && (
        <Box
          css={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          {(currentFolder as any)?.chassis && (
            <>
              <Text>{(currentFolder as any).chassis}</Text>
              <Icon label="CaretRight" />
            </>
          )}
          <Label htmlFor="folder-name">
            <Icon
              css={{ mr: '$2', path: { stroke: '$primary' } }}
              label="Folder"
            />
            <AutosizeInput
              autoComplete="off"
              autoFocus={isNewFolder}
              css={{
                mr: '$4',
                input: {
                  border: 'none',
                  flex: 1,
                  m: 0,
                  pr: '$3',
                },
              }}
              id="folder-name"
              name="name"
              onBlur={handleBlur}
              onChange={debounce(handleChange, 500)}
              value={currentFolder?.name}
            />
          </Label>
          <TemplatesDropdown
            onCreateConstruct={handleCreateConstruct}
            onMenuOpen={setMenuActive}
            templates={templates}
          />
        </Box>
      )}
    </PageHeader>
  );
}
