import { SeqViz } from 'seqviz';

import { styled } from '../stitches.config';

const DEFAULT_COLORS = [
  // These colors are copied from the SeqViz source code
  // https://github.com/Lattice-Automation/seqviz/blob/d40a3b01b70a238badb08b08538b68d2ded777fb/src/utils/colors.js#L54
  '#9DEAED', // cyan
  '#8FDE8C', // green
  '#CFF283', // light green
  '#8CDEBD', // teal
  '#F0A3CE', // pink
  '#F7C672', // orange
  '#F07F7F', // red
  '#FAA887', // red-orange
  '#F099F7', // magenta
  '#C59CFF', // purple
  '#6B81FF', // blue
  '#85A6FF', // light blue
];

export type Props = {
  direction: string;
  sequence: string;
  colors?: string[];
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
  colors = DEFAULT_COLORS,
  ...props
}: Props) {
  return (
    <StyledSeqViz
      colors={colors}
      direction={DIR_MAP.get(direction) ?? 0}
      seq={sequence}
      {...props}
    />
  );
}
