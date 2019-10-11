import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import NoScript from '../components/noScript';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import removeLoader from '../lib/removeLoader';

import theme from '../styles/theme';

const Main = styled.main`
  min-height: 0vh;
  transition: 0.5 ease-in-out;
  margin-top: 7vh
`;
const DefaultLayout = ({ children }) => (
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
        <>
          <Navbar siteTitle={data.site.siteMetadata.title} />
          {removeLoader()}
          <NoScript />
          <Main>{children}</Main>
          <Footer />
          <GlobalStyle />
        </>
      </ThemeProvider>
    )}
  />
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
