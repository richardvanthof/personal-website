import React from 'react';

import Layout from '../components/layout';
import Header from '../components/header';
import Container from '../components/container';

const Contact = () => (
  <Layout>
    <Header>
      <h1>Contact</h1>
    </Header>
    <Container>
      <h3>Richard van &apos;t Hof</h3>
      <p>
        richardvanthof@pm.me
        <br />
        +31 6 41219554
      </p>
      <h3>Come visit</h3>
      <p>
        Weg en Bos 9e
        <br />
        2661DG Bergschenhoek
        <br />
        Netherlands
      </p>
    </Container>
  </Layout>
);

export default Contact;
