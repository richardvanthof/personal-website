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
import PortfolioDescription from '../components/portfolioDescription';
import theme from '../styles/theme';
import removeLoader from '../lib/removeLoader';

const Main = styled.main`
  transition: 0.5 ease-in-out;
  margin: auto;
  width: 80vw;
`;

const PortfolioLayout = ({ data: { mdx } }) => {
  const {
    title, role, video, runningTime, website, repo, date, type, alt, description, client,
  } = mdx.frontmatter;

  removeLoader();

  return (
    <ThemeProvider theme={theme}>
      <>
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
          description="Montage for Come Undone videoclip by UMM.
          Directed by Jorick Buurstra."
          client={client}
        />
        <PortfolioDescription
          description={description}
          type={type}
          year={date}
          role={role}
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
        date
        client
        website
        repo
        runningTime
        description
        role
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
