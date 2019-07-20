import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/Seo';

import Container from '../components/Container';
import Header from '../components/Header';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header>
      <h1>Not Found</h1>
    </Header>
    <Container>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
