import React from 'react';

// import P5Wrapper from 'react-p5-wrapper';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';

const img = require('../assets/img/wise.png');

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Container>
      <img src={img} alt="A wise quote about why this site is so empty" />
    </Container>

  </Layout>
);

export default IndexPage;
