import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import theme from "../styles/theme";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";
import Container from '../components/Container';

const img = require('../images/test-img.jpg');

const Article = styled.article`
    margin: 0 auto;
`

const About = () => (
  <Layout>
    <SEO title="Typography" />
    <Container>
        <Article>
            <h1>Castello di Rivoli Museum of Contemporary Art / Fondazione Sandretto Re Rebaudengo</h1>
            <img src={img} alt="test" />
            <p><big>With 1.2 billion <a href="https://www.google.com" target="_blanc">
                Google</a> results, innovation is the omnipresent buzzword that encapsulates
                the processes by which cultures, materialities, and economies interact
                and produce evolutions, constraints, and alternatives that rearticulate
                societies.</big></p>
            <p>

                The human capacity to redesign and effectively intervene in
                environments, technologies, kinships, bodies, and networks is often highly
                delegated to a single term: innovation. However, with such momentous
                prerogatives in the making of the societal, the use of the term innovation
                remains kidnapped by simplified, corporate PR rhetoric. Schumpeter’s
                notion of the entrepreneur as the solo agent that brings invention to
                markets through linear innovation still feeds the naive generalized notion
                of individual designers and entrepreneurs as the sole agents of innovation.
                This is a process that, when carefully observed as it develops in specific
                cases, mobilizes societies at large. It is a process in which non-human
                entities greatly participate, and one in which its players are affected by
                unintended, accidental, and inscrutable interactions.</p>
                <h2>heading 2</h2>
                <p>With 1.2 billion <a href="https://www.google.com" target="_blanc">
                Google</a> results, innovation is the omnipresent buzzword that encapsulates
                the processes by which cultures, materialities, and economies interact
                and produce evolutions, constraints, and alternatives that rearticulate
                societies.
            </p>
            <ul>
                <li>What embodiments of politics—can be mobilized or enacted with/by/
                    through innovation processes?
                </li>
                <li>What is the process by which design and invention emerge as collective
                    realities, exceeding the main stream narratives of individual human
                    entrepreneurism?
                </li>
                <li>
                    By means of what modes of reconstruction or affection are societies
                    and environments transformed by/through/in design?
                </li>
                <li>
                    What is the material dimension of the processes by which
                    techno-societies engage with change?
                </li>
                <li>What is the way innovation processes gain accountability?</li>
            </ul>
            <h3>Heading 3</h3>
            <figure>
                <img src="http://www.jacobresneck.com/wordpress/wp-content/uploads/2016/06/xp_sonoma.jpg" alt="test image"/>
                <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
            </figure>
            <p>With 1.2 billion <a href="https://www.google.com" target="_blanc">
            Google</a> results, innovation is the omnipresent buzzword that encapsulates
            the processes by which cultures, materialities, and economies interact
            and produce evolutions, constraints, and alternatives that rearticulate
            societies. The human capacity to redesign and effectively intervene in
            environments, technologies, kinships, bodies, and networks is often highly
            delegated to a single term: innovation. However, with such momentous
            prerogatives in the making of the societal, the use of the term innovation
            remains kidnapped by simplified, corporate PR rhetoric.
            </p>
            <blockquote cite="https://www.e-flux.com/announcements/253528/innovation-as-it-happens/">
            "innovation is the omnipresent buzzword that encapsulates the processes by
            which cultures, materialities, and economies interact and produce evolutions"<br/>
                <span>- E-flux</span>
            </blockquote>
            <p>Schumpeter’s
            notion of the entrepreneur as the solo agent that brings invention to
            markets through linear innovation still feeds the naive generalized notion
            of individual designers and entrepreneurs as the sole agents of innovation.
            This is a process that, when carefully observed as it develops in specific
            cases, mobilizes societies at large. It is a process in which non-human
            entities greatly participate, and one in which its players are affected by
            unintended, accidental, and inscrutable interactions.</p>
            <h4>Heading 4</h4>
            <p>With 1.2 billion <a href="https://www.google.com" target="_blanc">
            Google</a> results, innovation is the omnipresent buzzword that encapsulates
            the processes by which cultures, materialities, and economies interact
            and produce evolutions, constraints, and alternatives that rearticulate
            societies. The human capacity to redesign and effectively intervene in
            environments, technologies, kinships, bodies, and networks is often highly
            delegated to a single term: innovation.
            <code>
            alert("hello world")

            </code>
            </p>



            <p>However, with such momentous
            prerogatives in the making of the societal, the use of the term innovation
            remains kidnapped by simplified, corporate <acronym title="Promotion">PR </acronym>
            rhetoric. Schumpeter’s
            notion of the entrepreneur as the solo agent that brings invention to
            markets through linear innovation still feeds the naive generalized notion
            of individual designers and entrepreneurs as the sole agents of innovation.
            This is a process that, when carefully observed as it develops in specific
            cases, mobilizes societies at large. It is a process in which non-human
            entities greatly participate, and one in which its players are affected by
            unintended, accidental, and inscrutable interactions.</p>
            <h5>Heading 5</h5>
            <p>With 1.2 billion <a href="https://www.google.com" target="_blanc">
            Google</a> results, innovation is the omnipresent buzzword that encapsulates
            the processes by which cultures, materialities, and economies interact
            and produce evolutions, constraints, and alternatives that rearticulate
            societies. The human capacity to redesign and effectively intervene in
            environments, technologies, kinships, bodies, and networks is often highly
            delegated to a single term: innovation. However, with such momentous
            prerogatives in the making of the societal, the use of the term innovation
            remains kidnapped by simplified, corporate PR rhetoric. Schumpeter’s
            notion of the entrepreneur as the solo agent that brings invention to
            markets through linear innovation still feeds the naive generalized notion
            of individual designers and entrepreneurs as the sole agents of innovation.
            This is a process that, when carefully observed as it develops in specific
            cases, mobilizes societies at large. It is a process in which non-human
            entities greatly participate, and one in which its players are affected by
            unintended, accidental, and inscrutable interactions.</p>
            <h6>Heading 6</h6>
            <p>With 1.2 billion <a href="https://www.google.com" target="_blanc">
            Google</a> results, innovation is the omnipresent buzzword that encapsulates
            the processes by which cultures, materialities, and economies interact
            and produce evolutions, constraints, and alternatives that rearticulate
            societies. The human capacity to redesign and effectively intervene in
            environments, technologies, kinships, bodies, and networks is often highly
            delegated to a single term: innovation. However, with such momentous
            prerogatives in the making of the societal, the use of the term innovation
            remains kidnapped by simplified, corporate PR rhetoric. Schumpeter’s
            notion of the entrepreneur as the solo agent that brings invention to
            markets through linear innovation still feeds the naive generalized notion
            of individual designers and entrepreneurs as the sole agents of innovation.
            This is a process that, when carefully observed as it develops in specific
            cases, mobilizes societies at large. It is a process in which non-human
            entities greatly participate, and one in which its players are affected by
            unintended, accidental, and inscrutable interactions.</p>
        </Article>
    </Container>

  </Layout>
)

export default About