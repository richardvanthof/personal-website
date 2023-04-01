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
import Container from '../components/container';

const { colors, mediaQueries } = theme;

const Main = styled.main`
  transition: 0.5 ease-in-out;
  margin: auto;
  width: 80vw;
`;

const Wrapper = styled.div`
  display: flex;
  
`;

const TextBlock = ({title, text, children}) => (
  <Container>
    <Wrapper>
      <h4>{title}</h4>
      <p>{text||children}</p>
    </Wrapper>
  </Container>
);

const PortfolioLayout = ({ data: { mdx } }) => {
  const {
    title, video, runningTime, website, repo, date, type, alt, description, client,
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
          description="Montage for Come Undone videoclip by UMM. Directed by Jorick Buurstra."
          client={client}
        />
        <PortfolioDescription
          description={description}
          type={type}
          year={date}
          role="editor"
          client={client}
        />
        <Main>
          {/* <TextBlock title="The story">
            In the neoliberal society, everyone is able to get the most out of life and themselves, as long as they work hard and make good choices. It's your own fault if you can't make it work.  This creates an obligation to always be the most optimal version of yourself. In the age of social media this way of thinking is not only accelerated by the perfect posted lives but also by superfluity of challenges and technological solutions to improve yourself if you are still 'imperfect'. In the experimental documentary *De Zelfoptimisator* (The Self-optimalisator), filmmaker Yorben den Hartog questions this trend by performing all the productivity challenges and technical solutions simultaniously he found on his timelines for a month to see if he can actually become this 'perfect self'. After this, he goes into nature without work, challenges and technology for a month to see what really works.
          </TextBlock> */}
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
