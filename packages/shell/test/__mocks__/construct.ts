import { part } from './parts';

export const constructPart = {
  construct_id: '00000000-0000-0000-0000-000000000000',
  id: '00000000-0000-0000-0000-000000000000',
  index: 0,
  name: 'Test construct part',
  orientation: 'forward',
  part,
  part_id: part.id,
};

export const construct = {
  id: '00000000-0000-0000-0000-000000000000',
  name: 'Test construct',
  construct_parts: [constructPart],
};
