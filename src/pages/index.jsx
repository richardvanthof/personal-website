import React from 'react';

// import P5Wrapper from 'react-p5-wrapper';
import SEO from '../components/seo';
import Layout from '../components/layout';

// import Sketch1 from "../components/sketch/Sketch.1";
// import Sketch from "../components/sketch/Sketch";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    {/* {window != undefined &&
      <P5Wrapper sketch={Sketch1} />
    } */}
  </Layout>
);

export default IndexPage;
