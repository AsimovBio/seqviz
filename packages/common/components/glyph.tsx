import { memo } from 'react';

import { styled } from '../stitches.config';
import Icon from './icon';

type Props = {
  name: string;
  glyph: string;
};

const GlyphContainer = styled('span', {
  svg: {
    fill: 'none',
    strokeLinecap: 'butt',
    strokeAlignment: 'inner',
    height: '6em',

    '#part, #part *': {
      stroke: 'currentColor',
      // #fill is a special element in our SVGs intended to cover up the axis and any other background elements.
      // We can remove / edit this when we have more consistent ways of handling that case in the SVGs themselves.
      '&#fill, &#fill *': {
        stroke: 'none !important',
        fill: '$background !important',
      },
      // Override white fill with our background color, black fill with 'currentColor'
      '&[fill="#fff"], [fill="#fff"]': {
        fill: '$background',
      },
      '&[fill="#000"], [fill="#000"]': {
        fill: 'currentColor',
      },
    },
  },
});

function Glyph({ name, glyph }: Props) {
  return (
    <Icon label={name}>
      <GlyphContainer dangerouslySetInnerHTML={{ __html: glyph }} />
    </Icon>
  );
}

export default memo(Glyph);
