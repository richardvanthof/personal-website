import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Flipper, Flipped } from 'react-flip-toolkit';
// import P5Wrapper from 'react-p5-wrapper';
import SEO from '../components/seo';
import Container from '../components/container';
import Footer from '../components/footer';

const thumbnail = 'https://images.artnet.com/aoa_lot_images/SpecialSale/469/SaleBanner/BANNER-Brandt_Elephant%20Herd.jpg';
const cover = '../images/img/work/richardhotline/richardhotline-6.jpg';

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: whitesmoke;
    transition: 0.3s ease-in-out;
`;

const SquareBase = styled.div`

    transition: 0.25s ease-in-out;
    ${props => (props.state ? `
        width: 100vw;
        height: 100vh;
        background:  powderblue;
    ` : `
        width: 10em;
        height: 10em;
        background: purple;
    `)}
`;

const Content  = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;
    padding: 1em;
    position: absolute;
    top: 0;
    left: 0;

`;

const Thumbnail = styled.div`

    width: 25em;
    height: 15em;
    background: white;
    padding: 1em;
    margin: 0.5em;
    /* box-shadow: -1px 10px 30px -6px rgba(0,0,0,0.075);
    &:hover {
        transition: 0.1s ease-in-out;
        transform: scale(1.05);
        box-shadow: -1px 10px 90px -6px rgba(0,0,0,0.2);
    } */
`;

const Post = (props) => {
  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullScreen = () => setFullScreen(prevState => !prevState);
  return (
    <Flipper flipKey={fullScreen}>
      {fullScreen ? (
          <Flipped flipId="post">
          <Content onClick={toggleFullScreen}>
          <Flipped inverseFlipId="post">
              <Container>

                      <h3>Richardhotline</h3>
                      <p>2018</p>
                      <img src={thumbnail} alt="richard hotline"/>
              </Container>
              </Flipped>
          </Content>
      </Flipped>
      ) : (

        <Flipped flipId="post">
        <Thumbnail onClick={toggleFullScreen}>
        <Flipped inverseFlipId="post">
            <>
              <h3>Richardhotline</h3>
              <p>2018</p>
              <img src={thumbnail} alt="richard hotline"/>
              </>
              </Flipped>
        </Thumbnail>
    </Flipped>
      )}
    </Flipper>
  );

};

const global = css`
    .square {
        width: 10em;
        height: 10em;
    }
`;

const Playground = () => (

  <Main>
      <Post />
  </Main>
);

export default Playground;
