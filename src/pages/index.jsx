import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import DefaultLayout from '../layouts/defaultLayout';
// import { Blogpost } from '../components/thumbnail'; This a surprise tool that will help us later.
import Header from '../components/header';
import Gallery from '../components/gallery';
import HeroHeader from '../components/heroHeader';

const Work = styled.section`
`;

const IndexPage = () => (
  <DefaultLayout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <HeroHeader />
    <Work>
      <Header><h1>Featured</h1></Header>
    </Work>
    <Gallery />
  </DefaultLayout>
);

export default IndexPage;
