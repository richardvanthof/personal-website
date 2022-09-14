import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Embed from './embed';
import Button from './button';
import theme from '../styles/theme';
import { Subtitle } from './typography';

const { colors, mediaQueries, container } = theme;


const HeaderBase = styled.header`
    display: flex;
    flex-direction: column;
    margin: 0;
    text-decoration: none;
    color: ${colors.black} !important;
    padding: 0em;
    padding-top: clamp(3rem, 7vh, 7rem);
    @media ${mediaQueries.sm} {
      padding: 0em;
      display: grid;
      align-items: end;
      grid-gap: 2vh 1em ;
      grid-template-columns: ${container.md} 2fr 0.5fr 1fr ${container.md};
      grid-template-rows: 20vh auto auto;
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

const HeaderVideo = styled(Embed)`
  order: 0;
  grid-row: 2;
  grid-column: 1/5;
  align-self: center;
`;

const HeaderVideoWrapper = styled.div`
  width: 100%;

  order: -1;
  padding-bottom: 1em;
  padding-top: 5.33em;
  background: ${colors.bgLight};
  @media ${mediaQueries.xs} {
    order: 0;
    grid-row: 3;
    grid-column: 1/5;
  }
  @media ${mediaQueries.sm} {
  }
`;


const HeaderVisual = ({
  video, img, fluid, alt,
}) => {
  if (video) {
    return (
      <HeaderVideoWrapper>
        <HeaderVideo style={{ gridColumn: '1/7' }} src={video} />
      </HeaderVideoWrapper>
    );
  }
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
  h1 {
    margin: 0;
    margin-bottom: 0.3em;
    padding: 0;
  }
  @media ${mediaQueries.sm} {
    padding: 0;
    margin: 0;
  }
`;


const HeaderMetaData = styled.div`
  grid-row: 1;
  grid-column: 4;
  width: 100%;
  margin: 1em;
  *:nth-last-child {
    margin: 0;
    padding: 0;
  }
  span { margin-bottom: 0.33em;};
  @media ${mediaQueries.md}{
    margin: 0;
    grid-row: 1;
    text-align: right;
  }
`;


const PortfolioHeader = ({
  image, fluid, year, alt, length, video, website, repository, title, type, client, description,
}) => (
  <HeaderBase>
    <HeaderTitle>
      <Button back >Back</Button>
      <h2>{title}</h2>
    </HeaderTitle>
    <HeaderMetaData>
    <p>
        <small>{client || 'Autonomous work'} &#8212;  {type}  &#8212;  {year}</small>
      </p>
      {description
        && <p>{description}</p>
      }
      
      
      {/* <span>
        {year && <h6>{year}</h6>}
        
        {length && (
        <p>
          {length}
          &nbsp;min.
        </p>
        )}
      </span> */}
      {/* {website && <Button external title="Website" to={website} />} */}
    </HeaderMetaData>
    <HeaderVisual fluid={fluid} video={video} img={image} alt={alt} />
    
  </HeaderBase>
);

PortfolioHeader.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  video: PropTypes.string,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  length: PropTypes.string,
  client: PropTypes.string,
  description: PropTypes.string,
  website: PropTypes.string,
  repository: PropTypes.string,
  fluid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  type: PropTypes.string.isRequired,
};

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  cta: PropTypes.string,
};

HeaderVisual.propTypes = {
  video: PropTypes.string,
  img: PropTypes.string.isRequired,
  fluid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  alt: PropTypes.string.isRequired,
};

HeaderVisual.defaultProps = {
  video: null,
};

PortfolioHeader.defaultProps = {
  video: null,
  website: null,
  repository: null,
  length: null,
  client: null,
  description: null,
};

HeaderTitle.defaultProps = {
  cta: null,
};

export default PortfolioHeader;
