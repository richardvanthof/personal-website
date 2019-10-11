import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import GlobalStyle from '../styles/globalStyles';
import NoScript from '../components/noScript';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PortfolioHeader from '../components/portfolioHeader';
import theme from '../styles/theme';
import removeLoader from '../lib/removeLoader';

const Main = styled.main`
  transition: 0.5 ease-in-out;
  margin-top: 5vh;
`;

const PortfolioLayout = ({ data: { mdx } }) => {
  const {
    title, video, type, alt, description, client,
  } = mdx.frontmatter;

  removeLoader();

  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        <NoScript />
        <PortfolioHeader
          title={title}
          video={video}
          type={type}
          alt={alt}
          // date={date}
          fluid={mdx.frontmatter.image.childImageSharp.fluid}
          description={description}
          client={client}
        />
        <Main>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Main>
        <Footer />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        type
        alt
        video
        description
        image {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
      }
    }
  }
`;

PortfolioLayout.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
};

export default PortfolioLayout;
