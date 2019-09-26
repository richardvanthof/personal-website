import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const { colors } = theme;
const arrow = require('../static/icons/arrow-link.svg');

const buttonStyling = css`
    padding-top: 0.1em;
    display: flex;
    text-decoration: none;
    margin-left: 0.1em;
    transition: 0.15s ease-in-out;
    font-size: 0.8em;
    &:hover {
        transform: translateX(0.2em);
        svg, img {
            transform: scaleX(1.1) translateX(0.1em);
        }
    }
`;

const ButtonBase = styled(Link)`
  ${buttonStyling}
  color: ${props => (props.light ? colors.bgLight : colors.primairy)}
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
const Button = ({
  to,
  title,
  external,
  light,
  children,
}) => {
  if (!external) {
    return (
      <ButtonBase light={light} to={to}>
        {title || children}
        <Arrow src={arrow} alt=">" />
      </ButtonBase>
    );
  }
  return (
    <ExternalButtonBase light={light} target="_blanc" href={to}>
      {title}
      <Arrow src={arrow} alt=">" />
    </ExternalButtonBase>
  );
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  external: PropTypes.bool,
  light: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  external: false,
  light: false,
};

export default Button;
