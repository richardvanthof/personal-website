import React from 'react';
import { Link } from 'gatsby';
// import P5Wrapper from 'react-p5-wrapper';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
// import Sketch1 from "../components/sketch/Sketch.1";
// import Sketch from "../components/sketch/Sketch";

const testImg = require('../images/test-img.jpg');

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    {/* <P5Wrapper sketch={Sketch1} /> */}
  </Layout>
);

export default IndexPage;
