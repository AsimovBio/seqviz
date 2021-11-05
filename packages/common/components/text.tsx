import { styled } from '../stitches.config';

export default styled('p', {
  color: '$body',
  fontFamily: '$body',
  m: 0,
  variants: {
    size: {
      0: {
        fontSize: '$0',
      },
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
      4: {
        fontSize: '$4',
      },
      5: {
        fontSize: '$5',
      },
      6: {
        fontSize: '$6',
      },
    },
    font: {
      body: {
        fontFamily: '$body',
        fontWeight: '$body',
      },
      heading: {
        fontFamily: '$heading',
        fontWeight: '$heading',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
  },
  defaultVariants: {
    font: 'body',
  },
});
