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

const Main = styled.main`
  transition: 0.5 ease-in-out;
`;

const PortfolioLayout = ({ data: { mdx } }) => {
  const {
    video,
    type,
    title,
    alt,
    date,
    description,
  } = mdx.frontmatter;
  const img = mdx.frontmatter.image.childImageSharp.fluid;

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
          date={date}
          description={description}
          fluid={img}
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
          video
          type
          title
          alt
          date
          description
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    }
  }
`;

PortfolioLayout.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      body: PropTypes.node,
      frontmatter: PropTypes.frontmatter({
        video: PropTypes.string,
        title: PropTypes.string,
        alt: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default PortfolioLayout;
