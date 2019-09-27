import React from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';
import testHeader from '../static/img/test-img.png';

const { colors } = theme;

const HeroHeaderWrapper = styled.header`
    height:90vh;
    display: flex;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height:105vh;
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
