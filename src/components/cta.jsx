import React from 'react';
import styled from 'styled-components';
import { Small } from './typography';

import ArrowDownIcon from '../static/icons/UI/arrow_down.svg';
import EyeIcon from '../static/icons/UI/watch.svg';

import theme from '../styles/theme';

const { mediaQueries, colors } = theme;

const ActionText = styled.p`
  margin: 0;
  margin-bottom: 1em;
  opacity: 0.5;
`;

const CallToAction = styled.a`
  display: none;
  scroll-behavior: smooth;
  top: 50em;
  text-decoration: none;
  text-align: center;
  align-self: last baseline;
  justify-self: center;
  margin: 0 auto;
  transform: translateY(1em);
  z-index: 20;
  color: ${colors.black};
  position: absolute;

  @media ${mediaQueries.xs} {
    display: block;
    left: 50vw;
    margin-left: -5vw;
  };
  @media ${mediaQueries.sm} {
    top: 83vh;
  };
`;

const Eye = styled(EyeIcon)`
  height:1em;
  margin: 0;
`;

const ArrowDown = styled(ArrowDownIcon)`
  opacity: 0.5;
  height: 7vh;
  margin: 0;
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

const CTA = to => (
  <CallToAction href={to}>
    <CallToActionContent>
      <Eye />
      <ActionText>
        <Small>Learn More</Small>
      </ActionText>
    </CallToActionContent>
    <ArrowDown />
  </CallToAction>
);

export default CTA;
