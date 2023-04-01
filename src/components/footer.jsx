import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './button';

import theme from '../styles/theme';
import Socials from './socials';
import Copyright from './copyright';

const { colors, container, mediaQueries } = theme;

const Footer = () => (
  <p>copyright Richard van 't Hof</p>
);

export default Footer;
