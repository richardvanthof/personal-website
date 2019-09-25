import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Thumbnail from '../components/thumbnail';
import Container from '../components/container';

const testImg = require('../static/img/work/richardhotline/richardhotline-12.png');

const Work = styled.section`
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Work>
      <Container>
        <h1>Work</h1>
      </Container>
      <Thumbnail
        title="Richard Hotline"
        client="Personal Project"
        img={testImg}
        description="I tried to change the expectations how people should communucate with me"
        medium="Digital Installation"
        year="'19"
        alt="The Printer"
        url="/work/richard-hotline"
      />

      <Thumbnail
        title="Richard Hotline"
        client="Personal Project"
        img={testImg}
        description="I tried to change the expectations how people should communucate with me"
        medium="Digital Installation"
        year="'19"
        alt="The Printer"
        url="/work/richard-hotline"
        right
      />
    </Work>
  </Layout>
);

export default IndexPage;
