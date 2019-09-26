import React from 'react';

import DefaultLayout from '../layouts/defaultLayout';
import Container from '../components/container';
import Header from '../components/header';

const Contact = () => (
  <DefaultLayout>
    <Header>
      <h1>Contact</h1>
    </Header>
    <Container>
      <h3>Let&apos;s get in touch</h3>
      <p>richardvanthof@pm.me</p>
    </Container>
  </DefaultLayout>
);

export default Contact;
