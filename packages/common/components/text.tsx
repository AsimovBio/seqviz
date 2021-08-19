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
    },
    font: {
      body: {
        fontFamily: '$body',
      },
      heading: {
        fontFamily: '$heading',
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
  compoundVariants: [
    {
      font: 'heading',
      uppercase: true,
      css: {
        fontWeight: '$heading',
        fontSize: '$4',
      },
    },
    {
      font: 'body',
      css: {
        fontWeight: '$heading',
        fontSize: '$2',
      },
    },
  ],
  defaultVariants: {
    font: 'body',
  },
});
