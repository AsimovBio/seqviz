import faker from 'faker';

export const parts = Array.from({ length: 10 }, (element, index) => ({
  id: faker.datatype.uuid(),
  name: `Test part ${index + 1}`,
  sequence: 'GACT',
  type: {
    name: 'Test part type',
    glyph: '<svg><path/></svg>',
  },
}));

export const part = parts[0];
