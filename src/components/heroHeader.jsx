import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

import testHeader from '../static/img/headers/face8.jpg';
import { Big, Small, Hero } from '../components/typography';
import Button from './button';

const img = require('../static/img/richard.jpg');

const { colors, mediaQueries } = theme;
const eye = require('../static/icons/UI/watch.svg');
const arrowDown = require('../static/icons/UI/arrow_down.svg');

const HeroHeaderWrapper = styled.header`
  max-height: 50em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25vh;

  padding: 1em;
  display: flex;
  justify-content: center;
  @media ${mediaQueries.sm} {
    max-height: 40em !important;
  };

  &:before {
    content: '';
    background: ${theme.colors.bgLight};
    position: absolute;
    top: 2.5vw;
    left: 5vw;
    width: 90vw;
    height: 85vh;
    z-index: -1;
    max-height: 50em;
    @media ${mediaQueries.sm} {
      max-height: 40em !important;
    };
  }
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

const Title = styled.h1`
  max-width: 40em;
`;

const Subtitle = styled.p`
  max-width: 35em;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroHeaderBackground = styled.div`
  height: 100vh;
  width: 50vw;
  padding: 5vw;
  overflow: hidden;
  & > * {
    /* max-height: 100%;
    width: auto; */
  }
`;



const HeroHeader = () => (
  <HeroHeaderWrapper>
        <HeroHeaderContent>
            <Title>About Richard</Title>
            <Subtitle style={{width: 50%}} className="light">I am Richard van ’t Hof. An audiovisual maker, programmer and everything in between who likes to control everything in his path. Until he can't. Which he strives for.</Subtitle>
            {/* <Button title="Learn more" to="/about" /> */}
        </HeroHeaderContent>
        <HeroHeaderBackground>
          <img src={img} />
        </HeroHeaderBackground>
        {/* <CallToAction onClick={handleClick}>
          <CallToActionContent>
            <EyeIcon className="eye" src={eye} alt='Watch!' />
            <ActionText><Small>Watch my stuff</Small></ActionText>
          </CallToActionContent>
          <ArrowDown src={arrowDown} />
        </CallToAction> */}
    </HeroHeaderWrapper>
);

export default HeroHeader;
