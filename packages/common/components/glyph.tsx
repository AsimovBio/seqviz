import { memo } from 'react';

import { styled } from '../stitches.config';
import Icon from './icon';

type Props = {
  name: string;
  glyph: string;
};

export const GlyphContainer = styled('span', {
  svg: {
    height: '6em',
    position: 'relative',
    strokeAlignment: 'inner',
    strokeLinecap: 'butt',
    zIndex: 1,

    '#part, #part *, #axis': {
      stroke: 'currentColor',
      // #fill is a special element in our SVGs intended to cover up the axis and any other background elements.
      // We can remove / edit this when we have more consistent ways of handling that case in the SVGs themselves.
      '&#fill, &#fill *': {
        stroke: 'none !important',
        fill: 'inherit',
      },
    },
  },
});

function Glyph({ name, glyph, ...props }: Props) {
  return (
    <Icon label={name} {...props}>
      <GlyphContainer dangerouslySetInnerHTML={{ __html: glyph }} />
    </Icon>
  );
}

export default memo(Glyph);
