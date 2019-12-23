import { css } from 'styled-components';
import WebFont from 'webfontloader';
import theme from './theme';
import generateTextSizes, { scaleHeaders } from '../lib/textScale';

// Import Haverj W01 Bold font
const haverj = {
  /* eslint-disable global-require */
  eot: require('../static/fonts/Haverj-W01-Bold/563c8b9b0fb5bd192bb632f1d851fd6d.eot'),
  woff: require('../static/fonts/Haverj-W01-Bold/563c8b9b0fb5bd192bb632f1d851fd6d.woff'),
  woff2: require('../static/fonts/Haverj-W01-Bold/563c8b9b0fb5bd192bb632f1d851fd6d.woff2'),
  ttf: require('../static/fonts/Haverj-W01-Bold/563c8b9b0fb5bd192bb632f1d851fd6d.ttf'),
  svg: require('../static/fonts/Haverj-W01-Bold/563c8b9b0fb5bd192bb632f1d851fd6d.svg'),
  /* eslint-enable global-require */
};

const baseLineHeight = theme.typography.base.lineheight;
const HeaderFonts = theme.typography.heading.font;
const BaseFonts = theme.typography.base.font;

const { mediaQueries, colors } = theme;

const fontSizes = {
  lg: generateTextSizes(1.33),
  md: generateTextSizes(1.33),
  sm: generateTextSizes(1.27),
  xs: generateTextSizes(1.11),
};

const scaleText = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  html {
    margin: 0;
    padding: 0;
    line-height: ${baseLineHeight};
    font-size: ${fontSizes.xs[0]}
    ${scaleHeaders(fontSizes.xs)};

    @media ${mediaQueries.xs} {
      font-size: ${fontSizes.sm[0]};
      ${scaleHeaders(fontSizes.sm)}
    }

    @media ${mediaQueries.md} {
      font-size: ${fontSizes.md[0]};
      ${scaleHeaders(fontSizes.md)}
    }

    @media ${mediaQueries.lg} {
      font-size: ${fontSizes.lg[0]};
      ${scaleHeaders(fontSizes.lg)}
    }

  }
  body {
    margin: 0;
    padding: 0;
    &::selection {
      background: ${colors.yellow};
    }
  }

  p, a, li {

  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0em;
  }
`;

if (typeof window !== 'undefined') {
  WebFont.load({
    google: {
      families: ['Karla', 'Source Sans Pro'],
    },
  });
}

const setFont = css`
  @font-face {font-family: "Haverj W01 Bold";
    src: url("${haverj.eot}"); /* IE9*/
    src: url("${haverj.eot}?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("${haverj.woff2}") format("woff2"), /* chrome、firefox */
    url("${haverj.woff}") format("woff"), /* chrome、firefox */
    url("${haverj.ttf}") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url("${haverj.svg}#Haverj W01 Bold") format("svg"); /* iOS 4.1- */
  }

  color: ${colors.black};
  -webkit-font-smoothing: antialiased;
  body {
    font-family: ${BaseFonts.join(', ')};
  };
  h1, h2, h3, h4, h5, h6 {
    font-family: ${HeaderFonts.join(', ')};
    font-weight: normal;
    line-height: 0.9em;
    margin-bottom: 0.44em;
    color: ${colors.black};
  }

  h1 {
    font-family: 'Haverj W01 Bold', 'Times New Roman', Times, serif;
  }

  h5 {
    margin-bottom: 0.22em;
    line-height: 0.85em;
  }

  h6 {
    margin-bottom: 0.22em;
    line-height: 0.95em;
  }

  .light {
    color: ${colors.textLight};
  }

  .big {
    font-size: 1.33em;
  }

  .xl {
    font-size: 1.66em;
  }

  .small {
    font-size: 0.8em;
    color: ${colors.textLight};
  }

  .xs {
    font-size: 0.66em;
  }

  .no-margin {
    margin: 0;
  }
`;

const typography = css`
  ${scaleText}
  ${setFont}
`;

export default typography;
