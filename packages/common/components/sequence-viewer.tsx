import { SeqViz } from 'seqviz';

import { styled } from '../stitches.config';

export type Props = {
  direction: string;
  sequence: string;
  [key: string]: unknown;
};

const StyledSeqViz: any = styled(SeqViz, {});

const DIR_MAP = new Map([
  ['forward', 1],
  ['reverse', 0],
]);

export default function SequenceViwer({
  direction,
  sequence,
  ...props
}: Props) {
  return (
    <StyledSeqViz
      direction={DIR_MAP.get(direction) ?? 0}
      seq={sequence}
      {...props}
    />
  );
}
