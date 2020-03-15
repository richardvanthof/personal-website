import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DefaultLayout from '../layouts/defaultLayout';
import SEO from '../components/seo';
import { Blogpost } from '../components/thumbnail';
import Gallery from '../components/gallery';
import theme from '../styles/theme';

const { mediaQueries } = theme;

const Header = styled.header`
  @media ${mediaQueries.xs} {
    padding: 0 10vw;
  }
  padding: 0 1em;
  padding-top: 20vh !important;
`;

const Work = ({ data }) => {
  const { edges: posts } = data.allMdx;
  return (
    <DefaultLayout gray>
      <SEO title="Home" />
      {/* <Header title="work" /> */}
      <Header>
        <h1>Work</h1>
      </Header>
      <Gallery fluid width={33}>
        {
          posts.map(({ node: post }, index, key) => {
            const setRight = (index % 2 === 0);
            return (
              <Blogpost small right={setRight} data={post} key={key} />
            );
          })
        }
      </Gallery>
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query getWorkProjects {
    allMdx (
      sort: {fields: frontmatter___rating, order: DESC},
      filter: {frontmatter: {draft: {ne: true}}}
    ){
      edges {
        node {
          fields {
            slug
          }
          fileAbsolutePath
          frontmatter{
            title
            key
            client
            description
            type
            video
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            alt
            draft
          }
        }
      }
    }
  }
`;

Work.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.object,
  }),
};

Blogpost.propTypes = {
  data: PropTypes.shape({
    key: PropTypes.number.isRequired,
  }),

};

Work.defaultProps = {
  data: PropTypes.shape({
    allMdx: null,
  }),
};

Blogpost.defaultProps = {
  data: PropTypes.shape({
    key: null,
  }),
};

export default Work;
