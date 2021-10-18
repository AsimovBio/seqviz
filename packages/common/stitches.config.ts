import type { PropertyValue, ScaleValue } from '@stitches/react';
import { createStitches } from '@stitches/react';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    space: Object.fromEntries(
      new Map(
        Object.entries([
          0,
          '.25rem',
          '.5rem',
          '1rem',
          '2rem',
          '4rem',
          '8rem',
          '16rem',
          '32rem',
        ])
      )
    ),
    fonts: {
      body: '"Roboto Mono", system-ui, -apple-system, sans-serif',
      heading: '"Helvetica Neue", system-ui, -apple-system, sans-serif',
      monospace: 'inherit',
    },
    fontSizes: Object.fromEntries(
      new Map(
        Object.entries([
          '0.625rem',
          '0.75rem',
          '0.875rem',
          '1rem',
          '1.25rem',
          '1.5rem',
          '1.875rem',
          '2.25rem',
          '3rem',
          '4rem',
          '4.5rem',
        ])
      )
    ),
    fontWeights: {
      body: 400,
      bold: 700,
      heading: 400,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    colors: {
      primary: '#ff7017',
      secondary: '#b017c6',
      tertiary: '#FAFAFF',
      quaternary: '#6061FF',
      quinary: '#EFEFFF',
      senary: '#E5E5FF',
      octonary: '#FFCFB1',
      nonary: '#E9FFD5',
      denary: '#FFF9D5',
      warning: '#D62626',
      warningLight: '#FCEDED',
      overlay: '#FFF',
      background: '#F8F8F8',
      highlight: '#F0F0F0',
      muted: '#e6e6e6',
      active: '#E0E0E0',
      mutedText: '#9a9a9a',
      shadow: '#999',
      lightText: '#5a5a5a',
      text: '#383838',
      dark: '#060606',
    },
    radii: Object.fromEntries(
      new Map(Object.entries([0, '2px', '3px', '4px']))
    ),
    shadows: {
      primary: '0 0 12px $colors$shadow',
      small: '0 0 8px $colors$shadow',
    },
    sizes: Object.fromEntries(
      new Map(
        Object.entries(['0.75rem', '1rem', '2rem', '4rem', '8rem', '16rem'])
      )
    ),
    transitions: { standard: '0.1s ease-in-out' },
  },
  media: {},
  utils: {
    bc: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    // Abbreviated margin properties
    m: (value: ScaleValue<'space'> | number) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: ScaleValue<'space'> | number) => ({
      marginTop: value,
    }),
    mr: (value: ScaleValue<'space'> | number) => ({
      marginRight: value,
    }),
    mb: (value: ScaleValue<'space'> | number) => ({
      marginBottom: value,
    }),
    ml: (value: ScaleValue<'space'> | number) => ({
      marginLeft: value,
    }),
    mx: (value: ScaleValue<'space'> | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: ScaleValue<'space'> | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    // Abbreviated padding properties
    p: (value: ScaleValue<'space'> | number) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: ScaleValue<'space'> | number) => ({
      paddingTop: value,
    }),
    pr: (value: ScaleValue<'space'> | number) => ({
      paddingRight: value,
    }),
    pb: (value: ScaleValue<'space'> | number) => ({
      paddingBottom: value,
    }),
    pl: (value: ScaleValue<'space'> | number) => ({
      paddingLeft: value,
    }),
    px: (value: ScaleValue<'space'> | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<'space'> | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: (value: ScaleValue<'space'> | number) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: ScaleValue<'space'> | number) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: ScaleValue<'space'> | number) => ({
      borderRadius: value,
    }),
  },
});
