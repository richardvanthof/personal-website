import React from 'react';

import DefaultLayout from '../layouts/defaultLayout';
import SEO from '../components/seo';

import Container from '../components/container';
import Header from '../components/header';

const NotFoundPage = () => (
  <DefaultLayout>
    <SEO title="404: Not found" />
    <Header>
      <h1>Not Found</h1>
    </Header>
    <Container>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </DefaultLayout>
);

export default NotFoundPage;
