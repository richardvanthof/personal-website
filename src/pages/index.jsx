import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import DefaultLayout from '../layouts/defaultLayout';
import { Blogpost } from '../components/thumbnail';
import Header from '../components/header';
import voorLater from '../static/img/work/voorlater/voorlater-10.png';
import richardHotline from '../static/img/work/richardhotline/richardhotline-12.png';
import Gallery from '../components/gallery';
import HeroHeader from '../components/heroHeader';

const Work = styled.section`
`;

const IndexPage = ({data}) => (
  <DefaultLayout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <HeroHeader />
    <Work>
      <Header><h1>Featured</h1></Header>
    </Work>
  </DefaultLayout>
);

export default IndexPage;
