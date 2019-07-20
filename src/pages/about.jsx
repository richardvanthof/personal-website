import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from '../styles/theme';

import Layout from '../components/layout';
import SEO from '../components/Seo';
import Image from '../components/image';
import Container from '../components/Container';
import Header from '../components/Header.jsx';
import { Grid, Col } from '../components/Grid';

const grid = {
  cols: {
    mobile: '1fr 1fr 1fr 1fr 1fr 1fr',
    desktop: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  },
  rows: {
    sm: 'auto auto',
    md: '1fr 1fr',
    lg: 'auto',
    xl: 'auto',
  },
};

const About = () => (
  <Layout>
    <SEO title="About" />
    <Grid rows={grid.rows} cols={grid.cols}>
      <Col
        row={{
          xs: 2, sm: 2, md: '2', lg: '1', xl: '2/3',
        }}
        col={{
          xs: '2/10', sm: '2/5', md: '2/6', lg: '2/6', xl: '2/6',
        }}
      >
        <Image />
      </Col>
      <Col
        row={{
          xs: 3, sm: 2, md: '2', lg: '2', xl: '2',
        }}
        col={{
          xs: 2, sm: '6/10', md: '7/10', lg: '7/10', xl: '7/10',
        }}
        layer={1}
      >
        <h1>It's like jay big</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
          lobortis feugiat vivamus at augue. Amet consectetur adipiscing elit ut
          aliquam purus. Aenean pharetra magna ac placerat vestibulum lectus
          mauris. Hendrerit gravida rutrum quisque non. Blandit libero volutpat
          sed cras ornare arcu dui vivamus arcu. Sagittis aliquam malesuada
          bibendum arcu vitae elementum curabitur vitae nunc. Vestibulum sed
          arcu non odio euismod lacinia at quis risus.
          {' '}
        </p>
        <h2>Resumé</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
          lobortis feugiat vivamus at augue. Amet consectetur adipiscing elit ut
          aliquam purus. Aenean pharetra magna ac placerat vestibulum lectus
          mauris. Hendrerit gravida rutrum quisque non. Blandit libero volutpat
          sed cras ornare arcu dui vivamus arcu. Sagittis aliquam malesuada
          bibendum arcu vitae elementum curabitur vitae nunc. Vestibulum sed
          arcu non odio euismod lacinia at quis risus.
          {' '}
        </p>
      </Col>
    </Grid>
  </Layout>
);

export default About;
