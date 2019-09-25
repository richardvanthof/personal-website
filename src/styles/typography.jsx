import { css } from 'styled-components';
import WebFont from 'webfontloader';
import theme from './theme';

const baseLineHeight = theme.typography.base.lineheight;
const mediaQuery = theme.mediaQueries;
const HeaderFonts = theme.typography.heading.font;
const BaseFonts = theme.typography.base.font;

WebFont.load({
  google: {
    families: ['Karla:300,400,700', 'sans-serif'],
  },
});

const generateTextScale = {

  // Saves scaleratio and text bases
  ratio: 1.333, // number
  base: [18], // array[ number ]
  defaultFontSize: 16,

  // Set Scale ratio (number)
  set setRatio(input) {
    this.ratio = input;
  },
  // Set Base size (array[number])
  set setBase(input) {
    this.base = input;
  },
  scale() {
    const baseSizes = this.base.map(currentValue => currentValue / this.defaultFontSize);
    // // Generate font sizes for a base size
    const generateTextSizes = (base) => {
      const { ratio } = this;
      const textSizes = [];
      for (let i = 0; i < 10; i++) {
        const newSize = (base * (ratio ** i)).toFixed(3);
        textSizes.push(`${newSize}rem`);
      }
      return textSizes;
    };

    // Generate font sizes for a base size
    if (baseSizes.length > 1) {
      const allTextSizes = baseSizes.map(currentValue => generateTextSizes(currentValue));
      return allTextSizes;
    }

    return generateTextSizes(baseSizes);
  },
};

// Shortcut 'ms'f (modular scale or 'generateTextSize'
const size = generateTextScale.scale();

const setHeadingSize = (scaleIndex) => {
  const scale = scaleIndex || 0;
  const RawCss = [];
  const elements = ['p', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1'];
  for (let i = 0; i < elements.length; i += 1) {
    // eslint-disable-next-line no-sequences
    RawCss.push(`${elements[i]} {font-size: ${size[scale, i]} };`);
  }
  return RawCss.join('\n');
};
const baseFontSize = size[0];
const scaleText = css`
  html {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: ${baseFontSize};
    line-height: ${baseLineHeight};
    @media ${mediaQuery.md} {
      font-size: calc(${baseFontSize}*1.2);
    }

    @media ${mediaQuery.lg} {
      font-size: calc(${baseFontSize}*1.3);
    }

    @media ${mediaQuery.xl} {
      font-size: calc(${baseFontSize}*1.35);
    }

    @media ${mediaQuery.xxl} {
      font-size: calc(${baseFontSize}*1.5);
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

  ${setHeadingSize()}

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
