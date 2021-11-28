import { constructParts } from 'test/__mocks__/construct';
import { getAnnotationsFromParts } from 'utils/getAnnotationsFromParts';

import { annotations, CONSTRUCT_ID } from '../__mocks__/annotations';

describe('getAnnotationsFromParts', () => {
  it('takes a list of parts and returns a list of annotations', () => {
    const newAnnotations = getAnnotationsFromParts(
      constructParts,
      CONSTRUCT_ID
    );
    expect(newAnnotations).toEqual(annotations);
  });
});
