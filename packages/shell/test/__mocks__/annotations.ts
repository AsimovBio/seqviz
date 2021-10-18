import faker from 'faker';

import { parts } from './parts';

let currLength = 0;

export const CONSTRUCT_ID = faker.datatype.uuid();

export const annotations = parts.map(({ name, sequence_length }) => {
  const start = currLength;
  const end = currLength + sequence_length;
  currLength = end;
  return {
    construct_id: CONSTRUCT_ID,
    label: name,
    start,
    end,
  };
});
