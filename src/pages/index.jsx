import React from 'react';
// import P5Wrapper from 'react-p5-wrapper';

import Layout from '../components/layout';
import SEO from '../components/Seo';
// import Sketch1 from "../components/sketch/Sketch.1";
// import Sketch from "../components/sketch/Sketch";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    {/* <P5Wrapper sketch={Sketch1} /> */}
  </Layout>
);

export default IndexPage;
