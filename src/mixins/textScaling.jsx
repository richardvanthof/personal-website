import styled, { css } from "styled-components"
import theme from "../styles/theme"

const baseFontSize = theme.typography.base.size
const baseLineHeight = theme.typography.base.lineheight
const mediaQuery = theme.mediaQueries

const textScaling = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1em;
    margin-bottom: 0.66em;
    margin-top: 1em;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${baseFontSize};
    line-height: ${baseLineHeight};

    @media ${mediaQuery.md} {
      font-size: calc(${baseFontSize}*1.2);
      line-height: calc(${baseLineHeight}*1.2);
    }

    @media ${mediaQuery.lg} {
      font-size: calc(${baseFontSize}*1.3);
    }

    @media ${mediaQuery.xl} {
      font-size: calc(${baseFontSize}*1.4);
    }

    @media ${mediaQuery.xxl} {
      font-size: calc(${baseFontSize}*1.5);
    }
  }
`

export default textScaling
