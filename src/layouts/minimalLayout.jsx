/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import NoScript from '../components/noScript';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import theme from '../styles/theme';

const Main = styled.main`
  min-height: 0vh;
  transition: 0.5 ease-in-out;
  margin-top: 5vh
`;

const MinimalLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MinimalLayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Navbar siteTitle={data.site.siteMetadata.title} />
          <NoScript />
          <Main>{children}</Main>
          <GlobalStyle />
        </>
      </ThemeProvider>
    )}
  />
);

MinimalLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MinimalLayout;
