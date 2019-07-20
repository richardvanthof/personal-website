import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/image';

import Container from '../components/Container';
import Header from '../components/Header';

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <Header>
      <h1>Work</h1>
    </Header>
    <Container>
      <p>Work of Richard van 't Hofe</p>
    </Container>
  </Layout>
);

export default Work;
