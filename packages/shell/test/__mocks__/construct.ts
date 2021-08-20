import faker from 'faker';

import { parts } from './parts';
import { project } from './project';

const constructParts = Array.from({ length: 10 }, (element, index) => ({
  construct_id: faker.datatype.uuid(),
  id: faker.datatype.uuid(),
  index,
  name: `Test construct part ${index + 1}`,
  orientation: 'forward',
  part: parts[index],
  part_id: parts[index].id,
}));

export const constructPart = constructParts[0];

export const construct = {
  id: faker.datatype.uuid(),
  name: 'Test construct',
  construct_parts: constructParts,
  construct_projects: [
    { construct_id: faker.datatype.uuid(), project_id: project.id },
  ],
};
