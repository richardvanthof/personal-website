const theme = {};

const white = '#FEFEFE';
const black = '#141414';
const lightGray = '#F2F2F2';
const blue = '#1000FF';

theme.colors = {
  primairy: blue,
  white,
  bgDark: black,
  bgLight: lightGray,
};

theme.breakpoints = {
  xs: '48em',
  sm: '64em',
  md: '85.375em',
  lg: '120em',
  xl: '160em',
  xxl: '192em',
};

theme.mediaQueries = {
  xs: `(min-width: ${theme.breakpoints.xs})`,
  sm: `(min-width: ${theme.breakpoints.sm})`,
  md: `(min-width: ${theme.breakpoints.md})`,
  lg: `(min-width: ${theme.breakpoints.lg})`,
  xl: `(min-width: ${theme.breakpoints.xl})`,
  // xxl: "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 200dpi)",
  xxl: `(-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-width: ${theme.breakpoints.xxl})`,
};

theme.container = {

  sm: '4vw',
  md: '8vw',
  lg: '12vw',
  xl: '18vw',
};

theme.typography = {
  base: {
    size: '1em',
    lineHeight: '1.66em',
    font: ['sans-serif'],
  },
  heading: {
    lineHeight: '1.11em',
    font: [
      'sans-serif',
    ],
  },
};

export default theme;
