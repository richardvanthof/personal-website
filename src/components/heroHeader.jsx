import React from 'react';
import styled from 'styled-components';
import Embed from '../components/embed';
import theme from '../styles/theme';
import testHeader from '../static/img/headers/face8.jpg';


const { colors } = theme;

const HeroHeaderWrapper = styled.header`
    height:100vh;
    display: flex;
    justify-content:center;
    align-content: center;
    color: ${colors.bgLight};
    /* &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height:100vh;
        width: 100vw;
        background: url(${testHeader}) ${colors.bgLight};
        background-size: cover;
        z-index: -1;
    } */
`;

const HeaderVideo = styled(Embed)`
  width: 100vw !important;
  iframe {
    width: 100%;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
  }
`;

const HeaderContent = styled.div`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: calc((100vw/16)*9);
  background: transparent;
  display: flex;
  flex-direction: column;
  padding: 10vh;
  padding-bottom: 25vh;
  justify-content: end;
  & > * {
    max-width: 20em;
  }
`;

const HeroHeader = () => (
  <HeroHeaderWrapper>
    <HeaderContent>
      <h1>Richard van 't Hof</h1>
      <h5>Audiovisual Maker & Front-end Hacker</h5>
    </HeaderContent>
    <HeaderVideo src="https://www.youtube.com/embed/akvhyQMuQAs?controls=0&autoplay=1&loop=1&playlist=akvhyQMuQAs" />
  </HeroHeaderWrapper>
);

export default HeroHeader;
