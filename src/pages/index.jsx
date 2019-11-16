/* eslint-disable no-unused-vars */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import DefaultLayout from '../layouts/defaultLayout';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx (
        filter: {fields: {slug: {eq: "/work/richard-hotline/"}}}
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              key
              client
              type
              description
              video
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              alt
              length
              draft
              url
            }
          }
        }
      }
    }
  `);
  return (
    <DefaultLayout>
      <h1>
        Richard explores his creative chaos to gain new perspectives on the world
      </h1>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    </DefaultLayout>
  );
};

export default IndexPage;
