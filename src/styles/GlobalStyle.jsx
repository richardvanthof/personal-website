import {createGlobalStyle, ThemeConsumer} from 'styled-components';

import normalize from '../mixins/normalize';
import textScaling from '../mixins/textScaling';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${textScaling}
`

export default GlobalStyle;