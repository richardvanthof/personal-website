import React from 'react';
import { Img } from 'gatsby-image';
import { graphql } from 'gatsby';
import DefaultLayout from '../layouts/defaultLayout';
import SEO from '../components/seo';
import Gallery from '../components/gallery';
import { Subtitle } from '../components/typography';

import richard from '../static/img/richard.jpg';

const About = ({data}) => (
  <DefaultLayout>
    <SEO title="About" />
  <Gallery width={40}>
    <div>
      <img src={richard} alt="Richard" />
    </div>
    <div>
      <h1>Richard van &apos;t Hof</h1>
      <Subtitle>Audiovisual Maker & Front-end Hacker</Subtitle>
      <p>safdasdf</p>
    </div>
  </Gallery>

  </DefaultLayout>
);

export default About;
