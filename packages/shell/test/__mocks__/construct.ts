import faker from 'faker';
import type { Part } from 'models/graphql';

import { folder } from './folder';
import { parts } from './parts';

const testConstruct = {
  id: faker.datatype.uuid(),
  name: 'Test construct',
  folders: [{ construct_id: faker.datatype.uuid(), folder_id: folder.id }],
  sequence: 'GATTACA',
};

export const constructParts = Array.from({ length: 10 }, (element, index) => ({
  construct_id: testConstruct.id,
  id: faker.datatype.uuid(),
  index,
  name: `Test construct part ${index + 1}`,
  orientation: 'forward',
  part: parts[index] as Part,
  part_id: parts[index].id,
  construct: testConstruct,
}));

export const constructPart = constructParts[0];

export const construct = {
  ...testConstruct,
  parts: constructParts,
};
