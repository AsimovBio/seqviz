import type {
  Annotation_Insert_Input,
  PartFieldsFragment,
} from 'models/graphql';

type ConstructPart = { id: 'uuid'; part?: Partial<PartFieldsFragment> };

export function getAnnotationsFromParts(
  constructParts: ConstructPart[],
  constructId?: string
): Annotation_Insert_Input[] {
  let currLength = 0;

  return constructParts
    .filter(({ part: { sequence } }) => !!sequence)
    .map(({ id: constructPartId, part: { name, sequence_length } }) => {
      const start = currLength;
      const end = currLength + sequence_length;
      currLength = end;

      return {
        construct_id: constructId,
        construct_part_id: constructPartId,
        label: name,
        start,
        end,
      };
    });
}
