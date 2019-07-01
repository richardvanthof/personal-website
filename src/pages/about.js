import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import theme from "../styles/theme";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";
import Container from '../components/Container';
import Header from "../components/Header";
import { Grid, Col } from "../components/Grid";

const About = () => (
  <Layout>
    <SEO title="About" />
    <Grid rows="3" cols="6">
        <Col row="2" col="2/4" layer={1}>
            <h1>Who is Richard anyways?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Tincidunt lobortis feugiat vivamus at augue.
                Amet consectetur adipiscing elit ut aliquam
                purus. Aenean pharetra magna ac placerat
                vestibulum lectus mauris. Hendrerit gravida
                rutrum quisque non. Blandit libero volutpat
                sed cras ornare arcu dui vivamus arcu.
                Sagittis aliquam malesuada bibendum arcu
                vitae elementum curabitur vitae nunc.
                Vestibulum sed arcu non odio euismod
                lacinia at quis risus. </p>
            <h2>Resumé</h2>
            <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Tincidunt lobortis feugiat vivamus at augue.
                Amet consectetur adipiscing elit ut aliquam
                purus. Aenean pharetra magna ac placerat
                vestibulum lectus mauris. Hendrerit gravida
                rutrum quisque non. Blandit libero volutpat
                sed cras ornare arcu dui vivamus arcu.
                Sagittis aliquam malesuada bibendum arcu
                vitae elementum curabitur vitae nunc.
                Vestibulum sed arcu non odio euismod
                lacinia at quis risus. </p>
        </Col>
        <Col row="1/ 5" col="5 / 9" >
            <Image/>
        </Col>
    </Grid>
  </Layout>
)

export default About