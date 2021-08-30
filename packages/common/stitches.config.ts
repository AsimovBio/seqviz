import { createCss } from '@stitches/react';

export const { css, getCssString, global, keyframes, styled, theme } =
  createCss({
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
        active: '#E0E0E0',
        background: '#F8F8F8',
        dark: '#060606',
        highlight: '#F0F0F0',
        lightText: '#5a5a5a',
        muted: '#e6e6e6',
        mutedText: '#9a9a9a',
        shadow: '#999',
        overlay: '#FFF',
        primary: '#ff7017',
        secondary: '#b017c6',
        tertiary: '#FAFAFF',
        warning: '#E86957',
        quaternary: '#6061FF',
        quinary: '#EFEFFF',
        senary: '#E5E5FF',
        text: '#383838',
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
      // Abbreviated margin properties
      m:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          marginTop: value,
          marginBottom: value,
          marginLeft: value,
          marginRight: value,
        }),
      mt:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          marginTop: value,
        }),
      mr:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          marginRight: value,
        }),
      mb:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          marginBottom: value,
        }),
      ml:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          marginLeft: value,
        }),
      mx:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          marginLeft: value,
          marginRight: value,
        }),
      my:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          marginTop: value,
          marginBottom: value,
        }),
      // Abbreviated padding properties
      p:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          paddingTop: value,
          paddingBottom: value,
          paddingLeft: value,
          paddingRight: value,
        }),
      pt:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          paddingTop: value,
        }),
      pr:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          paddingRight: value,
        }),
      pb:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          paddingBottom: value,
        }),
      pl:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          paddingLeft: value,
        }),
      px:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          paddingLeft: value,
          paddingRight: value,
        }),
      py:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          paddingTop: value,
          paddingBottom: value,
        }),

      // A property for applying width/height together
      size:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          width: value,
          height: value,
        }),

      // A property to apply linear gradient
      linearGradient:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          backgroundImage: `linear-gradient(${value})`,
        }),

      // An abbreviated property for border-radius
      br:
        (config) =>
        (
          value:
            | number
            | `$${
                | keyof typeof config['theme']['space']
                | (string & Record<string, unknown>)}`
        ) => ({
          borderRadius: value,
        }),
    },
    insertionMethod: 'append',
  });
