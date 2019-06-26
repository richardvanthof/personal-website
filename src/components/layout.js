/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from "../styles/GlobalStyle";
import NoScript from "./NoScript";
import Navbar from "./Navbar"
import Footer from "./Footer"

import theme from "../styles/theme";

const Main = styled.main `
  animation: fadeIn 4s ease;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    60% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (

    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <NoScript />
        <main>{children}</main>
        <Footer />
        <GlobalStyle />
      </div>
    </ThemeProvider>

    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
