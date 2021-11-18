import faker from 'faker';

const SEQUENCE = 'GACT';

export const partType = {
  id: faker.datatype.uuid(),
  name: 'Test part type',
  glyph: '<svg><path/></svg>',
};

export const parts = Array.from({ length: 10 }, (element, index) => ({
  id: faker.datatype.uuid(),
  name: `Test part ${index + 1}`,
  sequence: SEQUENCE,
  sequence_length: SEQUENCE.length,
  type: partType,
}));

export const part = parts[0];
