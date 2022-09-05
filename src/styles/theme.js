const theme = {};

const white = '#FFFFFF';
const black = 'rgba(0,0,0,0.9)';
const darkBlue = '#000E41';
const darkGray = '#787878';
const middleGray = '#EEEEEE';
const lightGray = '#F6F6F6';
const teal = '#7985B0';
const blue = '#414C74';
const yellow = '#FFFC62';

theme.colors = {
  primairy: blue,
  secundairy: yellow,
  yellow,
  darkBlue,
  black,
  white,
  blue,
  teal,
  bgContent: white,
  textDark: black,
  textLight: blue,
  bgDark: darkGray,
  bgLight: white,
};

theme.breakpoints = {
  xs: '48em',
  sm: '64em',
  md: '85.375em',
  lg: '122em',
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
    font: ['Source Sans Pro', 'sans-serif'],
  },
  heading: {
    lineHeight: '1.11em',
    font: [
      'Karla',
      'sans-serif',
    ],
  },
};

export default theme;
