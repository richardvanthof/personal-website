import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyles';
import NoScript from '../components/noScript';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import theme from '../styles/theme';

const Main = styled.main`
  min-height: 90vh;
  transition: 0.5 ease-in-out;
`;
// TODO: Find out how to use GraphQl in order to parse right SEO information
const PortfolioLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Navbar siteTitle="test" />
      <NoScript />
      <Main>{children}</Main>
      <Footer />
      <GlobalStyle />
    </>
  </ThemeProvider>
);

PortfolioLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PortfolioLayout;
