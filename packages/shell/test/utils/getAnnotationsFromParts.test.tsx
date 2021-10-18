import { getAnnotationsFromParts } from 'utils/getAnnotationsFromParts';

import { annotations, CONSTRUCT_ID } from '../__mocks__/annotations';
import { parts } from '../__mocks__/parts';

describe('getAnnotationsFromParts', () => {
  it('takes a list of parts and returns a list of annotations', () => {
    const newAnnotations = getAnnotationsFromParts(parts, CONSTRUCT_ID);
    expect(newAnnotations).toEqual(annotations);
  });
});
