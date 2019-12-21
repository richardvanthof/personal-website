import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import theme from '../styles/theme';
import ArrowIcon from '../static/icons/UI/arrow_right.svg';

const { colors } = theme;

let reverseButton = false;
const buttonStyling = css`
    padding-top: 0.1em;
    margin-left: 0.2em;
    display: flex;
    color: ${colors.teal};
    text-decoration: none;
    margin-left: 0.2em;
    transition: 0.15s ease-in-out;
    font-size: 0.8em;
    &:hover {

        svg, img {
            transform: scaleX(1.1) translateX(0.1em);
        }
    }
`;

const ButtonBase = styled(Link)`
  ${buttonStyling}
  flex-direction: ${props => (props.isReversed ? 'row-reverse' : 'row')};
  /* color: ${props => (props.light ? colors.bgLight : colors.primairy)} */
`;

const ExternalButtonBase = styled.a`
  ${buttonStyling}
  flex-direction: ${props => (props.isReversed ? 'row-reverse' : 'row')};
`;

const Arrow = styled(ArrowIcon)`
    transition: 0.2s ease-in-out;
    width: 3em;
    margin: 0;
    padding-left: 0.5em;
    padding-top: 0em;
    transform: ${props => (props.isReversed ? 'rotate(180deg)' : 'none')};
`;
const Button = ({
  to,
  title,
  external,
  light,
  children,
  back,
}) => {
  reverseButton = back;
  if (!external) {
    return (
      <ButtonBase isReversed={back} light={light} to={to}>
        {title || children}
        <Arrow isReversed={back} />
      </ButtonBase>
    );
  }
  return (
    <ExternalButtonBase isReversed={back} target="_blanc" light={light} target="_blanc" href={to}>
      {title}
      <Arrow isReversed={back} />
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
