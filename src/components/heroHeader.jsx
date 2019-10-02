import React from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';
import testHeader from '../static/img/headers/face8.jpg';

const { colors } = theme;

const HeroHeaderWrapper = styled.header`
    height:80vh;
    display: flex;
    justify-content:center;
    align-content: center;
    color: ${colors.bgLight};
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height:80vh;
        width: 100vw;
        background: url(${testHeader}) ${colors.bgLight};
        background-size: cover;
        z-index: -1;
    }
`;

const HeroHeader = () => (
  <HeroHeaderWrapper>
    <h1>I am Richard</h1>
  </HeroHeaderWrapper>
);

export default HeroHeader;
