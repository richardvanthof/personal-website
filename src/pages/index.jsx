import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import DefaultLayout from '../layouts/defaultLayout';
import { Small, HeroTitle } from '../components/typography';
import { Blogpost } from '../components/thumbnail';
import Gallery from '../components/gallery';
import Img from 'gatsby-image';
import Button from '../components/button';
import theme from '../styles/theme';
import smoothScrollToElement from '../lib/smoothScroll';
import EyeIcon from '../static/icons/UI/watch.svg';
import ArrowDownIcon from '../static/icons/UI/arrow_down.svg';
import Chaos from '../static/icons/content/chaos.svg';

const { mediaQueries, colors } = theme;


const HeroHeader = styled.header`
  height: 100vh;
  min-height: 40em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15vh;
  background: ${theme.colors.bgLight};
  padding: 1em;
  display: flex;
  justify-content: center;
  max-height: 60em !important;
  /* &:before {
    content: '';
    background: white;
    width: 95vw;
    height: 95vh;
    opacity: 0.25;
    position: absolute;
    top: 2em;
  } */
  @media ${mediaQueries.xs}{
    height: 85vh;
    max-height: none !important;
    min-height: 40em;
  };
  @media ${mediaQueries.sm} {
    display: grid;
    grid-template: 2fr 2fr 1fr 1fr / 1fr 1fr 1fr 1fr 1fr;
  };
`;

const Work = styled.section`

`;

const CallToAction = styled.a`
  display: none;
  width: 100%;
  position: absolute;
  scroll-behavior: smooth;
  top: 50em;
  margin: 0 auto;
  text-decoration: none;
  text-align: center;
  @media ${mediaQueries.xs} {
    display: block;
    transform: translateY(15%);
  };
  @media ${mediaQueries.sm} {
    top: 83vh;
  };
`;

const ArrowDown = styled(ArrowDownIcon)`
  opacity: 0.5;
  height: 7vh;
  margin: 0;
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
  animation: hover 2s infinite;
  cursor: pointer;
  text-align: center;
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
  z-index: 2;
  position: absolute;
  align-self: self-start;
  padding-right: 1em;
  top: 25vh;
  text-align: center;
  @media ${mediaQueries.xs} {
    padding: 2em;
  }
`;

const HeaderTitle= styled.h1`
  grid-column: 2;
  grid-row: 2/4;
  z-index: 2;
  ${mediaQueries.xs}{
    color: ${colors.white};
    text-shadow: 0em 0em 2em rgba(0,0,0,0.75);
  }
`;

const HeaderSubtitle = styled(Subtitle)`
  grid-column: 4;
  grid-row: 3;
`;

const HeroImage1 = styled(Img)`
  width: 20em;
  grid-row: 2;
  grid-column: 3
`;

const ChaosDrawing = styled(Chaos)`
  grid-column: 1/5;
  grid-row: 1/3;
  opacity: 1;
`;

const IndexPage = ({ data }) => {
  console.log(data.projects);
  const { edges: posts } = data.projects;
  const handleClick = () => {
    smoothScrollToElement('work');
  };
  return (
    <DefaultLayout gray>
      <SEO title="Home" />
      {/* <Header title="work" /> */}
      <HeroHeader>

          {/* <HeroImage1 fluid={data.image.childImageSharp.fluid} /> */}
          <ChaosDrawing/>
          <HeaderTitle>Exploring my creative chaos to gain new perspectives on the world</HeaderTitle>
          <HeaderSubtitle className="light big">I am Richard van &apos;t Hof. An audiovisual maker, programmer, digital artist and everything in between who likes to control everything in his path. Until he can&apos;t. Which he strives for.</HeaderSubtitle>

        {/* <HeroAnimation sketch={sketch}/> */}
        <CallToAction onClick={handleClick}>
          <CallToActionContent>
            <Eye />
            <ActionText><Small>Watch my stuff</Small></ActionText>
          </CallToActionContent>
          <ArrowDown />
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
