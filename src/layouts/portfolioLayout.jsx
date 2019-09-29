import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import NoScript from '../components/noScript';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PortfolioHeader from '../components/portfolioHeader';
import theme from '../styles/theme';

const Main = styled.main`
  transition: 0.5 ease-in-out;
`;
const PortfolioLayout = ({ children, pageContext}) => {
  const {
    title,
    client,
    date,
    type,
    description,
    video,
    image,
    alt,
    duration,
    cta,
    url,
  } = pageContext.frontmatter;
  console.log(image);
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar siteTitle="test" />
        <NoScript />
        <PortfolioHeader
          title={title}
          client={client}
          date={date}
          type={type}
          description={description}
          image={image}
          alt={alt}
          video={video}
          length={duration}
          cta={cta}
          url={url}
        />
        <Main>{children}</Main>
        <Footer />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};


PortfolioLayout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
};

PortfolioLayout.defaultProps = {
  children: null,
  pageContext: null,
};

export default PortfolioLayout;
