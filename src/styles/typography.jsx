import { css } from 'styled-components';
import WebFont from 'webfontloader';
import theme from './theme';
import textScale, { scaleHeaders } from '../lib/textScale';

const baseLineHeight = theme.typography.base.lineheight;
const HeaderFonts = theme.typography.heading.font;
const BaseFonts = theme.typography.base.font;

const { mediaQueries, colors } = theme;

const fontSizes = {
  lg: textScale(1.44),
  md: textScale(1.33),
  sm: textScale(1.30),
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

WebFont.load({
  google: {
    families: ['Karla', 'Source Sans Pro']
  },
});

const setFont = css`
  color: ${colors.black};
  body {
    font-family: ${BaseFonts.join(', ')};
  };
  h1, h2, h3, h4, h5, h6 {
    font-family: ${HeaderFonts.join(', ')};
    font-weight: normal;
    line-height: 0.95em;
    margin-bottom: 0.33em;
  }

  h4 {
    font-family: serif;
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

  .no-margin {
    margin: 0;
  }
`;

const typography = css`
  ${scaleText}
  ${setFont}
`;

export default typography;
