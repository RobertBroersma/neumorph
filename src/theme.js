const breakpoints = ['30em', '48em', '62em', '80em']
// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const baseSizes = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
}

const largeSizes = {
  full: '100%',
  '3xs': '14rem',
  '2xs': '16rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
}

const containers = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}

const sizes = {
  ...baseSizes,
  ...largeSizes,
  containers,
}

const typography = {
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fonts: {
    heading: `"Josefin Sans"`,
    body: `"Josefin Sans"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
}

const radii = {
  none: '0',
  sm: '16px',
  md: '20px',
  lg: '24px',
  full: '9999px',
}

const noOutset = '0 0 0px rgba(0, 0, 0, 0), 0 0 0px rgba(0, 0, 0, 0)'
const noInset = 'inset 0 0 0px rgba(0, 0, 0, 0), inset 0 0 0px rgba(0, 0, 0, 0)'

export const theme = {
  ...typography,
  radii,
  sizes,
  breakpoints,
  colors: {
    background: {
      50: '#353B42',
    },
    foreground: {
      50: '#ffffff',
    },
  },
  shadows: {
    outside: {
      sm: `${noInset}, 1px 1px 5px #0D0E0F, -3px -3px 9px #353B42`,
      md: `${noInset}, 4px 3px 19px #0D0E0F, -5px -5px 20px #40464E`,
      lg: `${noInset}, 10px 10px 40px #0D0E0F, -10px -10px 40px #40464E`,
    },
    inside: {
      lg: `inset 5px 5px 22px #0D0E0F, inset -3px -3px 22px #40464E, ${noOutset}`,
      md: `inset 3px 3px 10px #0D0E0F, inset -3px -3px 10px #40464E, ${noOutset}`,
      sm: `inset 2px 2px 6px #0D0E0F, inset -2px -2px 3px #40464E, ${noOutset}`,
    },
  },
}
