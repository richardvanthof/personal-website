import React from 'react';
import styled from 'styled-components';
import DefaultLayout from '../layouts/defaultLayout';
import SEO from '../components/seo';
import theme from '../styles/theme';
import richard from '../static/img/richard.jpg';

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
`;


const Content = styled.figure`
  grid-column: 3;
`;

const About = () => (
  <DefaultLayout>
    <SEO title="About" />
    <Grid>
      <Image>
        <img src={richard} alt="Richard" />
      </Image>
      <Content>
        <h1>
Richard
          <br />

van &apos;t Hof
        </h1>
        <h6>Audiovisual Maker & digital artist</h6>
        <p>
          <br />
          <br />
        Richard van &apos;t Hof is an audiovisual
        maker and front-end hacker. In his practice he
        thinks a lot about how to manipulate the things
        around him. That&apos;s why he really likes the
        enveloping nature of film. Richard also has
        a fascination for how software and digital
        devices can be used as a canvas without having
        to rely onto the framework of someone else. This
        is because the digital world is now more part of
        our real world than ever. This results in his
        work being a mixture of graphic design, film
        en programming.
        </p>
        <p>
        Richard has been working with film since 2011.
        Currently he is a student audiovisual design
        at the Willem de Kooning Academy in Rotterdam,
        the Netherlands. He has also been an art-director
        and front-end developer at

          <a href="https://www.bytecode.nl">
        Bytecode Digital Agency
          </a>

where he mainly does projects with React.
        </p>
      </Content>
    </Grid>
  </DefaultLayout>
);

export default About;
