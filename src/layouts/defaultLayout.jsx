import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import theme from '../styles/theme';

const { mediaQueries } = theme;

const Main = styled.main`
  min-height: 0vh;
  transition: 0.5 ease-in-out;
  scroll-behavior: smooth;
  margin: auto;
  width: 90vw;
  @media ${mediaQueries.lg} {
    width: 80vw;
  }
  overflow: hidden;
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
