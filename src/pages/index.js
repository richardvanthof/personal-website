import React from "react"
import { Link } from "gatsby";
import P5Wrapper from 'react-p5-wrapper';


import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Sketch from "../components/sketch/Sketch";

const testImg = require('../images/test-img.jpg');

const sketchSize = {
  w: window.innerWidth,
  h: window.innerHeight
}

const IndexPage = () => (
  <Layout>

      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <P5Wrapper sketch={Sketch} />
  </Layout>
)

export default IndexPage
