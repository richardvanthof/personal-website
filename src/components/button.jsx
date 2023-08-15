import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import theme from '../styles/theme';
import ArrowIcon from '../static/icons/UI/arrow_right.svg';

const { colors } = theme;

const buttonStyling = css`
    display: block;
    padding-bottom: .33em;
    color: ${colors.teal};
    text-decoration: none;
    transition: 0.15s ease-in-out;
    margin-top: 1em;
    &:hover {
      svg, img {
          transform: ${props => (props.isReversed ? 'rotate(180deg) scaleX(1.05) translateX(0.1em)' : 'scaleX(1.1) translateX(0.1em)')}
      }
    }
`;

const ButtonBase = styled(Link)`
  ${buttonStyling}
`;

const ExternalButtonBase = styled.a`
  ${buttonStyling}
`;

const Arrow = styled(ArrowIcon)`
    transition: 0.2s ease-in-out;
    height: 0.66em;
    margin: auto;
    padding-left: 0.35em;
    padding-top: 0em;
    transform: ${props => (props.isReversed ? 'rotate(180deg)' : 'none')};
    fill: ${colors.teal};
`;
const Button = ({
  to,
  title,
  external,
  light,
  children,
  back,
}) => {
  if (back) {
    return (
      <ButtonBase isReversed={back} light={light} to={to}>
        <Arrow isReversed={back} />
        {title || children}
      </ButtonBase>
    );
  }
  if (!external) {
    return (
      <ButtonBase light={light} to={to}>
        {title || children}
        <Arrow />
      </ButtonBase>
    );
  } return (
    <ExternalButtonBase target="_blanc" light={light} href={to}>
      {title}
      <Arrow />
    </ExternalButtonBase>
  );
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  external: PropTypes.bool,
  light: PropTypes.bool,
  children: PropTypes.node.isRequired,
  back: PropTypes.bool,
};

Button.defaultProps = {
  external: false,
  light: false,
  back: false,
};

export default Button;
