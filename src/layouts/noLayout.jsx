import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
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

const Layout = ({ children }) => {
  removeLoader();
  return (
    <StaticQuery
      query={graphql`
        query noLayoutQuery {
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
            <Main>{children}</Main>
            <GlobalStyle />
          </>
        </ThemeProvider>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
