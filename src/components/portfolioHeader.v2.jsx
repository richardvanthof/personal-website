import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Button from './button';
import theme from '../styles/theme';

const { colors, mediaQueries, container } = theme;


const HeaderBase = styled.header`
    display: flex;
    flex-direction: column;
    margin: 0;
    text-decoration: none;
    color: ${colors.black} !important;
    padding: 0em;
    padding-top: clamp(3rem, 7vh, 10rem);
    @media ${mediaQueries.sm} {
      padding: 0em;
      display: grid;
      align-items: end;
      grid-gap: 10vh 1em ;
      grid-template-columns: ${container.md} 2fr 0fr 1fr ${container.md};
      grid-template-rows: 30vh auto auto;
    }
    @media ${mediaQueries.md} {
      grid-template-columns: ${container.md} 2fr 4em 30ch ${container.md};
    }
 `;

const HeaderFigure = styled.figure`
  width: 100%;
  height: 90vh;
  max-height: 30rem;
  margin: 0;
  box-shadow: inset 0px -4px 17px -1px rgba(50, 50, 50, 0.4);
  overflow: hidden;
  & > * {
    height: 100%;
    object-fit: cover;
  }
  &:before {
    content: '';
    width: 100vw;
    position: absolute;
    background: white;
    background: linear-gradient(0deg, rgba(0,212,255,0) 0%, rgba(255,255,255,0.3) 100%);;
    z-index: 8;
    max-height: 30rem;
    @media ${mediaQueries.xs} {
      background: none;
    }
  }
  @media ${mediaQueries.xs} {
    max-height: none;
    box-shadow: none;
    grid-row: 2;
    grid-column: 1/6;
  }
`;


const HeaderVisual = ({
  img, fluid, alt,
}) => {
  if (img) {
    return (
      <HeaderFigure>
        <img src={fluid} alt={alt} />
      </HeaderFigure>
    );
  }
  return (
    <HeaderFigure>
      <Img fluid={fluid} alt={alt} />
    </HeaderFigure>
  );
};

const HeaderTitle = styled.div`
  grid-column: 2;
  padding: 2em 1em 0;
  z-index: 2;
  margin: 0 1em;
  padding: 0;
  h2 {
    margin: .66em 0 .33em 0;
  }
  @media ${mediaQueries.sm} {
    padding: 0;
    margin: 0;
    max-width: 50ch;
  }
`;


const PortfolioHeader = ({
  image, fluid, alt, title,
}) => (
  <HeaderBase>
    <HeaderTitle>
      <Button back>Back</Button>
      <h2>{title}</h2>
    </HeaderTitle>

    <HeaderVisual fluid={fluid} img={image} alt={alt} />

  </HeaderBase>
);

PortfolioHeader.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fluid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  cta: PropTypes.string,
};

HeaderVisual.propTypes = {
  img: PropTypes.string.isRequired,
  fluid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  alt: PropTypes.string.isRequired,
};

HeaderTitle.defaultProps = {
  cta: null,
};

export default PortfolioHeader;
