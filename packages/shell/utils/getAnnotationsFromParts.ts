import type {
  Annotation_Insert_Input,
  PartFieldsFragment,
} from 'models/graphql';

export function getAnnotationsFromParts(
  parts: PartFieldsFragment[],
  constructId?: string
): Annotation_Insert_Input[] {
  let currLength = 0;
  return parts
    .filter(({ sequence }) => !!sequence)
    .map(({ name, sequence_length }) => {
      const start = currLength;
      const end = currLength + sequence_length;
      currLength = end;
      return {
        construct_id: constructId,
        label: name,
        start,
        end,
      };
    });
}
