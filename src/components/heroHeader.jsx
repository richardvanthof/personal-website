import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

import testHeader from '../static/img/headers/face8.jpg';


const { colors } = theme;

const HeroHeaderWrapper = styled.header`
    height:100vh;
    display: flex;
    justify-content:center;
    align-content: center;
    color: ${colors.bgLight};
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height:100vh;
        width: 100vw;
        background: url(${testHeader}) ${colors.bgLight};
        background-size: cover;
        z-index: -1;
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
  padding-bottom: 15vh;
  justify-content: flex-end;
  & > * {
    max-width: 20em;
  }
`;

const HeroHeader = () => (
  <HeroHeaderWrapper>
    <HeaderContent>
      <h3>Richard van &apos;t Hof</h3>
      <h5>Audiovisual Maker & digital artist</h5>
    </HeaderContent>
  </HeroHeaderWrapper>
);

export default HeroHeader;
