import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SEO from '../components/seo';
import DefaultLayout from '../layouts/defaultLayout';
import { Blogpost } from '../components/thumbnail';
import Gallery from '../components/gallery';
import Button from '../components/button';

import theme from '../styles/theme';

const { mediaQueries, colors } = theme;

const HeroHeader = styled.header`
  height: 35vh;
  min-height: 25rem;
  padding: 3em 1em;
  display: flex;
  flex-direction: column;
  align-items: start;
  background: ${colors.white};
  * {
    flex-basis: 50%;
  }
  @media ${mediaQueries.sm} {
    flex-direction: row;
    align-items: end;
  }
`;

const Work = styled.section`

`;

const Subtitle = styled.p`
`;

const HeaderDescription = styled.div`
  @media ${mediaQueries.xs} {
    div {
      max-width: 50%;
      margin: auto;
    }
  }
`;

const IndexPage = ({ data }) => {
  const { edges: posts } = data.projects;
  return (
    <DefaultLayout gray>
      <SEO title="Home" />
      <HeroHeader>
        <h1>Finding connections everywhere</h1>
        <HeaderDescription>
          <div>
            <Subtitle>
            I am Richard van &apos;t Hof. Richard is a Rotterdam based audiovisual
            maker, editor and front-end developer who usus his connective mind
            to find connection everywhere.
            </Subtitle>
            <Button to="/about" title="Learn more" />
          </div>
        </HeaderDescription>
      </HeroHeader>
      <Work id="work">
        <Gallery fluid width={50}>
          {
          posts.map(({ node: post }, index, key) => {
            const setRight = (index % 2 === 0);
            return (
              <Blogpost padded right={setRight} data={post} key={key} />
            );
          })
        }
        </Gallery>
      </Work>

*

    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query {
    projects: allMdx (
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
    },
    image: file(relativePath: {eq: "headers/Richard/img030.jpeg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.object,
    projects: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};

Blogpost.propTypes = {
  data: PropTypes.shape({
    key: PropTypes.number.isRequired,
  }),

};

IndexPage.defaultProps = {
  data: PropTypes.shape({
    allMdx: null,
  }),
};

Blogpost.defaultProps = {
  data: PropTypes.shape({
    key: null,
  }),
};

export default IndexPage;
