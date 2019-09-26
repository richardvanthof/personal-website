import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Embed from './embed';
import theme from '../styles/theme';
// https://www.youtube.com/embed/0ItZhpv4pto
const { colors, container, mediaQueries } = theme;
const HeaderBase = styled.header`
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-bottom: 1em;
    text-decoration: none;
    color: ${colors.black} !important;
    align-items: center;
    @media ${mediaQueries.xs} {
    display: grid;
    grid-template-columns: ${container.sm} 1fr 1fr 1fr ${container.sm};
    grid-template-rows: auto auto;
    }
    @media ${mediaQueries.md} {
    grid-template-columns: ${container.md} 1fr 1fr 1fr ${container.md};
    }
    @media ${mediaQueries.lg} {
    grid-template-columns: ${container.lg} 1fr 1fr 1fr ${container.lg};
    }
    @media ${mediaQueries.xl} {
    grid-template-columns: ${container.xl} 1fr 1fr 1fr ${container.xl};
    }
 `;

const HeaderFigure = styled.figure`
  background-image: url(${props => props.src});
  background-size: cover;
  grid-column: 1/7;
  grid-row: 1;
  width: 100%;
  height: 90vh;
  min-height: 30em;
  background-position: center;
`;

const HeaderVideo = styled(Embed)`
  width: 100%;
`;

const HeaderVideoWrapper = styled.div`
  grid-column: 1/7;
  width: 100%;
  background: ${colors.bgLight};
  margin-top: 5em;
  @media ${mediaQueries.sm} {
    margin-top: 0;
    padding: 10vh;
  }
`;

const HeaderVisual = ({ video, img }) => {
  if (video) {
    return (
      <HeaderVideoWrapper>
        <HeaderVideo style={{ gridColumn: '1/7' }} src={video} />
      </HeaderVideoWrapper>
    );
  }
  return (
    <HeaderFigure src={img}>
      {/* <img src={img} alt={alt} /> */}
    </HeaderFigure>
  );
};

const HeaderTitleBase = styled.div`
    grid-column: 2;
    grid-row: 2;
    padding: 2em 1em;
`;

const HeaderTitle = ({ title, client, children }) => (
  <HeaderTitleBase>
    <h3>{title}</h3>
    <p>{client}</p>
    {children}
  </HeaderTitleBase>
);

const HeaderDescription = styled.p`
    grid-column: 3/5;
    grid-row: 2;
    padding: 2em 1em;
    @media ${mediaQueries.sm} {
      column-count: 2;
      column-gap: 2em;
    }

`;

const PortfolioHeader = ({
  image, alt, video, title, client, description, children,
}) => (
  <HeaderBase>
    <HeaderVisual video={video} img={image} alt={alt} />
    <HeaderTitle title={title} client={client}>
      {children}
    </HeaderTitle>
    <HeaderDescription>
      {description}
    </HeaderDescription>
  </HeaderBase>
);

PortfolioHeader.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

HeaderVisual.propTypes = {
  video: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default PortfolioHeader;
