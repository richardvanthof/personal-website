import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import DefaultLayout from '../layouts/defaultLayout';
import SEO from '../components/seo';
import Container from '../components/container';

import image from '../static/img/headers/richard-sitting.jpeg';

const About = () => (
  <DefaultLayout gray>
    <SEO title="About" />
    <Container id="about-content">
      <h2>About Richard</h2>
      <img src={image} />
      <p>
        Richard is an audiovisual maker, designer and creative coder who,
        in an autonomous, investigative way, unravels the influence of implicit
        values of systems, such as the influence of data extracivism on the
        digital world. He looks for how people try to change or bend the values
        of these worlds. He works associatively where he is analytically able
        to capture a feeling or message in a unique way with an eye for detail.
      </p>
    </Container>
  </DefaultLayout>
);

export default About;
