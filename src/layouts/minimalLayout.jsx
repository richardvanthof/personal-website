import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import NoScript from '../components/noScript';
import Navbar from '../components/navbar';
import removeLoader from '../lib/removeLoader';
import Copyright from '../components/copyright';

import theme from '../styles/theme';

const { colors } = theme;

const Main = styled.main`
  min-height: 0vh;
  transition: 0.5 ease-in-out;
  /* background: ${colors.bgLight}; */
`;

const MinimalLayout = ({ children }) => {
  removeLoader();
  return (
    <StaticQuery
      query={graphql`
        query MinimalLayoutQuery {
          site {
            siteMetadata {
              title
              author
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
            <Copyright />
          </>
        </ThemeProvider>
      )}
    />
  );
};

MinimalLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MinimalLayout;
