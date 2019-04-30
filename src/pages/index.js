import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import LoadingScreen from 'react-loading-screen';

const IndexPage = () => (
  <Layout>

       <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>This is the website of Richard van 't Hof</h1>


  </Layout>
)

export default IndexPage
