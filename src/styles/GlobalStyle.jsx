import { createGlobalStyle } from "styled-components"

import normalize from "../mixins/normalize"
import textScaling from "../mixins/textScaling"
import typography from "../utilities/typography"

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${typography.injectStyles()}
  ${textScaling}
`

export default GlobalStyle
