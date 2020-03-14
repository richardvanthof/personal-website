import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layouts/noLayout';
import Gallery from '../components/gallery';
import Socials from '../components/socials';
import theme from '../styles/theme';
import generateDirectionsUrl from '../lib/generateDirectionsUrl';

import Map from '../static/icons/content/map.svg';
import PGP from '../components/pgp';

const { colors, mediaQueries } = theme;

const Preview = styled.iframe`
  width: 100vw;
  height: 99.5vh;
  border: none;
  margin: 0;
  overflow: hidden;
`;

const ToolbarBase = styled.nav`
  height: 99.5vh;
  position: fixed;
  top: 0;
  right: 0;
  background: #F8F9F8;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
`;

const Button = styled.a`
  transition: 0.2s ease-in-out;
  padding: 0.66em;
  display: block;
  background: ${props => (props.primairy ? '#9AFF62' : '')};
  svg {
    width: 1.33rem;
    color: rgba(0,0,0,0.7)
  }
  &:hover {
    background: ${props => (props.primairy ? '#8CEF54' : 'rgba(0,0,0,0.05)')};
  }
`;

const Toolbar = () => (
  <ToolbarBase>
    <Button href="/">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
    </Button>
    <Button primairy href="/cv.pdf" target="_blanc">
      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="save" className="svg-inline--fa fa-save fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z" /></svg>
    </Button>
  </ToolbarBase>
);

const Cv = ({ data }) => (
  <Layout>
    <Toolbar />
    <Preview src="https://pointless-business.surge.sh/" />
  </Layout>
);

export default Cv;
