import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import DefaultLayout from '../layouts/defaultLayout';
import { Blogpost } from '../components/thumbnail';
import HeroHeader from '../components/heroHeader';

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
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <HeroHeader />
      <Blogpost data={data.allMdx.edges[0].node} />
      <Blogpost right data={data.allMdx.edges[0].node} />
    </DefaultLayout>
  );
};

export default IndexPage;
