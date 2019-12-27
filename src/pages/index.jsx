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

import { hover } from '../animations/ux';

import smoothScrollToElement from '../lib/smoothScroll';
import EyeIcon from '../static/icons/UI/watch.svg';
import ArrowDownIcon from '../static/icons/UI/arrow_down.svg';
import Chaos from '../static/icons/content/chaos.svg';

const { mediaQueries, colors } = theme;


const HeroHeader = styled.header`

  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15vh;
  background: ${theme.colors.bgLight};
  padding: 1em;
  grid-gap: 5vw;
  display: flex;
  justify-content: center;
  @media ${mediaQueries.sm}{

    display: grid;
    height: 85vh;
    grid-gap: 5vw;
    max-height: none !important;
    min-height: 40em;
    grid-template: 1fr 1fr / 1fr 6fr 6fr 1fr;
  };
  @media ${mediaQueries.md} {
    padding-top: 20vh;
    grid-gap: 3vw;
    grid-template: 1fr 1fr / 1fr 5fr 1fr 3fr 1fr;

  };
`;

const Work = styled.section`

`;

const CallToAction = styled.a`
  width: 100%;
  scroll-behavior: smooth;
  top: 85vh;
  text-decoration: none;
  text-align: left;
  margin-left: 2em;
  @media ${mediaQueries.xs} {
    position: absolute;
    text-align: left;
    margin-right: 0;
    text-align: center;
    margin: 0 auto;
    display: block;
    transform: translateY(15%);
  };
  @media ${mediaQueries.sm} {
    top: 83vh;
  };
`;

const ArrowDown = styled(ArrowDownIcon)`
  height: 5em;
  margin: 0;
  animation: hover 0.3s ease-in-out;
  ${hover}
  @media ${mediaQueries.sm} {
    animation: none;
    opacity: 0.5;
    height: 3em;
  };

`;

const Eye = styled(EyeIcon)`
  height:1em;
  margin: 0;
`;

const ActionText = styled.p`
  margin: 0;
  margin-bottom: 1em;
  opacity: 0.5;
`;

const Subtitle = styled.p`
`;

const CallToActionContent = styled.div`
  display: none;
  @media ${mediaQueries.xs} {
    display: block;
  }
  animation: hover 2s infinite;
  cursor: pointer;
  text-align: center;
  ${hover}
`;

const HeaderTitle = styled.h1`
  z-index: 2;
  grid-row: 1/3;
  grid-column: 2;
  ${mediaQueries.xs}{
    width: auto;
    color: ${colors.white};
    text-shadow: 0em 0em 2em rgba(0,0,0,0.75);
    position: relative;
    top: unset;
  }
`;

const HeaderDescription = styled.div`
  display: none;
  @media ${mediaQueries.sm} {
    display: block;
    grid-row: 2;
    grid-column: 3;
  }
  @media ${mediaQueries.md} {
    grid-row: 2;
    grid-column: 4;
  }
`;

const MobileHeaderDescription = styled(HeaderDescription)`
  display: block;
  margin: 3vh 1em;
  margin-bottom: 10vh;
  @media ${mediaQueries.xs} {
    display: none;
  }
`;


const ChaosDrawing = styled(Chaos)`
  position: absolute;
  top: 0%;
  left: -25%;
  transform: scale(1.33);
  max-height: 100vh;
  @media ${mediaQueries.sm} {
    max-height: unset;
    position: unset;
    top: unset;
    left: unset;
    transform: none;
    grid-column: 1/5;
    grid-row: 1;
    opacity: 1;
  }
`;

const IndexPage = ({ data }) => {
  const { edges: posts } = data.projects;
  const handleClick = () => {
    smoothScrollToElement('#work');
  };
  return (
    <DefaultLayout gray>
      <SEO title="Home" />
      {/* <Header title="work" /> */}
      <HeroHeader>
        <ChaosDrawing />
        <HeaderTitle>Exploring my creative chaos to gain new perspectives on the world</HeaderTitle>
        <HeaderDescription>
          <Subtitle className="light big">I am Richard van &apos;t Hof. An audiovisual maker, programmer, digital artist and everything in between who likes to control everything in his path. Until he can&apos;t. Which he strives for.</Subtitle>
          <Button to="/about" title="Learn more" />
        </HeaderDescription>
        {/* <HeroAnimation sketch={sketch}/> */}
        <CallToAction onClick={handleClick}>
          <CallToActionContent>
            <Eye />
            <ActionText className="small">Watch my stuff</ActionText>
          </CallToActionContent>
          <ArrowDown />
        </CallToAction>
      </HeroHeader>
      <MobileHeaderDescription>
        <Subtitle className="light big">I am Richard van &apos;t Hof. An audiovisual maker, programmer, digital artist and everything in between who likes to control everything in his path. Until he can&apos;t. Which he strives for.</Subtitle>
        <Button to="/about" title="Learn more" />
      </MobileHeaderDescription>
      <Work id="work">
        <Gallery width={50}>
          {
          posts.map(({ node: post }, index, key) => {
            const setRight = (index % 2 === 0);
            return (
              <Blogpost padded small right={setRight} data={post} key={key} />
            );
          })
        }
        </Gallery>
      </Work>

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
