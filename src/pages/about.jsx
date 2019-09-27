import React from 'react';

import DefaultLayout from '../layouts/defaultLayout';
import SEO from '../components/seo';

import { Grid, Col } from '../components/grid';


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
  <DefaultLayout>
    <SEO title="About" />
    <Grid rows={grid.rows} cols={grid.cols}>

      <Col
        row={{
          xs: 3, sm: 2, md: '2', lg: '2', xl: '2',
        }}
        col={{
          xs: 2, sm: '6/10', md: '7/10', lg: '7/10', xl: '7/10',
        }}
        layer={1}
      >
        <h1>It&apos;s like jay big</h1>
        <p>
          <big>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
          lobortis feugiat vivamus at augue. Amet consectetur adipiscing elit ut
          aliquam purus. Aenean pharetra magna ac placerat vestibulum lectus
          mauris. Hendrerit gravida rutrum quisque non. Blandit libero volutpat
          sed cras ornare arcu dui vivamus arcu. Sagittis aliquam malesuada
          bibendum arcu vitae elementum curabitur vitae nunc. Vestibulum sed
          arcu non odio euismod lacinia at quis risus.
          </big>
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
  </DefaultLayout>
);

export default About;
