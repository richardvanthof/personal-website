import { createGlobalStyle } from 'styled-components';

import normalize from './normalize';
import typography from './typography';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${typography}
`;

export default GlobalStyle;
