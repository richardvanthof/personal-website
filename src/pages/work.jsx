import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import DefaultLayout from '../layouts/defaultLayout';
import SEO from '../components/seo';
import { Blogpost } from '../components/thumbnail';
import Gallery from '../components/gallery';

const Work = ({ data }) => {
  const { edges: posts } = data.allMdx;
  return (
    <DefaultLayout>
      <SEO title="Work" />
      <Gallery fluid width={33}>
        {
          posts.map(({ node: post }, _, key) => (
            <Blogpost small parentFolderName="work" data={post} key={key} />
          ))
        }
      </Gallery>
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query getProjects {
    allMdx {
      edges {
        node {
          fields {
            slug
          }
          fileAbsolutePath
          frontmatter{
            key
            title
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp

                }
              }
            }
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
