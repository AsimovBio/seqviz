import faker from 'faker';

import { constructParts } from './construct';

let currLength = 0;

export const CONSTRUCT_ID = faker.datatype.uuid();

export const annotations = constructParts.map(
  ({ id, part: { name, sequence_length } }) => {
    const start = currLength;
    const end = currLength + sequence_length;
    currLength = end;
    return {
      construct_id: CONSTRUCT_ID,
      construct_part_id: id,
      label: name,
      start,
      end,
    };
  }
);
