import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const arrow = require('../static/icons/arrow-link.svg');

const buttonStyling = css`
    display: flex;
    text-decoration: none;
    margin-left: 0.1em;
    transition: 0.15s ease-in-out;
    &:hover {
        transform: translateX(0.2em);
        svg, img {
            transform: scaleX(1.1) translateX(0.1em);
        }
    }
`;

const ButtonBase = styled(Link)`
  ${buttonStyling}
`;

const ExternalButtonBase = styled.a`
  ${buttonStyling}
`;

const Arrow = styled.img`
transition: 0.2s ease-in-out;
    width: 3em;
    margin: 0;
    padding-left: 0.5em;
    padding-top: 0.1em;
`;
const Button = ({ to, title, external }) => {
  if (!external) {
    return (
      <ButtonBase to={to}>
        {title}
        <Arrow src={arrow} alt=">" />
      </ButtonBase>
    );
  }
  return (
    <ExternalButtonBase href={to}>
      {title}
      <Arrow src={arrow} alt=">" />
    </ExternalButtonBase>
  );
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  external: PropTypes.bool,

};

Button.defaultProps = {
  external: false,
};

export default Button;
