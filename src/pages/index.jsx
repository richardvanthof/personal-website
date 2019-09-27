import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import DefaultLayout from '../layouts/defaultLayout';
import Thumbnail from '../components/thumbnail';
import Header from '../components/header';
import voorLater from '../static/img/work/voorlater/voorlater-10.png';
import richardHotline from '../static/img/work/richardhotline/richardhotline-12.png';
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
      <Thumbnail
        title="Richard Hotline"
        img={richardHotline}
        description="I tried to change the expectations how people should communucate with me"
        medium="Digital Installation"
        year="'19"
        alt="The Printer"
        url="/work/richard-hotline"
      />
      <Thumbnail
        title="Voor Later"
        img={voorLater}
        description="I tried to change the expectations how people should communucate with me"
        medium="Audiovisual"
        year="'19"
        alt="Still Voor Later"
        url="/work/voor-later"
        right
      />
      <Gallery padded width={50}>
        <Thumbnail
          title="Voor Later"
          img={voorLater}
          description="I tried to change the expectations how people should communucate with me"
          medium="Audiovisual"
          year="'19"
          alt="Still Voor Later"
          url="/work/voor-later"
          right
          small
        />
        <Thumbnail
          title="Voor Later"
          img={voorLater}
          description="I tried to change the expectations how people should communucate with me"
          medium="Audiovisual"
          year="'19"
          alt="Still Voor Later"
          url="/work/voor-later"
          right
          small
        />
      </Gallery>
      <Thumbnail
        title="Richard Hotline"
        img={richardHotline}
        description="I tried to change the expectations how people should communucate with me"
        medium="Digital Installation"
        year="'19"
        alt="The Printer"
        url="/work/richard-hotline"
      />
      <Thumbnail
        title="Voor Later"
        img={voorLater}
        description="I tried to change the expectations how people should communucate with me"
        medium="Audiovisual"
        year="'19"
        alt="Still Voor Later"
        url="/work/voor-later"
        right
      />
    </Work>
  </DefaultLayout>
);

export default IndexPage;
