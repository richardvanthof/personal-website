import { createGlobalStyle } from 'styled-components';

import normalize from './normalize';
import typography from './typography';

const GlobalStyle = createGlobalStyle`
  .body {
    scroll-behavior: smooth;

  }
  ${normalize}
  ${typography}
  /* Quick Fixes/Hacks :( */
  .gatsby-resp-image-background-image {
    display: none !important;
  }
`;

export default GlobalStyle;
