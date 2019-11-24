import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import DefaultLayout from '../layouts/defaultLayout';
import PropTypes from 'prop-types';
import P5Wrapper from 'react-p5-wrapper';
import { Small, Hero } from '../components/typography';
import { Blogpost } from '../components/thumbnail';
import Gallery from '../components/gallery';
import Button from '../components/button';
import sketch from '../animations/sketch1';
import theme from '../styles/theme';
import smoothScrollToElement from '../lib/smoothScroll';

const { mediaQueries, colors } = theme;

const eye = require('../static/icons/UI/watch.svg');
const arrowDown = require('../static/icons/UI/arrow_down.svg');

const HeroHeader = styled.header`
  max-height: 50rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25vh;
  background: ${theme.colors.bgLight};
  padding: 1em;
  display: flex;
  justify-content: center;
  @media ${mediaQueries.sm} {
    max-height: none !important;
  };
`;

const Work = styled.section`

`;

const WorkSelector = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 10vh 2em 0;
`;
const Tags = styled.ul`
  display: flex;
  list-style: none;
  padding: 3em;
  padding-bottom: 0;
`;

const Tag = styled.li`
  padding: 1em;
`;

const CallToAction = styled.a`
  position: absolute;
  scroll-behavior: smooth;
  top: 45em;
  text-decoration: none;
  @media ${mediaQueries.sm} {
    top: 90vh;
  };
`;

const ArrowDown = styled.img`
  opacity: 0.5;
  height: 10vh;
  margin: 0;
`;

const EyeIcon = styled.img`
  height:1em;
  margin: 0;
`;

const ActionText = styled.p`
  margin: 0;
  margin-bottom: 1em;
  opacity: 0.5;
`;

const Title = styled(Hero)`
  max-width: 40em;
`;

const Subtitle = styled.p`
  max-width: 35em;
`;

const HeroAnimation = styled(P5Wrapper)`
  -webkit-box-shadow: -4px 13px 86px -40px rgba(0,0,0,0.75);
  -moz-box-shadow: -4px 13px 86px -40px rgba(0,0,0,0.75);
  box-shadow: -4px 13px 86px -40px rgba(0,0,0,0.7);
  animation: zoomOut 1s;
  @keyframes zoomOut {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scaleX()(0.9);
    }
  }
`;

const CallToActionContent = styled.div`
  animation: hover 2s infinite;
  cursor: pointer;
  @keyframes hover {
    0% {
      transform: translateY(0)
    }
    50% {
      transform: translateY(0.3em)
    }
    100% {
      transform: translateY(0)
    }
  }
`;

const HeroHeaderContent = styled.div`
  z-index: 1;
  position: absolute;
  align-self: self-start;
  padding: 2em;
  max-width: 30em;
  top: 40vh;
  min-height: 50em;
`;

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx;
  const handleClick = () => {
    smoothScrollToElement('work');
  }
  return (
    <DefaultLayout gray>
      <SEO title="Home" />
      {/* <Header title="work" /> */}
      <HeroHeader>
        <HeroHeaderContent>
            <Title>Exploring my creative chaos to gain new perspectives on the world</Title>
            <Subtitle className="light">I am Richard van ’t Hof. An audiovisual maker, programmer and everything in between who likes to control everything in his path. Until he can't. Which he strives for.</Subtitle>
            <Button title="Learn more" to="/about" />
        </HeroHeaderContent>
        <HeroAnimation sketch={sketch}/>
        <CallToAction onClick={handleClick}>
          <CallToActionContent>
            <EyeIcon className="eye" src={eye} alt='Watch!' />
            <ActionText><Small>Watch my stuff</Small></ActionText>
          </CallToActionContent>
          <ArrowDown src={arrowDown} />
        </CallToAction>
      </HeroHeader>
      <Work id="work">

      {/* <WorkSelector>
          <h3>Work</h3>
          <Tags>
            <Tag>Audiovisual</Tag>
            <Tag>Graphic Design</Tag>
            <Tag>Code</Tag>
          </Tags>
        </WorkSelector> */}
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
  query getProjects {
    allMdx (
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
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.object,
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

