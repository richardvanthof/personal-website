import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { animated } from 'react-spring';
import Img from 'gatsby-image';
import DefaultLayout from '../layouts/defaultLayout';
import SEO from '../components/seo';
import theme from '../styles/theme';
import Container from '../components/container';
import { Big } from '../components/typography';
import Socials from '../components/socials';
import CTA from '../components/cta';

import CVIcon from '../static/icons/UI/download-cv.svg';

const { mediaQueries, colors } = theme;

const CV = styled(CVIcon)`
  #About-Copy-2 {
    transition: 0.3s ease-in-out;
  }
  &:hover {
    #Mask {
      fill: ${colors.white};
    }
  }
  &:active {
    #About-Copy-2 {
      fill: ${colors.primairy};
    }
  }
`;



const HeaderImg = styled(Img)`
  position: relative !important;
  width: 100vw;
  top: 0vh;
  left: 0;
  padding: 2em;
  opacity: ${props => (props.hide ? 0 : 1)};
  @media ${mediaQueries.xs} {
    padding: 0;
    z-index: 10;
    position: absolute !important;
    width: 50vw;
    top: 15vh;
  }
  @media ${mediaQueries.sm} {
    width: 50vw;
    top: 15vh;
  }
  @media ${mediaQueries.md} {
    width: 25vw;
  }
`;

const HeaderImgContainer = styled(animated.figure)`

`;

const CVGrid = styled(animated.div)`
  display: flex;
  padding: 3em 1em;
  flex-direction: column;
  justify-self: center;
  align-content: center;
  @media ${mediaQueries.xs} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 5vw;
    grid-gap: 0 4em;
  }
  @media ${mediaQueries.sm} {
    padding: 10vw;

  }
  @media ${mediaQueries.md} {

  }
`;

const DownloadCV = styled.a`
  width: 100%;
  @media ${mediaQueries.sm} {
    max-width: 20em;
  }
  align-self: center;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${mediaQueries.xs}{
    & > * {
      margin: 7vh 0;
    }
  }
`;

const Header = styled.header`
  overflow: hidden;
  height: 90vh;
  max-height: 40em;
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 2em;
  @media ${mediaQueries.xs} {
    padding: 5vh 0;
    height: 90vh;
    min-height: 40em;
    max-height: none;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2em;
  }
`;

const SetPosition = styled.span`
  grid-row: ${props => props.row};
  grid-column: ${props => props.column};
`;

const About = ({ data }) => {
  let [setScrolling] = useState(true);
  if (typeof window !== 'undefined') {
    setInterval(() => {
      // eslint-disable-next-line no-undef
      if (window.scrollY > 100) {
        setScrolling = true;
      } else {
        setScrolling = false;
      }
    }, 1000);
  }

  const GridImg = styled(Img)`
    display: none;
    @media ${mediaQueries.xs} {
      display: block;
    }
  `;

  const Img1 = styled(GridImg)`
      grid-row: 1/4;
      grid-column: 2/7;
  `;
  const Img2 = styled(GridImg)`
    grid-row: 2/5;
    grid-column: 6/10;
  `;
  const Img3 = styled(GridImg)`
    grid-row: 1/3;
    grid-column: 9/11;
  `;
  const Img4 = styled(Img)`
    width: 100vw;
    height: 100vh;
    @media ${mediaQueries.xs}{
      width: auto;
      height: auto;
      grid-row: 3/5;
      grid-column: 1/3;
    }
  `;
  const Title = styled.h1`
    padding: 1em 4vw;
    padding-top: 0.33em;
    bottom: 0;
    position: absolute;
    bottom: 0vh;
    width: 75%;
    color: ${colors.white};
    @media ${mediaQueries.xs} {
      color: ${colors.textDark};
      position: relative;
      grid-row: 4;
      grid-column: 3/7;
      z-index: 5;
      width: 100%;
    }

  `;

  return (
    <DefaultLayout gray>
      <SEO title="About" />
      <Header className="header">
            <Img1 fluid={data.image1.childImageSharp.fluid} />
            <Img2 fluid={data.image2.childImageSharp.fluid} />
            <Img3 fluid={data.image3.childImageSharp.fluid} />
            <Img4 fluid={data.image4.childImageSharp.fluid} />
            <Title>I am Richard</Title>
        <CTA />
        {/* <BackgroundAnimation options={defaultOptions/> */}
      </Header>
      <Container id="about-content">
        <TextSection>
          <h3>
            Richard van &apos;t Hof is a Rotterdam based audiovisual maker and digital artist.
            His work is on the verge of film, design and code. He is fascinated by it&apos;s
            emersive quality. His work focuses much on the question of this control. Especially
            in the question of how much control he can have over his surroundings and other
            people but also himself.
          </h3>
        </TextSection>
        <TextSection>
          <h3>
          He works with an autonimous, theoretical mindset to disect subjects around him,
          explore them and disect them into theoretical chaos from which he can gain unexpected
          insights. With these connections he plays visually. In this he likes to mix
          the analog and digital in his work.
          </h3>
        </TextSection>
        <TextSection>
          <h3>
          This is why he has been focussing more on programming the last few years. The
          digital world envelops us more and more, also in the real world. This creates
          a canvas that not only involves the digital but also the real. He is currently
          trying to find his voice in this digital world.
          </h3>
        </TextSection>
      </Container>
      <Container>
        <CVGrid>
          <p className="light">
            <Big>
              Richard currently studies audiovisual design at the Willem de Kooning Academy.
              Since 2017 he is also active at Bytecode Digital Agency where he designs
              branding, concepts, user expericences and does front-end development.
            </Big>
          </p>
          <DownloadCV target="_blanc" href="/test-cv.pdf"><CV /></DownloadCV>
          <Socials />
        </CVGrid>
      </Container>

    </DefaultLayout>
  );
};

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`;

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "headers/Richard/landscape.jpg" }) {
      ...squareImage
    }

    image2: file(relativePath: { eq: "headers/Richard/img029.jpeg" }) {
      ...squareImage
    }

    image3: file(relativePath: { eq: "headers/Richard/img031.jpeg" }) {
      ...squareImage
    }

    image4: file(relativePath: { eq: "headers/Richard/img030.jpeg" }) {
      ...squareImage
    }
  }
`;

export default About;
