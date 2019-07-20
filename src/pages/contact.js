import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/image';

import Container from '../components/Container';
import Header from '../components/Header';

const Grid = styled(Container)`
  display: flex;
`;

const Typography = props => (
  <Layout>
    <SEO title="Contact" />
    <Header>
      <h1>Let's Talk</h1>
    </Header>
    <Grid>
      <div>
        <h3>Richard van 't Hof</h3>
        <p>
          +31 6 41 21 95 54
          <br />
          richardvanthof@pm.me
        </p>
        <p>
          Hoornklaver 25
          {' '}
          <br />
          {' '}
3069DE Rotterdam
          {' '}
          <br />
          The Netherlands
        </p>
      </div>
      {/* <img src={require('../images/test-img.jpg')} alt="test image"/> */}
    </Grid>
    {/* <Grid>
      <Title>
        <h1>Let's Talk</h1>
      </Title>
      <Content>
        <h3>Richard van 't Hof</h3>
        <p>+31 6 41 21 95 54<br/>richardvanthof@pm.me</p>
        <p>Hoornklaver 25 <br/> 3069DE Rotterdam <br/>The Netherlands</p>
      </Content>
      <HeroImage/>
    </Grid> */}
  </Layout>
);

export default Typography;
