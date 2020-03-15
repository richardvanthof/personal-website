import React from 'react';
import styled from 'styled-components';
import CVIcon from '../static/icons/UI/download-cv.svg';
import theme from '../styles/theme';

const { colors, mediaQueries } = theme;

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


const DownloadCV = styled.a`
  width: 100%;
  @media ${mediaQueries.sm} {
    max-width: 20em;
  }
  align-self: center;
`;

const CVBtn = () => (
  <DownloadCV>
    <CV />
  </DownloadCV>
);

export default CVBtn;
