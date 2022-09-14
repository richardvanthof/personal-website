import { css } from 'styled-components';
import theme from './theme';
import NeueHaasUnicaRegular from '../static/fonts/Neue-haas-unica/NeueHaasUnica-Regular.ttf';
import NeueHaasUnicaItalic from '../static/fonts/Neue-haas-unica/NeueHaasUnica-Italic.ttf';
import NeueHaasUnicaLight from '../static/fonts/Neue-haas-unica/NeueHaasUnica-Light.ttf';
import NeueHaasUnicaLightItalic from '../static/fonts/Neue-haas-unica/NeueHaasUnica-LightItalic.ttf';
import NeueHaasUnicaMedium from '../static/fonts/Neue-haas-unica/NeueHaasUnica-Medium.ttf';
import NeueHaasUnicaMediumItalic from '../static/fonts/Neue-haas-unica/NeueHaasUnica-MediumItalic.ttf';
import NeueHaasGroteskRoman from '../static/fonts/Neue-haas-grotesk/NHaasGroteskDSPro-55Rg.woff';
import NeueHaasGroteskItalic from '../static/fonts/Neue-haas-grotesk/NHaasGroteskDSPro-56It.woff';
import NeueHaasGroteskMedium from '../static/fonts/Neue-haas-grotesk/NHaasGroteskDSPro-65Md.woff';
import NeueHaasGroteskMediumItalic from '../static/fonts/Neue-haas-grotesk/NHaasGroteskDSPro-66MdIt.woff';
import NeueHaasGroteskLight from '../static/fonts/Neue-haas-grotesk/NeueHaasUnicaPro-UltraLight.woff';
import NeueHaasGroteskLightItalic from '../static/fonts/Neue-haas-grotesk/NHaasGroteskDSPro-46LtIt.woff';

const { mediaQueries, colors } = theme;



const fonts = css`
  /* Import Neue Haas Grotesk Family */

  /* Regular */
  @font-face {
    font-family: 'Neue Haas Unica';
    src: url(${NeueHaasUnicaRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Neue Haas Unica';
    src: url(${NeueHaasUnicaItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Neue Haas Unica';
    src: url(${NeueHaasUnicaLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Neue Haas Unica';
    src: url(${NeueHaasUnicaLightItalic}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Neue Haas Unica';
    src: url(${NeueHaasUnicaMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Neue Haas Unica';
    src: url(${NeueHaasUnicaMediumItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  
  @font-face {
    font-family: 'Neue Haas Grotesk';
    src: url(${NeueHaasGroteskRoman}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Neue Haas Grotesk';
    src: url(${NeueHaasGroteskItalic}) format('woff');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Neue Haas Grotesk';
    src: url(${NeueHaasGroteskMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Neue Haas Grotesk';
    src: url(${NeueHaasGroteskMediumItalic}) format('woff');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Neue Haas Grotesk';
    src: url(${NeueHaasGroteskLight}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Neue Haas Grotesk';
    src: url(${NeueHaasGroteskLightItalic}) format('woff');
    font-weight: 300;
    font-style: italic;
  }

`;

const typography = css`
  ${fonts}
  html {
    font-size: 100%;
  }

  body {
    font-family: 'Neue Haas Grotesk', sans-serif;
    font-size: clamp(1.1rem, 1vw, 1.3rem);
    line-height: 1.22em;
    font-weight: 400;
  }

  a, p {
    color: ${colors.textDark};
    text-decoration: none;
    margin: 0 0 0.33em 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    margin: 0 0 0.1em 0;
    line-height: 1.1em;
    margin: 0.1em 0;
  }

  h1 {
    font-size: clamp(1rem, 4vw + 1rem, 7rem);
  }

  h2 {
    font-size: clamp(1rem, 4vw + 1rem, 3rem);
  }

  h3 {
    font-size: clamp(1rem, 3vw , 2rem);
  }

  h4 {
    font-size: clamp(1rem, 1.11vw, 2rem);
  }

  h5 {
    font-size: clamp(0.9rem, 1.11vw, 1.11rem);
  }

  h6 {

  }

  small {
    font-size: clamp(1rem, 0.8vw, 1.15rem);
    line-height: 1.44;
  }

  .big {
    font-size: 1.5rem;
    line-height: 1.4em;
  }
`;

export default typography;
