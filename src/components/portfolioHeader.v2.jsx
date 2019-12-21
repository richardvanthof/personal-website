import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Embed from './embed';
import Button from './button';
import theme from '../styles/theme';
import { Subtitle } from './typography';

const { colors, mediaQueries } = theme;


const HeaderBase = styled.header`
    display: flex;
    flex-direction: column;
    margin: 0;
    text-decoration: none;
    color: ${colors.black} !important;
    padding: 0em;
    align-items: center;
    @media ${mediaQueries.xs} {
      margin: 0 5vw;
      padding-top: 22vh;
      display: grid;
      grid-gap: 7vh 2em;
      grid-template-columns: 0.5fr 2fr 2fr 1fr;;
      grid-template-rows: 1fr 0.25fr auto;
      align-items: start;
    }
 `;

const HeaderFigure = styled.figure`
  width: 100%;
  order: -1;
  height: 66vh;
  max-height: 30em;
  margin: 0;
  box-shadow: inset 0px -4px 17px -1px rgba(50, 50, 50, 0.4);
  & > * {
    height: 100%;
    object-fit: cover;
  }
  &:before {
    content: '';
    width: 100vw;
    position: absolute;
    height: 10em;
    background: white;
    background: linear-gradient(0deg, rgba(0,212,255,0) 0%, rgba(255,255,255,0.3) 100%);;
    z-index: 8;
    @media ${mediaQueries.xs} {
      background: none;
    }
  }
  @media ${mediaQueries.xs} {
    box-shadow: none;
    height: auto;
    max-height: none;
    order: 0;
    grid-row: 3;
    grid-column: 2/5;
  }
`;

const HeaderVideo = styled(Embed)`
  order: 0;
  grid-row: 3;
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
  grid-row: 1/3;
  grid-column: 1/4;
  align-items: start;
  padding: 2em 1em 0;
  z-index: 2;
  @media ${mediaQueries.xs} {
    padding: 0;
  }
  @media ${mediaQueries.md} {
    grid-column 1/3;
  }
`;

const HeaderDescription = styled.div`
  @media ${mediaQueries.xs} {
    margin-left: 0.66em;
  }
`;

const HeaderMetaData = styled.div`
  grid-row: 1;
  grid-column: 4;
  align-self: center;
  margin: 2em 1em;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  padding: 0 1.11em;
  @media ${mediaQueries.md}{
    min-height: 15vh;
    grid-row: 2;
  }
`;


const PortfolioHeader = ({
  image, fluid, year, alt, length, video, website, repository, title, type, client, description,
}) => (
  <HeaderBase>
    <HeaderVisual fluid={fluid} video={video} img={image} alt={alt} />
    <HeaderTitle>
      {client
        && <Subtitle>{client}</Subtitle>
      }
      {title
        && <h1>{title}</h1>
      }
      {description
        && <HeaderDescription className="big light">{description}</HeaderDescription>
      }
    </HeaderTitle>
    <HeaderMetaData>
      {year && <h6>{year}</h6>}
      {type && <p>{type}</p>}
      {length && <p>{length}</p>}
      {website && <Button external title="Website" to={website} />}
      {repository && <Button external title="Source Files" to={repository} />}
    </HeaderMetaData>
  </HeaderBase>
);

PortfolioHeader.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  video: PropTypes.string,
  title: PropTypes.string.isRequired,
  client: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  cta: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  fluid: PropTypes.object.isRequired,
};

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  cta: PropTypes.string
};

HeaderVisual.propTypes = {
  video: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  fluid: PropTypes.object.isRequired,
};

PortfolioHeader.defaultProps = {
  video: null,
  client: null,
  description: null,
  children: null,
  cta: null,
};

HeaderTitle.defaultProps = {
  cta: null,
};
export default PortfolioHeader;
