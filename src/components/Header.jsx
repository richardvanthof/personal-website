import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import theme from "../styles/theme"
const breakpoint = theme.mediaQueries
const sizeRef = theme.container

const paddingBottom = "1em"

const HeaderBase = styled.header`
  padding: 7em ${sizeRef.sm} 2em ${sizeRef.sm};
  margin-bottom: 1em;
  background: whitesmoke;

  @media ${breakpoint.md} {
    padding: 10em ${sizeRef.md} ${paddingBottom} ${sizeRef.md};
  }

  @media ${breakpoint.lg} {
    padding: 10em ${sizeRef.lg} ${paddingBottom} ${sizeRef.lg};
  }

  @media ${breakpoint.xl} {
    padding: 10em ${sizeRef.xl} ${paddingBottom} ${sizeRef.xl};
  }
`

const Header = props => {
  const { children } = props
  return <HeaderBase>{children}</HeaderBase>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
