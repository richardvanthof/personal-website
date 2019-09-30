import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
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

const PortfolioLayout = ({ children, pageContext }) => {
  const {
    title,
    client,
    date,
    type,
    description,
    video,

    alt,
    duration,
    cta,
    url,
  } = pageContext.frontmatter;
  const data = useStaticQuery(graphql`
    query getFeaturedImage {

      allMdx(
      filter: {id: {eq: "046b9efa-7674-5647-802d-46a1676d3498" }}
      ){
        edges {
          node {
            frontmatter {
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
      }
    }
  `);
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
          alt={alt}
          fluid={data.allMdx.edges[0].node.frontmatter.image.childImageSharp.fluid}
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

// export const getHeaderImage = graphql`
// query GetBlogPosts($id: String!) {

// `;

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
