import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import theme from "../styles/theme";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";
import Container from '../components/Container';
import Header from "../components/Header";

const img = require('../images/test-img.jpg');

const Article = styled.article`
    margin: 0 auto;
`

const About = () => (
  <Layout>
    <SEO title="About" />
    <Header>
      <h1>About</h1>
    </Header>
    <Container>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non tellus orci ac auctor augue mauris. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Felis eget velit aliquet sagittis. Id semper risus in hendrerit. Pharetra pharetra massa massa ultricies mi. Velit dignissim sodales ut eu sem integer. At consectetur lorem donec massa. Pellentesque dignissim enim sit amet venenatis. Volutpat lacus laoreet non curabitur. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Adipiscing elit duis tristique sollicitudin nibh sit. Nullam non nisi est sit amet facilisis magna etiam. Tellus id interdum velit laoreet id. Pharetra magna ac placerat vestibulum. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.

A lacus vestibulum sed arcu non. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Convallis aenean et tortor at risus viverra adipiscing at. Mauris nunc congue nisi vitae. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Donec ultrices tincidunt arcu non. Orci porta non pulvinar neque. Ipsum a arcu cursus vitae congue mauris rhoncus. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Sem fringilla ut morbi tincidunt augue interdum. In ornare quam viverra orci sagittis eu volutpat odio facilisis.

Velit scelerisque in dictum non consectetur. Elit at imperdiet dui accumsan sit amet. Sodales neque sodales ut etiam sit amet nisl purus. Neque convallis a cras semper auctor neque vitae. Phasellus egestas tellus rutrum tellus pellentesque eu. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Convallis tellus id interdum velit laoreet. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Non nisi est sit amet facilisis magna etiam tempor orci. Nunc sed augue lacus viverra vitae congue eu. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Odio ut sem nulla pharetra diam sit amet nisl. Dictum non consectetur a erat nam at lectus urna duis. Laoreet sit amet cursus sit amet dictum sit. Libero id faucibus nisl tincidunt eget nullam non nisi est. Turpis cursus in hac habitasse.

Risus nullam eget felis eget nunc lobortis mattis aliquam. Elementum sagittis vitae et leo. In est ante in nibh mauris cursus mattis molestie. Pharetra massa massa ultricies mi. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Amet risus nullam eget felis eget nunc lobortis. In cursus turpis massa tincidunt dui ut ornare. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Egestas pretium aenean pharetra magna ac placerat vestibulum. Mauris in aliquam sem fringilla ut morbi tincidunt. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Gravida neque convallis a cras semper auctor neque vitae tempus. Tristique nulla aliquet enim tortor at. In nibh mauris cursus mattis.

Dui id ornare arcu odio ut sem. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Sed blandit libero volutpat sed cras ornare. Aliquam ultrices sagittis orci a scelerisque purus semper eget. In metus vulputate eu scelerisque felis imperdiet proin. Id aliquet risus feugiat in ante metus. Ornare arcu odio ut sem nulla pharetra. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Mauris vitae ultricies leo integer malesuada nunc. Mattis rhoncus urna neque viverra. Feugiat in ante metus dictum at. Urna et pharetra pharetra massa massa ultricies. Ullamcorper malesuada proin libero nunc. Malesuada proin libero nunc consequat. Sit amet risus nullam eget felis eget nunc lobortis mattis. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Et magnis dis parturient montes nascetur.</p>
    </Container>
  </Layout>
)

export default About