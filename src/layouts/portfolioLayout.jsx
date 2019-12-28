import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import GlobalStyle from '../styles/globalStyles';
import SEO from '../components/seo';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PortfolioHeader from '../components/portfolioHeader.v2';
import theme from '../styles/theme';
import removeLoader from '../lib/removeLoader';

const { colors, mediaQueries } = theme;

const Main = styled.main`
  transition: 0.5 ease-in-out;
  @media ${mediaQueries.xs} {
    margin-top: 5vh;
  }
`;

const Page = styled.div`
  background: ${colors.bgLight};
`;

const PortfolioLayout = ({ data: { mdx } }) => {
  const {
    title, video, runningTime, website, repo, date, type, alt, description, client,
  } = mdx.frontmatter;

  removeLoader();

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <SEO title={title} />
        <Navbar />
        <PortfolioHeader
          title={title}
          video={video}
          type={type}
          alt={alt}
          year={date}
          length={runningTime}
          website={website}
          repository={repo}
          fluid={mdx.frontmatter.image.childImageSharp.fluid}
          description={description}
          client={client}
        />
        <Main>

          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Main>
        <Footer />
        <GlobalStyle />
      </Page>
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
        date
        client
        website
        repo
        runningTime
        description
        image {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
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
