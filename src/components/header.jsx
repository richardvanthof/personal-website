import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../styles/theme';

const breakpoint = theme.mediaQueries;

const HeaderBase = styled.header`
  @media ${breakpoint.xs} {
    position: absolute;
    top: 0vh;
    h1 {
      font-size: 35vw;
      transform: translateX(-3vw);
      opacity: 0.2;
      z-index: -1;
      font-family: serif, times;
      line-height: 0.9em;
    }
  }

`;

const Header = (props) => {
  const { title } = props;
  return (
    <HeaderBase>
      <h1>{title}</h1>
    </HeaderBase>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
