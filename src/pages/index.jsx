import React from 'react';
import styled from 'styled-components';
// import P5Wrapper from 'react-p5-wrapper';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';
import Thumbnail from '../components/thumbnail';
import Header from '../components/header';

// import Sketch1 from "../components/sketch/Sketch.1";
// import Sketch from "../components/sketch/Sketch";
const img = require('../static/img/textImg.png');

const Thumbnails = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10vw;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    {/* {window != undefined &&
      <P5Wrapper sketch={Sketch1} />
    } */}
    <Container>
      <h3>I want to manipulate everything</h3>
    </Container>
    <Container>
      <Thumbnails>
        <Thumbnail title="test" img={img} alt="test image" />
        <Thumbnail title="test" img={img} alt="test image" />
      </Thumbnails>
    </Container>
  </Layout>
);

export default IndexPage;
