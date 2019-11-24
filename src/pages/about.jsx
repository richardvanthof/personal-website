import React from 'react';
import styled from 'styled-components';
import DefaultLayout from '../layouts/defaultLayout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import theme from '../styles/theme';
import HeroHeader from '../components/heroHeader';
import Gallery from '../components/gallery';
import { Big, Small } from '../components/typography';

const { mediaQueries, container } = theme;

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 7vh;
  align-items: center;
  margin: 1em;
  @media ${mediaQueries.sm} {
    margin: 0;
    display: grid;
    grid-template-columns: ${container.sm} 1fr 1fr ${container.sm};
    grid-template-rows: auto;
    & > * {
       flex-basis: 50%;
       margin: 2em;
    }
  }
  @media ${mediaQueries.md} {
    grid-template-columns: ${container.md} 1fr 1fr ${container.md};
  }
  @media ${mediaQueries.lg} {
    grid-template-columns: ${container.lg} 1fr 1fr ${container.lg};
  }
  @media ${mediaQueries.xl} {
    grid-template-columns: ${container.xl} 1fr 1fr ${container.xl};

  }
`;

const Image = styled.figure`
  grid-column: 1/3;
  display: block;
`;


const Content = styled.figure`
  grid-column: 3;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  align-items: center;
  & > * {
    max-width: 30em;
  }
`;

const Header = styled.header`

  overflow: hidden;
  margin: 1em;
  height: 30em;
  @media ${mediaQueries.xs} {
    margin: 2em;
    height: 75vh;
  }
  &>*{
    height: 100%;
  }
`;

const About = ({ data }) => (
  <DefaultLayout>
    <SEO title="About" />
    <HeroHeader/>
    {/* <Header>
      <Img fluid={data.file.childImageSharp.fluid} />
    </Header> */}
    <TextContainer>
      <h6>Audiovisual maker & digital artist</h6>
      <h2>About Richard</h2>

    <p>Richard van 't Hof is een 19-jarige Rotterdamse audiovisueel maker en digitaal artiest die op het snijvlak zit van film, design en code. Sinds hij op zijn 11e leerde dat je door twee bewegende beelden aan elkaar te plakken nieuwe betekenis kon creeëren was hij gefascineerd door absorberende waarde van film en kunst in het algemeen. Zijn werk richt zich ook vaak op de vraag van controle. Vooral in de zin van ‘hoeveel controle kan ik hebben op mijn omgeving/de ruimte om mij heen’ maar ook ‘hoeveel controle kan ik hebben op mijzelf.’</p>

<p>Hij werkt vaak vanut een autonome, theoretische houding waarbij hij het onderwerp oneindig uitpluist. In deze theoretische chaotiek maakt hij onverwachte verbanden. Met deze verbanden gaat hij dan visueel spelen. Vaak mixt hij hierbij analoog en digitaal, in zijn films werkt hij daarom vaak met collage en miniaturen. Door de onberekenbaarheid van analoog komen er onverwachtere resultaten uit.</p>

<p>De laatste jaren richt Richard zich ook steeds meer op de development. De digitale wereld omringt ons immers steeds meer. Als je die beheerst heb je ook een magische kracht in de echte wereld. Zodat hij buiten de kaders van het browservenster kan denken, miljoenen mensen bij elkaar kan brengen door een balon of met zijn brein een auto kan besturen. Hij wil de digitale wereld als canvas gebruiken en daar zijn audiovisuele kennis in verwerken. Want als je de digitale wereld kan bespelen, heb je ook in de echte wereld een magische kracht.</p>
    </TextContainer>

  </DefaultLayout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "richard.jpg" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default About;
