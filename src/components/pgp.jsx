import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Lock from '../static/icons/UI/lock.svg';
import theme from '../styles/theme';

const { colors } = theme;

const LockIcon = styled(Lock)`
  width: 1em;
`;

const LockMessage = styled.a`
  text-decoration: none;
  color: ${colors.black};
  padding: 0.3em 0.99em;
  margin: 0.5em;
  border-radius: 5rem;
  transition: 0.2s ease-in-out;
  &:after {
    content: 'Download PGP Key';
    font-size: 0.75em;
    padding: 0.1em 1em;
    transition: 0.1s ease-in-out;
    opacity: 0;
    margin-left: 0.66em;
    pointer-events: none;
    color: ${colors.textLight};
  }
  &:hover {

    &:after {
      opacity: 1;
      background: ${colors.bgLight};

    }
  }
`;

const PGP = ({ permalink }) => (
  <LockMessage href={permalink}>
    <LockIcon />
  </LockMessage>
);

PGP.propTypes = {
  permalink: PropTypes.string.isRequired,
};

export default PGP;
