import { css } from 'styled-components';
// import WebFont from 'webfontloader';
import theme from './theme';
import textScale, { scaleHeaders } from '../lib/textScale';

const baseLineHeight = theme.typography.base.lineheight;
const HeaderFonts = theme.typography.heading.font;
const BaseFonts = theme.typography.base.font;

const { mediaQueries } = theme;

const fontSizes = {
  lg: textScale(1.36),
  md: textScale(1.33),
  sm: textScale(1.22),
  xs: textScale(1.11),
};

const scaleText = css`
  html {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    line-height: ${baseLineHeight};
    font-size: ${fontSizes.xs[0]}
    ${scaleHeaders(fontSizes.xs)};

    @media ${mediaQueries.sm} {
      font-size: ${fontSizes.sm[0]}
      ${scaleHeaders(fontSizes.sm)};
    };

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
  }

  p, a, li {

  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0em;
  }


  small {
    font-size: 80%;
    line-height: 0.85em;
  }
  big {
    font-size: 120%;
    line-height: 1.15em;
  }

`;

const setFont = css`
  body {
    font-family: ${BaseFonts.join(', ')};
  };
  h1, h2, h3, h4, h5, h6 {
    font-family: ${HeaderFonts.join(', ')};
    font-weight: normal;
  }
`;

const typography = css`
  ${scaleText}
  ${setFont}
`;

export default typography;
